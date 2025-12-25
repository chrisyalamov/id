import { NavMenu } from "@components/navigation.tsx";
import type { HTMLProps } from "react";
import { ColumnLayout } from "./column.tsx";

type LayoutProps = {
    children: React.ReactNode;
} & HTMLProps<HTMLDivElement>;


export function MainLayout({ children, className, ...props }: LayoutProps) {
    const cn_main = `
        md:grid w-full
        grid-cols-[200px_1fr]
        lg:grid-cols-[300px_1fr] 
        gap-10
        lg:gap-16 
        py-4
        ${className}
    `

    return (
        <>
            <ColumnLayout className={cn_main} {...props}>
                <header>
                    <NavMenu inSidebar />
                </header>
                <main>{children}</main>
            </ColumnLayout>
        </>
    );
}