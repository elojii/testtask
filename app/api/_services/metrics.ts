import prisma from "@/db";

const getAllMetrics = async () => {
  try {
    return await prisma.metric.findMany();
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

export const metrics = {
  getAllMetrics,
  addMetrics,
};
