const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.seadn.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "ipfs.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "nfts.renga.racing",
        port: "",
      },
    ],
  },
};

module.exports = withMDX(nextConfig);
