export default defineAppConfig({
  // https://ui.nuxtlabs.com/getting-started/theming
  ui: {
    primary: "cyan",
    gray: "neutral",
    notifications: {
      position: "top-0 bottom-auto",
    },
    popover: {
      strategy: "override",
      trigger: "inline-flex", // fixes popover positioning on target if target has `w-full` or `@container`
    },
    tooltip: {
      base: "[@media(pointer:coarse)]:!block", // resolve tooltip not working on touch devices
    },
    // Not all colors are made available:
    // https://ui.nuxtlabs.com/getting-started/theming#colors
    safelistColors: ["red", "yellow", "green"],
    // component overrides
    card: {
      strategy: "override",
      divide: "divide-y divide-gray-200/60 dark:divide-gray-700/40",
      ring: "ring-1 ring-gray-100 dark:ring-gray-900",
      shadow: "shadow-lg shadow-gray-100 dark:shadow-gray-950/20",
      rounded: "rounded-xl",
    },
  },
});
