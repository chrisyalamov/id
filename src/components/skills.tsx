import { Link, useMatches, type LinkProps } from "@tanstack/react-router"

type SkillLinkProps = {
  name: string
  className: string
} & LinkProps

export const SkillLink = ({ name, className, ...props }: SkillLinkProps) => {
  const matches = useMatches()
  const currentPath = matches[matches.length - 1].fullPath

  const isFocused =  currentPath === props.to

  const cn_skillLine = `
    @container/skill rounded-md
    [:has(details[open])_&:not([open])]:opacity-60
    open:bg-neutral-400/10
    my-4 overflow-hidden
  `.trim()

  const cn_skillLineSummary = `
    font-ocr uppercase 
    leading-none align-middle
    flex items-center 
    group
    pointer-fine:text-sm
    active:opacity-50
    cursor-pointer
    [details[open]_&]:hidden
    my-0.5 pointer-coarse:my-1.5
    overflow-hidden
    ${className}
  `.trim()

  const cn_badge = `
    w-[1ch] h-2.5 rounded-xs mr-[1ch] 
    bg-(--skill-color,currentColor) 
    shrink-0
    group-hover:bg-transparent group-active:bg-transparent
    border-2 border-transparent
    group-hover:border-(--skill-color) group-active:border-(--skill-color)
    ${isFocused && "w-[2ch]"}
  `.trim()


  return <Link {...props} className={cn_skillLine}>

    <div className={cn_skillLineSummary}>
      <div className={cn_badge} />
      <div className="text-clip shrink text-sm break-all max-h-[1lh]">
        <span className={`${isFocused ? "text-(--skill-color)" : "group-hover:text-(--skill-color) group-active:text-(--skill-color)"} shrink-0 group-hover:underline decoration-dotted underline-offset-2`}>
          {name}
        </span>
        <span className={`shrink opacity-20 group-hover:opacity-70 group-active:opacity-70 text-clip break-all ml-1 max-h-[0.85rem]`}>
        &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;
        </span>
      </div>
    </div>

  </Link>
}

export const SkillsDirectory = <>
  <SkillLink name='Technical' className="[--skill-color:var(--color-red-600)]" to="/skills/technology" />
  <SkillLink name='Design' className="[--skill-color:var(--color-amber-500)]" to="/skills/design" />
  <SkillLink name='Data' className="[--skill-color:var(--color-blue-600)]" to="/skills/data" />
  <SkillLink name='Enterprise' className="[--skill-color:var(--color-purple-500)]" to="/skills/enterprise" />
</>

export const SkillBank = ({ children }: { children: React.ReactNode }) => <div className='flex flex-wrap gap-x-2 gap-y-1.5 border border-dashed wrap-normal border-neutral-400/40 py-3 px-4 rounded-md'>
  {children}
</div>

export const SkillBadge = ({ children } : { children: React.ReactNode }) => <div className="leading-none text-nowrap my-0.5 text-xs text-neutral-500 ml-[1.5ch]">
  <div className="size-[1ch] mr-[0.5ch] bg-neutral-400/25 rounded-xs inline-block -ml-[1.5ch]" />
  {children}
</div>