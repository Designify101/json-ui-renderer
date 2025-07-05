"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { Pie, PieChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A pie chart with stacked sections"

// Default stacked pie chart data - desktop and mobile usage by month
const desktopData = [
  { month: "january", desktop: 186, fill: "var(--color-january)" },
  { month: "february", desktop: 305, fill: "var(--color-february)" },
  { month: "march", desktop: 237, fill: "var(--color-march)" },
  { month: "april", desktop: 173, fill: "var(--color-april)" },
  { month: "may", desktop: 209, fill: "var(--color-may)" },
]

const mobileData = [
  { month: "january", mobile: 80, fill: "var(--color-january)" },
  { month: "february", mobile: 200, fill: "var(--color-february)" },
  { month: "march", mobile: 120, fill: "var(--color-march)" },
  { month: "april", mobile: 190, fill: "var(--color-april)" },
  { month: "may", mobile: 130, fill: "var(--color-may)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
  },
  january: {
    label: "January",
    color: "hsl(var(--chart-1))",
  },
  february: {
    label: "February",
    color: "hsl(var(--chart-2))",
  },
  march: {
    label: "March",
    color: "hsl(var(--chart-3))",
  },
  april: {
    label: "April",
    color: "hsl(var(--chart-4))",
  },
  may: {
    label: "May",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

interface ChartPieStackedProps {
  data?: {
    desktop?: any[]
    mobile?: any[]
  }
  config?: any
  innerRadius?: number
  outerRadius?: number
  innerOuterRadius?: number
  outerInnerRadius?: number
}

// Internal chart component
function ChartPieStackedInternal({ 
  data = { desktop: desktopData, mobile: mobileData },
  config = chartConfig,
  innerRadius = 60,
  outerRadius = 60,
  innerOuterRadius = 90,
  outerInnerRadius = 70
}: ChartPieStackedProps) {
  const { desktop: innerData = desktopData, mobile: outerData = mobileData } = data
  
  // Dynamically detect keys for both datasets
  const innerCategoryKey = innerData.length > 0 ? Object.keys(innerData[0]).find(key => typeof innerData[0][key] === 'string') || 'month' : 'month'
  const innerValueKey = innerData.length > 0 ? Object.keys(innerData[0]).find(key => typeof innerData[0][key] === 'number') || 'desktop' : 'desktop'
  
  const outerCategoryKey = outerData.length > 0 ? Object.keys(outerData[0]).find(key => typeof outerData[0][key] === 'string') || 'month' : 'month'
  const outerValueKey = outerData.length > 0 ? Object.keys(outerData[0]).find(key => typeof outerData[0][key] === 'number') || 'mobile' : 'mobile'
  
  // Add fill colors dynamically if not present
  const processedInnerData = innerData.map((item, index) => ({
    ...item,
    fill: item.fill || config[item[innerCategoryKey]]?.color || `hsl(var(--chart-${(index % 5) + 1}))`
  }))
  
  const processedOuterData = outerData.map((item, index) => ({
    ...item,
    fill: item.fill || config[item[outerCategoryKey]]?.color || `hsl(var(--chart-${(index % 5) + 1}))`
  }))

  return (
    <ChartContainer
      config={config}
      className="mx-auto aspect-square max-h-[250px]"
    >
      <PieChart>
        <ChartTooltip
          content={
            <ChartTooltipContent
              labelKey="visitors"
              nameKey="month"
              indicator="line"
              labelFormatter={(_, payload) => {
                const dataKey = payload?.[0]?.dataKey as keyof typeof config
                return config[dataKey]?.label || dataKey
              }}
            />
          }
        />
        <Pie 
          data={processedInnerData} 
          dataKey={innerValueKey} 
          nameKey={innerCategoryKey}
          outerRadius={outerRadius} 
        />
        <Pie
          data={processedOuterData}
          dataKey={outerValueKey}
          nameKey={outerCategoryKey}
          innerRadius={outerInnerRadius}
          outerRadius={innerOuterRadius}
        />
      </PieChart>
    </ChartContainer>
  )
}

// Export dynamic component with SSR disabled to prevent hydration issues
export const ChartPieStacked = dynamic(() => Promise.resolve(ChartPieStackedInternal), {
  ssr: false,
  loading: () => (
    <div className="h-[250px] w-full flex items-center justify-center text-muted-foreground">
      Loading chart...
    </div>
  ),
}) 