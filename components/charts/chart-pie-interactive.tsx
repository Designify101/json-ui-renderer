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

export const description = "An interactive pie chart"

// Default interactive pie chart data - browser usage per month
const defaultChartData = {
  january: [
    { category: "chrome", value: 275, fill: "var(--color-chrome)" },
    { category: "safari", value: 200, fill: "var(--color-safari)" },
    { category: "firefox", value: 187, fill: "var(--color-firefox)" },
    { category: "edge", value: 173, fill: "var(--color-edge)" },
    { category: "other", value: 90, fill: "var(--color-other)" },
  ],
  february: [
    { category: "chrome", value: 320, fill: "var(--color-chrome)" },
    { category: "safari", value: 180, fill: "var(--color-safari)" },
    { category: "firefox", value: 210, fill: "var(--color-firefox)" },
    { category: "edge", value: 160, fill: "var(--color-edge)" },
    { category: "other", value: 110, fill: "var(--color-other)" },
  ],
  march: [
    { category: "chrome", value: 290, fill: "var(--color-chrome)" },
    { category: "safari", value: 220, fill: "var(--color-safari)" },
    { category: "firefox", value: 195, fill: "var(--color-firefox)" },
    { category: "edge", value: 185, fill: "var(--color-edge)" },
    { category: "other", value: 85, fill: "var(--color-other)" },
  ],
  april: [
    { category: "chrome", value: 305, fill: "var(--color-chrome)" },
    { category: "safari", value: 190, fill: "var(--color-safari)" },
    { category: "firefox", value: 175, fill: "var(--color-firefox)" },
    { category: "edge", value: 195, fill: "var(--color-edge)" },
    { category: "other", value: 95, fill: "var(--color-other)" },
  ],
  may: [
    { category: "chrome", value: 340, fill: "var(--color-chrome)" },
    { category: "safari", value: 210, fill: "var(--color-safari)" },
    { category: "firefox", value: 165, fill: "var(--color-firefox)" },
    { category: "edge", value: 150, fill: "var(--color-edge)" },
    { category: "other", value: 120, fill: "var(--color-other)" },
  ],
  june: [
    { category: "chrome", value: 360, fill: "var(--color-chrome)" },
    { category: "safari", value: 230, fill: "var(--color-safari)" },
    { category: "firefox", value: 155, fill: "var(--color-firefox)" },
    { category: "edge", value: 140, fill: "var(--color-edge)" },
    { category: "other", value: 135, fill: "var(--color-other)" },
  ],
}

const defaultChartConfig = {
  visitors: { label: "Visitors" },
  chrome: { label: "Chrome", color: "hsl(var(--chart-1))" },
  safari: { label: "Safari", color: "hsl(var(--chart-2))" },
  firefox: { label: "Firefox", color: "hsl(var(--chart-3))" },
  edge: { label: "Edge", color: "hsl(var(--chart-4))" },
  other: { label: "Other", color: "hsl(var(--chart-5))" },
  january: { label: "January", color: "hsl(var(--chart-1))" },
  february: { label: "February", color: "hsl(var(--chart-2))" },
  march: { label: "March", color: "hsl(var(--chart-3))" },
  april: { label: "April", color: "hsl(var(--chart-4))" },
  may: { label: "May", color: "hsl(var(--chart-5))" },
  june: { label: "June", color: "hsl(var(--chart-1))" },
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
  
  // Add fill colors dynamically if not present
  const processedData = currentData.map((item: any, index: number) => ({
    ...item,
    fill: item.fill || config[item[categoryKey]]?.color || `hsl(var(--chart-${(index % 5) + 1}))`
  }))
  
  // Calculate total for center text
  const totalValue = React.useMemo(() => {
    return processedData.reduce((acc: number, item: any) => acc + (item[valueKey] || 0), 0)
  }, [processedData, valueKey])
  
  return (
    <div data-chart={id} className={`w-full ${className}`}>
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
              return (
                <SelectItem key={month} value={month}>
                  <div className="flex items-center gap-2 text-sm">
                    <span
                      className="flex h-3 w-3 shrink-0 rounded-sm"
                      style={{
                        backgroundColor: configItem?.color || `hsl(var(--chart-${(months.indexOf(month) % 5) + 1}))`,
                      }}
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