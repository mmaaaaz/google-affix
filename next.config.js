/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/devmaaaaz/image/upload',
    minimumCacheTTL: 6000000
  }
}
