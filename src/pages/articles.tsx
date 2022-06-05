import type { InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { Post } from "@/models/article";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Articles: NextPage<Props> = ({ posts }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Articles Page</title>
      </Head>
      <main>
        <h1>記事一覧</h1>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <Link href={`${router.pathname}/${post.id}`}>
                  <a>title：{post.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const posts: Post[] = await res.json();

  return {
    props: { posts },
  };
};

export default Articles;
