import { ArticleFullSpread, ArticleRoot, ArticleSectionContent, ArticleSectionHeading, cn_prose } from '@components/article.tsx'
import { DisclosureBlock, DisclosuresPanel } from '@components/disclosures.tsx'
import { Divider } from '@components/divider.tsx'
import { Footer } from '@components/footer.tsx'
import { BasicPropertyBlock, MRZPropertyBlock } from '@components/project-details.tsx'
import { ProjectHeaderContainer } from '@components/project-header.tsx'
import { ShotContainer } from '@components/showcase.tsx'
import { ColumnLayout } from '@layouts/column.tsx'
import { createFileRoute } from '@tanstack/react-router'
import { FiArrowDownLeft } from 'react-icons/fi'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import img_problems from "./problems.png"
import img_competition from "./competition.png"
import img_phone_1 from "./phone-1.png"
import img_phone_2 from "./phone-2.png"
import img_phone_3 from "./phone-3.png"
import img_phone_4 from "./phone-4.png"
import vid_scan_demo from "./scan_demo.mp4"
import img_erd from './erd.png'
import img_seq1 from './seq_1.png'
import img_seq2 from './seq_2.png'
import img_screenshot_0 from './screenshot0.png'
import img_screenshot_1 from './screenshot1.png'
import img_screenshot_2 from './screenshot2.png'
import img_screenshot_3 from './screenshot3.png'
import img_screenshot_4 from './screenshot4.png'
import img_screenshot_5 from './screenshot5.png'
import img_screenshot_6 from './screenshot6.png'

export const Route = createFileRoute('/archive/_items/CEPL-carder')({
    component: RouteComponent,

})

const Introduction = <>
    <ArticleSectionHeading>
        Introduction
    </ArticleSectionHeading>
    <ArticleSectionContent className={cn_prose}>
        <h3 className='leading-tight mb-10 text-xl font-semibold text-left'>
            Carder is an audience engagement platform for events and conferences which supports multi-tenancy and is designed with a cloud-first architecture.
        </h3>
        <p>
            I built Carder as part of a university project. The assignment had two parts: to come up with an idea for a digital business, and analyse its viability; and to develop (part of) the digital product or platform.
            My primary focus was on developing the <strong>licensing and billing</strong> system, and underlying services such as <strong>events and attendee management</strong>, the <strong>multi-tenant architecture of the platform</strong>, <strong>authentication</strong>, and <strong>integrations with a payments processor</strong>.
        </p>
        <p>
            Below, I talk about:
        </p>
        <div className='pl-4'>
            my analysis of the <a href="#proposition">business proposition</a><FiArrowDownLeft className='inline h-[1lh]' />;<br />
            the process of <a href="#prototyping">ideation and prototyping</a><FiArrowDownLeft className='inline h-[1lh]' />; <br />
            and the <a href="#technical">technical implementation</a><FiArrowDownLeft className='inline h-[1lh]' />.
        </div>
    </ArticleSectionContent>
</>

const Background = <>
    <ArticleSectionHeading id='proposition'>
        Background
    </ArticleSectionHeading>
    <ArticleSectionContent className={cn_prose}>
        <p>
            Events in the MICE sector (Meetings, Incentives, Conferences, and Exhibitions) have many areas in which technology can be used to improve the attendee experience. When carrying out my business analysis, a few issues became apparent. Attendees often had connectivity problems inside venues; and while many of them use social media to engage with events (e.g. LinkedIn), they found it to be an impersonal/inauthentic way of networking.
        </p>
        <p>
            For event organisers, the biggest challenges were getting <strong>access to quality data</strong> and <strong>reducing paper waste</strong> (e.g. from brochures and event materials).
        </p>
    </ArticleSectionContent>
    <ArticleFullSpread className='mt-6 mb-2 container'>
        <ShotContainer>
            <PhotoView src={img_problems}>
                <div>
                    <img src={img_problems} className="object-contain cursor-pointer snap-center rounded elevation-1" />
                </div>
            </PhotoView>
            <PhotoView src={img_competition}>
                <div>
                    <img src={img_competition} className="object-contain cursor-pointer snap-center rounded elevation-1" />
                </div>
            </PhotoView>
        </ShotContainer>
    </ArticleFullSpread>
    <ArticleSectionContent className="text-xs font-medium text-current/60 mt-2 mb-6 @lg/article:[grid-column:2]">
        Excerpts from the pitch deck, outlining and justifying the business proposition.
    </ArticleSectionContent>

</>

