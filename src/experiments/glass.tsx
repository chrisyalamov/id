/**
 * This component imitates the iOS 26 liquid glass effect.
 * 
 * It uses multiple layers of increasing blur and decreasing border width,
 * similar to Apple's progressive blur. Each layer (blur frame) acts as a ring
 * that blurs the content behind it. The layers closer to the edge have a higher
 * blur amount.
 * 
 * This is achieved by using a mask-image:
 * - Linear gradient (white > white) for the content box (inner area)
 * - Linear gradient (white > white) for the border box (outer area)
 * 
 * The content box is subtracted from the border box, creating a ring.
 * 
 * The last layer is a simple gradient border to give the impression of a glow
 * around the edges (specular highlight).
 * 
 * However, this breaks in Chromium in two scenarios:
 * - When the highlight is set to use mix-blend-mode: overlay
 * - When the experimental corner-shape property is set to superellipse(non-
 * infinity value)
 */

type BlurFrameProps = {
    /**
     * Sequential index of the frame (0-indexed).
     */
    seq: number,
    /**
     * Total number of frames.
     */
    total: number,
    /**
     * Max border width in pixels. (Default: 16px)
     */
    maxBorderWidth: number,
    /**
     * A factor (min. 1) which will be used as the exponent
     * for the non-base component of the border width
     */
    borderContrastFactor: number,
    /**
     * The base amount of blur
     */
    baseBlurAmount: number,
    /**
     * A factor (min. 1) which will be used as the exponent
     * for the non-base component of the blur amount
     */
    blurContrastFactor: number,

}

const BlurFrame = ({ seq, total, maxBorderWidth, baseBlurAmount, borderContrastFactor, blurContrastFactor }: BlurFrameProps) => {
    const fractionalIndex = seq / total
    /**
     * Return the opposite corresponding element
     * n + (distance from max) - (distance from min)
     */
    const inverseSeq = seq + ((total - seq) - (seq - 1))
    const inverseFractionalIndex = inverseSeq / total

    const borderWidth = maxBorderWidth * inverseFractionalIndex ** borderContrastFactor

    const blurAmount = (fractionalIndex ** blurContrastFactor) * baseBlurAmount

    const saturateFactor = 1 + fractionalIndex * 0.4
    // const contrastFactor = 1 + fractionalIndex ** 8 * 0.2

    return <div style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        mask: "linear-gradient(white 0 0) content-box, linear-gradient(white 0 0) border-box",
        maskComposite: "subtract",
        border: `${borderWidth}px solid transparent`,
        backdropFilter: `blur(${blurAmount}px) saturate(${saturateFactor})`,
        borderRadius: "5px",
    }} />
}
const BaseBlur = () => {
    return <>
        <div style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            backdropFilter: "blur(2px)"
        }} />
        <div style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            backdropFilter: "blur(10px)",
            opacity: 0.65,
        }} />
    </>
}

const BlendBlur = () => {
    return <>
        <div style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            backdropFilter: "blur(1px)",
        }} />
    </>
}


export const GlassMaterial = () => {
    return <div className="size-full rounded-md overflow-hidden relative" style={{
        boxShadow: "0 0 1px rgb(0 0 0 / 25%), 0 0 4px rgb(0 0 0 / 10%), 0 0 9px rgb(0 0 0 / 10%)",
        background: "rgba(235, 235, 235, 0.7)",
    }}>
        <BaseBlur />
        {
            new Array(10).fill(0).map((_, i) => <BlurFrame
                key={i}
                seq={i + 1}
                total={10}
                maxBorderWidth={25}
                borderContrastFactor={1.2}
                baseBlurAmount={100}
                blurContrastFactor={20}
            />)
        }
        <BlendBlur />
        <div style={{
            position: "absolute",
            inset: 0,
            left: 10,
            width: "calc(100% - 20px)",
            height: "100%",
            border: "1px solid transparent",
            borderWidth: "1px 0",
            borderImage: "linear-gradient(to right, transparent, white, transparent) 20",
            opacity: 0.5
        }} />
        <div style={{
            position: "absolute",
            inset: 0,
            top: 10,
            width: "100%",
            height: "calc(100% - 20px)",
            border: "1px solid transparent",
            borderWidth: "0 1px",
            borderImage: "linear-gradient(to bottom, transparent, white, transparent) 1",
            opacity: 0.5
        }} />
    </div>
}