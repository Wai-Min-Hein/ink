/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#000",
        "color-primary": "#0D0D0D",
        "color-secondary": "#F2F2F2",
        "color-text": "#D2D2D2",
        "color-accent": "#F2F2F2",
      },
      fontFamily: {
        header: ["Roboto Slab", "serif"],
        para: ["Alegreya", "serif"],
      },
      grayscale: {
        50: "50%",
        80: "80%",
      },
    },
    screens: {
      ssm: "535px",
      // => @media (min-width: 535px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1537px",
      // => @media (min-width: 1537px) { ... }
    },
  },
  plugins: [],
};
