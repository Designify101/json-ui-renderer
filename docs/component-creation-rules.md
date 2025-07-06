# Component Creation Rules 📐

This document provides comprehensive guidelines for creating new components in the JSON UI/Graphics Generator system. Following these rules ensures consistency, maintainability, and optimal integration with the existing architecture.

## Design Philosophy 🎨

### Core Principles
1. **JSON-First Design**: Components must be designed to work seamlessly with JSON configurations
2. **Theme Compatibility**: All components must support both light and dark themes
3. **Performance Focused**: Optimize for rendering performance and memory efficiency
4. **Accessibility First**: Implement WCAG 2.1 AA standards from the start
5. **Type Safety**: Leverage TypeScript for robust type checking
6. **Reusability**: Design components for maximum reusability across contexts

### Component Categories
- **Chart Components**: Data visualization components using Recharts
- **UI Components**: General user interface elements
- **Layout Components**: Structural and positioning components
- **Interactive Components**: User interaction and form elements
- **Animation Components**: Motion and transition components
- **Custom Components**: Project-specific business logic components

## Development Workflow 🔄

### Pre-Development Checklist
- [ ] Component purpose and requirements clearly defined
- [ ] JSON schema structure designed
- [ ] Props interface documented
- [ ] Theme compatibility planned
- [ ] Accessibility requirements identified
- [ ] Performance considerations evaluated
- [ ] Testing strategy outlined

### During Development Checklist
- [ ] Component follows established patterns
- [ ] Props are properly typed and validated
- [ ] Theme variables are used correctly
- [ ] Error handling is implemented
- [ ] Performance optimizations are applied
- [ ] Accessibility features are implemented
- [ ] Documentation is written inline

### Post-Development Checklist
- [ ] Component is registered in component registry
- [ ] Props schema is defined
- [ ] Unit tests are written and passing
- [ ] Integration tests cover JSON rendering
- [ ] Visual tests verify theme compatibility
- [ ] Performance tests validate rendering speed
- [ ] Documentation is complete and accurate
- [ ] Code review is completed

## File Organization 📁

### Directory Structure
```
components/
├── charts/                 # Chart-specific components
│   ├── chart-bar-*.tsx    # Bar chart variations
│   ├── chart-line-*.tsx   # Line chart variations
│   ├── chart-pie-*.tsx    # Pie chart variations
│   ├── chart-radar-*.tsx  # Radar chart variations
│   └── chart-radial-*.tsx # Radial chart variations
├── ui/                    # General UI components
│   ├── button.tsx         # Basic UI elements
│   ├── card.tsx
│   └── ...
├── custom/                # Project-specific components
│   ├── card-carousel.tsx  # Custom implementations
│   └── ...
├── render-engine/         # Core system components
│   ├── render-engine.tsx  # Main render engine
│   ├── component-registry.tsx # Component registry
│   └── icon-registry.tsx # Icon management
└── theme/                 # Theme-related components
    ├── theme-provider.tsx
    └── theme-toggle.tsx
```

### Naming Conventions
- **Chart Components**: `chart-[type]-[variation].tsx`
  - Example: `chart-bar-interactive.tsx`
- **UI Components**: `[component-name].tsx`
  - Example: `button.tsx`
- **Custom Components**: `[descriptive-name].tsx`
  - Example: `card-carousel.tsx`

## Component Structure Template 🏗️

### Basic Component Template
```typescript
"use client"

import React from "react"
import { cn } from "@/lib/utils"

// Import dependencies
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Define props interface
interface MyComponentProps {
  // Required props
  data: Array<{
    id: string
    value: number
    label: string
  }>
  
  // Optional props with defaults
  title?: string
  className?: string
  variant?: "default" | "compact" | "detailed"
  
  // Theme-aware props
  colorScheme?: "primary" | "secondary" | "accent"
  
  // Interaction props
  onValueChange?: (value: any) => void
  interactive?: boolean
  
  // Accessibility props
  ariaLabel?: string
  ariaDescription?: string
}

// Default props
const defaultProps: Partial<MyComponentProps> = {
  variant: "default",
  colorScheme: "primary",
  interactive: true,
}

// Main component
export function MyComponent({
  data,
  title,
  className,
  variant = "default",
  colorScheme = "primary",
  onValueChange,
  interactive = true,
  ariaLabel,
  ariaDescription,
  ...props
}: MyComponentProps) {
  // Component logic here
  
  return (
    <Card 
      className={cn(
        "w-full", // Base styles
        variant === "compact" && "p-2", // Variant styles
        className // User overrides
      )}
      aria-label={ariaLabel}
      aria-description={ariaDescription}
      {...props}
    >
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>
        {/* Component content */}
      </CardContent>
    </Card>
  )
}

// Export for registry
export default MyComponent
```

