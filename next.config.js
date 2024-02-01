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
    NEXT_PUBLIC_KEY_API_CONTACT_FORM: process.env.NEXT_PUBLIC_KEY_API_CONTACT_FORM
  }
}

module.exports = nextConfig
