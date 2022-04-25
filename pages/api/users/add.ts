// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { nanoid } from "nanoid";

import client from "@/backend/client";

type Data = {
  code: number;
  msg: string;
  data: {
    name: string;
  };
};

export default async function provideUserAddingService(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name } = req.body as {
    name: string;
  };
  const created = await client.user.create({
    data: {
      id: nanoid(),
      name,
    },
  });
  res.status(200).json({
    code: 0,
    msg: "",
    data: created,
  });
}
