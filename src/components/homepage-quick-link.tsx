import { DynamicMarquee } from "@components/dynamic-marquee.tsx"
import { Link, type LinkProps } from "@tanstack/react-router"
import { FiArrowUpRight } from "react-icons/fi"

type QuickLinkProps = {
  description: string
  label: string
  icon?: React.ReactElement
  primary?: boolean
} & LinkProps

export const QuickLink = ({ description, label, icon, primary = false, ...props }: QuickLinkProps) => {
  const cn_linkbase = `
    grid grid-cols-[1fr_auto] w-full gap-4 items-center 
    group 
    font-mode-display
    active:opacity-30 
    pointer-fine:active:animate-[come-in,blink_0.1s_backwards]
    my-0.5
    text-lg
    hover:corner-marks active:corner-marks corner-marks-6 corner-marks-x-5 corner-marks-opacity-50% corner-marks-y-[-1]
     
  `.trim()


  // May implement
  const cn_linknormal = `
  `.trim()

  const cn_linkprimary = `
  `.trim()

  return <Link
    {...props}
    className={`${cn_linkbase} ${primary ? cn_linkprimary : cn_linknormal}`}
  >

    <DynamicMarquee className="font-semibold group-hover:text-blue-600 dark:group-hover:text-amber-400">
      {description}
    </DynamicMarquee>
    <p className='flex items-center gap-1 text-neutral-400 group-hover:text-current text-sm'>
      <span className='uppercase'>
        {label}
      </span>
      {
        icon ?? <FiArrowUpRight  />
      }
    </p>
  </Link>
}
