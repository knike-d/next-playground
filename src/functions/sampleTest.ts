export const getTotalArticleLikes = (articles: { likes: number }[]): number => {
  return articles.reduce((acc, cur) => acc + cur.likes, 0);
};
