import { Divider } from '@components/divider.tsx'
import { Footer } from '@components/footer.tsx'
import { SingleColumn } from "@layouts/single-column.tsx"
import { createFileRoute, Link } from '@tanstack/react-router'
import { FiChevronRight } from 'react-icons/fi'
import { BsInfoCircleFill } from "react-icons/bs";
import { IoChevronUpCircle } from 'react-icons/io5'

export const Route = createFileRoute('/profile/academic')({
  component: RouteComponent,
})
const cn_badge = `
    size-3 rounded-sm mr-2 
    bg-blue-600 dark:bg-amber-300
    shrink-0
    group-hover:bg-transparent group-active:bg-transparent
    border-2 border-transparent
    group-hover:border-(--badge-color) group-active:border-(--badge-color)
  `.trim()

const cn_propLine = `grid col-span-full grid-cols-subgrid my-0.5`.trim()

type PropLineProps = {
  label: string;
  value: string | React.ReactElement;
}

export function PropLine(props: PropLineProps) {
  return <div className={cn_propLine}>
    <p className='opacity-50 text-sm line-clamp-1 text-ellipsis break-all leading-none'>{props.label}</p>
    <p className='font-ocr uppercase text-[0.75rem] leading-[1.18] tracking-tighter'>{props.value}</p>
  </div>
}

type TextBlockProps = {
  children: React.ReactNode
  id: string
}

const cn_textBlock = `
  text-justify text-xs break-words hyphens-auto leading-tight 
  gap-5 border border-neutral-400/20 py-2.5 px-3.5 rounded-md
  [&:has(input:not(:checked))_#content]:line-clamp-5
  [&:has(input:not(:checked))_#content]:opacity-50
  [&:has(input:not(:checked))_#content]:text-left
  [&:has(input:checked)]:bg-neutral-400/5
  [&:has(input:checked)]:border-transparent
`.trim()

const cn_readMoreToggleBase = `
  items-center justify-between gap-4 pt-4
  text-right text-blue-600 dark:text-amber-400 
  font-medium
  hover:underline underline-offset-2 
  cursor-pointer
  active:opacity-50
  snap-start
`

function TextBlock(props: TextBlockProps) {
  return <div className={cn_textBlock}>
    <div className='flex items-start gap-4'>
      <BsInfoCircleFill className='text-lg shrink-0 text-neutral-400 mt-0.5' />
      <div id="content">{props.children}</div>
    </div>
    <input type='checkbox' className='hidden peer' id={props.id} />
    <label className={`flex peer-checked:hidden ${cn_readMoreToggleBase}`} htmlFor={props.id}>
      Read more
    </label>
    <label className={`hidden peer-checked:flex ${cn_readMoreToggleBase}`} htmlFor={props.id}>
      Show less
      <IoChevronUpCircle className='text-xl text-neutral-500' />
    </label>
  </div>
}

