import type { BadgeProps } from "../badge.tsx";
import { Header } from "./header.tsx";
import { Menu } from "./menu.tsx";

type NavBarProps = {
    inSidebar?: boolean
    locator?: React.ReactNode
    badgeProps?: BadgeProps
}

export const NavBar = ({
    inSidebar = false,
    locator,
    badgeProps
}: NavBarProps) => {
    return (
        <div id="nav-root">
            <Header
                inSidebar={inSidebar}
                badgeProps={badgeProps}
                locator={locator}
            />

            {/* @TODO: Add fallback for progressive enhancement  */}
            <Menu inSidebar={inSidebar} />
        </div>
    )
}

