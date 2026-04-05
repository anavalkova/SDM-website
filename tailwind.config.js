/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'sdm-navy':  '#0F2744',
        'sdm-blue':  '#1565C0',
        'sdm-accent':'#1E88E5',
        'sdm-light': '#EEF4FF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
