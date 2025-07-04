"use client"

import type { UIElement, UILayout } from "@/types/ui-schema"
import { ChartRenderer } from "./chart-renderer"
import { JsonDialog } from "./json-dialog"
import type { JSX } from "react"

interface ElementRendererProps {
  element: UIElement
  theme?: UILayout["theme"]
  showJsonButton?: boolean
  isRootElement?: boolean
}

export function ElementRenderer({
  element,
  theme,
  showJsonButton = false,
  isRootElement = false,
}: ElementRendererProps) {
  const baseClasses = getBaseClasses(element)
  const styleClasses = getStyleClasses(element)
  const layoutClasses = getLayoutClasses(element)

  const combinedClasses = [baseClasses, styleClasses, layoutClasses, element.className].filter(Boolean).join(" ")

  const renderElement = () => {
    switch (element.type) {
      case "text":
        return (
          <span
            className={`${getSizeClass("text", element.size)} ${getWeightClass(element.weight)} ${getAlignClass(element.align)} ${combinedClasses}`}
            style={element.style}
          >
            {element.content}
          </span>
        )

      case "heading":
        const HeadingTag = `h${element.level}` as keyof JSX.IntrinsicElements
        return (
          <HeadingTag
            className={`${getSizeClass("heading", element.size, element.level)} ${getWeightClass(element.weight)} ${getAlignClass(element.align)} ${combinedClasses}`}
            style={element.style}
          >
            {element.content}
          </HeadingTag>
        )

      case "body":
        return (
          <p
            className={`${getSizeClass("body", element.size)} ${getLineHeightClass(element.lineHeight)} ${getAlignClass(element.align)} ${combinedClasses}`}
            style={element.style}
          >
            {element.content}
          </p>
        )

      case "container":
        return (
          <div
            className={`${getDisplayClass(element.display)} ${getFlexClasses(element)} ${combinedClasses}`}
            style={element.style}
          >
            {element.children?.map((child, index) => (
              <ElementRenderer key={child.id || index} element={child} theme={theme} />
            ))}
          </div>
        )

      case "card":
        return (
          <div className={`${getCardVariantClass(element.variant)} ${combinedClasses}`} style={element.style}>
            {element.children?.map((child, index) => (
              <ElementRenderer key={child.id || index} element={child} theme={theme} />
            ))}
          </div>
        )

      case "button":
        return (
          <button
            className={`${getButtonVariantClass(element.variant)} ${getSizeClass("button", element.size)} ${element.fullWidth ? "w-full" : ""} ${combinedClasses}`}
            disabled={element.disabled}
            style={element.style}
          >
            {element.content}
          </button>
        )

      case "image":
        return (
          <img
            src={element.src || "/placeholder.svg"}
            alt={element.alt}
            className={`${getImageFitClass(element.fit)} ${combinedClasses}`}
            style={element.style}
          />
        )

      case "icon":
        return (
          <div className={`${getIconSizeClass(element.size)} ${combinedClasses}`} style={element.style}>
            {renderIcon(element.name, element.variant)}
          </div>
        )

      case "metric-card":
        return (
          <div className={`${getMetricCardThemeClass(element.theme)} ${combinedClasses}`} style={element.style}>
            {/* Header Row */}
            <div className="flex items-center justify-between mb-6">
              {/* Left: Icon */}
              <div className={`${getMetricCardIconContainerClass(element.theme)}`}>
                {element.icon && renderIcon(element.icon.name, element.icon.variant)}
              </div>

              {/* Center: Title */}
              <div className="flex-1 mx-4">
                {element.title && <h3 className={`${getMetricCardTitleClass(element.theme)}`}>{element.title}</h3>}
              </div>

              {/* Right: Action Button */}
              {element.actionButton && (
                <button className={`${getMetricCardActionButtonClass(element.theme)}`}>
                  {renderIcon(element.actionButton.icon, "outline")}
                </button>
              )}
            </div>

            {/* Value */}
            <div className={`${getMetricCardValueClass(element.theme)} mb-3`}>{element.value}</div>

            {/* Change Indicator */}
            {element.change && (
              <div className={`${getMetricCardChangeClass(element.theme, element.change.type)}`}>
                {element.change.value} from previous week
              </div>
            )}
          </div>
        )

      case "avatar":
        return (
          <div className={`relative ${getAvatarSizeClass(element.size)} ${combinedClasses}`} style={element.style}>
            {element.src ? (
              <img
                src={element.src || "/placeholder.svg"}
                alt={element.alt || "Avatar"}
                className={`w-full h-full object-cover ${element.variant === "square" ? "rounded-md" : "rounded-full"}`}
              />
            ) : (
              <div
                className={`w-full h-full flex items-center justify-center text-white font-medium ${element.variant === "square" ? "rounded-md" : "rounded-full"} ${element.status === "online" ? "bg-green-500" : "bg-gray-400"}`}
              >
                {element.fallback || "?"}
              </div>
            )}
            {element.status && (
              <div
                className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(element.status, element.statusColor)}`}
              />
            )}
          </div>
        )

      case "chat-input":
        return (
          <div className={`${getChatInputVariantClass(element.variant)} ${combinedClasses}`} style={element.style}>
            <div className="flex items-start gap-4">
              {element.avatar && <ElementRenderer element={element.avatar} theme={theme} />}
              <div className="flex-1 min-w-0">
                <div className="text-white font-normal text-base leading-relaxed">{element.placeholder}</div>
                {element.variant === "expanded" && element.suggestions && (
                  <div className="mt-4 space-y-3">
                    {element.suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        className="block text-left text-gray-400 text-sm hover:text-gray-300 transition-colors duration-200 font-normal"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {element.showClose && (
                <button className="text-gray-400 hover:text-white transition-colors duration-200 p-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        )

      case "icon-button":
        return (
          <button
            className={`${getIconButtonVariantClass(element.variant)} ${getSizeClass("icon-button", element.size)} ${combinedClasses}`}
            style={element.style}
          >
            {element.icon === "close" && (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        )

      case "badge":
        return (
          <span
            className={`${getBadgeVariantClass(element.variant)} ${getSizeClass("badge", element.size)} ${combinedClasses}`}
            style={element.style}
          >
            {element.content}
          </span>
        )

      case "legend":
        return (
          <div
            className={`${element.direction === "column" ? "flex-col" : "flex-row"} flex ${element.gap ? `gap-${element.gap}` : "gap-4"} ${combinedClasses}`}
            style={element.style}
          >
            {element.items.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 ${item.shape === "square" ? "rounded-none" : item.shape === "line" ? "h-0.5 w-4" : "rounded-full"}`}
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-gray-600">{item.label}</span>
              </div>
            ))}
          </div>
        )

      case "chart":
        return <ChartRenderer element={element} className={combinedClasses} />

      case "input":
        return (
          <div className={combinedClasses}>
            {element.label && <label className="block text-sm font-medium text-gray-700 mb-1">{element.label}</label>}
            <input
              type={element.inputType || "text"}
              placeholder={element.placeholder}
              required={element.required}
              disabled={element.disabled}
              className={`${getSizeClass("input", element.size)} ${getInputClasses()}`}
              style={element.style}
            />
          </div>
        )

      case "grid":
        return (
          <div className={`grid ${getGridClasses(element)} ${combinedClasses}`} style={element.style}>
            {element.children?.map((child, index) => (
              <ElementRenderer key={child.id || index} element={child} theme={theme} />
            ))}
          </div>
        )

      default:
        return <div className="text-red-500">Unknown element type: {(element as any).type}</div>
    }
  }

  // Only show JSON button on root elements
  if (showJsonButton && isRootElement) {
    return (
      <div className="relative group">
        {renderElement()}
        <JsonDialog jsonData={element} title={`${element.type} Component JSON`} />
      </div>
    )
  }

  return renderElement()
}

