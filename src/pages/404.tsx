import Link from "next/link";
const Custom404 = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="text-2xl">404 | Page Not Found</h1>
      </div>
      <div className="mt-6 flex items-center justify-center text-xl">
        <Link href="/">
          <a>ホームに戻る</a>
        </Link>
      </div>
    </>
  );
};

export default Custom404;
