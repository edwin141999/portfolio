/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: '*'
      }
    ]
  },
  env:{
    KEY_API_CONTACT_FORM: process.env.KEY_API_CONTACT_FORM
  }
}

module.exports = nextConfig
