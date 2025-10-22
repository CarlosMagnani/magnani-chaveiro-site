/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
      // Outras configs...
      qualities: [75, 90], // 👈 Inclua aqui todos os valores que você usa
    },
  };
  
  export default nextConfig;