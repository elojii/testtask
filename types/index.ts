export type Metric = {
  id: string;
  name: string;
  category: string;
  value: string;
  date: Date;
};

export type ResponseTypeHelper = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  error: string;
};
