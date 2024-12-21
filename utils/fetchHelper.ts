import { HttpError } from "@/utils/errorHandler";

export async function fetchHelper<ResponseType = object>(
  url: string,
  options: Omit<RequestInit, "body"> & { body?: unknown } = {}
) {
  const configuredOptions = {
    ...{ ...options, body: JSON.stringify(options.body) },
  };

  console.log('url', url);

  const response = await fetch(url, configuredOptions);

  if (!response.ok) {
    throw new HttpError(response);
  }

  return (await response.json()) as ResponseType;
}
