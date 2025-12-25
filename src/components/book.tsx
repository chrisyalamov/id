import { GuillocheContainer, MaskedGuilloche } from "./guilloche"

type BookProps = {
    open?: boolean
}

export const Book = ({ open = false }: BookProps) => {
    return <div className="perspective-distant w-max">
        <div className={`w-36 h-48 rounded relative bg-[rgb(210_210_210)] transition ${open ? "rotate-x-12" : "active:rotate-x-6 hover:scale-105 hover:brightness-105"}`} style={{
            boxShadow: open
                ? `
                0 8px 40px rgb(0 0 0 / 0.20),
                0 8px 20px rgb(0 0 0 / 0.15),
                0 1px 10px rgb(0 0 0 / 0.20),
                0 0 0 1px rgb(0 0 0 / 0.15)
            `
                : `
                0 30px 100px rgb(0 0 0 / 0.25),
                0 8px 20px rgb(0 0 0 / 0.15),
                0 1px 10px rgb(0 0 0 / 0.20),
                0 0 0 1px rgb(0 0 0 / 0.15)
            `,
            viewTransitionName: "book",
            transformOrigin: "bottom",
        }}>
            <div className="size-full flex flex-col justify-stretch items-stretch bg-[rgb(241,237,234)] rounded overflow-hidden absolute inset-0" style={{
                transformOrigin: "bottom left",
                transform: open ? "rotateY(-25deg) skewY(-5deg)" : "rotateY(0deg) skewY(0deg)",
                viewTransitionName: "cover",
                boxShadow: open ? `
                    1px 1px 3px rgb(0 0 0 / 40%),
                    2px 2px 8px rgb(0 0 0 / 20%)
                `
                    : ""
            }}>
                <svg viewBox='0 0 250 250' className="size-full mix-blend-overlay opacity-50 absolute rounded inset-0 z-20" xmlns='http://www.w3.org/2000/svg' preserveAspectRatio="xMidYMid slice">
                    <filter id='noiseFilter'>
                        <feTurbulence
                            type='fractalNoise'
                            baseFrequency='0.35'
                            numOctaves='3'
                            stitchTiles='stitch' />
                    </filter>
                    <rect width='100%' height='100%' filter='url(#noiseFilter)' />
                </svg>
                <div className="absolute rounded inset-0 size-full z-10" style={{
                    background: open
                        ? `
                            linear-gradient(to bottom right, rgb(0 0 0 / 3%), rgb(0 0 0 / 20%)),
                            radial-gradient(circle at top left, rgb(255 255 255 / 20%), transparent),
                            linear-gradient(to top left, rgb(0 0 0 / 5%), rgb(255 255 255 / 10%))
                        `
                        : `
                            linear-gradient(to bottom, rgb(0 0 0 / 3%), rgb(0 0 0 / 20%)),
                            radial-gradient(circle at top right, rgb(255 255 255 / 20%), transparent)
                        `,
                    boxShadow: open
                        ? `
                        inset 0 0 1px rgb(0 0 0 / 0.25),
                        inset 2px -1px 5px -3px rgb(0 0 0 / 0.10),
                        inset 2px -1px 1px 1px rgb(0 0 0 / 0.1),
                        inset 0 0 1px 0.5px white
                            `
                        : `
                        inset 0 -1px 2px rgb(0 0 0 / 0.25),
                        inset 8px 0 5px -5px rgb(0 0 0 / 0.2),
                        inset 4px 0 1px 1px rgb(0 0 0 / 0.1),
                        inset 0 0 0 1px rgb(255 255 255 / 50%)
                            `
                }}>
                </div>
                <div className="h-18 text-sm p-3 px-4 font-bold uppercase font-display leading-none">Solutions architecture</div>
                <div className="grow bg-amber-400">
                    <GuillocheContainer className="size-full">
                        <MaskedGuilloche style={{ backgroundColor: "white", transform: "translateX(-50%) translateY(-50%) rotateZ(18deg)", maskSize: "60px" }} />
                    </GuillocheContainer>
                </div>
            </div>
            <div className="size-full flex flex-col justify-stretch items-stretch bg-[rgb(250_250_250)] rounded overflow-hidden absolute inset-0 -z-10" style={{
                transformOrigin: "bottom left",
                transform: open ? "rotateY(-20deg) skewY(-4deg)" : "rotateY(0deg) skewY(0deg)",
                boxShadow: open ? "1px 0 1px rgb(0 0 0 / 10%), 0 0 6px rgb(0 0 0 / 10%)" : "",
                viewTransitionName: "page1"
            }} />
            <div className="size-full flex flex-col justify-stretch items-stretch bg-[rgb(240_240_240)] rounded overflow-hidden absolute inset-0 -z-20" style={{
                transformOrigin: "bottom left",
                transform: open ? "rotateY(-15deg) skewY(-3deg)" : "rotateY(0deg) skewY(0deg)",
                boxShadow: open ? "1px 0 1px rgb(0 0 0 / 10%), 0 0 6px rgb(0 0 0 / 10%)" : "",
                viewTransitionName: "page2"
            }} />
            <div className="size-full flex flex-col justify-stretch items-stretch bg-[rgb(230_230_230)] rounded overflow-hidden absolute inset-0 -z-30" style={{
                transformOrigin: "bottom left",
                transform: open ? "rotateY(-10deg) skewY(-2deg)" : "rotateY(0deg) skewY(0deg)",
                boxShadow: open ? "1px 0 1px rgb(0 0 0 / 10%), 0 0 6px rgb(0 0 0 / 10%)" : "",
                viewTransitionName: "page3"
            }} />
            <div className="size-full flex flex-col justify-stretch items-stretch bg-[rgb(220_220_220)] rounded overflow-hidden absolute inset-0 -z-40" style={{
                transformOrigin: "bottom left",
                transform: open ? "rotateY(-5deg) skewY(-1deg)" : "rotateY(0deg) skewY(0deg)",
                boxShadow: open ? "1px 0 1px rgb(0 0 0 / 10%), 0 0 6px rgb(0 0 0 / 10%)" : "",
                viewTransitionName: "page4"
            }} />
        </div>
    </div>
}