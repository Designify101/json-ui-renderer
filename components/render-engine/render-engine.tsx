"use client"

import React from "react"
import type { RenderElement, RenderLayout } from "@/types/render-schema"
import { componentRegistry, componentPropSchemas } from "./component-registry"
import { JsonDialog } from "../ui-builder/json-dialog"

interface RenderEngineProps {
  layout: RenderLayout
  showJsonButton?: boolean
  isRootElement?: boolean
}

export function RenderEngine({ layout, showJsonButton = false, isRootElement = false }: RenderEngineProps) {
  console.log("🚀 RenderEngine: Starting render process")
  console.log("📋 RenderEngine: Layout received:", layout)

  // Inject CSS styles if provided
  React.useEffect(() => {
    if (layout.styles) {
      console.log("🎨 RenderEngine: Injecting CSS styles")
      const styleElement = document.createElement("style")
      styleElement.textContent = layout.styles
      styleElement.setAttribute("data-render-engine", layout.id)
      document.head.appendChild(styleElement)

      return () => {
        // Cleanup styles when component unmounts
        const existingStyle = document.querySelector(`style[data-render-engine="${layout.id}"]`)
        if (existingStyle) {
          existingStyle.remove()
        }
      }
    }
  }, [layout.styles, layout.id])

  const renderElement = (element: RenderElement, index?: number, depth = 0): React.ReactNode => {
    const indent = "  ".repeat(depth)
    console.log(`${indent}🔄 renderElement: Starting render at depth ${depth}`)
    console.log(`${indent}📦 renderElement: Element received:`, element)

    try {
      // Handle text content with data interpolation
      if ("text" in element) {
        console.log(`${indent}📝 renderElement: Processing text element`)
        const processedText = processContent(element.text, layout.data)
        return processedText
      }

      // Handle CSS styles
      if ("type" in element && element.type === "style") {
        console.log(`${indent}🎨 renderElement: Processing style element`)
        return null // Styles are handled in useEffect
      }

      // Handle SVG elements
      if ("type" in element && element.type === "svg") {
        console.log(`${indent}🎨 renderElement: Processing SVG element`)
        const renderedChildren = element.children?.map((child: RenderElement, childIndex: number) => {
          return renderElement(child, childIndex, depth + 1)
        })

        return (
          <svg key={element.key || index} {...element.props}>
            {renderedChildren}
          </svg>
        )
      }

      // Handle SVG child elements (path, circle, etc.)
      if ("tag" in element && isSvgTag(element.tag)) {
        console.log(`${indent}🎨 renderElement: Processing SVG child element: ${element.tag}`)
        const props = processProps(element.props || {}, layout.data)
        const renderedChildren = element.children?.map((child: RenderElement, childIndex: number) => {
          return renderElement(child, childIndex, depth + 1)
        })

        return React.createElement(element.tag, { key: element.key || index, ...props }, renderedChildren)
      }

      // Handle shadcn components and motion components
      if ("type" in element && element.type !== "svg" && element.type !== "style") {
        console.log(`${indent}🧩 renderElement: Processing component element`)
        console.log(`${indent}🧩 renderElement: Component type:`, element.type)

        const Component = componentRegistry[element.type]
        console.log(`${indent}🔍 renderElement: Component lookup result:`, Component ? "FOUND" : "NOT FOUND")

        if (!Component) {
          console.error(`${indent}❌ renderElement: Component "${element.type}" not found in registry`)
          return <div className="text-red-500 p-2 border border-red-300 rounded">Unknown component: {element.type}</div>
        }

        // Type guard to ensure element has props
        const elementProps = "props" in element ? element.props || {} : {}
        const validatedProps = validateProps(element.type, elementProps, depth + 1)
        const finalProps = injectLayoutData(validatedProps, layout.data, depth + 1)

        // Type guard to ensure element has children
        const elementChildren = "children" in element ? element.children : undefined
        const renderedChildren = elementChildren?.map((child: RenderElement, childIndex: number) => {
          return renderElement(child, childIndex, depth + 1)
        })

        return (
          <Component key={element.key || index} {...finalProps}>
            {renderedChildren}
          </Component>
        )
      }

      // Handle HTML tags
      if ("tag" in element) {
        console.log(`${indent}🏷️ renderElement: Processing HTML tag element`)
        console.log(`${indent}🏷️ renderElement: Tag name:`, element.tag)

        const props = processProps(element.props || {}, layout.data)
        const renderedChildren = element.children?.map((child: RenderElement, childIndex: number) => {
          return renderElement(child, childIndex, depth + 1)
        })

        return React.createElement(element.tag, { key: element.key || index, ...props }, renderedChildren)
      }

      return null
    } catch (error) {
      console.error(`${indent}💥 renderElement: Error during rendering:`, error)
      throw error
    }
  }

  console.log("🎬 RenderEngine: Starting root element render")
  let renderedContent: React.ReactNode

  try {
    renderedContent = renderElement(layout.root, 0, 0)
    console.log("✅ RenderEngine: Root element rendered successfully")
  } catch (error) {
    console.error("💥 RenderEngine: Fatal error during root render:", error)
    throw error
  }

  // Show JSON button for parent components
  if (showJsonButton && isRootElement) {
    console.log("🔘 RenderEngine: Adding JSON button wrapper")
    return (
      <div className="relative">
        {renderedContent}
        <div className="flex justify-center">
          <JsonDialog jsonData={layout} title={`${layout.title || "Component"} JSON`} />
        </div>
      </div>
    )
  }

  console.log("🏁 RenderEngine: Render process completed successfully")
  return <>{renderedContent}</>
}

