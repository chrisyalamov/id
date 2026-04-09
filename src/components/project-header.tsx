import { ColumnLayout, type ColumnConfig } from "@/layouts/column"
import { Badge, type BadgeProps } from "./badge"
import { NavBar } from "./navigation"
import { Divider } from "./divider.tsx";

type ProjectHeaderContainerProps = {
    name: string
    code?: string
    descriptors?: React.ReactNode
    category?: string
    dark?: boolean
    className?: string
    badgeProps?: BadgeProps
    columnVariant?: ColumnConfig["variant"]
    accented?: boolean
}

export const ProjectHeaderContainer = (props: ProjectHeaderContainerProps) => {
    const { name, code, descriptors, className, badgeProps, category = "Project" } = props
    const bgClass = props.dark ? "bg-black text-white scheme-only-dark" : "bg-white dark:bg-black"

    return <div
        className={`
            relative 
            border-b 
            ${className} ${bgClass} 
            border-(--project-header-border_) 
            [--project-header-accent_:var(--project-header-accent,currentColor)] 
            [--project-header-border_:var(--project-header-border,var(--project-header-accent,light-dark(var(--color-neutral-100),var(--color-neutral-900))))]
            font-mode-display`}
    >
        <div className={`${
            props?.accented
            ? "bg-[light-dark(var(--color-neutral-50),var(--color-neutral-950))]"
            : "bg-[light-dark(var(--color-neutral-100),var(--color-neutral-900))]"
        } sticky top-0`}>
            <ColumnLayout variant={props?.columnVariant ?? "full"}>
                <div className="py-3">
                    <NavBar
                        inSidebar={false}
                        badgeProps={badgeProps}
                        locator={
                            <div className={`flex gap-1.5 md:gap-2 items-start max-w-screen grow`}>
                                <Badge />

                                {
                                    code
                                        ? <div className={`font-bold px-1.5 inline rounded-sm text-xs leading-4
                                        ${props.dark
                                                ? "border text-white"
                                                : "bg-black text-white border border-black dark:bg-transparent dark:text-white dark:border-white"
                                            }`}>
                                            {code}
                                        </div>
                                        : null
                                }

                                <svg className="size-[calc(1rem+2px)] shrink-0 text-(--project-header-accent_)" width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.342429 18.2846C-2.08719e-07 17.6125 -2.8563e-07 16.7328 -4.39453e-07 14.9732L-1.309e-06 5.02677C-1.46282e-06 3.26724 -1.53974e-06 2.38747 0.342428 1.71542C0.643636 1.12426 1.12426 0.643637 1.71541 0.342428C2.38747 -2.08719e-07 3.26724 -2.85631e-07 5.02677 -4.39454e-07L14.9732 -1.30901e-06C16.7328 -1.46283e-06 17.6125 -1.53974e-06 18.2846 0.342427C18.8757 0.643635 19.3564 1.12426 19.6576 1.71541C20 2.38747 20 3.26723 20 5.02677L20 14.9732C20 16.7328 20 17.6125 19.6576 18.2846C19.3564 18.8757 18.8757 19.3564 18.2846 19.6576C17.6125 20 16.7328 20 14.9732 20L5.02677 20C3.26724 20 2.38747 20 1.71542 19.6576C1.12426 19.3564 0.643638 18.8757 0.342429 18.2846ZM7.08363 14.2929C6.6418 14.2929 6.28363 13.9347 6.28363 13.4929C6.28363 13.0511 6.6418 12.6929 7.08363 12.6929L11.9405 12.6929L5.95226 6.70469C5.63984 6.39228 5.63984 5.88574 5.95226 5.57332C6.26468 5.2609 6.77121 5.2609 7.08363 5.57332L13.0719 11.5615L13.0719 6.70469C13.0719 6.26287 13.43 5.90469 13.8719 5.90469C14.3137 5.90469 14.6719 6.26286 14.6719 6.70469L14.6719 13.4929C14.6719 13.9347 14.3137 14.2929 13.8719 14.2929L7.08363 14.2929Z" fill="currentColor" />
                                </svg>

                                <div>
                                    <p className="text-base font-bold leading-none" style={{ viewTransitionName: `title${code}` }}>{name}</p>
                                    <p className="text-base leading-none">{category}</p>
                                </div>
                            </div>
                        }
                    />
                </div>

                {
                    descriptors &&
                    <div className="w-full grow">
                        <Divider type="normal" lines={1} />

                        <div className={`flex gap-10 flex-wrap mt-4 pb-20`}>
                            {descriptors}
                        </div>
                    </div>
                }
            </ColumnLayout>
        </div>
        <hr className={`border-(--project-header-border_) border-[1em]`} />
    </div>
}