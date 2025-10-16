/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /node_modules\/@fullcalendar\/.*\.css$/,
      use: ["style-loader", "css-loader"],
    });
    return config;
  },
};

export default nextConfig;
