import { ColumnLayout } from "@/layouts/column"

type DisclosureProps = {
    children: React.ReactNode
    title: string
    code: string
}

export const DisclosureBlock = (props: DisclosureProps) => {
    const cn_codeContainer = `
        px-1 mr-3 inline-flex rounded-sm 
        border border-current 
        font-semibold leading-tight tracking-normal
        text-base  items-center
    `.trim()

    return <div>
        <h3 className="mb-2 mt-10 text-lg">
            <span className={cn_codeContainer}>
                {props.code}
            </span>
            <span className="font-semibold">
                {props.title}
            </span>
        </h3>
        <p className="text-2xs text-justify leading-tight opacity-75">
            {props.children}
        </p>
    </div>
}

type DisclosuresPanelProps = {
    children: React.ReactNode
}

export const DisclosuresPanel = (props: DisclosuresPanelProps) => {
    const cn_disclosuresPanelOuter  = `border-t px-6 border-current mt-16 md:mt-32`.trim()
    const cn_disclosuresPanelInner  = `max-w-[70ch] border-t-4 border-current py-10 pb-20`.trim()
    const cn_disclosuresPanelHeader = `uppercase font-bold flex items-center justify-between gap-2 mb-4 mt-0 text-2xl`.trim()
    
    return <div className={cn_disclosuresPanelOuter}>
        <ColumnLayout className={cn_disclosuresPanelInner} noPadding variant="3xs">
            <div>
                <h2 className={cn_disclosuresPanelHeader}>
                    <span>Disclosures</span>
                    <span className="bg-black text-white dark:bg-white dark:text-black p-1 rounded inline-block">
                        <svg width="1.37em" height="1em" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.0822 14.7596L27.2243 4.61749L25.8101 3.20327L15.668 13.3454V14.7596H17.0822ZM17.9106 16.7596H13.668V12.5169L25.103 1.08195C25.4936 0.691433 26.1267 0.691433 26.5172 1.08195L29.3457 3.91038C29.7362 4.3009 29.7362 4.93407 29.3457 5.32459L17.9106 16.7596ZM0.667969 19.7596H23.668V21.7596H0.667969V19.7596Z" fill="currentColor" />
                            <path d="M3.61328 10.0469L9.97034 16.4039L8.56165 17.8126L2.20459 11.4556L3.61328 10.0469Z" fill="currentColor" />
                            <path d="M9.97266 11.4609L3.6156 17.818L2.20691 16.4093L8.56397 10.0522L9.97266 11.4609Z" fill="currentColor" />
                        </svg>

                    </span>
                </h2>
                <p className="text-sm mb-10 text-justify leading-tight">
                    I value transparency, trust, and honesty when showcasing my work. In the interests of ethics and legal compliance, the following disclosures are made regarding the project described above:
                </p>
            </div>
            <div>
                {props.children}
            </div>
        </ColumnLayout>
    </div>
}