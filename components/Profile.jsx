import { Box, Typography, TextField, ThemeProvider, createTheme, Container} from '@mui/material';
import { useSession } from 'next-auth/react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Image from 'next/image';

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#15121E",
    },
    secondary: {
      main: "#FF276F",
    },
    terciary: {
      main: "#F6F6F6",
    },
    background: {
      default: "#15121E",
      paper: "#15121E",
    },
  },
  typography: {
    fontFamily: "Rajdhani",
    allVariants: {
      color: "#F6F6F6",
    },
  },
});

function Profile() {
  const { data: session, status } = useSession();

  return (
    <ThemeProvider theme={theme}>
      <NavBar></NavBar>
      <Box
        alignItems="center"
        justifyItems="center"
        sx={{ backgroundColor: "#15121E" }}
        height="90vh"
        pt={20}
      >
        {status === "authenticated" ? (
          <Container component="main" maxWidth="l">
            <Box
              component="form"
              sx={{
                marginTop: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h4" color="terciary" mb={2} align="center">
                Nombre:
                <Typography
                  variant="h6"
                  color="secondary"
                  mt={1}
                  align="center"
                >
                  {session.user.name}
                </Typography>
              </Typography>
              <Typography variant="h4" color="terciary" mb={2} align="center">
                Email:
                <Typography variant="h6" color="secondary" mt={1}>
                  {session.user.email}
                </Typography>
              </Typography>
              <Typography variant="h4" align='center' mt={3} mb={4}> 
                Imagen de perfil:
              </Typography>
                <Image
                  src={session.user.image}
                  height={200}
                  width={200}
                  alt=''
                ></Image>
            </Box>
          </Container>
        ) : (
          <Typography>There was an error</Typography>
        )}
      </Box>
      <Footer></Footer>
    </ThemeProvider>
  );
}
export default Profile;
