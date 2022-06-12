import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography, Stack, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import GT3Normal from "../public/image/img4.png";
import ResistenciaImg from "../public/image/img2.jpg";
import Bloqueado from "../public/image/img5.png";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CountDown from "./CountDown";

import RubberBand from 'react-reveal/RubberBand';

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/campeonatos");
  const championships = await res.json();

  return {
    props: championships,
  };
}

function Campeonato({ championships }) {
  const [campeonatos, setCampeonatos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/campeonatos")
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
      bgcolor="#15121E"
      height="auto"
      p={4}
      
    >
      <Grid 
      container
      justifyContent="center"
      alignItems="center"
      >
      {campeonatosDestacados.map((campeonato) => (
        <Link
          href={`/campeonatos/${(campeonato.id)}`}
          key={campeonato.id}
          passHref
        >
          <RubberBand>
            <Card
              style={{
                maxWidth: "50vh",
                
                boxShadow: "none",
                border: "1px solid #FF276F",
                borderRadius: "10px",
                marginInline: "10vh",
                marginBlock: "5vh"
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
                  <Image
                    src={imgCampeonatos[campeonato.id - 1]}
                    alt="Coche de carreras rojo"
                    width={300}
                    height={168}
                  />
                </Typography>
                <Typography variant="h6" align="center">
                  {campeonato.description}
                </Typography>
                <Stack
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mt={5}
                >
                  <Link href={`/campeonatos/${(campeonato.id)}`} passHref>
                    <Button variant="contained" color="secondary">
                      Participa
                    </Button>
                  </Link>
                </Stack>

                <Typography variant="h5" align="center" mt={5}>
                  <CountDown></CountDown>
                </Typography>
              </CardContent>
            </Card>
          </RubberBand>
          {/* <CampeonatoComponent id={campeonato.id} title={campeonato.title} description={campeonato.description} imgUrl={imgCampeonatos}></CampeonatoComponent> */}
        </Link>
      ))}
      </Grid>
    </Stack>
  );
}

export default Campeonato;
