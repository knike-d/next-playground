import { ActionDate } from "@/models/microcms";
import { User } from "@/models/user";

export type Article = ArticleDetail & ActionDate;

export type ArticleDetail = {
  id: string;
  title: string;
  body: string;
  user: User;
};
