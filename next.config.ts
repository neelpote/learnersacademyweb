import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Security: Hide X-Powered-By header
  poweredByHeader: false,
  
  // Security: Disable source maps in production
  productionBrowserSourceMaps: false,
  
  // Security Headers Configuration
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // HIGH Priority: Strict Transport Security (HSTS)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          // HIGH Priority: Content Security Policy (CSP)
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.sanity.io https://api.web3forms.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://api.sanity.io https://api.web3forms.com https://*.sanity.io",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self' https://api.web3forms.com",
            ].join('; '),
          },
          // MEDIUM Priority: X-Content-Type-Options
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // MEDIUM Priority: X-Frame-Options
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // LOW Priority: X-XSS-Protection (legacy but still useful)
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // LOW Priority: Referrer Policy
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Additional Security: Permissions Policy
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },
        ],
      },
    ];
  },
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
