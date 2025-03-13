const nextConfig = {
  images: {
    unoptimized: true, // Disable Next.js image optimization
    domains: ['20.163.180.176', 'mdjobayerarafat.live', 'www.mdjobayerarafat.live'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '20.163.180.176',
        pathname: '/static/**',
      },
      {
        protocol: 'https',
        hostname: 'mdjobayerarafat.live',
        pathname: '/static/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;