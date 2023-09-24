/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    screens: {
      "2xl": { max: "1440px" },
      // => @media (max-width: 1440px) { ... }
      xl: { max: "1280px" },
      // => @media (max-width: 1280px) { ... }
      lg: { max: "1024px" },
      // => @media (max-width: 1024px) { ... }
      md: { max: "768px" },
      // => @media (max-width: 768px) { ... }
      sm: { max: "640px" },
      // => @media (max-width: 640px) { ... }
      xs: { max: "480px" },
      // => @media (max-width: 480px) { ... }
    },
    extend: {
      colors: {
        themeLight: "rgb(80 69 231)",
        light2: "rgb(91 92 97)",
        light3: "rgb(159 166 178)",
        light4: "rgb(209 213 219)",
        statusPreviewTextLight: "rgb(107 114 128)",
        statusPreviewBgLight: "rgb(249 250 251)",
        statusPreviewBorderColorLight: "rgb(213 217 222)",
        statusPreviewDotColor: "rgb(209 213 219)",
        statusProductionTextLight: "rgb(99 102 241)",
        statusProductionBgLight: "rgb(238 242 255)",
        statusProductionBorderColorLight: "rgb(203 213 254)",
        statusProductionDotColor: "rgb(49 196 141)",

        themeDark: "rgb(99 102 241)",
        dark1: "rgb(25 34 49)",
        dark2: "rgb(31 41 55)",
        dark3: "rgb(42 52 65)",
        dark4: "rgb(73 83 97)",
        dark5: "rgb(156 163 175)",
        dark6: "rgb(229 231 235)",
        statusPreviewTextDark: "rgb(156 163 175)",
        statusPreviewBgDark: "rgb(44 54 68)",
        statusPreviewBorderColorDark: "rgb(67 76 89)",
        statusProductionTextDark: "rgb(247 247 254)",
        statusProductionBgDark: "rgb(99 102 241)",
        statusProductionBorderColorDark: "rgb(99 102 241)",
      },
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// npx tailwindcss -i ./src/input.css -o ./public/output.css --watch
