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

export const description = "A pie chart with a label"

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

interface ChartPieLabelProps {
  data?: any[]
  config?: any
  showLabel?: boolean
  className?: string
}

// Internal chart component
function ChartPieLabelInternal({ 
  data = defaultChartData,
  config = defaultChartConfig,
  showLabel = true,
  className = ""
}: ChartPieLabelProps) {
  const id = "pie-label"
  
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
        className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square max-h-[250px] pb-0"
      >
        <PieChart>
          <ChartTooltip content={<ChartTooltipContent hideLabel />} />
          <Pie 
            data={processedData} 
            dataKey={valueKey} 
            label={showLabel} 
            nameKey={categoryKey} 
          />
        </PieChart>
      </ChartContainer>
    </div>
  )
}

// Export with dynamic loading to prevent SSR issues
export const ChartPieLabel = dynamic(
  () => Promise.resolve(ChartPieLabelInternal),
  { 
    ssr: false,
    loading: () => <div className="h-[250px] w-full bg-muted animate-pulse rounded-md" />
  }
) 