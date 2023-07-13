/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: '*'
      },
      {
        protocol: 'http',
        hostname: 'placehold.it'
      }
    ]
  }
}

module.exports = nextConfig
