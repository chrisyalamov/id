import { createFileRoute } from '@tanstack/react-router'
import { NavBar } from "@components/navigation/index.tsx";

export const Route = createFileRoute('/debug')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <NavBar />
  </div>
}
