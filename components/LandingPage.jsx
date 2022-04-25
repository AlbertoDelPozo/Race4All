import Header from "./Header";
import { createTheme, ThemeProvider } from "@mui/material";
import Home from "./home";
import Campeonato from "./Campeonato";
import Nosotros from "./Nosotros";

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

function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <Header style={{ position: "sticky" }}></Header>
      <Home></Home>
      <Campeonato></Campeonato>
      <Nosotros></Nosotros>
    </ThemeProvider>
  );
}

export default LandingPage;
