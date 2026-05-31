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
  title: "VEROTERA | Next-Gen Power Electronics & AI Systems",
  description: "VEROTERA turns next-generation wide-bandgap (SiC/GaN) semiconductor chips into highly efficient power modules and complete certified systems, accelerated by AI tools. Building the bridge between semiconductor physics and real-world electrification.",
  keywords: ["VEROTERA", "power electronics", "semiconductor", "SiC", "GaN", "wide-bandgap", "electric vehicles", "renewable energy", "data centers", "AI hardware", "functional safety", "ISO 26262"],
  authors: [{ name: "VEROTERA GmbH" }],
  openGraph: {
    title: "VEROTERA | Next-Gen Power Electronics & AI Systems",
    description: "Wide-bandgap power modules and certified systems accelerated by AI. High-efficiency electrification for automotive, solar, and data centers.",
    url: "https://verotera.com",
    siteName: "VEROTERA",
    locale: "en_US",
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
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-[#020617] text-slate-100 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
