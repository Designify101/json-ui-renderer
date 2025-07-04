"use client"

import dynamic from "next/dynamic"
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
  footer?: {
    title?: string
    subtitle?: string
  }
}

// Internal chart component
function ChartBarStackedInternal({ data = chartData, config = chartConfig }: Omit<ChartBarStackedProps, 'footer'>) {
  // Dynamically detect the category key (first string field) and numeric keys
  const categoryKey = data.length > 0 ? Object.keys(data[0]).find(key => typeof data[0][key] === 'string') || 'team' : 'team'
  const numericKeys = data.length > 0 ? Object.keys(data[0]).filter(key => typeof data[0][key] === 'number') : ['features', 'bugs', 'documentation']
  
  // Define colors for up to 6 data series
  const colors = ['#f97316', '#3b82f6', '#06b6d4', '#8b5cf6', '#ec4899', '#10b981']
  
  return (
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
            fill={config[key]?.color || colors[index % colors.length]}
            radius={index === 0 ? [0, 0, 4, 4] : index === numericKeys.length - 1 ? [4, 4, 0, 0] : [0, 0, 0, 0]}
          />
        ))}
      </BarChart>
    </ChartContainer>
  )
}

// Export dynamic component with SSR disabled to prevent hydration issues
export const ChartBarStacked = dynamic(() => Promise.resolve(ChartBarStackedInternal), {
  ssr: false,
  loading: () => (
    <div className="h-[250px] w-full flex items-center justify-center text-muted-foreground">
      Loading chart...
    </div>
  ),
}) 