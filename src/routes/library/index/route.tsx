import { Footer } from '@/components/footer'
import { SingleColumn } from '@/layouts/single-column'
import { createFileRoute, Link, type LinkProps } from '@tanstack/react-router'
import { formatDate } from '../-format-date'

export const Route = createFileRoute('/library/')({
  component: RouteComponent,
})

type PostBlockProps = {
  title: string
  description: string
  date: Date
} & LinkProps

const PostBlock = ({title, description, date, ...props}: PostBlockProps) => {
  return <Link className='flex flex-col sm:flex-row items-start justify-between gap-y-2 gap-x-4 -mx-2 px-2 py-1.5 pointer-coarse:py-3 rounded hover:bg-neutral-400/10 active:opacity-50 mb-4' {...props}>
    <div>
      <h2 className='font-semibold underline underline-offset-2 decoration-dotted decoration-neutral-400/50'>{title}</h2>
      <p className='opacity-75 text-xs'>{description}</p>
    </div>
    <div className='text-xs opacity-50 text-nowrap'>
      {formatDate(date)}
    </div>
  </Link>
}

function RouteComponent() {
  return <>
    <SingleColumn columnOptions={{ variant: 'base' }} className='@container/article'>
      <div className='min-h-24 lg:min-h-44 flex items-end border-b border-neutral-500/20 py-3'>
        <h1 className='text-2xl font-semibold'>Library</h1>
      </div>
      <div className='py-3'>
        <PostBlock 
          title='Approaches to Multitenancy'
          description='Notes on implementing multi-tenant architectures'
          date={new Date("2023-12-24")}
          to='/library/multitenancy'
        />
      </div>
    </SingleColumn>
    <Footer />
  </>
}
