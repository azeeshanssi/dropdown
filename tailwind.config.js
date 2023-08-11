/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#D9E2EC',
        card_bg: '#adb4bc',
        tcolor: "#334E68",
      },
    },
  },
  plugins: [],
}

