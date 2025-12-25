type SpacerProps = {
    size?: "sm" | "md" | "lg"
}
export function Spacer({ size = "md" }: SpacerProps) {
    let cn; 

    switch (size) {
        case "sm":
            cn = "h-2";
            break;
        case "md":
            cn = "h-4";
            break;
        case "lg":
            cn = "h-8";
            break;
        default:
            cn = "h-4";
    }
  
    return <div className={cn} />
}