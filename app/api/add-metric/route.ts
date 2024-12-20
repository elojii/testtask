import { NextResponse } from "next/server";
import { metrics } from "../_services/metrics";
import { z } from "zod";

const metricSchema = z.object({
  value: z.number().min(0, { message: "Value must be a positive number" }),
  name: z.string().min(1, { message: "Name is required" }),
  category: z.string().min(1, { message: "Category is required" }),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsedBody = metricSchema.parse(body);

    const { value, name, category } = parsedBody;

    await metrics.addMetrics({ category, name, value });
    
    return NextResponse.json(
      { data: "Successfully added a metric!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error }, { status: 500 });
  }
}
