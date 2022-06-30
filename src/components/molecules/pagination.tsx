import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  per: number;
  totalCount: number;
};

export const Pagination = (pageItemInfo: Props): JSX.Element => {
  const router = useRouter();
  const first = 1;
  const last = Math.ceil(pageItemInfo.totalCount / pageItemInfo.per);
  const paginationRange = [...Array(last - first + 1)].map((_, i) => first + i);

  const queryParams = new URLSearchParams(router.isReady ? location.search : "");
  const mergeQueryParams = (page: string): string => {
    const newQueryParams = new URLSearchParams(queryParams);
    newQueryParams.set("page", page);
    return newQueryParams.toString();
  };

  return (
    <ul className="my-10 flex items-center justify-center gap-4">
      {paginationRange.map((number, index) => (
        <li key={"pagination" + index}>
          <Link href={`${router.pathname}?${mergeQueryParams(number.toString())}`}>
            <a className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200">{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
