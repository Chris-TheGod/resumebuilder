import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "1scbndbmju5zf1l4.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
