import NavBar from "./NavBar";
import Home from "./home";
import Campeonato from "./Campeonato";
import Nosotros from "./Nosotros";
import Footer from "./Footer";


function LandingPage() {
  return (
    <>
      <NavBar style={{ position: "sticky" }}></NavBar>
      <Home></Home>
      <Campeonato></Campeonato>
      <Nosotros></Nosotros>
      <Footer></Footer>
    </>
  );
}

export default LandingPage;
