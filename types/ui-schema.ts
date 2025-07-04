// Core UI Schema Types
export type Size = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl"
export type Color =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "gray"
  | "white"
  | "black"
  | string
export type Spacing =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "8"
  | "10"
  | "12"
  | "16"
  | "20"
  | "24"
  | "32"
  | "40"
  | "48"
  | "56"
  | "64"
export type Direction = "row" | "column" | "row-reverse" | "column-reverse"
export type Justify = "start" | "end" | "center" | "between" | "around" | "evenly"
export type Align = "start" | "end" | "center" | "stretch" | "baseline"
export type BorderRadius = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full"

// Base element interface
export interface BaseElement {
  type: string
  id?: string
  className?: string
  style?: Record<string, any>
  responsive?: {
    sm?: Partial<BaseElement>
    md?: Partial<BaseElement>
    lg?: Partial<BaseElement>
    xl?: Partial<BaseElement>
  }
}

// Layout Properties
export interface LayoutProps {
  direction?: Direction
  justify?: Justify
  align?: Align
  gap?: Spacing
  padding?: Spacing | { top?: Spacing; right?: Spacing; bottom?: Spacing; left?: Spacing }
  margin?: Spacing | { top?: Spacing; right?: Spacing; bottom?: Spacing; left?: Spacing }
  width?: string | "full" | "auto" | "fit"
  height?: string | "full" | "auto" | "fit"
  minWidth?: string
  maxWidth?: string
  minHeight?: string
  maxHeight?: string
}

// Styling Properties
export interface StyleProps {
  background?: Color | string
  color?: Color | string
  border?: {
    width?: "0" | "1" | "2" | "4" | "8"
    color?: Color | string
    radius?: BorderRadius
    style?: "solid" | "dashed" | "dotted"
  }
  shadow?: "none" | "sm" | "md" | "lg" | "xl" | "2xl"
  opacity?: number
}

// Text Element
export interface TextElement extends BaseElement, StyleProps {
  type: "text"
  content: string
  size?: Size
  weight?: "thin" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black"
  align?: "left" | "center" | "right" | "justify"
  decoration?: "none" | "underline" | "line-through"
  transform?: "none" | "uppercase" | "lowercase" | "capitalize"
}

// Heading Element
export interface HeadingElement extends BaseElement, StyleProps {
  type: "heading"
  content: string
  level: 1 | 2 | 3 | 4 | 5 | 6
  size?: Size
  weight?: "thin" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black"
  align?: "left" | "center" | "right" | "justify"
}

// Body Element
export interface BodyElement extends BaseElement, StyleProps {
  type: "body"
  content: string
  size?: Size
  lineHeight?: "tight" | "snug" | "normal" | "relaxed" | "loose"
  align?: "left" | "center" | "right" | "justify"
}

// Container Element
export interface ContainerElement extends BaseElement, LayoutProps, StyleProps {
  type: "container"
  children: UIElement[]
  display?: "block" | "flex" | "grid" | "inline" | "inline-block" | "inline-flex"
  wrap?: "nowrap" | "wrap" | "wrap-reverse"
}

// Card Element
export interface CardElement extends BaseElement, LayoutProps, StyleProps {
  type: "card"
  children: UIElement[]
  variant?: "default" | "outlined" | "elevated" | "filled"
}

// Button Element
export interface ButtonElement extends BaseElement, StyleProps {
  type: "button"
  content: string
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link"
  size?: Size
  disabled?: boolean
  fullWidth?: boolean
  onClick?: string // Action identifier
}

// Image Element
export interface ImageElement extends BaseElement, LayoutProps, StyleProps {
  type: "image"
  src: string
  alt: string
  fit?: "cover" | "contain" | "fill" | "none" | "scale-down"
  position?: "center" | "top" | "bottom" | "left" | "right"
}

// Badge Element
export interface BadgeElement extends BaseElement, StyleProps {
  type: "badge"
  content: string
  variant?: "default" | "success" | "warning" | "error" | "info"
  size?: Size
}

// Legend Element
export interface LegendElement extends BaseElement, StyleProps {
  type: "legend"
  items: Array<{
    label: string
    color: string
    shape?: "circle" | "square" | "line"
  }>
  direction?: "row" | "column"
  gap?: Spacing
}

// Avatar Element
export interface AvatarElement extends BaseElement, StyleProps {
  type: "avatar"
  src?: string
  alt?: string
  fallback?: string
  size?: Size
  variant?: "circle" | "square"
  status?: "online" | "offline" | "away" | "busy"
  statusColor?: string
}

// Chat Input Element
export interface ChatInputElement extends BaseElement, LayoutProps, StyleProps {
  type: "chat-input"
  placeholder: string
  avatar?: AvatarElement
  variant?: "simple" | "expanded"
  suggestions?: string[]
  showClose?: boolean
}

// Icon Button Element
export interface IconButtonElement extends BaseElement, StyleProps {
  type: "icon-button"
  icon: string
  variant?: "ghost" | "filled" | "outline"
  size?: Size
  onClick?: string
}

// Icon Element
export interface IconElement extends BaseElement, StyleProps {
  type: "icon"
  name: string
  size?: Size
  variant?: "outline" | "filled" | "solid"
}

// Metric Card Element (NEW)
export interface MetricCardElement extends BaseElement, LayoutProps, StyleProps {
  type: "metric-card"
  title?: string
  value: string | number
  change?: {
    value: string
    type: "positive" | "negative" | "neutral"
  }
  icon?: {
    name: string
    variant?: "outline" | "filled"
  }
  actionButton?: {
    icon: string
    variant?: "light" | "dark"
  }
  theme?: "dark" | "light" | "success" | "warning" | "error"
}

// Tooltip Element
export interface TooltipElement extends BaseElement, StyleProps {
  type: "tooltip"
  content: string
  position?: "top" | "bottom" | "left" | "right"
  trigger?: UIElement
}

// Chart Element (Enhanced)
export interface ChartElement extends BaseElement, LayoutProps, StyleProps {
  type: "chart"
  chartType: "bar" | "line" | "pie" | "area" | "scatter" | "candlestick"
  data: any[]
  config?: {
    colors?: string[]
    showGrid?: boolean
    showAxes?: boolean
    showTooltip?: boolean
    fill?: boolean
    smooth?: boolean
    strokeWidth?: number
    axisLabels?: string[]
    tooltip?: {
      value: string
      position: { x: number; y: number }
    }
  }
}

// Input Element
export interface InputElement extends BaseElement, StyleProps {
  type: "input"
  inputType?: "text" | "email" | "password" | "number" | "tel" | "url"
  placeholder?: string
  label?: string
  required?: boolean
  disabled?: boolean
  size?: Size
}

// Grid Element
export interface GridElement extends BaseElement, LayoutProps, StyleProps {
  type: "grid"
  children: UIElement[]
  columns?: number | "auto" | string
  rows?: number | "auto" | string
  gap?: Spacing
  columnGap?: Spacing
  rowGap?: Spacing
}

// Union type for all elements
export type UIElement =
  | TextElement
  | HeadingElement
  | BodyElement
  | ContainerElement
  | CardElement
  | ButtonElement
  | ImageElement
  | ChartElement
  | InputElement
  | GridElement
  | BadgeElement
  | LegendElement
  | TooltipElement
  | AvatarElement
  | ChatInputElement
  | IconButtonElement
  | IconElement
  | MetricCardElement

// Page/Layout Structure
export interface UILayout {
  id: string
  title?: string
  description?: string
  theme?: {
    colors?: Record<string, string>
    fonts?: Record<string, string>
    spacing?: Record<string, string>
  }
  root: UIElement
}
