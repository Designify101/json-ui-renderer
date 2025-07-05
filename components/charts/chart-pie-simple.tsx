"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { Pie, PieChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartStyle,
} from "@/components/ui/chart"
import { assignChartColors, createChartCSSVars } from "@/lib/chart-colors"

export const description = "A simple pie chart"

// Default simple pie chart data - browser usage
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

interface ChartPieSimpleProps {
  data?: any[]
  config?: any
  className?: string
}

// Internal chart component
function ChartPieSimpleInternal({ 
  data = defaultChartData,
  config = defaultChartConfig,
  className = ""
}: ChartPieSimpleProps) {
  const id = "pie-simple"
  
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
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie 
            data={processedData} 
            dataKey={valueKey} 
            nameKey={categoryKey} 
          />
        </PieChart>
      </ChartContainer>
    </div>
  )
}

// Export with dynamic loading to prevent SSR issues
export const ChartPieSimple = dynamic(
  () => Promise.resolve(ChartPieSimpleInternal),
  { 
    ssr: false,
    loading: () => <div className="h-[250px] w-full bg-muted animate-pulse rounded-md" />
  }
) 