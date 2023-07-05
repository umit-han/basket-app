/** @type {import('next').NextConfig} */
// const withPWA = require("next-pwa");

const nextConfig = {}

module.exports = nextConfig

// module.exports = withPWA({
//     pwa: {
//         dest: "public",
//         register: true,
//         disable: process.env.NODE_ENV === 'development',
//         skipWaiting: true,
//     },
// });

const withPWA = require('next-pwa')({
    dest: 'public'
    // disable: process.env.NODE_ENV === 'development',
    // register: true,
    // scope: '/app',
    // sw: 'service-worker.js',
    //...
})

module.exports = withPWA({
    // next.js config
})