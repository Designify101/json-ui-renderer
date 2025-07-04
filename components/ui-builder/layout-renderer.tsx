"use client"

import React from "react"
import type { UILayout } from "@/types/ui-schema"
import { ElementRenderer } from "./element-renderer"

interface LayoutRendererProps {
  layout: UILayout
  data?: Record<string, any>
}

export function LayoutRenderer({ layout, data }: LayoutRendererProps) {
  // Apply theme variables to CSS
  React.useEffect(() => {
    if (layout.theme?.colors) {
      const root = document.documentElement
      Object.entries(layout.theme.colors).forEach(([key, value]) => {
        root.style.setProperty(`--color-${key}`, value)
      })
    }
  }, [layout.theme])

  return (
    <div className="w-full h-full">
      <ElementRenderer element={layout.root} theme={layout.theme} />
    </div>
  )
}
