import { Book } from '@/components/book'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/experimental/book1')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    
    <Link to='/experimental/book2' className='m-24 block' viewTransition>
      <Book />
    </Link>

  </div>
}
