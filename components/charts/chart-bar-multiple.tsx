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
  footer?: {
    title?: string
    subtitle?: string
  }
}

// Internal chart component
function ChartBarMultipleInternal({ data = chartData, config = chartConfig }: Omit<ChartBarMultipleProps, 'footer'>) {
  // Dynamically detect the category key (first string field) and numeric keys
  const categoryKey = data.length > 0 ? Object.keys(data[0]).find(key => typeof data[0][key] === 'string') || 'season' : 'season'
  const numericKeys = data.length > 0 ? Object.keys(data[0]).filter(key => typeof data[0][key] === 'number') : ['online', 'inStore']
  
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
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dashed" />}
        />
        {numericKeys.map((key, index) => (
          <Bar 
            key={key}
            dataKey={key} 
            fill={config[key]?.color || colors[index % colors.length]} 
            radius={4} 
          />
        ))}
      </BarChart>
    </ChartContainer>
  )
}

// Export dynamic component with SSR disabled to prevent hydration issues
export const ChartBarMultiple = dynamic(() => Promise.resolve(ChartBarMultipleInternal), {
  ssr: false,
  loading: () => (
    <div className="h-[250px] w-full flex items-center justify-center text-muted-foreground">
      Loading chart...
    </div>
  ),
}) 