// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import swup from "@swup/astro";

export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    ssr: {
      noExternal: ["gsap"],
    },
  },
});
