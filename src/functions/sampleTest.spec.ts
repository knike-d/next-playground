import { getTotalArticleLikes } from "@/functions/sampleTest";

describe("sampleTest.tsのテスト", () => {
  it("全記事のいいね数の合計値の計算が正しいこと", () => {
    const articles = [...Array(5)].map((el, i) => ({
      likes: i,
    }));
    const articles2 = [...Array(1)].map((el, i) => ({
      likes: i,
    }));
    const articles3 = [...Array(0)].map((el, i) => ({
      likes: i,
    }));
    expect(getTotalArticleLikes(articles)).toStrictEqual(10);
    expect(getTotalArticleLikes(articles2)).toStrictEqual(0);
    expect(getTotalArticleLikes(articles3)).toStrictEqual(0);
  });
});
