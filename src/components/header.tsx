import Link from "next/link";

export const Header = () => {
  return (
    <div className="bg-emerald-500">
      <nav className="m-auto flex max-w-5xl p-3 pl-5 font-bold text-white">
        <Link href="/">
          <a className="mr-5">Home</a>
        </Link>
        <Link href="/articles">
          <a>Articles</a>
        </Link>
        <Link href="/articles/search">
          <a className="mr-5 flex-1 text-right">Search</a>
        </Link>
      </nav>
    </div>
  );
};
