import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Article } from "@/models/article";
import { getArticleList, getArticle } from "@/functions/article";
import { utcToStr, toUtc, DateFormat } from "@/utils/date";

type Params = {
  id: string;
};

type Props = {
  article: Article;
};

const Article: NextPage<Props> = ({ article }) => {
  const postedDate = utcToStr(toUtc(article.createdAt), DateFormat.YearMonthDate);
  return (
    <>
      <Head>
        <title>Article Page</title>
      </Head>
      <main className="m-auto max-w-2xl">
        <div className="flex h-60 w-full items-center justify-center bg-slate-300 sm:h-96">
          <h1 className="w-4/5 break-words text-3xl">{article.title}</h1>
        </div>
        <div className="mx-4 mt-8">
          <h1 className="text-3xl">{article.title}</h1>
          <div className="mt-4 flex items-center">
            <div className="h-10 w-10 bg-slate-300"></div>
            <div className="ml-3 text-xs">
              <div>{article.user.userName}</div>
              <div>投稿日時：{postedDate}</div>
            </div>
          </div>
          <p className="mt-6">{article.body}</p>
        </div>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const articles = await getArticleList();

  const paths = articles.map((el) => {
    return {
      params: {
        id: el.id,
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

  // FIXME: ファイルシステムキャッシュでapi呼び出しを1回にできる
  const article = await getArticle(params.id);
  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: { article },
  };
};

export default Article;
