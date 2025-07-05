"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { LabelList, RadialBar, RadialBarChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { assignChartColors, createChartCSSVars } from "@/lib/chart-colors"

export const description = "A radial chart with a label"

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

interface ChartRadialLabelProps {
  data?: any[]
  config?: ChartConfig
  className?: string
  innerRadius?: number
  outerRadius?: number
  startAngle?: number
  endAngle?: number
}

// Internal chart component
function ChartRadialLabelInternal({ 
  data = defaultChartData,
  config = defaultChartConfig,
  className = "",
  innerRadius = 30,
  outerRadius = 110,
  startAngle = -90,
  endAngle = 380
}: ChartRadialLabelProps) {
  const id = "radial-label"
  
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
        className="mx-auto aspect-square max-h-[250px]"
      >
        <RadialBarChart
          data={processedData}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
        >
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel nameKey={categoryKey} />}
          />
          <RadialBar dataKey={valueKey} background>
            <LabelList
              position="insideStart"
              dataKey={categoryKey}
              className="fill-white capitalize mix-blend-luminosity"
              fontSize={11}
            />
          </RadialBar>
        </RadialBarChart>
      </ChartContainer>
    </div>
  )
}

// Dynamic import wrapper to avoid SSR issues
const ChartRadialLabelDynamic = dynamic(
  () => Promise.resolve(ChartRadialLabelInternal),
  { ssr: false }
)

export function ChartRadialLabel({ data, config, className, innerRadius, outerRadius, startAngle, endAngle }: ChartRadialLabelProps) {
  return <ChartRadialLabelDynamic data={data} config={config} className={className} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} />
} 