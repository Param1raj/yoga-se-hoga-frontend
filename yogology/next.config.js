/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
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
