import type { HTMLProps } from "react"

type ArticleRootProps = {
    children: React.ReactNode,
    mode?: "fixedSidebar" | "fixedContent"
    className?: string
}

export const ArticleRoot = ({ mode = "fixedSidebar", children, className }: ArticleRootProps) => {
    const cn_cols = mode === "fixedSidebar" ? "grid-cols-[200px_1fr] @2xl/article:grid-cols-[275px_1fr]" : "grid-cols-[1fr_minmax(auto,80ch)]"

    return <div className={`@container/article ${className}`}>
        <div className={`@xl/article:grid gap-x-10 ${cn_cols}`}>
            {children}
        </div>
    </div>
}

type ArticleSidebarStickyBlockProps = {
    children: React.ReactNode
} & HTMLProps<HTMLDivElement>

export const ArticleSidebarStickyBlock = ({ children, className, ...props }: ArticleSidebarStickyBlockProps) => {
    return <div {...props} className={`relative pb-4 @lg/article:pb-0 scroll-mt-4 ${className}`}>
        <div className="sticky top-4 ">
            {children}
        </div>
    </div>
}
export const ArticleSidebarBlock = ({ children, className, ...props }: ArticleSidebarStickyBlockProps) => {
    return <div {...props} className={`pb-4 @lg/article:pb-0 scroll-mt-4 ${className}`}>
        {children}
    </div>
}

type ArticleSectionHeadingProps = {
    children?: React.ReactNode
} & HTMLProps<HTMLDivElement>

export const ArticleSectionHeading = ({ children, ...props }: ArticleSectionHeadingProps) => {
    return <ArticleSidebarStickyBlock {...props}>
        <h2 className='font-semibold text-sm'>{children}</h2>
    </ArticleSidebarStickyBlock>
}

type ArticleSectionContent = {
    children: React.ReactNode
} & HTMLProps<HTMLDivElement>

export const ArticleSectionContent = ({ className, children, style, ...props }: ArticleSectionContent) => {
    return <div className={`@container/content ${className}`} style={{
        gridColumn: "2",
        ...style
    }} {...props}>
        {children}
    </div>
}

/**
 * Note: best practice: mt-6 mb-4 
 */
export const ArticleFullSpread = ({ children, className, ...props }: HTMLProps<HTMLDivElement>) => {
    return <div className={`col-span-full max-w-none ${className}`} {...props}>
        {children}
    </div>
}


const getProseClassName = (size: "base" | "lg") => `
    prose ${size === "base" ? "prose-sm text-[14px]" : "prose-base text-[16px]"} prose-neutral dark:prose-invert 
    font-[360]
    leading-[1.45]
    text-black
    dark:text-neutral-300
    max-w-none 
    subpixel-antialiased
    prose-headings:antialiased!
    
    prose-strong:font-semibold
    prose-headings:not-first:mt-10
    prose-li:my-0 
    prose-a:active:opacity-40 prose-a:active:decoration-dotted 
    prose-a:hover:decoration-dotted prose-a:underline-offset-2
    prose-p:not-first:not-last:my-5
    
    prose-headings:font-mode-display
    prose-h2:font-medium
    prose-h2:font-mode-display
    prose-h2:tracking-normal
    prose-h3:text-current/55
    prose-h2:mt-10
    prose-h3:mt-5!
    prose-p:[font-feature-settings:"ss07"off]!

    prose-pre:bg-neutral-400/10
    prose-pre:text-reset
    prose-pre:[font-size:inherit]

    prose-pre:rounded-md
    prose-pre:last:mb-0
    prose-pre:wrap-normal

    prose-blockquote:border-none
    prose-blockquote:ring
    prose-blockquote:ring-inset
    prose-blockquote:ring-neutral-400/25
    prose-blockquote:not-italic
    
    prose-blockquote:py-4
    prose-blockquote:[--housing-padding-y:calc(var(--spacing)*4)]
    prose-blockquote:px-5
    prose-blockquote:[--housing-padding-x:calc(var(--spacing)*5)]
    
    
    prose-blockquote:rounded-md
    prose-blockquote:*:before:content-none
    
    prose-code:after:content-none
    prose-code:before:content-none
    prose-pre:leading-snug
    
    
    prose-pre:[corner-shape:superellipse(1.2)]
    prose-blockquote:[corner-shape:superellipse(1.2)]

    supports-corner-shape:prose-pre:rounded-xl

    prose-blockquote:*:after:content-none
    prose-blockquote:*:last:mb-0
`

export const cn_prose = getProseClassName("base").trim().replace("\n", " ")
export const cn_prose_large = getProseClassName("lg").trim().replace("\n", " ")