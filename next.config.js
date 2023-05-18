/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [["@effector/swc-plugin", {}]],
  },
};

module.exports = nextConfig;
