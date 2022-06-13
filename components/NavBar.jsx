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
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import CoPresentIcon from '@mui/icons-material/CoPresent';

import Logo from "../public/image/Logo_white.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTwitter,
  faInstagram,
  faGasPump,
} from "@fortawesome/free-brands-svg-icons";

import { useSession } from 'next-auth/react';
import { Grid } from "@mui/material";





export default function Header() {
const { data: session, status } = useSession();
return (
  <Box style={{ position: "sticky", top: 0, zIndex: 1 }}>
    <AppBar elevation={0}>
      <Grid maxWidth="100%" minWidth="auto" >
        <Toolbar>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="flex-start"
            mt={1}
            mb={1}
            ml={10}
            mr={4}
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
            <Typography variant="h6" component="ol" color="terciary" className="ocultar">
              <Link underline="hover" href="/" passHref>
                {/* <FontAwesomeIcon icon={faGasPump} /> Introducir para la versión móvil  */}
                {"Home"}
              </Link>
            </Typography>
            <Typography variant="h6" component="ol" color="terciary" className="mostrar">
              <Link underline="hover" href="/" passHref>
              <LocalGasStationIcon />
              </Link>
            </Typography>
            <Typography variant="h6" component="ol" color="terciary" className="ocultar">
              <Link href="/campeonatos">Campeonatos</Link>
            </Typography>
            <Typography variant="h6" component="ol" color="terciary" className="mostrar">
              <Link underline="hover" href="/campeonatos" passHref>
              <SportsScoreIcon />
              </Link>
            </Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={3}
            justifyContent="flex"
            mt={2}
            mb={2}
            mr={5}
            display="flex"
            alignItems="flex-end"
            className="redes"
          >
            <Link href="https://twitter.com/race4alloficial" passHref >
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faDiscord}  />

          </Stack>
            {status === "authenticated" ? (
              <Stack
              direction="row"
              spacing={3}
              justifyContent="space-between"
              mt={2}
              mb={2}
              mr={10}
              display="flex"
              alignItems="center"
            >
                <Link href="/profile" passHref>
                  <Image
                    src={session.user.image}
                    alt=""
                    height={30}
                    width={30}
                    className="ocultar"
                  ></Image>
                </Link>
                <Typography
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mb={100}
                  color="secondary"
                >
                  <Link href="/api/auth/signout" passHref>
                    {<LogoutIcon />}
                  </Link>
                </Typography>
              </Stack>
            ) : (
              <Stack
              direction="row"
              spacing={3}
              justifyContent="space-between"
              mt={2}
              mb={2}
              mr={10}
              display="flex"
              alignItems="center"
            >
              <Typography ml={8} >
              <Link href="/api/auth/signin" passHref>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<PersonIcon />}
                >
                  Perfil
                </Button>
              </Link>
              </Typography>
              </Stack>
            )}
        </Toolbar>
      </Grid>
    </AppBar>
  </Box>
);};
