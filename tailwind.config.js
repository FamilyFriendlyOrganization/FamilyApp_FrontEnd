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
        'gift': 'url(/gift.jpg)',
        'plane': 'url(/plane4.jpg)',
        'plane1': 'url(/plane1.jpg)',
        'plane2': 'url(/plane2.jpg)',
        'plane3': 'url(/plane3.jpg)',
        'hotel': 'url(/hotel1.jpg)',
        'sky': 'url(/sky.png)',
        'ks': 'url(/ks.png)'
      }
    },
  },
  plugins: [],
}

