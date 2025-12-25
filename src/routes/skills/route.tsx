import { Footer } from '@/components/footer'
import { SkillsDirectory } from '@/components/skills'
import { SingleColumn } from '@/layouts/single-column'
import { createFileRoute, Link, Outlet, useMatches } from '@tanstack/react-router'

export const Route = createFileRoute('/skills')({
    component: RouteComponent,
})

function RouteComponent() {
    const match = useMatches()

    const onHomepage = match[match.length - 1].fullPath === "/skills/"

    const cn_link_back = onHomepage ? "hidden" : "md:hidden"
    const cn_skills_dir = onHomepage ? "" : "max-md:hidden max-w-full overflow-hidden"
    const cn_container = `gap-y-2 gap-x-16 grid md:grid-cols-[2fr_5fr]`

    return <>
        <SingleColumn columnOptions={{ variant: 'base' }} className='@container/article'>
            <div className='min-h-24 lg:min-h-44 flex items-end border-b border-neutral-500/20 py-3'>
                <h1 className='text-2xl font-semibold'>Skills</h1>
            </div>
            <div className={`py-3 ${cn_container}`}>
                <div className={cn_skills_dir}>
                    {SkillsDirectory}
                </div>
                <Link to="/skills" className={cn_link_back}>Back</Link>
                <Outlet />
            </div>
        </SingleColumn>
        <Footer />
    </>
}

