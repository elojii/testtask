import { NextResponse } from "next/server";
import { metrics } from "../_services/metrics";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const search = new URLSearchParams(url.search);

    const page = Number(search.get("page"));
    const takePerPage = 5;

    const totalMetrics = await metrics.countAll();

    const totalPages = Math.ceil(totalMetrics / takePerPage);

    const allMetrics = await metrics.getAllMetric({ page, takePerPage });

    const metricsInformation = { allMetrics, totalPages };

    return NextResponse.json({ data: metricsInformation }, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error }, { status: 500 });
  }
}
