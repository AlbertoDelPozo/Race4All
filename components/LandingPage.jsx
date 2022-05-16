import NavBar from "./NavBar";
import Home from "./home";
import Campeonato from "./Campeonato";
import Nosotros from "./Nosotros";

function LandingPage() {
  return (
    <>
      <NavBar style={{ position: "sticky" }}></NavBar>
      <Home></Home>
      <Campeonato></Campeonato>
      <Nosotros></Nosotros>
    </>
  );
}

export default LandingPage;
