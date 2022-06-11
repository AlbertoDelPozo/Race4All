import { Typography, Box, CardContent, Grid, Stack, Button } from "@mui/material";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar  from "../../components/NavBar";
import { Card } from "@mui/material";
import Footer from "../../components/Footer"
import Image from "next/image"
import CountDown from "../../components/CountDown";

function Campeonatos() {
  const [campeonatos, setCampeonatos] = useState([]);

  useEffect(() => {
    fetch("https://race4-all.vercel.app/api/campeonatos")
      .then((res) => res.json())
      .then((data) => setCampeonatos(data));
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <Box fixed sx={{ backgroundColor: "#15121E" }}>
        <Typography
          variant="h2"
          color="secundary"
          align="center"
          mb={5}
          pt={20}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          Campeonatos
        </Typography>
        <Grid
          container
          height="230vh"
          width="100%"
          spacing={{ xs: 2, md: 10 }}
          columns={{ xs: 1, sm: 2, md: 8}}
          p={8}
        >
          {campeonatos.map((campeonato) => (
            <Link
              href={`campeonatos/${encodeURIComponent(campeonato.id)}`}
              key={campeonato.id}
              passHref
            >
              <Grid item xs={2} sm={4} md={4} key={campeonato.id}>
                <Card
                  style={{
                    boxShadow: "none",
                    border: "1px solid #FF276F",
                    borderRadius: "10px",
                    minHeight: "60vh"
                  }}
                  variant="outlined"
                  key={campeonato.id}
                >
                  <CardContent>
                    <Typography variant="h3" align="center" mb={3}>
                      {campeonato.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      mb={3}
                    >
                      {/* <Image
                    src={imgCampeonatos[campeonato.id - 1]}
                    alt="Coche de carreras rojo"
                    width={300}
                    height={168}
                  /> */}
                    </Typography>
                    <Typography variant="h6" align="center">
                      {campeonato.description}
                    </Typography>
                    <Stack
                      display="flex"
                      alignItems="center"
                      justifyContent="flex-end"
                      mt={5}
                    >
                      <Link href={`/campeonatos/${campeonato.id}`} passHref>
                        <Button variant="contained" color="secondary">
                          Participa
                        </Button>
                      </Link>
                    </Stack>

                    <Typography variant="h5" align="center" mt={5}>
                      {/* <CountDown></CountDown>    */}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Link>
          ))}
        </Grid>
      </Box>
      <Footer></Footer>
    </>
  );
}

export default Campeonatos;
