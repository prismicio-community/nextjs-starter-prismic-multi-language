const path = require("path");
const withStyles = require("@webdeb/next-styles");

module.exports = withStyles({
  sass: true,
  modules: true,
  webpack(config) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  // async rewrites() {
  //   return [
  //     { source: "/blog/about-us", destination: "/about-us" },
  //     { source: "/", destination: "/en-us" },
  //   ];
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: "/blog/about-us",
  //       destination: "/about-us",
  //       permanent: true,
  //     },
  //     {
  //       source: "/",
  //       destination: "/en-us",
  //       permanent: true,
  //     },
  //   ];
  // },
});