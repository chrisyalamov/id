import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/library/_posts/schema-management')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/library/schema-management"!</div>
}
