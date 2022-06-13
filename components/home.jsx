import { Button, Stack, Typography, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons";
import Acc from "../public/image/acc-logo.png";
import Zoom from 'react-reveal/Zoom';


function Home() {
  return (
    <Box bgcolor="#15121E" style={{ height: "100vh", backgroundColor: "rgba(21,18,30, 0.9)" , backgroundImage: "../public/image/img5.png"}}>
      <div className="bg-image"></div>
      <Zoom>
        <Stack
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height={900}
          style={{
            color: "#15121E",
            position: "absolute",
            top: "0%",
            left: "50%",
            transform: "translate(-50%, -100%)",
            zIndex: "2",
          }}
        >
          <Typography
            variant="h2"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="terciary"
            align="center"
            mb={2}
            mt={5}
            className="titulo"
          >
            WELCOME TO RACE4ALL
          </Typography>
          <Typography
            variant="h4"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={2}
            align="center"
            className="compite"
          >
            Compite contra los mejores
          </Typography>
          <Typography
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={2}
          >
            <Link href="/api/auth/signin" passHref>
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
            align="center"
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
            align="center"
          >
            Próximamente en más juegos
          </Typography>
          <Typography
            variant="h3"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={4}
            align="center"
          >
            IT IS TIME TO RACE
          </Typography>
        </Stack>
      </Zoom>
    </Box>
  );
}

export default Home;
