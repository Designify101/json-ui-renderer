"use client"

import { useState, useMemo, useEffect } from "react"
import { RadialBar, RadialBarChart } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

interface ChartRadialBaseProps {
  data?: any[]
  config?: ChartConfig
  innerRadius?: number
  outerRadius?: number
  startAngle?: number
  endAngle?: number
  dataKey?: string
  categoryKey?: string
  showTooltip?: boolean
  className?: string
  height?: number
}

export function ChartRadialBase({
  data = [],
  config = {},
  innerRadius = 60,
  outerRadius = 140,
  startAngle = 90,
  endAngle = 450,
  dataKey = "value",
  categoryKey = "category",
  showTooltip = true,
  className = "",
  height = 300
}: ChartRadialBaseProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Normalize data to ensure consistent format
  const normalizedData = useMemo(() => {
    if (!data || !Array.isArray(data)) {
      return []
    }

    return data.map((item: any, index: number) => ({
      ...item,
      fill: item.fill || item.color || `hsl(${index * 60}, 70%, 50%)`
    }))
  }, [data])

  // Calculate total and percentages
  const totalValue = useMemo(() => {
    return normalizedData.reduce((sum: number, item: any) => {
      const value = typeof item[dataKey] === 'number' ? item[dataKey] : 0
      return sum + value
    }, 0)
  }, [normalizedData, dataKey])

  const chartDataWithPercentages = useMemo(() => {
    return normalizedData.map((item: any) => ({
      ...item,
      percentage: totalValue > 0 ? Math.round((item[dataKey] / totalValue) * 100) : 0
    }))
  }, [normalizedData, totalValue, dataKey])

  // Don't render until mounted to prevent hydration issues
  if (!isMounted) {
    return null
  }

  return (
    <ChartContainer
      config={config}
      className={className}
      style={{ height }}
    >
      <RadialBarChart
        data={chartDataWithPercentages}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
      >
        <RadialBar 
          dataKey={dataKey} 
          cornerRadius={5} 
        />
        {showTooltip && (
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent />}
          />
        )}
      </RadialBarChart>
    </ChartContainer>
  )
} 