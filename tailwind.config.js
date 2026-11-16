/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#0a0a0a",
          900: "#111111",
          800: "#161616",
          700: "#1f1f1f",
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s ease-out both",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
