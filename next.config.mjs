/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
        port: "",
        pathname: "/?size=50&id=22183&format=png&color=808080",
      },
      {
        protocol: "https",
        hostname: "syllabusx.live",
        port: "",
        pathname:
          "/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fahzzxwlhflcn%2F2MXdyfKftEJipUoZKglBpY%2F9d008931b503f4471a9ff4f345d83f0f%2Fgoku.gif&w=1920&q=75",
      },
    ],
    domains: ['img.icons8.com', 'syllabusx.live', 'cdn.pixabay.com']
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  
};

export default nextConfig;