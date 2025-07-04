// Enhanced Render Engine Schema with SVG and CSS support
export interface BaseRenderElement {
  id?: string
  key?: string
}

// SVG Element Support
export interface SvgElement extends BaseRenderElement {
  type: "svg"
  props: {
    viewBox?: string
    width?: string | number
    height?: string | number
    className?: string
    style?: Record<string, any>
    xmlns?: string
  }
  children?: RenderElement[]
}

// SVG Child Elements (path, circle, rect, etc.)
export interface SvgChildElement extends BaseRenderElement {
  tag:
    | "path"
    | "circle"
    | "rect"
    | "g"
    | "defs"
    | "mask"
    | "radialGradient"
    | "linearGradient"
    | "stop"
    | "filter"
    | "feDropShadow"
    | "marker"
    | "animate"
    | "text"
  props?: Record<string, any>
  children?: RenderElement[]
}

// CSS Styles Element
export interface StyleElement extends BaseRenderElement {
  type: "style"
  css: string
}

// Enhanced Component Element
export interface ComponentElement extends BaseRenderElement {
  type: string // shadcn component name like "Card", "Button", etc.
  props?: Record<string, any>
  children?: RenderElement[]
}

// HTML Tag Element
export interface TagElement extends BaseRenderElement {
  tag: string // HTML tag like "div", "span", "h1", etc.
  props?: Record<string, any>
  children?: RenderElement[]
}

// Text Content
export interface TextElement extends BaseRenderElement {
  text: string
}

// Icon Element
export interface IconElement extends BaseRenderElement {
  type: "Icon"
  props: {
    name: string
    size?: number | string
    color?: string
    className?: string
    style?: Record<string, any>
  }
}

// Card Carousel Element
export interface CardCarouselElement extends BaseRenderElement {
  type: "CardCarousel"
  props: {
    items?: Array<{
      id: number
      title: string
      description: string
      iconName: string
    }>
    baseWidth?: number
    autoplay?: boolean
    autoplayDelay?: number
    pauseOnHover?: boolean
    loop?: boolean
    round?: boolean
    className?: string
  }
}

export type RenderElement =
  | ComponentElement
  | TagElement
  | TextElement
  | IconElement
  | SvgElement
  | SvgChildElement
  | StyleElement
  | CardCarouselElement

// Layout interface for render templates
export interface RenderLayout {
  id: string
  title?: string
  description?: string
  data?: Record<string, any>
  theme?: Record<string, string>
  styles?: string // CSS styles to inject
  root: RenderElement
}
