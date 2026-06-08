"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, RefreshCw, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
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
            <Shield className="w-3.5 h-3.5" />
            Datenschutzerklärung (Privacy Policy)
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Datenschutz
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-sans text-slate-400 text-sm mb-12 border-b border-white/5 pb-4"
          >
            Privacy Policy overview in compliance with the EU General Data Protection Regulation (GDPR).
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8 text-slate-300 font-sans text-sm leading-relaxed"
          >
            {/* General Information */}
            <div className="p-8 rounded-2xl border border-white/5 bg-brand-navy-card backdrop-blur-sm space-y-4">
              <h2 className="font-display text-lg font-bold text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-brand-cyan" />
                1. Allgemeine Hinweise / General Information
              </h2>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
              <p className="text-slate-400 text-xs italic">
                The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data by which you can be personally identified.
              </p>
            </div>

            {/* Controller details */}
            <div className="p-8 rounded-2xl border border-white/5 bg-brand-navy-card backdrop-blur-sm space-y-4">
              <h2 className="font-display text-lg font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-cyan" />
                2. Verantwortliche Stelle / Controller Details
              </h2>
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="font-mono text-xs p-4 rounded-lg bg-[#030816] text-slate-200 border border-white/5">
                VEROTERA GmbH<br />
                Böhlerstraße 1<br />
                40667 Meerbusch, Germany<br />
                E-Mail: info@verotera.com<br />
                Telefon: +49 173 1878630
              </p>
            </div>

            {/* Data capture details */}
            <div className="p-8 rounded-2xl border border-white/5 bg-brand-navy-card backdrop-blur-sm space-y-4">
              <h2 className="font-display text-lg font-bold text-white flex items-center gap-2">
                <Eye className="w-5 h-5 text-brand-cyan" />
                3. Datenerfassung auf unserer Website / Data Collection
              </h2>
              <h3 className="font-bold text-white">Wie erfassen wir Ihre Daten?</h3>
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p>
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
              </p>
              <h3 className="font-bold text-white pt-2">Wofür nutzen wir Ihre Daten?</h3>
              <p>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
            </div>

            {/* User rights */}
            <div className="p-8 rounded-2xl border border-white/5 bg-brand-navy-card backdrop-blur-sm space-y-4">
              <h2 className="font-display text-lg font-bold text-white flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-brand-cyan" />
                4. Ihre Rechte bezüglich Ihrer Daten / Your Rights
              </h2>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen.
              </p>
              <p>
                Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu (Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen).
              </p>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
