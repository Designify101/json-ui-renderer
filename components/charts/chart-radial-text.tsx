"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { assignChartColors, createChartCSSVars } from "@/lib/chart-colors"
import { formatNumber } from "@/lib/utils"

export const description = "A radial chart with text"

// Default data for fallback
const defaultChartData = [
  { browser: "safari", visitors: 200 },
]

const defaultChartConfig = {
  visitors: { label: "Visitors" },
  safari: { label: "Safari" },
} satisfies ChartConfig

interface ChartRadialTextProps {
  data?: any[]
  config?: ChartConfig
  className?: string
  innerRadius?: number
  outerRadius?: number
  startAngle?: number
  endAngle?: number
}

// Internal chart component
function ChartRadialTextInternal({ 
  data = defaultChartData,
  config = defaultChartConfig,
  className = "",
  innerRadius = 60,
  outerRadius = 100,
  startAngle = 0,
  endAngle = 250
}: ChartRadialTextProps) {
  const id = "radial-text"
  
  // Dynamically detect keys from data
  const categoryKey = data.length > 0 ? 
    Object.keys(data[0]).find(key => typeof data[0][key] === 'string') || 'category' : 'category'
  const valueKey = data.length > 0 ? 
    Object.keys(data[0]).find(key => typeof data[0][key] === 'number') || 'value' : 'value'
  
  // Get dynamic label for center text
  const centerLabel = React.useMemo(() => {
    if (config && config[valueKey]) {
      return config[valueKey].label || valueKey
    }
    return valueKey.charAt(0).toUpperCase() + valueKey.slice(1)
  }, [config, valueKey])
  
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
        <RadialBarChart
          data={processedData}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
        >
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            className="first:fill-muted last:fill-background"
            polarRadius={[66, 54]}
          />
          <RadialBar dataKey={valueKey} background cornerRadius={10} />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-4xl font-bold"
                      >
                        {processedData[0] && processedData[0][valueKey] ? formatNumber(processedData[0][valueKey]) : "0"}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        {centerLabel}
                      </tspan>
                    </text>
                  )
                }
              }}
            />
          </PolarRadiusAxis>
        </RadialBarChart>
      </ChartContainer>
    </div>
  )
}

// Dynamic import wrapper to avoid SSR issues
const ChartRadialTextDynamic = dynamic(
  () => Promise.resolve(ChartRadialTextInternal),
  { ssr: false }
)

export function ChartRadialText({ data, config, className, innerRadius, outerRadius, startAngle, endAngle }: ChartRadialTextProps) {
  return <ChartRadialTextDynamic data={data} config={config} className={className} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} />
} 