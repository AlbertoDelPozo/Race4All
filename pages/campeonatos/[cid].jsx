import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Typography, Container, createTheme, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import NavBar from "../../components/NavBar"
import Image from "next/image";

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

const Campeonato = () => {
  const router = useRouter();
  const { cid } = router.query;

  const [campeonatos, setCampeonatos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/campeonatos/")
      .then((res) => res.json())
      .then((data) => setCampeonatos(data));
  }, []);

  const myCampeonato = campeonatos[cid - 1];

  if (myCampeonato === undefined || myCampeonato === null) {
    return <Container>Loading</Container>;
  }


  return (
    <ThemeProvider theme={theme}>
      <NavBar></NavBar>
      <Box sx={{ bgcolor: "#15121E" }} height="100vh" pt={20}>
        <Container component="main" maxWidth="md">
          <Typography variant="h2" color="secondary" align="center" mb={4}>
            {myCampeonato.title}
          </Typography>
          <Typography variant="h5" color="terciary" align="center">
            {myCampeonato.description}
          </Typography>
          <Typography variant="h5" color="terciary" align="center" mt={6}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/WvWXv5Hlkgw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Campeonato;
