import { Box, Typography } from "@mui/material";
import Link from "next/link";


function AudioMotores() {

    return (
      <>
        <Box height="90vh" width="100%" bgcolor="#15121E">
          <Typography variant="h3" color="terciary" align="center" pt={6}>
            Conoce los diferentes motores
          </Typography>
          <Typography variant="h5" color="terciary" align="center" pt={6}>
            En el nombre de los motores llevan a un video del coche
          </Typography>
          <Typography align="center" pt={5}>
            <Typography variant="h6" mb={3} color="secondary">
              <Link href="https://www.youtube.com/watch?v=fpgv1iN9HR8" passHref>
                Motor de Fórmula 1 v10
              </Link>
            </Typography>
            <audio controls preload="auto" src="/coche_f1.mp3">
              Your browser does not support the
            </audio>
          </Typography>
          <Typography align="center" pt={5}>
            <Typography variant="h6" mb={3} color="secondary">
              <Link href="https://www.youtube.com/watch?v=pi1J8dNxlYM" passHref>
                Motor de Mercedes GT3 v8
              </Link>
            </Typography>
            <audio controls preload="auto" src="/v8_gt3.mp3">
              Your browser does not support the
            </audio>
          </Typography>
          <Typography align="center" pt={5}>
            <Typography variant="h6" mb={3} color="secondary">
              <Link href="https://www.youtube.com/watch?v=RU_bvMhs39M" passHref>
                Motor de Honda NSX GT3 v6
              </Link>
            </Typography>
            <audio controls preload="auto" src="/v6_gt3.mp3">
              Your browser does not support the
            </audio>
          </Typography>
        </Box>
      </>
    );
}


export default AudioMotores;