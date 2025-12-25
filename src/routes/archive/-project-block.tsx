import { DynamicMarquee } from "@components/dynamic-marquee.tsx"
import { DirectionalArrow } from "@/icons/directional-arrow.tsx"
import { Link, type LinkProps } from "@tanstack/react-router"
import { Fragment, type HTMLAttributes } from "react"

type ProjectBlockBaseProps = {
  title: string
  description: string
  code: string
  seq: string
  skills?: string[]
  type?: string
  detailed: boolean
  external?: boolean
}

type InternalBlockProps = ProjectBlockBaseProps & LinkProps
type ExternalBlockProps = ProjectBlockBaseProps & {
  external: true
} & HTMLAttributes<HTMLAnchorElement>

type ProjectBlockProps = InternalBlockProps | ExternalBlockProps

export const ProjectBlock = ({ title, description, code, seq, skills, type, detailed, external = false, ...props }: ProjectBlockProps) => {
  const cn_projectBlockContainer = `
    grid grid-cols-subgrid col-span-full
    gap-x-2 leading-none group
    not-first:border-t border-neutral-400/15 py-2.5 max-sm:py-3 pointer-coarse:py-3
    items-start
  `

  const SkillsBlock = skills && <DynamicMarquee className="@lg/archive-index:w-full">
    <div className='@lg/archive-index:grid grid-cols-[auto_1fr_auto] font-ocr tracking-tighter uppercase text-2xs @lg/archive-index:text-nowrap overflow-ellipsis leading-tight items-start @lg/archive-index:max-w-[45ch]'>
      {skills.map((skill,i) => <Fragment key={code+i}>
        <span className='opacity-50 @max-lg/archive-index:hidden'>[&nbsp;</span>
        <span className='overflow-hidden text-ellipsis max-w-[30ch]'>{skill}</span>
        <span className='opacity-50 pl-5 @max-lg/archive-index:hidden'>]</span>
        <span className='opacity-50 pr-3 @lg/archive-index:hidden wrap-anywhere'>;</span>
      </Fragment>)}
    </div>
  </DynamicMarquee>

  const LinkContent = <>
    <div className="font-pixel tracking-tight uppercase contents leading-none">
      <span className="text-blue-600 dark:text-amber-300">{seq}</span>
      <span>{code}</span>
    </div>
    <div className="h-[1lh] flex items-center">
      <div className="size-2 rounded-xs dark:rounded-px bg-current animate-[2s_flash_infinite_both_linear] group-hover:bg-[light-dark(var(--color-blue-600),var(--color-amber-300))] group-active:bg-[light-dark(var(--color-blue-600),var(--color-amber-300))]" />
    </div>
    <div className="font-semibold tracking-normal flex items-start justify-between gap-2 @lg/archive-index:contents">
      <span className="underline underline-offset-2 decoration-current/20 decoration-dotted group-hover:decoration-current group-active:opacity-40 leading-none" style={{
        viewTransitionName: `title${code}`
      }}>
        {title}
      </span>
      <span className="text-2xs tracking-wider font-semibold leading-tight uppercase opacity-55 w-max @lg/archive-index:pr-8">
        {type}
        {
          external && <DirectionalArrow direction="tr" className="inline-block mb-0.5 ml-1 text-lg leading-none" />
        }
      </span>
    </div>
    {
      detailed && <>
        <div className="[grid-column:4] @max-lg/archive-index:[grid-column:4] text-xs leading-snug text-balance contrast-more:opacity-80 opacity-55 group-hover:opacity-100 my-1 @lg/archive-index:mb-6 @lg/archive-index:mt-2">
          {description}
        </div>
        <div className="@max-lg/archive-index:[grid-column:4] my-1 @lg/archive-index:mt-2 contrast-more:opacity-80 opacity-45 group-hover:opacity-100 min-w-0 overflow-hidden">{SkillsBlock}</div>
      </>
    }
  </>

  if (external) {
    return <a className={cn_projectBlockContainer}  {...props}>
      {LinkContent}
    </a>
  } else {
    return <Link className={cn_projectBlockContainer} {...props} viewTransition preload="viewport">
      {LinkContent}
    </Link>
  }
}