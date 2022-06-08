import LandingPage from "../components/LandingPage";
import { useSession } from "next-auth/react";

const Home = () => {

  const { data, status } = useSession();

  console.log(data, status);

  if (status === 'loading') {
    return <p>Loading</p>
  }

  return (
    <>
      <LandingPage></LandingPage>
    </>
  );
};

export default Home;
