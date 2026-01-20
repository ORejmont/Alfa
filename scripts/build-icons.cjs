const fs = require("fs");
const path = require("path");
const fantasticon = require("fantasticon");

(async () => {
  const codepoints = JSON.parse(
    fs.readFileSync(path.resolve("./src/assets/fonts/alfa.json"), "utf8")
  );

  await fantasticon.generateFonts({
    inputDir: "./src/icons",
    outputDir: "./src/assets/fonts",
    fontTypes: ["woff2", "woff"],
    assetTypes: ["css"],
    name: "alfa",
    prefix: "icon",
    normalize: true,
    descent: 0,
    formatOptions: {
      css: {
        fontDisplay: "swap",
      },
    },
    codepoints,
  });

  console.log("✅ Ikony úspěšně vygenerovány bez přepisu pořadí!");
})();
