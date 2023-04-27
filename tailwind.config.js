const themes = require('./src/themes');

module.exports = {
  mode: 'jit',
  content: ['{pages,src}/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  important: true, // important in prod is must be
  theme: ['dark'],
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    function ({ addVariant }) {
      addVariant('child', '& > h1');
      addVariant('child-hover', '& > *:hover');
    },
  ],
  daisyui: {
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      { ...themes },
    ],
  },
};
