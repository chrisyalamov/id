import { Divider } from '@components/divider.tsx'
import { SingleColumn } from '@layouts/single-column.tsx'
import { createFileRoute, Link } from '@tanstack/react-router'
import { HiMiniAcademicCap } from "react-icons/hi2"
import { PropLine } from '../profile/academic.tsx'
import { FiArrowUpRight, FiChevronRight } from 'react-icons/fi'
import { Footer } from '@components/footer.tsx'

export const Route = createFileRoute('/about/')({
  component: RouteComponent,
})

const cn_badge = `
    size-3 rounded-sm mr-2 
    bg-(--badge-color,currentColor) 
    shrink-0
    group-hover:bg-transparent group-active:bg-transparent
    border-2 border-transparent
    group-hover:border-(--badge-color) group-active:border-(--badge-color)
  `.trim()

const Education = <>
  <div className='relative pb-10'>
    <h2 className='sticky top-4 font-semibold'>Education</h2>
  </div>
  <div className='@container/content text-justify hyphens-auto'>
    <div className='grid grid-cols-[repeat(5,auto)] max-w-full overflow-x-auto [&_*]:text-nowrap snap-x mask-fade-right [--fade-size:2.5rem]'>
      <div className='grid col-span-full grid-cols-subgrid pb-3 border-b border-neutral-400/40 [&>*]:snap-start text-neutral-400'>
        <div className='border-r border-neutral-400/25 leading-3 pr-3'>Year</div>
        <div className='border-r border-neutral-400/25 leading-3 px-3'>Qualification</div>
        <div className='border-r border-neutral-400/25 leading-3 px-3'>Discipline</div>
        <div className='border-r border-neutral-400/25 leading-3 px-3'>Issuing body</div>
        <div className='leading-3 pl-3 pr-10'>Result</div>
      </div>
      <div className='grid col-span-full grid-cols-subgrid [&>*]:py-2.5 border-b border-neutral-400/15'>
        <div className='border-r border-neutral-400/15 leading-3 pr-3'>2025</div>
        <div className='border-r border-neutral-400/15 leading-3 px-3'>BSc (Hons.)</div>
        <div className='border-r border-neutral-400/15 leading-3 px-3'>Business Technology</div>
        <div className='border-r border-neutral-400/15 leading-3 px-3'>Manchester Metropolitan University</div>
        <div className='leading-3 pl-3 pr-10'>First-Class Honours</div>
      </div>
      <div className='grid col-span-full grid-cols-subgrid [&>*]:py-2.5 border-b border-neutral-400/15'>
        <div className='border-r border-neutral-400/15 leading-3 pr-3'>2021</div>
        <div className='border-r border-neutral-400/15 leading-3 px-3'>CertHE</div>
        <div className='border-r border-neutral-400/15 leading-3 px-3'>Business and Management</div>
        <div className='border-r border-neutral-400/15 leading-3 px-3'>University of the West of England, Bristol</div>
        <div className='leading-3 pl-3 pr-10'>Distinction</div>
      </div>
      <div className='grid col-span-full grid-cols-subgrid [&>*]:py-2.5 border-b border-neutral-400/15'>
        <div className='border-r border-neutral-400/15 leading-3 pr-3'>2020</div>
        <div className='border-r border-neutral-400/15 leading-3 px-3'>A-Level</div>
        <div className='border-r border-neutral-400/15 leading-3 px-3'>Computer Science, Mathematics, Business</div>
        <div className='border-r border-neutral-400/15 leading-3 px-3'>AQA; Pearson</div>
        <div className='leading-3 pl-3 pr-10'>AAA</div>
      </div>
    </div>

    <div className='flex items-center justify-end rounded-b gap-2 flex-wrap -mt-px text-2xs uppercase font-semibold text-neutral-400 py-1'>
      <div><span className='pointer-coarse:hidden'>Scroll</span><span className='hidden pointer-coarse:inline'>Swipe</span> for more info</div>
      <div className='flex items-center text-sm'>
        <FiChevronRight className='h-[0.8lh] animate-[fade-out_0.75s_ease_infinite_alternate]' />
        <FiChevronRight className='h-[0.8lh] -ml-2 animate-[fade-out_0.75s_ease_infinite_alternate] [animation-delay:0.3s]' />
        <FiChevronRight className='h-[0.8lh] -ml-2 animate-[fade-out_0.75s_ease_infinite_alternate] [animation-delay:0.6s]' />
      </div>
    </div>

    <div className='gap-x-2 flex flex-wrap text-sm my-4'>
      <span>For a more detailed breakdown, see my</span>
      <Link
        to='/profile/academic'
        className='inline-flex items-center gap-1 underline underline-offset-4 hover:opacity-75 active:opacity-40'
      >
        <HiMiniAcademicCap />
        Academic profile
        <FiArrowUpRight />
      </Link>
    </div>
  </div>
</>

const Credentials = <>
  <div className='relative pb-10'>
    <h2 className='sticky top-4 font-semibold'>Credentials</h2>
  </div>

  <div className='@container/content'>
    <div className='font-semibold uppercase flex items-center gap-1 [--badge-color:var(--color-indigo-500)] text-sm'>
      <div className={cn_badge} />
      <span>Microsoft Azure</span>
    </div>
    <div className='grid @lg/content:grid-cols-[6rem_1fr] gap-x-10 gap-y-0.5 items-center my-4 leading-none'>
      <PropLine label='Certificate' value='Microsoft Certified: Azure Fundamentals' />
      <PropLine label='Exam' value='AZ-900' />
      <PropLine label='Awarded by' value='PearsonVUE Certiport' />
    </div>
  </div>
</>

const Research = <>
  <div className='relative pb-10'>
    <h2 className='sticky top-4 font-semibold'>Research</h2>
  </div>
  <div>
    As part of my undergraduate degree, I conducted a research project and submitted a dissertation. My research took an in-depth look at end-user computing (primarily low-code platforms)— its adoption and impacts on organisations.
    An article detailing my findings will be posted on my blog soon.
  </div>
</>

function RouteComponent() {
  return <>
    <SingleColumn columnOptions={{ variant: 'base' }} className='@container/article'>
      <div className='min-h-24 lg:min-h-44 flex items-end border-b border-neutral-500/20 py-3'>
        <h1 className='text-2xl font-semibold'>About me</h1>
      </div>
      <div className='@lg/article:grid grid-cols-[200px_1fr] py-3'>

        {Education}

        <Divider lines={1} type='normal' className='my-4 col-span-full' />

        {Credentials}

        <Divider lines={1} type='normal' className='my-4 col-span-full' />

        {Research}
      </div>
    </SingleColumn>
    <Footer />
  </>
}
