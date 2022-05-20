/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  reactStrictMode: true,

  experimental: {
    // newNextLinkBehavior: true,
    scrollRestoration: true,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  poweredByHeader: false,

  images: {
    minimumCacheTTL: 84600 * 30, // 20days
  },
}
