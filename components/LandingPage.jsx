import NavBar from "./NavBar";
import Home from "./home";
import Campeonato from "./Campeonato";
import Nosotros from "./Nosotros";
import Footer from "./Footer";
import dynamic from "next/dynamic";
import Head from "next/head";

const Map = dynamic(() => import("../components/Map"), {
  loading: () => "Loading...",
  ssr: false
});

function LandingPage() {
  


  return (
    <>
      <Head>
        <link href="/static/globals.css" rel="stylesheet" />
      </Head>
      <NavBar style={{ position: "sticky" }}></NavBar>
      <Home></Home>
      <Campeonato></Campeonato>
      <Map></Map>
      <Nosotros></Nosotros>
      <Footer></Footer>
    </>
  );
}

export default LandingPage;
