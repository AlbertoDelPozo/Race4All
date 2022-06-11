import Link from "next/link";
import {Typography, Button, Stack}  from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

function InfoNosotros() {
    return (
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={8}
        bgcolor="#15121E"
        padding={10}
        height="80vh"
        
      >
        <Typography variant="h2" component="h1">
          ¿Quiénes somos?
        </Typography>
        <Typography variant="h6" component="p" align="center" width={1000}>
          Esto nace de un proyecto de fin de grado del Grado Superior de Desarrollo de aplicaciones web con la intención de dar un buen servicio competitivo de carreras online 
          en Assetto Corsa Competizione. Con carreras reales en el juego, clima real y la mayor deportitividad posible. Nuestro objetivo es que disfrutéis de los campeonatos 
          que ofrecemos y tengáis la mejor experiencia competitiva posible. &nbsp;&nbsp;:)
        </Typography>
        <Link href="/regulations" passHref>
          <Button color="secondary" variant="contained">
          <FontAwesomeIcon icon={faBookOpen} />
          &nbsp;&nbsp;Normativa
          </Button>
        </Link>
      </Stack>
    );
}

export default InfoNosotros