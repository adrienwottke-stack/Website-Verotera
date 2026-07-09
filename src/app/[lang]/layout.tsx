import type { Metadata } from "next";
import { Work_Sans, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { LangProvider } from "@/components/LangProvider";
import { LANGS, hasLang, type Lang } from "@/lib/i18n";
import "../globals.css";

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

const META: Record<Lang, { title: string; description: string; keywords: string[] }> = {
  de: {
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
  },
  en: {
    title: "VEROTERA | Next-Gen Power Electronics & AI Systems",
    description:
      "VEROTERA turns wide-bandgap (SiC/GaN) semiconductor chips into highly efficient power modules and fully certified systems.",
    keywords: [
      "Power electronics",
      "Wide bandgap",
      "Semiconductors",
      "SiC",
      "GaN",
      "Power supplies",
      "AI data centers",
      "E-mobility",
      "Green hydrogen",
    ],
  },
};

export async function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = META[hasLang(lang) ? lang : "de"];
  return {
    metadataBase: new URL("https://verotera.com"),
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    authors: [{ name: "VEROTERA GmbH" }],
    openGraph: {
      title: t.title,
      description: t.description,
      url: "https://verotera.com",
      siteName: "VEROTERA",
      locale: lang === "en" ? "en_US" : "de_DE",
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!hasLang(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${workSans.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-white text-brand-navy font-sans antialiased selection:bg-brand-cyan/30 selection:text-brand-cyan">
        <LangProvider lang={lang}>{children}</LangProvider>
      </body>
    </html>
  );
}
