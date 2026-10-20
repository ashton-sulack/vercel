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
      { source: '/', destination: '/v1', permanent: false },
      { source: '/order', destination: '/v1-order', permanent: false },
    ]
  },
}

export default nextConfig
