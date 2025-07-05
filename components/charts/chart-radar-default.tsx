"use client"

import dynamic from "next/dynamic"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A basic radar chart showing performance metrics"

// Default chart data for fallback
const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 273 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#f97316", // orange-500 - works in both themes
  },
} satisfies ChartConfig

export interface ChartRadarDefaultProps {
  data?: any[]
  config?: ChartConfig
}

// Internal chart component
function ChartRadarDefaultInternal({ data = chartData, config = chartConfig }: ChartRadarDefaultProps) {
  // Dynamically detect the category key (first string field) and value key (first numeric field)
  const categoryKey = data.length > 0 ? Object.keys(data[0]).find(key => typeof data[0][key] === 'string') || 'month' : 'month'
  const valueKey = data.length > 0 ? Object.keys(data[0]).find(key => typeof data[0][key] === 'number') || 'desktop' : 'desktop'
  
  return (
    <ChartContainer config={config}>
      <RadarChart data={data}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <PolarAngleAxis dataKey={categoryKey} />
        <PolarGrid />
        <Radar
          dataKey={valueKey}
          fill={config[valueKey]?.color || "#f97316"}
          fillOpacity={0.6}
        />
      </RadarChart>
    </ChartContainer>
  )
}

// Export dynamic component with SSR disabled to prevent hydration issues
export const ChartRadarDefault = dynamic(() => Promise.resolve(ChartRadarDefaultInternal), {
  ssr: false,
  loading: () => (
    <div className="h-[250px] w-full flex items-center justify-center text-muted-foreground">
      Loading chart...
    </div>
  ),
}) 