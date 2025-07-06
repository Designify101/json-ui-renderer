"use client"

import * as React from "react"
import { Pie, PieChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartStyle,
} from "@/components/ui/chart"
import { assignChartColors, createChartCSSVars } from "@/lib/chart-colors"
import { formatNumber } from "@/lib/utils"

export const description = "A donut chart with text"

interface ChartPieDonutTextProps {
  data?: any[]
  config?: any
  innerRadius?: number
  className?: string
}

export function ChartPieDonutText({ 
  data = [],
  config = {},
  innerRadius = 60,
  className = ""
}: ChartPieDonutTextProps) {
  const id = "pie-donut-text"
  
  // Use default data if none provided
  const defaultData = [
    { browser: "chrome", visitors: 275 },
    { browser: "safari", visitors: 200 },
    { browser: "firefox", visitors: 287 },
    { browser: "edge", visitors: 173 },
    { browser: "other", visitors: 190 },
  ]
  
  const chartData = data.length > 0 ? data : defaultData
  
  // Dynamically detect keys from data
  const categoryKey = chartData.length > 0 ? 
    Object.keys(chartData[0]).find(key => typeof chartData[0][key] === 'string') || 'browser' : 'browser'
  const valueKey = chartData.length > 0 ? 
    Object.keys(chartData[0]).find(key => typeof chartData[0][key] === 'number') || 'visitors' : 'visitors'
  
  // Add dynamic colors to data using shared utility
  const processedData = assignChartColors(chartData)
  
  // Create CSS variables for the current colors using shared utility
  const chartCSSVars = React.useMemo(() => {
    return createChartCSSVars(processedData, categoryKey)
  }, [processedData, categoryKey])
  
  // Calculate total for center text
  const totalVisitors = React.useMemo(() => {
    return processedData.reduce((acc, curr) => acc + (curr[valueKey] || 0), 0)
  }, [processedData, valueKey])
  
  // Get dynamic label for center text
  const centerLabel = React.useMemo(() => {
    if (config && config[valueKey]) {
      return config[valueKey].label || valueKey
    }
    return valueKey.charAt(0).toUpperCase() + valueKey.slice(1)
  }, [config, valueKey])
  
  console.log("🍩 DonutText: Total visitors:", totalVisitors)
  
  return (
    <div data-chart={id} className={`w-full ${className}`} style={chartCSSVars}>
      <ChartStyle id={id} config={config} />
      <div className="relative">
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
              innerRadius={innerRadius}
            />
          </PieChart>
        </ChartContainer>
        
        {/* Center text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="text-3xl font-bold text-foreground">
            {formatNumber(totalVisitors)}
          </div>
          <div className="text-sm text-muted-foreground">
            {centerLabel}
          </div>
        </div>
      </div>
    </div>
  )
} 