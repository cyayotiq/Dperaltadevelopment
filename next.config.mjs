/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // If deploying to a subdirectory, uncomment and set your repository name:
  // basePath: '/your-repo-name',
  // trailingSlash: true,
}

export default nextConfig
