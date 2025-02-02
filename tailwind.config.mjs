/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "OverusedGrotesk",
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
        serif: [
          "InstrumentSerif",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
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
};