// Icon rendering function
function renderIcon(iconName: string, variant?: string) {
  const iconClass = "w-full h-full"

  switch (iconName) {
    case "user":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      )
    case "package":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 9l3-3 3 3"
          />
        </svg>
      )
    case "briefcase":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2zm-8 0V8a2 2 0 00-2 2H4a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2v-8a2 2 0 00-2-2h-2z"
          />
        </svg>
      )
    case "arrow-up-right":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      )
    default:
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      )
  }
}

// Metric card specific styling functions
function getMetricCardThemeClass(theme?: string): string {
  const themeMap = {
    dark: "bg-gray-800 text-white rounded-3xl p-6 shadow-xl",
    light: "bg-white text-gray-900 rounded-3xl p-6 shadow-xl border border-gray-200",
    success: "bg-lime-400 text-gray-900 rounded-3xl p-6 shadow-xl",
    warning: "bg-yellow-400 text-gray-900 rounded-3xl p-6 shadow-xl",
    error: "bg-red-500 text-white rounded-3xl p-6 shadow-xl",
  }
  return themeMap[theme as keyof typeof themeMap] || themeMap.dark
}

function getMetricCardIconContainerClass(theme?: string): string {
  const themeMap = {
    dark: "w-12 h-12 rounded-full bg-gray-700 text-white flex items-center justify-center",
    light: "w-12 h-12 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center",
    success: "w-12 h-12 rounded-full bg-lime-300 text-gray-700 flex items-center justify-center",
    warning: "w-12 h-12 rounded-full bg-yellow-300 text-gray-700 flex items-center justify-center",
    error: "w-12 h-12 rounded-full bg-red-400 text-white flex items-center justify-center",
  }
  return themeMap[theme as keyof typeof themeMap] || themeMap.dark
}

