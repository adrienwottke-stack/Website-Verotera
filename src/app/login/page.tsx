import type { Metadata } from "next";
import Link from "next/link";
import { Lock, Mail, KeyRound, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "My VEROTERA Login - [VEROTERA]",
  description: "Zugang zum geschützten Mitgliederbereich von VEROTERA.",
  keywords: ["My VEROTERA", "Login", "Mitgliederbereich"],
};

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />

      <main className="flex-grow">
        <PageHero
          eyebrow="Mitgliederbereich"
          icon={Lock}
          title="My VEROTERA"
          subtitle="Der geschützte Bereich für Produktdokumentation, Datenblätter und Projektdaten unserer Partner befindet sich in Vorbereitung."
        />

        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-md mx-auto px-6">
            <div className="glass-panel p-8 sm:p-10 space-y-6">
              <div className="flex flex-col">
                <label htmlFor="login-email" className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wide mb-2.5">
                  E-Mail
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 w-4 h-4 text-brand-navy/30" />
                  <input
                    id="login-email"
                    type="email"
                    disabled
                    placeholder="sie@unternehmen.de"
                    className="w-full pl-11 pr-4 py-3 bg-surface-light rounded-xl border border-brand-navy/15 text-brand-navy/60 text-sm placeholder:text-brand-navy/30 cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="login-password" className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wide mb-2.5">
                  Passwort
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
                Der Login ist aktuell noch nicht freigeschaltet. Benötigen Sie bereits Zugang zu
                Unterlagen? Fordern Sie ihn direkt bei unserem Team an.
              </p>

              <Link
                href="/contacts"
                className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-brand-navy text-white font-semibold text-sm hover:bg-brand-navy/90 transition-colors"
              >
                Zugang anfragen <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
