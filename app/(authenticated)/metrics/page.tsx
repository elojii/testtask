import Link from "next/link";

import { config } from "@/appconfig";
import { Button } from "@/components/ui/button";
import { getMetrics } from "./_utils/getMetrics";
import { ChartMetrics } from "./_components/chart";
import { ShadcnPagination } from "@/app/_components";
import { DataTable } from "./_components/data-table";

export default async function DemoPage({
  searchParams: { page },
}: {
  searchParams: { page?: string };
}) {
  const { data, error } = await getMetrics(page ?? "1");

  if (error) {
    return "Error!";
  }

  if (data.allMetrics.length === 0) {
    return "There are no metrics available!";
  }

  return (
    <div className="container mx-auto py-10 space-y-8">
      <ShadcnPagination totalPages={data.totalPages} page={Number(page)} />

      <Button variant={"outline"} asChild>
        <Link href={`${config.frontendUrl}/add-metric`}>Add metric</Link>
      </Button>

      <DataTable data={data} />
      <ChartMetrics data={data} />
    </div>
  );
}
