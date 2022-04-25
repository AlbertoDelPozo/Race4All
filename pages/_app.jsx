import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#15121E",
    },
    secondary: {
      main: "#FF276F",
    },
    terciary: {
      main: "#F6F6F6",
    },
    background: {
      default: "#15121E",
      paper: "#15121E",
    },
  },
  typography: {
    fontFamily: "Rajdhani",
    allVariants: {
      color: "#F6F6F6",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
