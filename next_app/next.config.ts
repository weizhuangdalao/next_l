import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false, //react严格模式关闭
  // devIndicators: true, //关闭开发模式
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindcss.com',
      },
    ],
  },
};

export default nextConfig;
