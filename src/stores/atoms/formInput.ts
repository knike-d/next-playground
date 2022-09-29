import { atom } from "recoil";
import { FormInput } from "@/models/formInput";

export const formInputState = atom<FormInput>({
  key: "formInput",
  default: {
    type: "",
    name: "",
    option: "",
  },
});
