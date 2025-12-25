import { Link } from "@tanstack/react-router"
import { TbCircleFilled, TbTriangleSquareCircleFilled } from "react-icons/tb"
import { Route } from "./index.tsx";

export const ViewToggle = () => {
  const { detailed } = Route.useSearch()

  const cn_link_base = `
    gap-2 underline underline-offset-4 hover:opacity-100 active:opacity-30 select-none
    rounded-[calc(var(--radius-md)-1px)] flex items-center justify-center p-3 
  `

  const cn_link_current = `
    decoration-neutral-400
    bg-white dark:bg-neutral-800 
    text-black dark:text-white
    dark:bg-[radial-gradient(150%_100%_at_50%_0,transparent,rgb(0_0_0/5%))]
    shadow-[inset_0_1px_1px_-1px_rgb(255_255_255/20%),inset_0_1px_1px_rgb(255_255_255/5%),0_0_2px_rgb(0_0_0/20%)]
  `

  const cn_link_inactive = `
    decoration-dotted decoration-neutral-400/50 opacity-80
    text-neutral-800 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/5
  `

  return <>
    <div className='p-px bg-neutral-200 dark:bg-black rounded-md mb-10 shadow-[0_0_1px_rgb(255_255_255/10%)] flex flex-col items-stretch overflow-hidden'>
      <div className='grid grid-cols-2 font-semibold text-xs gap-px'>
        <Link
          to='.'
          search={{ detailed: true }}
          className={`${cn_link_base} ${detailed ? cn_link_current : cn_link_inactive}`}
        >
          <TbTriangleSquareCircleFilled className='h-4' />
          Detailed
        </Link>
        <Link
          to='.'
          search={{ detailed: false }}
          className={`${cn_link_base} ${detailed ? cn_link_inactive : cn_link_current}`}
        >
          Compact
          <TbCircleFilled className='h-4' />
        </Link>
      </div>
      <p className='my-3 text-xs text-neutral-500 text-balance text-center max-w-[40ch] self-center'>
        {
          detailed
            ? "Full details about each project, including relevant skills."
            : "Only project name is visible."
        }
      </p>
    </div>
  </>
}