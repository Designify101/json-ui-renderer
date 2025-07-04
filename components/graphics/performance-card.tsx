import type { PerformanceCardData } from "@/types/graphics"

interface PerformanceCardProps {
  data: PerformanceCardData
}

export function PerformanceCard({ data }: PerformanceCardProps) {
  const { title, description, metric, chart, theme = "light" } = data

  // Generate bar chart from data
  const renderBarChart = () => {
    if (!chart || !chart.data || chart.data.length === 0) return null

    const maxValue = Math.max(...chart.data)
    const minHeight = 8 // Minimum height in pixels

    return (
      <div className="h-20 flex items-end gap-0.5 mt-4 px-1">
        {chart.data.map((value, index) => {
          const heightPercentage = maxValue > 0 ? (value / maxValue) * 100 : 0
          const height = Math.max(minHeight, (heightPercentage / 100) * 64) // 64px = h-16

          return (
            <div key={index} className="flex-1 flex items-end justify-center min-w-[2px]">
              <div
                className={`w-full rounded-t-[1px] transition-all duration-300 ${
                  chart.gradient ? "bg-gradient-to-t from-blue-400 via-blue-500 to-blue-600" : "bg-blue-500"
                }`}
                style={{
                  height: `${height}px`,
                  minHeight: `${minHeight}px`,
                }}
              />
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div
      className={`
      w-full max-w-sm p-6 rounded-lg border shadow-sm
      ${theme === "dark" ? "bg-gray-900 border-gray-800 text-white" : "bg-white border-gray-200 text-gray-900"}
      ${data.responsive !== false ? "min-w-0" : ""}
      ${data.className || ""}
    `}
    >
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>{description}</p>
      </div>

      {/* Metric */}
      <div className="mb-2">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-blue-600">{metric.value}</span>
          {metric.change && (
            <span
              className={`text-sm font-medium ${
                metric.change.type === "positive"
                  ? "text-green-600"
                  : metric.change.type === "negative"
                    ? "text-red-600"
                    : "text-gray-600"
              }`}
            >
              {metric.change.value}
            </span>
          )}
        </div>
      </div>

      {/* Chart */}
      {renderBarChart()}
    </div>
  )
}
