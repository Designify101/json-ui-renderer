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
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
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
  
  // Define colors for up to 6 data series - using hsl for better theme compatibility
  const colors = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))', 'hsl(var(--chart-5))', 'hsl(var(--chart-6))']
  
  return (
    <ChartContainer config={config} className="mx-auto aspect-square max-h-[250px]">
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
            stroke={colors[index % colors.length]}
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
    <div className="mx-auto aspect-square max-h-[250px] flex items-center justify-center text-muted-foreground">
      Loading chart...
    </div>
  ),
}) 