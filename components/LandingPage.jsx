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
      <NavBar style={{ position: "sticky" }}></NavBar>
      <Home></Home>
      <Campeonato></Campeonato>
      <Map></Map>
      <AudioMotores></AudioMotores>
      <Nosotros></Nosotros>
      <Footer></Footer>
    </Grid>
  );
}

export default LandingPage;
