import type { NextPage } from "next";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { formInputState } from "@/stores/atoms/formInput";

const Confirm: NextPage = () => {
  const input = useRecoilValue(formInputState);

  return (
    <div className="mx-10">
      <form>
        <div className="mb-6">
          <div className="mb-2 flex">
            <span className="w-40">タイプ:</span>
            <div>{input.type}</div>
          </div>
          <div className="mb-2 flex">
            <span className="w-40">名前:</span>
            <div>{input.name}</div>
          </div>
          <div className="flex">
            <span className="w-40">オプション:</span>
            <div>{input.option}</div>
          </div>
        </div>
        <div className="flex">
          <Link href="/samples">
            <a className="m-auto border-2 px-4 py-2">編集画面に戻る</a>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Confirm;
