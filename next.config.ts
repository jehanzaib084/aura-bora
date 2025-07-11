import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.omanhajrimovers.com',
        port: '',
        pathname: '/**',
      },
    ],
  }
};

export default nextConfig;
