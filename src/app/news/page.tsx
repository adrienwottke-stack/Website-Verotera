import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Newspaper, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { NEWS_ITEMS } from "@/data/news";

export const metadata: Metadata = {
  title: "News & Insights | VEROTERA",
  description:
    "Bleiben Sie auf dem Laufenden: aktuelle News zu WBG-Halbleitern, Applikationen und Lösungen. Regelmäßig neue Beiträge.",
  keywords: ["News", "Insights", "Neuigkeiten", "WBG", "Halbleiter"],
};

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />

      <main className="flex-grow">
        <PageHero
          eyebrow="News"
          icon={Newspaper}
          title="Neuigkeiten & Einblicke"
          subtitle="Bleiben Sie auf dem Laufenden: die neuesten Beiträge zu Wide-Bandgap-Halbleitern, Applikationen und Lösungen."
          width="wide"
        />

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {NEWS_ITEMS.map((item, i) => (
                <Reveal key={item.href} delay={(i % 3) * 0.08}>
                  <Link
                    href={item.href}
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
                        Read more
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
