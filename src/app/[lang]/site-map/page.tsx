import type { Metadata } from "next";
import Link from "next/link";
import { Map, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { hasLang, localePath, type Lang } from "@/lib/i18n";
import { buildMetadata, type PageMeta } from "@/lib/seo";

type Group = { heading: string; links: { label: string; href: string }[] };

const COPY: Record<
  Lang,
  { heroSubtitle: string; groups: Group[] }
> = {
  de: {
    heroSubtitle: "Alle Seiten der VEROTERA Website auf einen Blick.",
    groups: [
      {
        heading: "Allgemein",
        links: [
          { label: "Startseite", href: "/" },
          { label: "News & Insights", href: "/news" },
          { label: "Kontakt", href: "/contacts" },
        ],
      },
      {
        heading: "Lösungen",
        links: [
          { label: "WBG-Leistungsmodule", href: "/solutions/wbg-power-modules" },
          { label: "Rack Power Distribution", href: "/solutions/rack-power-distribution" },
          { label: "Agentische KI im Systems Engineering", href: "/solutions/agentic-ai-engineering" },
          { label: "Spotlight: Galliumnitrid (GaN)", href: "/solutions/technology-spotlight-gallium-nitride" },
          { label: "Spotlight: Siliziumkarbid (SiC)", href: "/solutions/technology-spotlight-silicium-carbide" },
        ],
      },
      {
        heading: "Applikationen",
        links: [
          { label: "WBG Leistungsmodule & Technologie", href: "/solutions/wbg-power-modules" },
          { label: "AI Data Center", href: "/solutions/rack-power-distribution" },
          { label: "Automotive & E-Mobilität", href: "/applications/automotive-emobility" },
          { label: "Grüner Wasserstoff", href: "/applications/hydrogen" },
        ],
      },
      {
        heading: "Unternehmen",
        links: [
          { label: "Über VEROTERA", href: "/about" },
          { label: "Karriere", href: "/careers" },
          { label: "Ethik & Compliance", href: "/ethics-compliance" },
        ],
      },
      {
        heading: "Ressourcen",
        links: [
          { label: "Produktdokumentation", href: "/resources/product-documentation" },
          { label: "Qualität & Zertifizierungen", href: "/resources/quality-certifications" },
          { label: "Garantie", href: "/resources/warranty" },
        ],
      },
      {
        heading: "Rechtliches",
        links: [
          { label: "Impressum", href: "/legal/imprint" },
          { label: "Datenschutzerklärung", href: "/legal/privacy-policy" },
          { label: "Nutzungsbedingungen", href: "/legal/terms-of-use" },
          { label: "Barrierefreiheitserklärung", href: "/legal/accessibility" },
        ],
      },
    ],
  },
  en: {
    heroSubtitle: "All pages of the VEROTERA website at a glance.",
    groups: [
      {
        heading: "General",
        links: [
          { label: "Homepage", href: "/" },
          { label: "News & Insights", href: "/news" },
          { label: "Contact", href: "/contacts" },
        ],
      },
      {
        heading: "Solutions",
        links: [
          { label: "WBG Power Modules", href: "/solutions/wbg-power-modules" },
          { label: "Rack Power Distribution", href: "/solutions/rack-power-distribution" },
          { label: "Agentic AI in Systems Engineering", href: "/solutions/agentic-ai-engineering" },
          { label: "Spotlight: Gallium Nitride (GaN)", href: "/solutions/technology-spotlight-gallium-nitride" },
          { label: "Spotlight: Silicon Carbide (SiC)", href: "/solutions/technology-spotlight-silicium-carbide" },
        ],
      },
      {
        heading: "Applications",
        links: [
          { label: "WBG Power Modules & Technology", href: "/solutions/wbg-power-modules" },
          { label: "AI Data Center", href: "/solutions/rack-power-distribution" },
          { label: "Automotive & E-Mobility", href: "/applications/automotive-emobility" },
          { label: "Green Hydrogen", href: "/applications/hydrogen" },
        ],
      },
      {
        heading: "Company",
        links: [
          { label: "About VEROTERA", href: "/about" },
          { label: "Careers", href: "/careers" },
          { label: "Ethics & Compliance", href: "/ethics-compliance" },
        ],
      },
      {
        heading: "Resources",
        links: [
          { label: "Product Documentation", href: "/resources/product-documentation" },
          { label: "Quality & Certifications", href: "/resources/quality-certifications" },
          { label: "Warranty", href: "/resources/warranty" },
        ],
      },
      {
        heading: "Legal",
        links: [
          { label: "Imprint", href: "/legal/imprint" },
          { label: "Privacy Policy", href: "/legal/privacy-policy" },
          { label: "Terms of Use", href: "/legal/terms-of-use" },
          { label: "Accessibility Statement", href: "/legal/accessibility" },
        ],
      },
    ],
  },
};

const META: Record<Lang, PageMeta> = {
  de: {
    title: "Site Map - [VEROTERA]",
    description: "Übersicht aller Seiten der VEROTERA Website.",
    keywords: ["Site Map", "Übersicht", "VEROTERA"],
  },
  en: {
    title: "Site Map - [VEROTERA]",
    description: "Overview of all pages of the VEROTERA website.",
    keywords: ["Site Map", "Overview", "VEROTERA"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l = hasLang(lang) ? lang : "de";
  return buildMetadata(l, "/site-map", META[l]);
}

export default async function SiteMapPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Lang = hasLang(rawLang) ? rawLang : "de";
  const t = COPY[lang];

  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />

      <main className="flex-grow">
        <PageHero
          eyebrow="Navigation"
          icon={Map}
          title="Site Map"
          subtitle={t.heroSubtitle}
        />

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {t.groups.map((group) => (
              <div key={group.heading} className="glass-panel p-8">
                <h2 className="font-display text-base font-bold text-brand-cyan uppercase tracking-wider mb-5 border-b border-brand-navy/8 pb-3">
                  {group.heading}
                </h2>
                <ul className="space-y-3 list-none m-0 p-0">
                  {group.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={localePath(lang, link.href)}
                        className="inline-flex items-center gap-1.5 text-sm text-brand-navy/70 hover:text-brand-cyan transition-colors group"
                      >
                        <ChevronRight className="w-4 h-4 text-brand-cyan/60 group-hover:translate-x-0.5 transition-transform" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