### Chart Component Template
```typescript
"use client"

import React from "react"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Chart-specific props interface
interface ChartBarCustomProps {
  data: Array<{
    [key: string]: any
  }>
  title?: string
  config?: Record<string, any>
  className?: string
  height?: number
  dataKey?: string
  
  // Chart-specific options
  showGrid?: boolean
  showTooltip?: boolean
  showAxes?: boolean
  
  // Theme integration
  colors?: string[]
  
  // Accessibility
  ariaLabel?: string
  ariaDescription?: string
}

export function ChartBarCustom({
  data,
  title,
  config,
  className,
  height = 300,
  dataKey,
  showGrid = true,
  showTooltip = true,
  showAxes = true,
  colors,
  ariaLabel,
  ariaDescription,
  ...props
}: ChartBarCustomProps) {
  // Chart logic and data processing
  
  return (
    <Card className={className}>
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>
        <ChartContainer
          config={config}
          className="h-[300px]"
          aria-label={ariaLabel}
          aria-description={ariaDescription}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              {showGrid && <CartesianGrid strokeDasharray="3 3" />}
              {showAxes && <XAxis dataKey={dataKey} />}
              {showAxes && <YAxis />}
              {showTooltip && (
                <ChartTooltip content={<ChartTooltipContent />} />
              )}
              <Bar dataKey="value" fill="var(--color-primary)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default ChartBarCustom
```

## Props Interface Design 🔧

### Required Props Guidelines
```typescript
interface ComponentProps {
  // Data props (required for functionality)
  data: DataType[]
  
  // Core functionality props
  value: string | number
  onChange: (value: any) => void
  
  // Essential display props
  children?: React.ReactNode
}
```

### Optional Props with Defaults
```typescript
interface ComponentProps {
  // Appearance variants
  variant?: "default" | "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  
  // Layout options
  className?: string
  style?: React.CSSProperties
  
  // Behavioral options
  disabled?: boolean
  interactive?: boolean
  
  // Theme integration
  colorScheme?: "primary" | "secondary" | "accent"
  
  // Accessibility
  ariaLabel?: string
  ariaDescription?: string
  role?: string
}
```

### Data Validation Patterns
```typescript
// Use Zod for runtime validation (recommended)
import { z } from "zod"

const DataSchema = z.object({
  id: z.string(),
  value: z.number(),
  label: z.string(),
  optional: z.string().optional()
})

type DataType = z.infer<typeof DataSchema>

// Validate data in component
function MyComponent({ data }: { data: DataType[] }) {
  // Validate data at runtime
  const validatedData = data.map(item => DataSchema.parse(item))
  
  // Use validated data
  return <div>{/* Component content */}</div>
}
```

## Error Handling Patterns 🚨

### Error Boundary Integration
```typescript
import { ErrorBoundary } from "react-error-boundary"

function MyComponent({ data }: ComponentProps) {
  // Validate required props
  if (!data || !Array.isArray(data)) {
    return <div className="text-red-500">Invalid data provided</div>
  }
  
  // Handle empty data
  if (data.length === 0) {
    return <div className="text-muted-foreground">No data to display</div>
  }
  
  return (
    <ErrorBoundary fallback={<ComponentErrorFallback />}>
      {/* Component content */}
    </ErrorBoundary>
  )
}

function ComponentErrorFallback() {
  return (
    <div className="p-4 border border-red-200 rounded bg-red-50">
      <h3 className="font-semibold text-red-800">Component Error</h3>
      <p className="text-red-600">This component encountered an error.</p>
    </div>
  )
}
```

### Graceful Degradation
```typescript
function MyComponent({ data, fallback }: ComponentProps) {
  try {
    // Attempt to render component
    return <ComplexComponent data={data} />
  } catch (error) {
    console.error("Component error:", error)
    
    // Fallback to simple rendering
    return fallback || <SimpleComponent data={data} />
  }
}
```

## Theme Integration 🎨

