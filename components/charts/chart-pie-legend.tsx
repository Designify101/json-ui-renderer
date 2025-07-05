"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { Pie, PieChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
} from "@/components/ui/chart"
import { assignChartColors, createChartCSSVars } from "@/lib/chart-colors"

export const description = "A pie chart with a legend"

// Default pie chart data - browser usage
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

interface ChartPieLegendProps {
  data?: any[]
  config?: any
  className?: string
}

// Internal chart component
function ChartPieLegendInternal({ 
  data = defaultChartData,
  config = defaultChartConfig,
  className = ""
}: ChartPieLegendProps) {
  const id = "pie-legend"
  
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
      <ChartStyle id={id} config={config} />
      <ChartContainer
        config={config}
        className="mx-auto aspect-square max-h-[300px]"
      >
        <PieChart>
          <Pie data={processedData} dataKey={valueKey} nameKey={categoryKey} />
          <ChartLegend
            // @ts-ignore - payload is a valid prop but not in TypeScript definitions
            content={<ChartLegendContent nameKey={categoryKey} />}
            className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
          />
        </PieChart>
      </ChartContainer>
    </div>
  )
}

// Export with dynamic loading to prevent SSR issues
export const ChartPieLegend = dynamic(
  () => Promise.resolve(ChartPieLegendInternal),
  { 
    ssr: false,
    loading: () => <div className="h-[300px] w-full bg-muted animate-pulse rounded-md" />
  }
) 