import type { MetadataRoute } from "next";

const BASE_URL = "https://verotera.com";

// Public, indexable routes grouped by SEO priority. /login and /monitoring are
// intentionally excluded (see robots.ts).
const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/solutions/wbg-power-modules", priority: 0.9, changeFrequency: "monthly" },
  { path: "/solutions/rack-power-distribution", priority: 0.9, changeFrequency: "monthly" },
  { path: "/solutions/agentic-ai-engineering", priority: 0.9, changeFrequency: "monthly" },
  { path: "/solutions/technology-spotlight-gallium-nitride", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions/technology-spotlight-silicium-carbide", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions", priority: 0.7, changeFrequency: "monthly" },
  { path: "/applications/automotive-emobility", priority: 0.8, changeFrequency: "monthly" },
  { path: "/applications/hydrogen", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contacts", priority: 0.7, changeFrequency: "yearly" },
  { path: "/careers", priority: 0.6, changeFrequency: "weekly" },
  // /news: per #175 vorerst entlinkt und auf noindex — bewusst nicht hier.
  { path: "/ethics-compliance", priority: 0.4, changeFrequency: "yearly" },
  { path: "/resources/product-documentation", priority: 0.5, changeFrequency: "monthly" },
  { path: "/resources/quality-certifications", priority: 0.5, changeFrequency: "yearly" },
  { path: "/resources/warranty", priority: 0.4, changeFrequency: "yearly" },
  // /resources/patents: per #97 entlinkt und auf noindex — bewusst nicht hier.
  { path: "/site-map", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/imprint", priority: 0.2, changeFrequency: "yearly" },
  { path: "/legal/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/legal/terms-of-use", priority: 0.2, changeFrequency: "yearly" },
  { path: "/legal/accessibility", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  // German lives at the unprefixed URLs, English under /en (see src/proxy.ts).
  return ROUTES.flatMap(({ path, priority, changeFrequency }) => {
    const deUrl = `${BASE_URL}${path}`;
    const enUrl = `${BASE_URL}/en${path === "/" ? "" : path}`;
    const alternates = { languages: { de: deUrl, en: enUrl } };
    return [
      { url: deUrl, lastModified, changeFrequency, priority, alternates },
      { url: enUrl, lastModified, changeFrequency, priority, alternates },
    ];
  });
}
