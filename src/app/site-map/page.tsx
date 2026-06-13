import type { Metadata } from "next";
import Link from "next/link";
import { Map, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Site Map - [VEROTERA]",
  description: "Übersicht aller Seiten der VEROTERA Website.",
  keywords: ["Site Map", "Übersicht", "VEROTERA"],
};

const groups: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Allgemein",
    links: [
      { label: "Startseite", href: "/" },
      { label: "Über uns", href: "/about" },
      { label: "Karriere", href: "/careers" },
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
      { label: "Automotive & E-Mobilität", href: "/applications/automotive-emobility" },
      { label: "Grüner Wasserstoff", href: "/applications/hydrogen" },
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
];

export default function SiteMapPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />

      <main className="flex-grow">
        <PageHero
          eyebrow="Navigation"
          icon={Map}
          title="Site Map"
          subtitle="Alle Seiten der VEROTERA Website auf einen Blick."
        />

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {groups.map((group) => (
              <div key={group.heading} className="glass-panel p-8">
                <h2 className="font-display text-base font-bold text-brand-cyan uppercase tracking-wider mb-5 border-b border-brand-navy/8 pb-3">
                  {group.heading}
                </h2>
                <ul className="space-y-3 list-none m-0 p-0">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
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
