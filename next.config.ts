import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.soumendas.me',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
