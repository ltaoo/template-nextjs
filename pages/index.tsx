import { useCallback, useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { addUser, fetchUsers } from "@/services";
import { IUser } from "@/types";

const Home: NextPage = () => {
  const [value, setValue] = useState("");
  const [users, setUsers] = useState<IUser[]>([]);

  const refresh = useCallback(async () => {
    const { list } = await fetchUsers();
    setUsers(list);
  }, []);
  useEffect(() => {
    refresh();
  }, []);

  return (
    <div className="container mx-auto">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-8">
        <div className="text-xl text-gray-800">首页</div>
        <div className="mt-8 space-x-2">
          <input
            className="py-2 px-4 border border-1 border-gray-800 rounded"
            placeholder="请输入用户名"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <button
            className="py-2 px-4 text-white bg-gray-800 rounded"
            onClick={async () => {
              if (!value) {
                alert("请输入用户名");
                return;
              }
              await addUser({
                name: value,
              });
              setValue("");
              refresh();
            }}
          >
            新增用户
          </button>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {users.map((user) => {
          const { id, name } = user;
          return <div key={id}>{name}</div>;
        })}
      </div>
    </div>
  );
};

export default Home;
