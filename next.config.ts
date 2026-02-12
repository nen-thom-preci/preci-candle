import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Cho phép tải ảnh từ mọi tên miền (bao gồm wordpress.com)
      },
    ],
  },
};

export default nextConfig;