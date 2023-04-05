/** @type {import('next').NextConfig} */


const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig


// module.exports = () => {
//   const rewrites = () => {
//     return [
//       {
//         source: "/aiub",
//         destination: "https://www.aiub.edu/",

//       },
//     ];
//   };
//   return {
//     rewrites,
//   };
// };
