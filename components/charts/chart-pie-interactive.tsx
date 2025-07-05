"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { Label, Pie, PieChart, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

import {
  ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CHART_COLORS, getChartColor, assignChartColors, createChartCSSVars } from "@/lib/chart-colors"

export const description = "An interactive pie chart"

// Default interactive pie chart data - browser usage per month
const defaultChartData = {
  january: [
    { category: "chrome", value: 275 },
    { category: "safari", value: 200 },
    { category: "firefox", value: 187 },
    { category: "edge", value: 173 },
    { category: "other", value: 90 },
  ],
  february: [
    { category: "chrome", value: 320 },
    { category: "safari", value: 180 },
    { category: "firefox", value: 210 },
    { category: "edge", value: 160 },
    { category: "other", value: 110 },
  ],
  march: [
    { category: "chrome", value: 290 },
    { category: "safari", value: 220 },
    { category: "firefox", value: 195 },
    { category: "edge", value: 185 },
    { category: "other", value: 85 },
  ],
  april: [
    { category: "chrome", value: 305 },
    { category: "safari", value: 190 },
    { category: "firefox", value: 175 },
    { category: "edge", value: 195 },
    { category: "other", value: 95 },
  ],
  may: [
    { category: "chrome", value: 340 },
    { category: "safari", value: 210 },
    { category: "firefox", value: 165 },
    { category: "edge", value: 150 },
    { category: "other", value: 120 },
  ],
  june: [
    { category: "chrome", value: 360 },
    { category: "safari", value: 230 },
    { category: "firefox", value: 155 },
    { category: "edge", value: 140 },
    { category: "other", value: 135 },
  ],
}

const defaultChartConfig = {
  visitors: { label: "Visitors" },
  chrome: { label: "Chrome" },
  safari: { label: "Safari" },
  firefox: { label: "Firefox" },
  edge: { label: "Edge" },
  other: { label: "Other" },
  january: { label: "January" },
  february: { label: "February" },
  march: { label: "March" },
  april: { label: "April" },
  may: { label: "May" },
  june: { label: "June" },
} satisfies ChartConfig

interface ChartPieInteractiveProps {
  data?: any
  config?: any
  innerRadius?: number
  strokeWidth?: number
  className?: string
}

// Internal chart component
function ChartPieInteractiveInternal({ 
  data = defaultChartData,
  config = defaultChartConfig,
  innerRadius = 60,
  strokeWidth = 5,
  className = ""
}: ChartPieInteractiveProps) {
  const id = "pie-interactive"
  
  // Get available months from the data
  const months = React.useMemo(() => {
    if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
      return Object.keys(data)
    }
    return ['january'] // fallback
  }, [data])
  
  // Active month state
  const [activeMonth, setActiveMonth] = React.useState(months[0])
  
  // Get current month's data
  const currentData = React.useMemo(() => {
    if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
      return data[activeMonth] || []
    }
    // Fallback for old data structure
    return Array.isArray(data) ? data : []
  }, [data, activeMonth])
  
  // Dynamically detect keys from current data
  const categoryKey = currentData.length > 0 ? 
    Object.keys(currentData[0]).find(key => typeof currentData[0][key] === 'string') || 'category' : 'category'
  const valueKey = currentData.length > 0 ? 
    Object.keys(currentData[0]).find(key => typeof currentData[0][key] === 'number') || 'value' : 'value'
  
  // Add dynamic colors to data using shared utility
  const processedData = assignChartColors(currentData)
  
  // Calculate total for center text
  const totalValue = React.useMemo(() => {
    return processedData.reduce((acc: number, item: any) => acc + (item[valueKey] || 0), 0)
  }, [processedData, valueKey])
  
  // Create CSS variables for the current colors using shared utility
  const chartCSSVars = React.useMemo(() => {
    return createChartCSSVars(processedData, categoryKey)
  }, [processedData, categoryKey])
  
  return (
    <div data-chart={id} className={`w-full ${className}`} style={chartCSSVars}>
      <ChartStyle id={id} config={config} />
      
      {/* Header with dropdown in same row */}
      <div className="flex flex-row items-start justify-between mb-6 px-6 pt-6">
        <div className="grid gap-1 flex-1">
          <h3 className="text-lg font-semibold">Interactive Pie Chart</h3>
          <p className="text-sm text-muted-foreground">Monthly browser usage statistics</p>
        </div>
        <Select value={activeMonth} onValueChange={setActiveMonth}>
          <SelectTrigger className="w-[140px] h-8">
            <SelectValue placeholder="Select month" />
          </SelectTrigger>
          <SelectContent align="end">
            {months.map((month) => {
              const configItem = config[month as keyof typeof config]
              const monthIndex = months.indexOf(month)
              const monthColor = getChartColor(monthIndex)
              
              return (
                <SelectItem key={month} value={month}>
                  <div className="flex items-center gap-2 text-sm">
                    <span
                      className="flex h-3 w-3 shrink-0 rounded-sm"
                      style={{ backgroundColor: monthColor }}
                    />
                    {configItem?.label || month}
                  </div>
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>
      </div>
      
      {/* Chart - bigger now */}
      <div className="flex flex-1 justify-center px-6 pb-6">
        <ChartContainer
          id={id}
          config={config}
          className="mx-auto aspect-square w-full max-w-[400px]"
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
              strokeWidth={strokeWidth}
              // @ts-ignore - activeIndex is a valid prop but not in TypeScript definitions
              activeIndex={0}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 6} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
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
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalValue.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Users
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>
    </div>
  )
}

// Export with dynamic loading to prevent SSR issues
export const ChartPieInteractive = dynamic(
  () => Promise.resolve(ChartPieInteractiveInternal),
  { 
    ssr: false,
    loading: () => <div className="h-[400px] w-full bg-muted animate-pulse rounded-md" />
  }
) 