const PrototypingIdeation = <>
    <ArticleSectionHeading id='prototyping'>
        Prototyping and ideation
    </ArticleSectionHeading>
    <ArticleSectionContent className={cn_prose}>
        <p>
            Once the business proposition was validated, I began to prototype various parts of the platform. These prototypes were created in Figma, which allowed me to quickly iterate and to get a better idea of how the data should be structured behind the scenes. Thinking about user journeys and their needs revealed the need for some adjustments to the database schema: for instance, I had to think about the best way to implement polymorphic relationships between various entities.
        </p>
    </ArticleSectionContent>
    <ArticleFullSpread className='mt-6 mb-2 container'>
        <ShotContainer>
            <PhotoView src={img_phone_1}>
                <div>
                    <img src={img_phone_1} className="object-contain cursor-pointer snap-center rounded elevation-1 max-h-[30rem]" />
                </div>
            </PhotoView>
            <div>
                <video src={vid_scan_demo} className="cursor-pointer rounded-md overflow-hidden elevation-1 snap-center" autoPlay muted playsInline loop />
            </div>
            <PhotoView src={img_phone_2}>
                <div>
                    <img src={img_phone_2} className="object-contain cursor-pointer snap-center rounded elevation-1 max-h-[30rem]" />
                </div>
            </PhotoView>
            <PhotoView src={img_phone_3}>
                <div>
                    <img src={img_phone_3} className="object-contain cursor-pointer snap-center rounded elevation-1 max-h-[30rem]" />
                </div>
            </PhotoView>
            <PhotoView src={img_phone_4}>
                <div>
                    <img src={img_phone_4} className="object-contain cursor-pointer snap-center rounded elevation-1 max-h-[30rem]" />
                </div>
            </PhotoView>
        </ShotContainer>
    </ArticleFullSpread>
    <ArticleSectionContent className="text-xs font-medium text-current/60 mt-2 mb-6 @lg/article:[grid-column:2]">
        Concepts and prototypes.
    </ArticleSectionContent>
</>

