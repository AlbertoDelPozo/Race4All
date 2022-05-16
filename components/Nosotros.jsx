import Link from "next/link";
import {Typography, Button, Stack}  from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

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
        <Typography variant="h2" component="h1">
          ¿Quiénes somos?
        </Typography>
        <Typography variant="h6" component="p" align="center" width={1000}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Link href="/regulations" passHref>
          <Button color="secondary" variant="contained">
          <FontAwesomeIcon icon={faBookOpen} />
          &nbsp;&nbsp;Normativa
          </Button>
        </Link>
      </Stack>
    );
}

export default InfoNosotros