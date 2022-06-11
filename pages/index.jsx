import LandingPage from "../components/LandingPage";
import { useSession } from "next-auth/react";
import { CircularProgress } from "@mui/material"
import { Box } from "@mui/system";

const Home = () => {

  const { data, status } = useSession();

  console.log(data, status);

  return (
    <>
      {status === "loading" ? (
        <Box position="absolute" top="50%" left="50%">
          <CircularProgress />
        </Box>
      ) : (
        <LandingPage></LandingPage>
      )}
    </>
  );
};

export default Home;
