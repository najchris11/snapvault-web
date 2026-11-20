/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'snapvault-web-three.vercel.app' }],
        destination: 'https://snapvault.naj-dev.com/:path*',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'i.ytimg.com' }],
  },
};

export default nextConfig;