### Using Theme Variables
```typescript
// CSS-in-JS approach
const styles = {
  container: {
    backgroundColor: "hsl(var(--background))",
    color: "hsl(var(--foreground))",
    borderColor: "hsl(var(--border))",
  },
  primary: {
    backgroundColor: "hsl(var(--primary))",
    color: "hsl(var(--primary-foreground))",
  },
  secondary: {
    backgroundColor: "hsl(var(--secondary))",
    color: "hsl(var(--secondary-foreground))",
  }
}

// Tailwind CSS approach
<div className="bg-background text-foreground border-border">
  <div className="bg-primary text-primary-foreground">
    Primary content
  </div>
</div>
```

### Theme-Aware Chart Colors
```typescript
// Use theme-aware colors in charts
const getChartColors = (theme: "light" | "dark") => ({
  primary: theme === "light" ? "#3b82f6" : "#60a5fa",
  secondary: theme === "light" ? "#10b981" : "#34d399",
  accent: theme === "light" ? "#f59e0b" : "#fbbf24",
})

// In component
const { theme } = useTheme()
const colors = getChartColors(theme)
```

## Registry Registration 📋

### Component Registry Entry
```typescript
// In component-registry.tsx
import { MyComponent } from "@/components/custom/my-component"

export const componentRegistry: Record<string, React.ComponentType<any>> = {
  // ... existing components
  MyComponent: MyComponent,
  // Alternative naming
  "my-component": MyComponent,
}
```

### Props Schema Definition
```typescript
// In component-registry.tsx
export const componentPropSchemas: Record<string, any> = {
  MyComponent: {
    // Required props
    data: "array",
    
    // Optional props with validation
    variant: ["default", "primary", "secondary"],
    size: ["sm", "md", "lg"],
    disabled: "boolean",
    interactive: "boolean",
    
    // String props
    title: "string",
    className: "string",
    
    // Number props
    height: "number",
    
    // Function props
    onChange: "function",
    onValueChange: "function",
  },
}
```

## Chart-Specific Requirements 📊

### Chart Component Standards
```typescript
interface ChartComponentProps {
  // Data requirements
  data: ChartDataType[]
  config?: ChartConfig
  
  // Standard chart props
  title?: string
  height?: number
  className?: string
  
  // Chart-specific options
  showGrid?: boolean
  showTooltip?: boolean
  showLegend?: boolean
  showAxes?: boolean
  
  // Data keys
  dataKey?: string
  xAxisKey?: string
  yAxisKey?: string
  
  // Colors and theming
  colors?: string[]
  colorScheme?: "primary" | "secondary" | "accent"
  
  // Interactions
  onDataPointClick?: (data: any) => void
  onDataPointHover?: (data: any) => void
  
  // Accessibility
  ariaLabel?: string
  ariaDescription?: string
}
```

### Chart Data Processing
```typescript
// Standardized data processing
function processChartData(data: any[], config: ChartConfig) {
  return data.map(item => ({
    ...item,
    // Ensure required fields exist
    id: item.id || generateId(),
    value: Number(item.value) || 0,
    label: item.label || String(item.id),
  }))
}
```

## Styling Guidelines 🎨

### CSS Class Organization
```typescript
// Use cn() utility for conditional classes
import { cn } from "@/lib/utils"

<div className={cn(
  // Base styles (always applied)
  "w-full rounded-lg border",
  
  // Conditional styles
  variant === "primary" && "border-primary bg-primary/10",
  variant === "secondary" && "border-secondary bg-secondary/10",
  
  // Size variants
  size === "sm" && "p-2 text-sm",
  size === "md" && "p-4 text-base",
  size === "lg" && "p-6 text-lg",
  
  // State styles
  disabled && "opacity-50 cursor-not-allowed",
  interactive && "cursor-pointer hover:shadow-md",
  
  // User overrides (last to ensure priority)
  className
)}>
```

### CSS Extraction Compatibility
```typescript
// Ensure all CSS classes are extractable
const staticClasses = [
  "w-full", "h-full", "p-4", "m-2", "rounded-lg",
  "bg-primary", "text-primary-foreground",
  "border-border", "hover:bg-accent",
]

// Avoid dynamic class generation
// ❌ Don't do this:
const dynamicClass = `w-${width} h-${height}` // Not extractable

// ✅ Do this instead:
const sizeClasses = {
  sm: "w-64 h-32",
  md: "w-96 h-48",
  lg: "w-full h-64",
}
```

## Testing Requirements 🧪

