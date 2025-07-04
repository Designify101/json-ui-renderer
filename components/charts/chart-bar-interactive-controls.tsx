"use client"

import * as React from "react"

interface ChartBarInteractiveControlsProps {
  data?: any[]
  config?: any
  activeChart?: string
  onActiveChartChange?: (chart: string) => void
}

export function ChartBarInteractiveControls({ 
  data = [], 
  config = {},
  activeChart = "desktop",
  onActiveChartChange
}: ChartBarInteractiveControlsProps) {
  // Dynamically detect numeric keys for controls
  const numericKeys = data.length > 0 ? Object.keys(data[0]).filter(key => typeof data[0][key] === 'number') : ['desktop', 'mobile']
  
  // Calculate totals for each metric
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
    <div className="flex">
      {numericKeys.map((key) => {
        const isActive = activeChart === key
        return (
          <button
            key={key}
            data-active={isActive}
            className={`relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6 hover:bg-muted/50 transition-colors ${
              isActive 
                ? 'bg-muted/50 [&[data-active=true]>*]:text-foreground' 
                : '[&>*]:text-muted-foreground'
            }`}
            onClick={() => onActiveChartChange?.(key)}
          >
            <span className={`text-xs transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
              {config[key]?.label || key.charAt(0).toUpperCase() + key.slice(1)}
            </span>
            <span className={`text-lg leading-none font-bold sm:text-3xl transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
              {total[key]?.toLocaleString() || '0'}
            </span>
          </button>
        )
      })}
    </div>
  )
} 