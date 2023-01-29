/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
   
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'background': '#232323',
      'white': '#FFFFFF',
      'primary': '#3C9EA5',
      'navbar': '#2B2B2B',
      'test': '#edf0f1',
      'cinza': '#63686e',
      'focus': '#00000075',
      'transparent': '#27272a',
      'input': '#18181b',
    },
    extend: {},
  },
  plugins: [],
}
