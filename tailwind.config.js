// import { layer } from "@fortawesome/fontawesome-svg-core";

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "node_modules/flowbite-react/lib/esm,./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        brown: "#540000", // Brown
        black: "#000000",
        white: "#ffffff",
      },
      fontFamily: {
        heading: ["Inter", "san-serif"],
        // body:["system-ui"]
      },
      blur: {
        5: "5px", // Custom blur class with a blur amount of 5px
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 60s linear infinite",
        "animation-play-state": "paused",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },

      transitionProperty: {
        transform: "transform",
      },
    },
  },
  variants: {
    extend: {
      blur: ["hover"],
       // You can add more variants if needed
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("flowbite/plugin")
  ],
};
