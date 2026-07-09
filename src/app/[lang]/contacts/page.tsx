import type { Metadata } from "next";
import { MessageSquare, MapPin, Mail, Phone, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { hasLang, type Lang } from "@/lib/i18n";

const DETAIL_ICONS = [MapPin, Mail, Phone, Clock];

const COPY: Record<
  Lang,
  {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    tagline: string;
    intro: string;
    details: { label: string; value: string; href?: string }[];
  }
> = {
  de: {
    heroEyebrow: "Kontakt aufnehmen",
    heroTitle: "Sprechen Sie mit unserem Engineering-Team",
    heroSubtitle:
      "Senden Sie uns eine Nachricht und wir melden uns so schnell wie möglich bei Ihnen zurück.",
    tagline: "Ihr Ziel. Unsere Technik. Eine Vision.",
    intro:
      "Ob spezialisierte Wide-Bandgap-Module, funktionale Sicherheitstests nach ISO 26262 oder unsere KI-Entwicklungswerkzeuge – unser Team in Meerbusch steht bereit.",
    details: [
      {
        label: "Standort & Hauptsitz",
        value: "VEROTERA GmbH\nBöhlerstraße 1\n40667 Meerbusch, Deutschland",
      },
      {
        label: "E-Mail",
        value: "info@verotera.com",
        href: "mailto:info@verotera.com",
      },
      {
        label: "Telefon",
        value: "+49 173 1878630",
        href: "tel:+491731878630",
      },
      {
        label: "Erreichbarkeit",
        value: "Mo–Fr · 09:00–17:00 Uhr (MEZ)",
      },
    ],
  },
  en: {
    heroEyebrow: "Get in Touch",
    heroTitle: "Talk to our engineering team",
    heroSubtitle: "Send us a message and we'll get back to you as soon as possible.",
    tagline: "Your Goal. Our Tech. One Vision.",
    intro:
      "Whether specialized wide-bandgap modules, functional safety testing per ISO 26262 or our AI development tools — our team in Meerbusch is ready.",
    details: [
      {
        label: "Location & Headquarters",
        value: "VEROTERA GmbH\nBöhlerstraße 1\n40667 Meerbusch, Germany",
      },
      {
        label: "Email",
        value: "info@verotera.com",
        href: "mailto:info@verotera.com",
      },
      {
        label: "Phone",
        value: "+49 173 1878630",
        href: "tel:+491731878630",
      },
      {
        label: "Office hours",
        value: "Mon–Fri · 9:00 AM–5:00 PM (CET)",
      },
    ],
  },
};

const META: Record<Lang, Metadata> = {
  de: {
    title: "Contact Us - [VEROTERA]",
    description: "Send us a message and we'll get back to you as soon as possible.",
    keywords: ["Kontakt VEROTERA", "Support", "Office Meerbusch"],
  },
  en: {
    title: "Contact Us - [VEROTERA]",
    description: "Send us a message and we'll get back to you as soon as possible.",
    keywords: ["Contact VEROTERA", "Support", "Office Meerbusch"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return META[hasLang(lang) ? lang : "de"];
}

export default async function ContactsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = COPY[hasLang(lang) ? lang : "de"];

  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />

      <main className="flex-grow">
        <PageHero
          eyebrow={t.heroEyebrow}
          icon={MessageSquare}
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
          width="wide"
        />

        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Office details */}
            <div className="lg:col-span-5">
              <p className="font-sans text-brand-cyan text-base font-semibold tracking-wide uppercase mb-4">
                {t.tagline}
              </p>
              <p className="font-sans text-base text-brand-navy/60 leading-relaxed mb-10">
                {t.intro}
              </p>

              <div className="space-y-5">
                {t.details.map((d, i) => {
                  const Icon = DETAIL_ICONS[i];
                  return (
                    <div key={d.label} className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-surface-light border border-brand-navy/8 text-brand-cyan shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-brand-navy/50 uppercase tracking-widest block mb-1">
                          {d.label}
                        </span>
                        {d.href ? (
                          <a
                            href={d.href}
                            className="font-sans text-sm text-brand-navy/80 hover:text-brand-cyan transition-colors"
                          >
                            {d.value}
                          </a>
                        ) : (
                          <span className="font-sans text-sm text-brand-navy/80 whitespace-pre-line leading-relaxed">
                            {d.value}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
