"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Cell, LabelList } from "recharts"

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

export const description = "A bar chart with negative values showing profit/loss"

// Unique financial data showing quarterly performance
const chartData = [
  { quarter: "Q1 2023", profit: 15600 },
  { quarter: "Q2 2023", profit: -8200 },
  { quarter: "Q3 2023", profit: 22400 },
  { quarter: "Q4 2023", profit: -5100 },
  { quarter: "Q1 2024", profit: 18900 },
  { quarter: "Q2 2024", profit: 31200 },
]

const chartConfig = {
  profit: {
    label: "Profit/Loss ($)",
    color: "#f97316", // orange-500 - works in both themes
  },
} satisfies ChartConfig

interface ChartBarNegativeProps {
  data?: any[]
  config?: any
}

export function ChartBarNegative({ data = chartData, config = chartConfig }: ChartBarNegativeProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quarterly Financial Performance</CardTitle>
        <CardDescription>Profit & Loss Analysis - 2023-2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel hideIndicator />}
            />
            <Bar dataKey="profit">
              <LabelList position="top" dataKey="quarter" fillOpacity={1} />
              {data.map((item) => (
                <Cell
                  key={item.quarter}
                  fill={item.profit > 0 ? "#10b981" : "#ef4444"} // green-500 for profit, red-500 for loss
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Strong recovery in 2024 <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Market restructuring efforts paying off with consistent growth
        </div>
      </CardFooter>
    </Card>
  )
} 