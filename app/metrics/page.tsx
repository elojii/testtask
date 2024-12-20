import { ChartMetrics } from "./_components/chart";
import { DataTable } from "./_components/data-table";
import { getMetrics } from "./_utils/getMetrics";

export default async function DemoPage() {
  const { data, error } = await getMetrics();

  if (error) {
    return "Error!";
  }

  if(data.length === 0) {
    return "There are no metrics available!"
  }

  return (
    <div className="container mx-auto py-10 space-y-8">
      <DataTable data={data} />
      <ChartMetrics data={data} />
    </div>
  );
}
