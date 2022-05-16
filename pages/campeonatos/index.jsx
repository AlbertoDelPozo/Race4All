import { Typography, Box, CardContent, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar  from "../../components/NavBar";

function Campeonatos() {
  const [campeonatos, setCampeonatos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/campeonatos")
      .then((res) => res.json())
      .then((data) => setCampeonatos(data));
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <Box fixed sx={{ backgroundColor: '#15121E'}}>
        <Typography variant="h2" color="secundary" align="center" mb={10} pt={20}>
          Campeonatos
        </Typography>
        <Grid container height="70.3vh" width="100%" spacing={3}>
          {campeonatos.map((campeonato) => (
            <Link
              href={`/campeonatos/${encodeURIComponent(campeonato.id)}`}
              key={campeonato.id}
              passHref
            >
              <Grid item alignItems="center" justifyContent="center" xs={12} md={6} lg={4} key={campeonato.id}>
                <CardContent>
                  <Typography
                    variant="h4"
                    align="center"
                    mb={3}
                    color="secundary"
                  >
                    {campeonato.title}
                  </Typography>
                  <Typography variant="body1" align="center" color="secundary">
                    {campeonato.description}
                  </Typography>
                </CardContent>
              </Grid>
            </Link>
          ))}
        </Grid>
      </Box>
    </> 
  );
}

export default Campeonatos;
