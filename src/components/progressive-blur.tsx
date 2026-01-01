type ProgressiveBlurProps = {
  className?: string;
  layers: number;
  strength: number;
  fadeTowards: "left" | "right" | "top" | "bottom";
};

const oppositesMapping = {
  left: "right",
  right: "left",
  top: "bottom",
  bottom: "top",
};

export const ProgressiveBlur = ({
  className,
  layers,
  strength,
  fadeTowards,
}: ProgressiveBlurProps) => {
  const opposite = oppositesMapping[fadeTowards];
//   const direction = directionMapping[fadeTowards]

  return (
    <div className={className}>
      {new Array(layers).fill(null).map((_, index) => {
        const blurStrength = Math.round(Math.pow(strength, 1 / (index + 1)));
        const progress = Math.round(((index + 1) / (layers ?? 1)) * 100);
        return (
          <>
            <div
              key={index}
              style={{
                maskImage:
                  `linear-gradient(to ${fadeTowards}, black, transparent ${progress}%)`,
                position: "absolute",
                top: 0,
                right: 0,
                width: `100%`,
                height: "100%",
                backdropFilter: `blur(${blurStrength}px)`,
              }}
            />
            <div
              key={index}
              style={{
                maskImage:
                  `radial-gradient(100% 100% at ${opposite}, black, transparent ${progress}%)`,
                position: "absolute",
                top: 0,
                right: 0,
                width: `100%`,
                height: "100%",
              }}
              className="backdrop-filter-[brightness(1.3)_contrast(1.1)]"
            />
          </>
        );
      })}
    </div>
  );
};
