import * as themes from './src/themes'
module.exports = {
    mode: 'jit',
  content: ["{pages,src}/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  important: true, // important in prod is must be
  theme: ["dark"],
  plugins: [require("daisyui")],
  daisyui: {
      themes: ["cupcake", "dark", "cmyk","luxury",{ ...themes }],
    },
};