import type { HTMLProps } from "react"
import { ColumnLayout, type ColumnConfig } from "./column.tsx"
import { NavBar } from "@components/navigation/index.tsx"

type LayoutProps = HTMLProps<HTMLDivElement> & {
    columnOptions?: ColumnConfig
}

/**
 * @TODO: Make option to have the navmenu have managed state, so that it can
 * be managed by the layout and we can darken and/or blur the remainder of the content
 */

export const SingleColumn = ({ columnOptions, ...props }: LayoutProps) => {
    return <ColumnLayout className="py-4" {...columnOptions}>
        <header>
            <NavBar inSidebar={false} />
        </header>
        <div {...props} />
    </ColumnLayout>
}