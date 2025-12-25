import { ArticleRoot, ArticleSectionContent, ArticleSectionHeading, cn_prose } from '@components/article.tsx'
import { Divider } from '@components/divider.tsx'
import { Footer } from '@components/footer.tsx'
import { SingleColumn } from '@layouts/single-column.tsx'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/legal/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <SingleColumn columnOptions={{ variant: 'base' }} className='@container/article'>
      <div className='min-h-24 lg:min-h-44 flex items-end border-b border-neutral-500/20 py-3'>
        <h1 className='text-2xl font-semibold'>Legal</h1>
      </div>
      <ArticleRoot className='py-3'>
        <ArticleSectionHeading>Intellectual property</ArticleSectionHeading>
        <ArticleSectionContent className={cn_prose}>
          <p>
            Reasonable care has been taken to ensure that the content published on this website does not infringe upon the intellectual property rights of others. Some works may contain materials (e.g. images) which have been used under a fair use exemption.
          </p>
          <p>
            If you wish to discuss concerns regarding copyright infringement with regards to works to which you hold rights, please contact me at <a href='mailto:chrisyalamov@gmail.com'>chrisyalamov@gmail.com</a>, prefacing the subject of your email with "LEGAL:".
          </p>
        </ArticleSectionContent>

        <Divider lines={1} type='normal' className='my-4 col-span-full' />

        <ArticleSectionHeading>Confidentiality</ArticleSectionHeading>
        <ArticleSectionContent className={cn_prose}>
          <p>
            Some content may have been redacted or recreated, in order to preserve the confidentialiy, trade secrets, or other sensistive information about a particular client, individual, or an organisation.
          </p>
        </ArticleSectionContent>

        <Divider lines={1} type='normal' className='my-4 col-span-full' />

        <ArticleSectionHeading>Privacy</ArticleSectionHeading>
        <ArticleSectionContent className={cn_prose}>
          <p>
            This website does not process any personal data.
          </p>
        </ArticleSectionContent>
      </ArticleRoot>
    </SingleColumn>
    <Footer />
  </>
}
