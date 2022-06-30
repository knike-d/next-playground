import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

const Search: NextPage = () => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");

  const searchArticles = (): void => {
    const searchQuery = searchInput && `?q=${searchInput}`;
    router.push(`${router.basePath}/articles${searchQuery}`);
  };

  return (
    <>
      <Head>
        <title>Search Page</title>
      </Head>
      <main>
        <h1 className="mb-4 ml-10 text-2xl font-medium">記事検索</h1>

        <div className="m-auto flex max-w-4xl flex-wrap justify-center">
          <input
            className=" mr-5 w-1/2 rounded-md border"
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className="h-10 w-20 rounded-md border" onClick={searchArticles}>
            検索
          </button>
        </div>
      </main>
    </>
  );
};

export default Search;
