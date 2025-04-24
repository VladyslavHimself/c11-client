import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 's3.dframe.cloud',
            },

            {
                protocol: 'https',
                hostname: 'i.pinimg.com',
            },

            {
                protocol: 'http',
                hostname: 'localhost',
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos',
            },
        ],
    },
};

export default nextConfig;
