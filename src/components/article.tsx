import type { HTMLProps } from "react"

type ArticleRootProps = {
    children: React.ReactNode,
    mode?: "fixedSidebar" | "fixedContent"
    className?: string
}

export const ArticleRoot = ({ mode = "fixedSidebar", children, className }: ArticleRootProps) => {
    const cn_cols = mode === "fixedSidebar" ? "grid-cols-[200px_1fr] @3xl/article:grid-cols-[300px_1fr]" : "grid-cols-[1fr_minmax(auto,80ch)]"

    return <div className={`@container/article ${className}`}>
        <div className={`@lg/article:grid gap-x-10 ${cn_cols}`}>
            {children}
        </div>
    </div>
}

type ArticleSidebarStickyBlockProps = {
    children: React.ReactNode
} & HTMLProps<HTMLDivElement>

export const ArticleSidebarStickyBlock = ({ children, className, ...props }: ArticleSidebarStickyBlockProps) => {
    return <div {...props} className={`relative pb-10 @lg/article:pb-0 scroll-mt-4 ${className}`}>
        <div className="sticky top-4 ">
            {children}
        </div>
    </div>
}

type ArticleSectionHeadingProps = {
    children?: React.ReactNode
} & HTMLProps<HTMLDivElement>

export const ArticleSectionHeading = ({ children, ...props }: ArticleSectionHeadingProps) => {
    return <ArticleSidebarStickyBlock {...props}>
        <h2 className='font-semibold'>{children}</h2>
    </ArticleSidebarStickyBlock>
}

type ArticleSectionContent = {
    children: React.ReactNode
} & HTMLProps<HTMLDivElement>

export const ArticleSectionContent = ({ className, children, style, ...props }: ArticleSectionContent) => {
    return <div className={`@container/content ${className}`} style={{
        gridColumn: "2",
        ...props
    }} {...props}>
        {children}
    </div>
}

/**
 * Note: best practice: mt-6 mb-4 
 */
export const ArticleFullSpread = ({ children, className, ...props} : HTMLProps<HTMLDivElement>) => {
    return <div className={`col-span-full max-w-none ${className}`} {...props}>
        {children}
    </div>
}

export const cn_prose = `
    text-xs prose prose-sm prose-neutral dark:prose-invert 
    leading-normal  
    max-w-none font-[450] 
    prose-strong:font-semibold 
    prose-headings:not-first:mt-10
    prose-li:my-0 
    prose-a:active:opacity-40 prose-a:active:decoration-dotted 
    prose-a:hover:decoration-dotted prose-a:underline-offset-2
    prose-p:not-first:not-last:my-5
    prose-pre:bg-neutral-400/10
    prose-pre:text-neutral-500
    prose-pre:rounded-sm
    prose-pre:last:mb-0
    prose-blockquote:border-2
    prose-blockquote:border-neutral-400/20
    prose-blockquote:not-italic
    prose-blockquote:py-2.5
    prose-blockquote:px-3
    prose-blockquote:rounded-sm
`.trim().replace("\n", " ")