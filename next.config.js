/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    urlImports: [
      'https://font.flatcode.agency'
    ]
  },
  images: {
    remotePatterns: [
      {
        hostname: 'raw.githubusercontent.com'
      }
    ]
  }
}

module.exports = nextConfig
