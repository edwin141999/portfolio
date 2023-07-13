/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: 'http',
        hostname: 'placehold.it'
      }
    ]
  }
}

module.exports = nextConfig
