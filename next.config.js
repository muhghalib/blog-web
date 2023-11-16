/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
  },
  redirects: async () => [
    {
      source: '/',
      destination: '/home',
      permanent: true,
      statusCode: 302,
    },
  ],
};

module.exports = nextConfig;
