import type { HTMLProps } from "react"
import { MRZ, type MRZProps } from "./mrz"

type PlainPropertyBlockProps = {
    label: string
    children: React.ReactNode
} & HTMLProps<HTMLDivElement>

export const PlainPropertyBlock = ({ label, children, ...props }: PlainPropertyBlockProps) => {
    return <div className="max-w-[32ch] block" {...props}>
        <p className="text-sm mb-1 text-(--project-header-accent_) filter-[light-dark(brightness(0.75),brightness(1.5))]">{label}</p>
        {children}
    </div>
}

type BasicPropertyBlockProps = {
    label: string
    content: string | string[]
} & Omit<HTMLProps<HTMLDivElement>, "content">

export const BasicPropertyBlock = ({ label, content, ...props }: BasicPropertyBlockProps) => {
    return <div className="block" {...props}>
        <p className="text-sm mb-1 text-(--project-header-accent_)">{label}</p>
        <p className="text-lg leading-tight font-[650] block">
            {
                content instanceof Array
                ? content.map(item => <>{item}<br /></>)
                : content
            }
        </p>
    </div>
}

type MRZPropertyBlockProps = {
    label: string
    content: string
} & Omit<MRZProps, "text">

export const MRZPropertyBlock = ({ label, content, ...props }: MRZPropertyBlockProps) => {
    return <div className="max-w-[40ch] block" {...props}>
        <p className="text-sm mb-1 text-(--project-header-accent_) filter-[light-dark(brightness(0.75),brightness(1.5))]">{label}</p>
        <MRZ text={content} fill='end' maxLineLength={30} {...props} />
    </div>
}