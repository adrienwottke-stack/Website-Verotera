"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandWatermark from "./BrandWatermark";

export default function Footer() {
  const pathname = usePathname();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const anchorId = href.replace("/", ""); // e.g. '#contact'
      const el = document.querySelector(anchorId);
      if (el) {
        const top = (el as HTMLElement).offsetTop - 90;
        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <footer className="dark-section relative bg-brand-navy border-t border-white/5 pt-16 pb-10 overflow-hidden">
      <BrandWatermark position="bottom-right" tint="light" size={420} opacity={0.035} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">

          {/* Left Side: Logo + Description + Tagline + LinkedIn */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            {/* Logo Block */}
            <Link
              href="/"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="bg-transparent flex items-center gap-2.5">
                <Image
                  src="/images/v-signet-transparent.png"
                  alt="VEROTERA"
                  width={32}
                  height={32}
                  className="object-contain h-8 w-8"
                />
                <Image
                  src="/images/verotera-wordmark.png"
                  alt="VEROTERA"
                  width={174}
                  height={20}
                  className="object-contain h-5 w-auto"
                />
              </div>
            </Link>

            {/* Description */}
            <p className="text-sm text-white/60 max-w-sm leading-relaxed mb-5">
              VEROTERA entwickelt Wide-Bandgap-Halbleitertechnologien mit tiefem
              Systemverständnis – für eine effizientere, nachhaltigere Welt.
            </p>

            {/* Claim */}
            <p className="text-sm font-bold text-white tracking-widest uppercase mb-8">
              YOUR GOAL. OUR TECH. ONE VISION.
            </p>

            {/* LinkedIn Section */}
            <p className="text-sm font-semibold text-brand-cyan mb-3">Folgen Sie uns</p>
            <a
              href="https://www.linkedin.com/company/verotera"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Right Side: 3 Link Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 w-full">

            {/* Column 1: SUPPORT */}
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold text-white uppercase tracking-wider mb-5">
                Support
              </span>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/support"
                    className="text-sm text-white/60 hover:text-brand-cyan transition-colors"
                  >
                    Technische Unterstützung
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    onClick={(e) => handleScroll(e, "/#contact")}
                    className="text-sm text-white/60 hover:text-brand-cyan transition-colors"
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: CORPORATE */}
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold text-white uppercase tracking-wider mb-5">
                Corporate
              </span>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-white/60 hover:text-brand-cyan transition-colors"
                  >
                    Über VEROTERA
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about#karriere"
                    className="text-sm text-white/60 hover:text-brand-cyan transition-colors"
                  >
                    Karriere
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about#compliance"
                    className="text-sm text-white/60 hover:text-brand-cyan transition-colors"
                  >
                    Ethik & Compliance
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: RECHTLICHES */}
            <div className="flex flex-col text-left col-span-2 sm:col-span-1">
              <span className="text-xs font-bold text-white uppercase tracking-wider mb-5">
                Rechtliches
              </span>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/impressum"
                    className="text-sm text-white/60 hover:text-brand-cyan transition-colors"
                  >
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-sm text-white/60 hover:text-brand-cyan transition-colors"
                  >
                    Datenschutz & Cookies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-use"
                    className="text-sm text-white/60 hover:text-brand-cyan transition-colors"
                  >
                    Nutzungsbedingungen
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-xs text-white/40 text-center sm:text-left">
            Nutzungsbedingungen | Datenschutz und Cookie-Richtlinie | Barrierefreiheitserklärung |{" "}
            © 2026 VEROTERA GmbH – Alle Rechte vorbehalten.
          </span>
        </div>

      </div>
    </footer>
  );
}
