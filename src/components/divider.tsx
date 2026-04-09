import type { HTMLProps } from "react";
import { LuAsterisk } from "react-icons/lu";

type DividerProps = {
    type: "normal" | "strong" | "solid" | "heavy" | "spaced"
    lines: number
} & HTMLProps<HTMLDivElement>

export const Divider = ({ type = "normal", lines = 4, className, ...props }: DividerProps) => {
    let cn_spacing = `gap-px`
    let cn_line;

    switch (type) {
        case "normal":
            cn_line = "h-px w-full bg-current/15";
            break;
        case "strong":
            cn_line = "h-px w-full bg-current/20";
            break;
        case "solid":
            cn_line = "h-px w-full bg-current";
            break;
        case "heavy":
            cn_line = "h-1 w-full bg-current";
            break;
        case "spaced":
            cn_line = "h-px w-full bg-current/10"
            cn_spacing = "gap-[2px]"
            break;
        default:
            cn_line = "h-px w-full bg-current/10";
    }

    const cn_container = `
        flex flex-col items-stretch justify-center
        ${cn_spacing}
        ${className ?? ""}
    `

    return <div {...props} className={cn_container}>
        {
            new Array(lines).fill(0).map((_, i) => (
                <div key={i} className={cn_line} />
            ))
        }
    </div>
}

export const BlockDivider = () => {
    return <div className="bg-current/10 text-neutral-400 rounded w-full flex items-center justify-center px-4 py-3">
        <LuAsterisk />
        <LuAsterisk />
        <LuAsterisk />
    </div>
}