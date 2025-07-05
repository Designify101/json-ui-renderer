"use client"

import dynamic from "next/dynamic"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A radar chart with a legend"

// Default chart data for fallback
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
    color: "#f97316", // orange-500 - works in both themes
  },
  mobile: {
    label: "Mobile",
    color: "#3b82f6", // blue-500 - works in both themes
  },
} satisfies ChartConfig

export interface ChartRadarLegendProps {
  data?: any[]
  config?: ChartConfig
}

// Internal chart component
function ChartRadarLegendInternal({ data = chartData, config = chartConfig }: ChartRadarLegendProps) {
  // Dynamically detect the category key (first string field) and numeric keys
  const categoryKey = data.length > 0 ? Object.keys(data[0]).find(key => typeof data[0][key] === 'string') || 'month' : 'month'
  const numericKeys = data.length > 0 ? Object.keys(data[0]).filter(key => typeof data[0][key] === 'number') : ['desktop', 'mobile']
  
  // Define colors for up to 6 data series
  const colors = ['#f97316', '#3b82f6', '#06b6d4', '#8b5cf6', '#ec4899', '#10b981']
  
  return (
    <ChartContainer config={config} className="aspect-square">
      <RadarChart data={data}>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <PolarAngleAxis dataKey={categoryKey} />
        <PolarGrid />
        {numericKeys.map((key, index) => (
          <Radar
            key={key}
            dataKey={key}
            fill={config[key]?.color || colors[index % colors.length]}
            fillOpacity={index === 0 ? 0.6 : 0.4}
          />
        ))}
        <ChartLegend />
      </RadarChart>
    </ChartContainer>
  )
}

// Export dynamic component with SSR disabled to prevent hydration issues
export const ChartRadarLegend = dynamic(() => Promise.resolve(ChartRadarLegendInternal), {
  ssr: false,
  loading: () => (
    <div className="h-[300px] w-full flex items-center justify-center text-muted-foreground">
      Loading chart...
    </div>
  ),
}) 