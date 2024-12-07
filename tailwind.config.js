/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Gunakan pattern untuk memilih file dengan ekstensi yang relevan
  ],
  theme: {
    extend: {},
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

