import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { NEWS_ITEMS } from "@/data/news";

export default function NewsInsights() {
  const items = NEWS_ITEMS.filter((n) => n.featured).slice(0, 3);

  return (
    <section id="news" className="relative py-24 sm:py-32 bg-white border-t border-brand-blue/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-2 block">
              News & Insights
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-tight">
              Neuigkeiten & Einblicke
            </h2>
            <p className="font-sans text-base text-brand-navy/60 leading-relaxed mt-4">
              Aktuelles rund um Wide-Bandgap-Halbleiter, Applikationen und Lösungen – regelmäßig neue
              Beiträge.
            </p>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-brand-navy border border-brand-navy/15 hover:border-brand-cyan hover:text-brand-cyan transition-colors shrink-0 self-start"
          >
            Alle News ansehen
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <Reveal key={item.href} delay={i * 0.08}>
              <Link
                href={item.href}
                className="group block h-full rounded-2xl overflow-hidden border border-brand-navy/8 bg-white hover:shadow-lg hover:border-brand-cyan/30 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-light">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
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
                  <h3 className="font-display text-lg font-bold text-brand-navy mb-2 leading-snug group-hover:text-brand-cyan transition-colors">
                    {item.title}
                  </h3>
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
  );
}
