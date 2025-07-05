"use client"

import dynamic from "next/dynamic"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A radar chart with lines only showing performance metrics"

// Default chart data for fallback
const chartData = [
  { month: "January", desktop: 186, mobile: 160 },
  { month: "February", desktop: 185, mobile: 170 },
  { month: "March", desktop: 207, mobile: 180 },
  { month: "April", desktop: 173, mobile: 160 },
  { month: "May", desktop: 160, mobile: 190 },
  { month: "June", desktop: 174, mobile: 204 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#f97316", // orange-500 - works in both themes
  },
  mobile: {
    label: "Mobile",
    color: "#3b82f6", // blue-500 - works in both themes
  },
} satisfies ChartConfig

export interface ChartRadarLinesOnlyProps {
  data?: any[]
  config?: ChartConfig
}

// Internal chart component
function ChartRadarLinesOnlyInternal({ data = chartData, config = chartConfig }: ChartRadarLinesOnlyProps) {
  // Dynamically detect the category key (first string field) and numeric keys
  const categoryKey = data.length > 0 ? Object.keys(data[0]).find(key => typeof data[0][key] === 'string') || 'month' : 'month'
  const numericKeys = data.length > 0 ? Object.keys(data[0]).filter(key => typeof data[0][key] === 'number') : ['desktop', 'mobile']
  
  // Define colors for up to 6 data series
  const colors = ['#f97316', '#3b82f6', '#06b6d4', '#8b5cf6', '#ec4899', '#10b981']
  
  return (
    <ChartContainer config={config}>
      <RadarChart data={data}>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <PolarAngleAxis dataKey={categoryKey} />
        <PolarGrid radialLines={false} />
        {numericKeys.map((key, index) => (
          <Radar
            key={key}
            dataKey={key}
            fill="none"
            fillOpacity={0}
            stroke={config[key]?.color || colors[index % colors.length]}
            strokeWidth={3}
            strokeOpacity={0.8}
          />
        ))}
      </RadarChart>
    </ChartContainer>
  )
}

// Export dynamic component with SSR disabled to prevent hydration issues
export const ChartRadarLinesOnly = dynamic(() => Promise.resolve(ChartRadarLinesOnlyInternal), {
  ssr: false,
  loading: () => (
    <div className="h-[250px] w-full flex items-center justify-center text-muted-foreground">
      Loading chart...
    </div>
  ),
}) 