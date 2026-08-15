import type { Lang } from "@/lib/i18n";

export type NewsItem = {
  /** Internal link target for "Read more". */
  href: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  /** Featured items appear in the homepage "News & Insights" section. */
  featured?: boolean;
};

/**
 * Static news / insights entries. There is no CMS yet — articles are curated here
 * and currently link to the relevant solution/application pages (per the SEO sitemap CSV).
 * Order: newest first. Keep the de/en lists in the same order (same hrefs).
 */
export const NEWS_ITEMS: Record<Lang, NewsItem[]> = {
  de: [
    {
      href: "/solutions/deterministic-engineering-core",
      category: "Lösungen",
      date: "12. Juni 2026",
      title: "Deterministischer Engineering Core",
      excerpt:
        "Wie autonome KI-Agenten den Wandel von passiven Copiloten hin zu planenden, handelnden Systemen in der SiC- und GaN-Entwicklung beschleunigen.",
      image: "/images/agentic-ai-engineering.png",
      imageAlt: "Deterministischer Engineering Core",
      featured: true,
    },
    {
      href: "/applications/automotive-emobility",
      category: "Applikationen",
      date: "28. Mai 2026",
      title: "Elektrifizierung von Nutzfahrzeugen",
      excerpt:
        "SiC und GaN beschleunigen den Übergang zu emissionsfreien Nutzfahrzeugen – vom Antriebsstrang bis zum Megawatt-Laden.",
      image: "/images/emobility-automotive.png",
      imageAlt: "Elektrifizierung von Nutzfahrzeugen",
      featured: true,
    },
    {
      href: "/solutions/technology-spotlight-gallium-nitride",
      category: "Technologie",
      date: "2. Mai 2026",
      title: "GaN in der 800-VDC-Rack-Architektur für KI-Rechenzentren",
      excerpt:
        "Die 800-VDC-Rack-Architektur ist ein struktureller Wendepunkt für GaN in der Stromverteilung von KI-Rechenzentren.",
      image: "/images/power-module-gan-white.png",
      imageAlt: "WBG-Leistungsmodul mit GaN",
    },
    {
      href: "/solutions/technology-spotlight-silicium-carbide",
      category: "Technologie",
      date: "18. April 2026",
      title: "SiC – der Leistungshalbleiter der Elektrifizierungsära",
      excerpt:
        "Vom Bauelement zum System: SiC treibt Effizienz in Elektrofahrzeugen, Solarenergie und industriellen Antrieben.",
      image: "/images/power-module-sic.png",
      imageAlt: "WBG-Leistungsmodul mit SiC",
    },
    {
      href: "/solutions/rack-power-distribution",
      category: "Lösungen",
      date: "3. April 2026",
      title: "Rack Power Distribution Unit (PDU) für KI-Rechenzentren",
      excerpt:
        "Der Full-GaN-DC/DC-Wandler ersetzt klassische Silizium-MOSFETs und wird zur Schlüsseltechnologie des Power Shelf.",
      image: "/images/ai-data-center-infrastructure.png",
      imageAlt: "Infrastruktur eines KI-Rechenzentrums",
    },
  ],
  en: [
    {
      href: "/solutions/deterministic-engineering-core",
      category: "Solutions",
      date: "June 12, 2026",
      title: "Deterministic Engineering Core",
      excerpt:
        "How autonomous AI agents accelerate the shift from passive copilots to planning, acting systems in SiC and GaN development.",
      image: "/images/agentic-ai-engineering.png",
      imageAlt: "Deterministic Engineering Core",
      featured: true,
    },
    {
      href: "/applications/automotive-emobility",
      category: "Applications",
      date: "May 28, 2026",
      title: "Electrification of Commercial Vehicles",
      excerpt:
        "SiC and GaN accelerate the transition to zero-emission commercial vehicles — from the powertrain to megawatt charging.",
      image: "/images/emobility-automotive.png",
      imageAlt: "Electrification of commercial vehicles",
      featured: true,
    },
    {
      href: "/solutions/technology-spotlight-gallium-nitride",
      category: "Technology",
      date: "May 2, 2026",
      title: "GaN in the 800 VDC Rack Architecture for AI Data Centers",
      excerpt:
        "The 800 VDC rack architecture is a structural turning point for GaN in AI data center power distribution.",
      image: "/images/power-module-gan-white.png",
      imageAlt: "WBG power module with GaN",
    },
    {
      href: "/solutions/technology-spotlight-silicium-carbide",
      category: "Technology",
      date: "April 18, 2026",
      title: "SiC — the Power Semiconductor of the Electrification Era",
      excerpt:
        "From device to system: SiC drives efficiency in electric vehicles, solar power and industrial drives.",
      image: "/images/power-module-sic.png",
      imageAlt: "WBG power module with SiC",
    },
    {
      href: "/solutions/rack-power-distribution",
      category: "Solutions",
      date: "April 3, 2026",
      title: "Rack Power Distribution Unit (PDU) for AI Data Centers",
      excerpt:
        "The full-GaN DC/DC converter replaces classic silicon MOSFETs and becomes the key technology of the power shelf.",
      image: "/images/ai-data-center-infrastructure.png",
      imageAlt: "AI data center infrastructure",
    },
  ],
};
