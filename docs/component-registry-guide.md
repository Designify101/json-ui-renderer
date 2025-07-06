# Component Registry Guide 📚

This guide provides comprehensive documentation for the component registry system that manages component mapping, validation, and registration in the JSON UI/Graphics Generator.

## Overview 🎯

The Component Registry is a centralized system that:
- Maps component names to React components
- Defines prop validation schemas
- Manages component categories and organization
- Provides runtime component resolution
- Enables dynamic component loading

## Registry Structure 🏗️

### Core Files
```
components/render-engine/
├── component-registry.tsx   # Main registry and schemas
├── icon-registry.tsx       # Icon component mapping
└── render-engine.tsx       # Registry consumer
```

### Registry Architecture
```typescript
// Component mapping
export const componentRegistry: Record<string, React.ComponentType<any>>

// Prop validation schemas
export const componentPropSchemas: Record<string, any>

// Component categories (logical grouping)
const componentCategories = {
  ui: [...],
  charts: [...],
  animations: [...],
  custom: [...]
}
```

## Component Registration 📝

### Basic Registration Pattern
```typescript
// Import the component
import { MyComponent } from "@/components/custom/my-component"

// Register in componentRegistry
export const componentRegistry: Record<string, React.ComponentType<any>> = {
  // ... existing components
  MyComponent: MyComponent,
  
  // Alternative naming conventions
  "my-component": MyComponent,
  "MyCustomComponent": MyComponent,
}
```

### Registration Categories

#### 1. UI Components (shadcn/ui)
```typescript
// Core UI Components
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const componentRegistry = {
  // Basic UI
  Button: Button,
  Card: Card,
  CardContent: CardContent,
  CardDescription: CardDescription,
  CardFooter: CardFooter,
  CardHeader: CardHeader,
  CardTitle: CardTitle,
  Badge: Badge,
  
  // Form Components
  Select: Select,
  SelectContent: SelectContent,
  SelectItem: SelectItem,
  SelectTrigger: SelectTrigger,
  SelectValue: SelectValue,
}
```

#### 2. Chart Components
```typescript
// Chart Components
import { ChartBarDefault } from "@/components/charts/chart-bar-default"
import { ChartLineDefault } from "@/components/charts/chart-line-default"

export const componentRegistry = {
  // Bar Charts
  ChartBarDefault: ChartBarDefault,
  ChartBarHorizontal: ChartBarHorizontal,
  ChartBarMultiple: ChartBarMultiple,
  ChartBarStacked: ChartBarStacked,
  ChartBarNegative: ChartBarNegative,
  ChartBarInteractive: ChartBarInteractive,
  
  // Line Charts
  ChartLineDefault: ChartLineDefault,
  ChartLineMultiple: ChartLineMultiple,
  ChartLineInteractive: ChartLineInteractive,
  ChartLineDots: ChartLineDots,
  ChartLineStep: ChartLineStep,
}
```

#### 3. Animation Components (Framer Motion)
```typescript
// Framer Motion Components
import { motion } from "framer-motion"

export const componentRegistry = {
  // Motion Components
  "motion.div": motion.div,
  "motion.span": motion.span,
  "motion.button": motion.button,
  "motion.section": motion.section,
  "motion.article": motion.article,
}
```

#### 4. Custom Components
```typescript
// Custom Project Components
import { CardCarousel } from "@/components/custom/card-carousel"
import { InteractiveAreaChart } from "@/components/custom/interactive-area-chart"

export const componentRegistry = {
  // Custom Components
  CardCarousel: CardCarousel,
  InteractiveAreaChart: InteractiveAreaChart,
  
  // Icon Component
  Icon: Icon,
}
```

## Prop Schema Definition 🛡️

### Schema Structure
```typescript
export const componentPropSchemas: Record<string, any> = {
  ComponentName: {
    // Required props (no default validation)
    requiredProp: "any",
    
    // Enum validation
    variant: ["option1", "option2", "option3"],
    
    // Type validation
    disabled: "boolean",
    count: "number",
    title: "string",
    
    // Function validation
    onClick: "function",
    onValueChange: "function",
    
    // Array validation
    items: "array",
    
    // Object validation
    config: "object",
  }
}
```

### Example Schemas

