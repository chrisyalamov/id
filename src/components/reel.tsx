import { ProgressiveBlur } from "@components/progressive-blur.tsx";
import { type HTMLProps } from "react";

// const Divider = ({ text }: { text: string }) => {
//   return (
//     <div className="[writing-mode:sideways-lr] px-4 py-3 bg-neutral-400/15 font-medium text-current/60 rounded flex items-center justify-between gap-4">
//       <ChevronRight />
//       <span>{text}</span>
//     </div>
//   );
// };

export const ReelSlide = (
  { className, ...props }: HTMLProps<HTMLImageElement>,
) => {
  return (
    <img
      className={`object-contain cursor-pointer ${className}`}
      {...props}
    />
  );
};

export const Reel = ({children, className, ...props}: HTMLProps<HTMLDivElement>) => {
  return (
    <div className={`relative flex overflow-x-scroll snap-x scroll-pl-6 [scrollbar-width:none] mask-fade-both [--fade-size:0.4rem] ${className}`} {...props}>
      <ProgressiveBlur
        layers={8}
        strength={4}
        className="min-w-6 sticky left-0 top-0 z-10 snap-start"
        fadeTowards="right"
      />

      <div className="flex py-10 -ml-col-padding-base px-col-padding-base gap-4 *:rounded-[6px] dark:[&>img]:bg-neutral-900 *:object-contain *:max-h-56 lg:*:max-h-96 *:h-[50vh] [&>img]:outline *:-outline-offset-1 *:outline-black/5 dark:*:outline-white/5 mask-fade-both shrink-0 *:snap-start overflow-x-visible">
        {children}
      </div>

      <div className="grow" />

      <ProgressiveBlur
        layers={8}
        strength={4}
        className="min-w-6 md:min-w-12 sticky right-0 top-0"
        fadeTowards="left"
      />
    </div>
  );
};
