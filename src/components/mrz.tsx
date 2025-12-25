export const GTLeader = ({ size }: { size: number }) => {
    return <span className="opacity-25 text-clip overflow-hidden">
        {Array.from({ length: size }).map(() => ">")}
    </span>
}

export type MRZProps = {
    text: string
    maxLineLength?: number
    maxLines?: number
    fill?: 'start' | 'end'
    separatorsVisible?: boolean
    bracketed?: boolean
}


export const MRZ = ({ text, maxLineLength, maxLines, fill = 'start', bracketed = false }: MRZProps) => {
    const words = text.split(" ")
    let lines = [""]
    maxLineLength = maxLineLength ? maxLineLength - ( bracketed ? 4 : 0) : 32

    words.forEach((word) => {
        const currentLine = lines[lines.length - 1]
        const currentLineWidth = currentLine.length
        if (currentLineWidth + word.length < maxLineLength) {
            lines[lines.length - 1] += ` ${word}`
        } else {
            lines.push(word)
        }
        lines[lines.length - 1] = lines[lines.length - 1].trim()
    })

    lines = lines.slice(0, maxLines)

    return <div className="font-ocr uppercase text-nowrap leading-4 tracking-tight">
        {
            lines.map((line, i) => {
                const remainingSpace = maxLineLength - line.length

                if (fill === 'start') {
                    return <div key={i}>
                        {
                            bracketed ? <span className="opacity-25">[&nbsp;</span> : <></>
                        }
                        <GTLeader size={remainingSpace} />
                        {line}
                        {
                            bracketed ? <span className="opacity-25">&nbsp;]</span> : <></>
                        }
                        <br />
                    </div>
                } else {
                    return <div key={i}>
                        {
                            bracketed ? <span className="opacity-25">[&nbsp;</span> : <></>
                        }
                        {line}
                        <GTLeader size={remainingSpace} />
                        {
                            bracketed ? <span className="opacity-25">&nbsp;]</span> : <></>
                        }
                        <br />
                    </div>
                }
            })
        }
    </div>
}