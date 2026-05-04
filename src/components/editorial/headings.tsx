import type { HTMLProps } from "react"

type SubtitleProps = HTMLProps<HTMLHeadingElement>

export const Subtitle = ({ className, ...props }: SubtitleProps) => {
    const cn_subtitle = `not-prose text-neutral-500 opacity-100 leading-tight mb-10 text-xl font-[550] antialiased font-mode-display text-left`
    return <h2 className={className ?? cn_subtitle} {...props} />
}