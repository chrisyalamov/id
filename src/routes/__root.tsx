import { type ReactNode } from 'react'
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  Link,
} from '@tanstack/react-router'
import css_main from "@/styles.css?url"
import 'react-photo-view/dist/react-photo-view.css';
import { Badge } from '@/components/badge';
import { FiArrowDownLeft } from 'react-icons/fi';
import favicon from "@/media/favicon.png?url"

const cn_notfound_quicklink = `
  flex text-lg opacity-60 hover:opacity-100 active:opacity-40 font-medium
  underline underline-offset-3 decoration-current/50 
  items-stretch gap-2 leading-5 my-1.5
  before:content-[''] before:w-2 before:border-2 before:border-current/50 before:rounded-xs
  hover:decoration-dotted decoration-1
`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Christian Yalamov',
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: css_main
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: ''
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&display=swap"
      },
      {
        rel: "icon",
        href: favicon
      }
    ],
  }),
  notFoundComponent: () => <div className='p-6'>
    <Badge />
    <h1 className='text-4xl font-bold tracking-normal mt-20 mb-8 flex items-center leading-7'>
      <div className='self-stretch w-2 rounded-xs bg-red-500 inline-block mr-2' />
      Not found
    </h1>
    <p className='my-4'>
      The page you are looking for could not be found.
    </p>
    <p className='my-4'>
      <strong>Quick links</strong><FiArrowDownLeft className='inline text-lg' />
      <Link to="/" className={cn_notfound_quicklink}>Homepage</Link>
      <Link to="/about" className={cn_notfound_quicklink}>About me</Link>
      <Link to="/archive" search={{ detailed: false }} className={cn_notfound_quicklink}>Archive of work</Link>
    </p>
  </div>,
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body id="app">
        {children}
        <Scripts />
      </body>
    </html>
  )
}