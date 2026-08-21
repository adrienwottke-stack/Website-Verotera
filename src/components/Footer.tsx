"use client";

import Image from "next/image";
import Link from "next/link";
import BrandWatermark from "./BrandWatermark";
import { useLang, useLocalePath } from "@/components/LangProvider";
import type { Lang } from "@/lib/i18n";

type FooterLink = { label: string; href: string };

const COPY: Record<
  Lang,
  {
    resources: { title: string; links: FooterLink[] };
    support: { title: string; links: FooterLink[] };
    corporate: { title: string; links: FooterLink[] };
    legal: FooterLink[];
    tagline: string;
    follow: string;
    rights: string;
  }
> = {
  de: {
    resources: {
      title: "Ressourcen",
      links: [
        { label: "Site Map", href: "/site-map" },
      ],
    },
    support: {
      title: "Support",
      links: [
        { label: "Kontakt", href: "/contacts" },
      ],
    },
    corporate: {
      title: "Corporate",
      links: [
        { label: "Über VEROTERA", href: "/about" },
        { label: "Karriere", href: "/careers" },
        { label: "Ethik & Compliance", href: "/ethics-compliance" },
      ],
    },
    legal: [
      { label: "Impressum", href: "/legal/imprint" },
      { label: "Datenschutzerklärung", href: "/legal/privacy-policy" },
      { label: "Nutzungsbedingungen", href: "/legal/terms-of-use" },
      { label: "Barrierefreiheitserklärung", href: "/legal/accessibility" },
    ],
    tagline:
      "VEROTERA entwickelt Wide-Bandgap-Halbleitertechnologien mit tiefem Systemverständnis – für eine effizientere, nachhaltigere Welt.",
    follow: "Folgen Sie uns",
    rights: "© 2026 VEROTERA GmbH – Alle Rechte vorbehalten.",
  },
  en: {
    resources: {
      title: "Resources",
      links: [
        { label: "Site Map", href: "/site-map" },
      ],
    },
    support: {
      title: "Support",
      links: [
        { label: "Contact", href: "/contacts" },
      ],
    },
    corporate: {
      title: "Corporate",
      links: [
        { label: "About VEROTERA", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Ethics & Compliance", href: "/ethics-compliance" },
      ],
    },
    legal: [
      { label: "Imprint", href: "/legal/imprint" },
      { label: "Privacy Policy", href: "/legal/privacy-policy" },
      { label: "Terms of Use", href: "/legal/terms-of-use" },
      { label: "Accessibility Statement", href: "/legal/accessibility" },
    ],
    tagline:
      "VEROTERA develops wide-bandgap semiconductor technologies with deep system understanding — for a more efficient, more sustainable world.",
    follow: "Follow us",
    rights: "© 2026 VEROTERA GmbH – All rights reserved.",
  },
};

function LinkColumn({
  title,
  links,
  p,
}: {
  title: string;
  links: FooterLink[];
  p: (href: string) => string;
}) {
  return (
    <div className="flex flex-col text-left">
      <span className="text-xs font-bold text-white uppercase tracking-wider mb-5">{title}</span>
      <ul className="space-y-4 list-none m-0 p-0">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={p(link.href)}
              className="text-sm text-white/60 hover:text-brand-cyan transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const lang = useLang();
  const p = useLocalePath();
  const t = COPY[lang];

  return (
    <footer className="dark-section relative bg-[#234554] border-t border-white/5 pt-16 pb-10 overflow-hidden">
      <BrandWatermark position="bottom-right" tint="light" size={420} opacity={0.035} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">

          {/* Left: Logo + tagline + LinkedIn */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <Link href={p("/")} className="flex items-center mb-6">
              <div className="flex items-center gap-2.5 bg-brand-navy rounded-lg px-3 py-2">
                <Image
                  src="/images/v-signet-transparent.png"
                  alt="VEROTERA Signet"
                  width={48}
                  height={48}
                  className="object-contain h-6 w-6 scale-150"
                />
                <Image
                  src="/images/verotera-wordmark.png"
                  alt="VEROTERA"
                  width={824}
                  height={95}
                  className="object-contain h-4 w-auto"
                />
              </div>
            </Link>

            <p className="text-sm text-white/60 max-w-sm leading-relaxed mb-5">
              {t.tagline}
            </p>

            <p className="text-sm font-bold text-white tracking-widest uppercase mb-8">
              YOUR GOAL. OUR TECH. ONE VISION.
            </p>

            <p className="text-sm font-semibold text-brand-cyan mb-3">{t.follow}</p>
            <a
              href="https://www.linkedin.com/company/verotera/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Right: 3 link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 w-full">
            <LinkColumn title={t.resources.title} links={t.resources.links} p={p} />
            <LinkColumn title={t.support.title} links={t.support.links} p={p} />
            <LinkColumn title={t.corporate.title} links={t.corporate.links} p={p} />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 list-none m-0 p-0">
            {t.legal.map((link) => (
              <li key={link.href}>
                <Link
                  href={p(link.href)}
                  className="text-xs text-white/50 hover:text-brand-cyan transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <span className="text-xs text-white/40">
            {t.rights}
          </span>
        </div>

      </div>
    </footer>
  );
}
