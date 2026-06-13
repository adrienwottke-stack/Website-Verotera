import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "VEROTERA | Next-Gen Leistungselektronik & KI-Systeme",
  description: "VEROTERA wandelt Wide-Bandgap (SiC/GaN) Halbleiterchips der nächsten Generation in hocheffiziente Leistungsmodule und komplett zertifizierte Systeme um, beschleunigt durch KI-Tools. Wir schlagen die Brücke zwischen Halbleiterphysik und realer Elektrifizierung.",
  keywords: ["VEROTERA", "Leistungselektronik", "Halbleiter", "SiC", "GaN", "Wide-Bandgap", "Elektromobilität", "Erneuerbare Energien", "Rechenzentren", "KI-Hardware", "Funktionale Sicherheit", "ISO 26262"],
  authors: [{ name: "VEROTERA GmbH" }],
  openGraph: {
    title: "VEROTERA | Next-Gen Leistungselektronik & KI-Systeme",
    description: "Wide-Bandgap Leistungsmodule und zertifizierte Systeme beschleunigt durch KI. Hocheffiziente Elektrifizierung für Automotive, Solar und Rechenzentren.",
    url: "https://verotera.com",
    siteName: "VEROTERA",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-white text-brand-navy font-sans antialiased selection:bg-brand-cyan/30 selection:text-brand-cyan">
        {children}
      </body>
    </html>
  );
}
