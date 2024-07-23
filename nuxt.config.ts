// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/supabase",
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/test-utils/module",
  ],

  colorMode: {
    preference: "system",
  },

  ui: {
    // install new icons and add them to the list of available icon sets
    // npm install @iconify-json/{collection_name}
    icons: ["heroicons"],
  },

  postcss: {
    plugins: {
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    serviceKey: process.env.SUPABASE_SERVICE_KEY,
    redirect: true,
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      // routes to include that will enable redirect
      include: undefined,
      // routes to exclude that will disable redirect
      exclude: [],
      // if true, will redirect to the original route after login
      cookieRedirect: true,
    },
  },
});
