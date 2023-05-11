/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Balsamiq: ['Balsamiq Sans', 'rsive'], // 영문 폰트
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
};
