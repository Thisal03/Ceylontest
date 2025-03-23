import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  eslint: {
    // Don't fail the build on ESLint warnings
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
