/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Don't fail the build on ESLint warnings
    ignoreDuringBuilds: true
  },
  typescript: {
    // Don't fail the build on TypeScript errors
    ignoreBuildErrors: true
  },
  // Disable React strict mode for deployment
  reactStrictMode: false,
  // Allow TypeScript errors
  distDir: '.next',
  // Add SWC minify for better performance
  swcMinify: true,
  // Improve loading performance
  optimizeFonts: true
};

module.exports = nextConfig; 