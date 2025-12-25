import { createRouter as createTanstackRouter } from '@tanstack/react-router'
import { routeTree } from "./routeTree.gen"
import { Badge } from '@components/badge.tsx'

// Create a new router instance
export const createRouter = () => createTanstackRouter({
    routeTree,
    context: {},
    defaultPreload: 'intent',
    scrollRestoration: true,
    defaultStructuralSharing: true,
    defaultPreloadStaleTime: 0,
    defaultPendingComponent: () => <div className='h-screen w-screen flex items-center gap-2 justify-center'>
      <Badge />
      <span className='font-ocr uppercase'>Loading...</span>
    </div>,
    defaultPendingMinMs: 0,
    defaultPendingMs: 0
})

export function getRouter() {
  const router = createRouter()
  return router
}


// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
      router: ReturnType<typeof createRouter>
    }
  }