// Helper function to check if a tag is an SVG element
function isSvgTag(tag: string): boolean {
  const svgTags = [
    "path",
    "circle",
    "rect",
    "g",
    "defs",
    "mask",
    "radialGradient",
    "linearGradient",
    "stop",
    "filter",
    "feDropShadow",
    "marker",
    "animate",
    "text",
    "line",
    "polygon",
    "polyline",
    "ellipse",
  ]
  return svgTags.includes(tag)
}

// Process content with data interpolation
function processContent(text: string, data?: Record<string, any>): string {
  if (!text || !data) return text
  return text.replace(/\{\{(\w+(?:\.\w+)*)\}\}/g, (match, path) => {
    const value = getNestedValue(data, path)
    return value !== undefined ? String(value) : match
  })
}

// Process props with data interpolation
function processProps(props: Record<string, any>, data?: Record<string, any>): Record<string, any> {
  if (!data) return props

  const processed: Record<string, any> = {}
  for (const [key, value] of Object.entries(props)) {
    if (typeof value === "string" && value.includes("{{")) {
      processed[key] = processContent(value, data)
    } else {
      processed[key] = value
    }
  }
  return processed
}

// Validate props against component schemas
function validateProps(componentType: string, props: Record<string, any>, depth = 0): Record<string, any> {
  const indent = "  ".repeat(depth)
  console.log(`${indent}🔍 validateProps: Starting validation for component:`, componentType)

  const schema = componentPropSchemas[componentType]
  if (!schema) {
    console.log(`${indent}🔍 validateProps: No schema found, allowing all props`)
    return props
  }

  const validatedProps: Record<string, any> = {}
  const alwaysAllowed = [
    "className",
    "style",
    "children",
    "key",
    "id",
    "animate",
    "transition",
    "initial",
    "whileHover",
    "whileTap",
  ]

  Object.entries(props).forEach(([key, value]) => {
    if (alwaysAllowed.includes(key) || key.startsWith("data-") || key.startsWith("aria-")) {
      validatedProps[key] = value
      return
    }

    const schemaRule = schema[key]
    if (schemaRule) {
      if (schemaRule === "any") {
        validatedProps[key] = value
      } else if (Array.isArray(schemaRule)) {
        if (schemaRule.includes(value)) {
          validatedProps[key] = value
        }
      } else if (schemaRule === "boolean") {
        validatedProps[key] = Boolean(value)
      } else if (schemaRule === "string") {
        validatedProps[key] = String(value)
      } else if (schemaRule === "number") {
        validatedProps[key] = Number(value)
      }
    }
  })

  return validatedProps
}

// Inject layout data into props (for charts, etc.)
function injectLayoutData(
  props: Record<string, any>,
  layoutData?: Record<string, any>,
  depth = 0,
): Record<string, any> {
  const indent = "  ".repeat(depth)
  console.log(`${indent}💉 injectLayoutData: Starting data injection`)

  if (!layoutData) {
    return props
  }

  const finalProps = { ...props }

  Object.entries(finalProps).forEach(([key, value]) => {
    if (typeof value === "string" && value.startsWith("$data.")) {
      const dataPath = value.substring(6) // Remove "$data." prefix
      const dataValue = getNestedValue(layoutData, dataPath)
      console.log(`${indent}💉 injectLayoutData: Replacing ${key}: "${value}" with:`, dataValue)
      if (dataValue !== undefined) {
        finalProps[key] = dataValue
      } else {
        console.warn(`${indent}⚠️ injectLayoutData: Data path "${dataPath}" not found in layout data`)
      }
    }
  })

  console.log(`${indent}💉 injectLayoutData: Final props:`, finalProps)
  return finalProps
}

// Get nested value from object using dot notation
function getNestedValue(obj: any, path: string): any {
  return path.split(".").reduce((current, key) => current?.[key], obj)
}
