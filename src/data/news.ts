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
 * Order: newest first.
 */
export const NEWS_ITEMS: NewsItem[] = [
  {
    href: "/solutions/agentic-ai-engineering",
    category: "Lösungen",
    date: "12. Juni 2026",
    title: "Agentische KI im Systems Engineering",
    excerpt:
      "Wie autonome KI-Agenten den Wandel von passiven Copiloten hin zu planenden, handelnden Systemen in der SiC- und GaN-Entwicklung beschleunigen.",
    image: "/images/agentic-ai-engineering.png",
    imageAlt: "Agentische KI im Systems Engineering",
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
    href: "/applications/hydrogen",
    category: "Applikationen",
    date: "14. Mai 2026",
    title: "Effiziente Leistungselektronik für grünen Wasserstoff",
    excerpt:
      "Der Wirkungsgrad der grünen Wasserstoffproduktion hängt an der Leistungselektronik – Wide-Bandgap-Halbleiter steigern Effizienz und Leistungsdichte.",
    image: "/images/green-hydrogen.png",
    imageAlt: "Effiziente Leistungselektronik für grünen Wasserstoff",
    featured: true,
  },
  {
    href: "/solutions/technology-spotlight-gallium-nitride",
    category: "Technologie",
    date: "2. Mai 2026",
    title: "GaN in der 800-VDC-Rack-Architektur für KI-Rechenzentren",
    excerpt:
      "NVIDIAs 800-VDC-Rack-Architektur ist ein struktureller Wendepunkt für GaN in der Stromverteilung von KI-Rechenzentren.",
    image: "/images/power-module-gan-white.png",
    imageAlt: "WBG-Leistungsmodul mit GaN",
  },
  {
    href: "/solutions/technology-spotlight-silicium-carbide",
    category: "Technologie",
    date: "18. April 2026",
    title: "SiC – der Leistungshalbleiter der Elektrifizierungsära",
    excerpt:
      "Vom Bauelement zum System: SiC treibt Effizienz in Elektrofahrzeugen, Solarenergie und grünem Wasserstoff.",
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
];
