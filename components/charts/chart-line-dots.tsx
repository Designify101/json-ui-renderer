"use client"

import dynamic from "next/dynamic"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A line chart with dots"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#f97316",
  },
  mobile: {
    label: "Mobile",
    color: "#3b82f6",
  },
} satisfies ChartConfig

interface ChartLineDotsProps {
  data?: typeof chartData
  config?: ChartConfig
}

// Internal chart component
function ChartLineDotsInternal({ data = chartData, config = chartConfig }: ChartLineDotsProps) {
  // Dynamically detect the category key (first string field) and value key (first numeric field)
  const categoryKey = data.length > 0 ? Object.keys(data[0]).find(key => typeof (data[0] as any)[key] === 'string') || 'month' : 'month'
  const valueKey = data.length > 0 ? Object.keys(data[0]).find(key => typeof (data[0] as any)[key] === 'number') || 'desktop' : 'desktop'
  
  return (
    <ChartContainer config={config}>
      <LineChart
        accessibilityLayer
        data={data}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey={categoryKey}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => typeof value === 'string' && value.length > 3 ? value.slice(0, 3) : value}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Line
          dataKey={valueKey}
          type="natural"
          stroke={config[valueKey]?.color || "#f97316"}
          strokeWidth={2}
          dot={{
            fill: config[valueKey]?.color || "#f97316",
          }}
          activeDot={{
            r: 6,
          }}
        />
      </LineChart>
    </ChartContainer>
  )
}

// Export dynamic component with SSR disabled to prevent hydration issues
export const ChartLineDots = dynamic(() => Promise.resolve(ChartLineDotsInternal), {
  ssr: false,
  loading: () => (
    <div className="h-[250px] w-full flex items-center justify-center text-muted-foreground">
      Loading chart...
    </div>
  ),
}) 