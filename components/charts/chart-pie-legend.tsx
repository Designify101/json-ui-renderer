"use client"

import dynamic from "next/dynamic"
import { Pie, PieChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

export const description = "A pie chart with a legend"

// Default pie chart data - browser usage statistics
const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

interface ChartPieLegendProps {
  data?: any[]
  config?: any
  legendClassName?: string
}

// Internal chart component
function ChartPieLegendInternal({ 
  data = chartData, 
  config = chartConfig,
  legendClassName = "-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
}: ChartPieLegendProps) {
  // Dynamically detect the category key (first string field) and value key (first numeric field)
  const categoryKey = data.length > 0 ? Object.keys(data[0]).find(key => typeof data[0][key] === 'string') || 'browser' : 'browser'
  const valueKey = data.length > 0 ? Object.keys(data[0]).find(key => typeof data[0][key] === 'number') || 'visitors' : 'visitors'
  
  // Add fill colors dynamically if not present
  const processedData = data.map((item, index) => ({
    ...item,
    fill: item.fill || config[item[categoryKey]]?.color || `hsl(var(--chart-${(index % 5) + 1}))`
  }))

  return (
    <ChartContainer
      config={config}
      className="mx-auto aspect-square max-h-[300px]"
    >
      <PieChart>
        <Pie 
          data={processedData} 
          dataKey={valueKey} 
          nameKey={categoryKey}
        />
        <ChartLegend
          // @ts-ignore - ChartLegendContent is correctly used with nameKey prop
          content={<ChartLegendContent nameKey={categoryKey} />}
          className={legendClassName}
        />
      </PieChart>
    </ChartContainer>
  )
}

// Export dynamic component with SSR disabled to prevent hydration issues
export const ChartPieLegend = dynamic(() => Promise.resolve(ChartPieLegendInternal), {
  ssr: false,
  loading: () => (
    <div className="h-[300px] w-full flex items-center justify-center text-muted-foreground">
      Loading chart...
    </div>
  ),
}) 