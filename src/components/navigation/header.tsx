import type { HTMLProps } from "react";
import { TwoLines } from "../../icons/two-lines.tsx";
import { Badge, type BadgeProps } from "../badge.tsx";

type HeaderProps = HTMLProps<HTMLDivElement> & {
    inSidebar: boolean
    badgeProps?: BadgeProps
    locator?: React.ReactNode
}

export const Header = ({ locator, ...props }: HeaderProps) => {
    const cn_navheader = `
        ${props.className ?? ""} 
        ${!locator && "h-8"}
        flex items-center justify-between gap-4
    `.trim()

    const cn_toggle = `
        pl-3 py-3 hover:cursor-pointer
        hover:text-[light-dark(var(--color-blue-600),var(--color-amber-400))]
        active:text-[light-dark(var(--color-blue-600),var(--color-amber-400))]
        active:opacity-50
        ${props.inSidebar ? "block md:hidden" : ""}
        buffer-zone buffer-zone-10
    `

    return <div
        {...props}
        className={cn_navheader}
    >
        {
            locator
            || <Badge className="grow" guilloche={props.inSidebar} {...props?.badgeProps} />
        }

        <input type="checkbox" name="nav-open" id="nav-open" className="hidden" />
        <label htmlFor="nav-open" className={cn_toggle} style={{
            viewTransitionName: "nav-toggle"
        }}>

                <TwoLines />

        </label>
    </div>
}