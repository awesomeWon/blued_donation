const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*", 
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/api/oAuth/kakao",
        destination: `http://localhost:5000/oAuth/kakao`,
      },
      {
        source: "/api/oAuth/kakao/logout",
        destination: `http://localhost:5000/oAuth/kakao/logout`,
      },
      {
        source: "/api/oAuth/user",
        destination: `http://localhost:5000/oAuth/user`,
      }
    ];
  },
};