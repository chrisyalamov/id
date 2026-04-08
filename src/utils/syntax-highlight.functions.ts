import { createMiddleware, createServerFn } from '@tanstack/react-start'
import { staticFunctionMiddleware } from '@tanstack/start-static-server-functions'
import z from "zod"
import js from '@shikijs/langs/javascript'
import ts from '@shikijs/langs/typescript'
import sql from '@shikijs/langs/sql'
import cs from '@shikijs/langs/csharp'
import github_light from '@shikijs/themes/github-light'
import github_dark from '@shikijs/themes/github-dark'
import { createHighlighterCore } from 'shiki/core'
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript'

const engine = createJavaScriptRegexEngine()

const highlighter = await createHighlighterCore({
    themes: [github_light, github_dark],
    langs: [js, ts, sql, cs],
    engine,
})

export const serverRenderCodeBlock = createServerFn({ method: 'GET' })
    .inputValidator(z.object({
        language: z.enum(['ts', 'js', 'sql', 'cs']),
        code: z.string()
    }))
    // .middleware([staticFunctionMiddleware])
    .handler(async (ctx) => {
        return highlighter.codeToHast(ctx.data.code, {
            lang: ctx.data.language,
            structure: "inline",
            themes: {
                light: "github-light",
                dark: "github-dark"
            }
        })

    })
