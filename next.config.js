/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    output :"standalone",
    experimental: {
        appDir: true,
    },
    images: {
        unoptimized: true,
    },
    // reactStrictMode: true,
}

module.exports = nextConfig
