import { microcmsClient } from "@/libs/microcms/client";
import { ArticleResponse } from "@/models/article";
import { toJst, jstToStr, DateFormat, sortDateByAsc, toUtc } from "@/utils/date";

export const getArticlePath = (createDate: string, articleMap: Map<string, number>): string => {
  const jstDate = toJst(createDate);
  const basePath = jstToStr(jstDate, DateFormat.YearMonthDate);
  const pathIndex = (articleMap.get(basePath) || 0) + 1;
  articleMap.set(basePath, pathIndex);
  return `${basePath}-${pathIndex}`;
};

export const getAllArticle = async () => {
  const res: ArticleResponse = await microcmsClient.get({ endpoint: "articles" });
  const articles = res.contents;
  articles.sort((a, b) => sortDateByAsc(toUtc(a.createdAt), toUtc(b.createdAt)));
  return articles;
};
