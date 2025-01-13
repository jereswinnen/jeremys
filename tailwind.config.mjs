/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brandOrange: "#FF5701",
      },
      fontFamily: {
        sans: [
          "GeistSans",
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
        mono: [
          "GeistMono",
          "ui-monospace",
          "Menlo",
          "Monaco",
          "Cascadia Mono",
          "Segoe UI Mono",
          "Roboto Mono",
          "Oxygen Mono",
          "Ubuntu Mono",
          "Source Code Pro",
          "Fira Mono",
          "Droid Sans Mono",
          "Consolas",
          "Courier New",
          "monospace",
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
  plugins: [],
};