function getMetricCardTitleClass(theme?: string): string {
  const themeMap = {
    dark: "text-white font-medium text-lg",
    light: "text-gray-900 font-medium text-lg",
    success: "text-gray-900 font-medium text-lg",
    warning: "text-gray-900 font-medium text-lg",
    error: "text-white font-medium text-lg",
  }
  return themeMap[theme as keyof typeof themeMap] || themeMap.dark
}

function getMetricCardActionButtonClass(theme?: string): string {
  const themeMap = {
    dark: "w-12 h-12 rounded-full bg-white text-gray-800 flex items-center justify-center hover:bg-gray-100 transition-colors",
    light:
      "w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors",
    success:
      "w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors",
    warning:
      "w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors",
    error:
      "w-12 h-12 rounded-full bg-white text-gray-800 flex items-center justify-center hover:bg-gray-100 transition-colors",
  }
  return themeMap[theme as keyof typeof themeMap] || themeMap.dark
}

function getMetricCardValueClass(theme?: string): string {
  const themeMap = {
    dark: "text-5xl font-bold text-white leading-none",
    light: "text-5xl font-bold text-gray-900 leading-none",
    success: "text-5xl font-bold text-gray-900 leading-none",
    warning: "text-5xl font-bold text-gray-900 leading-none",
    error: "text-5xl font-bold text-white leading-none",
  }
  return themeMap[theme as keyof typeof themeMap] || themeMap.dark
}

function getMetricCardChangeClass(theme?: string, changeType?: string): string {
  const baseClasses = "text-sm font-medium"

  if (changeType === "positive") {
    return `${baseClasses} text-green-400`
  } else if (changeType === "negative") {
    const themeMap = {
      dark: `${baseClasses} text-gray-400`,
      light: `${baseClasses} text-gray-600`,
      success: `${baseClasses} text-gray-700`,
      warning: `${baseClasses} text-gray-700`,
      error: `${baseClasses} text-red-200`,
    }
    return themeMap[theme as keyof typeof themeMap] || themeMap.dark
  }

  return `${baseClasses} text-gray-400`
}

// Utility functions for class generation
function getBaseClasses(element: UIElement): string {
  const classes: string[] = []

  // Width and height
  if ("width" in element && element.width) {
    if (element.width === "full") classes.push("w-full")
    else if (element.width === "auto") classes.push("w-auto")
    else if (element.width === "fit") classes.push("w-fit")
    else classes.push(`w-[${element.width}]`)
  }

  if ("height" in element && element.height) {
    if (element.height === "full") classes.push("h-full")
    else if (element.height === "auto") classes.push("h-auto")
    else if (element.height === "fit") classes.push("h-fit")
    else classes.push(`h-[${element.height}]`)
  }

  return classes.join(" ")
}

function getStyleClasses(element: UIElement): string {
  const classes: string[] = []

  if ("background" in element && element.background) {
    classes.push(getColorClass("bg", element.background))
  }

  if ("color" in element && element.color) {
    classes.push(getColorClass("text", element.color))
  }

  if ("border" in element && element.border) {
    if (element.border.width) classes.push(`border-${element.border.width}`)
    if (element.border.color) classes.push(getColorClass("border", element.border.color))
    if (element.border.radius) classes.push(`rounded-${element.border.radius}`)
    if (element.border.style && element.border.style !== "solid") classes.push(`border-${element.border.style}`)
  }

  if ("shadow" in element && element.shadow && element.shadow !== "none") {
    classes.push(`shadow-${element.shadow}`)
  }

  return classes.join(" ")
}

