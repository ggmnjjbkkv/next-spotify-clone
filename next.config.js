/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qqqshxtuykcptpgbpqph.supabase.co',
      },
    ],
  }
}

module.exports = nextConfig
