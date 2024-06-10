/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ssl.gstatic.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            pathname: '/a/ACg8ocK9GKJnigu8vrGL7bcTWVI8Ip4C5xaAL0O69ncUHNTwoCHy6K7Y=s96-c',
          },
          {
            protocol: 'https',
            hostname: 'cdn-icons-png.flaticon.com',
            port: '',
            pathname:'/512/149/149071.png'
          }
        ],
      },
};

export default nextConfig;
