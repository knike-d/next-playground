import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Article, ArticleDetail } from "@/models/article";
import { User } from "@/models/user";
import { maxDisplayArticlesCount } from "@/constants/article";

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
        <div className="flex h-96 w-full  items-center justify-center bg-slate-300">
          <h1 className="w-4/5 break-words text-3xl">{articleDetail.title}</h1>
        </div>
        <div className="mt-8">
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

  const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/`);
  const article: Article = await postRes.json();
  const UserRes = await fetch(`https://jsonplaceholder.typicode.com/users/${article.userId}/`);
  const users: User = await UserRes.json();

  const articleDetail: ArticleDetail = {
    userName: users.username,
    id: article.id,
    title: article.title,
    body: article.body,
  };

  return {
    props: { articleDetail },
  };
};

export default Article;
