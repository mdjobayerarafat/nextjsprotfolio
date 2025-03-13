/** @type {import('next').NextConfig} */
                const nextConfig = {
                  images: {
                    domains: ['20.163.180.176', 'mdjobayerarafat.live', 'www.mdjobayerarafat.live'],
                    remotePatterns: [
                      {
                        protocol: 'http',
                        hostname: '20.163.180.176',
                        pathname: '/static/**'
                      },
                      {
                        protocol: 'http',
                        hostname: '20.163.180.176',
                        pathname: '/static/uploads/**'
                      },
                      {
                        protocol: 'https',
                        hostname: '20.163.180.176',
                        pathname: '/static/**'
                      },
                      {
                        protocol: 'https',
                        hostname: 'mdjobayerarafat.live',
                        pathname: '/static/**'
                      },
                      {
                        protocol: 'https',
                        hostname: 'www.mdjobayerarafat.live',
                        pathname: '/static/**'
                      }
                    ]
                  },
                  typescript: {
                    ignoreBuildErrors: true
                  }
                };

                module.exports = nextConfig;