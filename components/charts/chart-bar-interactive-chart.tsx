"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { getChartColor } from "@/lib/chart-colors"

interface ChartBarInteractiveChartProps {
  data: any[]
  config: ChartConfig
  className?: string
  activeChart?: string
}

// Internal chart component
function ChartBarInteractiveChartInternal({ 
  data, 
  config, 
  className = "aspect-auto h-[250px] w-full",
  activeChart = "desktop"
}: ChartBarInteractiveChartProps) {
  // Get dynamic color for the active chart
  const activeChartColor = React.useMemo(() => {
    // Try to get color from config first, then fall back to dynamic color
    const configColor = config[activeChart]?.color
    if (configColor) {
      return configColor
    }
    // Get color based on position in config keys
    const configKeys = Object.keys(config)
    const activeIndex = configKeys.indexOf(activeChart)
    return getChartColor(activeIndex >= 0 ? activeIndex : 0)
  }, [activeChart, config])
  
  return (
    <ChartContainer
      config={config}
      className={className}
    >
      <BarChart
        accessibilityLayer
        data={data}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          minTickGap={32}
          tickFormatter={(value) => {
            const date = new Date(value)
            return date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })
          }}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              className="w-[150px]"
              nameKey="views"
              labelFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              }}
            />
          }
        />
        <Bar dataKey={activeChart} fill={activeChartColor} />
      </BarChart>
    </ChartContainer>
  )
}

// Export with dynamic loading to prevent SSR issues
export const ChartBarInteractiveChart = dynamic(
  () => Promise.resolve(ChartBarInteractiveChartInternal),
  {
    ssr: false,
    loading: () => <div className="h-[250px] w-full bg-muted animate-pulse rounded-md" />
  }
) 