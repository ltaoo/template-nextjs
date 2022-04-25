import { defineConfig } from "windicss/helpers";
import plugin from "windicss/plugin";

export default defineConfig({
  extract: {
    include: ["**/*.{jsx,css,tsx}"],
    exclude: ["node_modules", ".git", ".next/**/*"],
  },
  //   attributify: true,
  shortcuts: {},
  plugins: [
    require("windicss/plugin/line-clamp"),
    require("windicss/plugin/forms"),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        ".decoration-wavy": {
          "-webkit-text-decoration-style": "wavy",
          "text-decoration-style": "wavy",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
});
