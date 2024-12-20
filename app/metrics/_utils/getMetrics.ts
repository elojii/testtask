import { config } from "@/appconfig";
import { ResponseTypeHelper } from "@/types";
import { fetchHelper } from "@/utils/fetchHelper";

export const getMetrics = async () => {
  "use server";

  return await fetchHelper<ResponseTypeHelper>(
    `${config.frontendUrl}/api/metrics`
  );
};