### Unit Tests
```typescript
// Component.test.tsx
import { render, screen } from "@testing-library/react"
import { MyComponent } from "./MyComponent"

describe("MyComponent", () => {
  const mockData = [
    { id: "1", value: 100, label: "Test" }
  ]

  test("renders with required props", () => {
    render(<MyComponent data={mockData} />)
    expect(screen.getByText("Test")).toBeInTheDocument()
  })

  test("applies custom className", () => {
    render(<MyComponent data={mockData} className="custom-class" />)
    expect(screen.getByRole("region")).toHaveClass("custom-class")
  })

  test("handles empty data gracefully", () => {
    render(<MyComponent data={[]} />)
    expect(screen.getByText("No data to display")).toBeInTheDocument()
  })
})
```

### Integration Tests
```typescript
// Integration test with RenderEngine
import { RenderEngine } from "@/components/render-engine/render-engine"
import type { RenderLayout } from "@/types/render-schema"

describe("MyComponent Integration", () => {
  test("renders through RenderEngine", () => {
    const layout: RenderLayout = {
      id: "test",
      root: {
        type: "MyComponent",
        props: {
          data: [{ id: "1", value: 100, label: "Test" }]
        }
      }
    }

    render(<RenderEngine layout={layout} />)
    expect(screen.getByText("Test")).toBeInTheDocument()
  })
})
```

## Performance Optimization 🚀

### Memoization Patterns
```typescript
import React, { memo, useMemo } from "react"

// Memoize expensive components
export const MyComponent = memo(function MyComponent({ data, ...props }) {
  // Memoize expensive calculations
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      computed: expensiveCalculation(item)
    }))
  }, [data])

  return <div>{/* Component content */}</div>
})

// Custom comparison function if needed
export const MyComponent = memo(function MyComponent(props) {
  // Component logic
}, (prevProps, nextProps) => {
  // Custom comparison logic
  return prevProps.data === nextProps.data
})
```

### Lazy Loading
```typescript
import { lazy, Suspense } from "react"

// Lazy load heavy components
const HeavyChartComponent = lazy(() => import("./HeavyChartComponent"))

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading chart...</div>}>
      <HeavyChartComponent />
    </Suspense>
  )
}
```

## Security Guidelines 🔒

### Input Sanitization
```typescript
// Sanitize user inputs
import DOMPurify from "dompurify"

function MyComponent({ userContent }: { userContent: string }) {
  // Sanitize HTML content
  const sanitizedContent = DOMPurify.sanitize(userContent)
  
  return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
}
```

### Prop Validation
```typescript
// Validate props to prevent injection
function MyComponent({ className, style }: ComponentProps) {
  // Validate className
  const safeClassName = className?.replace(/[<>]/g, "") || ""
  
  // Validate style object
  const safeStyle = style && typeof style === "object" ? style : {}
  
  return <div className={safeClassName} style={safeStyle} />
}
```

## Common Pitfalls ⚠️

### Avoid These Patterns
```typescript
// ❌ Don't mutate props directly
function MyComponent({ data }: { data: DataType[] }) {
  data.push({ id: "new", value: 0 }) // Mutates original data
  return <div>{data.length}</div>
}

// ✅ Create new arrays/objects
function MyComponent({ data }: { data: DataType[] }) {
  const newData = [...data, { id: "new", value: 0 }]
  return <div>{newData.length}</div>
}

// ❌ Don't use array indices as keys
{data.map((item, index) => (
  <div key={index}>{item.label}</div>
))}

// ✅ Use stable, unique keys
{data.map(item => (
  <div key={item.id}>{item.label}</div>
))}

// ❌ Don't use inline objects in JSX
<MyComponent config={{ option: true }} />

// ✅ Define objects outside render
const config = { option: true }
<MyComponent config={config} />
```

## Best Practices Summary ✅

### Component Design
- ✅ Design for JSON compatibility first
- ✅ Support both light and dark themes
- ✅ Include comprehensive error handling
- ✅ Implement proper accessibility features
- ✅ Use TypeScript for type safety
- ✅ Follow established naming conventions

### Code Quality
- ✅ Write comprehensive tests
- ✅ Document all props and behavior
- ✅ Use consistent code formatting
- ✅ Implement proper error boundaries
- ✅ Follow performance best practices
- ✅ Maintain security standards

### Integration
- ✅ Register components in registry
- ✅ Define prop schemas
- ✅ Ensure CSS extraction compatibility
- ✅ Test with RenderEngine
- ✅ Validate theme compatibility
- ✅ Verify JSON serialization

This comprehensive guide ensures all components maintain high quality, consistency, and optimal integration with the JSON UI/Graphics Generator system. 