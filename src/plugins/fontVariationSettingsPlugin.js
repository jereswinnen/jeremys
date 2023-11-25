// Thanks to Brennan Angel https://gist.github.com/brennanangel/2f5b511d87bf6161c3c80dc55372856a
const plugin = require("tailwindcss/plugin");
const fontVariationSettings = plugin(function ({ addUtilities }) {
  addUtilities({
    ".font-thin": {
      fontWeight: 100,
      fontVariationSettings: '"wght" 120',
      "&.italic": {
        fontVariationSettings: '"slnt" 1, "wght" 120',
      },
    },
  });

  addUtilities({
    ".font-extralight": {
      fontWeight: 200,
      fontVariationSettings: '"wght" 220',
      "&.italic": {
        fontVariationSettings: '"slnt" 1, "wght" 220',
      },
    },
  });

  addUtilities({
    ".font-light": {
      fontWeight: 300,
      fontVariationSettings: '"wght" 320',
      "&.italic": {
        fontVariationSettings: '"slnt" 1, "wght" 320',
      },
    },
  });

  addUtilities({
    ".font-normal": {
      fontWeight: 400,
      fontVariationSettings: '"wght" 420',
      "&.italic": {
        fontVariationSettings: '"slnt" 1, "wght" 420',
      },
    },
  });

  addUtilities({
    ".font-medium": {
      fontWeight: 500,
      fontVariationSettings: '"wght" 520',
      "&.italic": {
        fontVariationSettings: '"slnt" 1, "wght" 520',
      },
    },
  });

  addUtilities({
    ".font-semibold": {
      fontWeight: 600,
      fontVariationSettings: '"wght" 620',
      "&.italic": {
        fontVariationSettings: '"slnt" 1, "wght" 620',
      },
    },
  });

  addUtilities({
    ".font-bold": {
      fontWeight: 700,
      fontVariationSettings: '"wght" 720',
      "&.italic": {
        fontVariationSettings: '"slnt" 1, "wght" 720',
      },
    },
  });

  addUtilities({
    ".font-extrabold": {
      fontWeight: 800,
      fontVariationSettings: '"wght" 820',
      "&.italic": {
        fontVariationSettings: '"slnt" 1, "wght" 820',
      },
    },
  });

  addUtilities({
    ".font-black": {
      fontWeight: 900,
      fontVariationSettings: '"wght" 920',
      "&.italic": {
        fontVariationSettings: '"slnt" 1, "wght" 920',
      },
    },
  });

  addUtilities({
    ".italic": {
      fontStyle: "italic",
      fontVariationSettings: '"slnt" 1',
    },
  });
});

module.exports = fontVariationSettings;