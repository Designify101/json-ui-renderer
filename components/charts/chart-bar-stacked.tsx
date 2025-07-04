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
  // Dynamically detect the category key (first string field) and numeric keys
  const categoryKey = data.length > 0 ? Object.keys(data[0]).find(key => typeof data[0][key] === 'string') || 'team' : 'team'
  const numericKeys = data.length > 0 ? Object.keys(data[0]).filter(key => typeof data[0][key] === 'number') : ['features', 'bugs', 'documentation']
  
  // Define colors for up to 6 data series
  const colors = ['#f97316', '#3b82f6', '#06b6d4', '#8b5cf6', '#ec4899', '#10b981']
  
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
              dataKey={categoryKey}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend />
            {numericKeys.map((key, index) => (
              <Bar
                key={key}
                dataKey={key}
                stackId="a"
                fill={colors[index % colors.length]}
                radius={index === 0 ? [0, 0, 4, 4] : index === numericKeys.length - 1 ? [4, 4, 0, 0] : [0, 0, 0, 0]}
              />
            ))}
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