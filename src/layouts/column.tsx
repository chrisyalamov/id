import type { HTMLProps } from "react";

export type ColumnConfig = {
    variant?: "base" | "sm" | "xs" | "2xs" | "3xs" | "xl" | "lg" | "2xl" | "full"
    noPadding?: boolean
    centre?: boolean
} 

export type ColumnProps = ColumnConfig & HTMLProps<HTMLDivElement>

export const ColumnLayout = ({ className, variant = "base", noPadding = false, centre = false, ...props }: ColumnProps) => {
    let cn_width = ""

    /**
     * DO NOT OPTIMISE THIS - IT NEEDS TO BE A SWITCH CASE.
     * 
     * This string cannot be dynamically built, as Tailwind will be able to 
     * detect that the classnames are being used.
     */
    switch (variant) {
        case "sm":
            cn_width = "max-w-col-sm"
            break;
        case "xs": 
            cn_width = "max-w-col-xs"
            break;
        case "2xs": 
            cn_width = "max-w-col-2xs"
            break;
        case "3xs": 
            cn_width = "max-w-col-3xs"
            break;
        case "base":
            cn_width = "max-w-col-base"
            break;
        case "lg":
            cn_width = "max-w-col-lg"
            break;
        case "xl":
            cn_width = "max-w-col-xl"
            break;
        case "2xl":
            cn_width = "max-w-col-2xl"
            break;
        default:
            break;
    }

    const cn_padding = noPadding ? "" : "px-6 "
    
    const cn_column = `
        ${centre ? "mx-auto" : ""}
        ${cn_padding}
        ${cn_width}
        ${className}
    `.trim()

    return <div className={cn_column} {...props} />
}