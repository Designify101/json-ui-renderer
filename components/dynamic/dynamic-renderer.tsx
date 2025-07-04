import type React from "react"
import type { DynamicGraphic } from "@/types/dynamic-graphics"
import { ElementRenderer } from "./element-renderer"

interface DynamicRendererProps {
  graphic: DynamicGraphic
  fallback?: React.ReactNode
}

export function DynamicRenderer({ graphic, fallback }: DynamicRendererProps) {
  if (!graphic || !graphic.layout) {
    return (
      fallback || (
        <div className="p-4 border border-red-200 rounded-lg bg-red-50">
          <p className="text-red-600 text-sm">Invalid graphic structure</p>
        </div>
      )
    )
  }

  return (
    <div className={graphic.responsive !== false ? "w-full min-w-0" : ""}>
      <ElementRenderer element={graphic.layout} data={graphic.data} theme={graphic.theme} />
    </div>
  )
}
