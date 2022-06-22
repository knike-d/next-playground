export type allArticleResponse = {
  contents: Article[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type Article = ArticleDetail & {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type ArticleDetail = {
  id: string;
  title: string;
  body: string;
  userName: string;
};
