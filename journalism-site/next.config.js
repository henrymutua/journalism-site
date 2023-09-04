/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
// next.config.js
module.exports = {
    async rewrites() {
      return [
        {
          source: '/news/:id', // Define the dynamic route
          destination: '/NewsDetail', // Map to the regular page component without square brackets
        },
      ];
    },
  };
  