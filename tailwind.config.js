/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'signup':'url(/signup1.jpg)',
        'login':'url(/login1.jpg)',
        'welcome':'url(/welcome.jpg)',
        'home':'url(/hp.jpg)',
        'choose':'url(/ch5.jpg)',
        'gift': 'url(/gift.jpg)'
      }
    },
  },
  plugins: [],
}

