import React from "react";
import { Typography } from "@mui/material";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Zoom from 'react-reveal/Zoom';

const Footer = () => (
  <footer
    data-testid="footer"
    style={{
      zIndex: 1,
      height: "10vh",
      backgroundColor: "#15121E",
      display: "flex",
    }}
  >
    <Typography
      variant="h4"
      color="secundary"
      data-testid="footer-text"
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      padding={4}
      flexGrow={1}
      ml={12}
    >
      <Link href="/">Race4All</Link>
    </Typography>

    <Typography
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexGrow={14}
      variant="h5"
      id="animation"
    >
      <Zoom bottom>
        IT'S TIME TO RACE
      </Zoom>
    </Typography>
    <Typography
      variant="h6"
      color="secundary"
      data-testid="footer-text"
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      padding={4}
    >
      <Link href="https://twitter.com/race4alloficial" passHref>
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
    </Typography>

    <Typography
      variant="h6"
      color="secundary"
      data-testid="footer-text"
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      padding={4}
    >
      <FontAwesomeIcon icon={faInstagram} />
    </Typography>

    <Typography
      variant="h6"
      color="secundary"
      data-testid="footer-text"
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      padding={4}
      mr={12}
    >
      <FontAwesomeIcon icon={faDiscord} />
    </Typography>
  </footer>
);

export default Footer;
