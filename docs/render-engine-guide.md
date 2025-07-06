# Render Engine Guide 🚀

This guide provides comprehensive documentation for the core rendering system that converts JSON configurations into React components.

## Overview 🎯

The Render Engine is the heart of the JSON UI/Graphics Generator, responsible for:
- Converting JSON configurations to React components
- Processing data interpolation with `{{}}` syntax
- Handling SVG elements and graphics
- Managing component props and validation
- Providing error handling and graceful degradation

## Architecture 🏗️

### Core Components
```typescript
// Main render engine component
RenderEngine: React.FC<RenderEngineProps>

// Helper functions
renderElement()     // Recursive element rendering
processContent()    // Text interpolation
processProps()      // Prop processing
validateProps()     // Prop validation
injectLayoutData()  // Data injection
```

### Rendering Process
```
JSON Input → Layout Validation → Element Processing → Component Resolution → Prop Validation → Data Injection → React Rendering
```

### File Structure
```
components/render-engine/
├── render-engine.tsx        # Main render engine
├── component-registry.tsx   # Component mapping
└── icon-registry.tsx       # Icon components
```

## Core Concepts 🧩

### 1. RenderLayout Structure
The root object that defines the entire component:

```typescript
interface RenderLayout {
  id: string                    // Unique identifier
  title?: string               // Display title
  description?: string         // Component description
  data?: Record<string, any>   // Data for interpolation
  theme?: Record<string, string> // Theme overrides
  styles?: string              // CSS styles to inject
  root: RenderElement          // Root element to render
}
```

### 2. Element Types
The render engine supports multiple element types:

```typescript
type RenderElement = 
  | ComponentElement    // shadcn/ui and custom components
  | TagElement         // HTML tags
  | TextElement        // Plain text
  | IconElement        // Lucide React icons
  | SvgElement         // SVG graphics
  | StyleElement       // CSS styles
```

### 3. Rendering Pipeline
Each element goes through a standardized pipeline:

1. **Type Detection** - Identify element type
2. **Component Resolution** - Find React component
3. **Prop Processing** - Process and validate props
4. **Data Injection** - Inject layout data
5. **Child Rendering** - Recursively render children
6. **React Creation** - Create React element

## Data Interpolation 🔄

### Basic Syntax
Use `{{}}` syntax to interpolate data values:

```json
{
  "data": {
    "user": {
      "name": "John Doe",
      "email": "john@example.com"
    }
  },
  "root": {
    "type": "div",
    "children": [
      { "text": "Welcome {{user.name}}!" },
      { "text": "Email: {{user.email}}" }
    ]
  }
}
```

### Nested Property Access
Access nested properties with dot notation:

```json
{
  "data": {
    "company": {
      "address": {
        "street": "123 Main St",
        "city": "New York"
      }
    }
  },
  "root": {
    "type": "div",
    "children": [
      { "text": "Address: {{company.address.street}}, {{company.address.city}}" }
    ]
  }
}
```

### Array Data References
Use `$data.` prefix for direct data references:

```json
{
  "data": {
    "chartData": [
      { "month": "Jan", "value": 100 },
      { "month": "Feb", "value": 150 }
    ]
  },
  "root": {
    "type": "ChartBarDefault",
    "props": {
      "data": "$data.chartData"
    }
  }
}
```

### Data Processing Implementation
```typescript
// Text interpolation
function processContent(text: string, data?: Record<string, any>): string {
  if (!text || !data) return text
  
  return text.replace(/\{\{(\w+(?:\.\w+)*)\}\}/g, (match, path) => {
    const value = getNestedValue(data, path)
    return value !== undefined ? String(value) : match
  })
}

// Prop data injection
function processProps(props: Record<string, any>, data?: Record<string, any>): Record<string, any> {
  if (!data) return props

  const processed: Record<string, any> = {}
  
  for (const [key, value] of Object.entries(props)) {
    if (typeof value === "string" && value.includes("{{")) {
      processed[key] = processContent(value, data)
    } else if (typeof value === "string" && value.startsWith("$data.")) {
      const path = value.replace("$data.", "")
      processed[key] = getNestedValue(data, path)
    } else {
      processed[key] = value
    }
  }
  
  return processed
}

// Nested value extraction
function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : undefined
  }, obj)
}
```

## SVG Support 🎨

### SVG Element Rendering
The render engine provides native SVG support:

