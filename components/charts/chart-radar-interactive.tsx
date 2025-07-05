"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
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

export const description = "An interactive radar chart with month selector"

// Default interactive radar chart data - performance metrics per month
const defaultChartData = {
  january: [
    { metric: "Performance", score: 186 },
    { metric: "Security", score: 305 },
    { metric: "Accessibility", score: 237 },
    { metric: "SEO", score: 273 },
    { metric: "Best Practices", score: 209 },
    { metric: "PWA", score: 214 },
  ],
  february: [
    { metric: "Performance", score: 205 },
    { metric: "Security", score: 280 },
    { metric: "Accessibility", score: 245 },
    { metric: "SEO", score: 290 },
    { metric: "Best Practices", score: 195 },
    { metric: "PWA", score: 230 },
  ],
  march: [
    { metric: "Performance", score: 190 },
    { metric: "Security", score: 320 },
    { metric: "Accessibility", score: 260 },
    { metric: "SEO", score: 285 },
    { metric: "Best Practices", score: 220 },
    { metric: "PWA", score: 195 },
  ],
  april: [
    { metric: "Performance", score: 220 },
    { metric: "Security", score: 295 },
    { metric: "Accessibility", score: 275 },
    { metric: "SEO", score: 310 },
    { metric: "Best Practices", score: 240 },
    { metric: "PWA", score: 250 },
  ],
  may: [
    { metric: "Performance", score: 235 },
    { metric: "Security", score: 315 },
    { metric: "Accessibility", score: 290 },
    { metric: "SEO", score: 295 },
    { metric: "Best Practices", score: 255 },
    { metric: "PWA", score: 270 },
  ],
  june: [
    { metric: "Performance", score: 250 },
    { metric: "Security", score: 330 },
    { metric: "Accessibility", score: 305 },
    { metric: "SEO", score: 325 },
    { metric: "Best Practices", score: 275 },
    { metric: "PWA", score: 285 },
  ],
}

const defaultChartConfig = {
  score: { label: "Score", color: "var(--chart-1)" },
  january: { label: "January" },
  february: { label: "February" },
  march: { label: "March" },
  april: { label: "April" },
  may: { label: "May" },
  june: { label: "June" },
} satisfies ChartConfig

export interface ChartRadarInteractiveProps {
  data?: any
  config?: ChartConfig
  className?: string
}

// Internal chart component
function ChartRadarInteractiveInternal({ 
  data = defaultChartData,
  config = defaultChartConfig,
  className = ""
}: ChartRadarInteractiveProps) {
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
    // Fallback for simple array data structure
    return Array.isArray(data) ? data : []
  }, [data, activeMonth])
  
  // Dynamically detect keys from current data
  const categoryKey = currentData.length > 0 ? 
    Object.keys(currentData[0]).find(key => typeof currentData[0][key] === 'string') || 'metric' : 'metric'
  const valueKey = currentData.length > 0 ? 
    Object.keys(currentData[0]).find(key => typeof currentData[0][key] === 'number') || 'score' : 'score'
  
  return (
    <div className={`w-full space-y-6 ${className}`}>
      {/* Header with dropdown - properly spaced */}
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1 flex-1">
            <h3 className="text-xl font-semibold tracking-tight">Interactive Radar Chart</h3>
            <p className="text-sm text-muted-foreground">Monthly performance metrics analysis</p>
          </div>
          <Select value={activeMonth} onValueChange={setActiveMonth}>
            <SelectTrigger className="w-[140px] h-9">
              <SelectValue placeholder="Select month" />
            </SelectTrigger>
            <SelectContent align="end">
              {months.map((month) => {
                const configItem = config[month as keyof typeof config]
                
                return (
                  <SelectItem key={month} value={month}>
                    <div className="flex items-center gap-2 text-sm">
                      <span
                        className="flex h-3 w-3 shrink-0 rounded-sm"
                        style={{ backgroundColor: "hsl(var(--chart-1))" }}
                      />
                      {configItem?.label || month.charAt(0).toUpperCase() + month.slice(1)}
                    </div>
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {/* Chart container with proper spacing */}
      <div className="w-full">
        <ChartContainer config={config} className="mx-auto aspect-square max-h-[280px]">
          <RadarChart data={currentData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey={categoryKey} />
            <PolarGrid />
            <Radar
              dataKey={valueKey}
              fill="hsl(var(--chart-1))"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </div>
    </div>
  )
}

// Export dynamic component with SSR disabled to prevent hydration issues
export const ChartRadarInteractive = dynamic(() => Promise.resolve(ChartRadarInteractiveInternal), {
  ssr: false,
  loading: () => (
    <div className="mx-auto aspect-square max-h-[300px] flex items-center justify-center text-muted-foreground">
      Loading chart...
    </div>
  ),
}) 