const Technical = <>
    <ArticleSectionHeading id='technical'>
        Technical implementation
    </ArticleSectionHeading>
    <ArticleSectionContent className={cn_prose}>
        <p>
            The component developed for the assignment was Carder's licensing system. This comprised of a back-end API (written in TypeScript, using the Hono.js framework, deployed on Deno Deploy) and a React.js front-end (Single Page Application). The database used for the project was Postgres (deployed on Neon).
        </p>
        <p>
            There were two aspects of development that were challenging:
            <ul>
                <li>ensuring the system is secure against CSRF attacks</li>
                <li>representing complex relationships (due to polymorphism in the business logic)</li>
            </ul>
        </p>
        <h3>CSRF Prevention</h3>
        <p>
            Since some operations in the system could trigger high-stakes actions (e.g. initiating a payment), it was important to ensure that these operations could be linked to user intent. Cross-Site Request Forgery is an attack vector where a malicious 3rd party tricks a user into a performing an action (e.g. by making them make an unintended authetnicated request to an endpoint).
        </p>
        <p>
            To defend against this, I implemented "intent continuity tokens" (i.e. the <a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html">"synchroniser token pattern"</a>). These were dispensed when a user navigates to an interface for a high-stakes action and attached to the request to the respective endpoint.
        </p>
    </ArticleSectionContent>


    <ArticleFullSpread className='mt-6 mb-2 container'>
        <ShotContainer className='col-span-full'>
            <PhotoView src={img_seq1}>
                <div>
                    <img src={img_seq1} className="object-contain cursor-pointer snap-center rounded elevation-1 max-h-[30rem]" />
                </div>
            </PhotoView>
            <PhotoView src={img_seq2}>
                <div>
                    <img src={img_seq2} className="object-contain cursor-pointer snap-center rounded elevation-1 max-h-[30rem]" />
                </div>
            </PhotoView>
        </ShotContainer>
    </ArticleFullSpread>

    <ArticleSectionContent className="text-xs font-medium text-current/60 mt-2 mb-6 @lg/article:[grid-column:2]">
        Sequence diagrams which show how intent continuity tokens are used to block requests that the user has not initiated themselves.
    </ArticleSectionContent>

    <ArticleSectionContent className={cn_prose}>
        <h3>Representing polymorphic relationships</h3>
        <p>
            In Carder, there are cases where a table may have a relationship to a record that could belong to different tables. An example of this is the permissions management system. One access policy may apply to an event in the <code>events</code> table; another access policy may apply to a document in the <code>documents</code> table. This is called <strong>polymorphism</strong>.
        </p>
        <p>
            Representing polymorphism in a relational datbase is challenging. If we want to retain relational integrity protections by the database (by using foreign keys), we will end up with a "wide table." Each row would have a lot of empty fields for foreign keys to every type of entity that it can be associated with. This is a very rigid approach. Instead, we can use only two fields— a discriminator, which indicates which table the target record is in; and the ID of the record being referenced.
        </p>
    </ArticleSectionContent>


    <ArticleFullSpread className='mt-6 mb-2 container'>
        <ShotContainer>
            <PhotoView src={img_erd}>
                <div>
                    <img src={img_erd} className="object-contain cursor-pointer snap-center rounded elevation-1" />
                </div>
            </PhotoView>
        </ShotContainer>
    </ArticleFullSpread>

    <ArticleSectionContent className="text-xs font-medium text-current/60 mt-2 mb-6 @lg/article:[grid-column:2]">
        An example of polymorphic relationships represented in an ERD.
    </ArticleSectionContent>

    <ArticleSectionContent className={cn_prose}>
        <p>
            This approach generally trades off referential integrity, as most databases (e.g. MySQL, Postgres) do not support foreign keys that point to more than one table. Because of this, we have to ensure referential integrity in the application code, and/or via mechanisms like triggers and check constraints.
        </p>
        <p>
            Not having referential integrity can create problems. Consider, for instance, a security policy that is assigned to some resource in the database. If that resource is deleted, the policy should be deleted too. If you fail to delete the policy, and another resource is created with the same ID, it will still have the policy attached to it.
        </p>
        <p>
            Therefore, we need to ensure that IDs are globally unique and monotonically increasing. UUID7 can be suitable for this, but in the case of Carder, I decided to go with ULIDs (Universally Unique Lexixographically-sortable ID). ULIDs not only meet the criteria above, but they have some features which make them particularly useful— they contain no special characters (i.e. they're URL-safe), and they utilise Crockford's base32 alphabet, which reduces ambiguity when being read by a human.
        </p>

        <h3>UI Showcase</h3>
        <p>
            Carder's UI was developed using React.js, with Tanstack Router for routing and state management, TailwindCSS for styling, and a mix of React Motion and CSS view-transitions for motion design.
        </p>
    </ArticleSectionContent>

    <ArticleFullSpread className='mt-6 mb-2 container'>
        <ShotContainer>
            <PhotoView src={img_screenshot_0}>
                <div>
                    <img src={img_screenshot_0} className="object-contain cursor-pointer rounded elevation-1 max-h-full" />
                </div>
            </PhotoView>
            <PhotoView src={img_screenshot_1}>
                <div>
                    <img src={img_screenshot_1} className="object-contain cursor-pointer rounded elevation-1 max-h-full" />
                </div>
            </PhotoView>
            <PhotoView src={img_screenshot_2}>
                <div>
                    <img src={img_screenshot_2} className="object-contain cursor-pointer rounded elevation-1 max-h-full" />
                </div>
            </PhotoView>
            <PhotoView src={img_screenshot_3}>
                <div>
                    <img src={img_screenshot_3} className="object-contain cursor-pointer rounded elevation-1 max-h-full" />
                </div>
            </PhotoView>
            <PhotoView src={img_screenshot_4}>
                <div>
                    <div className='aspect-square w-full flex items-center justify-center'>
                        <img src={img_screenshot_4} className="object-contain cursor-pointer rounded elevation-1 h-full" />
                    </div>
                </div>
            </PhotoView>
            <PhotoView src={img_screenshot_5}>
                <div>
                    <img src={img_screenshot_5} className="object-contain cursor-pointer rounded elevation-1 max-h-full" />
                </div>
            </PhotoView>
            <PhotoView src={img_screenshot_6}>
                <div>
                    <img src={img_screenshot_6} className="object-contain cursor-pointer rounded elevation-1 max-h-full" />
                </div>
            </PhotoView>
        </ShotContainer>
    </ArticleFullSpread>

    <ArticleSectionContent className="text-xs font-medium text-current/60 mt-2 mb-6 @lg/article:[grid-column:2]">
        Screenshots from the Carder web application.
    </ArticleSectionContent>

    <ArticleSectionContent className={cn_prose}>
        <p>
            Thanks to the use of Zod validators on the backend (generated dynamically based on the database schema), in future, it will be possible to achieve end-to-end type safety by sharing types between the front-end and back-end.
        </p>
    </ArticleSectionContent>
</>

function RouteComponent() {
    return <>
        <div>
            <ProjectHeaderContainer
                name='Carder'
                descriptors={<>
                    <MRZPropertyBlock
                        label='Description'
                        content='Audience engagement platform for in-person events'
                    />
                    <BasicPropertyBlock
                        label='Tech stack'
                        content="Postgres; Hono.js; React (Vite)"
                    />
                    <BasicPropertyBlock
                        label='Year'
                        content='2025'
                    />
                </>}
                code="CEPL"
                columnVariant='full'
            />

            <ColumnLayout variant='base' className='my-6'>
                <PhotoProvider>
                    <ArticleRoot mode='fixedSidebar'>
                        {Introduction}

                        <Divider className='col-span-full my-4 mt-8' lines={1} type='normal' />

                        {Background}

                        <Divider className='my-4 col-span-full' lines={1} type='normal' />

                        {PrototypingIdeation}

                        <Divider className='my-4 col-span-full' lines={1} type='normal' />

                        {Technical}
                    </ArticleRoot>
                </PhotoProvider>
            </ColumnLayout>

            <DisclosuresPanel>
                <DisclosureBlock code='01' title='Academic assignment (nature of work)'>
                    This project was completed as part of an academic assessment and not for a commercial purpose. This case study is partly fictional or augmented. Some copyrighted resources may have been used under a fair use copyright exemption (for ‘non-commercial research or private study’). Where a resource has been used in such manner, unless the resource has an open use license (or a commercial use license has subsequently been obtained), it will be redacted. Parts of the work may have been withheld for reasons related to academic integrity.
                </DisclosureBlock>
            </DisclosuresPanel>

        </div >
        <Footer />
    </>
}
