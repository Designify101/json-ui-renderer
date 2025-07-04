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

export const description = "A multiple bar chart comparing online vs in-store sales"

// Unique data for retail sales comparison across seasons
const chartData = [
  { season: "Spring", online: 15600, inStore: 12400 },
  { season: "Summer", online: 18200, inStore: 15800 },
  { season: "Fall", online: 22100, inStore: 14200 },
  { season: "Winter", online: 28500, inStore: 18900 },
  { season: "Holiday", online: 35200, inStore: 24100 },
  { season: "Post-Holiday", online: 19800, inStore: 11200 },
]

const chartConfig = {
  online: {
    label: "Online Sales",
    color: "#f97316", // orange-500 - works in both themes
  },
  inStore: {
    label: "In-Store Sales", 
    color: "#3b82f6", // blue-500 - works in both themes
  },
} satisfies ChartConfig

interface ChartBarMultipleProps {
  data?: any[]
  config?: any
}

export function ChartBarMultiple({ data = chartData, config = chartConfig }: ChartBarMultipleProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Channel Performance</CardTitle>
        <CardDescription>Online vs In-Store Revenue by Season</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="season"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="online" fill="#f97316" radius={4} />
            <Bar dataKey="inStore" fill="#3b82f6" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Online sales up 45% during holiday season <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Digital transformation driving growth across all seasons
        </div>
      </CardFooter>
    </Card>
  )
} 