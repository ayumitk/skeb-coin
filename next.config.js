/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn-images-1.medium.com', 'medium.com'],
  },
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
    images: {
      // unoptimized: true,
      allowFutureImage: true,
    },
  },
  // exportPathMap: async function () {
  //   return {
  //     '/': { page: '/' },
  //     '/lightpaper': { page: '/lightpaper' },
  //   }
  // },
}

module.exports = nextConfig
