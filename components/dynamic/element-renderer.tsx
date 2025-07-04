import React from "react"
import type { DynamicElement } from "@/types/dynamic-graphics"

interface ElementRendererProps {
  element: DynamicElement
  data?: Record<string, any>
  theme?: Record<string, string>
}

export function ElementRenderer({ element, data = {}, theme = {} }: ElementRendererProps) {
  const { element: tagName, props = {}, children = [], style = {}, className = "", content } = element

  // Handle data interpolation in content
  const processContent = (text: string): string => {
    if (!text) return ""
    return text.replace(/\{\{(\w+(?:\.\w+)*)\}\}/g, (match, path) => {
      const value = getNestedValue(data, path)
      return value !== undefined ? String(value) : match
    })
  }

  // Handle data interpolation in props
  const processProps = (props: Record<string, any>): Record<string, any> => {
    const processed: Record<string, any> = {}
    for (const [key, value] of Object.entries(props)) {
      if (typeof value === "string" && value.includes("{{")) {
        processed[key] = processContent(value)
      } else {
        processed[key] = value
      }
    }
    return processed
  }

  // Get nested value from object using dot notation
  const getNestedValue = (obj: any, path: string): any => {
    return path.split(".").reduce((current, key) => current?.[key], obj)
  }

  // Handle special components
  if (tagName === "PerformanceChart") {
    return <PerformanceChart data={data} {...processProps(props)} className={className} style={style} />
  }

  if (tagName === "MetricWithBadge") {
    return <MetricWithBadge data={data} {...processProps(props)} className={className} style={style} />
  }

  // Handle standard HTML elements
  const processedProps = processProps(props)
  const combinedClassName = [className, theme.className].filter(Boolean).join(" ")

  const elementProps = {
    ...processedProps,
    className: combinedClassName,
    style: { ...style, ...theme.style },
  }

  // Render children
  const renderChildren = () => {
    return children.map((child, index) => {
      if (typeof child === "string") {
        return processContent(child)
      }
      return <ElementRenderer key={index} element={child} data={data} theme={theme} />
    })
  }

  // Handle content vs children
  const elementContent = content ? processContent(content) : renderChildren()

  return React.createElement(tagName, elementProps, elementContent)
}

// Exact replica of the performance chart
function PerformanceChart({ data, className = "", style = {} }: any) {
  const chartData = data.chart?.data || []

  if (chartData.length === 0) return null

  const maxValue = Math.max(...chartData)

  return (
    <div className={`mt-6 ${className}`} style={style}>
      <div className="flex items-end justify-between h-16 gap-[2px]">
        {chartData.map((value: number, index: number) => {
          // Calculate height as percentage of container
          const heightPercentage = maxValue > 0 ? (value / maxValue) * 100 : 0

          return (
            <div
              key={index}
              className="bg-indigo-500 rounded-t-[1px] flex-1 min-w-[3px]"
              style={{
                height: `${Math.max(heightPercentage, 8)}%`,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

// Metric with change badge component
function MetricWithBadge({ data, className = "", style = {} }: any) {
  const metric = data.metric || {}
  const change = metric.change || {}

  return (
    <div className={`flex items-center justify-between mt-6 ${className}`} style={style}>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-bold text-indigo-600">{metric.value}</span>
        {metric.unit && <span className="text-2xl font-bold text-indigo-600">{metric.unit}</span>}
      </div>
      {change.value && (
        <div className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">{change.value}</div>
      )}
    </div>
  )
}
