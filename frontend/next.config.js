/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static optimization for pages that can be statically generated
  poweredByHeader: false,
  images: {
    domains: [],
  },
  // Disable server-side features since we're doing static export
  trailingSlash: true,
}

module.exports = nextConfig 