```json
{
  "type": "svg",
  "props": {
    "viewBox": "0 0 24 24",
    "width": "24",
    "height": "24",
    "className": "text-blue-500"
  },
  "children": [
    {
      "tag": "path",
      "props": {
        "d": "M12 2L2 7v10c0 5.55 3.84 9.95 9 11 5.16-1.05 9-5.45 9-11V7l-10-5z",
        "fill": "currentColor"
      }
    }
  ]
}
```

### Supported SVG Elements
```typescript
const svgTags = [
  "path", "circle", "rect", "g", "defs", "mask",
  "radialGradient", "linearGradient", "stop",
  "filter", "feDropShadow", "marker", "animate",
  "text", "line", "polygon", "polyline", "ellipse"
]
```

### SVG Rendering Implementation
```typescript
// SVG element detection
function isSvgTag(tag: string): boolean {
  const svgTags = ["path", "circle", "rect", "g", /* ... */]
  return svgTags.includes(tag)
}

// SVG element rendering
if ("type" in element && element.type === "svg") {
  const renderedChildren = element.children?.map((child, childIndex) => {
    return renderElement(child, childIndex, depth + 1)
  })

  return (
    <svg key={element.key || index} {...element.props}>
      {renderedChildren}
    </svg>
  )
}

// SVG child element rendering
if ("tag" in element && isSvgTag(element.tag)) {
  const props = processProps(element.props || {}, layout.data)
  const renderedChildren = element.children?.map((child, childIndex) => {
    return renderElement(child, childIndex, depth + 1)
  })

  return React.createElement(element.tag, { key: element.key || index, ...props }, renderedChildren)
}
```

## Component Resolution 🔍

### Component Registry Lookup
```typescript
// Component resolution process
const Component = componentRegistry[element.type]

if (!Component) {
  console.error(`Component "${element.type}" not found in registry`)
  return <div className="text-red-500">Unknown component: {element.type}</div>
}
```

### Dynamic Component Rendering
```typescript
// Type-safe component rendering
const elementProps = "props" in element ? element.props || {} : {}
const validatedProps = validateProps(element.type, elementProps, depth + 1)
const finalProps = injectLayoutData(validatedProps, layout.data, depth + 1)

const elementChildren = "children" in element ? element.children : undefined
const renderedChildren = elementChildren?.map((child, childIndex) => {
  return renderElement(child, childIndex, depth + 1)
})

return (
  <Component key={element.key || index} {...finalProps}>
    {renderedChildren}
  </Component>
)
```

## Prop Validation 🛡️

### Validation Schema
```typescript
// Component prop schemas
export const componentPropSchemas: Record<string, any> = {
  Button: {
    variant: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    size: ["default", "sm", "lg", "icon"],
    disabled: "boolean",
  },
  Badge: {
    variant: ["default", "secondary", "destructive", "outline"],
  },
  // ... more schemas
}
```

### Validation Implementation
```typescript
function validateProps(componentType: string, props: Record<string, any>, depth = 0): Record<string, any> {
  const indent = "  ".repeat(depth)
  console.log(`${indent}🔍 validateProps: Validating props for ${componentType}`)
  
  const schema = componentPropSchemas[componentType]
  
  if (!schema) {
    console.log(`${indent}⚠️ validateProps: No schema found for ${componentType}, allowing all props`)
    return props
  }
  
  const validatedProps: Record<string, any> = {}
  
  for (const [key, value] of Object.entries(props)) {
    const expectedType = schema[key]
    
    if (!expectedType) {
      console.log(`${indent}⚠️ validateProps: Unknown prop ${key} for ${componentType}`)
      validatedProps[key] = value
      continue
    }
    
    if (Array.isArray(expectedType)) {
      // Enum validation
      if (expectedType.includes(value)) {
        validatedProps[key] = value
      } else {
        console.warn(`${indent}❌ validateProps: Invalid enum value ${value} for ${key}, expected one of:`, expectedType)
      }
    } else if (expectedType === "boolean") {
      validatedProps[key] = Boolean(value)
    } else if (expectedType === "number") {
      validatedProps[key] = Number(value)
    } else {
      validatedProps[key] = value
    }
  }
  
  return validatedProps
}
```

## Error Handling 🚨

### Error Types
The render engine handles several types of errors:

