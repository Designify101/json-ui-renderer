# API Reference

Comprehensive reference for all components, functions, and APIs in the JSON UI system.

## Table of Contents

1. [Render Engine API](#render-engine-api)
2. [Component Registry](#component-registry)
3. [Core Components](#core-components)
4. [Chart Components](#chart-components)
5. [Template Functions](#template-functions)
6. [Type Definitions](#type-definitions)
7. [Utility Functions](#utility-functions)

## Render Engine API

### RenderEngine

Main component for rendering JSON layouts.

```typescript
interface RenderEngineProps {
  layout: RenderLayout
  showJsonButton?: boolean
  isRootElement?: boolean
}
```

**Props:**
- `layout`: The JSON configuration to render
- `showJsonButton`: Whether to show JSON debug button (default: false)
- `isRootElement`: Whether this is a root render (default: false)

**Example:**
```typescript
<RenderEngine 
  layout={jsonLayout}
  showJsonButton={true}
  isRootElement={true}
/>
```

### Functions

#### processContent()
Processes text content with data interpolation.

```typescript
function processContent(text: string, data?: Record<string, any>): string
```

**Parameters:**
- `text`: Text content with interpolation syntax
- `data`: Data object for interpolation

**Returns:** Processed text with interpolated values

#### processProps()
Processes component props with data interpolation.

```typescript
function processProps(props: Record<string, any>, data?: Record<string, any>): Record<string, any>
```

#### validateProps()
Validates component props against schema.

```typescript
function validateProps(componentType: string, props: Record<string, any>): Record<string, any>
```

## Component Registry

### componentRegistry

Registry mapping component names to React components.

```typescript
export const componentRegistry: Record<string, React.ComponentType<any>>
```

**Available Components:**
- UI Components: Button, Card, Badge, Select
- Chart Components: ChartBarDefault, ChartLineDefault, ChartPieSimple
- Motion Components: motion.div, motion.span, motion.button
- Custom Components: CardCarousel, InteractiveAreaChart

### componentPropSchemas

Schema definitions for component prop validation.

```typescript
export const componentPropSchemas: Record<string, any>
```

## Core Components

### Button

Basic button component with multiple variants.

```typescript
interface ButtonProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  disabled?: boolean
  onClick?: () => void
  children?: React.ReactNode
  className?: string
}
```

**JSON Usage:**
```json
{
  "type": "Button",
  "props": {
    "variant": "default",
    "size": "lg",
    "disabled": false,
    "className": "w-full"
  },
  "children": [
    {
      "text": "Click Me"
    }
  ]
}
```

### Card

Container component with header, content, and footer sections.

```typescript
interface CardProps {
  className?: string
  children?: React.ReactNode
}
```

**Sub-components:**
- CardHeader
- CardTitle
- CardDescription
- CardContent
- CardFooter

**JSON Usage:**
```json
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
          "children": [
            {
              "text": "Card Title"
            }
          ]
        }
      ]
    },
    {
      "type": "CardContent",
      "children": [
        {
          "text": "Card content goes here"
        }
      ]
    }
  ]
}
```

### Badge

Status indicator component.

```typescript
interface BadgeProps {
  variant?: "default" | "secondary" | "destructive" | "outline"
  className?: string
  children?: React.ReactNode
}
```

## Chart Components

### ChartBarDefault

Basic bar chart component.

```typescript
interface ChartBarDefaultProps {
  data: Array<Record<string, any>>
  config: {
    xAxisKey: string
    yAxisKey: string
    color?: string
    tooltip?: boolean
    legend?: boolean
    responsive?: boolean
    width?: number
    height?: number
  }
}
```

**JSON Usage:**
```json
{
  "type": "ChartBarDefault",
  "props": {
    "data": [
      {"month": "Jan", "value": 1000},
      {"month": "Feb", "value": 1200}
    ],
    "config": {
      "xAxisKey": "month",
      "yAxisKey": "value",
      "color": "hsl(var(--chart-1))"
    }
  }
}
```

### ChartLineDefault

Basic line chart component.

```typescript
interface ChartLineDefaultProps {
  data: Array<Record<string, any>>
  config: {
    xAxisKey: string
    yAxisKey: string
    color?: string
    strokeWidth?: number
    dotSize?: number
  }
}
```

### ChartPieSimple

Basic pie chart component.

```typescript
interface ChartPieSimpleProps {
  data: Array<{
    name: string
    value: number
    fill?: string
  }>
  config: {
    dataKey: string
    nameKey: string
    tooltip?: boolean
    legend?: boolean
  }
}
```

## Template Functions

### Template Creation

Functions for creating and managing templates.

#### createTemplate()
Creates a new template with validation.

```typescript
function createTemplate(template: Partial<RenderLayout>): RenderLayout
```

#### validateTemplate()
Validates template structure.

```typescript
function validateTemplate(template: RenderLayout): boolean
```

#### mergeTemplates()
Merges multiple templates.

```typescript
function mergeTemplates(base: RenderLayout, ...templates: Partial<RenderLayout>[]): RenderLayout
```

## Type Definitions

### RenderLayout

Main layout interface for JSON configurations.

```typescript
interface RenderLayout {
  id: string
  title?: string
  description?: string
  data?: Record<string, any>
  root: RenderElement
  styles?: string
}
```

### RenderElement

Union type for all possible elements.

```typescript
type RenderElement = 
  | ComponentElement
  | TextElement
  | TagElement
  | SvgElement
  | IconElement
```

### ComponentElement

Element representing a React component.

```typescript
interface ComponentElement {
  type: string
  props?: Record<string, any>
  children?: RenderElement[]
  key?: string
}
```

### TextElement

Element representing text content.

```typescript
interface TextElement {
  text: string
}
```

### TagElement

Element representing an HTML tag.

```typescript
interface TagElement {
  tag: string
  props?: Record<string, any>
  children?: RenderElement[]
  key?: string
}
```

### SvgElement

Element representing SVG content.

```typescript
interface SvgElement {
  type: "svg"
  props?: Record<string, any>
  children?: RenderElement[]
  key?: string
}
```

### IconElement

Element representing an icon.

```typescript
interface IconElement {
  type: "Icon"
  props: {
    name: string
    size?: number | string
    color?: string
    className?: string
  }
}
```

## Utility Functions

### Data Helpers

#### getNestedValue()
Retrieves nested object values using dot notation.

```typescript
function getNestedValue(obj: any, path: string): any
```

**Example:**
```typescript
const data = { user: { profile: { name: "John" } } }
const name = getNestedValue(data, "user.profile.name") // "John"
```

#### hasNestedProperty()
Checks if nested property exists.

```typescript
function hasNestedProperty(obj: any, path: string): boolean
```

#### flattenObject()
Flattens nested objects.

```typescript
function flattenObject(obj: Record<string, any>, prefix = ""): Record<string, any>
```

### Template Helpers

#### extractInterpolations()
Extracts interpolation patterns from text.

```typescript
function extractInterpolations(text: string): string[]
```

#### replaceInterpolations()
Replaces interpolation patterns with values.

```typescript
function replaceInterpolations(text: string, data: Record<string, any>): string
```

### Validation Helpers

#### isValidJSON()
Validates JSON string.

```typescript
function isValidJSON(json: string): boolean
```

#### isValidComponent()
Validates component structure.

```typescript
function isValidComponent(element: any): boolean
```

## Error Handling

### Error Types

#### RenderError
Base error for rendering issues.

```typescript
class RenderError extends Error {
  constructor(message: string, element?: RenderElement)
}
```

#### ValidationError
Error for validation failures.

```typescript
class ValidationError extends Error {
  constructor(message: string, path?: string)
}
```

#### ComponentError
Error for component-specific issues.

```typescript
class ComponentError extends Error {
  constructor(message: string, componentType: string)
}
```

### Error Handling Functions

#### handleRenderError()
Handles rendering errors gracefully.

```typescript
function handleRenderError(error: Error, element: RenderElement): React.ReactNode
```

#### logError()
Logs errors with context.

```typescript
function logError(error: Error, context?: any): void
```

## Examples

### Basic Usage

```typescript
// Create a simple layout
const layout: RenderLayout = {
  id: "simple-card",
  title: "Simple Card",
  data: {
    title: "Hello World",
    content: "This is a simple card example"
  },
  root: {
    type: "Card",
    props: {
      className: "p-4"
    },
    children: [
      {
        type: "CardHeader",
        children: [
          {
            type: "CardTitle",
            children: [
              {
                text: "{{title}}"
              }
            ]
          }
        ]
      },
      {
        type: "CardContent",
        children: [
          {
            text: "{{content}}"
          }
        ]
      }
    ]
  }
}

// Render the layout
<RenderEngine layout={layout} />
```

### Advanced Usage

```typescript
// Create a chart with dynamic data
const chartLayout: RenderLayout = {
  id: "sales-chart",
  title: "Sales Chart",
  data: {
    chartData: [
      { month: "Jan", sales: 1000 },
      { month: "Feb", sales: 1200 },
      { month: "Mar", sales: 900 }
    ],
    config: {
      xAxisKey: "month",
      yAxisKey: "sales",
      color: "hsl(var(--chart-1))"
    }
  },
  root: {
    type: "ChartBarDefault",
    props: {
      data: "{{chartData}}",
      config: "{{config}}"
    }
  }
}

// Render with JSON button
<RenderEngine 
  layout={chartLayout}
  showJsonButton={true}
  isRootElement={true}
/>
```

## Related Documentation

- [Render Engine Guide](./render-engine-guide.md)
- [Component Registry Guide](./component-registry-guide.md)
- [JSON Schema Reference](./json-schema-reference.md)
- [Chart Components Guide](./chart-components-guide.md)
- [Error Handling Guide](./error-handling-guide.md) 