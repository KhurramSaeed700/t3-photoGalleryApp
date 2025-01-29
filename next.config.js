import { withSentryConfig } from "@sentry/nextjs";
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const coreConfig = {
  images: { remotePatterns: [{ hostname: "utfs.io" }] },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const config = withSentryConfig(coreConfig, {
  org: "snb-pd",
  project: "t3-app-2",
  silent: true,
  widenClientFileUpload: true,
  reactComponentAnnotation: {
    enabled: true,
  },
  tunnelRoute: "/monitoring",
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});

export default config;
