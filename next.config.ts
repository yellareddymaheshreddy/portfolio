import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/Mahesh-Resume.pdf',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
     {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    {
        protocol: 'https',
        hostname: 'biet.mahs.me',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
