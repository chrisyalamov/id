import { createFileRoute, Link } from "@tanstack/react-router";
import { MainLayout } from "@layouts/main.tsx";
import { Divider } from "@components/divider.tsx";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import "../styles.css";
import { QuickLink } from "@components/homepage-quick-link.tsx";
import { DirectionalArrow } from "@/icons/directional-arrow.tsx";
import { Showcase } from "@components/showcase.tsx";
import { SkillsDirectory } from "@components/skills.tsx";
import { cn_prose } from "@/components/editorial/article";

export const Route = createFileRoute("/")({
  component: App,
});


function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between gap-4 w-full items-stretch">
        <MainLayout className="mb-4">
          <div className="@container/intro-section my-6 md:my-0">
            <div className="@md/intro-section:flex gap-10 justify-between text-lg leading-tight mt-2">
              <p className="font-display uppercase font-bold mb-4">
                Hello,
              </p>
              <p className="font-display uppercase opacity-50 text-justify">
                I'm Christian— a designer and software engineer, currently working at Accenture UK, on a project for Channel 4.
              </p>
            </div>

            <h2 className="text-current/50 text-xs my-2 mt-16">About me</h2>
            <p className={`mb-4 ${cn_prose}`}>
              Somewhere between an engineer and a designer. Experienced with building software, designing systems and
              solutions. I have an affinity for the creative kind of design too (graphic, branding, product, UX).
            </p>

            <Divider type="normal" lines={4} className="my-10" />

            <h2 className="text-current/50 text-xs my-2">Go to</h2>
            <QuickLink
              to="/archive"
              description="Project portfolio"
              label="Archive"
              primary
            />
            <QuickLink
              to="/library"
              description="Posts, notes, and research"
              label="Library"
            />
            <QuickLink
              to="."
              hash="showcase"
              description="Highlights of my work"
              label="Showcase"
              icon={<FiArrowDown />}
            />

            <Divider type="normal" lines={4} className="my-10" />

            <h2 className="text-xs my-2">
              <span className="font-semibold">Skills</span>&nbsp;&nbsp;
              <span className="pointer-coarse:hidden opacity-50">Click</span>
              <span className="pointer-fine:hidden opacity-50">Tap</span>
              <span className="opacity-50"> on a skill to find out more</span>
            </h2>

            {SkillsDirectory}
          </div>
        </MainLayout>

        <div
          className="h-12 flex items-center bg-neutral-400/10 dark:bg-neutral-500/5 justify-start tracking-wide text-current/75 text-xs gap-1.5 w-full px-6 font-mode-display"
          id="showcase"
        >
          <DirectionalArrow direction="br" className="text-lg" />
          <span className="">Next</span>
          <span className="font-semibold">Showcase</span>
          <div className="grow min-w-2" />
          <Link
            to="/archive"
            search={{ detailed: true }}
            className="font-medium underline decoration-current/40 underline-offset-2 hover:decoration-current active:decoration-current hover:decoration-dotted active:decoration-dotted active:opacity-40 text-blue-600 dark:text-amber-300"
          >
            Go to all projects{" "}
            <FiArrowUpRight className="inline-block align-middle" />
          </Link>
        </div>
      </div>


      <Showcase />
    </>
  );
}
