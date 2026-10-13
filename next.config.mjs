/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/order',
        destination: 'https://beresilient.redeemfm.com/email-order',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
