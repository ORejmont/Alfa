/**
 * @type {import('fantasticon').Config}
 */
module.exports = {
  inputDir: "./src/icons",
  outputDir: "./src/assets/fonts",
  fontTypes: ["woff2", "woff"],
  assetTypes: ["css", "json"],
  name: "alfa",
  prefix: "icon",
  normalize: true,
  descent: 0,
  formatOptions: {
    css: {
      fontDisplay: "swap",
    },
  },
  codepoints: require("./src/assets/fonts/alfa.json"),
};
