import { ArticleFullSpread, ArticleRoot, ArticleSectionContent, ArticleSidebarStickyBlock, cn_prose } from '@/components/editorial/article'
import { DisclosureBlock, DisclosuresPanel } from '@components/disclosures.tsx'
import { MRZPropertyBlock } from '@components/project-details.tsx'
import { ProjectHeaderContainer } from '@components/project-header.tsx'
import { ShotContainer } from '@components/showcase.tsx'
import { ColumnLayout } from '@layouts/column.tsx'
import { createFileRoute } from '@tanstack/react-router'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import img_client from './IWM Clients.png'
import img_dashboard from './IWM Dashboard.png'
import img_marketview from './IWM MarketView.png'

export const Route = createFileRoute('/archive/_items/CRSS-credit-suisse-osa')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>
        <ProjectHeaderContainer
            name='Credit Suisse OSA'
            descriptors={<>
                <MRZPropertyBlock
                    label='Description'
                    content="Developing a unified platform for Credit Suisse's International Wealth Management Division"
                />
            </>}
            code="CRSS"
            columnVariant='full'
            dark
            className='[--project-header-border:var(--color-blue-500)] [--project-header-accent:var(--color-blue-400)] [--badge-color:var(--color-blue-400)] [--badge-color-hover:white]'
            accented
        />

        <PhotoProvider>
            <ColumnLayout variant='base'>
                <ArticleRoot mode='fixedSidebar' className='mt-px'>
                    <ArticleSidebarStickyBlock className='border-t-8 border-blue-500 pt-8'>
                        <h3 className='mb-10 text-xl font-semibold leading-tight'>
                            Credit Suisse Group AG is a Swiss financial services firm and global investment bank.
                        </h3>
                        <div>
                            <p>
                                Their International Wealth Management (IWM) division has over 160 years of financial expertise and by embracing technological innovation, they have become a leader in their industry.
                            </p>
                        </div>
                    </ArticleSidebarStickyBlock>
                    <ArticleSectionContent className={`pt-8 border-t-8 border-transparent ${cn_prose}`}>
                        <h3>Consultation</h3>
                        <p>
                            Following a consultation with the client, we decided that our solution, Credit Suisse One Step Assistant (OSA for short), would be best deployed as a responsive web application. The main audience for this product, Credit Suisse IWM's relationship managers, was often on the go and required a high degree of portability— a solution which would be compatible with a wide range of mobile devices.
                        </p>
                        <p>
                            By finding out about a relationship manager's workflow, we conceptualised an intelligent client summary page. This captured details about: the client's contact details, legal requirements— due diligence and compliance processes; and a portfolio breakdown— overview of investments.
                        </p>
                    </ArticleSectionContent>

                    <ArticleFullSpread className='mt-6 mb-4 container'>
                        <ShotContainer dark cn_shotContainer='items-center'>
                            <PhotoView src={img_client}>
                                <div>
                                    <img src={img_client} className="object-contain cursor-pointer snap-center rounded elevation-1" />
                                </div>
                            </PhotoView>
                            <PhotoView src={img_dashboard}>
                                <div>
                                    <img src={img_dashboard} className="object-contain cursor-pointer snap-center rounded elevation-1" />
                                </div>
                            </PhotoView>
                            <PhotoView src={img_marketview}>
                                <div>
                                    <img src={img_marketview} className="object-contain cursor-pointer snap-center rounded elevation-1" />
                                </div>
                            </PhotoView>
                        </ShotContainer>
                    </ArticleFullSpread>
                </ArticleRoot>
            </ColumnLayout>

            <DisclosuresPanel>
                <DisclosureBlock code='01' title='Individual contributions'>
                    While I may not have been the exclusive creator of the work presented, only artifacts to which I was the primary contributor are showcased. This means other team members may have influenced the artifact's creation (for instance, via suggestion or feedback) but have not directly taken part. I do not claim ownership of artifacts produced by others.
                </DisclosureBlock>
                <DisclosureBlock code='02' title='Academic assignment (nature of work)'>
                    This project was completed as part of an academic assessment and not for a commercial purpose. This case study is partly fictional or augmented. Some copyrighted resources may be used under a fair use copyright exemption (for ‘non-commercial research or private study’). Parts of the work may have been withheld for reasons related to academic integrity.
                </DisclosureBlock>
                <DisclosureBlock code='03' title='Confidentiality and commercial interests'>
                    Parts of this project may have been redacted or not included at all in the interest of confidentiality, protecting personal privacy or commercial interests, as well as ensuring compliance with relevant legislation, contractual obligations and agreements.
                </DisclosureBlock>
            </DisclosuresPanel>
        </PhotoProvider>
    </div>
}
