import Typography from "@mui/material/Typography";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Logo from "../public/image/Logo_white.png";

function Header() {
  return (
    <Box style={{ position: "sticky", top: 0 }}>
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
                <Link underline="hover" href="/">
                  {"Home"}
                </Link>
              </Typography>
              <Typography variant="h6" component="ol" color="terciary">
                <Link href="/campeonatos">Campeonatos</Link>
              </Typography>
              <Typography variant="h6" component="ol" color="terciary">
                <Link href="/nosotros">Nosotros</Link>
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
              <Link href="https://twitter.com/race4alloficial">
                <TwitterIcon></TwitterIcon>
              </Link>

              <InstagramIcon></InstagramIcon>
              <div>Discord</div>
              <Link href="/login">
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
