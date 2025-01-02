/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        "ease-in-circ": "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
      },
    },
  },
  plugins: [],
};
