/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  images: {
    remotePatterns: [
      {
        hostname: 'raw.githubusercontent.com'
      }
    ]
  },
  urlImports: [
    'https://font.flatcode.agency'
  ]
}

module.exports = nextConfig
