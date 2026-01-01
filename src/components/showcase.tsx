import { Children, type HTMLProps } from "react";
import { ClientOnly, Link, type LinkProps } from "@tanstack/react-router";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { IoArrowForwardCircle } from "react-icons/io5";
import { VscArrowBoth } from "react-icons/vsc";

import cs_shot1 from "@/media/projects/00006_credit_suisse/IWM Clients.png";
import cs_shot2 from "@/media/projects/00006_credit_suisse/IWM Dashboard.png";
import dss_sentence1 from "@/media/projects/dss/Sentence1.png";
import dss_sentence2 from "@/media/projects/dss/Sentence2.png";
import outlier1_webm from "@/media/showcase/outlier1.webm";
import outlier1_mp4 from "@/media/showcase/outlier1-opt.mp4";
import hypothesis_webm from "@/media/showcase/hypothesis.webm";
import hypothesis_mp4 from "@/media/showcase/hypothesis-opt.mp4";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { Reel } from "@components/reel.tsx";

import cais1 from "@/media/showcase/cais1.webp";
import web4 from "@/media/showcase/web4.webp";
import web1 from "@/media/showcase/web1.webp";
import web2 from "@/media/showcase/web2.webp";
import web3 from "@/media/showcase/web3.webp";
import bit1 from "@/media/showcase/bit1.webp";
import bit2 from "@/media/showcase/bit2.webp";
import bit3 from "@/media/showcase/bit3.webp";
import bit4 from "@/media/showcase/bit4.webp";
import carder1 from "@/media/showcase/carder1.webp";
import carder2 from "@/media/showcase/carder2.webp";
import carder3 from "@/media/showcase/carder3.gif";

const CreativeReel = (
  <Reel>
    <img
      src={bit1}
      className="object-contain cursor-pointer "
    />
    <img
      src={bit2}
      className="object-contain cursor-pointer "
    />
    <img
      src={bit3}
      className="object-contain cursor-pointer "
    />
    <img
      src={bit4}
      className="object-contain cursor-pointer "
    />
    <img
      src={carder3}
      className="object-contain cursor-pointer "
    />
  </Reel>
);

const UIReel = (
  <div className="bg-neutral-400/10 dark:bg-neutral-500/5">
      <Reel>
          <img
            src={web1}
            className="object-contain cursor-pointer "
          />
        <img
          src={web4}
          className="object-contain cursor-pointer "
        />
        <img
          src={web3}
          className="object-contain cursor-pointer "
        />
          <img
            src={cais1}
            className="object-contain cursor-pointer "
          />
          <img
            src={carder2}
            className="object-contain cursor-pointer "
          />
        <img
          src={carder1}
          className="object-contain cursor-pointer "
        />
      </Reel>
  </div>
);

type ShotContainerProps = {
  children: React.ReactNode;
  square?: boolean;
  className?: string;
  cn_shotContainer?: string;
  dark?: boolean;
};

export const ShotContainer = (
  { children, square = false, dark = false, className, cn_shotContainer }:
    ShotContainerProps,
) => {
  const childrenCount = Children.count(children);

  const cn_shotContainerBase = `
    @[60vh]/artefacts:aspect-auto 
    justify-self-end gap-[10%] overflow-x-auto snap-x snap-mandatory
    w-full    
    *:w-full
    *:snap-center
    *:flex
    *:items-center
    *:justify-center
    *:p-4
    *:@xl:p-8
    `.trim();

  const cn_shotContainerBaseSingle = `
    flex
`;

  const cn_shotContainerBaseScrollable = `
    grid auto-cols-[100%] grid-flow-col items-center place-items-center
`;
  const cn_background = dark
    ? "bg-neutral-400/10 dark:bg-neutral-400/[7%]"
    : "bg-neutral-400/10";

  return (
    <div
      className={`w-full relative ${cn_background} rounded-md overflow-hidden ${className}`}
    >
      {childrenCount > 1
        ? (
          <div className="px-5 py-3 flex items-center justify-center gap-1.5 text-sm opacity-50">
            <span className="pointer-coarse:hidden">Scroll</span>
            <span className="hidden pointer-coarse:block">Swipe</span>
            <VscArrowBoth className="text-xl" />
          </div>
        )
        : <></>}
      <div
        className={`
            ${cn_shotContainerBase} ${cn_shotContainer}
            ${
          childrenCount > 1
            ? cn_shotContainerBaseScrollable
            : cn_shotContainerBaseSingle
        }
            ${childrenCount > 1 ? "justify-start" : "justify-center"}
            ${square ? "aspect-square" : ""}
        `.trim()}
      >
        {children}
      </div>
    </div>
  );
};

type SlideProps = {
  verticalOrder: "descriptionFirst" | "contentFirst";
  horizontalOrder: "descriptionFirst" | "contentFirst";
  description: React.ReactNode;
  content: React.ReactNode;
};