1. **Component Not Found** - Unknown component type
2. **Invalid Props** - Props validation failures
3. **Data Interpolation Errors** - Invalid data paths
4. **Rendering Errors** - React rendering failures

### Error Boundaries
```typescript
// Component error fallback
if (!Component) {
  console.error(`Component "${element.type}" not found in registry`)
  return (
    <div className="text-red-500 p-2 border border-red-300 rounded">
      Unknown component: {element.type}
    </div>
  )
}

// Rendering error handling
try {
  renderedContent = renderElement(layout.root, 0, 0)
  console.log("✅ RenderEngine: Root element rendered successfully")
} catch (error) {
  console.error("💥 RenderEngine: Fatal error during root render:", error)
  
  return (
    <div className="p-4 border border-red-300 rounded bg-red-50">
      <h3 className="font-semibold text-red-800">Rendering Error</h3>
      <p className="text-red-600">Failed to render component: {error.message}</p>
    </div>
  )
}
```

### Graceful Degradation
```typescript
// Safe property access
const elementProps = "props" in element ? element.props || {} : {}
const elementChildren = "children" in element ? element.children : undefined

// Safe data interpolation
function processContent(text: string, data?: Record<string, any>): string {
  if (!text || !data) return text
  
  return text.replace(/\{\{(\w+(?:\.\w+)*)\}\}/g, (match, path) => {
    try {
      const value = getNestedValue(data, path)
      return value !== undefined ? String(value) : match
    } catch (error) {
      console.warn(`Data interpolation failed for path: ${path}`, error)
      return match
    }
  })
}
```

## Style Injection 💅

### CSS Style Management
```typescript
// Style injection with cleanup
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
```

