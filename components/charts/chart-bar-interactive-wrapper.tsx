"use client"

import * as React from "react"
import { ChartBarInteractiveControls } from "./chart-bar-interactive-controls"
import { ChartBarInteractiveChart } from "./chart-bar-interactive-chart"

interface ChartBarInteractiveWrapperProps {
  data?: any[]
  config?: any
  className?: string
  part?: 'controls' | 'chart'
}

export function ChartBarInteractiveWrapper({ 
  data = [], 
  config = {},
  className = "aspect-auto h-[250px] w-full",
  part = 'controls'
}: ChartBarInteractiveWrapperProps) {
  // Detect available chart keys from data
  const chartKeys = data.length > 0 ? Object.keys(data[0]).filter(key => typeof data[0][key] === 'number') : ['desktop', 'mobile']
  
  // State for active chart - start with consistent value for SSR
  const [activeChart, setActiveChart] = React.useState<string>(chartKeys[0] || 'desktop')
  const [mounted, setMounted] = React.useState(false)

  // Only access localStorage after component mounts to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('interactive-chart-active')
      if (stored && chartKeys.includes(stored)) {
        setActiveChart(stored)
      }
    }
  }, [chartKeys])

  const handleActiveChartChange = (chart: string) => {
    setActiveChart(chart)
    if (mounted && typeof window !== 'undefined') {
      localStorage.setItem('interactive-chart-active', chart)
      // Dispatch custom event to sync other components
      window.dispatchEvent(new CustomEvent('interactive-chart-change', { detail: chart }))
    }
  }

  // Listen for changes from other components
  React.useEffect(() => {
    if (!mounted) return
    
    const handleSync = (event: CustomEvent) => {
      setActiveChart(event.detail)
    }
    window.addEventListener('interactive-chart-change', handleSync as EventListener)
    return () => window.removeEventListener('interactive-chart-change', handleSync as EventListener)
  }, [mounted])

  if (part === 'controls') {
    return (
      <ChartBarInteractiveControls 
        data={data}
        config={config}
        activeChart={activeChart}
        onActiveChartChange={handleActiveChartChange}
      />
    )
  }

  return (
    <ChartBarInteractiveChart 
      data={data}
      config={config}
      className={className}
      activeChart={activeChart}
    />
  )
} 