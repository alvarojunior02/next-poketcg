/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        POKE_TCG_API_URL: process.env.POKE_TCG_API_URL,
        POKE_TCG_API_KEY: process.env.POKE_TCG_API_KEY,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.pokemontcg.io',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
