const API_KEY = process.env.API_KEY;

module.exports = {
    exportTrailingSlash: true,
    exportPathMap: function () {
        return {
            "/": { page: "/index" },
            "/my": { page: "/my" },
            "/need": { page: "/need" },
            "/oAuth": { page: "/oAuth" },
            "/share": { page: "/share" },
            // "/": { page: "/" }
            // "/": { page: "/" }
            // "/": { page: "/" }
        };
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: "url-loader",
                options: {
                    limit: 8192,
                    publicPath: "/_next/static/",
                    outputPath: "static/",
                    name: "[name].[ext]",
                },
            },
        });
        return config;
    },
};
// distDir: "build",
// exportTrailingSlash: true,
// exportPathMap: async function (
//     defaultPathMap,
//     { dev, dir, outDir, distDir : build, buildId }
//   ) {
//     return {
//       '/': { page: '/' },
//       '/about': { page: '/about' },
//       '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
//       '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
//       '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
//     }
//   },
// reactStrictMode: true,
// async redirects() {
//     return [
//         {
//             source: "/old-blog/:path*",
//             destination: "/new-sexy-blog/:path*",
//             permanent: false,
//         },
//     ];
// },
// async rewrites() {
//     return [
//         // {
//         //     source: "/api/:path*",
//         //     destination: "http://localhost:5000/api/:path*",
//         // },
//         // {
//         //     destination: "/new-sexy-blog/:path*",
//         //     source: "/api/oAuth/kakao",
//         // },
//         // {
//         //   source: "/api/oAuth/kakao/logout",
//         //   destination: `http://localhost:5000/oAuth/kakao/logout`,
//         // },
//         // {
//         //   source: "/api/oAuth/user",
//         //   destination: `http://localhost:5000/oAuth/user`,
//         // }
//     ];
// },
