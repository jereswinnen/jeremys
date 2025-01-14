/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brandLightGreen: "#B6ED3F",
        brandDarkGreen: "#04704E",
      },
      fontFamily: {
        sans: [
          "GolosText",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          "Secuela",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      listStyleType: {
        circle: "circle",
      },
      transitionTimingFunction: {
        "ease-in-circ": "cubic-bezier(0.77, 0, 0.175, 1)", //cubic-bezier(0.6, 0.04, 0.98, 0.335)
      },
    },
  },
  // plugins: [require("tailwind-scrollbar-hide")],
};
