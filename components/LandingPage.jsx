import NavBar from "./NavBar";
import Home from "./home";
import Campeonato from "./Campeonato";
import Nosotros from "./Nosotros";
import Footer from "./Footer";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/Map"), {
  loading: () => "Loading...",
  ssr: false
});

function LandingPage() {
  


  return (
    <>
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
