import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Button,
  createTheme,
  Stack,
  ThemeProvider,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";

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
      color: "#090229",
    },
  },
});

function login() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [userPasswordError, setUserPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserNameError(false);
    setUserPasswordError(false);

    if (userName === "") {
      setUserNameError(true);
    }
    if (userPassword === "") {
      setUserPasswordError(true);
    }
    if (userName && userPassword) {
      console.log(
        `Titulo de campeonato: ${userName} y descripcion de campeonato ${userPassword}`
      );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container size="sm">
        <Typography variant="h5" color="primary" component="h2" gutterBottom>
          Login
        </Typography>

        <Stack
          component="form"
          sx={{
            width: "35ch",
          }}
          spacing={2}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            onChange={(e) => setUserName(e.target.value)}
            label="User name"
            variant="outlined"
            color="secondary"
            fullWidth
            required
            error={userNameError}
          />
          <TextField
            onChange={(e) => setUserPassword(e.target.value)}
            label="Password"
            variant="outlined"
            color="secondary"
            fullWidth
            required
            error={userPasswordError}
          />
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}
          >
            Submit
          </Button>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default login;
