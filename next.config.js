/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === "production"
    ? "https://hhyemi.github.io/hyemi-portfolio-v2"
    : "",
  reactStrictMode: true,
};

module.exports = nextConfig;
