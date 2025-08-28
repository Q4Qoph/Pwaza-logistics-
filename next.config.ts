import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  typescript: {
    ignoreBuildErrors: true, // This will allow build even with TypeScript errors
  },
  // Disable ESLint during builds (optional)
  eslint: {
    ignoreDuringBuilds: true, // This will ignore ESLint errors during build
  },
  // Other optimizations
  // experimental: {
  //   forceSwcTransforms: true, // Use SWC instead of Babel for better performance
  // },
  // Image domains if you're using external images
  images: {
    domains: [], // Add any external image domains here if needed
  },
};

export default nextConfig;
