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
        PoorStory: ['Poor Story', 'cursive'], // 한글 폰트
      },
      animation: {
        bounce1: 'bounce 2s ease-in-out infinite ',
        bounce2: 'bounce 2s 0.5s ease-in-out infinite ',
        bounce3: 'bounce 2s 1s ease-in-out infinite ',
      },
      keyframes: {
        bounce: {
          '0%, 20%': { trasnsform: `translate(0,0)` },
          '50%': {
            transform: 'translateY(-150%)',
          },
          '85%, 100%': {
            trasnsform: `translate(0,0)`,
          },
        },
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
};
