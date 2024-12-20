"use server";

import { config } from "@/appconfig";

export const addMetric = async ({
  category,
  value,
  name,
}: {
  category: string;
  value: number;
  name: string;
}) => {
  const response = await fetch(`${config.frontendUrl}/api/add-metric`, {
    method: "POST",
    body: JSON.stringify({
      category,
      value,
      name,
    }),
  });
  if (!response.ok) {
    const errorDetails = await response.json();
    throw new Error(errorDetails.message || "An error occurred");
  }

  return await response.json();
};
