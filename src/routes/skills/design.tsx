import { cn_prose } from '@/components/editorial/article'
import { SkillBadge, SkillBank } from '@/components/skills'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/skills/design')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className={cn_prose}>
    <h3 className="font-mode-display">Design skillset</h3>
    <p>
      I have extensive experience in various design domains, particularly graphic design; UI/UX; print media.
    </p>
    <p>
      Other than designing digital products, I have been able to apply my design skillset to a variety of situations. For instance, I have been able to create immersive business pitches which help to communicate the project vision to the audience; when working in technical fields— e.g. software engineering, or data anlaytics— I apply UX principles to make niche concepts easily digestible by non-technical audiences.
    </p>
    <p>
      Outside of professional capacity, I have an interest in all forms of art and design, particularly architecture and urban design. 
    </p>

    <SkillBank>
      <SkillBadge>Graphic design</SkillBadge>
      <SkillBadge>UI/UX</SkillBadge>
      <SkillBadge>Print media</SkillBadge>
      <SkillBadge>Brand identity</SkillBadge>
      <SkillBadge>Figma</SkillBadge>
      <SkillBadge>Adobe suite</SkillBadge>
      <SkillBadge>Front-end development</SkillBadge>
    </SkillBank>
  </div>
}
