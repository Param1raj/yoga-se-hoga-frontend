/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: '.next',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.freepik.com',
                port: '',
                pathname: '/free-vector/**',
            },
        ],
    },
}

module.exports = nextConfig
