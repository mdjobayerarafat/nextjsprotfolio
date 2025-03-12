/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['20.163.180.176',
    'mdjobayerarafat.live',
    'www.mdjobayerarafat.live'],
    unoptimized: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;