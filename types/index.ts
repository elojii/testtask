export type Metric = {
  id: string;
  name: string;
  category: string;
  value: string;
  date: Date;
};

export type ResponseTypeHelper<T> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: T;
  error: string;
};
