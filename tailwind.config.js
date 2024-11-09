/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#EAA121',
        'second-color': '#183867',
        'third-color': '#333333',
        'fourth-color': '#7C8DB0',
        'fifth-color': '#8F8F8F',
        'sixth-color': '#636363',
        'seventh-color': '#C2CFE0',
        'white': '#fff',
        'black': '#000',
        'gradient': 'linear-gradient(to right, $primary-color, $second-color, 100%)'
      },
      screens: {
        "large": {'min': '1024px', 'max': '3000px'},
        'tablet': {'min': '768px', 'max': '1023px'},
        'mobile': {'min': '0px', 'max': '767px'},
      },
    },
  },
  plugins: [],
}

