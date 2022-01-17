/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 10368000 // <- seconds translates to 172800 minutes or 2880 hours or 120 days
  }
}
