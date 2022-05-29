import Link from "next/link";

const Header = () => {
  return (
    <div>
      <nav className="flex bg-emerald-500 p-3 pl-5 font-bold text-white">
        <Link href="/">
          <a className="mr-5">Home</a>
        </Link>
        <Link href="/articles">
          <a>Articles</a>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
