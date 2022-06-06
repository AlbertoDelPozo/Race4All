import Link from "next/link";
import Image from "next/image";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

import Logo from "../public/image/Logo_white.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";





function Header() {
  return (
    <Box style={{ position: "sticky", top: 0, zIndex: 1 }}>
      <AppBar elevation={0}>
        <Container maxWidth="xxl">
          <Toolbar>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="flex-start"
              mt={1}
              mb={1}
              ml={10}
              sx={{ flexGrow: 1 }}
              display="flex"
              alignItems="center"
            >
              <Image
                src={Logo}
                alt="Logo de la página"
                width={100}
                height={100}
              />
              <Typography variant="h6" component="ol" color="terciary">
                <Link underline="hover" href="/" passHref>
                  {/* <FontAwesomeIcon icon={faGasPump} /> Introducir para la versión móvil  */}
                  {"Home"}
                </Link>
              </Typography>
              <Typography variant="h6" component="ol" color="terciary">
                <Link href="/campeonatos">Campeonatos</Link>
              </Typography>
              <Typography variant="h6" component="ol" color="terciary">
                <Link href="/regulations">Nosotros</Link>
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              mt={2}
              mb={2}
              mr={10}
              display="flex"
              alignItems="center"
            >
              <Link href="https://twitter.com/race4alloficial" passHref>
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faDiscord} />
              
           
              
                <Link href="/login" passHref>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<PersonIcon />}
                  >
                    Perfil
                  </Button>
                </Link>
              
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Header;
