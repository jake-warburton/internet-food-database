// next.config.js

const path = require("path");

const withCSS = require("@zeit/next-css");
const withOffline = require("next-offline");

const nextConfig = {
  webpack: config => {
    // eslint-disable-next-line no-param-reassign
    config.plugins = config.plugins || [];

    // eslint-disable-next-line no-param-reassign
    config.plugins = [...config.plugins];

    return config;
  },
};

module.exports = withOffline(withCSS(nextConfig));
