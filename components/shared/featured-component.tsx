import { ReactNode } from "react"

interface FeaturedComponentProps {
  title: string
  description: string
  children: ReactNode
  gradientFrom?: string
  gradientTo?: string
  className?: string
}

export function FeaturedComponent({ 
  title, 
  description, 
  children,
  gradientFrom = "purple-50",
  gradientTo = "blue-50",
  className = ""
}: FeaturedComponentProps) {
  return (
    <div className={`bg-gradient-to-br from-${gradientFrom} to-${gradientTo} dark:from-${gradientFrom.replace('50', '950/20')} dark:to-${gradientTo.replace('50', '950/20')} rounded-xl p-8 border ${className}`}>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-foreground mb-2">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="flex justify-center">
        {children}
      </div>
    </div>
  )
}

// Predefined gradient combinations for different categories
export const CHART_GRADIENTS = {
  area: { from: "blue-50", to: "indigo-50" },
  bar: { from: "purple-50", to: "pink-50" },
  line: { from: "green-50", to: "emerald-50" },
  pie: { from: "orange-50", to: "red-50" },
  radar: { from: "cyan-50", to: "blue-50" },
  radial: { from: "violet-50", to: "purple-50" },
}

export const UI_GRADIENTS = {
  templates: { from: "purple-50", to: "blue-50" },
  metrics: { from: "slate-50", to: "gray-50" },
  architecture: { from: "blue-50", to: "indigo-50" },
  diet: { from: "emerald-50", to: "green-50" },
} 