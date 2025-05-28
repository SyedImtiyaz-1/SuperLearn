/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable static optimization for pages that can be statically generated
  poweredByHeader: false,
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
    domains: [],
  },
  // Disable server-side features since we're doing static export
  trailingSlash: true,
}

module.exports = nextConfig 