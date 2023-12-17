/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        scroll: "10s scroll-left infinite linear",
      },
      keyframes: {
        "scroll-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        hero: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