#### Button Component Schema
```typescript
export const componentPropSchemas = {
  Button: {
    // Variant enum validation
    variant: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    
    // Size enum validation
    size: ["default", "sm", "lg", "icon"],
    
    // Boolean props
    disabled: "boolean",
    
    // String props
    type: "string",
    className: "string",
    
    // Function props
    onClick: "function",
    
    // React props
    children: "any",
  },
}
```

#### Chart Component Schema
```typescript
export const componentPropSchemas = {
  ChartBarDefault: {
    // Required data
    data: "array",
    
    // Configuration
    config: "object",
    
    // Display options
    title: "string",
    height: "number",
    width: "number",
    className: "string",
    
    // Chart options
    showGrid: "boolean",
    showTooltip: "boolean",
    showLegend: "boolean",
    showAxes: "boolean",
    
    // Data keys
    dataKey: "string",
    valueKey: "string",
    
    // Styling
    colors: "array",
    colorScheme: ["primary", "secondary", "accent"],
    
    // Events
    onDataPointClick: "function",
    onDataPointHover: "function",
  },
}
```

#### Icon Component Schema
```typescript
export const componentPropSchemas = {
  Icon: {
    // Required icon name
    name: "string",
    
    // Optional sizing
    size: ["number", "string"],
    
    // Optional styling
    color: "string",
    className: "string",
    style: "object",
  },
}
```

## Advanced Registry Features 🚀

### 1. Dynamic Component Loading
```typescript
// Lazy loading registry
export const lazyComponentRegistry = new Proxy({}, {
  get(target: any, prop: string) {
    if (!(prop in target)) {
      // Dynamic import on first access
      target[prop] = React.lazy(() => 
        import(`@/components/charts/chart-${prop.toLowerCase()}`)
          .then(module => ({ default: module.default }))
          .catch(() => ({ default: () => <div>Component not found</div> }))
      )
    }
    return target[prop]
  }
})

// Usage in render engine
const Component = lazyComponentRegistry[element.type] || componentRegistry[element.type]
```

### 2. Component Aliasing
```typescript
// Multiple names for same component
export const componentRegistry = {
  // Primary name
  ChartBarDefault: ChartBarDefault,
  
  // Aliases
  "chart-bar-default": ChartBarDefault,
  "BarChart": ChartBarDefault,
  "DefaultBarChart": ChartBarDefault,
  
  // Versioned components
  "ChartBarV1": ChartBarDefault,
  "ChartBarV2": ChartBarEnhanced,
}
```

### 3. Component Versioning
```typescript
// Version-aware registry
const componentVersions = {
  "ChartBar": {
    "1.0": ChartBarV1,
    "1.1": ChartBarV1_1,
    "2.0": ChartBarV2,
    "latest": ChartBarV2,
  }
}

function resolveVersionedComponent(name: string, version = "latest") {
  const versions = componentVersions[name]
  return versions?.[version] || versions?.["latest"]
}
```

### 4. Category-based Registration
```typescript
// Organized by category
const uiComponents = {
  Button, Card, Badge, Input, Select, // ...
}

const chartComponents = {
  ChartBarDefault, ChartLineDefault, ChartPieSimple, // ...
}

const animationComponents = {
  "motion.div": motion.div,
  "motion.span": motion.span,
  // ...
}

// Merge all categories
export const componentRegistry = {
  ...uiComponents,
  ...chartComponents,
  ...animationComponents,
}
```

## Registry Validation 🔍

### Schema Validation Implementation
```typescript
function validateProps(
  componentType: string, 
  props: Record<string, any>, 
  depth = 0
): Record<string, any> {
  const indent = "  ".repeat(depth)
  console.log(`${indent}🔍 validateProps: Validating props for ${componentType}`)
  
  const schema = componentPropSchemas[componentType]
  
  if (!schema) {
    console.log(`${indent}⚠️ validateProps: No schema found for ${componentType}`)
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
    
    // Validate prop based on schema
    const validatedValue = validatePropValue(key, value, expectedType, indent)
    if (validatedValue !== undefined) {
      validatedProps[key] = validatedValue
    }
  }
  
  return validatedProps
}

function validatePropValue(
  key: string, 
  value: any, 
  expectedType: any, 
  indent: string
): any {
  if (Array.isArray(expectedType)) {
    // Enum validation
    if (expectedType.includes(value)) {
      return value
    } else {
      console.warn(`${indent}❌ Invalid enum value ${value} for ${key}`, expectedType)
      return expectedType[0] // Default to first valid option
    }
  }
  
  switch (expectedType) {
    case "boolean":
      return Boolean(value)
    
    case "number":
      const num = Number(value)
      return isNaN(num) ? 0 : num
    
    case "string":
      return String(value)
    
    case "array":
      return Array.isArray(value) ? value : []
    
    case "object":
      return typeof value === "object" && value !== null ? value : {}
    
    case "function":
      return typeof value === "function" ? value : undefined
    
    default:
      return value
  }
}
```

