"use client"

import dynamic from "next/dynamic"
import { Bar, BarChart, CartesianGrid, Cell, LabelList } from "recharts"

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

export const description = "A bar chart with negative values showing profit/loss"

// Unique financial data showing quarterly performance
const chartData = [
  { quarter: "Q1 2023", profit: 15600 },
  { quarter: "Q2 2023", profit: -8200 },
  { quarter: "Q3 2023", profit: 22400 },
  { quarter: "Q4 2023", profit: -5100 },
  { quarter: "Q1 2024", profit: 18900 },
  { quarter: "Q2 2024", profit: 31200 },
]

const chartConfig = {
  profit: {
    label: "Profit/Loss ($)",
    color: "#f97316", // orange-500 - works in both themes
  },
} satisfies ChartConfig

interface ChartBarNegativeProps {
  data?: any[]
  config?: any
  footer?: {
    title?: string
    subtitle?: string
  }
}

// Internal chart component
function ChartBarNegativeInternal({ data = chartData, config = chartConfig }: Omit<ChartBarNegativeProps, 'footer'>) {
  // Dynamically detect the category key (first string field) and value key (first numeric field)
  const categoryKey = data.length > 0 ? Object.keys(data[0]).find(key => typeof data[0][key] === 'string') || 'quarter' : 'quarter'
  const valueKey = data.length > 0 ? Object.keys(data[0]).find(key => typeof data[0][key] === 'number') || 'profit' : 'profit'
  
  return (
    <ChartContainer config={config}>
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel hideIndicator />}
        />
        <Bar dataKey={valueKey}>
          <LabelList position="top" dataKey={categoryKey} fillOpacity={1} />
          {data.map((item, index) => (
            <Cell
              key={item[categoryKey] || index}
              fill={item[valueKey] > 0 ? "#10b981" : "#ef4444"} // green-500 for positive, red-500 for negative
            />
          ))}
        </Bar>
      </BarChart>
    </ChartContainer>
  )
}

// Export dynamic component with SSR disabled to prevent hydration issues
export const ChartBarNegative = dynamic(() => Promise.resolve(ChartBarNegativeInternal), {
  ssr: false,
  loading: () => (
    <div className="h-[250px] w-full flex items-center justify-center text-muted-foreground">
      Loading chart...
    </div>
  ),
}) 