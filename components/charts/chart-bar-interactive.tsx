"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "An interactive bar chart"

const chartData = [
  { date: "2024-04-01", desktop: 222, mobile: 150 },
  { date: "2024-04-02", desktop: 97, mobile: 180 },
  { date: "2024-04-03", desktop: 167, mobile: 120 },
  { date: "2024-04-04", desktop: 242, mobile: 260 },
  { date: "2024-04-05", desktop: 373, mobile: 290 },
  { date: "2024-04-06", desktop: 301, mobile: 340 },
  { date: "2024-04-07", desktop: 245, mobile: 180 },
  { date: "2024-04-08", desktop: 409, mobile: 320 },
  { date: "2024-04-09", desktop: 59, mobile: 110 },
  { date: "2024-04-10", desktop: 261, mobile: 190 },
  { date: "2024-04-11", desktop: 327, mobile: 350 },
  { date: "2024-04-12", desktop: 292, mobile: 210 },
  { date: "2024-04-13", desktop: 342, mobile: 380 },
  { date: "2024-04-14", desktop: 137, mobile: 220 },
  { date: "2024-04-15", desktop: 120, mobile: 170 },
  { date: "2024-04-16", desktop: 138, mobile: 190 },
  { date: "2024-04-17", desktop: 446, mobile: 360 },
  { date: "2024-04-18", desktop: 364, mobile: 410 },
  { date: "2024-04-19", desktop: 243, mobile: 180 },
  { date: "2024-04-20", desktop: 89, mobile: 150 },
  { date: "2024-04-21", desktop: 137, mobile: 200 },
  { date: "2024-04-22", desktop: 224, mobile: 170 },
  { date: "2024-04-23", desktop: 138, mobile: 230 },
  { date: "2024-04-24", desktop: 387, mobile: 290 },
  { date: "2024-04-25", desktop: 215, mobile: 250 },
  { date: "2024-04-26", desktop: 75, mobile: 130 },
  { date: "2024-04-27", desktop: 383, mobile: 420 },
  { date: "2024-04-28", desktop: 122, mobile: 180 },
  { date: "2024-04-29", desktop: 315, mobile: 240 },
  { date: "2024-04-30", desktop: 454, mobile: 380 },
]

const chartConfig = {
  views: {
    label: "Page Views",
  },
  desktop: {
    label: "Desktop",
    color: "#3b82f6", // blue-500 - works in both themes
  },
  mobile: {
    label: "Mobile", 
    color: "#f97316", // orange-500 - works in both themes
  },
} satisfies ChartConfig

interface ChartBarInteractiveProps {
  data?: any[]
  config?: any
  footer?: {
    title?: string
    subtitle?: string
  }
}

export function ChartBarInteractive({ data = chartData, config = chartConfig, footer }: ChartBarInteractiveProps) {
  // Dynamically detect the category key (first string field) and numeric keys
  const categoryKey = data.length > 0 ? Object.keys(data[0]).find(key => typeof data[0][key] === 'string') || 'date' : 'date'
  const numericKeys = data.length > 0 ? Object.keys(data[0]).filter(key => typeof data[0][key] === 'number') : ['desktop', 'mobile']
  
  // Use first numeric key as default active chart
  const [activeChart, setActiveChart] =
    React.useState<string>(numericKeys[0] || "desktop")

  const total = React.useMemo(
    () => {
      const totals: Record<string, number> = {}
      numericKeys.forEach(key => {
        totals[key] = data.reduce((acc: number, curr: any) => acc + (curr[key] || 0), 0)
      })
      return totals
    },
    [data, numericKeys]
  )

  return (
    <Card className="py-0">
      <CardHeader className="flex flex-col items-stretch border-b !p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:!py-0">
          <CardTitle>Bar Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {numericKeys.map((key) => {
            return (
              <button
                key={key}
                data-active={activeChart === key}
                className="data-[active=true]:bg-muted/50 relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6"
                onClick={() => setActiveChart(key)}
              >
                <span className="text-muted-foreground text-xs">
                  {config[key]?.label || key.charAt(0).toUpperCase() + key.slice(1)}
                </span>
                <span className="text-lg leading-none font-bold sm:text-3xl">
                  {total[key]?.toLocaleString() || '0'}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={config}
          className="aspect-auto h-[250px] w-full"
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
              dataKey={categoryKey}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                // Try to format as date if it looks like a date, otherwise return as is
                if (typeof value === 'string' && value.match(/^\d{4}-\d{2}-\d{2}/)) {
                  const date = new Date(value)
                  if (!isNaN(date.getTime())) {
                    return date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }
                }
                return typeof value === 'string' && value.length > 8 ? value.slice(0, 8) : value
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    // Try to format as date if it looks like a date, otherwise return as is
                    if (typeof value === 'string' && value.match(/^\d{4}-\d{2}-\d{2}/)) {
                      const date = new Date(value)
                      if (!isNaN(date.getTime())) {
                        return date.toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })
                      }
                    }
                    return value
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={config[activeChart]?.color || "#3b82f6"} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      {footer && (
        <CardFooter className="flex flex-col items-start gap-2 text-sm text-left">
          {footer.title && (
            <div className="flex gap-2 leading-none font-medium text-left">
              {footer.title} <TrendingUp className="h-4 w-4" />
            </div>
          )}
          {footer.subtitle && (
            <div className="text-muted-foreground leading-none text-left">
              {footer.subtitle}
            </div>
          )}
        </CardFooter>
      )}
    </Card>
  )
} 