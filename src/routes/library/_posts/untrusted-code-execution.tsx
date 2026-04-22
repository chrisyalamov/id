import { Footer } from '@components/footer.tsx'
import { SingleColumn } from '@layouts/single-column.tsx'
import { createFileRoute } from '@tanstack/react-router'
import { formatDate } from '../-format-date.ts'
import { ArticleRoot, ArticleSectionContent, ArticleSidebarBlock, ArticleSidebarStickyBlock, cn_prose, cn_prose_large } from '@/components/article.tsx'
import { Codeblock } from "@components/codeblock.tsx";
import { BlockDivider } from "@components/divider.tsx";

export const Route = createFileRoute('/library/_posts/untrusted-code-execution')({
    component: RouteComponent,
})

function RouteComponent() {
    return <>
        <SingleColumn columnOptions={{ variant: 'sm', centre: true }} className='@container/article'>
            <div className='min-h-24 lg:min-h-44 flex items-end border-b border-neutral-500/20 py-3 font-mode-display'>
                <h1 className='text-2xl'>
                    <span className='font-semibold'>The intricacies of running untrusted code </span>
                    <span className='font-medium opacity-50' suppressHydrationWarning>{formatDate(new Date("2026-04-14"))} </span>
                </h1>
            </div>
            <ArticleRoot className='py-5'>
                <ArticleSidebarStickyBlock className='font-medium text-balance'>
                    <p>Ideas on how to (safely) run untrusted, user-provided and AI-generated code</p>
                    <p className='opacity-50 my-4 mb-12 underline decoration-dotted underline-offset-2'>Christian Yalamov</p>
                </ArticleSidebarStickyBlock>
                <ArticleSectionContent className={cn_prose}>
                    <p>
                        As you build out any application, slowly growing it into a full-on platform, you will run into a very common use case: <em>running untrusted code</em>. It's something that AWS does every day with Lambda; Figma does it too— that's how they support plugins. Same story for Leetcode, VSCode, and many other apps/platforms.</p>
                    <p>
                        Running untrusted code seems trivial at first but quickly explodes in complexity, carries an immense amount of risk, and requires a <strong>lot</strong> of work to get right.</p>
                    
                    <div className='my-4 px-3 py-2 border border-amber-400 rounded'>
                        This article is <strong>not a tutorial</strong>. It is a deep-dive into untrusted code execution, looking at how systems like AWS Lambda and similar serverless providers are able to securely and safely execute code which is provided by users, and could possibly be malicious. 
                    </div>

                    <h2>Why do this in the first place?</h2>
                    <p>
                        Before diving in, it's good to go over some of the reasons why you might want to execute untrusted code. </p>
                    <p>
                        Perhaps you're building an application and you want to allow your users to interact with it programmatically. To enable any kind of scripting, plugin-in, or integration development, you'd need to find some way of executing code that you do not trust or control.</p>
                    <p>
                        Nowadays, code may not even be written by users, but by AI.</p>
                    
                    <h2>Why is it so complicated?</h2>
                    <p>
                        If you simply ran a piece of untrusted software, you would risk it taking control of your system. On a production server, this would be catastrophic, potentially leaking data and secrets, and enabling a whole host of other attacks (particularly those falling under the umbrella of the <a href='https://en.wikipedia.org/wiki/Confused_deputy_problem'>confued deputy problem</a>).</p>
                    <p>
                        So, what you do instead is to sandbox the untrusted code. You need to make sure that your sandboxing mechanism is robust. Such mechanisms have failed time and time and time and time and time and time and time and time and time and time again.</p>
                    
                    <p>
                        In this article, I'll go through a technical challenge
                        </p>
                    <p>
                        For the purpose of this article, we'll set a few goals:
                        <ul>
                            <li>We are trying to design a service to which we can pass some JavaScript code, the service will run the code and return the output.</li>
                            <li>Our service must be deployable as a docker container.</li>
                            <li>It should aim to support the full scope of JS semantics (TC39).</li>
                            <li>Code must be executed safely, preventing any attempt at privilege escalation or sandbox breakout.</li>
                            <li>Code must be sandboxed— different sandboxes must not be able to interfere with each other, and any external action (e.g. network call) must be done through a proxy.</li>
                        </ul>
                    </p>

                    <h2>Common approaches (and their pain points)</h2>
                    <p>
                       The safest way to go whenever you're running <strong>any</strong> untrusted code is to use virtualisation— give it its own guest kernel and OS. 
                    </p>
                       <p>However, this approach can be expensive, and difficult to achieve programmatically. This is down to a couple of reasons: first, you are probably running inside </p>

                </ArticleSectionContent>
            </ArticleRoot>
        </SingleColumn>
        <Footer />
    </>
}
