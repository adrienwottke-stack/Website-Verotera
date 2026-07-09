import type { Metadata } from "next";
import Link from "next/link";
import { Lock, Mail, KeyRound, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { hasLang, localePath, type Lang } from "@/lib/i18n";

const COPY: Record<
  Lang,
  {
    heroEyebrow: string;
    heroSubtitle: string;
    emailLabel: string;
    emailPlaceholder: string;
    passwordLabel: string;
    note: string;
    requestAccess: string;
  }
> = {
  de: {
    heroEyebrow: "Mitgliederbereich",
    heroSubtitle:
      "Der geschützte Bereich für Produktdokumentation, Datenblätter und Projektdaten unserer Partner befindet sich in Vorbereitung.",
    emailLabel: "E-Mail",
    emailPlaceholder: "sie@unternehmen.de",
    passwordLabel: "Passwort",
    note:
      "Der Login ist aktuell noch nicht freigeschaltet. Benötigen Sie bereits Zugang zu Unterlagen? Fordern Sie ihn direkt bei unserem Team an.",
    requestAccess: "Zugang anfragen",
  },
  en: {
    heroEyebrow: "Member Area",
    heroSubtitle:
      "The protected area for product documentation, datasheets and our partners' project data is currently in preparation.",
    emailLabel: "Email",
    emailPlaceholder: "you@company.com",
    passwordLabel: "Password",
    note:
      "Login is not yet enabled. Already need access to documents? Request it directly from our team.",
    requestAccess: "Request access",
  },
};

const META: Record<Lang, Metadata> = {
  de: {
    title: "My VEROTERA Login - [VEROTERA]",
    description: "Zugang zum geschützten Mitgliederbereich von VEROTERA.",
    keywords: ["My VEROTERA", "Login", "Mitgliederbereich"],
  },
  en: {
    title: "My VEROTERA Login - [VEROTERA]",
    description: "Access to VEROTERA's protected member area.",
    keywords: ["My VEROTERA", "Login", "Member area"],
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

export default async function LoginPage({
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
          eyebrow={t.heroEyebrow}
          icon={Lock}
          title="My VEROTERA"
          subtitle={t.heroSubtitle}
        />

        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-md mx-auto px-6">
            <div className="glass-panel p-8 sm:p-10 space-y-6">
              <div className="flex flex-col">
                <label htmlFor="login-email" className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wide mb-2.5">
                  {t.emailLabel}
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 w-4 h-4 text-brand-navy/30" />
                  <input
                    id="login-email"
                    type="email"
                    disabled
                    placeholder={t.emailPlaceholder}
                    className="w-full pl-11 pr-4 py-3 bg-surface-light rounded-xl border border-brand-navy/15 text-brand-navy/60 text-sm placeholder:text-brand-navy/30 cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="login-password" className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wide mb-2.5">
                  {t.passwordLabel}
                </label>
                <div className="relative">
                  <KeyRound className="absolute left-4 top-3.5 w-4 h-4 text-brand-navy/30" />
                  <input
                    id="login-password"
                    type="password"
                    disabled
                    placeholder="••••••••"
                    className="w-full pl-11 pr-4 py-3 bg-surface-light rounded-xl border border-brand-navy/15 text-brand-navy/60 text-sm placeholder:text-brand-navy/30 cursor-not-allowed"
                  />
                </div>
              </div>

              <p className="text-xs text-brand-navy/50 leading-relaxed">
                {t.note}
              </p>

              <Link
                href={localePath(lang, "/contacts")}
                className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-brand-navy text-white font-semibold text-sm hover:bg-brand-navy/90 transition-colors"
              >
                {t.requestAccess} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
