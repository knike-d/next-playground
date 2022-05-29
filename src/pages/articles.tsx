import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

const articleList = [...Array(2).keys()];

const Articles: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Articles Page</title>
      </Head>
      <main>
        <h1>記事一覧</h1>
        <ul>
          {articleList.map((el, index) => {
            const articleNumber = index + 1;
            return (
              <li>
                <Link href={`${router.pathname}/${articleNumber}`}>
                  <a>記事{articleNumber}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default Articles;
