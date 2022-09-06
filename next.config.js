/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["placeimg.com"],
    },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
