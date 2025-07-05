"use client"

import dynamic from "next/dynamic"
import { Pie, PieChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A pie chart with labels"

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

interface ChartPieLabelProps {
  data?: any[]
  config?: any
  showCustomLabel?: boolean
}

// Internal chart component
function ChartPieLabelInternal({ 
  data = chartData, 
  config = chartConfig,
  showCustomLabel = false
}: ChartPieLabelProps) {
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
      className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square max-h-[250px] pb-0"
    >
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <Pie 
          data={processedData} 
          dataKey={valueKey} 
          nameKey={categoryKey}
          label={showCustomLabel ? ({ payload, ...props }) => {
            return (
              <text
                cx={props.cx}
                cy={props.cy}
                x={props.x}
                y={props.y}
                textAnchor={props.textAnchor}
                dominantBaseline={props.dominantBaseline}
                fill="hsl(var(--foreground))"
              >
                {payload[valueKey]}
              </text>
            )
          } : true}
          labelLine={showCustomLabel ? false : undefined}
        />
      </PieChart>
    </ChartContainer>
  )
}

// Export dynamic component with SSR disabled to prevent hydration issues
export const ChartPieLabel = dynamic(() => Promise.resolve(ChartPieLabelInternal), {
  ssr: false,
  loading: () => (
    <div className="h-[250px] w-full flex items-center justify-center text-muted-foreground">
      Loading chart...
    </div>
  ),
}) 