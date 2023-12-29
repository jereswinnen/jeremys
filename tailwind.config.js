module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    //modify defaults
    transitionDuration: {
      'normal': '380ms',
    },
    fontFamily: {
      sans: ["Instrument Sans", "-apple-system", "BlinkMacSystemFont", "avenir next", "avenir", "segoe ui", "helvetica neue", "helvetica", "Cantarell", "Ubuntu", "roboto", "noto", "arial", "sans-serif"],
      serif: ["Instrument Serif", "Iowan Old Style", "Apple Garamond", "Baskerville", "Times New Roman", "Droid Serif", "Times", "Source Serif Pro", "serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
      display: ["Humane", "-apple-system", "BlinkMacSystemFont", "avenir next", "avenir", "segoe ui", "helvetica neue", "helvetica", "Cantarell", "Ubuntu", "roboto", "noto", "arial", "sans-serif"],
    },
    fontSize: {
      '2xs': '0.625rem', //10px
      'xs': '0.75rem', //12px
      'sm': '0.875rem', //14px
      'base': '1rem', //16px
      'lg': '1.125rem', //18px
      'xl': '1.25rem', //20px
      '2xl': '1.5rem', //24px
      '3xl': '1.75rem', //28px
      '4xl': '2.25rem', //36px
      '5xl': '3rem', //48px
      '6xl': '4rem', //64px
      '7xl': '5rem', //80px
    },
    extend: {
      //add extras on top of Tailwind defaults
      boxShadow: {
        'projectImage': '0 1px 2px 0 rgba(30, 38, 29, 0.15), 0 10px 20px -10px rgba(30, 38, 29, 0.1), 0 20px 30px 0 rgba(30, 38, 29, 0.08)',
        'actionPrimary': '0 1px 2px 0 rgba(30, 38, 29, 0.1), 0 2px 8px 0 rgba(30, 38, 29, 0.06)'
      },
      colors: {
        'neutral-900': '#1E261D',
        'neutral-700': '#3A4039',
        'neutral-500': '#848A83',
        'neutral-300': '#ABB2AA',
        'neutral-100': '#D7D9D7',
        'brand-700': '#5E7B5B'
      },
      transitionTimingFunction: {
        'in-out-circ': 'cubic-bezier(0.79, 0.14, 0.15, 0.86);'
      },
    },
  },
  corePlugins: {
    fontWeight: false,
  },
  plugins: [
    require("./src/plugins/fontVariationSettingsPlugin.js")
  ],
};