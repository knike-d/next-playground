import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { ThumbnailCard } from "@/components/atoms/ThumnailCard";
import { maxDisplayArticles, maxDisplayColumn } from "@/constants/article";
import { ThumbnailCardInfo } from "@/models/card";
import { getAllArticle } from "@/functions/article";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Articles: NextPage<Props> = ({ displayCards }) => {
  const blankDivCount = maxDisplayColumn - (displayCards.length % maxDisplayColumn);

  return (
    <>
      <Head>
        <title>Articles Page</title>
      </Head>
      <main>
        <h1 className="mb-4 ml-4 text-2xl font-medium">記事一覧</h1>
        <div className="m-auto flex max-w-4xl flex-wrap justify-center gap-x-6 gap-y-10">
          {displayCards.map((card) => {
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
    const card: ThumbnailCardInfo = (({ id, title, userName }) => ({ id, title, userName }))(el);
    return card;
  });

  return {
    props: { displayCards: cardInfo.slice(0, maxDisplayArticles) },
  };
};

export default Articles;
