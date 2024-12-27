import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
                pathname: '/v0/b/gymtrack-asoncsts.firebasestorage.app/o/**',
            },
        ],
    },
}

export default nextConfig
