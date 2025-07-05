"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart, Sector, RadialBar, RadialBarChart } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
import { assignChartColors, createChartCSSVars } from "@/lib/chart-colors"

export const description = "An interactive radial chart"

// Default interactive radial chart data
const defaultChartData = {
  january: [
    { category: "chrome", value: 4275 },
    { category: "safari", value: 2890 },
    { category: "firefox", value: 1567 },
    { category: "edge", value: 1230 },
    { category: "opera", value: 680 },
    { category: "other", value: 458 },
  ],
  february: [
    { category: "chrome", value: 4520 },
    { category: "safari", value: 2950 },
    { category: "firefox", value: 1420 },
    { category: "edge", value: 1380 },
    { category: "opera", value: 720 },
    { category: "other", value: 510 },
  ],
  march: [
    { category: "chrome", value: 4890 },
    { category: "safari", value: 3120 },
    { category: "firefox", value: 1595 },
    { category: "edge", value: 1450 },
    { category: "opera", value: 785 },
    { category: "other", value: 460 },
  ],
  april: [
    { category: "chrome", value: 5105 },
    { category: "safari", value: 3280 },
    { category: "firefox", value: 1675 },
    { category: "edge", value: 1520 },
    { category: "opera", value: 840 },
    { category: "other", value: 580 },
  ],
  may: [
    { category: "chrome", value: 5340 },
    { category: "safari", value: 3410 },
    { category: "firefox", value: 1565 },
    { category: "edge", value: 1480 },
    { category: "opera", value: 920 },
    { category: "other", value: 685 },
  ],
  june: [
    { category: "chrome", value: 5680 },
    { category: "safari", value: 3580 },
    { category: "firefox", value: 1455 },
    { category: "edge", value: 1420 },
    { category: "opera", value: 1050 },
    { category: "other", value: 815 },
  ],
}

const defaultChartConfig = {
  value: { label: "Monthly Visitors" },
  chrome: { label: "Chrome" },
  safari: { label: "Safari" },
  firefox: { label: "Firefox" },
  edge: { label: "Microsoft Edge" },
  opera: { label: "Opera" },
  other: { label: "Other Browsers" },
  january: { label: "January" },
  february: { label: "February" },
  march: { label: "March" },
  april: { label: "April" },
  may: { label: "May" },
  june: { label: "June" },
} satisfies ChartConfig

interface ChartRadialInteractiveProps {
  data?: any
  config?: any
  innerRadius?: number
  strokeWidth?: number
  className?: string
}

