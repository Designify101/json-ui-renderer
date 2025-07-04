"use client"

import dynamic from "next/dynamic"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A multiple line chart comparing desktop vs mobile data"

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

interface ChartLineMultipleProps {
  data?: typeof chartData
  config?: ChartConfig
}

// Internal chart component
function ChartLineMultipleInternal({ data = chartData, config = chartConfig }: ChartLineMultipleProps) {
  // Dynamically detect the category key (first string field) and numeric keys
  const categoryKey = data.length > 0 ? Object.keys(data[0]).find(key => typeof (data[0] as any)[key] === 'string') || 'month' : 'month'
  const numericKeys = data.length > 0 ? Object.keys(data[0]).filter(key => typeof (data[0] as any)[key] === 'number') : ['desktop', 'mobile']
  
  // Define colors for up to 6 data series
  const colors = ['#f97316', '#3b82f6', '#06b6d4', '#8b5cf6', '#ec4899', '#10b981']
  
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
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        {numericKeys.map((key, index) => (
          <Line
            key={key}
            dataKey={key}
            type="monotone"
            stroke={config[key]?.color || colors[index % colors.length]}
            strokeWidth={2}
            dot={false}
          />
        ))}
      </LineChart>
    </ChartContainer>
  )
}

// Export dynamic component with SSR disabled to prevent hydration issues
export const ChartLineMultiple = dynamic(() => Promise.resolve(ChartLineMultipleInternal), {
  ssr: false,
  loading: () => (
    <div className="h-[250px] w-full flex items-center justify-center text-muted-foreground">
      Loading chart...
    </div>
  ),
}) 