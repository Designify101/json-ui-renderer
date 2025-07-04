interface ChartRendererProps {
  element: any
  className?: string
}

export function ChartRenderer({ element, className }: ChartRendererProps) {
  const { chartType, data, config = {} } = element

  const renderChart = () => {
    switch (chartType) {
      case "bar":
        return renderBarChart(data, config)
      case "line":
        return renderLineChart(data, config)
      case "candlestick":
        return renderCandlestickChart(data, config)
      default:
        return <div>Chart type "{chartType}" not supported</div>
    }
  }

  return <div className={className}>{renderChart()}</div>
}

const renderBarChart = (data: number[], config: any) => {
  if (!data || data.length === 0) return <div>No data for bar chart</div>

  const maxValue = Math.max(...data)

  return (
    <div className="flex items-end h-16 gap-0.5">
      {data.map((value, index) => {
        const heightPercentage = maxValue > 0 ? (value / maxValue) * 100 : 0
        const height = Math.max(8, (heightPercentage / 100) * 64)

        return (
          <div
            key={index}
            className="flex-1 bg-indigo-500 rounded-t-[1px] min-w-[3px]"
            style={{ height: `${height}px` }}
          />
        )
      })}
    </div>
  )
}

const renderLineChart = (data: number[], config: any) => {
  if (!data || data.length === 0) return <div>No data for line chart</div>

  const maxValue = Math.max(...data)
  const minValue = Math.min(...data)
  const range = maxValue - minValue || 1
  const width = 300
  const height = 120
  const padding = 20

  // Generate SVG path
  const points = data.map((value, index) => {
    const x = padding + (index / (data.length - 1)) * (width - 2 * padding)
    const y = padding + ((maxValue - value) / range) * (height - 2 * padding)
    return `${x},${y}`
  })

  const pathData = `M ${points.join(" L ")}`

  // Generate area fill path
  const areaPoints = [
    `${padding},${height - padding}`, // Start at bottom left
    ...points,
    `${width - padding},${height - padding}`, // End at bottom right
  ]
  const areaPathData = `M ${areaPoints.join(" L ")} Z`

  return (
    <div className="relative">
      <svg width={width} height={height} className="overflow-visible">
        {/* Area fill */}
        <path d={areaPathData} fill="url(#gradient)" opacity="0.3" />

        {/* Line */}
        <path
          d={pathData}
          fill="none"
          stroke={config.colors?.[0] || "#f97316"}
          strokeWidth={config.strokeWidth || 2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={config.colors?.[0] || "#f97316"} stopOpacity="0.8" />
            <stop offset="100%" stopColor={config.colors?.[0] || "#f97316"} stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Tooltip */}
      {config.tooltip && (
        <div
          className="absolute bg-black text-white px-2 py-1 rounded text-sm pointer-events-none"
          style={{
            left: config.tooltip.position.x,
            top: config.tooltip.position.y,
            transform: "translate(-50%, -100%)",
          }}
        >
          {config.tooltip.value}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black" />
        </div>
      )}

      {/* X-axis labels */}
      {config.axisLabels && (
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          {config.axisLabels.map((label: string, index: number) => (
            <span key={index}>{label}</span>
          ))}
        </div>
      )}
    </div>
  )
}

const renderCandlestickChart = (data: any[], config: any) => {
  if (!data || data.length === 0) return <div>No data for candlestick chart</div>

  return (
    <div className="flex items-end h-20 gap-1">
      {data.map((item, index) => {
        const isPositive = item.type === "positive"
        const height = Math.max(8, item.value * 2) // Scale the height

        return (
          <div
            key={index}
            className={`w-2 rounded-sm ${isPositive ? "bg-orange-500" : "bg-gray-800"}`}
            style={{ height: `${height}px` }}
          />
        )
      })}
    </div>
  )
}