### Style Scope Isolation
```typescript
// Scoped style generation
function generateScopedStyles(styles: string, scopeId: string): string {
  return styles.replace(/([^{}]+){/g, (match, selector) => {
    const trimmedSelector = selector.trim()
    
    // Skip @media, @keyframes, etc.
    if (trimmedSelector.startsWith('@')) {
      return match
    }
    
    // Scope the selector
    return `[data-scope="${scopeId}"] ${trimmedSelector} {`
  })
}
```

## Performance Optimizations ⚡

### Memoization Strategies
```typescript
// Memoized element rendering
const MemoizedRenderElement = React.memo(function RenderElement({
  element,
  layout,
  depth
}: {
  element: RenderElement
  layout: RenderLayout
  depth: number
}) {
  return renderElement(element, undefined, depth)
}, (prevProps, nextProps) => {
  return (
    prevProps.element === nextProps.element &&
    prevProps.layout.data === nextProps.layout.data &&
    prevProps.depth === nextProps.depth
  )
})
```

### Recursive Depth Limiting
```typescript
const MAX_RENDER_DEPTH = 50

const renderElement = (element: RenderElement, index?: number, depth = 0): React.ReactNode => {
  // Prevent infinite recursion
  if (depth > MAX_RENDER_DEPTH) {
    console.error(`Maximum render depth (${MAX_RENDER_DEPTH}) exceeded`)
    return <div className="text-red-500">Max depth exceeded</div>
  }
  
  // Continue with rendering...
}
```

### Component Caching
```typescript
// Component cache for performance
const componentCache = new Map<string, React.ComponentType<any>>()

function getComponent(type: string): React.ComponentType<any> | null {
  if (componentCache.has(type)) {
    return componentCache.get(type)!
  }
  
  const component = componentRegistry[type]
  if (component) {
    componentCache.set(type, component)
  }
  
  return component || null
}
```

## Advanced Features 🚀

### Conditional Rendering
```typescript
// Conditional element rendering
function shouldRenderElement(element: RenderElement, data?: Record<string, any>): boolean {
  if ('condition' in element && element.condition) {
    // Evaluate condition against data
    return evaluateCondition(element.condition, data)
  }
  return true
}

function evaluateCondition(condition: string, data?: Record<string, any>): boolean {
  // Simple condition evaluation
  // In production, use a safe expression evaluator
  try {
    return new Function('data', `return ${condition}`)(data)
  } catch {
    return true // Default to showing element
  }
}
```

### Animation Support
```typescript
// Framer Motion integration
if (element.type.startsWith('motion.')) {
  const MotionComponent = motion[element.type.replace('motion.', '')]
  
  return (
    <MotionComponent key={element.key || index} {...finalProps}>
      {renderedChildren}
    </MotionComponent>
  )
}
```

### Theme Integration
```typescript
// Theme-aware rendering
function applyThemeToProps(props: Record<string, any>, theme?: Record<string, string>): Record<string, any> {
  if (!theme) return props
  
  const themedProps = { ...props }
  
  // Replace theme variables in className
  if (themedProps.className) {
    themedProps.className = themedProps.className.replace(
      /theme\(([^)]+)\)/g,
      (match: string, key: string) => theme[key] || match
    )
  }
  
  return themedProps
}
```

## Debugging & Troubleshooting 🔧

### Debug Logging
The render engine provides comprehensive debug logging:

```typescript
// Enable debug logging
console.log("🚀 RenderEngine: Starting render process")
console.log("📋 RenderEngine: Layout received:", layout)
console.log(`${indent}🔄 renderElement: Starting render at depth ${depth}`)
console.log(`${indent}📦 renderElement: Element received:`, element)
```

### Common Issues

#### 1. Component Not Found
```
❌ renderElement: Component "MyComponent" not found in registry
```
**Solution**: Register the component in `component-registry.tsx`

#### 2. Data Interpolation Failure
```
⚠️ Data interpolation failed for path: user.name
```
**Solution**: Check data structure and path syntax

#### 3. Prop Validation Error
```
❌ validateProps: Invalid enum value "invalid" for variant
```
**Solution**: Use valid prop values from component schema

#### 4. Maximum Depth Exceeded
```
Maximum render depth (50) exceeded
```
**Solution**: Check for circular references in component structure

### Debug Tools
```typescript
// Render performance profiling
const renderStart = performance.now()
const result = renderElement(element, index, depth)
const renderTime = performance.now() - renderStart

if (renderTime > 10) {
  console.warn(`Slow render detected: ${renderTime}ms for ${element.type}`)
}
```

## Best Practices 💡

### 1. Component Structure
```json
// ✅ Good: Clear structure
{
  "type": "Card",
  "props": {
    "className": "w-full max-w-md"
  },
  "children": [
    {
      "type": "CardHeader",
      "children": [
        {
          "type": "CardTitle",
          "children": [{ "text": "Title" }]
        }
      ]
    }
  ]
}

// ❌ Bad: Unclear nesting
{
  "type": "Card",
  "children": [
    {
      "type": "div",
      "children": [
        { "text": "Title" }
      ]
    }
  ]
}
```

### 2. Data Organization
```json
// ✅ Good: Organized data
{
  "data": {
    "user": {
      "profile": { "name": "John" },
      "settings": { "theme": "dark" }
    },
    "content": {
      "title": "Dashboard",
      "items": [...]
    }
  }
}

// ❌ Bad: Flat data structure
{
  "data": {
    "userName": "John",
    "userTheme": "dark",
    "contentTitle": "Dashboard",
    "contentItems": [...]
  }
}
```

### 3. Error Prevention
```json
// ✅ Good: Safe data access
{
  "text": "{{user.name || 'Guest'}}"
}

// ❌ Bad: Unsafe data access
{
  "text": "{{user.profile.details.name}}"
}
```

## Testing the Render Engine 🧪

### Unit Testing
```typescript
// Basic render test
test('renders simple component', () => {
  const layout: RenderLayout = {
    id: 'test',
    root: {
      type: 'div',
      children: [{ text: 'Hello World' }]
    }
  }
  
  render(<RenderEngine layout={layout} />)
  expect(screen.getByText('Hello World')).toBeInTheDocument()
})

// Data interpolation test
test('interpolates data correctly', () => {
  const layout: RenderLayout = {
    id: 'test',
    data: { name: 'John' },
    root: {
      type: 'div',
      children: [{ text: 'Hello {{name}}' }]
    }
  }
  
  render(<RenderEngine layout={layout} />)
  expect(screen.getByText('Hello John')).toBeInTheDocument()
})
```

### Integration Testing
```typescript
// Component registry integration
test('renders registered components', () => {
  const layout: RenderLayout = {
    id: 'test',
    root: {
      type: 'Button',
      props: { variant: 'primary' },
      children: [{ text: 'Click me' }]
    }
  }
  
  render(<RenderEngine layout={layout} />)
  expect(screen.getByRole('button')).toHaveClass('bg-primary')
})
```

The Render Engine is a powerful and flexible system that enables JSON-to-React conversion with comprehensive features for data binding, component rendering, and error handling. 