"use client";

import { motion } from "framer-motion";
import { Info, HelpCircle, CheckCircle2, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CookiePolicyPage() {
  const cookieTypes = [
    {
      name: "Notwendige Cookies (Necessary)",
      purpose: "Ermöglichen Kernfunktionen wie Seitennavigation und Zugriff auf sichere Bereiche. Die Website kann ohne diese Cookies nicht richtig funktionieren.",
      engPurpose: "Enable core functions like site navigation and access to secure areas. The website cannot function properly without these cookies.",
      duration: "Session / 1 Year",
    },
    {
      name: "Statistik- & Analyse-Cookies (Performance)",
      purpose: "Helfen uns zu verstehen, wie Besucher mit der Website interagieren, indem anonymisierte Nutzungsdaten erfasst werden.",
      engPurpose: "Help us understand how visitors interact with the website by collecting anonymized usage details.",
      duration: "30 Days - 2 Years",
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#020617] text-slate-100 antialiased">
      <Header />

      <main className="flex-grow pt-32 pb-24 relative overflow-hidden">
        {/* Background glow decorator */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />

        <section className="max-w-4xl mx-auto px-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Cookie-Richtlinie (Cookie Policy)
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Cookie-Richtlinie
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-sans text-slate-400 text-sm mb-12 border-b border-white/5 pb-4"
          >
            Detailed information about the cookies used on this website.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-10 text-slate-300 font-sans text-sm leading-relaxed"
          >
            {/* What are cookies */}
            <div className="p-8 rounded-2xl border border-white/5 bg-brand-navy-card backdrop-blur-sm space-y-4">
              <h2 className="font-display text-lg font-bold text-white flex items-center gap-2">
                <Info className="w-5 h-5 text-brand-cyan" />
                Was sind Cookies? / What are Cookies?
              </h2>
              <p>
                Cookies sind kleine Textdateien, die von Webseiten verwendet werden, um die Benutzererfahrung effizienter zu gestalten. Laut Gesetz können wir Cookies auf Ihrem Gerät speichern, wenn diese für den Betrieb dieser Seite unbedingt notwendig sind. Für alle anderen Cookie-Typen benötigen wir Ihre Erlaubnis.
              </p>
              <p className="text-slate-400 text-xs italic">
                Cookies are small text files used by websites to make the user experience more efficient. By law, we can store cookies on your device if they are strictly necessary for the operation of this site. For all other types of cookies we need your permission.
              </p>
            </div>

            {/* Cookies list table */}
            <div className="p-8 rounded-2xl border border-white/5 bg-brand-navy-card backdrop-blur-sm space-y-6">
              <h2 className="font-display text-lg font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-brand-cyan" />
                Verwendete Cookie-Arten / Types of Cookies Used
              </h2>
              
              <div className="space-y-6">
                {cookieTypes.map((cookie) => (
                  <div key={cookie.name} className="border-b border-white/5 pb-6 last:border-0 last:pb-0">
                    <h3 className="font-bold text-white flex items-center gap-2 text-base mb-2">
                      <CheckCircle2 className="w-4.5 h-4.5 text-brand-cyan shrink-0" />
                      {cookie.name}
                    </h3>
                    <p className="text-slate-300 text-sm mb-2">{cookie.purpose}</p>
                    <p className="text-slate-400 text-xs italic mb-3">{cookie.engPurpose}</p>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#030816] text-[10px] font-mono text-slate-400 border border-white/5">
                      <span>Gültigkeit / Duration:</span>
                      <span className="text-brand-cyan font-bold">{cookie.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cookie settings option info */}
            <div className="p-8 rounded-2xl border border-[#10b981]/15 bg-brand-emerald/5 backdrop-blur-sm text-sm space-y-3">
              <h3 className="font-display font-bold text-white">Einwilligung verwalten / Manage Consent</h3>
              <p>
                Sie können Ihre Einwilligung zu Analyse-Cookies jederzeit anpassen oder widerrufen. Bitte beachten Sie, dass das Blockieren notwendiger Cookies die Funktionsweise der Website beeinträchtigen kann.
              </p>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
