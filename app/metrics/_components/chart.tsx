"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Metric } from "@/types";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(210, 100%, 50%)",
  },
} satisfies ChartConfig;

interface ChartMetricsProps {
  data: Metric[];
}

export function ChartMetrics({ data }: ChartMetricsProps) {
  const chartData = data.map((item) => ({
    name: item.name,
    value: parseFloat(item.value),
  }));

  return (
    <Card className="h-[80vh] max-w-screen-xl min-w-[60vw] flex flex-col">
      <CardHeader>
        <CardTitle>Bar Chart</CardTitle>
        <CardDescription>December 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 overflow-auto">
        <ChartContainer config={chartConfig} className="h-full min-w-full">
          <BarChart accessibilityLayer data={chartData} className="h-full">
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="value" fill="var(--color-desktop)" radius={6} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm mt-4">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total spending for December 2024
        </div>
      </CardFooter>
    </Card>
  );
}
