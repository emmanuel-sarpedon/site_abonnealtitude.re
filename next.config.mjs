/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        hostname: "*abonnealtitude.re",
        pathname: "/uploads/**",
      },
    ],
  },
};

import withBundleAnalyzer from "@next/bundle-analyzer";

export default process.env.ANALYZE === "true"
  ? withBundleAnalyzer()(nextConfig)
  : nextConfig;
