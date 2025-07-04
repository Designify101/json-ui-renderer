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
        <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
      </BarChart>
    </ChartContainer>
  )
}

// Export dynamic component with SSR disabled to prevent hydration issues
export const ChartBarInteractiveChart = dynamic(() => Promise.resolve(ChartBarInteractiveChartInternal), {
  ssr: false,
  loading: () => (
    <div className="h-[250px] w-full flex items-center justify-center text-muted-foreground">
      Loading chart...
    </div>
  ),
}) 