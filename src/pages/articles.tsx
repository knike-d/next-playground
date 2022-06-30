import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { ThumbnailCard } from "@/components/atoms/ThumnailCard";
import { articleListRevalidate, maxDisplayArticles, maxDisplayColumn } from "@/constants/article";
import { ThumbnailCardInfo } from "@/models/card";
import { getArticleList } from "@/functions/article";
import { useRouter } from "next/router";
import { Pagination } from "@/components/molecules/pagination";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Articles: NextPage<Props> = ({ allCard }) => {
  const router = useRouter();
  const currentPage = (typeof router.query.page === "string" && parseInt(router.query.page)) || 1;

  const selectCards = router.query.q
    ? allCard.filter((el) => {
        if (typeof router.query.q === "string") {
          const regex = new RegExp(router.query.q);
          return regex.test(el.title);
        }
      })
    : allCard;
  const displayCards = selectCards.slice((currentPage - 1) * maxDisplayArticles, currentPage * maxDisplayArticles);
  const blankDivCount = maxDisplayColumn - (displayCards.length % maxDisplayColumn);

  return (
    <>
      <Head>
        <title>Articles Page</title>
      </Head>
      <main>
        <h1 className="mb-4 ml-10 text-2xl font-medium">記事一覧</h1>
        <div className="m-auto flex max-w-4xl flex-wrap justify-center gap-x-6 gap-y-10">
          {displayCards.map((card) => (
            <ThumbnailCard card={card} key={card.id} />
          ))}
          {[...Array(blankDivCount)].map((_, index) => (
            <div className="block h-0 w-64" key={"blankArticle" + index} />
          ))}
        </div>
        <Pagination per={maxDisplayArticles} totalCount={selectCards.length}></Pagination>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const articles = await getArticleList();

  const allCard = articles.map((el) => {
    const card: ThumbnailCardInfo = (({ id, title, user }) => ({ id, title, userName: user.userName }))(el);
    return card;
  });

  return {
    props: { allCard },
    revalidate: articleListRevalidate,
  };
};

export default Articles;
