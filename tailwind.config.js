module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#a273ff",
          200: "#935bff",
          300: "#8344ff",
          400: "#742cff",
          500: "#6415FF",
          600: "#5a13e6",
          700: "#5011cc",
          800: "#460fb3",
          900: "#3c0d99",
        },

        secondary: {
          100: "#7c8ba1",
          200: "#667892",
          300: "#506582",
          400: "#3a5173",
          500: "#243E63",
          600: "#203859",
          700: "#1d324f",
          800: "#192b45",
          900: "#16253b",
        },
      },
      fontFamily: {
        display: ["Inter", "system-ui"],
        chinese: ["Noto Sans SC", "sans-serif"],
      },
      opacity: {
        0: "0",
        5: "0.05",
        10: "0.1",
        15: "0.15",
      },
      spacing: {
        px: "1px",
        72: "18rem",
        80: "20rem",
        96: "24rem",
        128: "32rem",
        144: "36rem",
      },
    },
  },
  variants: {},
  plugins: [],
}
