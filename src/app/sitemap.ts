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
  { path: "/news", priority: 0.7, changeFrequency: "weekly" },
  { path: "/ethics-compliance", priority: 0.4, changeFrequency: "yearly" },
  { path: "/resources/product-documentation", priority: 0.5, changeFrequency: "monthly" },
  { path: "/resources/quality-certifications", priority: 0.5, changeFrequency: "yearly" },
  { path: "/resources/warranty", priority: 0.4, changeFrequency: "yearly" },
  { path: "/resources/patents", priority: 0.4, changeFrequency: "yearly" },
  { path: "/site-map", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/imprint", priority: 0.2, changeFrequency: "yearly" },
  { path: "/legal/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/legal/terms-of-use", priority: 0.2, changeFrequency: "yearly" },
  { path: "/legal/accessibility", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
