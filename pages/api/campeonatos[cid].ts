// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { Campeonato } from "./campeonatos";

export default function Campeonato(
  req: NextApiRequest,
  res: NextApiResponse<Campeonato>
) {

    const { cid } = req.query
}
