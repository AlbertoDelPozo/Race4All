import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Typography, Container } from "@mui/material";

const Campeonato = () => {
  const router = useRouter();
  const { cid } = router.query;

  const [campeonato, setCampeonato] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/campeonatos/" + cid)
      .then((res) => res.json())
      .then((data) => setCampeonato(data));
  }, []);

  return (
    <Container>
      <Typography variant="h2" color="secondary">
        Título: {campeonato.title}
      </Typography>
      <Typography variant="body1" color="primary">
        Descripción: {campeonato.description}
      </Typography>
    </Container>
  );
};

export default Campeonato;
