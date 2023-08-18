/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  basePath: '/some',
  reactStrictMode: true,
  images: {
    domains: ['pbs.twimg.com'],
  },
  experimental: {
    appDir: true,
  },
};
