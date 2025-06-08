/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
  },
};

export default nextConfig;