// Internal chart component
function ChartRadialInteractiveInternal({ 
  data = defaultChartData,
  config = defaultChartConfig,
  innerRadius = 60,
  strokeWidth = 5,
  className = ""
}: ChartRadialInteractiveProps) {
  const id = "radial-interactive"
  
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
  
  // Add dynamic colors to data using shared utility
  const processedData = assignChartColors(currentData)
  
  // Calculate total for center text and percentages
  const totalValue = React.useMemo(() => {
    return processedData.reduce((acc: number, item: any) => acc + (item[valueKey] || 0), 0)
  }, [processedData, valueKey])
  
  // Calculate percentages and add them to processed data
  const dataWithPercentages = React.useMemo(() => {
    return processedData.map((item: any) => ({
      ...item,
      percentage: totalValue > 0 ? ((item[valueKey] / totalValue) * 100).toFixed(1) : 0
    }))
  }, [processedData, valueKey, totalValue])
  
  // Get top 3 browsers for sidebar stats
  const topBrowsers = React.useMemo(() => {
    return [...dataWithPercentages]
      .sort((a: any, b: any) => b[valueKey] - a[valueKey])
      .slice(0, 3)
  }, [dataWithPercentages, valueKey])
  
  // Create CSS variables for the current colors using shared utility
  const chartCSSVars = React.useMemo(() => {
    return createChartCSSVars(processedData, categoryKey)
  }, [processedData, categoryKey])
  
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex items-center space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Radial Chart - Interactive</CardTitle>
          <CardDescription>
            {config[activeMonth]?.label || activeMonth.charAt(0).toUpperCase() + activeMonth.slice(1)} 2024
          </CardDescription>
        </div>
        <div className="flex px-6 py-3">
          <Select value={activeMonth} onValueChange={setActiveMonth}>
            <SelectTrigger 
              className="w-[160px] rounded-lg sm:ml-auto" 
              aria-label="Select a month"
            >
              <SelectValue placeholder="Select month" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              {months.map((month) => (
                <SelectItem key={month} value={month} className="rounded-lg">
                  {config[month]?.label || month.charAt(0).toUpperCase() + month.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-6">
        <div className="flex flex-col xl:flex-row gap-4">
          {/* Chart Section */}
          <div className="flex-1 flex justify-center xl:justify-start min-h-[350px] xl:min-h-[400px]">
            <div data-chart={id} className={`w-full ${className}`} style={chartCSSVars}>
              <ChartStyle id={id} config={config} />
              <ChartContainer
                id={id}
                config={config}
                className="aspect-square w-full max-w-[350px] sm:max-w-[380px] xl:max-w-[400px] h-full"
              >
                <RadialBarChart
                  data={processedData}
                  innerRadius={innerRadius}
                  outerRadius={140}
                >
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel nameKey={categoryKey} />}
                  />
                  <RadialBar dataKey={valueKey} background />
                </RadialBarChart>
              </ChartContainer>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="flex-1 xl:max-w-[320px] space-y-4 xl:pl-4">
            <div>
              <h4 className="font-semibold text-sm text-muted-foreground mb-3 tracking-wide uppercase">
                Top Browsers
              </h4>
              <div className="space-y-2">
                {topBrowsers.map((browser: any, index: number) => (
                  <div key={browser[categoryKey]} className="flex items-center justify-between p-3 rounded-lg bg-muted dark:bg-gradient-to-r dark:from-muted/30 dark:to-muted/60 border-2 border-muted/70 dark:border-muted/30 hover:border-muted dark:hover:border-muted/50 transition-colors shadow-md dark:shadow-sm">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full shadow-sm border-2 border-white/50 dark:border-white/20" 
                        style={{ backgroundColor: browser.fill }}
                      />
                      <span className="text-sm font-medium capitalize text-foreground">
                        {config[browser[categoryKey]]?.label || browser[categoryKey]}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-foreground">
                        {browser.percentage}%
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {browser[valueKey].toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-muted/30">
              <h5 className="font-semibold text-sm text-muted-foreground mb-3 tracking-wide uppercase">
                Monthly Summary
              </h5>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-1">
                  <span className="text-sm text-muted-foreground">Total Visitors</span>
                  <span className="font-bold text-foreground">{totalValue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-sm text-muted-foreground">Browser Types</span>
                  <span className="font-bold text-foreground">{processedData.length}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-sm text-muted-foreground">Market Leader</span>
                  <span className="font-bold text-foreground capitalize">
                    {config[topBrowsers[0]?.[categoryKey]]?.label || topBrowsers[0]?.[categoryKey]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Information */}
        <div className="mt-6 pt-4 border-t border-muted/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="text-center p-3 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 border border-blue-200/50 dark:border-blue-800/30">
              <div className="text-lg sm:text-xl font-bold text-blue-700 dark:text-blue-300">
                {((topBrowsers[0]?.[valueKey] / totalValue) * 100 || 0).toFixed(1)}%
              </div>
              <div className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-1">
                Market Share Leader
              </div>
            </div>
            <div className="text-center p-3 rounded-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 border border-green-200/50 dark:border-green-800/30">
              <div className="text-lg sm:text-xl font-bold text-green-700 dark:text-green-300">
                +{Math.round(Math.random() * 15 + 5)}%
              </div>
              <div className="text-xs text-green-600 dark:text-green-400 font-medium mt-1">
                Growth vs Last Month
              </div>
            </div>
            <div className="text-center p-3 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 border border-purple-200/50 dark:border-purple-800/30">
              <div className="text-lg sm:text-xl font-bold text-purple-700 dark:text-purple-300">
                {Math.round(totalValue / 30).toLocaleString()}
              </div>
              <div className="text-xs text-purple-600 dark:text-purple-400 font-medium mt-1">
                Avg Daily Visitors
              </div>
            </div>
            <div className="text-center p-3 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 border border-orange-200/50 dark:border-orange-800/30">
              <div className="text-lg sm:text-xl font-bold text-orange-700 dark:text-orange-300">
                {processedData.length}
              </div>
              <div className="text-xs text-orange-600 dark:text-orange-400 font-medium mt-1">
                Active Browsers
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Dynamic import wrapper to avoid SSR issues
const ChartRadialInteractiveDynamic = dynamic(
  () => Promise.resolve(ChartRadialInteractiveInternal),
  { ssr: false }
)

export function ChartRadialInteractive({ data, config, innerRadius, strokeWidth, className }: ChartRadialInteractiveProps) {
  return <ChartRadialInteractiveDynamic data={data} config={config} innerRadius={innerRadius} strokeWidth={strokeWidth} className={className} />
} 