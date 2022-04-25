import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import Image from "next/image";
import Acc from "../public/image/acc-logo.png";
import Box from '@mui/material/Box';
import Link from "next/link";



function Home() {
    return (
      <Box bgcolor="#15121E" style={{ height: "100vh" }}>
        <Typography
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height={900}
          style={{ color: "#F6F6F6" }}
        >
          <Typography
            variant="h2"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="terciary"
            mb={4}
            mt={10}
          >
            WELCOME TO RACE4ALL
          </Typography>
          <Typography
            variant="h4"
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
            <Link href="/login">
              <Button
                variant="contained"
                color="secondary"
                startIcon={<SportsScoreIcon />}
              >
                Únete
              </Button>
            </Link>
          </Typography>
          <Typography
            variant="h5"
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
          >
            <Image
              src={Acc}
              alt="Logo assetto corsa competizione"
              width={200}
              height={63}
            ></Image>
          </Typography>
          <Typography
            variant="h5"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={2}
          >
            Próximamente en más juegos
          </Typography>
          <Typography
            variant="h3"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={4}
          >
            IT IS TIME TO RACE
          </Typography>
        </Typography>
      </Box>
    );
}

export default Home;