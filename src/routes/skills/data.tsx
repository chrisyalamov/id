import { cn_prose } from '@/components/article'
import { SkillBadge, SkillBank } from '@/components/skills'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/skills/data')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className={cn_prose}>
    <h3>Data skillset</h3>
    <p>
      I have experience with using data to provide clarity by extracting insights that are easy to understand and act upon. I am also familiar with technical, having worked with both relational and NoSQL databases and various BI software.
    </p>
    <p>
      My main strength related to data is helping non-technical audiences to understand the process behind the analysis and how certain conclusions were reached. This helps build trust between data analysts and empowers the managers (or other non-analysts) to take a more active role in expanding Business Intelligence.
    </p>

    <SkillBank>
      <SkillBadge>SQL</SkillBadge>
      <SkillBadge>PowerBI</SkillBadge>
      <SkillBadge>Observable</SkillBadge>
    </SkillBank>
  </div>
}
