"use client"

import dynamic from "next/dynamic"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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

// Internal chart component
function ChartBarDefaultInternal({ data = chartData, config = chartConfig }: ChartBarDefaultProps) {
  // Dynamically detect the category key (first string field) and value key (first numeric field)
  const categoryKey = data.length > 0 ? Object.keys(data[0]).find(key => typeof data[0][key] === 'string') || 'month' : 'month'
  const valueKey = data.length > 0 ? Object.keys(data[0]).find(key => typeof data[0][key] === 'number') || 'sales' : 'sales'
  
  return (
    <ChartContainer config={config}>
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey={categoryKey}
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => typeof value === 'string' && value.length > 3 ? value.slice(0, 3) : value}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Bar dataKey={valueKey} fill={config[valueKey]?.color || "#f97316"} radius={8} />
      </BarChart>
    </ChartContainer>
  )
}

// Export dynamic component with SSR disabled to prevent hydration issues
export const ChartBarDefault = dynamic(() => Promise.resolve(ChartBarDefaultInternal), {
  ssr: false,
  loading: () => (
    <div className="h-[250px] w-full flex items-center justify-center text-muted-foreground">
      Loading chart...
    </div>
  ),
}) 