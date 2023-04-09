# next.js template

在 `next.js` 脚手架基础上增加了

1. tailwindCSS
2. prisma

以及增加了读写数据库的示例。

## 运行

首先安装依赖

```bash
pnpm i
```

然后初始化 `prisma client`，执行下面命令

```bash
pnpm prisma db push
```

会将 `schema.prisma` 表结构同步到 `app.db`，并且生成 `node_modules/.prisma` 代码。

然后就可以运行项目了

```bash
yarn dev
```
