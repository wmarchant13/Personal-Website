const isProd = process.env.NODE_ENV === "production";
const publicBasePath = isProd ? "/personal-website" : "";

const nextConfig = {
  output: "export", // static export required for GH Pages
  basePath: publicBasePath,
  assetPrefix: publicBasePath ? `${publicBasePath}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
