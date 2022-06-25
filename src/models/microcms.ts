export type ListMicrocmsResponse<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type ActionDate = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
