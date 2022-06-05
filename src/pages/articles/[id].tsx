import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { Post } from "@/models/article";

type Params = {
  id: string;
};

type Props = {
  post: Post;
};

const Article: NextPage<Props> = ({ post }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Article Page</title>
      </Head>
      <main>
        <h1>記事番号：{router.query.id}</h1>
        <p>{post.title}</p>
        <p>{post.body}</p>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const posts: Post[] = await res.json();

  const paths = posts.map((el) => {
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
  const post: Post = await res.json();

  return {
    props: { post },
  };
};

export default Article;
