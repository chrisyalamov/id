import { TwoLines } from "@/icons/two-lines.tsx"
import { useMediaQuery } from 'usehooks-ts'
import { Badge, type BadgeProps } from "./badge.tsx"
import { type CSSProperties, type HTMLProps } from "react"
import { ClientOnly, Link, type LinkProps } from "@tanstack/react-router"
import { IoHandLeft, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { DirectionalArrow } from "@/icons/directional-arrow.tsx"
import { Clock } from "@components/clock.tsx"
import { createClientOnlyFn } from "@tanstack/react-start"

/**
 * NavMenu
 * --->     NavHeader
 * --->     NavMenuLayout
 *          --->    primaryLinks
 *          --->    secondaryLinks
 *          --->    buttons
 */

type NavHeaderProps = HTMLProps<HTMLDivElement> & {
    inSidebar: boolean
    badgeProps?: BadgeProps
    locator?: React.ReactNode
}

type NavMenuLayoutProps = HTMLProps<HTMLDivElement> & {
    primaryLinks?: (getSeq: () => CSSProperties) => React.ReactNode
    secondaryLinks?: (getSeq: () => CSSProperties) => React.ReactNode
    buttons?: () => React.ReactNode
    inSidebar: boolean
}

type NavLinkProps = LinkProps & HTMLProps<HTMLAnchorElement> & {
    label: string
}

type NavMenuProps = {
    inSidebar?: boolean
    locator?: React.ReactNode
    badgeProps?: BadgeProps
}

export const NavHeader = ({ locator, ...props }: NavHeaderProps) => {
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

const NavMenuLayout = (props: NavMenuLayoutProps) => {
    // Generate a sequence number for animations
    let seq = 0
    const getSeq = () => ({ "--seq": seq++ } as CSSProperties)

    const isWideScreen = useMediaQuery("(min-width: 48rem)")
    const isVertical = (isWideScreen && props.inSidebar) || !isWideScreen

    const cn_navcontainer = `
        ${props.className ?? ""} 
        flex items-start justify-between gap-10
        my-4 max-h-[90vh] overflow-y-auto
        flex-wrap @container/nav
        ${props.inSidebar ? "max-md:hidden max-md:[#nav-root:has(#nav-open:checked)_&]:flex" : "hidden [#nav-root:has(#nav-open:checked)_&]:flex"}
    `

    const cn_navlinks = `
        flex flex-col gap-5
        text-current
        ${isVertical ? "w-full" : "w-max"}
    `

    const cn_buttons = `
        flex flex-col items-stretch justify-center self-stretch gap-2
        ${isVertical ? "w-full" : "w-max"}
    `


    return <div
        className={cn_navcontainer}
        onClick={closeMenu}
    >
        <div className={cn_navlinks}>
            {/* Primary links */}
            <nav>
                {props?.primaryLinks?.(getSeq)}
            </nav>
            {/* Secondary links */}
            <nav>
                {props?.secondaryLinks?.(getSeq)}
            </nav>
        </div>

        <div className={cn_buttons}>
            <ClientOnly>
                <Clock />
            </ClientOnly>
            {props?.buttons?.()}
        </div>
    </div>
}

const cn_link_base = `
    supports-hover:[nav:has(a:hover)_&:not(:hover),nav:has(a:focus-visible)_&:not(:focus-visible)]:opacity-50   
    pointer-fine:active:animate-[come-in,blink_0.1s_backwards]
    active:opacity-40 
    hover:text-[light-dark(var(--color-blue-600),var(--color-amber-400))]
    active:text-[light-dark(var(--color-blue-600),var(--color-amber-400))]
    overflow-hidden
    `.trim()

const cn_label = `    
    animate-[come-in_0.3s_linear_backwards]
    block
`.trim()

const closeMenu = createClientOnlyFn(() => {
    const cb = document.querySelector("#nav-open");
    if (cb instanceof HTMLInputElement) {
        cb.checked = false
    }
})

const NavLinkLarge = (props: NavLinkProps) => {
    const cn_link = `
        text-xl font-bold leading-none
        py-1 flex items-center justify-between
        gap-16 @lg/nav:gap-28
        pointer-coarse:py-1.5
        ${cn_link_base}
    `

    return (
        <Link
            {...props}
            className={cn_link}
            onClick={() => closeMenu}
        >
            <span className={cn_label}>{props.label}</span>
            <DirectionalArrow direction="tr" />
        </Link>
    )


}

const NavLinkSmall = (props: NavLinkProps) => {
    const cn_link = `
        text-sm leading-none
        text-current/70
        block py-1
        pointer-coarse:text-sm pointer-coarse:py-1.5
        ${cn_link_base}
    `

    return (
        <Link
            {...props}
            className={cn_link}
            onClick={() => closeMenu}
        >
            <span className={cn_label}>{props.label}</span>
        </Link>
    )
}

const cn_navbutton_base = `
    h-9 px-8 rounded-sm pointer-coarse:h-10
    font-semibold leading-none text-sm flex items-center justify-center gap-2
    cursor-pointer
    hover:opacity-80
    active:pt-[2px] active:opacity-50
`

export const NavMenu = ({
    inSidebar = false,
    locator,
    badgeProps
}: NavMenuProps) => {
    return (
        <div id="nav-root">
            <NavHeader
                inSidebar={inSidebar}
                badgeProps={badgeProps}
                locator={locator}
            />

            <NavMenuLayout
                primaryLinks={getSeq => <>
                    <NavLinkLarge to="/about" label="About me" style={getSeq()} />
                    <NavLinkLarge to="/archive" label="My work" style={getSeq()} />
                    <NavLinkLarge to="/library" label="Library" style={getSeq()} />
                </>}

                secondaryLinks={getSeq => <>
                    <NavLinkSmall to="/profile/academic" label="Academic profile" style={getSeq()} />
                    <NavLinkSmall to="/skills" label="Skills directory" style={getSeq()} />
                    <NavLinkSmall to="/legal" label="Legal disclaimers" style={getSeq()} />
                </>}

                buttons={() => <>
                    <a href="mailto:chrisyalamov@gmail.com" className={`${cn_navbutton_base} bg-amber-300 text-black`}>
                        <IoHandLeft className="-rotate-[25deg] opacity-50" />
                        Say hello!
                    </a>
                    <a href="https://linkedin.com/in/chrisyalamov" className={`${cn_navbutton_base} bg-neutral-300/20`}>
                        <IoLogoLinkedin className="text-[light-dark(var(--color-blue-600),var(--color-blue-400))]" />
                        Connect with me
                    </a>
                    <a href="https://github.com/chrisyalamov" className={`${cn_navbutton_base} bg-neutral-300/20`}>
                        <IoLogoGithub className="text-neutral-300" />
                        See my code
                    </a>
                </>}

                inSidebar={inSidebar}
            />

        </div>
    )
}

