// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import client from "@/backend/client";

type Data = {
  code: number;
  msg: string;
  data: {
    list: {
      id: string;
      name: string;
    }[];
  };
};

export default async function provideUsersService(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const dataSource = await client.user.findMany({});
  res.status(200).json({
    code: 0,
    msg: "",
    data: {
      list: dataSource,
    },
  });
}