export const Slide = (props: SlideProps) => {
  const cn_containerVertical = props.verticalOrder === "descriptionFirst"
    ? "flex-col"
    : "flex-col-reverse";
  const cn_containerHorizontal = props.horizontalOrder === "descriptionFirst"
    ? "@4xl/showcase:flex-row"
    : "@4xl/showcase:flex-row-reverse";
  const cn_slideContainerJustification =
    props.horizontalOrder === "descriptionFirst"
      ? "justify-start"
      : "justify-end";
  const cn_slideContainer =
    `${cn_containerVertical} ${cn_containerHorizontal} ${cn_slideContainerJustification} @max-6xl:max-w-col-base flex items-stretch @4xl/showcase:items-start gap-6 gap-x-10 my-8 px-6`;
  const cn_descriptionOuter =
    `min-h-0 self-stretch relative shrink grow max-w-[55ch] @4xl/showcase:max-w-[40ch]`;
  const cn_descriptionInner =
    `sticky top-10 max-h-[calc(100vh-5rem)] overflow-y-auto`;
  const cn_contentContainer =
    `flex flex-col gap-6 grow shrink-0 @container/artefacts w-full @4xl:max-w-[70%] @6xl:max-w-[calc(var(--spacing-col-base)-4rem)]`;

  return (
    <ClientOnly>
      <div className={cn_slideContainer}>
        <div className={cn_descriptionOuter}>
          <div className={cn_descriptionInner}>
            {props.description}
          </div>
        </div>
        <PhotoProvider>
          <div className={cn_contentContainer}>
            {props.content}
          </div>
        </PhotoProvider>
      </div>
    </ClientOnly>
  );
};

const cn_btnbase = `
    font-semibold leading-none text-sm flex items-center justify-center gap-2
    cursor-pointer
    hover:opacity-80
    active:opacity-50
    active:pt-[2px]
    active:[clip-path:inset(2px_0_0_0_round_3px)]
`;

type ProjectLinkProps = {
  title: string;
} & LinkProps;

const ProjectLinkBadge = ({ title, ...props }: ProjectLinkProps) => (
  <Link
    to="."
    className={`${cn_btnbase} h-16 flex items-center justify-between gap-6 overflow-hidden`}
    {...props}
  >
    <div className="shrink grow leading-relaxed cursor-pointer">
      <p className="text-xs opacity-50 break-all line-clamp-1 text-ellipsis font-normal">
        From project
      </p>
      <p className="text-lg font-semibold break-all line-clamp-1 text-ellipsis">
        {title}
      </p>
    </div>
    <IoArrowForwardCircle className="text-2xl text-blue-600 dark:text-amber-300" />
  </Link>
);

const RiskManagement = (
  <Slide
    content={
      <>
        <ShotContainer>
          <PhotoView src={cs_shot1}>
            <div className="elevation-1">
              <img src={cs_shot1} className="object-contain cursor-pointer" />
            </div>
          </PhotoView>
        </ShotContainer>

        <ShotContainer>
          <PhotoView src={cs_shot2}>
            <div className="elevation-1">
              <img src={cs_shot2} className="object-contain cursor-pointer" />
            </div>
          </PhotoView>
        </ShotContainer>
      </>
    }
    description={
      <>
        <h2 className="font-semibold text-lg text-balance">
          Streamlining risk management
        </h2>
        <p className="my-4 leading-snug hyphens-auto @lg/showcase:text-base @4xl/showcase:text-sm">
          Building a unified platform to help account managers at Credit Suisse
          monitor and respond to risks; oversee portfolios; and stay on top of
          workflows, processes, and compliance requirements.
        </p>

        <ProjectLinkBadge
          title="Credit Suisse OSA"
          to="/archive/CRSS-credit-suisse-osa"
        />
      </>
    }
    horizontalOrder="contentFirst"
    verticalOrder="descriptionFirst"
  />
);

const DataAnalysis = (
  <Slide
    content={
      <>
        <ShotContainer>
          <div>
            <video
              className="cursor-pointer rounded-md overflow-hidden elevation-1"
              autoPlay
              muted
              playsInline
              loop
            >
              <source src={outlier1_webm} type="video/webm" />
              <source src={outlier1_mp4} type="video/mp4" />
            </video>
          </div>
        </ShotContainer>
        <ShotContainer>
          <div>
            <video
              className="cursor-pointer rounded-md overflow-hidden elevation-1"
              autoPlay
              muted
              playsInline
              loop
            >
              <source src={hypothesis_webm} type="video/webm" />
              <source src={hypothesis_mp4} type="video/mp4" />
            </video>
          </div>
        </ShotContainer>
        <div className="max-w-[40ch] text-xs font-medium text-current/60">
          <FiArrowUp className="inline-block align-baseline" />{" "}
          Visual aid used when explaining hypothesis testing to a non-technical
          audience.
        </div>
        <div className="max-w-[40ch] text-xs font-medium text-current/60 ml-auto text-right">
          Rationale behind the design of dashboard widgets, intended to read as
          sentences <FiArrowDown className="inline-block align-baseline" />
        </div>
        <ShotContainer>
          <PhotoView src={dss_sentence1}>
            <img
              src={dss_sentence1}
              className="object-contain cursor-pointer snap-center max-h-[30rem]"
            />
          </PhotoView>
          <PhotoView src={dss_sentence2}>
            <img
              src={dss_sentence2}
              className="object-contain cursor-pointer snap-center max-h-[30rem]"
            />
          </PhotoView>
        </ShotContainer>
      </>
    }
    description={
      <>
        <h2 className="font-semibold text-lg text-balance">
          Unraveling the story behind the data
        </h2>
        <p className="my-4 leading-snug hyphens-auto @lg/showcase:text-base @4xl/showcase:text-sm">
          Applying UX principles to empower users to understand how data is
          analysed and translated into digestible insights.
        </p>
      </>
    }
    horizontalOrder="contentFirst"
    verticalOrder="descriptionFirst"
  />
);

export const Showcase = (
  { className, ...props }: HTMLProps<HTMLDivElement>,
) => {
  return (
    <div
      className={`@container/showcase ${className}`}
      {...props}
    >
      <ClientOnly
        fallback={
          <div className="animate-pulse bg-neutral-400/10 text-neutral-500 px-1.5 py-0.5">
            Loading
          </div>
        }
      >
        {UIReel}
        {DataAnalysis}
        {RiskManagement}
        {CreativeReel}
      </ClientOnly>
    </div>
  );
};
