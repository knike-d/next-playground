import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Article } from "@/models/article";
import { maxDisplayArticlesCount } from "@/constants/article";
import { ThumbnailCard } from "@/components/atoms/ThumnailCard";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Articles: NextPage<Props> = ({ displayArticles }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Articles Page</title>
      </Head>
      <main>
        <h1>記事一覧</h1>
        <div>
          {displayArticles.map((articleInfo) => {
            return <ThumbnailCard card={articleInfo} />;
          })}
        </div>
      </main>
    </div>
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
