/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for development
  reactStrictMode: true,

  // Security headers for NDIS compliance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // TLS/HTTPS enforcement
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://api.stripe.com https://*.supabase.co;",
          },
          // Prevent clickjacking
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          // Prevent MIME sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Enable XSS protection
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Referrer Policy
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Permissions Policy
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()',
          },
        ],
      },
    ];
  },

  // Redirects for security
  async redirects() {
    return [
      {
        source: '/http',
        destination: 'https://nourishu.vercel.app',
        permanent: true,
      },
    ];
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_NDIS_COMPLIANT: 'true',
    NEXT_PUBLIC_DATA_RESIDENCY: 'AU-NSW',
    NEXT_PUBLIC_DB_REGION: 'ap-southeast-2',
  },

  // Image optimization
  images: {
    domains: ['supabase.co', 'cdn.example.com'],
    formats: ['image/avif', 'image/webp'],
  },

  // Performance optimizations
  swcMinify: true,
  compress: true,

  // API routes configuration
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },

  // Build output
  output: 'standalone',
};

module.exports = nextConfig;
