/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  output: 'standalone',
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
};

module.exports = nextConfig
