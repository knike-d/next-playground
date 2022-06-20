import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { ArticleResponse, ArticleDetail } from "@/models/article";
import { microcmsClient } from "@/libs/microcms/client";

type Params = {
  id: string;
};

type Props = {
  articleDetail: ArticleDetail;
};

const Article: NextPage<Props> = ({ articleDetail }) => {
  return (
    <>
      <Head>
        <title>Article Page</title>
      </Head>
      <main className="m-auto max-w-2xl">
        <div className="flex h-60 w-full items-center justify-center bg-slate-300 sm:h-96">
          <h1 className="w-4/5 break-words text-3xl">{articleDetail.title}</h1>
        </div>
        <div className="mx-4 mt-8">
          <h1 className="text-3xl">{articleDetail.title}</h1>
          <div className="mt-4 flex items-center">
            <div className="h-10 w-10 bg-slate-300"></div>
            <div className="ml-3 text-xs">
              <div>{articleDetail.userName}</div>
              <div>投稿日時</div>
            </div>
          </div>
          <p className="mt-6">{articleDetail.body}</p>
        </div>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const res: ArticleResponse = await microcmsClient.get({ endpoint: "articles" });
  const articles = res.contents;

  const paths = articles.map((el, index) => {
    return {
      params: {
        id: (index + 1).toString(),
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

  const res: ArticleResponse = await microcmsClient.get({ endpoint: "articles" });
  const articles = res.contents;
  const article = articles.find((el, index) => (index + 1).toString() === params.id);
  if (!article) {
    return {
      notFound: true,
    };
  }

  const articleDetail: ArticleDetail = {
    id: article.id,
    title: article.title,
    body: article.body,
    userName: article.userName,
  };

  return {
    props: { articleDetail },
  };
};

export default Article;
