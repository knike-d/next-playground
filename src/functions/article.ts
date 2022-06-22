import { microcmsClient } from "@/libs/microcms/client";
import { allArticleResponse, Article } from "@/models/article";
import { sortDateByAsc, toUtc } from "@/utils/date";

// 記事作成日からpathを生成する関数。pathを記事IDに変更するため一旦コメントアウト
// export const getArticlePath = (createDate: string, articleMap: Map<string, number>): string => {
//   const jstDate = toJst(createDate);
//   const basePath = jstToStr(jstDate, DateFormat.YearMonthDate);
//   const pathIndex = (articleMap.get(basePath) || 0) + 1;
//   articleMap.set(basePath, pathIndex);
//   return `${basePath}-${pathIndex}`;
// };

export const getAllArticle = async () => {
  const res: allArticleResponse = await microcmsClient.get({ endpoint: "articles" });
  const articles = res.contents;
  articles.sort((a, b) => sortDateByAsc(toUtc(a.createdAt), toUtc(b.createdAt)));
  return articles;
};

export const getArticle = async (id: string) => {
  const article: Article = await microcmsClient.get({ endpoint: `articles/${id}` });
  return article;
};
