import { cn_prose } from '@/components/article'
import { SkillBadge, SkillBank } from '@/components/skills'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/skills/technology')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className={cn_prose}>
    <h3>Technical skillset</h3>
    <p>
      I have experience across the full stack, primarily in TypeScript and C#.
    </p>
    <p>
      On the frontend, I primarily work with React. On the backend, I use a wide variety of tools and frameworks— I am familiar with various ways of developing APIs using TypeScript (e.g. with libraries like express.js and Hono, or developing for cloud-native, serverless environments such as Cloudflare Workers or Azure Functions); and I have developed systems using ASP.NET.
    </p>
    <SkillBank>
      <SkillBadge>JavaScript</SkillBadge>
      <SkillBadge>TypeScript</SkillBadge>
      <SkillBadge>React.js</SkillBadge>
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
