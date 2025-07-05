"use client"

import { useState, useMemo, useEffect } from "react"
import { ChartRadialBase } from "./chart-radial-base"

interface ChartRadialInteractiveWrapperProps {
  data?: Record<string, any[]> | any[]
  config?: any
  monthOptions?: Array<{ value: string; label: string }>
  selectedMonth?: string
  onMonthChange?: (month: string) => void
  dataKey?: string
  categoryKey?: string
  innerRadius?: number
  outerRadius?: number
  startAngle?: number
  endAngle?: number
  showTooltip?: boolean
  className?: string
  height?: number
}

export function ChartRadialInteractiveWrapper({
  data = [],
  config = {},
  monthOptions = [],
  selectedMonth,
  onMonthChange,
  dataKey = "value",
  categoryKey = "category",
  innerRadius = 60,
  outerRadius = 140,
  startAngle = 90,
  endAngle = 450,
  showTooltip = true,
  className = "",
  height = 300
}: ChartRadialInteractiveWrapperProps) {
  const [internalSelectedMonth, setInternalSelectedMonth] = useState(
    selectedMonth || monthOptions[0]?.value || ""
  )
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Use external state if provided, otherwise use internal state
  const currentMonth = selectedMonth || internalSelectedMonth
  const handleMonthChange = (month: string) => {
    if (onMonthChange) {
      onMonthChange(month)
    } else {
      setInternalSelectedMonth(month)
    }
  }

  // Get current data based on selection
  const currentData = useMemo(() => {
    if (Array.isArray(data)) {
      return data
    }
    if (currentMonth && data[currentMonth]) {
      return data[currentMonth]
    }
    // Return first available month's data
    const firstMonth = Object.keys(data)[0]
    return firstMonth ? data[firstMonth] : []
  }, [data, currentMonth])

  // Don't render until mounted to prevent hydration issues
  if (!isMounted) {
    return null
  }

  return (
    <ChartRadialBase
      data={currentData}
      config={config}
      dataKey={dataKey}
      categoryKey={categoryKey}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      startAngle={startAngle}
      endAngle={endAngle}
      showTooltip={showTooltip}
      className={className}
      height={height}
    />
  )
} 