import { ProjectHeaderContainer } from '@components/project-header.tsx'
import { ColumnLayout } from '@layouts/column.tsx'
import { createFileRoute } from '@tanstack/react-router'
import { ShotContainer } from '@components/showcase.tsx'
import { ArticleFullSpread, ArticleRoot, ArticleSectionContent } from '@/components/editorial/article'
import { PhotoProvider } from 'react-photo-view'
import { Footer } from '@components/footer.tsx'
import vid_bar from "./bar.mp4"
import vid_hypothesis from "./hypothesis.mp4"
import { FiArrowUp } from 'react-icons/fi'

export const Route = createFileRoute('/archive/_entries/DVIS-data-vis-showcase')({
    component: RouteComponent,
})

function RouteComponent() {
    return <>
        <div>
            <ProjectHeaderContainer
                name='Data visualisation'
                category='Showcase'
                code="DVIS"
                columnVariant='full'
            />
            <ColumnLayout variant='base'>
                <PhotoProvider>
                    <ArticleRoot mode='fixedSidebar' className='grow my-6'>
                        <ArticleSectionContent className="leading-tight mb-10 text-xl font-semibold text-left">
                            This is a collection that showcases data visualisations I have designed for various projects.
                        </ArticleSectionContent>

                        <ArticleFullSpread className='mt-6 mb-4'>
                            <ShotContainer dark cn_shotContainer='items-center'>
                                <div>
                                    <video src={vid_hypothesis} className="cursor-pointer rounded-md overflow-hidden elevation-1 snap-center" autoPlay muted playsInline loop />
                                </div>
                            </ShotContainer>
                        </ArticleFullSpread>

                        <ArticleSectionContent className="text-xs font-medium text-current/60">
                            <p>
                                <FiArrowUp className='inline-block align-baseline' /> Visual aid when explaining hypothesis testing to non-technical audience.
                            </p>
                        </ArticleSectionContent>

                        <ArticleFullSpread className='mt-6 mb-4'>
                            <ShotContainer dark cn_shotContainer='items-center'>
                                <div>
                                    <video src={vid_bar} className="cursor-pointer rounded-md overflow-hidden elevation-1 snap-center" autoPlay muted playsInline loop />
                                </div>
                            </ShotContainer>
                        </ArticleFullSpread>
                        <ArticleFullSpread className='mt-6 mb-4'>
                            <ShotContainer dark cn_shotContainer='items-center'>
                                <div>
                                    <video src={vid_bar} className="cursor-pointer rounded-md overflow-hidden elevation-1 snap-center" autoPlay muted playsInline loop />
                                </div>
                            </ShotContainer>
                        </ArticleFullSpread>
                        <ArticleFullSpread className='mt-6 mb-4'>
                            <ShotContainer dark cn_shotContainer='items-center'>
                                <div>
                                    <video src={vid_bar} className="cursor-pointer rounded-md overflow-hidden elevation-1 snap-center" autoPlay muted playsInline loop />
                                </div>
                            </ShotContainer>
                        </ArticleFullSpread>
                    </ArticleRoot>
                </PhotoProvider>
            </ColumnLayout>
        </div>
        <Footer variant="lg" />
    </>
}
