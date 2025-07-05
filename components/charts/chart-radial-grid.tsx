"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { PolarGrid, RadialBar, RadialBarChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { assignChartColors, createChartCSSVars } from "@/lib/chart-colors"

export const description = "A radial chart with a grid"

// Default data for fallback
const defaultChartData = [
  { browser: "chrome", visitors: 275 },
  { browser: "safari", visitors: 200 },
  { browser: "firefox", visitors: 187 },
  { browser: "edge", visitors: 173 },
  { browser: "other", visitors: 90 },
]

const defaultChartConfig = {
  visitors: { label: "Visitors" },
  chrome: { label: "Chrome" },
  safari: { label: "Safari" },
  firefox: { label: "Firefox" },
  edge: { label: "Edge" },
  other: { label: "Other" },
} satisfies ChartConfig

interface ChartRadialGridProps {
  data?: any[]
  config?: ChartConfig
  className?: string
  innerRadius?: number
  outerRadius?: number
}

// Internal chart component
function ChartRadialGridInternal({ 
  data = defaultChartData,
  config = defaultChartConfig,
  className = "",
  innerRadius = 30,
  outerRadius = 100
}: ChartRadialGridProps) {
  const id = "radial-grid"
  
  // Dynamically detect keys from data
  const categoryKey = data.length > 0 ? 
    Object.keys(data[0]).find(key => typeof data[0][key] === 'string') || 'category' : 'category'
  const valueKey = data.length > 0 ? 
    Object.keys(data[0]).find(key => typeof data[0][key] === 'number') || 'value' : 'value'
  
  // Add dynamic colors to data using shared utility
  const processedData = assignChartColors(data)
  
  // Create CSS variables for the current colors using shared utility
  const chartCSSVars = React.useMemo(() => {
    return createChartCSSVars(processedData, categoryKey)
  }, [processedData, categoryKey])
  
  return (
    <div data-chart={id} className={`w-full ${className}`} style={chartCSSVars}>
      <ChartContainer
        config={config}
        className="mx-auto aspect-square max-h-[300px] p-2"
      >
        <RadialBarChart data={processedData} innerRadius={innerRadius} outerRadius={outerRadius}>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel nameKey={categoryKey} />}
          />
          <PolarGrid gridType="circle" />
          <RadialBar dataKey={valueKey} />
        </RadialBarChart>
      </ChartContainer>
    </div>
  )
}

// Dynamic import wrapper to avoid SSR issues
const ChartRadialGridDynamic = dynamic(
  () => Promise.resolve(ChartRadialGridInternal),
  { ssr: false }
)

export function ChartRadialGrid({ data, config, className, innerRadius, outerRadius }: ChartRadialGridProps) {
  return <ChartRadialGridDynamic data={data} config={config} className={className} innerRadius={innerRadius} outerRadius={outerRadius} />
} 