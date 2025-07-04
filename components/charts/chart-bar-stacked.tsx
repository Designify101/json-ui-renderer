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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A stacked bar chart showing team productivity"

// Unique data for team productivity across different project types
const chartData = [
  { team: "Frontend", features: 28, bugs: 12, documentation: 8 },
  { team: "Backend", features: 34, bugs: 8, documentation: 15 },
  { team: "Mobile", features: 22, bugs: 18, documentation: 6 },
  { team: "DevOps", features: 12, bugs: 5, documentation: 25 },
  { team: "QA", features: 8, bugs: 32, documentation: 18 },
  { team: "Design", features: 15, bugs: 3, documentation: 12 },
]

const chartConfig = {
  features: {
    label: "Features",
    color: "#f97316", // orange-500 - works in both themes
  },
  bugs: {
    label: "Bug Fixes",
    color: "#3b82f6", // blue-500 - works in both themes
  },
  documentation: {
    label: "Documentation",
    color: "#06b6d4", // cyan-500 - works in both themes
  },
} satisfies ChartConfig

interface ChartBarStackedProps {
  data?: any[]
  config?: any
}

export function ChartBarStacked({ data = chartData, config = chartConfig }: ChartBarStackedProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Productivity Dashboard</CardTitle>
        <CardDescription>Sprint Deliverables by Team - Q4 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="team"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend />
            <Bar
              dataKey="features"
              stackId="a"
              fill="#f97316"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="bugs"
              stackId="a"
              fill="#3b82f6"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="documentation"
              stackId="a"
              fill="#06b6d4"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Backend team leading feature delivery <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          QA team focusing on bug resolution and quality improvements
        </div>
      </CardFooter>
    </Card>
  )
} 