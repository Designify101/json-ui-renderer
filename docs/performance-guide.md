# Performance Guide

Comprehensive guide for optimizing performance in the JSON UI system, covering rendering, data handling, and build optimization strategies.

## Table of Contents

1. [Overview](#overview)
2. [Rendering Performance](#rendering-performance)
3. [Data Optimization](#data-optimization)
4. [Chart Performance](#chart-performance)
5. [Build Optimization](#build-optimization)
6. [Memory Management](#memory-management)
7. [Monitoring & Profiling](#monitoring--profiling)
8. [Best Practices](#best-practices)

## Overview

Performance considerations for the JSON UI system:

- **Rendering Speed**: Minimize component render time
- **Bundle Size**: Optimize JavaScript bundle size
- **Memory Usage**: Efficient memory management
- **Data Processing**: Optimize data interpolation
- **Chart Rendering**: Improve chart performance
- **Build Performance**: Faster development builds

## Rendering Performance

### Component Optimization

#### Use React Keys
Provide stable keys for efficient re-rendering:

```json
{
  "type": "Card",
  "key": "unique-card-id",
  "children": [
    {
      "type": "CardTitle",
      "key": "card-title",
      "children": [
        {
          "text": "{{title}}"
        }
      ]
    }
  ]
}
```

#### Minimize Deep Nesting
Avoid excessive component nesting:

```json
// Bad: Deep nesting
{
  "type": "Card",
  "children": [
    {
      "tag": "div",
      "children": [
        {
          "tag": "div",
          "children": [
            {
              "tag": "div",
              "children": [
                {
                  "text": "Content"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

// Good: Flatter structure
{
  "type": "Card",
  "props": {
    "className": "p-4"
  },
  "children": [
    {
      "text": "Content"
    }
  ]
}
```

### Render Engine Optimization

#### Prop Processing
Minimize prop processing overhead:

```typescript
// Optimized prop validation
function validateProps(componentType: string, props: Record<string, any>): Record<string, any> {
  const schema = componentPropSchemas[componentType]
  if (!schema) return props // Skip validation for unknown components
  
  // Only validate changed props
  const validated: Record<string, any> = {}
  for (const [key, value] of Object.entries(props)) {
    if (schema[key] && value !== undefined) {
      validated[key] = value
    }
  }
  return validated
}
```

#### Data Interpolation
Optimize interpolation processing:

```typescript
// Cache compiled interpolation patterns
const interpolationCache = new Map<string, RegExp>()

function getInterpolationPattern(text: string): RegExp {
  if (interpolationCache.has(text)) {
    return interpolationCache.get(text)!
  }
  
  const pattern = new RegExp(/\{\{(\w+(?:\.\w+)*)\}\}/g)
  interpolationCache.set(text, pattern)
  return pattern
}
```

## Data Optimization

### Efficient Data Structures

#### Use Flat Data Structures
Minimize nested object access:

```json
// Better: Flat structure
{
  "data": {
    "userName": "John Doe",
    "userEmail": "john@example.com",
    "userRole": "admin"
  }
}

// Avoid: Deep nesting
{
  "data": {
    "user": {
      "profile": {
        "personal": {
          "name": "John Doe",
          "contact": {
            "email": "john@example.com"
          }
        }
      }
    }
  }
}
```

#### Optimize Array Access
Use indexed access for better performance:

```json
{
  "data": {
    "firstItem": "{{items.0}}",
    "secondItem": "{{items.1}}"
  }
}
```

### Data Preprocessing

#### Precompute Values
Calculate values before rendering:

```typescript
// Preprocess data before passing to layout
function preprocessData(rawData: any): any {
  return {
    ...rawData,
    // Precomputed values
    totalRevenue: rawData.sales.reduce((sum, item) => sum + item.amount, 0),
    averageScore: rawData.scores.reduce((sum, score) => sum + score, 0) / rawData.scores.length,
    formattedDate: new Date(rawData.timestamp).toLocaleDateString()
  }
}
```

#### Data Caching
Implement data caching for expensive operations:

```typescript
// Simple cache implementation
const dataCache = new Map<string, any>()

function getCachedData(key: string, generator: () => any): any {
  if (dataCache.has(key)) {
    return dataCache.get(key)
  }
  
  const data = generator()
  dataCache.set(key, data)
  return data
}
```

## Chart Performance

### Chart Optimization

#### Data Sampling
Reduce data points for large datasets:

```typescript
// Sample data for better performance
function sampleData(data: any[], maxPoints: number = 100): any[] {
  if (data.length <= maxPoints) return data
  
  const step = Math.ceil(data.length / maxPoints)
  return data.filter((_, index) => index % step === 0)
}
```

#### Lazy Chart Loading
Load charts only when needed:

```typescript
// Lazy load chart components
const ChartBarDefault = React.lazy(() => import('@/components/charts/chart-bar-default'))

// Use with Suspense
<Suspense fallback={<div>Loading chart...</div>}>
  <ChartBarDefault data={chartData} config={config} />
</Suspense>
```

### Chart Configuration

#### Optimize Chart Settings
Configure charts for better performance:

```json
{
  "type": "ChartBarDefault",
  "props": {
    "data": "{{chartData}}",
    "config": {
      "xAxisKey": "month",
      "yAxisKey": "value",
      "color": "hsl(var(--chart-1))",
      "animation": false,
      "tooltip": true,
      "legend": false,
      "responsive": true
    }
  }
}
```

#### Chart Virtualization
Implement virtualization for large datasets:

```typescript
// Virtual chart implementation
function VirtualChart({ data, config }) {
  const [visibleData, setVisibleData] = useState([])
  const [viewport, setViewport] = useState({ start: 0, end: 100 })
  
  useEffect(() => {
    const visible = data.slice(viewport.start, viewport.end)
    setVisibleData(visible)
  }, [data, viewport])
  
  return (
    <ChartBarDefault
      data={visibleData}
      config={config}
    />
  )
}
```

## Build Optimization

### Bundle Optimization

#### Code Splitting
Split code at route and component level:

```typescript
// Route-based splitting
const PlaygroundPage = lazy(() => import('./playground/page'))
const ChartsPage = lazy(() => import('./charts/page'))

// Component-based splitting
const componentRegistry = {
  // Core components (always loaded)
  Card: Card,
  Button: Button,
  
  // Lazy-loaded components
  ChartBarDefault: lazy(() => import('@/components/charts/chart-bar-default')),
  ChartLineDefault: lazy(() => import('@/components/charts/chart-line-default')),
}
```

#### Tree Shaking
Optimize imports for tree shaking:

```typescript
// Good: Named imports
import { Card, CardContent, CardHeader } from '@/components/ui/card'

// Bad: Default imports
import * as CardComponents from '@/components/ui/card'
```

### CSS Optimization

#### Efficient Class Extraction
Optimize CSS class extraction:

```javascript
// Optimized extraction script
function extractClassesFromContent(content) {
  const classSet = new Set()
  
  // Use single regex for better performance
  const classRegex = /(?:className|class):\s*["'`]([^"'`]+)["'`]/g
  let match
  
  while ((match = classRegex.exec(content)) !== null) {
    const classes = match[1].split(/\s+/)
    classes.forEach(cls => {
      if (cls && !cls.includes('{{')) {
        classSet.add(cls)
      }
    })
  }
  
  return classSet
}
```

#### Tailwind Optimization
Configure Tailwind for optimal performance:

```javascript
// tailwind.config.ts
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./generated/template-classes.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Enable JIT mode for faster builds
  mode: 'jit',
  // Purge unused styles
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./app/**/*.{js,ts,jsx,tsx}'],
  },
}
```

## Memory Management

### Memory Optimization

#### Cleanup Effects
Properly cleanup effects:

```typescript
// Render Engine cleanup
React.useEffect(() => {
  if (layout.styles) {
    const styleElement = document.createElement("style")
    styleElement.textContent = layout.styles
    styleElement.setAttribute("data-render-engine", layout.id)
    document.head.appendChild(styleElement)

    return () => {
      // Cleanup on unmount
      const existingStyle = document.querySelector(`style[data-render-engine="${layout.id}"]`)
      if (existingStyle) {
        existingStyle.remove()
      }
    }
  }
}, [layout.styles, layout.id])
```

#### Avoid Memory Leaks
Prevent common memory leaks:

```typescript
// Proper event listener cleanup
useEffect(() => {
  const handleResize = () => {
    // Handle resize
  }
  
  window.addEventListener('resize', handleResize)
  return () => {
    window.removeEventListener('resize', handleResize)
  }
}, [])
```

## Monitoring & Profiling

### Performance Monitoring

#### React DevTools Profiler
Use React DevTools to identify performance bottlenecks:

```typescript
// Wrap components with Profiler
import { Profiler } from 'react'

function onRenderCallback(id, phase, actualDuration) {
  console.log('Render performance:', { id, phase, actualDuration })
}

<Profiler id="RenderEngine" onRender={onRenderCallback}>
  <RenderEngine layout={layout} />
</Profiler>
```

#### Performance Metrics
Track key performance metrics:

```typescript
// Performance tracking
const performance = {
  startTime: Date.now(),
  
  measureRenderTime(componentName: string) {
    const endTime = Date.now()
    const duration = endTime - this.startTime
    console.log(`${componentName} render time: ${duration}ms`)
    return duration
  },
  
  measureMemoryUsage() {
    if (performance.memory) {
      return {
        used: performance.memory.usedJSHeapSize,
        total: performance.memory.totalJSHeapSize,
        limit: performance.memory.jsHeapSizeLimit
      }
    }
    return null
  }
}
```

### Performance Testing

#### Benchmark Components
Create performance benchmarks:

```typescript
// Component benchmark
function benchmarkComponent(Component, props, iterations = 1000) {
  const startTime = performance.now()
  
  for (let i = 0; i < iterations; i++) {
    render(<Component {...props} />)
  }
  
  const endTime = performance.now()
  return endTime - startTime
}
```

#### Load Testing
Test with realistic data volumes:

```typescript
// Generate large dataset for testing
function generateLargeDataset(size: number) {
  return Array.from({ length: size }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
    value: Math.random() * 1000,
    category: `Category ${i % 10}`
  }))
}
```

## Best Practices

### Development

1. **Profile Early**: Use profiling tools during development
2. **Measure Performance**: Establish performance baselines
3. **Optimize Critical Path**: Focus on frequently rendered components
4. **Lazy Loading**: Load components only when needed
5. **Data Preprocessing**: Process data before rendering

### Production

1. **Bundle Analysis**: Analyze bundle size regularly
2. **Monitoring**: Monitor performance in production
3. **Caching**: Implement appropriate caching strategies
4. **CDN**: Use CDN for static assets
5. **Compression**: Enable gzip/brotli compression

### Code Organization

1. **Component Splitting**: Split large components
2. **Efficient Imports**: Use named imports
3. **Avoid Inline Functions**: Define functions outside render
4. **Memoization**: Use React.memo for expensive components
5. **Efficient State**: Minimize state updates

### Testing

1. **Performance Tests**: Include performance tests in CI
2. **Regression Testing**: Test for performance regressions
3. **Load Testing**: Test with realistic data volumes
4. **Memory Testing**: Test for memory leaks
5. **Browser Testing**: Test across different browsers

## Performance Checklist

### Pre-deployment

- [ ] Bundle size analysis completed
- [ ] Performance profiling done
- [ ] Memory leak testing passed
- [ ] Large dataset testing completed
- [ ] Cross-browser performance verified

### Post-deployment

- [ ] Performance monitoring enabled
- [ ] Error tracking configured
- [ ] User experience metrics tracked
- [ ] Performance alerts set up
- [ ] Regular performance reviews scheduled

## Related Documentation

- [Render Engine Guide](./render-engine-guide.md)
- [Chart Components Guide](./chart-components-guide.md)
- [Build System Guide](./build-system-guide.md)
- [Testing Guide](./testing-guide.md)
- [Troubleshooting Guide](./troubleshooting-guide.md) 