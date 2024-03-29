const theme = {
  grid: {
    container: "114.80rem",
    gutter: "3.2rem",
  },
  border: {
    radius: "0.4rem",
  },
  colors: {
    background: "#fff",
    text: "#222D39",
    menuBg: "#F5F5F5",
    footerBg: "#3A3A3A",
    primary: "#F231A5",
    secondary: "#28B0FC",
    mainBg: "#06092B",
    lightBg: "#F2F2F2",
    white: "#FFFFFF",
    black: "#030517",
    lightGray: "#EAEAEA",
    gray: "#8F8F8F",
    darkGray: "#2E2F42",
    red: "#FF6347",
  },
  font: {
    family:
      "Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: "1.2rem",
      small: "1.4rem",
      medium: "1.6rem",
      large: "1.8rem",
      xlarge: "2.0rem",
      xxlarge: "2.8rem",
      huge: "5.2rem",
    },
  },
  spacings: {
    xxsmall: "0.8rem",
    xsmall: "1.6rem",
    small: "2.8rem",
    medium: "3.2rem",
    large: "4.0rem",
    xlarge: "4.8rem",
    xxlarge: "6.4rem",
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },

  transition: {
    default: "0.3s ease-in-out",
    fast: "0.1s ease-in-out",
  },
} as const;

export default theme;
