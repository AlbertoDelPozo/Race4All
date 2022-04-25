import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import GT3Normal from "../public/image/img4.png";
import ResistenciaImg from "../public/image/img2.jpg";
import Bloqueado from "../public/image/img5.png";
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';

function Campeonato() {
  const [campeonatos, setCampeonatos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/campeonato")
      .then((res) => res.json())
      .then((data) => setCampeonatos(data));
  }, []);

  const campeonatosDestacados = campeonatos.filter(
    (campeonato) => campeonato?.destacado
  );

  const imgCampeonatos = [GT3Normal, Bloqueado, ResistenciaImg];

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="space-around"
      spacing={8}
      bgcolor="#15121E"
      style={{ height: "79vh" }}
    >
      {campeonatosDestacados.map((campeonato) => (
        <Link href={`/campeonatos/${encodeURIComponent(campeonato.id)}`}>
          <Card
            style={{ maxWidth: "40vh", border: "none", boxShadow: "none" }}
            key={campeonato.id}
          >
            <CardContent>
              <Typography variant="h4" align="center" mb={3}>
                {campeonato.title}
              </Typography>
              <Typography
                variant="body1"
                display="flex"
                justifyContent="center"
                alignItems="center"
                mb={3}
              >
                <Image
                  src={imgCampeonatos[campeonato.id - 1]}
                  alt="Coche de carreras rojo"
                  width={300}
                  height={168}
                />
              </Typography>
              <Typography variant="body1" align="center">
                {campeonato.description}
              </Typography>
              <Stack display="flex" alignItems="center" justifyContent="center" mt={10}>
                <Button variant="outlined" color="secondary">
                  Participa
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Link>
      ))}
    </Stack>
  );
}

export default Campeonato;
