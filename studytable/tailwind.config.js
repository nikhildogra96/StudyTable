// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        autoShowAnimation: {
          "0%": { opacity: "0", transform: "translateY(200px) scale(0.3)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        autoShow: "autoShowAnimation 1s both",
      },
    },
  },
  plugins: [],
};
