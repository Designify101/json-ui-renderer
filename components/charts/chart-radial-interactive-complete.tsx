"use client"

import { useState, useMemo, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChartRadialBase } from "./chart-radial-base"

interface MonthOption {
  value: string
  label: string
}

interface ChartRadialInteractiveCompleteProps {
  // Chart data
  monthlyData?: Record<string, any[]>
  chartConfig?: any
  
  // UI configuration
  title?: string
  description?: string
  monthOptions?: MonthOption[]
  
  // Chart configuration
  dataKey?: string
  categoryKey?: string
  height?: number
  showTooltip?: boolean
  className?: string
  
  // Base chart configurable properties
  innerRadius?: number
  outerRadius?: number
  startAngle?: number
  endAngle?: number
  cornerRadius?: number
  tooltipCursor?: boolean
  defaultColorHue?: number
  defaultColorSaturation?: number
  defaultColorLightness?: number
  colorFallbackEnabled?: boolean
}

export function ChartRadialInteractiveComplete({
  monthlyData = {},
  chartConfig = {},
  title = "Browser Usage Statistics",
  description = "Interactive radial chart with month selector",
  monthOptions = [],
  dataKey = "value",
  categoryKey = "category",
  height = 350,
  showTooltip = true,
  className = "",
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  cornerRadius,
  tooltipCursor,
  defaultColorHue,
  defaultColorSaturation,
  defaultColorLightness,
  colorFallbackEnabled
}: ChartRadialInteractiveCompleteProps) {
  const [selectedMonth, setSelectedMonth] = useState(monthOptions[0]?.value || "")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Get current data based on selected month
  const currentData = useMemo(() => {
    if (selectedMonth && monthlyData[selectedMonth]) {
      return monthlyData[selectedMonth]
    }
    // Return first available month's data
    const firstMonth = Object.keys(monthlyData)[0]
    return firstMonth ? monthlyData[firstMonth] : []
  }, [monthlyData, selectedMonth])

  // Calculate dynamic statistics from current month's data
  const browserStats = useMemo(() => {
    if (!currentData || currentData.length === 0) return []
    
    const total = currentData.reduce((sum, item) => sum + (item[dataKey] || 0), 0)
    
    return currentData.map(item => {
      const value = item[dataKey] || 0
      const percentage = total > 0 ? Math.round((value / total) * 100) : 0
      const browserName = item[categoryKey] || ""
      
      // Capitalize first letter
      const displayName = browserName.charAt(0).toUpperCase() + browserName.slice(1)
      
      return {
        label: displayName,
        value: `${percentage}%`,
        color: item.color || chartConfig[browserName]?.color || "#6b7280"
      }
    }).sort((a, b) => parseInt(b.value) - parseInt(a.value)) // Sort by percentage descending
  }, [currentData, dataKey, categoryKey, chartConfig])

  // Calculate dynamic summary metrics
  const summaryMetrics = useMemo(() => {
    if (!currentData || currentData.length === 0) return []
    
    const total = currentData.reduce((sum, item) => sum + (item[dataKey] || 0), 0)
    const topBrowser = browserStats.length > 0 ? browserStats[0] : null
    const browserCount = currentData.length
    
    // Get current month name for display
    const currentMonthOption = monthOptions.find(option => option.value === selectedMonth)
    const monthName = currentMonthOption?.label || selectedMonth
    
    return [
      { 
        label: "Total Visitors", 
        value: total.toLocaleString() 
      },
      { 
        label: "Browser Types", 
        value: browserCount.toString() 
      },
      { 
        label: "Market Leader", 
        value: topBrowser ? topBrowser.label : "N/A" 
      },
      { 
        label: "Selected Month", 
        value: monthName 
      },
      { 
        label: "Market Share Leader", 
        value: topBrowser ? topBrowser.value : "0%", 
        type: "info" 
      }
    ]
  }, [currentData, dataKey, browserStats, selectedMonth, monthOptions])

  // Don't render until mounted to prevent hydration issues
  if (!isMounted) {
    return null
  }

  return (
    <Card className="w-full">
      {/* Header with Title and Month Selector */}
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          {/* Title Section */}
          <div>
            <CardTitle className="text-xl font-semibold">{title}</CardTitle>
            <CardDescription className="mt-1">{description}</CardDescription>
          </div>
          {/* Month Selector */}
          {monthOptions.length > 0 && (
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

      {/* Content with Chart and Statistics */}
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chart Section */}
          <div className="flex justify-center">
            <ChartRadialBase
              data={currentData}
              config={chartConfig}
              dataKey={dataKey}
              categoryKey={categoryKey}
              height={height}
              showTooltip={showTooltip}
              className="w-full max-w-[300px]"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={startAngle}
              endAngle={endAngle}
              cornerRadius={cornerRadius}
              tooltipCursor={tooltipCursor}
              defaultColorHue={defaultColorHue}
              defaultColorSaturation={defaultColorSaturation}
              defaultColorLightness={defaultColorLightness}
              colorFallbackEnabled={colorFallbackEnabled}
            />
          </div>
          
          {/* Statistics Section */}
          <div className="space-y-6">
            {/* Browser Statistics */}
            {browserStats.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">
                  TOP BROWSERS
                </h3>
                <div className="space-y-3">
                  {browserStats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: stat.color }}
                        />
                        <span className="text-sm font-medium">{stat.label}</span>
                      </div>
                      <div className="text-sm font-semibold">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Summary Section */}
            {summaryMetrics.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">
                  MONTHLY SUMMARY
                </h3>
                <div className="space-y-3">
                  {summaryMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {metric.label}
                      </span>
                      <span 
                        className={`text-sm font-semibold ${
                          metric.type === "success" ? "text-green-600" : 
                          metric.type === "info" ? "text-blue-600" : ""
                        }`}
                      >
                        {metric.value}
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
  )
} 