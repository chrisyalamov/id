import { SingleColumn } from '@layouts/single-column.tsx'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { ProjectBlock } from './-project-block.tsx';
import { Footer } from '@components/footer.tsx';
import { ViewToggle } from './-view-toggle.tsx';

const searchSchema = z.object({
  detailed: z.coerce.boolean().optional().default(true)
})

export const Route = createFileRoute('/archive/')({
  component: RouteComponent,
  validateSearch: searchSchema
})

function RouteComponent() {
  const { detailed } = Route.useSearch()

  return <>
    <SingleColumn columnOptions={{ variant: 'base' }} className='@container/main'>
      <div className='min-h-24 lg:min-h-44 flex items-end border-b border-neutral-500/20 py-3 font-mode-display'>
        <h1 className='text-2xl font-bold'>Archive</h1>
      </div>

      <div className='@2xl/main:flex flex-row gap-x-12  @max-2xl/main:py-3 items-start'>
        <div className='relative basis-1/3 grow pt-3'>
          <div className='sticky top-3 mb-4'>
            <p className='mb-10'>A repository containing some of the projects I have worked on.</p>
            <ViewToggle />
          </div>
        </div>
        <div className=' dark:border-neutral-400/15 rounded-[calc(var(--radius-sm)+1px)] overflow-hidden @container/archive-index basis-3/4 grow text-sm'>
          <div className='grid grid-cols-[auto_auto_auto_1fr] @lg/archive-index:grid-cols-[auto_auto_auto_1fr_auto] pt-1'>
            <ProjectBlock
              title='Carder Event Platform'
              description='Audience engagement platform for in-person events'
              code='CEPL'
              seq='001'
              to='/archive/CEPL-carder'
              skills={['api and system design', 'solution architecture', 'ui/ux design']}
              detailed={detailed}
              type='project'
            />
            <ProjectBlock
              title='Project Aileron'
              description='Designing, developing, deploying, and maintaining an interactive learning platform'
              code='ALRN'
              seq='002'
              to='/archive/ALRN-aileron'
              skills={['full-cycle product mgmt', 'DevOps (CI/CD)', 'react.js']}
              type='project'
              detailed={detailed}
            />
            <ProjectBlock
              title='Data extraction'
              detailed={detailed}
              description='Scraping data from regulatory PDF documents, handling inconsistencies in formatting and edge cases'
              code='DEXT'
              seq='003'
              skills={["python", "pdf document ingestion"]}
              href='https://github.com/chrisyalamov/regulatory-doc-extraction-py'
              type='Project'
              external
            />
            <ProjectBlock
              title='Recruitment system'
              detailed={detailed}
              description='AI-enhanced data management system that streamlines the recruitment process'
              code='HK19'
              seq='004'
              to='/archive/HK19-hack19'
              type='project'
              skills={["AI (LLM) integration", "postgresql", "serverless"]}
            />
            <ProjectBlock
              title='Credit Suisse OSA'
              detailed={detailed}
              description='Making due diligence, KYC, AML, and portofolio management a breeze for relationship managers'
              code='CRSS'
              seq='005'
              to='/archive/CRSS-credit-suisse-osa'
              type="project"
              skills={["ui/ux design", "value proposition", "design thinking"]}
            />
            <ProjectBlock
              title='Workflow automation'
              detailed={detailed}
              description="Modernising a creative studio's workflows to capture the value they delivered to clients"
              code='RCLA'
              seq='006'
              to='/archive/RCLA-studio-process-automation'
              type="case study"
              skills={["azure serverless functions", "event-driven system", "service architecture"]}
            />
          </div>
        </div>
      </div>
    </SingleColumn>
    <Footer />
  </>
}
