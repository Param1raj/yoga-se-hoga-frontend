/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: '.next',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*',
                port: '',
                pathname: '/*/**',
            },
        ],
    },
}

module.exports = nextConfig
