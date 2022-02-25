const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcssNested = require("postcss-nested");

module.exports = {
  plugins: [autoprefixer, cssnano({ preset: "default" }), postcssNested],
};
