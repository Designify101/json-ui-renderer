import type React from "react"
import type { GraphicData } from "@/types/graphics"
import { PerformanceCard } from "./performance-card"
import { StatCard } from "./stat-card"
import { ChartCard } from "./chart-card"

interface GraphicRendererProps {
  data: GraphicData
  fallback?: React.ReactNode
}

export function GraphicRenderer({ data, fallback }: GraphicRendererProps) {
  // Validation
  if (!data || !data.type) {
    return (
      fallback || (
        <div className="p-4 border border-red-200 rounded-lg bg-red-50">
          <p className="text-red-600 text-sm">Invalid graphic data</p>
        </div>
      )
    )
  }

  // Render based on type
  switch (data.type) {
    case "performance-card":
      return <PerformanceCard data={data} />

    case "stat-card":
      return <StatCard data={data} />

    case "chart-card":
      return <ChartCard data={data} />

    default:
      return (
        fallback || (
          <div className="p-4 border border-yellow-200 rounded-lg bg-yellow-50">
            <p className="text-yellow-600 text-sm">Unknown graphic type: {data.type}</p>
          </div>
        )
      )
  }
}
