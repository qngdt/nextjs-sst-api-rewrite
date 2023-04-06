/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `https://github.com/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
