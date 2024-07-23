import { createConfigForNuxt } from "@nuxt/eslint-config/flat";

export default createConfigForNuxt({
  // options here
}).override("nuxt/javascript", {
  rules: {
    "no-console": "error",
  },
});
