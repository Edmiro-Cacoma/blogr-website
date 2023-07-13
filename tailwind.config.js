/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        //Primary Colors
        "light-red-CTA": "hsl(356, 100%, 66%)", //(CTA text)
        "very-light-red": "hsl(355, 100%, 74%)", //(CTA hover background)
        "Very-dark-blue": "hsl(208, 49%, 24%)", //(headings)

        // neutral
        white: "hsl(0, 0%, 100%)", //(text)
        "grayish-blue": "hsl(240, 2%, 79%)" /*(footer text)*/,
        "very-dark-grayish-blue": "hsl(207, 13%, 34%)", //(body copy)
        "very-dark-black-blue": "hsl(240, 10%, 16%)", // (footer background),

        //Gradient Background gradient - Intro/CTA mobile nav:
        "very-lightred": "hsl(13, 100%, 72%)",
        "light-red": "hsl(353, 100%, 62%)",

        //Background gradient - body:
        "Very-dark-grayblue": "hsl(237, 17%, 21%)",
        "very-dark-desaturated-blue": "hsl(237, 23%, 32%)",
      },

      fontFamily: {
        heading: ['"Overpass"', "sans-serif"],
        body: ['"Ubuntu"', "sans-serif"],
      },

      backgroundPosition: {
        "right-top-4": "right -80rem top -83rem",
        "right-top-3": "right -33rem top -15rem",
      },
    },
  },
  plugins: [],
};
