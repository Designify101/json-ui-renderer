"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { assignChartColors, createChartCSSVars } from "@/lib/chart-colors"
import { formatNumber } from "@/lib/utils"

export const description = "A radial chart with stacked sections"

// Default data for fallback
const defaultChartData = [{ month: "january", desktop: 1260, mobile: 570 }]

const defaultChartConfig = {
  desktop: { label: "Desktop" },
  mobile: { label: "Mobile" },
} satisfies ChartConfig

interface ChartRadialStackedProps {
  data?: any[]
  config?: ChartConfig
  className?: string
  innerRadius?: number
  outerRadius?: number
  startAngle?: number
  endAngle?: number
}

// Internal chart component
function ChartRadialStackedInternal({ 
  data = defaultChartData,
  config = defaultChartConfig,
  className = "",
  innerRadius = 60,
  outerRadius = 110,
  startAngle = 0,
  endAngle = 180
}: ChartRadialStackedProps) {
  const id = "radial-stacked"
  
  // Dynamically detect keys from data
  const categoryKey = data.length > 0 ? 
    Object.keys(data[0]).find(key => typeof data[0][key] === 'string') || 'category' : 'category'
  
  // Find all numeric keys for stacking
  const numericKeys = React.useMemo(() => {
    if (data.length > 0) {
      return Object.keys(data[0]).filter(key => typeof data[0][key] === 'number')
    }
    return []
  }, [data])
  
  // Calculate total for center text
  const totalVisitors = React.useMemo(() => {
    if (data.length > 0) {
      return numericKeys.reduce((total, key) => total + (data[0][key] || 0), 0)
    }
    return 0
  }, [data, numericKeys])
  
  // Get dynamic label for center text
  const centerLabel = React.useMemo(() => {
    if (numericKeys.length > 0) {
      const firstKey = numericKeys[0]
      if (config && config[firstKey]) {
        return config[firstKey].label || firstKey
      }
      return firstKey.charAt(0).toUpperCase() + firstKey.slice(1)
    }
    return "Total"
  }, [config, numericKeys])
  
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
        className="mx-auto aspect-square w-full max-w-[300px] p-2"
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
            content={<ChartTooltipContent hideLabel />}
          />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) - 16}
                        className="fill-foreground text-2xl font-bold"
                      >
                        {formatNumber(totalVisitors)}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 4}
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
          {numericKeys.map((key, index) => (
            <RadialBar
              key={key}
              dataKey={key}
              stackId="a"
              cornerRadius={5}
              fill={config[key]?.color || `var(--color-${key})`}
              className="stroke-transparent stroke-2"
            />
          ))}
        </RadialBarChart>
      </ChartContainer>
    </div>
  )
}

// Dynamic import wrapper to avoid SSR issues
const ChartRadialStackedDynamic = dynamic(
  () => Promise.resolve(ChartRadialStackedInternal),
  { ssr: false }
)

export function ChartRadialStacked({ data, config, className, innerRadius, outerRadius, startAngle, endAngle }: ChartRadialStackedProps) {
  return <ChartRadialStackedDynamic data={data} config={config} className={className} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} />
} 