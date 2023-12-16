import { defineConfig } from "astro/config";

// https://astro.build/config
// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default defineConfig({
  output: "hybrid",
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: ["**/*.astro"],
      options: {
        parser: "astro",
      },
    },
  ],
});
