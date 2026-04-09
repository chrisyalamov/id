import { createFileRoute } from '@tanstack/react-router'
import { SingleColumn } from "@layouts/single-column.tsx";
import { ArticleRoot, ArticleSectionContent, ArticleSidebarStickyBlock, cn_prose } from "@components/article.tsx";
import { Footer } from "@components/footer.tsx";
import { formatDate } from "./-format-date.ts";

export const Route = createFileRoute('/library/untrusted-code-exec')({
    component: RouteComponent,
})

function RouteComponent() {
    return <>
        <SingleColumn columnOptions={{ variant: 'base', centre: true }} className='@container/article'>
            <div className='min-h-24 lg:min-h-44 flex items-end border-b border-neutral-500/20 py-3 font-mode-display'>
                <h1 className='text-2xl'>
                    <span className='font-medium opacity-50'>{formatDate(new Date("2025-08-18"))} </span>
                    <span className='font-semibold'>Running untrusted code: if not <code>eval()</code>, then what?</span>
                </h1>
            </div>
            <ArticleRoot className='py-3'>
                <ArticleSidebarStickyBlock className='font-medium text-balance'>
                    <p>Notes on creating multi-tenant architectures and systems</p>
                    <p className='opacity-50 my-4 mb-12 underline decoration-dotted underline-offset-2'>Christian Yalamov</p>
                </ArticleSidebarStickyBlock>
                <ArticleSectionContent className={cn_prose}>
                    test
                </ArticleSectionContent>
            </ArticleRoot>
        </SingleColumn>
        <Footer /></>
}
