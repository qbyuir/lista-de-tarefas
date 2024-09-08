/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '71vh': '71vh'
      },
      width: {
        '80%': '80%'
      },
      colors: {
        'bgpurple': '#8052ec',
        'bgpurple-light': '#d161ff',
        'cblack': '#111111'
      },
      dropShadow: {
        'txt-shadow': '2px 2px 4px rgba(0, 0, 0, 0.5)'
      },
    },
  },
  plugins: [],
}

