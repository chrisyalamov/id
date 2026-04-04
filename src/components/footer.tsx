import { ColumnLayout, type ColumnProps } from "@layouts/column.tsx"

export const Footer = (props: ColumnProps) => {
    const currentYear = new Date().getFullYear()

    return <div  className="bg-neutral-400/10 text-current/50 py-4 text-sm">
        <ColumnLayout {...props}>
            Christian Yalamov &copy; {currentYear}
        </ColumnLayout>
    </div>
}