import type { NextConfig } from "next";


const isGH = process.env.NEXT_PUBLIC_GH_PAGES === "true";
const repo = "personal-website";
const nextConfig: NextConfig = {
  reactCompiler: true,
  ...(isGH && {
    basePath: `/${repo}`,
    assetPrefix: `/${repo}/`,
    trailingSlash: true,
    output: "export",
  }),
};

export default nextConfig;
