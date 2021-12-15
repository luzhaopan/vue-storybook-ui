"use strict";
const baseUrl = "http://115.28.185.117:10033";

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following methods:
// port = 8080 npm run dev OR npm run dev --port = 8080
const port = process.env.port || process.env.npm_config_port || 8080; // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  // publicPath: "/",
  // outputDir: "dist",
  // assetsDir: "static",
  // lintOnSave: process.env.NODE_ENV === "development",
  // productionSourceMap: false,
  devServer: {
    host: "0.0.0.0", // 'localhost', // target host
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    // before: require('./mock/mock-server.js'),
    proxy: {
      "/dev-api": {
        target: baseUrl,
        pathRewrite: { "^/dev-api": "/api" },
        changeOrigin: true,
      },
    },
  },
};
