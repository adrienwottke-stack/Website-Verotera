import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BrandWatermark from "./BrandWatermark";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  icon?: LucideIcon;
  /** Constrain the text column. Defaults to a comfortable reading width. */
  width?: "narrow" | "wide";
}

/**
 * Shared light-theme hero for all subpages. Sits below the fixed header,
 * carries the brand eyebrow + V-signet watermark, and matches the
 * landing-page typography (Work Sans display, navy on white).
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  icon: Icon,
  width = "narrow",
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-14 sm:pt-40 sm:pb-20 bg-surface-light border-b border-brand-navy/8 overflow-hidden">
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-brand-cyan/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <BrandWatermark position="top-right" tint="blue" size={460} opacity={0.05} />

      <div className={`${width === "wide" ? "max-w-7xl" : "max-w-5xl"} mx-auto px-6 relative z-10`}>
        <div className="flex flex-wrap items-center gap-6 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-navy/60 hover:text-brand-cyan transition-colors group focus:outline-none"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            Zurück zur Startseite
          </Link>

          {eyebrow && (
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-cyan/25 bg-brand-cyan/5 text-brand-cyan text-xs font-semibold uppercase tracking-wider">
              {Icon && <Icon className="w-3.5 h-3.5" />}
              {eyebrow}
            </span>
          )}
        </div>

        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy mb-5 leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="font-sans text-base sm:text-lg text-brand-navy/60 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
