/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  reactStrictMode: true,

  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,

    legacyBrowsers: false,
    browsersListForSwc: true,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  poweredByHeader: false,

  images: {
    minimumCacheTTL: 84600 * 90, // 90days
  },
}
