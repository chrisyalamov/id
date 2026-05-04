import { Footer } from '@components/footer.tsx'
import { SingleColumn } from '@layouts/single-column.tsx'
import { createFileRoute } from '@tanstack/react-router'
import { formatDate } from '../-format-date.ts'
import { ArticleRoot, ArticleSectionContent, ArticleSidebarBlock, ArticleSidebarStickyBlock, cn_prose } from '@/components/editorial/article.tsx'
import { Codeblock } from "@components/codeblock.tsx";
import { BlockDivider } from "@components/divider.tsx";

export const Route = createFileRoute('/library/_posts/multitenancy')({
    component: RouteComponent,
})

function RouteComponent() {
    return <>
        <SingleColumn columnOptions={{ variant: 'sm', centre: true }} className='@container/article'>
            <div className='min-h-24 lg:min-h-44 flex items-end border-b border-neutral-500/20 py-3 font-mode-display'>
                <h1 className='text-2xl'>
                    <span className='font-semibold'>Approaches to Multitenancy </span>
                    <span className='font-medium opacity-50' suppressHydrationWarning>{formatDate(new Date("2025-08-18"))} </span>
                </h1>
            </div>
            <ArticleRoot className='py-5'>
                <ArticleSidebarStickyBlock className='font-medium text-balance'>
                    <p>Notes on creating multi-tenant architectures and systems</p>
                    <p className='opacity-50 my-4 mb-12 underline decoration-dotted underline-offset-2'>Christian Yalamov</p>
                </ArticleSidebarStickyBlock>
                <ArticleSectionContent className={cn_prose}>
                    <p>
                        Software-as-a-Service (SaaS) has emerged as a popular distribution model for software.
                        SaaS is deployed and hosted by the vendor for use by its customers— we tend to refer to these as 'tenants.' A tenant can represent something like a client or workspace. Each tenant has its own data.</p>
                    <p>
                        Storing everyone's data together, but making it seem as if your application runs independently for every tenant can be challenging. This is achieved by <strong>logically separating</strong> tenants' data, and making sure they can only see and manipulate the data that relates to them.</p>
                    <p>
                        Separating your application's data and behaviour for different tenants is typically called multi-tenancy. The best multi-tenancy architecture will depend on a lot of factors to do with the nature and design of your application.
                    </p>
                    <p>
                        Brief note: <strong>This is not a tutorial</strong>. There are some code examples in this post, but they are purely for demonstration purposes. If you are implementing a multi-tenant architecture, you will have to worry about a lot more than just your database. A multi-tenant model will affect your whole infrastructure and you will need to think about various architectural considerations (e.g. load balancing, sharding, replication) and challenges (e.g. noisy neighbour problem). This post is just a summary of some of the patterns or approaches you are likely to come across.
                    </p>
                    <h2>
                        Approach I: Application-level filtering
                    </h2>
                    <p>
                        A common&nbsp;way of going about multi-tenancy is to just filter all records, based on a field which indicates the tenant they belong to (simply put, use a <code>WHERE</code> clause to filter <code>tenantID=$currentTenant</code>).
                    </p>
                    <p>
                        The great thing about this approach is that it’s easy to implement. However you run queries, and whatever your database, the level of added complexity won’t be too high.
                    </p>
                    <p>
                        <strong>Example 1:</strong> Adding the check manually, using a parametrised query.
                    </p>
                    <Codeblock
                        code={`SELECT * FROM orders AS o WHERE o.tenant_id = $tenantID`}
                        language="sql"
                        id="example1"
                        route={Route}
                    />
                    <p>
                        <strong>Example 2:</strong> Using DrizzleORM (ORM for Javascript), manually add a filter
                    </p>
                    <Codeblock
                        code={`const results = db.select().from(orders).where(eq(orders.tenant, currentTenant))`}
                        language="ts"
                        id="example2"
                        route={Route}
                    />
                    <p>
                        <strong>Example 3:</strong> Using DrizzleORM (ORM for Javascript), create a higher-order function which enhances queries by adding a tenant filter
                    </p>
                    <Codeblock
                        route={Route}
                        language="ts"
                        id="example3"
                        code={`
                        function withTenantFilter(query, tenant, table) {
	// the tenant can either be passed to this function,
	// or dynamically extracted, e.g. based on data
	// in an HTTP request
	return query.$dynamic().where(eq(table.tenant, tenant))
}

const resultsWithTenantFilter = await withTenantFilter(
    db.select().from(orders),
    currentTenant,
    orders
)`.trim()
                        }
                    />
                    <blockquote>
                        Interesting alternative approach proposed by @<a href="https://github.com/rsslldnphy">rsslldnphy</a>: create a function which returns a table with an applied filter:

                        <Codeblock
                            route={Route}
                            id="alternative-approach"
                            language="ts"
                            code={`
                                // Function which produces an already filtered table
export const person = (tenant: {id: string }) =>
    db
        .select()
        .from(s.person)
        .where(eq(s.person.tenantId, tenant.id))
        .as("person");

    // ...

const people = await db
    .select()
    .from(person(tenant))
    .where(like(person(tenant).name, "Croenberg"))
    );
                                `.trim()}
                            containerProps={{
                                className: "-mx-(--housing-padding-x) rounded-none! px-(--housing-padding-x)"
                            }}
                        />
                        <p>
                            See <a href="https://github.com/drizzle-team/drizzle-orm/discussions/1539#discussioncomment-7639604">this discussion on GitHub</a> for context.
                        </p>
                    </blockquote>
                    <p>
                        <strong>Example 4:</strong> Using Entity Framework Global Filters (.NET)</p>
                    <Codeblock
                        route={Route}
                        id="example4"
                        language="cs"
                        code={`
public class OrdersDbContext : DbContext
{
    private readonly string _tenantId;

    // The TenantProvider is injected as a scoped service
    // which detects the tenant (e.g. based off the request headers)
    // and supplies it to the DbContext
    public OrdersDbContext(DbContextOptions<OrdersDbContext> options, TenantProvider tenantProvider)
    : base(options)
    {
        _tenantId = tenantProvider.TenantId;
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Applying a filter on every query on the Orders table
        modelBuilder.Entity & <Order>().HasQueryFilter(o => o.TenantId == _tenantId);
    }
}
                                `.trim()}
                    />
                    <h2>
                        Approach II: Row-Level Security
                    </h2>
                    <p>
                        Some database products offer a feature called Row-Level Security (RLS). This allows you to set policies which can exclude particular rows, depending on whether they meet certain criteria. Postgres and Microsoft SQL Server are the two main products which offer this functionality.
                    </p>
                    <p>
                        This is similar to how we implemented application-level filtering using the Entity Framework Global Filters in .NET—&nbsp;except, this is now happening on the database side.
                    </p>
                    <p>
                        We can configure such a policy in Postgres like so:
                    </p>
                    <Codeblock
                        route={Route}
                        id="pg-rls-1"
                        language="sql"
                        code={`
CREATE POLICY orders_policy
ON orders
USING (tenant_id::TEXT = current_setting("context.tenant"));
                                `.trim()}
                    />
                    <p>
                        Here, we’re only allowing rows to be visible if their<code>tenant_id</code> matches the <code>context.tenant</code> configuration parameter.
                    </p>

                    <p>
                        You may wonder how we set this parameter value in the first place. In Postgres, this is done either with <code>set_config(key, value, is_local)</code> or the SQL syntax <code>SET [LOCAL] key to value</code>. A setting being local means that it is only scoped to the current transaction—&nbsp;after the transaction ends, the setting no longer exists. We can do this at the start of the transaction:
                    </p>
                </ArticleSectionContent>
                <ArticleSidebarBlock className={`${cn_prose} mt-5`}>
                    <blockquote>
                        <strong>NB</strong> Postgres has specific requirements for configuration parameters. Refer to <a href="https://www.postgresql.org/docs/current/config-setting.html">Chapter 20.1 of the official documentation</a>.
                    </blockquote>
                </ArticleSidebarBlock>
                <ArticleSectionContent className={`${cn_prose} mt-5`}>
                    <Codeblock
                        route={Route}
                        id="pg-rls-2"
                        language="sql"
                        code={`
SET LOCAL "context.tenant" TO 'ACME Corp'
                                `.trim()}
                    />
                    <p>
                        and then have the value available until the end. You might also wonder why we’re now doing the check on the database, instead of the application—&nbsp;what difference does it make?
                    </p>
                    <p>
                        One reason is certainty. With the first approach (filtering at the application level), it is possible to forget to add a <code>WHERE</code> clause somewhere, leaving data unfiltered.
                    </p>
                    <p>
                        Another reason is to do with your infrastructure. Application-level filtering is done on the server, whose job it is to query your database and send a response to the client. But what if you didn’t have a server? With platforms like Supabase, you can get away with having most of your application logic purely on your database— and with Postgres, that’s actually quite practical! Extensions like postgREST, pgJWT (and more) make it easy to add enough features to your DB that you no longer need a backend application server.
                    </p>
                    <p>
                        However, when you don’t have a server where you can enforce tenants’ data separation, and you let your users directly access your database, Row-Level Security can still help you achieve isolated multi-tenancy, by moving the logic over to the database.
                    </p>
                    <h2>
                        Approach III: Infrastructure replication
                    </h2>
                    <p>
                        In most cases, multi-tenant products place all tenants together on the same, shared infrastructure. But there are other cases, where it might make more sense to create separate deployments on dedicated infrastructure for individual clients.
                    </p>
                    <p>
                        Using technologies like Docker and IaC, you can easily deploy reproducible sets of components for each tenant. Microsoft refers to this pattern as ‘deployment stamps.’
                    </p>
                    <p>
                        Which components you replicate will again depend on your unique case. For instance, you may only need to create separate databases, while keeping application servers shared. Or, you may wish to have dedicated application servers for compliance reasons, but retain some services (like authentication) shared between everyone.
                    </p>
                    <p>
                        Separating infrastructure for tenants is also not trivial to implement, and it makes many aspects of your system design more complex. Managing database schemas can become more complicated, as you are no longer working with one database for the whole system, but one database <strong>per tenant</strong>. Database migrations may succeed for some tenants (but not all), putting you in a position where the data model is inconsistent across tenants (the kind of situation that requires manual intervention).
                    </p>
                    <p>
                        If you are considering this deployment pattern, it’s also important to note it carries much higher costs per-tenant, than hosting everyone on shared infrastructure.
                    </p>
                    <BlockDivider />
                    <p>
                        When offering hosted software to different customers, you will have to make a lot of not-straightforward decisions about the design of your systems. In this article, three approaches are described for achieving multi-tenancy are described. None of them are likely to be a perfect fit for your use case. Your solution will probably include a mixture of different patterns and infrastructure components.
                    </p>
                </ArticleSectionContent>
            </ArticleRoot>
        </SingleColumn>
        <Footer />
    </>
}
