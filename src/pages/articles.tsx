import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { Article } from "@/models/article";
import { ThumbnailCard } from "@/components/atoms/ThumnailCard";
import { maxDisplayArticlesCount } from "@/constants/article";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Articles: NextPage<Props> = ({ displayArticles }) => {
  const blankDivCount = 3 - (displayArticles.length % 3);

  return (
    <>
      <Head>
        <title>Articles Page</title>
      </Head>
      <main>
        <h1 className="mb-4 ml-4 text-2xl font-medium">記事一覧</h1>
        <div className="m-auto flex max-w-4xl flex-wrap justify-center gap-x-6 gap-y-10">
          {displayArticles.map((articleInfo) => {
            return <ThumbnailCard card={articleInfo} />;
          })}
          {[...Array(blankDivCount)].map((el) => {
            return <div className="block h-0 w-64" />;
          })}
        </div>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const displayArticles: Article[] = await res.json();

  return {
    props: { displayArticles: displayArticles.slice(0, maxDisplayArticlesCount) },
  };
};

export default Articles;
