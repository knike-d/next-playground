export type allArticleResponse = {
  contents: Article[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type Article = {
  id: string;
  title: string;
  body: string;
  userName: string;

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
