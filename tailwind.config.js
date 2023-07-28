const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "320px",
        xs: "468px",
        sm: "768px",
        md: "868px",
        lg: "974px",
        xl: "1440px",
      },
    },
    color: {
      primary: "#7839ff",
      darkGray: "#3a3f60",
      lightGray: "#616f93",
      dullWhite: "#fefefe",
    },
  },
  plugins: [],
});

// const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT({
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });
