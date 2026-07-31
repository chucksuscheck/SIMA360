/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Every route parent that also has child routes (e.g. /pricing +
  // /pricing/assess) would otherwise export as both "pricing.html" and a
  // sibling "pricing/" directory, which collide on Apache and cause the
  // parent page to serve as a raw directory listing instead of its content.
  // trailingSlash makes every route export as "<route>/index.html" instead,
  // avoiding the collision entirely.
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // redirects() is not supported by `output: "export"` (no server to run it).
  // /pricing/ascend -> /pricing/learn is recreated as a static redirect page
  // at app/pricing/ascend/page.tsx instead.
}

export default nextConfig
