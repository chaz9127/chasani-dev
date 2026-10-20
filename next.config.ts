import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exported as plain static files (out/) for a Render static site.
  output: "export",
  // The default image optimizer needs a server; serve images as-is.
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