function RouteComponent() {
  return <>
    <SingleColumn columnOptions={{ variant: 'base' }} className='@container/article'>
      <div className='min-h-24 lg:min-h-44 flex items-end border-b border-neutral-500/20 py-3'>
        <h1 className='text-2xl hyphens-auto'>
          <Link to='/about' className='opacity-60 hover:opacity-100 active:opacity-30'>About me</Link>
          <span className='mx-2 opacity-20'>/</span>
          <span className='font-semibold'>Academic profile</span>
        </h1>
      </div>
      <div className='@container/content col-span-full w-full overflow-x-auto snap-x snap-mandatory'>

        <div className='flex items-center rounded-b gap-2 flex-wrap -mt-px text-2xs uppercase font-semibold text-neutral-400 py-2 sticky left-0 @3xl/content:hidden'>
          <div><span className='pointer-coarse:hidden'>Scroll</span><span className='hidden pointer-coarse:inline'>Swipe</span> for more info</div>
          <div className='flex items-center text-sm'>
            <FiChevronRight className='h-[0.8lh] animate-[fade-out_0.75s_ease_infinite_alternate]' />
            <FiChevronRight className='h-[0.8lh] -ml-2 animate-[fade-out_0.75s_ease_infinite_alternate] [animation-delay:0.3s]' />
            <FiChevronRight className='h-[0.8lh] -ml-2 animate-[fade-out_0.75s_ease_infinite_alternate] [animation-delay:0.6s]' />
          </div>
        </div>

        <div className='mt-6 font-semibold uppercase flex items-center gap-1  sticky left-0'>
          <div className={cn_badge} />
          <span>Bachelor's degree</span>
        </div>

        <div className='grid grid-cols-2 items-start my-4 @max-3xl/content:w-[200%]'>
          <div className='grid grid-cols-[5rem_1fr] gap-x-8 gap-y-0.5 items-center leading-none snap-start pr-6'>
            <PropLine label='Qualification' value='BSc (Hons.)' />
            <PropLine label='Subject' value='Business Technology' />
            <PropLine label='Provider' value='Manchester Metropolitan University' />
            <PropLine label='Result' value='First class' />
          </div>

          <TextBlock id="bsc">
            <p className='font-semibold mb-4 leading-tight'>
              The curriculum taught a blend of topics from business management; software engineering; and systems design.
            </p>

            <p className='my-4'>
              Achieved the highest GPA across the department in 2023/24 at Level 5 and graduated as "overall best student" across the course.
            </p>
            <p className='my-4'>
              Served as an academic representative to the Manchester Metropolitan Students' Union, acting on behalf of the student body to bring positive changes to the course, and university, as a whole.
            </p>
            <p className='my-4'>
              Attended two exchange programmes: an exchange with the International Management Institute in Luzern, Switzerland, and the 'Doing Business in the Middle East' programme at the American University in Cairo, Egypt.
            </p>

          </TextBlock>
        </div>

        <Divider lines={1} type='normal' className='my-6 sticky left-0' />

        <div className='font-semibold uppercase flex items-center gap-1  sticky left-0'>
          <div className={cn_badge} />
          <span>Cert. of higher education</span>
        </div>
        <div className='grid grid-cols-2 items-start my-4 @max-3xl/content:w-[200%]'>
          <div className='grid grid-cols-[5rem_1fr] gap-x-8 gap-y-0.5 items-center leading-none snap-start pr-6'>
            <PropLine label='Qualification' value='CertHE' />
            <PropLine label='Subject' value='Business and Management' />
            <PropLine label='Provider' value='University of the West of England, Bristol' />
            <PropLine label='Result' value='Awarded with Distinction' />
          </div>
          <TextBlock id='certhe'>
            <p className='font-semibold mb-4 leading-tight'>
              Course with a focus on marketing and foundational concepts of business management. Key modules covered:
            </p>
            <ul className='list-disc list-inside'>
              <li className='my-2'>
                Accounting and preparation of business statements (IFRS)
              </li>
              <li className='my-2'>
                Management, leadership, and organisational politics
              </li>
              <li className='my-2'>
                <span>Design thinking, enterprise and entrepreneurial skills</span>
              </li>
              <li className='my-2'>
                <span>Statistics and foundations of data analysis</span>
              </li>
              <li className='my-2'>
                <span>Marketing, advertising, and consumer behaviour</span>
              </li>
            </ul>
          </TextBlock>
        </div>

        <Divider lines={1} type='normal' className='my-6 sticky left-0' />

        <div className='font-semibold uppercase flex items-center gap-1 sticky left-0'>
          <div className={cn_badge} />
          <span>A-Level</span>
        </div>
        <div className='grid @lg/content:grid-cols-[6rem_1fr] gap-x-10 gap-y-0.5 items-center my-4 leading-none sticky left-0'>
          <PropLine label='Subjects' value={<>Mathematics;<br />Computer Science;<br />Business Studies</>} />
          <PropLine label='Results' value="AAA" />
        </div>
      </div>

    </SingleColumn>

    <Footer />
  </>
}
