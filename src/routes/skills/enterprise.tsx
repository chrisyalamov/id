import { cn_prose } from '@/components/article'
import { SkillBadge, SkillBank } from '@/components/skills'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/skills/enterprise')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className={cn_prose}>
    <h3 className="font-mode-display">Enterprise skillset</h3>
    <p>
      I've led and been part of a number of cross-functional teams driving strategic initiatives from conception to execution. I am experienced with developing business propositions, formulating pitches, and analysing business cases. I have used various tools for analysis, including competitor analysis; segmentation, targeting, and positioning; and mapping out value proposition canvases.
    </p>

    <SkillBank>
      <SkillBadge>Leadership</SkillBadge>
      <SkillBadge>Project management</SkillBadge>
      <SkillBadge>Business analysis</SkillBadge>
      <SkillBadge>Pitch development</SkillBadge>
      <SkillBadge>Strategic planning</SkillBadge>
      <SkillBadge>Cross-functional interlock</SkillBadge>
      <SkillBadge>Agile development practices</SkillBadge>
    </SkillBank>
  </div>
}
