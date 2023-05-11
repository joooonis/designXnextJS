/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Gmarket: ['GmarketSans', 'sans-serif'], // 한글폰트
        Balsamiq: ['Balsamiq Sans', 'rsive'], // 영문 폰트
        NanumMyeongjo: ['Nanum Myeongjo', 'serif'], // 영문 폰트
      },
      backgroundImage: {
        mirae: "url('./src/assets/mirae/background.png')",
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
};
