import type { ChartCardData } from "@/types/graphics"

interface ChartCardProps {
  data: ChartCardData
}

export function ChartCard({ data }: ChartCardProps) {
  const { title, description, chart } = data

  const renderChart = () => {
    if (chart.type === "bar") {
      const maxValue = Math.max(...chart.data)
      return (
        <div className="space-y-3">
          {chart.data.map((value: number, index: number) => {
            const width = (value / maxValue) * 100
            const label = chart.labels?.[index] || `Item ${index + 1}`
            const color = chart.colors?.[index] || "#3B82F6"

            return (
              <div key={index} className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-600 w-16 text-right">{label}</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-500"
                    style={{
                      width: `${width}%`,
                      backgroundColor: color,
                    }}
                  />
                </div>
                <span className="text-sm text-gray-500 w-8">{value}</span>
              </div>
            )
          })}
        </div>
      )
    }

    return <div className="text-center text-gray-500 py-8">Chart type "{chart.type}" not implemented yet</div>
  }

  return (
    <div
      className={`
      w-full max-w-md p-6 rounded-lg border shadow-sm bg-white
      ${data.responsive !== false ? "min-w-0" : ""}
      ${data.className || ""}
    `}
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        {description && <p className="text-sm text-gray-600">{description}</p>}
      </div>

      <div className="mt-4">{renderChart()}</div>
    </div>
  )
}
