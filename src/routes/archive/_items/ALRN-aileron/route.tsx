import {
  BasicPropertyBlock,
  MRZPropertyBlock,
  PlainPropertyBlock,
} from "@components/project-details.tsx";
import { ProjectHeaderContainer } from "@components/project-header.tsx";
import { ColumnLayout } from "@layouts/column.tsx";
import { createFileRoute } from "@tanstack/react-router";
import { ShotContainer } from "@components/showcase.tsx";
import {
  ArticleFullSpread,
  ArticleRoot,
  ArticleSectionContent,
  ArticleSectionHeading,
  cn_prose,
} from "@components/article.tsx";
import { Divider } from "@components/divider.tsx";
import { PhotoProvider, PhotoView } from "react-photo-view";
import img_layout from "./Layout.png";
import img_tutorial from "./Tutorial.png";
import { Footer } from "@components/footer.tsx";

export const Route = createFileRoute("/archive/_items/ALRN-aileron")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <ProjectHeaderContainer
        name="Project Aileron"
        descriptors={
          <>
            <MRZPropertyBlock
              label="Description"
              content="Designing, deploying and maintaining an interactve learning platform"
            />
            <BasicPropertyBlock
              label="Tech stack"
              content="Next.js; GitHub Actions"
            />
            <BasicPropertyBlock
              label="Year"
              content="2024"
            />

            <PlainPropertyBlock label="Organisation">
              <div className="flex items-center gap-2">
                <svg
                  className="text-xl"
                  width="1em"
                  height="1.102em"
                  viewBox="0 0 137 151"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M93.6 116C97.9 107.8 94.6 99.1 88.9 92.2L85.9 88.7L90.6 89.5C99.4 91 108.6 89.5 113.5 81.6C126.7 83.4 129.8 102.8 130.5 114.4C120.1 119.6 101.7 126.7 93.5 116H93.6ZM88.1 113.2C77 113.6 70.7 124.1 68.3 134.4C65.9 124 59.6 113.5 48.4 113C46.2 106.5 49 100.2 53.1 94.7C57.5131 89.7798 62.5962 85.5046 68.2 82C73 85.1 79 89.7 83.4 95C87.4 100.4 90.4 106.7 88 113.2H88.1ZM43.1 116C34.9 126.7 16.5 119.6 6.1 114.4C6.8 102.8 9.9 83.4 23.1 81.6C28.1 89.5 37.3 91 46.1 89.6L50.7 88.6C49.6381 89.7818 48.6368 91.0168 47.7 92.3C42 99.1 38.7 107.9 43.1 116ZM19.7 50.5C29.9 53.5 42.1 53.4 48 43.9C54.9 45.2 58.9 50.8 61.6 57.1C63.9 63.5 64.8 71 65.2 76.6C60.2 79.2 53.2 82.2 46.4 83.3C39.6 84.1 32.8 83.4 28.4 78.3C33.4 68.3 27.6 57.7 19.8 50.5H19.7ZM68.2 6.6C77.9 13 93.2 25.4 88.1 37.8C78.8 38.1 72.9 45.3 69.8 53.7L68.2 58C67.8 56.5 67.2 55 66.6 53.5C63.6 45.2 57.6 38 48.3 37.7C43.3 25.3 58.5 12.9 68.3 6.5M116.6 50.4C108.9 57.6 102.9 68.3 108.1 78.1C103.7 83.3 96.8 84.1 90.1 83.2C83.548 81.8669 77.2183 79.6111 71.3 76.5C71.6 70.9 72.5 63.4 74.9 57C77.6 50.7 81.6 45 88.3 43.8C94.3 53.3 106.5 53.5 116.6 50.4ZM136.4 115.1C135.8 103.1 133.7 89.1 124.6 80.3C121.562 77.5172 117.701 75.7974 113.6 75.4C110.1 65.6 118.4 56.1 125.1 49.4C127.1 47.3 129.3 45.3 131.5 43.4L130.2 41C127.4 42 124.6 42.8 121.8 43.5C112.5 45.9 100.2 48.5 93.5 40.4C95.1925 36.6365 95.6138 32.4242 94.7 28.4C91.7 16.2 80.5 7.4 70.4 0.8C69.8 0.4 69 0 68.2 0C67.4 0 66.7 0.4 66 0.8C56 7.5 44.9 16.3 41.9 28.6C40.9 32.5 41.4 36.8 43.1 40.5C36.4 48.5 24.1 46 14.8 43.6C11.9 43 9.1 42 6.3 41.1L4.9 43.4L11.4 49.4C18 56.2 26.4 65.7 22.8 75.5C18.8 75.9 14.8 77.7 11.8 80.5C2.7 89.1 0.7 103.2 0 115.1C0 115.9 0 116.8 0.4 117.5C0.8 118.1 1.6 118.6 2.2 119C13 124.4 26.1 129.7 38.2 126.2C42.1393 124.991 45.5788 122.534 48 119.2C58.3 121 62.3 133 64.9 142.1L66.9 150.6H69.6C70.2 147.7 70.8 144.9 71.6 142.1C74.1 132.9 78.2 120.9 88.5 119.1C90.8953 122.417 94.2973 124.872 98.2 126.1C110.4 129.6 123.5 124.4 134.2 118.9C134.9 118.6 135.6 118.1 136 117.4C136.4 116.8 136.5 115.9 136.4 115.1Z"
                    fill="currentColor"
                  />
                </svg>
                <p className="leading-tight text-xs text-current/85">
                  <span className="line-clamp-1 font-semibold">
                    Manchester Metropolitan University
                  </span>
                  <span className="line-clamp-1 text-current/50">
                    Faculty of Business and Law
                  </span>
                </p>
              </div>
            </PlainPropertyBlock>
          </>
        }
        code="ALRN"
        columnVariant="full"
      />
      <ColumnLayout variant="base">
        <PhotoProvider>
          <ArticleRoot mode="fixedSidebar" className="grow my-6">
            <ArticleSectionHeading>Introduction</ArticleSectionHeading>
            <ArticleSectionContent className={cn_prose}>
              <h3 className="leading-tight mb-10 text-xl font-semibold text-left">
                Aileron was an interactive learning platform for students
                learning how to code.
              </h3>
              <p>
                Business Technology is an undergraduate programme at Manchester
                Metropolitan University. The programme aims to shape the
                technology professionals of tomorrow, equipping them with
                essential technical and business skills.
              </p>
              <p>
                The cohort of the programme is very diverse in terms of skills
                background:{" "}
                <strong>
                  some students have previous experience in industry, while
                  others have never written a line of code.
                </strong>{" "}
                To create a level playing field, some of the technical units
                assume little prior knowledge and introduce students to
                particular concepts from first principles.
              </p>
            </ArticleSectionContent>

            <Divider
              lines={1}
              type="normal"
              className="my-4 mt-8 col-span-full"
            />

            <ArticleSectionHeading>Technology stack</ArticleSectionHeading>
            <ArticleSectionContent className={cn_prose}>
              <p>
                Aileron was built using React (with the Next.js framework) and
                deployed on Vercel.
              </p>
              <p>
                Tutorials were stored in Markdown, so that programme staff could
                easily create and manage tutorial content. A backend service
                parsed Markdown tutorial files (and metadata in{" "}
                <a href="https://github.com/jxson/front-matter">Frontmatter</a>
                {" "}
                format) and dynamically rendered them in an interactive
                environment. This approach removed the need for deploying and
                maintaining a CMS (Content Management System), allowing the
                project to be launched significantly faster.
              </p>
              {/* Maybe add in how it was parsed into a tree and the headings were used for pagination */}
              <p>
                This process was automated using GitHub Actions which triggered
                Incremental Static Regeneration of the updated tutorial. Using
                this format not only helped keep costs to a zero, but also made
                it easy for instructors to create and update tutorials.
              </p>
            </ArticleSectionContent>

            <ArticleFullSpread className="mt-6 mb-4 container">
              <ShotContainer dark cn_shotContainer="items-center">
                <PhotoView src={img_tutorial}>
                  <div>
                    <img
                      src={img_tutorial}
                      className="object-contain cursor-pointer snap-center rounded dark:outline-1 outline-black/20 dark:elevation-1"
                    />
                  </div>
                </PhotoView>
                <PhotoView src={img_layout}>
                  <div>
                    <img
                      src={img_layout}
                      className="object-contain cursor-pointer snap-center rounded elevation-1"
                    />
                  </div>
                </PhotoView>
              </ShotContainer>
            </ArticleFullSpread>

            <ArticleSectionContent className="text-xs font-medium text-current/60">
              Using Aileron, instructors could embed pre-configured development
              environments into the tutorials (e.g. using StackBlitz,
              CodeSandbox). Not having to download or set anything up improved
              accessibility: 89% of students felt confident and engaged with the
              platform.
            </ArticleSectionContent>
          </ArticleRoot>
        </PhotoProvider>
      </ColumnLayout>
      <Footer variant="lg" />
    </div>
  );
}
