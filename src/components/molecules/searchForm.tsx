import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { formInputState } from "@/stores/atoms/formInput";
import { FormInput } from "@/models/formInput";
import { useRouter } from "next/router";

export const SampleForm = () => {
  const router = useRouter();
  const [input, setInput] = useRecoilState(formInputState);

  const { register, handleSubmit } = useForm<FormInput>({
    defaultValues: input,
  });

  const onSubmit = handleSubmit((data: FormInput) => {
    setInput((currentInput) => ({
      ...currentInput,
      ...{
        type: data.type,
        name: data.name,
        option: data.option,
      },
    }));
    router.push("/confirm");
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-6">
          <label className="mb-2 flex">
            <span className="w-40">タイプ：</span>
            <input className="border-2" {...register("type")} />
          </label>
          <label className="mb-2 flex">
            <span className="w-40">名前：</span>
            <input className="border-2" {...register("name")} />
          </label>
          <label className="flex">
            <span className="w-40">オプション：</span>
            <input className="border-2" {...register("option")} />
          </label>
        </div>
        <div className="flex">
          <button className=" m-auto border-2 px-4 py-2" type="submit">
            確認画面へ
          </button>
        </div>
      </form>
    </div>
  );
};
