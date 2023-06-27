/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: process.env.NODE_ENV === 'production' ? '/sass-template' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sass-template' : '',
}

module.exports = nextConfig
