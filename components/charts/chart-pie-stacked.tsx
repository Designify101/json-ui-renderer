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

export const description = "A pie chart with stacked sections"

// Default stacked pie chart data - desktop vs mobile usage
const defaultChartData = {
  desktop: [
    { month: "january", desktop: 186 },
    { month: "february", desktop: 305 },
    { month: "march", desktop: 237 },
    { month: "april", desktop: 173 },
    { month: "may", desktop: 209 },
  ],
  mobile: [
    { month: "january", mobile: 80 },
    { month: "february", mobile: 200 },
    { month: "march", mobile: 120 },
    { month: "april", mobile: 190 },
    { month: "may", mobile: 130 },
  ]
}

const defaultChartConfig = {
  visitors: { label: "Visitors" },
  desktop: { label: "Desktop" },
  mobile: { label: "Mobile" },
  january: { label: "January" },
  february: { label: "February" },
  march: { label: "March" },
  april: { label: "April" },
  may: { label: "May" },
} satisfies ChartConfig

interface ChartPieStackedProps {
  data?: any
  config?: any
  className?: string
}

// Internal chart component
function ChartPieStackedInternal({ 
  data = defaultChartData,
  config = defaultChartConfig,
  className = ""
}: ChartPieStackedProps) {
  const id = "pie-stacked"
  
  // Handle nested data structure
  const desktopData = data.desktop || []
  const mobileData = data.mobile || []
  
  // Dynamically detect keys - use first item from desktop data
  const categoryKey = desktopData.length > 0 ? 
    Object.keys(desktopData[0]).find(key => typeof desktopData[0][key] === 'string') || 'category' : 'category'
  const desktopValueKey = desktopData.length > 0 ? 
    Object.keys(desktopData[0]).find(key => typeof desktopData[0][key] === 'number') || 'value' : 'value'
  const mobileValueKey = mobileData.length > 0 ? 
    Object.keys(mobileData[0]).find(key => typeof mobileData[0][key] === 'number') || 'value' : 'value'
  
  // Add dynamic colors to both datasets using shared utility
  const processedDesktopData = assignChartColors(desktopData)
  const processedMobileData = assignChartColors(mobileData)
  
  // Create CSS variables for the current colors using shared utility
  const chartCSSVars = React.useMemo(() => {
    return createChartCSSVars(processedDesktopData, categoryKey)
  }, [processedDesktopData, categoryKey])
  
  return (
    <div data-chart={id} className={`w-full ${className}`} style={chartCSSVars}>
      <ChartStyle id={id} config={config} />
      <ChartContainer
        config={config}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            content={
              <ChartTooltipContent
                labelKey="visitors"
                nameKey={categoryKey}
                indicator="line"
                labelFormatter={(_, payload) => {
                  return config[
                    payload?.[0].dataKey as keyof typeof config
                  ]?.label || payload?.[0].dataKey
                }}
              />
            }
          />
          <Pie 
            data={processedDesktopData} 
            dataKey={desktopValueKey} 
            nameKey={categoryKey}
            outerRadius={60} 
          />
          <Pie
            data={processedMobileData}
            dataKey={mobileValueKey}
            nameKey={categoryKey}
            innerRadius={70}
            outerRadius={90}
          />
        </PieChart>
      </ChartContainer>
    </div>
  )
}

// Export with dynamic loading to prevent SSR issues
export const ChartPieStacked = dynamic(
  () => Promise.resolve(ChartPieStackedInternal),
  { 
    ssr: false,
    loading: () => <div className="h-[250px] w-full bg-muted animate-pulse rounded-md" />
  }
) 