### Runtime Type Checking
```typescript
// Enhanced validation with runtime checks
function validateComponentProps<T>(
  component: React.ComponentType<T>,
  props: Record<string, any>
): T {
  // Get component display name
  const componentName = component.displayName || component.name
  
  // Apply schema validation
  const validatedProps = validateProps(componentName, props)
  
  // Runtime type checking (if available)
  if (process.env.NODE_ENV === 'development') {
    checkPropTypes(component, validatedProps)
  }
  
  return validatedProps as T
}
```

## Registry Performance 📈

### 1. Component Caching
```typescript
// Component resolution cache
const componentCache = new Map<string, React.ComponentType<any>>()

export function getCachedComponent(type: string): React.ComponentType<any> | null {
  // Check cache first
  if (componentCache.has(type)) {
    return componentCache.get(type)!
  }
  
  // Resolve from registry
  const component = componentRegistry[type]
  
  if (component) {
    // Cache for future use
    componentCache.set(type, component)
    return component
  }
  
  return null
}
```

### 2. Schema Precompilation
```typescript
// Precompiled schemas for faster validation
const compiledSchemas = new Map<string, CompiledSchema>()

interface CompiledSchema {
  requiredProps: Set<string>
  enumProps: Map<string, string[]>
  typeProps: Map<string, string>
}

function compileSchema(componentType: string): CompiledSchema {
  const schema = componentPropSchemas[componentType]
  
  if (!schema) {
    return { requiredProps: new Set(), enumProps: new Map(), typeProps: new Map() }
  }
  
  const compiled: CompiledSchema = {
    requiredProps: new Set(),
    enumProps: new Map(),
    typeProps: new Map(),
  }
  
  for (const [prop, type] of Object.entries(schema)) {
    if (Array.isArray(type)) {
      compiled.enumProps.set(prop, type)
    } else {
      compiled.typeProps.set(prop, type)
    }
  }
  
  return compiled
}

// Use compiled schemas
function fastValidateProps(componentType: string, props: Record<string, any>) {
  let compiled = compiledSchemas.get(componentType)
  
  if (!compiled) {
    compiled = compileSchema(componentType)
    compiledSchemas.set(componentType, compiled)
  }
  
  // Fast validation using compiled schema
  return validateWithCompiledSchema(props, compiled)
}
```

## Registry Extensions 🔧

### 1. Plugin System Foundation
```typescript
// Plugin interface
interface ComponentPlugin {
  name: string
  version: string
  components: Record<string, React.ComponentType<any>>
  schemas?: Record<string, any>
}

// Plugin registry
const installedPlugins = new Map<string, ComponentPlugin>()

function installPlugin(plugin: ComponentPlugin) {
  // Validate plugin
  if (installedPlugins.has(plugin.name)) {
    throw new Error(`Plugin ${plugin.name} already installed`)
  }
  
  // Register plugin components
  Object.assign(componentRegistry, plugin.components)
  
  // Register schemas
  if (plugin.schemas) {
    Object.assign(componentPropSchemas, plugin.schemas)
  }
  
  // Store plugin info
  installedPlugins.set(plugin.name, plugin)
  
  console.log(`Plugin ${plugin.name}@${plugin.version} installed`)
}
```

