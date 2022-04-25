import Link from "next/link";
import {Typography, Button, Stack}  from "@mui/material";

function InfoNosotros() {
    return (
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={8}
        bgcolor="#15121E"
        padding={10}
        style={{ height: "80vh" }}
      >
        <Typography variant="h3" component="h1">
          ¿Quiénes somos?
        </Typography>
        <Typography variant="body1" component="p" align="center" width={1000}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Link href="/regulations">
          <Button color="secondary" variant="outlined">
            Normativa
          </Button>
        </Link>
      </Stack>
    );
}

export default InfoNosotros