function getLayoutClasses(element: UIElement): string {
  const classes: string[] = []

  if ("padding" in element && element.padding) {
    if (typeof element.padding === "string") {
      classes.push(`p-${element.padding}`)
    } else {
      if (element.padding.top) classes.push(`pt-${element.padding.top}`)
      if (element.padding.right) classes.push(`pr-${element.padding.right}`)
      if (element.padding.bottom) classes.push(`pb-${element.padding.bottom}`)
      if (element.padding.left) classes.push(`pl-${element.padding.left}`)
    }
  }

  if ("margin" in element && element.margin) {
    if (typeof element.margin === "string") {
      classes.push(`m-${element.margin}`)
    } else {
      if (element.margin.top) classes.push(`mt-${element.margin.top}`)
      if (element.margin.right) classes.push(`mr-${element.margin.right}`)
      if (element.margin.bottom) classes.push(`mb-${element.margin.bottom}`)
      if (element.margin.left) classes.push(`ml-${element.margin.left}`)
    }
  }

  if ("gap" in element && element.gap) {
    classes.push(`gap-${element.gap}`)
  }

  return classes.join(" ")
}

function getSizeClass(type: string, size?: string, level?: number): string {
  const sizeMap = {
    text: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
    },
    heading: {
      1: "text-4xl",
      2: "text-3xl",
      3: "text-2xl",
      4: "text-xl",
      5: "text-lg",
      6: "text-base",
    },
    body: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    button: {
      xs: "px-2 py-1 text-xs",
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
      xl: "px-8 py-4 text-lg",
    },
    input: {
      xs: "px-2 py-1 text-xs",
      sm: "px-3 py-1.5 text-sm",
      md: "px-3 py-2 text-sm",
      lg: "px-4 py-3 text-base",
      xl: "px-6 py-4 text-lg",
    },
    badge: {
      xs: "px-1.5 py-0.5 text-xs",
      sm: "px-2 py-1 text-xs",
      md: "px-2.5 py-1 text-sm",
      lg: "px-3 py-1.5 text-sm",
      xl: "px-4 py-2 text-base",
    },
    "icon-button": {
      xs: "p-1",
      sm: "p-1.5",
      md: "p-2",
      lg: "p-3",
      xl: "p-4",
    },
  }

  if (type === "heading" && level) {
    return size
      ? sizeMap.text[size as keyof typeof sizeMap.text] || sizeMap.heading[level as keyof typeof sizeMap.heading]
      : sizeMap.heading[level as keyof typeof sizeMap.heading]
  }

  return size ? sizeMap[type as keyof typeof sizeMap]?.[size as keyof (typeof sizeMap)[typeof type]] || "" : ""
}

function getIconSizeClass(size?: string): string {
  const sizeMap = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8",
    "2xl": "w-10 h-10",
  }
  return sizeMap[size as keyof typeof sizeMap] || sizeMap.md
}

function getWeightClass(weight?: string): string {
  const weightMap = {
    thin: "font-thin",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
    black: "font-black",
  }
  return weight ? weightMap[weight as keyof typeof weightMap] || "" : ""
}

function getAlignClass(align?: string): string {
  const alignMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  }
  return align ? alignMap[align as keyof typeof alignMap] || "" : ""
}

function getLineHeightClass(lineHeight?: string): string {
  const lineHeightMap = {
    tight: "leading-tight",
    snug: "leading-snug",
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    loose: "leading-loose",
  }
  return lineHeight ? lineHeightMap[lineHeight as keyof typeof lineHeightMap] || "" : ""
}

function getDisplayClass(display?: string): string {
  const displayMap = {
    block: "block",
    flex: "flex",
    grid: "grid",
    inline: "inline",
    "inline-block": "inline-block",
    "inline-flex": "inline-flex",
  }
  return display ? displayMap[display as keyof typeof displayMap] || "block" : "block"
}

function getFlexClasses(element: any): string {
  const classes: string[] = []

  if (element.direction) {
    const directionMap = {
      row: "flex-row",
      column: "flex-col",
      "row-reverse": "flex-row-reverse",
      "column-reverse": "flex-col-reverse",
    }
    classes.push(directionMap[element.direction as keyof typeof directionMap])
  }

  if (element.justify) {
    const justifyMap = {
      start: "justify-start",
      end: "justify-end",
      center: "justify-center",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    }
    classes.push(justifyMap[element.justify as keyof typeof justifyMap])
  }

  if (element.align) {
    const alignMap = {
      start: "items-start",
      end: "items-end",
      center: "items-center",
      stretch: "items-stretch",
      baseline: "items-baseline",
    }
    classes.push(alignMap[element.align as keyof typeof alignMap])
  }

  if (element.wrap) {
    const wrapMap = {
      nowrap: "flex-nowrap",
      wrap: "flex-wrap",
      "wrap-reverse": "flex-wrap-reverse",
    }
    classes.push(wrapMap[element.wrap as keyof typeof wrapMap])
  }

  return classes.join(" ")
}

