module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    //modify defaults
    fontFamily: {
      //sans: ['Georgia, serif'],
    },
    extend: {
      //add extras on top of Tailwind defaults
      colors: {
        'darkGreen': '#0F2C1C',
        'brandGreen': '#57C38F',
        'brandOrange': '#ECB89C',
        'brandYellow': '#EFD686',
      }
    }
  }
};