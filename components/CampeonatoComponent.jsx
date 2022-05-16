import { Typography, Card, CardContent, Stack, Button } from "@mui/material";
import Image from "next/image";
import Flip from 'react-reveal/Flip';

function CampeonatoComponent(
  { id, imgUrl, description, title },
  { href, onClick },
  ref
) {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Card
        style={{ maxWidth: "40vh", border: "none", boxShadow: "none" }}
        variant="outlined"
        key={id}
      >
        <Flip>
          <CardContent>
            <Typography variant="h3" align="center" mb={3}>
              {title}
            </Typography>
            <Typography
              variant="body1"
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb={3}
            >
              <Image
                src={imgUrl[id - 1]}
                alt="Coche de carreras rojo"
                width={300}
                height={168}
              />
            </Typography>
            <Typography variant="h6" align="center">
              {description}
            </Typography>
            <Stack
              display="flex"
              alignItems="center"
              justifyContent="center"
              mt={10}
            >
              <Button variant="contained" color="secondary">
                Participa
              </Button>
            </Stack>
          </CardContent>
        </Flip>
      </Card>
    </a>
  );
}

export default CampeonatoComponent;
