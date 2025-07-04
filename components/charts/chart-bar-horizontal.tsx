"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

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

export const description = "A horizontal bar chart showing programming language popularity"

// Unique data for programming language usage in a tech company
const chartData = [
  { language: "TypeScript", usage: 89 },
  { language: "Python", usage: 76 },
  { language: "JavaScript", usage: 68 },
  { language: "Go", usage: 52 },
  { language: "Rust", usage: 34 },
  { language: "Java", usage: 28 },
]

const chartConfig = {
  usage: {
    label: "Usage %",
    color: "#06b6d4", // cyan-500 - works in both themes
  },
} satisfies ChartConfig

interface ChartBarHorizontalProps {
  data?: any[]
  config?: any
}

export function ChartBarHorizontal({ data = chartData, config = chartConfig }: ChartBarHorizontalProps) {
  // Dynamically detect the category key (first string field) and value key (first numeric field)
  const categoryKey = data.length > 0 ? Object.keys(data[0]).find(key => typeof data[0][key] === 'string') || 'language' : 'language'
  const valueKey = data.length > 0 ? Object.keys(data[0]).find(key => typeof data[0][key] === 'number') || 'usage' : 'usage'
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Programming Language Usage</CardTitle>
        <CardDescription>Developer Survey Results - Q4 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config}>
          <BarChart
            accessibilityLayer
            data={data}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <XAxis type="number" dataKey={valueKey} hide />
            <YAxis
              dataKey={categoryKey}
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey={valueKey} fill="#06b6d4" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          TypeScript leading adoption <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Based on internal developer survey of 250 engineers
        </div>
      </CardFooter>
    </Card>
  )
} 