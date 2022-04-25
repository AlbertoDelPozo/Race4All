import { Typography, Container, CardContent, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import Link from "next/link";

function Campeonatos() {
  const [campeonatos, setCampeonatos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/campeonato")
      .then((res) => res.json())
      .then((data) => setCampeonatos(data));
  }, []);

  return (
    <Container>
      <Typography variant="h2" color="primary">
        Página de campeonatos
      </Typography>
      <Grid container spacing={3}>
        {campeonatos.map((campeonato) => (
          <Link href={`/campeonatos/${encodeURIComponent(campeonato.id)}`}>
            <Grid item xs={12} md={6} lg={4} key={campeonato.id}>
              <CardContent>
                <Typography variant="h4" align="center" mb={3} color="primary">
                  {campeonato.title}
                </Typography>
                <Typography variant="body1" align="center" color="secondary">
                  {campeonato.description}
                </Typography>
              </CardContent>
            </Grid>
          </Link>
        ))}
      </Grid>
    </Container>
  );
}

export default Campeonatos;
