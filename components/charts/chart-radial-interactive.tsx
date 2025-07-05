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
  data?: any
  config?: any
  className?: string
}

export function ChartRadialInteractive({ 
  data: propData, 
  config: propConfig, 
  className 
}: ChartRadialInteractiveProps) {
  const [selectedMonth, setSelectedMonth] = useState("january")
  // Track if component is mounted to prevent hydration issues
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Color palette that works well in both light and dark modes
  const colorPalette = {
    chrome: "#3b82f6",    // Blue - good contrast in both modes
    safari: "#10b981",    // Green - vibrant and accessible
    firefox: "#f59e0b",   // Orange - works well in both modes
    edge: "#8b5cf6",      // Purple - good visibility
    opera: "#ef4444",     // Red - strong contrast
    other: "#6b7280"      // Gray - neutral tone
  }

  // Default data - 12 months of browser usage data
  const defaultData = {
    january: [
      { browser: "chrome", visitors: 1260, fill: colorPalette.chrome },
      { browser: "safari", visitors: 570, fill: colorPalette.safari },
      { browser: "firefox", visitors: 367, fill: colorPalette.firefox },
      { browser: "edge", visitors: 173, fill: colorPalette.edge },
      { browser: "opera", visitors: 90, fill: colorPalette.opera },
    ],
    february: [
      { browser: "chrome", visitors: 1180, fill: colorPalette.chrome },
      { browser: "safari", visitors: 620, fill: colorPalette.safari },
      { browser: "firefox", visitors: 380, fill: colorPalette.firefox },
      { browser: "edge", visitors: 190, fill: colorPalette.edge },
      { browser: "opera", visitors: 85, fill: colorPalette.opera },
    ],
    march: [
      { browser: "chrome", visitors: 1350, fill: colorPalette.chrome },
      { browser: "safari", visitors: 590, fill: colorPalette.safari },
      { browser: "firefox", visitors: 400, fill: colorPalette.firefox },
      { browser: "edge", visitors: 165, fill: colorPalette.edge },
      { browser: "opera", visitors: 95, fill: colorPalette.opera },
    ],
    april: [
      { browser: "chrome", visitors: 1220, fill: colorPalette.chrome },
      { browser: "safari", visitors: 640, fill: colorPalette.safari },
      { browser: "firefox", visitors: 350, fill: colorPalette.firefox },
      { browser: "edge", visitors: 180, fill: colorPalette.edge },
      { browser: "opera", visitors: 110, fill: colorPalette.opera },
    ],
    may: [
      { browser: "chrome", visitors: 1420, fill: colorPalette.chrome },
      { browser: "safari", visitors: 580, fill: colorPalette.safari },
      { browser: "firefox", visitors: 420, fill: colorPalette.firefox },
      { browser: "edge", visitors: 200, fill: colorPalette.edge },
      { browser: "opera", visitors: 100, fill: colorPalette.opera },
    ],
    june: [
      { browser: "chrome", visitors: 1320, fill: colorPalette.chrome },
      { browser: "safari", visitors: 610, fill: colorPalette.safari },
      { browser: "firefox", visitors: 390, fill: colorPalette.firefox },
      { browser: "edge", visitors: 175, fill: colorPalette.edge },
      { browser: "opera", visitors: 105, fill: colorPalette.opera },
    ],
    july: [
      { browser: "chrome", visitors: 1450, fill: colorPalette.chrome },
      { browser: "safari", visitors: 550, fill: colorPalette.safari },
      { browser: "firefox", visitors: 410, fill: colorPalette.firefox },
      { browser: "edge", visitors: 195, fill: colorPalette.edge },
      { browser: "opera", visitors: 95, fill: colorPalette.opera },
    ],
    august: [
      { browser: "chrome", visitors: 1380, fill: colorPalette.chrome },
      { browser: "safari", visitors: 580, fill: colorPalette.safari },
      { browser: "firefox", visitors: 370, fill: colorPalette.firefox },
      { browser: "edge", visitors: 185, fill: colorPalette.edge },
      { browser: "opera", visitors: 85, fill: colorPalette.opera },
    ],
    september: [
      { browser: "chrome", visitors: 1520, fill: colorPalette.chrome },
      { browser: "safari", visitors: 600, fill: colorPalette.safari },
      { browser: "firefox", visitors: 430, fill: colorPalette.firefox },
      { browser: "edge", visitors: 210, fill: colorPalette.edge },
      { browser: "opera", visitors: 115, fill: colorPalette.opera },
    ],
    october: [
      { browser: "chrome", visitors: 1290, fill: colorPalette.chrome },
      { browser: "safari", visitors: 620, fill: colorPalette.safari },
      { browser: "firefox", visitors: 380, fill: colorPalette.firefox },
      { browser: "edge", visitors: 190, fill: colorPalette.edge },
      { browser: "opera", visitors: 120, fill: colorPalette.opera },
    ],
    november: [
      { browser: "chrome", visitors: 1460, fill: colorPalette.chrome },
      { browser: "safari", visitors: 570, fill: colorPalette.safari },
      { browser: "firefox", visitors: 400, fill: colorPalette.firefox },
      { browser: "edge", visitors: 205, fill: colorPalette.edge },
      { browser: "opera", visitors: 100, fill: colorPalette.opera },
    ],
    december: [
      { browser: "chrome", visitors: 1580, fill: colorPalette.chrome },
      { browser: "safari", visitors: 540, fill: colorPalette.safari },
      { browser: "firefox", visitors: 450, fill: colorPalette.firefox },
      { browser: "edge", visitors: 220, fill: colorPalette.edge },
      { browser: "opera", visitors: 110, fill: colorPalette.opera },
    ],
  }

  // Default config with real colors
  const defaultConfig = {
    visitors: { label: "Visitors" },
    chrome: { label: "Chrome", color: colorPalette.chrome },
    safari: { label: "Safari", color: colorPalette.safari },
    firefox: { label: "Firefox", color: colorPalette.firefox },
    edge: { label: "Edge", color: colorPalette.edge },
    opera: { label: "Opera", color: colorPalette.opera },
    other: { label: "Other", color: colorPalette.other },
  } satisfies ChartConfig

  // Use provided data or default data
  const monthlyData = propData || defaultData
  const chartConfig = propConfig || defaultConfig

  // Get current month's data
  const currentData = useMemo(() => {
    if (Array.isArray(monthlyData)) {
      return monthlyData
    }
    return (monthlyData as any)[selectedMonth] || (monthlyData as any)[Object.keys(monthlyData)[0]]
  }, [monthlyData, selectedMonth])

  // Helper function to get color for a category
  const getColorForCategory = (category: string): string => {
    return (colorPalette as any)[category] || colorPalette.other
  }

  // Dynamically detect data structure and normalize it
  const normalizedData = useMemo(() => {
    if (!currentData || !Array.isArray(currentData) || currentData.length === 0) {
      return []
    }

    // Check if data uses 'category' and 'value' (JSON template format)
    const hasCategory = currentData[0].hasOwnProperty('category')
    const hasValue = currentData[0].hasOwnProperty('value')
    
    if (hasCategory && hasValue) {
      // Convert JSON template format to component format with real colors
      return currentData.map((item: any, index: number) => ({
        browser: item.category,
        visitors: item.value,
        fill: getColorForCategory(item.category)
      }))
    }

    // Return as-is if already in correct format
    return currentData
  }, [currentData])

  // Calculate total visitors and percentages
  const totalVisitors = useMemo(() => {
    return normalizedData.reduce((sum: number, item: any) => {
      const value = typeof item.visitors === 'number' ? item.visitors : 0
      return sum + value
    }, 0)
  }, [normalizedData])

  const chartDataWithPercentages = useMemo(() => {
    return normalizedData.map((item: any) => ({
      ...item,
      percentage: totalVisitors > 0 ? Math.round((item.visitors / totalVisitors) * 100) : 0
    }))
  }, [normalizedData, totalVisitors])

  // Get available months for dropdown
  const availableMonths = useMemo(() => {
    if (Array.isArray(monthlyData)) {
      return ['january'] // fallback
    }
    return Object.keys(monthlyData)
  }, [monthlyData])

  const getMonthDisplayName = (month: string) => {
    return month.charAt(0).toUpperCase() + month.slice(1)
  }

  const getSelectedMonthLabel = () => {
    return getMonthDisplayName(selectedMonth)
  }

  // Get top browsers for the current month
  const topBrowsers = useMemo(() => {
    return chartDataWithPercentages
      .sort((a, b) => b.visitors - a.visitors)
      .slice(0, 3)
      .map(item => ({
        name: item.browser.charAt(0).toUpperCase() + item.browser.slice(1),
        percentage: item.percentage,
        visitors: item.visitors.toLocaleString(),
        color: item.fill
      }))
  }, [chartDataWithPercentages])

  return (
    <Card className={`pt-0 ${className || ""}`}>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Radial Chart - Interactive</CardTitle>
          <CardDescription>Monthly web traffic analysis with interactive controls</CardDescription>
        </div>
        {isMounted ? (
          <Select value={selectedMonth} onValueChange={setSelectedMonth}>
            <SelectTrigger className="w-[160px] rounded-lg sm:ml-auto" aria-label="Select month">
              <SelectValue placeholder={getSelectedMonthLabel()} />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              {availableMonths.map((month) => (
                <SelectItem key={month} value={month} className="rounded-lg">
                  {getMonthDisplayName(month)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ) : (
          // Fallback for SSR - show a placeholder that matches the select dimensions
          <div className="w-[160px] h-10 rounded-lg border border-input bg-background sm:ml-auto flex items-center px-3">
            <span className="text-sm text-muted-foreground">{getSelectedMonthLabel()}</span>
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-1 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chart Section */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[320px] w-full p-2"
            >
              <RadialBarChart data={chartDataWithPercentages} innerRadius={50} outerRadius={110}>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel nameKey="browser" />}
                />
                <RadialBar dataKey="visitors" background />
              </RadialBarChart>
            </ChartContainer>
            
            {/* Chart Summary */}
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold">{totalVisitors.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Total Visitors</div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="space-y-6">
            {/* Top Browsers */}
            <div>
              <h4 className="font-semibold text-sm text-muted-foreground mb-4 tracking-wide uppercase">
                Top Browsers
              </h4>
              <div className="space-y-3">
                {topBrowsers.map((browser, index) => (
                  <div
                    key={browser.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border/50 hover:bg-muted/70 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded-full border-2 border-white/50"
                        style={{ backgroundColor: browser.color }}
                      />
                      <span className="text-sm font-medium">{browser.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold">{browser.percentage}%</div>
                      <div className="text-xs text-muted-foreground">{browser.visitors}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Summary */}
            <div className="pt-4 border-t border-border/30">
              <h5 className="font-semibold text-sm text-muted-foreground mb-4 tracking-wide uppercase">
                Monthly Summary
              </h5>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Visitors</span>
                  <span className="text-sm font-semibold">{totalVisitors.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Browser Types</span>
                  <span className="text-sm font-semibold">{chartDataWithPercentages.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Market Leader</span>
                  <span className="text-sm font-semibold">{topBrowsers[0]?.name || 'N/A'}</span>
                </div>
              </div>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/30">
                <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  {topBrowsers[0]?.percentage || 0}%
                </div>
                <div className="text-xs text-blue-600/70 dark:text-blue-400/70">Market Share Leader</div>
              </div>
              <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800/30">
                <div className="text-lg font-bold text-green-600 dark:text-green-400">+15%</div>
                <div className="text-xs text-green-600/70 dark:text-green-400/70">Growth vs Last Month</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 