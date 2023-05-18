/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [
      [
        "@effector/swc-plugin",
        {
          factories: [
            "patronum",
            "@effector/reflect",
            "@farfetched/core",
            "@withease/web-api",
            "@/shared/factories/create_counter",
          ],
        },
      ],
    ],
  },
};

module.exports = nextConfig;
