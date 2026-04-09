import { type CSSProperties, type HTMLProps } from "react";
import { useResizeObserver } from '@mantine/hooks';

type DynamicMarqueeProps = HTMLProps<HTMLDivElement> & {
    secPerCharacter?: number,
    secPause?: number
}

export function DynamicMarquee({style, secPerCharacter = 0.08, secPause = 2, ...props}: DynamicMarqueeProps) {
    let [containerRef, containerRect] = useResizeObserver({ box: "border-box" })
    let [spanRef, spanRect] = useResizeObserver({ box: "content-box"})

    const isOverflowing = containerRect && spanRect && (spanRect.width > containerRect.width);
    const overflowAmount = isOverflowing 
        ? Math.ceil((spanRect.width) - containerRect.width)
        : 0;

    const duration = overflowAmount * secPerCharacter; // every px overflow adds 0.4
    const breakDuration = secPause;
    const totalDuration = (duration * 2) + (breakDuration * 2);

    const percentages = [
        0,
        breakDuration / totalDuration,
        0.5,
        0.5 + breakDuration / totalDuration,
        1
    ]

    const animationTimingFunction = `linear(
        0 0%,
        0 ${percentages[1]*100}%,
        1 50%,
        1 ${percentages[3]*100}%,
        0 100%
    )`
    

    return <div ref={containerRef} className="w-full overflow-hidden flex" style={{
        maskImage: isOverflowing ? "linear-gradient(to right, transparent, black 4px, black calc(100% - 8px), transparent 100%)" : undefined,
    }}>
        <div 
            ref={spanRef as any}
            {...props} 
            style={{
                wordWrap: "break-word", 
                textWrap: "nowrap",
                "--marquee-overflow-distance": `${overflowAmount}px`,
                animationDuration: `${totalDuration}s`,
                animationName: "overflow-scroll",
                animationTimingFunction,
                animationIterationCount: "infinite",
                willChange: "transform",
                ...style, 
            } as CSSProperties} 
        />
    </div>
}