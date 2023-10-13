/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    experimental: {
        serverActions: true,
        serverComponentsExternalPackages: ['mongoose']
    },
    images : {
        domains: ['m.media-amazon.com']
    }
}
