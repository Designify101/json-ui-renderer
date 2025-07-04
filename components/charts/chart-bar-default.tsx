"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A basic bar chart showing monthly sales"

// Unique sales data for a coffee shop
const chartData = [
  { month: "January", sales: 4200 },
  { month: "February", sales: 3800 },
  { month: "March", sales: 5100 },
  { month: "April", sales: 4750 },
  { month: "May", sales: 6200 },
  { month: "June", sales: 7800 },
]

const chartConfig = {
  sales: {
    label: "Sales ($)",
    color: "#f97316", // orange-500 - works in both themes
  },
} satisfies ChartConfig

interface ChartBarDefaultProps {
  data?: any[]
  config?: any
}

export function ChartBarDefault({ data = chartData, config = chartConfig }: ChartBarDefaultProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Sales Report</CardTitle>
        <CardDescription>Coffee Shop Revenue - January to June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="sales" fill="#f97316" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Growing 23% since last quarter <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Summer season showing strong performance
        </div>
      </CardFooter>
    </Card>
  )
} 