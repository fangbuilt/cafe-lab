import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: [
      "@mantine/core",
      "@mantine/hooks",
      "@mantine/form",
      "@mantine/modals",
      "@mantine/notifications",
      "@mantine/dates",
      "@mantine/charts",
      "@mantine/notifications",
      "@mantine/code-highlight",
    ],
  },
};

export default nextConfig;
