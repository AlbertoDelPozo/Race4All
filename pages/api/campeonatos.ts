// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Campeonato = {
  id: string | number;
  title: string;
  description: string;
  img?: string;
  destacado?: string;
};

export default function CampeonatosApi(
  req: NextApiRequest,
  res: NextApiResponse<Campeonato[]>
) {
  res.status(200).json([
    {
      id: 1,
      title: "European Cup",
      description: "Campeonato con marcas europeas que se disputan en territorio europeo. Disfruta de los circuitos míticos europeos como Silverstone o Spa-Francorchams, con marcas europeas como Audi, BMW o Ferrari.",
      destacado: "si",
    },
    {
      id: 2,
      title: "Campeonato GT3",
      description:"Campeonato GT3 con carreras al sprint de duración máxima de 1 hora y parada en boxes obligatoria, con clasificación a 1 vuelta. Compite como si fuera en la realidad y disfruta como nunca.",
      destacado: "",
    },
    {
      id: 3,
      title: "Resistencia",
      description:"Campeonato de resistencia con diferentes duraciones de carrera, desde el mínimo que serían 3 horas hasta 24 horas. Siente la verdadera experiencia de resistencia. ¿Aguantarás?",
      destacado: "si",
    },
    {
      id: 4,
      title: "GT4 Championship",
      description: "Campeonato con los coches menos potentes pero los más igualados. Disfruta de los mejores paralelos contra tus rivales y respeta a los demás.",
    },
    {
      id: 5,
      title: "V-WEC",
      description: "Campeonato virtual teniendo como referencia el campeonato mundial de resistencia (WEC), es un campeonato multiclase con Hypercar, LMP2 y GT3, mundial conocido por albergar las 24h de Le Mans",
    },
    {
      id: 6,
      title: "Campeonato Internacional",
      description: "Campeonato que incluye todos los circuitos del juego, compite en Europa, en Estados Unidos, pasando por Japón, Sudáfrica y finaliza en Australia. Circuitos de todas las formar, diseños y colores.",
    },
    // {
    //   id: 7,
    //   title: "European Cup",
    //   description: "Campeonato con marcas europeas que se disputan en territorio europeo",
    // },
    // {
    //   id: 8,
    //   title: "V-WEC",
    //   description: "Campeonato virtual teniendo como referencia el campeonato mundial de resistencia (WEC), es un campeonato multiclase con Hypercar, LMP2 y GT3, mundial conocido por albergar las 24h de Le Mans",
    // },
    // {
    //   id: 9,
    //   title: "GT4 Championship",
    //   description: "Campeonato con los coches menos potentes pero los más igualados.",
    // },
    // {
    //   id: 10,
    //   title: "Campeonato GT3",
    //   description:
    //     "Campeonato GT3 con carreras al sprint de duración máxima de 1 hora y parada en boxes obligatoria, con clasificación a 1 vuelta. ",
    //   img: "../public/image/img4.png",
    //   destacado: "si",
    // },
    // {
    //   id: 11,
    //   title: "Bloqueado",
    //   description: "",
    //   img: "../public/image/img2.png",
    //   destacado: "",
    // },
    // {
    //   id: 12,
    //   title: "Resistencia",
    //   description:
    //     "Campeonato de resistencia con diferentes duraciones de carrera, desde el mínimo que serían 3 horas hasta 24 horas. ¿Aguantarás?",
    //   destacado: "si",
    // },
    // {
    //   id: 13,
    //   title: "Campeontato de España",
    //   description: "",
    // },
    // {
    //   id: 14,
    //   title: "Campeonato de Francia",
    //   description: "",
    // },
    // {
    //   id: 15,
    //   title: "Campeonato Internacional",
    //   description: "",
    // },
    // {
    //   id: 16,
    //   title: "European Cup",
    //   description: "Campeonato con marcas europeas que se disputan en territorio europeo",
    // },
    // {
    //   id: 17,
    //   title: "V-WEC",
    //   description: "Campeonato virtual teniendo como referencia el campeonato mundial de resistencia (WEC), es un campeonato multiclase con Hypercar, LMP2 y GT3, mundial conocido por albergar las 24h de Le Mans",
    // },
    // {
    //   id: 18,
    //   title: "GT4 Championship",
    //   description: "Campeonato con los coches menos potentes pero los más igualados.",
    // },
  ]);
}
