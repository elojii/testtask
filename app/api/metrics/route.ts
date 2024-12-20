import { NextResponse } from "next/server";
import { metrics } from "../_services/metrics";

export async function GET() {
  try {
    const allMetrics = await metrics.getAllMetrics();

    return NextResponse.json({ data: allMetrics }, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error }, { status: 500 });
  }
}
