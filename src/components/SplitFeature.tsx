import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "./Reveal";

interface SplitFeatureProps {
  image: string;
  alt: string;
  imageSide?: "left" | "right";
  eyebrow?: string;
  title: string;
  body: string | string[];
  bullets?: string[];
}

/**
 * Alternating image/text feature row in the landing-page idiom:
 * white background, navy display headings, cyan eyebrow + bullet checks.
 */
export default function SplitFeature({
  image,
  alt,
  imageSide = "right",
  eyebrow,
  title,
  body,
  bullets = [],
}: SplitFeatureProps) {
  const paragraphs = Array.isArray(body) ? body : [body];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      {/* Text */}
      <Reveal className={imageSide === "right" ? "lg:order-1" : "lg:order-2"}>
        <div className="text-left space-y-5">
          {eyebrow && (
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan block">
              {eyebrow}
            </span>
          )}
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-navy">
            {title}
          </h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="font-sans text-base text-brand-navy/65 leading-relaxed">
              {p}
            </p>
          ))}
          {bullets.length > 0 && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 list-none m-0 p-0">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <span className="font-sans text-sm text-brand-navy/70">{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Reveal>

      {/* Image */}
      <Reveal delay={0.1} className={imageSide === "right" ? "lg:order-2" : "lg:order-1"}>
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-brand-navy/8 bg-surface-light shadow-sm">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </Reveal>
    </div>
  );
}
