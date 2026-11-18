import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
};

export default nextConfig;


