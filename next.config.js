/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracing: false,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.imagin.studio"],
  },
};

module.exports = nextConfig;
