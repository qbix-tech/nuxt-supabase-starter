import { defineAppConfig } from "nuxt/app";

export default defineAppConfig({
  // https://ui.nuxtlabs.com/getting-started/theming
  ui: {
    primary: "cyan",
    gray: "slate",
    notifications: {
      position: "top-0 bottom-auto",
    },
    formGroup: {
      strategy: "override",
      label: {
        base: "block text-sm font-medium text-gray-700 dark:text-gray-200",
      },
      description: "text-sm mb-2 text-gray-500 dark:text-gray-400",
      help: "text-sm mt-2 text-gray-500 dark:text-gray-400",
      error: "text-sm mt-2 text-red-500 dark:text-red-400",
    },
    input: {
      default: {
        size: "md",
      },
    },
    selectMenu: {
      default: {
        size: "md",
      },
    },
    button: {
      strategy: "override",
      default: {
        size: "md",
      },
      base: "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-50 disabled:grayscale flex-shrink-0 transition-colors duration-150 ease-in-out",
      color: {
        gray: {
          ghost:
            "text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
        },
      },
    },
    card: {
      strategy: "override",
      divide: "divide-y divide-gray-200/60 dark:divide-gray-700/40",
      ring: "ring-1 ring-gray-100 dark:ring-gray-900",
      shadow: "shadow-lg shadow-gray-100 dark:shadow-gray-950/20",
      rounded: "rounded-xl",
    },
    modal: {
      strategy: "override",
      overlay: {
        background: "bg-gray-200/75 dark:bg-gray-800/75 backdrop-blur-sm",
      },
    },
    slideover: {
      strategy: "override",
      overlay: {
        background: "bg-gray-200/75 dark:bg-gray-800/75 backdrop-blur-sm",
      },
    },
    table: {
      strategy: "override",
      divide: "divide-y divide-gray-200/60 dark:divide-gray-700/40",
      tbody: "divide-y divide-gray-200/60 dark:divide-gray-700/40",
    },
    divider: {
      border: {
        base: "border-gray-200/60 dark:border-gray-700/40",
        size: {
          horizontal: "border",
          vertical: "border",
        },
      },
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
  },
});
