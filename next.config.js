/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: isProd ? '/personal_website/' : '',
  assetPrefix: isProd ? '/personal_website/' : ''
}

module.exports = nextConfig
