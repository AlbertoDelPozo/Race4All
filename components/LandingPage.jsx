import NavBar from "./NavBar";
import Home from "./home";
import Campeonato from "./Campeonato";
import Nosotros from "./Nosotros";
import Footer from "./Footer";
import dynamic from "next/dynamic";
import Head from "next/head";
import AudioMotores from "./audioMotores";
import { Grid } from "@mui/material";

const Map = dynamic(() => import("../components/Map"), {
  loading: () => "Loading...",
  ssr: false
});

function LandingPage() {
  


  return (
    <Grid container direction="column">
      <Grid item>
        <NavBar style={{ position: "sticky" }}></NavBar>
      </Grid>
      <Grid item>
        <Home></Home>
      </Grid>
      <Grid item>
        <Campeonato></Campeonato>
      </Grid>
      <Grid item>
        <Map></Map>
      </Grid>
      <Grid item>
        <AudioMotores></AudioMotores>
      </Grid>
      <Grid item>
        <Nosotros></Nosotros>
      </Grid>
      <Grid item></Grid>
      <Footer></Footer>
    </Grid>
  );
}

export default LandingPage;
