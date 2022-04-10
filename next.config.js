/** @type {import('next').NextConfig} */

const nextConfig = {
  poweredByHeader: false,

  reactStrictMode: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      type: 'json',
      use: {
        loader: 'yaml-loader',
        options: {
          asJSON: true,
        }
      }
    });

    return config;
  },
}

module.exports = nextConfig;
