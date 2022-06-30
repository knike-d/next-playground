import { microcmsClient, MicroCMSQueries } from "@/libs/microcms/client";
import { Article } from "@/models/article";
import { ListMicrocmsResponse } from "@/models/microcms";
import { sortDateByDesc, toUtc } from "@/utils/date";

// 記事作成日からpathを生成する関数。pathを記事IDに変更するため一旦コメントアウト
// export const getArticlePath = (createDate: string, articleMap: Map<string, number>): string => {
//   const jstDate = toJst(createDate);
//   const basePath = jstToStr(jstDate, DateFormat.YearMonthDate);
//   const pathIndex = (articleMap.get(basePath) || 0) + 1;
//   articleMap.set(basePath, pathIndex);
//   return `${basePath}-${pathIndex}`;
// };

export const getArticleList = async (queries: MicroCMSQueries = {}) => {
  const res: ListMicrocmsResponse<Article> = await microcmsClient.getList({
    endpoint: "articles",
    queries: {
      limit: 100,
      ...queries,
    },
  });
  const articles = res.contents;
  articles.sort((a, b) => sortDateByDesc(toUtc(a.createdAt), toUtc(b.createdAt)));
  return articles;
};

export const getArticle = async (id: string) => {
  const article: Article = await microcmsClient.get({ endpoint: `articles/${id}` });
  return article;
};
