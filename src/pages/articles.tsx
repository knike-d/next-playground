import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { ThumbnailCard } from "@/components/atoms/ThumnailCard";
import { maxDisplayArticlesCount } from "@/constants/article";
import { ThumbnailCardInfo } from "@/models/card";
import { getAllArticle } from "@/functions/article";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Articles: NextPage<Props> = ({ displayArticleCards }) => {
  const blankDivCount = 3 - (displayArticleCards.length % 3);

  return (
    <>
      <Head>
        <title>Articles Page</title>
      </Head>
      <main>
        <h1 className="mb-4 ml-4 text-2xl font-medium">記事一覧</h1>
        <div className="m-auto flex max-w-4xl flex-wrap justify-center gap-x-6 gap-y-10">
          {displayArticleCards.map((card) => {
            return <ThumbnailCard card={card} />;
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
  const articles = await getAllArticle();

  const cardInfo = articles.map((el) => {
    const card: ThumbnailCardInfo = {
      id: el.id,
      title: el.title,
      userName: el.userName,
    };
    return card;
  });

  return {
    props: { displayArticleCards: cardInfo.slice(0, maxDisplayArticlesCount) },
  };
};

export default Articles;
