// Core types for the JSON-driven graphics system
export interface BaseGraphic {
  id: string
  type: string
  responsive?: boolean
  className?: string
}

export interface PerformanceCardData extends BaseGraphic {
  type: "performance-card"
  title: string
  description: string
  metric: {
    value: string | number
    change?: {
      value: string
      type: "positive" | "negative" | "neutral"
    }
  }
  chart?: {
    type: "bar" | "line" | "area"
    data: number[]
    color?: string
    gradient?: boolean
  }
  theme?: "light" | "dark"
}

export interface StatCardData extends BaseGraphic {
  type: "stat-card"
  title: string
  value: string | number
  subtitle?: string
  icon?: string
  color?: string
}

export interface ChartCardData extends BaseGraphic {
  type: "chart-card"
  title: string
  description?: string
  chart: {
    type: "bar" | "line" | "pie" | "doughnut"
    data: any[]
    labels?: string[]
    colors?: string[]
  }
}

export type GraphicData = PerformanceCardData | StatCardData | ChartCardData
