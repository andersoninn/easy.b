"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

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

export const description = "A simple area chart";

const chartData = [
  { month: "January", desktop: 5 },
  { month: "February", desktop: 1 },
  { month: "March", desktop: 12 },
  { month: "April", desktop: 8 },
  { month: "May", desktop: 16 },
  { month: "June", desktop: 50 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function ChartAreaDefault() {
  return (
    <section className="w-52 -ml-8 ">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart accessibilityLayer data={chartData}>
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-green-500)"
              fillOpacity={0.4}
              stroke="var(--color-green-500)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </section>
  );
}
