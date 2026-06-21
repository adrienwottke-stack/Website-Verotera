import type { Metadata } from "next";
import { Work_Sans, Inter } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://verotera.com"),
  title: "VEROTERA | Next-Gen Leistungselektronik & KI-Systeme",
  description:
    "VEROTERA wandelt Wide-Bandgap (SiC/GaN) Halbleiterchips in hocheffiziente Leistungsmodule und komplett zertifizierte Systeme um.",
  keywords: [
    "Leistungselektronik",
    "Wide-Bandgap",
    "Halbleiter",
    "SiC",
    "GaN",
    "Netzteile",
    "KI-Rechenzentren",
    "Elektromobilität",
    "Grüner Wasserstoff",
  ],
  authors: [{ name: "VEROTERA GmbH" }],
  openGraph: {
    title: "VEROTERA | Next-Gen Leistungselektronik & KI-Systeme",
    description:
      "VEROTERA wandelt Wide-Bandgap (SiC/GaN) Halbleiterchips in hocheffiziente Leistungsmodule und komplett zertifizierte Systeme um.",
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
      className={`${workSans.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-white text-brand-navy font-sans antialiased selection:bg-brand-cyan/30 selection:text-brand-cyan">
        {children}
      </body>
    </html>
  );
}
