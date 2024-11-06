import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        dark: {
          // eslint-disable-next-line no-undef
          ...require("daisyui/src/theming/themes")["dark"],
          "background-color": "#182a3d",
          "color":"#e0e8e2",
          "primary":"#00BFFF",
          "base-100":"#e0e8e2",
          "base-200":"#182a3d",
        },
      },
      {
        cupcake: {
          // eslint-disable-next-line no-undef
          ...require("daisyui/src/theming/themes")["cupcake"],
          "background-color": "#ecf1e3",
          "color":"#2f2526",
          "primary":"#3B82F6",
          "base-100":"#2f2526",
          "base-200":"#ecf1e3",
        },
      }
    ],
  },
};
