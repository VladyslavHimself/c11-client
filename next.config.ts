import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
        ],
    },
};

export default nextConfig;
