import prisma from "@/db";

const getAllMetric = async ({
  page,
  takePerPage,
}: {
  page: number;
  takePerPage: number;
}) => {
  try {
    return await prisma.metric.findMany({
      skip: (page - 1) * takePerPage,
      take: takePerPage,
    });
  } catch (error) {
    console.error(error);
  }
};

const addMetrics = async ({
  category,
  name,
  value,
}: {
  category: string;
  name: string;
  value: number;
}) => {
  try {
    return await prisma.metric.create({
      data: {
        date: new Date(),
        category,
        name,
        value,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

const countAll = async () => {
  return await prisma.metric.count();
};

export const metrics = {
  getAllMetric,
  addMetrics,
  countAll,
};
