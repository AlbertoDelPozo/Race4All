import { Button, Stack, Typography, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons";
import Acc from "../public/image/acc-logo.png";
import Zoom from 'react-reveal/Zoom';


function Home() {
  return (
    <Box bgcolor="#15121E" style={{ height: "100vh" }}>
      <Zoom>
        <Stack
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height={900}
          style={{ color: "#F6F6F6" }}
        >
          <Typography
            variant="h1"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="terciary"
            mb={2}
            mt={10}
          >
            WELCOME TO RACE4ALL
          </Typography>
          <Typography
            variant="h3"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={2}
          >
            Compite contra los mejores
          </Typography>
          <Typography
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={2}
          >
            <Link href="/api/auth/login" passHref>
              <Button variant="contained" color="secondary" size="large">
                <FontAwesomeIcon icon={faFlagCheckered} />
                &nbsp;&nbsp;Únete
              </Button>
            </Link>
          </Typography>
          <Typography
            variant="h4"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={2}
          >
            Competiciones en
          </Typography>
          <Typography
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={2}
          >
            <Image
              src={Acc}
              alt="Logo assetto corsa competizione"
              width={200}
              height={63}
            ></Image>
          </Typography>
          <Typography
            variant="h4"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={2}
          >
            Próximamente en más juegos
          </Typography>
          <Typography
            variant="h2"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={4}
          >
            IT IS TIME TO RACE
          </Typography>
        </Stack>
      </Zoom>
    </Box>
  );
}

export default Home;
