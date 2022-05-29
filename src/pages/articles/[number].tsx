import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

const Article: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Article Page</title>
      </Head>
      <main>
        <h1>記事番号：{router.query.number}</h1>
      </main>
    </div>
  );
};

export default Article;
