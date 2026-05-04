import { ArticleFullSpread, ArticleRoot, ArticleSectionContent, cn_prose } from '@/components/editorial/article'
import { DisclosureBlock, DisclosuresPanel } from '@components/disclosures.tsx'
import { BasicPropertyBlock, MRZPropertyBlock } from '@components/project-details.tsx'
import { ProjectHeaderContainer } from '@components/project-header.tsx'
import { ColumnLayout } from '@layouts/column.tsx'
import { createFileRoute } from '@tanstack/react-router'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import img_supabase from "./Supabase.png"
import img_candidates from "./Candidates.png"
import img_interview from "./Interviews.png"
import img_vacancies from "./Vacancies.png"
import { ShotContainer } from '@components/showcase.tsx'

export const Route = createFileRoute('/archive/_entries/HK19-hack19')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>
        <ProjectHeaderContainer
            name='Recruitment system'
            descriptors={<>
                <MRZPropertyBlock
                    label='Description'
                    content='Developing a solution to streamline recruitment and feedback collection process (Hackathon challenge)'
                />
                <BasicPropertyBlock
                    label='Role'
                    content="Lead developer and PM"
                />
                <BasicPropertyBlock
                    label='Date'
                    content="19 - 20 June '23"
                />
                <BasicPropertyBlock
                    label='Location'
                    content="Etihad Stadium (Manchester, UK)"
                />
            </>}
            code="HK19"
            columnVariant='full'
            className='[--project-header-accent:var(--color-emerald-400)] [--badge-color:var(--color-emerald-400)]'
            dark
            accented
        />

        <PhotoProvider>

            <ColumnLayout variant='base'>

                <ArticleRoot mode='fixedSidebar' className='mt-px'>

                    <div className='border-t-8 border-t-emerald-400 pt-8'>
                        <h3 className='mb-10 text-xl font-semibold leading-tight'>
                            My team and I developed a solution to improve the recruitment processes of the UK-based consultancy gleeds.
                        </h3>
                        <p className={cn_prose}>
                            This project was done in response to a hackathon challenge set by the company at the Project: Hack 19 event. The event took place at the Etihad Stadium in Manchester, UK in June 2023.
                        </p>
                    </div>
                    <div className={`pt-8 border-t-8 border-transparent ${cn_prose}`}>
                        <p>
                            Given the limited timeframe, we decided to use Platform-as-a-Service products (in our case Supabase) and Software-as-a-Service products (e.g. Retool) to speed up development and deliver a minimum viable product.
                        </p>
                        <p>
                            Supabase was used for storing and processing the data needed for our solution, using their PostgreSQL database and edge functions. Data write operations would sometimes trigger API requests to OpenAI's GPT-3 API to generate natural language insights from user-generated data.
                        </p>

                        <PhotoView src={img_supabase}>
                            <div>
                                <img src={img_supabase} className="object-contain cursor-pointer snap-center rounded" />
                            </div>
                        </PhotoView>
                    </div>
                    <ArticleSectionContent className={cn_prose}>
                        <p>
                            To create a user interface, we used Retool, a low-code tool which allows for quickly building web applications that connect to data.
                        </p>
                    </ArticleSectionContent>
                    
                    <ArticleFullSpread className='mt-6 mb-4 container'>
                        <ShotContainer dark cn_shotContainer='items-center'>
                            <PhotoView src={img_candidates}>
                                <div>
                                    <img src={img_candidates} className="object-contain cursor-pointer snap-center rounded elevation-1" />
                                </div>
                            </PhotoView>
                            <PhotoView src={img_interview}>
                                <div>
                                    <img src={img_interview} className="object-contain cursor-pointer snap-center rounded elevation-1" />
                                </div>
                            </PhotoView>
                        </ShotContainer>
                    </ArticleFullSpread>

                    <ArticleSectionContent className={cn_prose}>
                        <p>
                            By using a language model, the platform was able to extract keywords regarding the applicant's relevant skills, based on the interviewers' notes. This information is searchable— when a recruiter creates a new job listing, the platform suggests suitable candidates based on the required skills.
                        </p>
                    </ArticleSectionContent>

                    <ArticleFullSpread className='mt-6 mb-4 container'>
                        <ShotContainer dark cn_shotContainer='items-center'>
                            <PhotoView src={img_vacancies}>
                                <div>
                                    <img src={img_vacancies} className="object-contain cursor-pointer snap-center rounded elevation-1" />
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
                <DisclosureBlock code='02' title='Confidentiality and commercial interests'>
                    Parts of this project may have been redacted or not included at all in the interest of confidentiality, protecting personal privacy or commercial interests, as well as ensuring compliance with relevant legislation, contractual obligations and agreements.
                </DisclosureBlock>
            </DisclosuresPanel>
        </PhotoProvider>
    </div>
}
