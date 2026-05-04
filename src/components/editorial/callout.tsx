import type { HTMLProps } from "react"

type CalloutProps = HTMLProps<HTMLDivElement> & {
    cn_borderColour?: string,
}

export const Callout = ({cn_borderColour, className, ...props}: CalloutProps) => {
    const cn_callout = `
        my-4 px-3 py-2 border rounded
        ${cn_borderColour ?? "border-neutral-500/50"}
    `
    return <div className={className ?? cn_callout} {...props} />
}