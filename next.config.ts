import withBundleAnalyzer from "@next/bundle-analyzer"
import { type NextConfig } from "next"

import { env } from "./env.mjs"

const config: NextConfig = {
  reactStrictMode: true,
  experimental: {
    allowedDevOrigins: ["http://192.168.1.47:3000"],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  rewrites: async () => [
    { source: "/healthz", destination: "/api/health" },
    { source: "/api/healthz", destination: "/api/health" },
    { source: "/health", destination: "/api/health" },
    { source: "/ping", destination: "/api/health" },
  ],
}

export default env.ANALYZE ? withBundleAnalyzer({ enabled: env.ANALYZE })(config) : config
