/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable static optimization for pages that can be statically generated
  poweredByHeader: false,
  // Configure any image domains if needed
  images: {
    domains: [],
  },
}

module.exports = nextConfig 