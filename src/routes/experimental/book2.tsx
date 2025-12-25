import { Book } from '@/components/book'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/experimental/book2')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    
    <div className='m-24 block'>
      <Book open />
    </div>
  </div>
}
