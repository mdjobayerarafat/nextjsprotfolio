/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '20.163.180.176'
      },
      {
        protocol: 'https',
        hostname: '20.163.180.176'
      },
      {
        protocol: 'https',
        hostname: 'mdjobayerarafat.live'
      },
      {
        protocol: 'https',
        hostname: 'www.mdjobayerarafat.live'
      }
    ],
    unoptimized: false
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig;