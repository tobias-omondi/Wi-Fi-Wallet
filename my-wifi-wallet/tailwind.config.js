/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(2,0,36,0.426) 0%, rgba(9,9,121,0.824) 54%, rgba(0,212,255,0.121) 100%)',
        'custom-transparent-gradient': 'linear-gradient(90deg, rgba(3,3,3,0.96) 0%, rgba(76,78,84,1) 60%, rgba(17,21,212,0.678) 100%)',
      },
    },
  },
  plugins: [],
}
