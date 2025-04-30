/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      scrollRestoration: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  };
  
  export default nextConfig;
  