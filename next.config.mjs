///** @type {import('next').NextConfig} */
//const nextConfig = {};

//export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['utfs.io'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'utfs.io',
          port: ''
        }
      ]
    }
  }
  
  export default nextConfig

