
/** @type {import('next').NextConfig} */
const nextConfig = {
 
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {
      allowedForwardedHosts: [
        "localhost",
        "bookish-bassoon-5gqq4xvvvw6wcv5g4-3000.app.github.dev",
      ],
      allowedOrigins: [
        "https://bookish-bassoon-5gqq4xvvvw6wcv5g4-3000.app.github.dev",
        "localhost:3000",
      ],
    },
  },
};

export default nextConfig;
