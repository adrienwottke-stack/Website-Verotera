import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "verotera.com",
        pathname: "/images/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/impressum", destination: "/legal/imprint", permanent: true },
      { source: "/privacy-policy", destination: "/legal/privacy-policy", permanent: true },
      { source: "/cookie-policy", destination: "/legal/privacy-policy", permanent: true },
      // #177: "Agentic AI" wird nicht mehr verwendet — alte Route umgeleitet,
      // damit bereits indexierte Links nicht ins Leere laufen.
      {
        source: "/solutions/agentic-ai-engineering",
        destination: "/solutions/deterministic-engineering-core",
        permanent: true,
      },
      {
        source: "/en/solutions/agentic-ai-engineering",
        destination: "/en/solutions/deterministic-engineering-core",
        permanent: true,
      },
      // #169: GaN- und SiC-Technologie-Spotlights entfernt (Kundenantwort "B" vom
      // 2026-08-21) — alte Routen auf WBG Power Modules umgeleitet, damit bereits
      // indexierte Links nicht ins Leere laufen.
      {
        source: "/solutions/technology-spotlight-gallium-nitride",
        destination: "/solutions/wbg-power-modules",
        permanent: true,
      },
      {
        source: "/en/solutions/technology-spotlight-gallium-nitride",
        destination: "/en/solutions/wbg-power-modules",
        permanent: true,
      },
      {
        source: "/solutions/technology-spotlight-silicium-carbide",
        destination: "/solutions/wbg-power-modules",
        permanent: true,
      },
      {
        source: "/en/solutions/technology-spotlight-silicium-carbide",
        destination: "/en/solutions/wbg-power-modules",
        permanent: true,
      },
    ];
  },
};

export default withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://www.npmjs.com/package/@sentry/webpack-plugin#options

  org: "nexara-ai",

  project: "javascript-nextjs",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  tunnelRoute: "/monitoring",

  webpack: {
    // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,

    // Tree-shaking options for reducing bundle size
    treeshake: {
      // Automatically tree-shake Sentry logger statements to reduce bundle size
      removeDebugLogging: true,
    },
  },
});
