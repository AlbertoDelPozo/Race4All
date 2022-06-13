import Link from "next/link";
import {Typography, Button, Stack, Grid}  from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

function InfoNosotros() {
    return (
      <Grid container direction="column">
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          spacing={8}
          bgcolor="#15121E"
          padding={10}
          height="auto"
        >
          <Grid item xs={8}>
            <Typography
              variant="h3"
              component="h1"
              align="center"
              mt={8}
              mb={8}
            >
              ¿Quiénes somos?
            </Typography>
            <Typography variant="h6" component="p" align="center" mb={8}>
              Esto nace de un proyecto de fin de grado del Grado Superior de
              Desarrollo de aplicaciones web con la intención de dar un buen
              servicio competitivo de carreras online en Assetto Corsa
              Competizione. Con carreras reales en el juego, clima real y la
              mayor deportitividad posible. Nuestro objetivo es que disfrutéis
              de los campeonatos que ofrecemos y tengáis la mejor experiencia
              competitiva posible. &nbsp;&nbsp;:)
            </Typography>
            <Typography align="center" mb={4}>
              <Link href="/regulations" passHref>
                <Button color="secondary" variant="contained">
                  <FontAwesomeIcon icon={faBookOpen} />
                  &nbsp;&nbsp;Normativa
                </Button>
              </Link>
            </Typography>
          </Grid>
        </Stack>
      </Grid>
    );
}

export default InfoNosotros