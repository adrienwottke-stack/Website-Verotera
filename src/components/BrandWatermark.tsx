type Position = "top-right" | "top-left" | "bottom-right" | "bottom-left";

interface BrandWatermarkProps {
  /** Which corner the V-signet bleeds out of. */
  position?: Position;
  /** Edge length of the (square) signet in pixels. */
  size?: number;
  /** Brand tone used to fill the signet silhouette. Use "light" on dark sections. */
  tint?: "navy" | "blue" | "light";
  /** Opacity – keep this very low so the motif stays a faint ghost. */
  opacity?: number;
  className?: string;
}

const PLACEMENT_CLASSES: Record<Position, string> = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0",
};

// Bleed ~25% off the anchored corner. Left-anchored marks are mirrored
// horizontally (scaleX(-1)) so the signet's heavy "V" stroke faces inward,
// away from the edge — only the light wings spill over. This matches the
// clean composition of the right-anchored marks.
const TRANSFORMS: Record<Position, string> = {
  "top-right": "translate(25%, -25%)",
  "top-left": "translate(-25%, -25%) scaleX(-1)",
  "bottom-right": "translate(25%, 25%)",
  "bottom-left": "translate(-25%, 25%) scaleX(-1)",
};

const TINT_HEX: Record<NonNullable<BrandWatermarkProps["tint"]>, string> = {
  navy: "#234554",
  blue: "#2e86c1",
  light: "#ffffff",
};

/**
 * Decorative, faint V-signet watermark for section backgrounds. Renders
 * a masked, single-tone silhouette of the brand mark (see `.v-watermark`
 * in globals.css). Purely presentational and non-interactive.
 */
export default function BrandWatermark({
  position = "top-right",
  size = 480,
  tint = "navy",
  opacity = 0.05,
  className = "",
}: BrandWatermarkProps) {
  return (
    <div
      aria-hidden="true"
      className={`v-watermark absolute z-0 ${PLACEMENT_CLASSES[position]} ${className}`}
      style={{
        width: size,
        height: size,
        opacity,
        backgroundColor: TINT_HEX[tint],
        transform: TRANSFORMS[position],
      }}
    />
  );
}
