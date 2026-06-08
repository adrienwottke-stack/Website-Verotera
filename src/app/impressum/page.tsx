"use client";

import { motion } from "framer-motion";
import { Scale, Mail, Phone, MapPin, Building, Globe, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ImpressumPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617] text-slate-100 antialiased">
      <Header />

      <main className="flex-grow pt-32 pb-24 relative overflow-hidden">
        {/* Background glow decorator */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />

        <section className="max-w-4xl mx-auto px-6 text-left">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 hover:bg-brand-cyan/10 hover:border-brand-cyan/20 text-slate-300 hover:text-brand-cyan transition-all duration-300 font-sans text-xs font-semibold uppercase tracking-wider group focus:outline-none"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Scale className="w-3.5 h-3.5" />
            Legal Notice (Impressum)
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Angaben gemäß § 5 TMG
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-sans text-slate-400 text-sm mb-12 border-b border-white/5 pb-4"
          >
            Information provided according to Sec. 5 German Telemedia Act (TMG).
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Company Details */}
            <div className="p-8 rounded-2xl border border-white/5 bg-brand-navy-card backdrop-blur-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                <Building className="w-5 h-5 text-brand-cyan" />
                <h2 className="font-display text-lg font-bold text-white">VEROTERA GmbH</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Anschrift / Address</span>
                  <p className="text-slate-300 leading-relaxed">
                    Böhlerstraße 1<br />
                    40667 Meerbusch<br />
                    Germany
                  </p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Vertretungsberechtigter Geschäftsführer</span>
                  <p className="text-slate-300 font-semibold leading-relaxed">
                    Aly Mashaly
                  </p>
                </div>
              </div>
            </div>

            {/* Registration Data */}
            <div className="p-8 rounded-2xl border border-white/5 bg-brand-navy-card backdrop-blur-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                <Globe className="w-5 h-5 text-brand-cyan" />
                <h2 className="font-display text-lg font-bold text-white">Registereintrag / Commercial Registry</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Registergericht / Registry Court</span>
                  <p className="text-slate-300 leading-relaxed">Amtsgericht Neuss</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Registernummer / Registration Number</span>
                  <p className="text-brand-cyan font-mono font-semibold leading-relaxed">HRB 24862</p>
                </div>
              </div>
            </div>

            {/* Contact details */}
            <div className="p-8 rounded-2xl border border-white/5 bg-brand-navy-card backdrop-blur-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                <Mail className="w-5 h-5 text-brand-cyan" />
                <h2 className="font-display text-lg font-bold text-white">Kontakt / Contact Details</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Telefon / Phone</span>
                    <a href="tel:+491731878630" className="text-slate-300 hover:text-brand-cyan transition-colors">+49 173 1878630</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">E-Mail</span>
                    <a href="mailto:info@verotera.com" className="text-slate-300 hover:text-brand-cyan transition-colors">info@verotera.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Responsibility according to § 18 MStV */}
            <div className="p-8 rounded-2xl border border-white/5 bg-brand-navy-card backdrop-blur-sm space-y-4 text-sm leading-relaxed text-slate-300">
              <h3 className="font-display text-base font-bold text-white mb-2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
              <p>
                Aly Mashaly<br />
                Böhlerstraße 1<br />
                40667 Meerbusch, Germany
              </p>
            </div>

            {/* Disclaimer and copyright */}
            <div className="space-y-6 text-xs text-slate-500 leading-relaxed border-t border-white/5 pt-8">
              <div>
                <h3 className="font-bold text-slate-400 mb-1">Haftung für Inhalte (Disclaimer of Liability for Contents)</h3>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-400 mb-1">Haftung für Links (Disclaimer of Liability for Links)</h3>
                <p>
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-400 mb-1">Urheberrecht (Copyright Notice)</h3>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
              </div>
            </div>

          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
