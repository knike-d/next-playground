import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { Article } from "@/models/article";
import { maxDisplayArticlesCount } from "@/constants/article";

type Params = {
  id: string;
};

type Props = {
  article: Article;
};

const Article: NextPage<Props> = ({ article }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Article Page</title>
      </Head>
      <main>
        <h1>記事番号：{router.query.id}</h1>
        <p>{article.title}</p>
        <p>{article.body}</p>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const articles: Article[] = await res.json();
  const displayArticles = articles.slice(0, maxDisplayArticlesCount);

  const paths = displayArticles.map((el) => {
    return {
      params: {
        id: el.id.toString(),
      },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/`);
  const article: Article = await res.json();

  return {
    props: { article },
  };
};

export default Article;