### 2. Component Metadata
```typescript
// Enhanced component information
interface ComponentMetadata {
  category: string
  description: string
  examples: any[]
  deprecated?: boolean
  replacement?: string
  documentation?: string
}

export const componentMetadata: Record<string, ComponentMetadata> = {
  Button: {
    category: "ui",
    description: "Interactive button component with multiple variants",
    examples: [
      { props: { variant: "default" }, children: "Default Button" },
      { props: { variant: "outline" }, children: "Outline Button" },
    ],
    documentation: "/docs/components/button"
  },
  
  ChartBarDefault: {
    category: "charts",
    description: "Default bar chart for displaying categorical data",
    examples: [
      {
        props: {
          data: [
            { name: "A", value: 100 },
            { name: "B", value: 200 }
          ]
        }
      }
    ],
    documentation: "/docs/charts/bar-chart"
  },
}
```

### 3. Development Tools Integration
```typescript
// Development-only registry extensions
if (process.env.NODE_ENV === 'development') {
  // Component usage tracking
  const componentUsage = new Map<string, number>()
  
  // Wrap registry for usage tracking
  const originalRegistry = { ...componentRegistry }
  
  Object.keys(componentRegistry).forEach(key => {
    const OriginalComponent = originalRegistry[key]
    
    componentRegistry[key] = function TrackedComponent(props: any) {
      // Track usage
      componentUsage.set(key, (componentUsage.get(key) || 0) + 1)
      
      return React.createElement(OriginalComponent, props)
    } as any
  })
  
  // Expose usage stats
  ;(window as any).__COMPONENT_USAGE__ = componentUsage
}
```

## Testing the Registry 🧪

### Unit Tests
```typescript
// Registry tests
describe('Component Registry', () => {
  test('registers all UI components', () => {
    expect(componentRegistry.Button).toBeDefined()
    expect(componentRegistry.Card).toBeDefined()
    expect(componentRegistry.Badge).toBeDefined()
  })
  
  test('registers all chart components', () => {
    expect(componentRegistry.ChartBarDefault).toBeDefined()
    expect(componentRegistry.ChartLineDefault).toBeDefined()
    expect(componentRegistry.ChartPieSimple).toBeDefined()
  })
  
  test('validates props correctly', () => {
    const props = { variant: "primary", size: "lg" }
    const validated = validateProps("Button", props)
    
    expect(validated.variant).toBe("primary")
    expect(validated.size).toBe("lg")
  })
  
  test('handles invalid props gracefully', () => {
    const props = { variant: "invalid", unknownProp: "value" }
    const validated = validateProps("Button", props)
    
    expect(validated.variant).toBe("default") // Falls back to default
    expect(validated.unknownProp).toBe("value") // Passes through
  })
})
```

### Integration Tests
```typescript
// Registry integration tests
describe('Registry Integration', () => {
  test('renders registered components through engine', () => {
    const layout = {
      id: 'test',
      root: {
        type: 'Button',
        props: { variant: 'primary' },
        children: [{ text: 'Click me' }]
      }
    }
    
    render(<RenderEngine layout={layout} />)
    
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-primary')
  })
})
```

## Best Practices 💡

### 1. Registration Organization
```typescript
// ✅ Good: Organized imports and registration
// Import by category
import { /* UI components */ } from "@/components/ui/*"
import { /* Chart components */ } from "@/components/charts/*"

// Register by category
export const componentRegistry = {
  // UI Components
  ...uiComponents,
  
  // Chart Components  
  ...chartComponents,
  
  // Custom Components
  ...customComponents,
}
```

### 2. Schema Completeness
```typescript
// ✅ Good: Complete schema definition
Button: {
  variant: ["default", "destructive", "outline", "secondary", "ghost", "link"],
  size: ["default", "sm", "lg", "icon"],
  disabled: "boolean",
  className: "string",
  onClick: "function",
  children: "any",
},

// ❌ Bad: Incomplete schema
Button: {
  variant: ["default", "primary"], // Missing variants
  // Missing other props
},
```

### 3. Consistent Naming
```typescript
// ✅ Good: Consistent naming convention
ChartBarDefault: ChartBarDefault,
ChartBarHorizontal: ChartBarHorizontal,
ChartLineDefault: ChartLineDefault,

// ❌ Bad: Inconsistent naming
BarChart: ChartBarDefault,
LineChartDefault: ChartLineDefault,
horizontalBar: ChartBarHorizontal,
```

The Component Registry is the foundation that enables flexible, type-safe component rendering in the JSON UI/Graphics Generator system. 