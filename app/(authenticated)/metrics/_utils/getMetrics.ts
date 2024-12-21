import { config } from "@/appconfig";
import { fetchHelper } from "@/utils/fetchHelper";
import { Metric, ResponseTypeHelper } from "@/types";

export const getMetrics = async (page: string) => {
  "use server";

  return await fetchHelper<
    ResponseTypeHelper<{ allMetrics: Metric[]; totalPages: number }>
  >(`${config.frontendUrl}/api/metrics?page=${page}`);
};
