# Error Handling Guide

Comprehensive guide for error handling patterns, debugging strategies, and troubleshooting in the JSON UI system.

## Table of Contents

1. [Overview](#overview)
2. [Error Types](#error-types)
3. [Error Handling Patterns](#error-handling-patterns)
4. [Debugging Strategies](#debugging-strategies)
5. [Common Issues](#common-issues)
6. [Error Recovery](#error-recovery)
7. [Logging & Monitoring](#logging--monitoring)
8. [Best Practices](#best-practices)

## Overview

The JSON UI system implements robust error handling to provide:
- **Graceful Degradation**: Components continue working despite errors
- **Helpful Error Messages**: Clear, actionable error information
- **Debug Information**: Detailed logging for development
- **Error Recovery**: Automatic recovery from common issues
- **User Experience**: Minimal impact on user experience

## Error Types

### Rendering Errors

#### Component Not Found
When a component is not registered in the registry.

```typescript
// Error detection
if (!Component) {
  console.error(`Component "${element.type}" not found in registry`)
  return (
    <div className="text-red-500 p-2 border border-red-300 rounded">
      Unknown component: {element.type}
    </div>
  )
}
```

#### Invalid Props
When component props don't match schema requirements.

```typescript
// Prop validation error
function validateProps(componentType: string, props: Record<string, any>): Record<string, any> {
  const schema = componentPropSchemas[componentType]
  if (!schema) return props
  
  const errors: string[] = []
  const validated: Record<string, any> = {}
  
  for (const [key, value] of Object.entries(props)) {
    try {
      validated[key] = validatePropValue(value, schema[key])
    } catch (error) {
      errors.push(`Invalid prop "${key}": ${error.message}`)
    }
  }
  
  if (errors.length > 0) {
    console.warn(`Prop validation errors for ${componentType}:`, errors)
  }
  
  return validated
}
```

### Data Errors

#### Interpolation Failures
When data interpolation fails due to missing data.

```typescript
// Safe interpolation with fallback
function processContent(text: string, data?: Record<string, any>): string {
  if (!text || !data) return text
  
  return text.replace(/\{\{(\w+(?:\.\w+)*)\}\}/g, (match, path) => {
    try {
      const value = getNestedValue(data, path)
      return value !== undefined ? String(value) : `[Missing: ${path}]`
    } catch (error) {
      console.warn(`Failed to interpolate ${path}:`, error)
      return `[Error: ${path}]`
    }
  })
}
```

#### Invalid JSON Structure
When JSON doesn't conform to expected schema.

```typescript
// JSON validation
function validateLayout(layout: any): layout is RenderLayout {
  const errors: string[] = []
  
  if (!layout.id) {
    errors.push("Missing required 'id' field")
  }
  
  if (!layout.root) {
    errors.push("Missing required 'root' field")
  }
  
  if (layout.root && !layout.root.type && !layout.root.tag) {
    errors.push("Root element must have 'type' or 'tag' property")
  }
  
  if (errors.length > 0) {
    throw new ValidationError(`Invalid layout: ${errors.join(', ')}`)
  }
  
  return true
}
```

### Chart Errors

#### Invalid Chart Data
When chart data is malformed or empty.

```typescript
// Chart data validation
function validateChartData(data: any[], config: any): void {
  if (!Array.isArray(data)) {
    throw new Error("Chart data must be an array")
  }
  
  if (data.length === 0) {
    throw new Error("Chart data cannot be empty")
  }
  
  if (!config.xAxisKey || !config.yAxisKey) {
    throw new Error("Chart config must specify xAxisKey and yAxisKey")
  }
  
  // Validate data structure
  const firstItem = data[0]
  if (!firstItem[config.xAxisKey] || !firstItem[config.yAxisKey]) {
    throw new Error(`Chart data missing required keys: ${config.xAxisKey}, ${config.yAxisKey}`)
  }
}
```

## Error Handling Patterns

### Error Boundaries

#### React Error Boundary
Catch rendering errors at component level.

```typescript
class RenderErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Render error caught by boundary:', error, errorInfo)
    
    // Log to error reporting service
    logError(error, {
      componentStack: errorInfo.componentStack,
      errorBoundary: 'RenderErrorBoundary'
    })
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="text-red-500 p-4 border border-red-300 rounded">
          <h3 className="font-semibold mb-2">Rendering Error</h3>
          <p className="text-sm">Something went wrong while rendering this component.</p>
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-2">
              <summary className="cursor-pointer">Error Details</summary>
              <pre className="text-xs mt-2 p-2 bg-gray-100 rounded">
                {this.state.error?.stack}
              </pre>
            </details>
          )}
        </div>
      )
    }

    return this.props.children
  }
}
```

#### Usage in Render Engine
```typescript
export function RenderEngine({ layout, showJsonButton, isRootElement }: RenderEngineProps) {
  return (
    <RenderErrorBoundary>
      {/* Render engine content */}
    </RenderErrorBoundary>
  )
}
```

### Try-Catch Patterns

#### Safe Component Rendering
```typescript
function renderElement(element: RenderElement, index?: number, depth = 0): React.ReactNode {
  try {
    // Component rendering logic
    return renderElementInternal(element, index, depth)
  } catch (error) {
    console.error('Error rendering element:', error, element)
    
    return (
      <div className="text-red-500 p-2 border border-red-300 rounded text-sm">
        <strong>Render Error:</strong> {error.message}
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-1">
            <summary>Element Details</summary>
            <pre className="text-xs mt-1">{JSON.stringify(element, null, 2)}</pre>
          </details>
        )}
      </div>
    )
  }
}
```

#### Safe Data Processing
```typescript
function safeProcessProps(props: Record<string, any>, data?: Record<string, any>): Record<string, any> {
  try {
    return processProps(props, data)
  } catch (error) {
    console.warn('Error processing props:', error)
    return props // Return original props as fallback
  }
}
```

## Debugging Strategies

### Development Debugging

#### Debug Logging
Enable comprehensive logging during development.

```typescript
const DEBUG = process.env.NODE_ENV === 'development'

function debugLog(category: string, message: string, data?: any) {
  if (DEBUG) {
    console.log(`🐛 [${category}] ${message}`, data || '')
  }
}

// Usage in render engine
debugLog('RenderEngine', 'Starting render process', layout)
debugLog('Component', `Rendering ${element.type}`, element.props)
debugLog('Data', 'Processing interpolation', { text, data })
```

#### Render Tracing
Track rendering performance and identify bottlenecks.

```typescript
function withRenderTracing<T extends React.ComponentType<any>>(
  Component: T,
  componentName: string
): T {
  const TracedComponent = (props: any) => {
    const startTime = performance.now()
    
    useEffect(() => {
      const endTime = performance.now()
      debugLog('Performance', `${componentName} rendered in ${endTime - startTime}ms`)
    })
    
    return <Component {...props} />
  }
  
  TracedComponent.displayName = `Traced(${componentName})`
  return TracedComponent as T
}
```

### Production Debugging

#### Error Reporting
Collect and report errors in production.

```typescript
interface ErrorReport {
  error: Error
  context: {
    component?: string
    props?: any
    layout?: RenderLayout
    userAgent?: string
    timestamp: number
  }
}

function reportError(error: Error, context: Partial<ErrorReport['context']> = {}) {
  const report: ErrorReport = {
    error: {
      name: error.name,
      message: error.message,
      stack: error.stack,
    },
    context: {
      ...context,
      userAgent: navigator.userAgent,
      timestamp: Date.now(),
    }
  }
  
  // Send to error reporting service
  if (process.env.NODE_ENV === 'production') {
    fetch('/api/errors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(report)
    }).catch(console.error)
  } else {
    console.error('Error Report:', report)
  }
}
```

## Common Issues

### Component Issues

#### Component Not Registered
**Error**: `Component "MyComponent" not found in registry`

**Cause**: Component not added to component registry

**Solution**:
```typescript
// Add to component-registry.tsx
import { MyComponent } from '@/components/custom/my-component'

export const componentRegistry = {
  // ... existing components
  MyComponent: MyComponent,
}
```

#### Invalid Component Props
**Error**: `Invalid prop "variant" for component "Button"`

**Cause**: Prop value doesn't match schema

**Solution**:
```typescript
// Check component schema
export const componentPropSchemas = {
  Button: {
    variant: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    // Use valid variant value
  }
}
```

### Data Issues

#### Missing Interpolation Data
**Error**: `[Missing: user.name]` appears in output

**Cause**: Data not provided for interpolation

**Solution**:
```json
{
  "data": {
    "user": {
      "name": "John Doe"  // Ensure data exists
    }
  },
  "root": {
    "text": "Hello {{user.name}}"
  }
}
```

#### Circular Data References
**Error**: `Converting circular structure to JSON`

**Cause**: Circular references in data object

**Solution**:
```typescript
// Remove circular references before passing data
function removeCircularReferences(obj: any, seen = new WeakSet()): any {
  if (obj === null || typeof obj !== 'object') return obj
  if (seen.has(obj)) return '[Circular]'
  
  seen.add(obj)
  
  if (Array.isArray(obj)) {
    return obj.map(item => removeCircularReferences(item, seen))
  }
  
  const result: any = {}
  for (const [key, value] of Object.entries(obj)) {
    result[key] = removeCircularReferences(value, seen)
  }
  
  return result
}
```

### Chart Issues

#### Chart Not Rendering
**Error**: Chart appears empty or doesn't render

**Common Causes & Solutions**:

1. **Invalid Data Format**:
```typescript
// Ensure data is array of objects
const validData = [
  { month: "Jan", value: 100 },
  { month: "Feb", value: 200 }
]
```

2. **Missing Chart Configuration**:
```json
{
  "config": {
    "xAxisKey": "month",
    "yAxisKey": "value",
    "color": "hsl(var(--chart-1))"
  }
}
```

3. **Component Not Imported**:
```typescript
// Ensure chart component is imported in registry
import { ChartBarDefault } from '@/components/charts/chart-bar-default'
```

## Error Recovery

### Automatic Recovery

#### Fallback Components
Provide fallback components for failed renders.

```typescript
function createFallbackComponent(error: Error, originalElement: RenderElement) {
  return {
    type: "Card",
    props: {
      className: "p-4 border-red-300 bg-red-50"
    },
    children: [
      {
        type: "CardHeader",
        children: [
          {
            type: "CardTitle",
            props: { className: "text-red-700" },
            children: [{ text: "Component Error" }]
          }
        ]
      },
      {
        type: "CardContent",
        children: [
          {
            text: `Failed to render component: ${originalElement.type || 'Unknown'}`
          }
        ]
      }
    ]
  }
}
```

#### Data Recovery
Recover from data errors with defaults.

```typescript
function recoverData(data: any, schema: any): any {
  const recovered = { ...data }
  
  // Apply default values for missing required fields
  for (const [key, definition] of Object.entries(schema)) {
    if (definition.required && !recovered[key]) {
      recovered[key] = definition.default || getDefaultValue(definition.type)
    }
  }
  
  return recovered
}

function getDefaultValue(type: string): any {
  switch (type) {
    case 'string': return ''
    case 'number': return 0
    case 'boolean': return false
    case 'array': return []
    case 'object': return {}
    default: return null
  }
}
```

### Manual Recovery

#### Reset Functionality
Provide manual reset options.

```typescript
function useErrorRecovery() {
  const [error, setError] = useState<Error | null>(null)
  
  const recoverFromError = useCallback(() => {
    setError(null)
    // Additional recovery logic
  }, [])
  
  const handleError = useCallback((error: Error) => {
    setError(error)
    reportError(error)
  }, [])
  
  return { error, recoverFromError, handleError }
}
```

## Logging & Monitoring

### Development Logging

#### Structured Logging
Use structured logging for better debugging.

```typescript
interface LogEntry {
  level: 'debug' | 'info' | 'warn' | 'error'
  category: string
  message: string
  data?: any
  timestamp: number
  stack?: string
}

class Logger {
  private logs: LogEntry[] = []
  
  log(level: LogEntry['level'], category: string, message: string, data?: any) {
    const entry: LogEntry = {
      level,
      category,
      message,
      data,
      timestamp: Date.now(),
      stack: level === 'error' ? new Error().stack : undefined
    }
    
    this.logs.push(entry)
    
    if (process.env.NODE_ENV === 'development') {
      console[level](`[${category}] ${message}`, data || '')
    }
  }
  
  getLogs(filter?: Partial<LogEntry>): LogEntry[] {
    if (!filter) return this.logs
    
    return this.logs.filter(entry => {
      return Object.entries(filter).every(([key, value]) => entry[key] === value)
    })
  }
  
  exportLogs(): string {
    return JSON.stringify(this.logs, null, 2)
  }
}

export const logger = new Logger()
```

### Production Monitoring

#### Error Metrics
Track error rates and patterns.

```typescript
interface ErrorMetrics {
  totalErrors: number
  errorsByComponent: Record<string, number>
  errorsByType: Record<string, number>
  lastError?: {
    timestamp: number
    message: string
    component?: string
  }
}

class ErrorTracker {
  private metrics: ErrorMetrics = {
    totalErrors: 0,
    errorsByComponent: {},
    errorsByType: {}
  }
  
  trackError(error: Error, component?: string) {
    this.metrics.totalErrors++
    
    if (component) {
      this.metrics.errorsByComponent[component] = 
        (this.metrics.errorsByComponent[component] || 0) + 1
    }
    
    this.metrics.errorsByType[error.name] = 
      (this.metrics.errorsByType[error.name] || 0) + 1
    
    this.metrics.lastError = {
      timestamp: Date.now(),
      message: error.message,
      component
    }
  }
  
  getMetrics(): ErrorMetrics {
    return { ...this.metrics }
  }
  
  reset() {
    this.metrics = {
      totalErrors: 0,
      errorsByComponent: {},
      errorsByType: {}
    }
  }
}

export const errorTracker = new ErrorTracker()
```

## Best Practices

### Error Prevention

1. **Validate Early**: Validate data and props as early as possible
2. **Type Safety**: Use TypeScript for better type safety
3. **Schema Validation**: Define and validate schemas
4. **Defensive Programming**: Check for null/undefined values
5. **Error Boundaries**: Use error boundaries to contain errors

### Error Handling

1. **Graceful Degradation**: Provide fallbacks for failed components
2. **User-Friendly Messages**: Show helpful error messages to users
3. **Developer Information**: Provide detailed debug information
4. **Error Reporting**: Report errors for monitoring and fixing
5. **Recovery Mechanisms**: Implement automatic and manual recovery

### Debugging

1. **Comprehensive Logging**: Log important events and errors
2. **Debug Tools**: Use React DevTools and browser debugging tools
3. **Error Reproduction**: Create minimal reproductions for bugs
4. **Testing**: Test error scenarios thoroughly
5. **Documentation**: Document known issues and solutions

## Related Documentation

- [Render Engine Guide](./render-engine-guide.md)
- [Component Registry Guide](./component-registry-guide.md)
- [Testing Guide](./testing-guide.md)
- [Troubleshooting Guide](./troubleshooting-guide.md)
- [Performance Guide](./performance-guide.md) 