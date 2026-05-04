import { cn_prose } from '@/components/editorial/article'
import { SkillBadge, SkillBank } from '@/components/skills'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/skills/technology')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className={cn_prose}>
    <h3 className="font-mode-display">Technical skillset</h3>
    <p className="text-lg text-black dark:text-white leading-snug block mb-14 not-prose opacity-75 font-mode-display">
      I work across the full stack, primarily in TypeScript and C#. I have experience designing multi-service and cloud-native archteictures. In the past, I have worked with AWS (ECS, CloudFront, Route 53, and more), and I am Azure (AZ-900) certified.
    </p>
    <p>
      <strong>On the backend,</strong> I use a wide variety of tools and frameworks— I am familiar with various ways of developing APIs using TypeScript (e.g. with libraries like express.js and Hono, or developing for cloud-native, serverless environments such as Cloudflare Workers or Azure Functions); and I have developed systems using ASP.NET.
    </p>
    <p>
      <strong>On the frontend,</strong> I tend to work with React and I write most of my projects (including this website) using TanStack for routing and data-fetching.
    </p>
    <p>
      I am interested in building large-scale, distributed systems; designing event-driven architectures; and database internals.
    </p>
    <SkillBank>
      <SkillBadge>JavaScript</SkillBadge>
      <SkillBadge>TypeScript</SkillBadge>
      <SkillBadge>React.js</SkillBadge>
      <SkillBadge>AWS</SkillBadge>
      <SkillBadge>C#</SkillBadge>
      <SkillBadge>SQL</SkillBadge>
      <SkillBadge>Postgres</SkillBadge>
      <SkillBadge>MongoDB</SkillBadge>
      <SkillBadge>ASP.NET</SkillBadge>
      <SkillBadge>Entity Framework</SkillBadge>
      <SkillBadge>UML</SkillBadge>
      <SkillBadge>Serverless</SkillBadge>
      <SkillBadge>Cloud architecture</SkillBadge>
      <SkillBadge>Service-oriented architectures</SkillBadge>
      <SkillBadge>Event-driven architectures</SkillBadge>
    </SkillBank>
  </div>
}
