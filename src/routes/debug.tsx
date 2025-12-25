import { createFileRoute } from '@tanstack/react-router'
import { NavMenu } from "@components/navigation.tsx";

export const Route = createFileRoute('/debug')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <NavMenu />
  </div>
}
