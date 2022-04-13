const ContentSecurityPolicy = [
  `default-src 'self';`,
  `script-src 'self';`,
  // `child-src example.com;`,
  // `style-src 'self' example.com;`,
  `font-src 'self';`,
].join('\n').replace(/\s{2,}/g, ' ').trim();

// https://nextjs.org/docs/advanced-features/security-headers
const globalHeaders = [
  { // disable Google FLoC
    'key': 'Permissions-Policy',
    'value': 'interest-cohort=()',
  },
  { // enable DNS prefetching
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  { // only use HTTPS
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  { // browser permissions
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy,
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,

  reactStrictMode: true,

  async headers() {
    return [
      {
        'source': '/(.*)',
        'headers': globalHeaders
      },
    ];
  },

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
