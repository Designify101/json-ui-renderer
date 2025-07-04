// Dynamic JSON structure that can represent any UI component
export interface DynamicElement {
  element: string // HTML element or component type
  props?: Record<string, any>
  children?: (DynamicElement | string)[]
  style?: Record<string, string | number>
  className?: string
  content?: string
}

export interface DynamicGraphic {
  id: string
  layout: DynamicElement
  data?: Record<string, any>
  theme?: Record<string, string>
  responsive?: boolean
}
