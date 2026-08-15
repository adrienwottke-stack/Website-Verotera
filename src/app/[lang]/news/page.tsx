import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Newspaper, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { NEWS_ITEMS } from "@/data/news";
import { hasLang, localePath, type Lang } from "@/lib/i18n";
import { buildMetadata, type PageMeta } from "@/lib/seo";

const COPY: Record<
  Lang,
  { heroTitle: string; heroSubtitle: string; readMore: string }
> = {
  de: {
    heroTitle: "Neuigkeiten & Einblicke",
    heroSubtitle:
      "Bleiben Sie auf dem Laufenden: die neuesten Beiträge zu Wide-Bandgap-Halbleitern, Applikationen und Lösungen.",
    readMore: "Read more",
  },
  en: {
    heroTitle: "News & Insights",
    heroSubtitle:
      "Stay up to date: the latest articles on wide-bandgap semiconductors, applications and solutions.",
    readMore: "Read more",
  },
};

const META: Record<Lang, PageMeta> = {
  de: {
    title: "News & Insights | VEROTERA",
    description:
      "Bleiben Sie auf dem Laufenden: aktuelle News zu WBG-Halbleitern, Applikationen und Lösungen. Regelmäßig neue Beiträge.",
    keywords: ["News", "Insights", "Neuigkeiten", "WBG", "Halbleiter"],
    // #175: Bereich vorerst raus — Seite bleibt bestehen, aber unverlinkt
    // und nicht indexiert, damit die Struktur fuer spaetere VEROTERA-News steht.
    noindex: true,
  },
  en: {
    title: "News & Insights | VEROTERA",
    description:
      "Stay up to date: the latest news on WBG semiconductors, applications and solutions. New articles regularly.",
    keywords: ["News", "Insights", "WBG", "Semiconductors"],
    noindex: true,
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l = hasLang(lang) ? lang : "de";
  return buildMetadata(l, "/news", META[l]);
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Lang = hasLang(rawLang) ? rawLang : "de";
  const t = COPY[lang];
  const items = NEWS_ITEMS[lang];

  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />

      <main className="flex-grow">
        <PageHero
          eyebrow="News"
          icon={Newspaper}
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
          width="wide"
        />

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item, i) => (
                <Reveal key={item.href} delay={(i % 3) * 0.08}>
                  <Link
                    href={localePath(lang, item.href)}
                    className="group block h-full rounded-2xl overflow-hidden border border-brand-navy/8 bg-white hover:shadow-lg hover:border-brand-cyan/30 transition-all duration-300"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-surface-light">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3 text-xs">
                        <span className="px-2.5 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan font-semibold uppercase tracking-wider">
                          {item.category}
                        </span>
                        <span className="text-brand-navy/45">{item.date}</span>
                      </div>
                      <h2 className="font-display text-lg font-bold text-brand-navy mb-2 leading-snug group-hover:text-brand-cyan transition-colors">
                        {item.title}
                      </h2>
                      <p className="text-sm text-brand-navy/60 leading-relaxed mb-4">{item.excerpt}</p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan">
                        {t.readMore}
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