function getColorClass(prefix: string, color: string): string {
  const colorMap = {
    primary: "blue-600",
    secondary: "gray-600",
    success: "green-600",
    warning: "yellow-600",
    error: "red-600",
    info: "blue-500",
    gray: "gray-500",
    white: "white",
    black: "black",
  }

  const mappedColor = colorMap[color as keyof typeof colorMap] || color
  return `${prefix}-${mappedColor}`
}

function getCardVariantClass(variant?: string): string {
  const variantMap = {
    default: "bg-white border border-gray-200 rounded-lg shadow-sm",
    outlined: "bg-white border-2 border-gray-300 rounded-lg",
    elevated: "bg-white rounded-lg shadow-lg",
    filled: "bg-gray-50 rounded-lg",
  }
  return variantMap[variant as keyof typeof variantMap] || variantMap.default
}

function getButtonVariantClass(variant?: string): string {
  const variantMap = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-md transition-colors",
    outline: "border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-md transition-colors",
    ghost: "hover:bg-gray-100 text-gray-700 font-medium rounded-md transition-colors",
    link: "text-blue-600 hover:text-blue-700 underline font-medium",
  }
  return variantMap[variant as keyof typeof variantMap] || variantMap.primary
}

function getBadgeVariantClass(variant?: string): string {
  const variantMap = {
    default: "bg-gray-100 text-gray-800 rounded-full font-medium",
    success: "bg-green-100 text-green-800 rounded-full font-medium",
    warning: "bg-orange-100 text-orange-800 rounded-full font-medium",
    error: "bg-red-100 text-red-800 rounded-full font-medium",
    info: "bg-blue-100 text-blue-800 rounded-full font-medium",
  }
  return variantMap[variant as keyof typeof variantMap] || variantMap.default
}

function getImageFitClass(fit?: string): string {
  const fitMap = {
    cover: "object-cover",
    contain: "object-contain",
    fill: "object-fill",
    none: "object-none",
    "scale-down": "object-scale-down",
  }
  return fit ? fitMap[fit as keyof typeof fitMap] || "" : ""
}

function getInputClasses(): string {
  return "border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
}

function getGridClasses(element: any): string {
  const classes: string[] = []

  if (element.columns) {
    if (typeof element.columns === "number") {
      classes.push(`grid-cols-${element.columns}`)
    } else if (element.columns === "auto") {
      classes.push("grid-cols-auto")
    } else {
      classes.push(`grid-cols-[${element.columns}]`)
    }
  }

  if (element.rows) {
    if (typeof element.rows === "number") {
      classes.push(`grid-rows-${element.rows}`)
    } else if (element.rows === "auto") {
      classes.push("grid-rows-auto")
    } else {
      classes.push(`grid-rows-[${element.rows}]`)
    }
  }

  return classes.join(" ")
}

function getAvatarSizeClass(size?: string): string {
  const sizeMap = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
    "2xl": "w-20 h-20",
  }
  return sizeMap[size as keyof typeof sizeMap] || sizeMap.md
}

function getStatusColor(status: string, customColor?: string): string {
  if (customColor) return `bg-[${customColor}]`

  const statusMap = {
    online: "bg-green-500",
    offline: "bg-gray-400",
    away: "bg-yellow-500",
    busy: "bg-red-500",
  }
  return statusMap[status as keyof typeof statusMap] || statusMap.offline
}

function getChatInputVariantClass(variant?: string): string {
  const variantMap = {
    simple: "bg-gray-800 text-white rounded-full px-6 py-4 shadow-xl backdrop-blur-sm",
    expanded: "bg-gray-800 text-white rounded-3xl px-6 py-5 shadow-xl backdrop-blur-sm",
  }
  return variantMap[variant as keyof typeof variantMap] || variantMap.simple
}

function getIconButtonVariantClass(variant?: string): string {
  const variantMap = {
    ghost: "text-gray-400 hover:text-white transition-colors rounded-full",
    filled: "bg-gray-600 text-white hover:bg-gray-500 transition-colors rounded-full",
    outline:
      "border border-gray-600 text-gray-400 hover:text-white hover:border-gray-500 transition-colors rounded-full",
  }
  return variantMap[variant as keyof typeof variantMap] || variantMap.ghost
}
