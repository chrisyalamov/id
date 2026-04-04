import { Link } from "@tanstack/react-router";
import type { AnchorHTMLAttributes } from "react";
import { Guilloche, GuillocheContainer } from "./guilloche";

export type BadgeProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  guilloche?: boolean;
  /**
   * TailwindCSS classname which sets a text colour, dark:, hover:, and
   * dark:hover: text colour classes. Overrides default colour classnames.
   */
  cn_colour?: string;
};

export const Badge = ({ guilloche, cn_colour, ...props }: BadgeProps) => {
  const cn_colourDefault = `
        text-(--badge-color,light-dark(black,var(--color-amber-300)))
        hover:text-(--badge-color-hover,light-dark(var(--color-blue-600),white))
    `.trim();

  const cn_badgeContainer = `
        ${props?.className ?? ""} 
        ${cn_colour || cn_colourDefault}
        flex gap-1
        active:animate-[blink_0.1s_backwards] 
        select-none 
    `.trim();

  return (
    <Link to="/" {...props} className={cn_badgeContainer}>
      <div className="w-1.5 sm:w-2 bg-current rounded-[2px]" style={{ viewTransitionName: "badgeBlock" }} />

      <div
        className="border border-current text-[13px] uppercase rounded-[2.5px] leading-3 tracking-tight pb-[2px] py-0.5 w-max px-1 flex items-center font-mode-display subpixel-antialiased"
        style={{ viewTransitionName: "badgeText" }}
      >
        <span className="hidden sm:block font-medium tracking-wider">
          Christian Yalamov
        </span>
        <span className="sm:hidden font-medium">C•Y•</span>
      </div>

      {guilloche
        ? (
          <GuillocheContainer
            className="grow rounded-sm"
            style={{ viewTimelineName: "g1" }}
          >
            <Guilloche
              style={{
                animation: "6s guilloche-rotate-a linear infinite",
              }}
            />
            <Guilloche
              style={{
                animation: "15s guilloche-rotate-b ease infinite",
              }}
            />
          </GuillocheContainer>
        )
        : null}
    </Link>
  );
};
