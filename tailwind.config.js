module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    //modify defaults
    fontFamily: {
      sans: ["Instrument Sans", "Georgia", "sans-serif"],
      serif: ["Instrument Serif", "Arial", "Georgia", "serif"],
    },
    extend: {
      //add extras on top of Tailwind defaults
      colors: {
        'neutral-900': '#1E261D',
        'neutral-700': '#3A4039',
        'neutral-500': '#848A83',
        'neutral-300': '#ABB2AA',
        'brand-700': '#5E7B5B',
      }
    }
  },
  corePlugins: {
    fontWeight: false,
  },
  plugins: [
    require("./src/plugins/fontVariationSettingsPlugin.js")
  ],
};