/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === "production"
    ? "https://hhyemi.github.io/hyemi-portfolio"
    : "",
  reactStrictMode: true,
};

module.exports = nextConfig;
