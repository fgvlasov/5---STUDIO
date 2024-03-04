/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH : "",
    reactStrictMode: false,
    swcMinify: true,
	images: {
		loader: "default",
		domains: ["inv.ptzsite.ru"],
		deviceSizes: [600, 750, 800, 1080, 1200, 1920, 2048, 3840],
	  },
};

module.exports = nextConfig;
