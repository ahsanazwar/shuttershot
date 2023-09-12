/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // reactStrictMode: true,
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        "fs": false,
        "path": false,
        "os": false,
      }
    }
    return config
  },
    images: {
      loader: "imgix",
      // unoptimized: true,
      // domains: ['via.placeholder.com']
      // path: "https://kmirtrading.com/tester/",
      path: "http://localhost:3000/",
  },
  output: 'export',
}

module.exports = nextConfig