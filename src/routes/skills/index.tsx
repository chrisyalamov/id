import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/skills/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='p-10 bg-neutral-400/10 text-neutral-400 flex items-center justify-center rounded'>
    Select a skill to find out more.
  </div>
}
