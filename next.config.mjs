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

export default nextConfig;
