import { useServerFn } from "@tanstack/react-start";
import { serverRenderCodeBlock } from "@utils/syntax-highlight.functions.ts";
import { useSuspenseQuery } from "@tanstack/react-query"
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment, Suspense } from "react"
import { jsx, jsxs } from "react/jsx-runtime";

type CodeblockProps = {
    code: string
    language: "js" | "ts" | "sql" | "cs"
    id: string
    route?: {
        fullPath: string
    }
    containerProps?: React.HTMLProps<HTMLPreElement>
}

export const CodeblockInner = (props: CodeblockProps) => {
    // Get AST
    const renderCodeBlock = useServerFn(serverRenderCodeBlock)

    const { data } = useSuspenseQuery({
        queryKey: ["codeblock", props.route?.fullPath ?? "?", props.id],
        queryFn: () => renderCodeBlock({
            data: {
                code: props.code,
                language: props.language
            },
        }),
        staleTime: 0,
        gcTime: 0,
    })

    // @TODO: Fallback in case error handling fails
    if (!data) {
        throw new Error("unable to apply syntax highlighting")
    }

    return toJsxRuntime(data, {
        Fragment, jsx, jsxs,
    })
}

export const Codeblock = (props: CodeblockProps) => {
    const { className: containerClassName, ...containerProps } = props.containerProps ?? {}
    
    return <Suspense fallback={<pre><code>{props.code}</code></pre>}>
        <pre {...containerProps} className={`shiki ${containerClassName}`}>
            <code>
                <CodeblockInner {...props} />
            </code>
        </pre>
    </Suspense>
}