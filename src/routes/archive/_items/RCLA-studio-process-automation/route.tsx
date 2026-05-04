import { BasicPropertyBlock, MRZPropertyBlock } from '@components/project-details.tsx'
import { ProjectHeaderContainer } from '@components/project-header.tsx'
import { ColumnLayout } from '@layouts/column.tsx'
import { createFileRoute } from '@tanstack/react-router'
import { ShotContainer } from '@components/showcase.tsx'
import { ArticleFullSpread, ArticleRoot, ArticleSectionContent, ArticleSectionHeading, cn_prose } from '@/components/editorial/article'
import { Divider } from '@/components/divider.tsx'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import img_flow from './flow.png'
import { Footer } from '@components/footer.tsx'

export const Route = createFileRoute('/archive/_items/RCLA-studio-process-automation')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>
        <ProjectHeaderContainer
            name='Worfklow automation'
            descriptors={<>
                <MRZPropertyBlock
                    label='Description'
                    content="Modernising a creative studio's workflows to capture the value they delivered to clients"
                />
                <BasicPropertyBlock
                    label='Tech stack'
                    content={['Azure Functions', 'Temporal.io']}
                />
                <BasicPropertyBlock
                    label='Project duration'
                    content='1 month'
                />

            </>}
            code="RCLA"
            columnVariant='full'
            category='Case study'
        />
        <ColumnLayout variant='base'>
            <PhotoProvider>
                <ArticleRoot mode='fixedSidebar' className='grow my-6'>
                    <ArticleSectionHeading>Introduction</ArticleSectionHeading>
                    <ArticleSectionContent className={cn_prose}>
                        <p>
                            I was approached by a photography studio based in New York which specialises in eCommerce product photography. The studio was looking for an improved way of capturing and communicating the value they provide to their clients.
                        </p>
                    </ArticleSectionContent>

                    <Divider lines={1} type='normal' className='my-4 mt-8 col-span-full' />

                    <ArticleSectionHeading>Background</ArticleSectionHeading>
                    <ArticleSectionContent className={cn_prose}>
                        <p>
                            The studio primarily used Dropbox for storing and distributing work to clients. A standardised directory structure was used, where each client, project, and product had dedicated folders. While this made sharing files easy, summarising the work completed was challenging.
                        </p>
                        <p>
                            It was necessary to manually log each project, product and product shot, which was time-consuming and prone to errors.
                        </p>
                    </ArticleSectionContent>

                    <Divider lines={1} type='normal' className='my-4 mt-8 col-span-full' />

                    <ArticleSectionHeading>Solution</ArticleSectionHeading>
                    <ArticleSectionContent className={cn_prose}>
                        <p>
                            To develop an appropriate solution, I used Microsoft Azure Functions for communicating with the Dropbox and Google Sheets APIs; and Temporal.io for workflow orchestration, to make it easy to integrate this process with other aspects of the studio's workflows and business logic.
                        </p>
                    </ArticleSectionContent>

                    <ArticleFullSpread className='mt-6 mb-4 container'>
                        <ShotContainer dark cn_shotContainer='items-center'>
                            <PhotoView src={img_flow}>
                                <div>
                                    <img src={img_flow} className="object-contain cursor-pointer snap-center rounded dark:outline-1 outline-black/20 dark:elevation-1" />
                                </div>
                            </PhotoView>
                        </ShotContainer>
                    </ArticleFullSpread>
                </ArticleRoot>
            </PhotoProvider>
        </ColumnLayout>
        <Footer variant="lg" />
    </div>
}
