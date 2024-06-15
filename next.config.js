/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'backend.shubhamkashyap.in',
        port: '',
        pathname: '/**',
        protocol: 'https',
      },
      {
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
        protocol: 'https',
      },
    ],
  },
});
