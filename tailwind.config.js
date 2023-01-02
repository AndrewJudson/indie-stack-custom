/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    /*
    fontFamily: {
      sans: ['BELLEFAIR', 'sans-serif']
    }, */
    extend: {
      colors: {
        "mygray": '#DFDFDF',
        "myblue": '#587CD0',
        "mypurple": '#D991C2',
        "mygreen": '#D8F3ED',
        "myred": '#F3D8DE',
        "myoffwhite": "#F3EDD8",
      },
      animation: {
        "fade-in-down": "fade-in-down 2.5s ease-out",
        "wiggle": 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
          wiggle: {
            '0%, 100%': { transform: 'rotate(-3deg)' },
            '50%': { transform: 'rotate(3deg)' },
          },
      },
    },
  },
  //plugins: [require("tailwind-scrollbar")],
};
