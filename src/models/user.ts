import { ActionDate } from "@/models/microcms";

export type User = UserDetail & ActionDate;

export type UserDetail = {
  id: string;
  userName: string;
};
