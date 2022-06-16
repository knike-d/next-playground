import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  card: Card;
};
type Card = {
  id: number;
  title: string;
};

export const ThumbnailCard = ({ card }: Props) => {
  const router = useRouter();

  return (
    <article className="h-64 w-64 rounded-xl border-2">
      <Link href={`${router.pathname}/${card.id}`}>
        <a className="block h-full">
          <div className="flex items-center justify-center bg-slate-200 py-4">{imageIcon()}</div>
          <div className="p-2">
            <p className="break-words">{card.title}</p>
          </div>
        </a>
      </Link>
    </article>
  );
};

const imageIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-20 w-20"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
};
