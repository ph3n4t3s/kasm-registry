/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'eTIC-Concept Kasm Registry',
    description: 'eTIC-Concept store based on Kasm supported workspaces.',
    icon: 'https://ph3n4t3s.github.io/kasm-registry/1.0/logo.png ',
    listUrl: 'https://ph3n4t3s.github.io/kasm-registry/',
    contactUrl: 'https://ph3n4t3s.github.io/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
