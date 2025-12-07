/** @type {import('next').NextConfig} */
const nextConfig = {
  // ビルド結果を .next ではなく ./build に出す
  distDir: 'build',
  // standalone 出力（Azure / Node 自前ホスティング向け）
  output: 'standalone',
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
};

module.exports = nextConfig;