module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "rgb(208,224,240)",
      "primary-active": "rgb(65,150,212)",
      secondary: "#ffed4a",
      danger: "#e3342f",
    }),
    extend: {
      spacing: {
        ratio: "56.25%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
