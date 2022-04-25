import { Typography, Container } from "@mui/material";

function regulations() {
  return (
    <Container>
      <Typography variant="h2" color="primary">
        Normativa
      </Typography>
      <Typography variant="h4" color="textPrimary" mb={4}>
        Distintos tipos de normas para participar en los campeonatos
      </Typography>
      <Typography variant="h6" color="textPrimary" mb={2}>
        Objetivo
      </Typography>
      <Typography variant="body1" color="textPrimary" mb={4}>
        Nuestro principal objetivo es la diversión en pista, queremos que tanto
        pilotos como aficionados que vean las carreras, disfruten. Para eso
        queremos el compromiso de los pilotos que tratarán de ser lo más limpios
        posibles para poder ver luchas en pista sin incidentes.
      </Typography>
      <Typography variant="h6" color="textPrimary" mb={2}>
        Respeto en pista
      </Typography>
      <Typography variant="body1" color="textPrimary" mb={4}>
        Dejar siempre espacio en el caso de que dos pilotos van en paralelo, si
        no se deja espacio podría llevar sanción. En ningún caso se permitirá el
        choque intencionado contra otro piloto, en caso de que esto suceda, se
        consideraría la expulsión del piloto. Habrá posibilidad de denunciar
        incidentes de carrera y se llevará a cabo una investigación por la cual
        puede ser a favor o en contra: En el caso de que la investigación sea a
        favor del denunciante se considerará la retirada de puntos del carné de
        piloto, habrá diferentes niveles de sanción, además del mencionado
        anteriormente que en caso de que un accidente sea intencionado puede
        conllevar la expulsión de todas las competiciones de la plataforma. Si
        la investigación del accidente sale en contra del denunciante, se
        aplicarían los mismo criterios mencionados anteriormente.
      </Typography>
      <Typography variant="h6" color="textPrimary" mb={2}>
        Carné de piloto
      </Typography>
      <Typography variant="body1" color="textPrimary" mb={4}>
        Este será un carné al igual que el de conducir en el cual habrá un
        número inicial de puntos y que en caso de accidente puede conllevar
        retirada de puntos, en caso de buena conducta se podrá recuperar puntos
        a lo largo de los campeonatos y debido a la fidelidad de los mismos.
        Como ya se ha mencionado antes, en caso de que haya un accidente
        intencionado se puede llegar a perder la totalidad de los puntos. Se
        iniciará con 8 puntos, por cada campeonato realizado se sumarán 2 puntos
        hasta el total de 15 puntos, en el caso de que se llegue al máximo de
        puntuación de carné, se tendrá en cuenta a la hora de selección de
        eventos especiales o benéficos.
      </Typography>
    </Container>
  );
}

export default regulations;
