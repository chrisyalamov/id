import { ClientOnly } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const chrisTimezone = "Europe/London"

export const Clock = () => {
    let userLocale = 'en-US';

    if (typeof navigator !== 'undefined') { userLocale = navigator.language }

    const [userTime, setUserTime] = useState(new Date().toLocaleTimeString(userLocale, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }))

    const [chrisTime, setChrisTime] = useState(new Date().toLocaleTimeString(userLocale, {
        timeZone: chrisTimezone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }))

    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone

    useEffect(() => {
        const timer = setInterval(() => {
            setChrisTime(new Date().toLocaleTimeString(userLocale, {
                timeZone: chrisTimezone,
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            }))

            setUserTime(new Date().toLocaleTimeString(userLocale, {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            }))
        }, 1000)

        return () => clearInterval(timer)
    })


    const cn_clockDisplay = `
        grid grid-cols-subgrid col-span-3 items-center
        rounded 
        bg-black 
        border border-[light-dark(transparent,var(--color-blue-500))]
        text-white 
        px-2 py-1 
        font-pixel text-xl
    `

    return <ClientOnly>
        <div className="grid grid-cols-[1fr_auto_1fr] gap-x-5 gap-y-2">
            <div className={cn_clockDisplay}>
                <div>{userTime}</div>
                <div className="size-2 bg-red-500 rounded-full animate-[2s_flash_infinite_both_linear]" />
                <div className="text-right">{chrisTime}</div>
            </div>
            <div className="grid grid-cols-subgrid col-span-3 leading-tight text-xs">
                <div>
                    <p className="font-semibold">Local time</p>
                    <p className="opacity-50 line-clamp-1 break-all overflow-hidden text-nowrap whitespace-pre-wrap">{userTimezone}</p>
                </div>
                <div></div>
                <div className="text-right">
                    <p className="font-semibold">Chris' time</p>
                    <p className="opacity-50 line-clamp-1 break-all overflow-hidden text-nowrap whitespace-pre-wrap">{chrisTimezone}</p>

                </div>
            </div>
        </div>
    </ClientOnly>
}