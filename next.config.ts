/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['20.163.180.176'],
    unoptimized: process.env.NODE_ENV === 'development',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;