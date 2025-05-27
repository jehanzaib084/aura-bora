import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tidy-poem-da6686702e.media.strapiapp.com',
        port: '',
        pathname: '/**',
      },
    ],
  }
};

export default nextConfig;
