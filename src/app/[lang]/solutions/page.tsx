import type { Metadata } from "next";
import { hasLang, type Lang } from "@/lib/i18n";
import { buildMetadata, type PageMeta } from "@/lib/seo";
import SolutionsClient from "./SolutionsClient";

const META: Record<Lang, PageMeta> = {
  de: {
    title: "Lösungen | VEROTERA",
    description:
      "WBG-Leistungsmodule, zertifiziertes Systems Engineering und KI-gestützte Designoptimierung: das Lösungsportfolio von VEROTERA für die Hochleistungs-Elektrifizierung.",
    keywords: ["Lösungen", "WBG", "Leistungsmodule", "Systems Engineering", "KI", "SiC", "GaN"],
  },
  en: {
    title: "Solutions | VEROTERA",
    description:
      "WBG power modules, certified systems engineering and AI-driven design optimization: VEROTERA's solutions portfolio for high-power electrification.",
    keywords: ["Solutions", "WBG", "Power modules", "Systems engineering", "AI", "SiC", "GaN"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l = hasLang(lang) ? lang : "de";
  return buildMetadata(l, "/solutions", META[l]);
}

export default function SolutionsPage() {
  return <SolutionsClient />;
}
