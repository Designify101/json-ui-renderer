"use client"

import { useState, useMemo, useEffect } from "react"
import { RadialBar, RadialBarChart } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

interface ChartRadialInteractiveProps {
  // Chart configuration
  chartData?: Record<string, any[]> | any[]
  chartConfig?: ChartConfig
  colorPalette?: Record<string, string>
  
  // UI configuration
  title?: string
  description?: string
  showMonthSelector?: boolean
  monthOptions?: Array<{ value: string; label: string }>
  
  // Statistics configuration
  showStatistics?: boolean
  statisticsTitle?: string
  statisticsItems?: Array<{
    label: string
    value: string | number
    color?: string
  }>
  
  // Summary configuration
  showSummary?: boolean
  summaryTitle?: string
  summaryItems?: Array<{
    label: string
    value: string | number
    type?: 'info' | 'success' | 'warning'
  }>
  
  // Chart display configuration
  chartHeight?: number
  showTooltip?: boolean
  dataKey?: string
  categoryKey?: string
  
  className?: string
}

export function ChartRadialInteractive({ 
  chartData = [],
  chartConfig = {},
  colorPalette = {},
  title = "Radial Chart",
  description = "Interactive radial chart",
  showMonthSelector = false,
  monthOptions = [],
  showStatistics = false,
  statisticsTitle = "Statistics",
  statisticsItems = [],
  showSummary = false,
  summaryTitle = "Summary",
  summaryItems = [],
  chartHeight = 300,
  showTooltip = true,
  dataKey = "value",
  categoryKey = "category",
  className = ""
}: ChartRadialInteractiveProps) {
  const [selectedMonth, setSelectedMonth] = useState(monthOptions[0]?.value || "")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Get current data based on selection
  const currentData = useMemo(() => {
    if (Array.isArray(chartData)) {
      return chartData
    }
    if (selectedMonth && chartData[selectedMonth]) {
      return chartData[selectedMonth]
    }
    // Return first available month's data
    const firstMonth = Object.keys(chartData)[0]
    return firstMonth ? chartData[firstMonth] : []
  }, [chartData, selectedMonth])

  // Normalize data to ensure consistent format
  const normalizedData = useMemo(() => {
    if (!currentData || !Array.isArray(currentData)) {
      return []
    }

      return currentData.map((item: any, index: number) => ({
      ...item,
      fill: item.fill || item.color || colorPalette[item[categoryKey]] || `hsl(${index * 60}, 70%, 50%)`
      }))
  }, [currentData, categoryKey, colorPalette])

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
    <div className={`space-y-6 ${className}`}>
      <Card>
        <CardHeader className="pb-0">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl font-semibold">{title}</CardTitle>
              {description && (
                <CardDescription className="text-sm text-muted-foreground mt-1">
                  {description}
                </CardDescription>
              )}
        </div>
            {showMonthSelector && monthOptions.length > 0 && (
          <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Select month" />
            </SelectTrigger>
                <SelectContent>
                  {monthOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
            )}
          </div>
      </CardHeader>
        <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Chart */}
            <div className="flex justify-center">
            <ChartContainer
              config={chartConfig}
                className="w-full max-w-[300px]"
                style={{ height: chartHeight }}
            >
                <RadialBarChart
                  data={chartDataWithPercentages}
                  innerRadius={60}
                  outerRadius={140}
                  startAngle={90}
                  endAngle={450}
                >
                  <RadialBar dataKey={dataKey} cornerRadius={5} />
                  {showTooltip && (
                <ChartTooltip
                  cursor={false}
                      content={<ChartTooltipContent />}
                />
                  )}
              </RadialBarChart>
            </ChartContainer>
          </div>

            {/* Statistics */}
            <div className="space-y-4">
              {showStatistics && (
            <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-3">
                    {statisticsTitle}
                  </h3>
              <div className="space-y-3">
                    {statisticsItems.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {item.color && (
                      <div
                              className="w-3 h-3 rounded-full" 
                              style={{ backgroundColor: item.color }}
                      />
                          )}
                          <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    <div className="text-right">
                          <div className="text-sm font-semibold">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
              )}

              {showSummary && (
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-3">
                    {summaryTitle}
                  </h3>
              <div className="space-y-3">
                    {summaryItems.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{item.label}</span>
                        <span className={`text-sm font-semibold ${
                          item.type === 'success' ? 'text-green-600' : 
                          item.type === 'warning' ? 'text-orange-600' : 
                          'text-foreground'
                        }`}>
                          {item.value}
                        </span>
                </div>
                    ))}
                </div>
                </div>
              )}
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  )
} 