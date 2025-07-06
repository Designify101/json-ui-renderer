# Data Binding Guide 🔗

This guide provides comprehensive documentation for the data binding system that enables dynamic content and data interpolation in JSON configurations.

## Overview 🎯

The Data Binding System provides:
- **Template Interpolation** - `{{}}` syntax for dynamic content
- **Nested Data Access** - Dot notation for complex data structures
- **Direct Data References** - `$data.` prefix for array/object references
- **Conditional Rendering** - Logic-based content display
- **Data Transformation** - Computed values and transformations
- **Multi-level Binding** - Deep data structure support

## Basic Interpolation 📝

### Simple Value Interpolation
```json
{
  "data": {
    "user": {
      "name": "John Doe",
      "age": 30,
      "email": "john@example.com"
    }
  },
  "root": {
    "type": "Card",
    "children": [
      {
        "type": "CardHeader",
        "children": [
          {
            "type": "CardTitle",
            "children": [
              { "text": "Welcome {{user.name}}!" }
            ]
          }
        ]
      },
      {
        "type": "CardContent",
        "children": [
          { "text": "Age: {{user.age}}" },
          { "text": "Email: {{user.email}}" }
        ]
      }
    ]
  }
}
```

### Number and Boolean Interpolation
```json
{
  "data": {
    "metrics": {
      "revenue": 125000,
      "growth": 12.5,
      "isPositive": true,
      "users": 2500
    }
  },
  "root": {
    "type": "div",
    "children": [
      { "text": "Revenue: ${{metrics.revenue}}" },
      { "text": "Growth: {{metrics.growth}}%" },
      { "text": "Positive: {{metrics.isPositive}}" },
      { "text": "Users: {{metrics.users}}" }
    ]
  }
}
```

### String Concatenation
```json
{
  "data": {
    "user": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "company": "Acme Corp"
  },
  "root": {
    "type": "div",
    "children": [
      { "text": "Full Name: {{user.firstName}} {{user.lastName}}" },
      { "text": "Employee at {{company}}" }
    ]
  }
}
```

## Nested Data Access 🔍

### Deep Object Access
```json
{
  "data": {
    "company": {
      "info": {
        "name": "Acme Corporation",
        "founded": 2020,
        "address": {
          "street": "123 Main St",
          "city": "New York",
          "country": "USA"
        }
      },
      "metrics": {
        "revenue": {
          "current": 1500000,
          "previous": 1200000
        }
      }
    }
  },
  "root": {
    "type": "Card",
    "children": [
      {
        "type": "CardHeader",
        "children": [
          {
            "type": "CardTitle",
            "children": [
              { "text": "{{company.info.name}}" }
            ]
          },
          {
            "type": "CardDescription",
            "children": [
              { "text": "Founded in {{company.info.founded}}" }
            ]
          }
        ]
      },
      {
        "type": "CardContent",
        "children": [
          { "text": "Address: {{company.info.address.street}}, {{company.info.address.city}}, {{company.info.address.country}}" },
          { "text": "Current Revenue: ${{company.metrics.revenue.current}}" },
          { "text": "Previous Revenue: ${{company.metrics.revenue.previous}}" }
        ]
      }
    ]
  }
}
```

### Array Element Access
```json
{
  "data": {
    "team": {
      "members": [
        { "name": "Alice", "role": "Developer" },
        { "name": "Bob", "role": "Designer" },
        { "name": "Charlie", "role": "Manager" }
      ]
    }
  },
  "root": {
    "type": "div",
    "children": [
      { "text": "Team Lead: {{team.members.0.name}} ({{team.members.0.role}})" },
      { "text": "Designer: {{team.members.1.name}} ({{team.members.1.role}})" },
      { "text": "Manager: {{team.members.2.name}} ({{team.members.2.role}})" }
    ]
  }
}
```

## Direct Data References 📋

### Array Data for Charts
```json
{
  "data": {
    "salesData": [
      { "month": "Jan", "sales": 1200, "profit": 300 },
      { "month": "Feb", "sales": 1500, "profit": 400 },
      { "month": "Mar", "sales": 1800, "profit": 500 }
    ],
    "chartConfig": {
      "sales": {
        "label": "Sales ($)",
        "color": "hsl(var(--chart-1))"
      },
      "profit": {
        "label": "Profit ($)",
        "color": "hsl(var(--chart-2))"
      }
    }
  },
  "root": {
    "type": "ChartBarMultiple",
    "props": {
      "data": "$data.salesData",
      "config": "$data.chartConfig",
      "title": "Sales & Profit Analysis",
      "height": 300
    }
  }
}
```

### Object Data for Configuration
```json
{
  "data": {
    "chartData": [
      { "category": "A", "value": 400 },
      { "category": "B", "value": 300 },
      { "category": "C", "value": 200 }
    ],
    "pieConfig": {
      "categoryA": { "label": "Category A", "color": "#3b82f6" },
      "categoryB": { "label": "Category B", "color": "#10b981" },
      "categoryC": { "label": "Category C", "color": "#f59e0b" }
    }
  },
  "root": {
    "type": "ChartPieSimple",
    "props": {
      "data": "$data.chartData",
      "config": "$data.pieConfig",
      "title": "Distribution Analysis"
    }
  }
}
```

## Conditional Content 🔄

### Basic Conditional Rendering
```json
{
  "data": {
    "user": {
      "isAuthenticated": true,
      "isPremium": false,
      "name": "John Doe"
    },
    "features": {
      "showWelcome": true,
      "showUpgrade": false
    }
  },
  "root": {
    "type": "div",
    "children": [
      {
        "type": "div",
        "children": [
          { "text": "{{user.isAuthenticated ? 'Welcome ' + user.name : 'Please log in'}}" }
        ]
      },
      {
        "type": "div",
        "children": [
          { "text": "{{user.isPremium ? 'Premium Member' : 'Free Account'}}" }
        ]
      }
    ]
  }
}
```

### Complex Conditional Logic
```json
{
  "data": {
    "metrics": {
      "revenue": 125000,
      "target": 100000,
      "growth": 12.5
    },
    "status": {
      "isPositive": true,
      "trend": "up"
    }
  },
  "root": {
    "type": "Card",
    "children": [
      {
        "type": "CardContent",
        "children": [
          {
            "tag": "div",
            "props": {
              "className": "{{metrics.revenue > metrics.target ? 'text-green-600' : 'text-red-600'}}"
            },
            "children": [
              { "text": "Revenue: ${{metrics.revenue}}" }
            ]
          },
          {
            "tag": "div",
            "props": {
              "className": "{{status.trend === 'up' ? 'text-green-500' : 'text-red-500'}}"
            },
            "children": [
              { "text": "{{status.trend === 'up' ? '↗' : '↘'}} Growth: {{metrics.growth}}%" }
            ]
          }
        ]
      }
    ]
  }
}
```

## Data Transformation 🔄

### Computed Values
```json
{
  "data": {
    "sales": {
      "current": 150000,
      "previous": 120000
    },
    "expenses": {
      "current": 80000,
      "previous": 75000
    }
  },
  "root": {
    "type": "div",
    "children": [
      { "text": "Current Profit: ${{sales.current - expenses.current}}" },
      { "text": "Previous Profit: ${{sales.previous - expenses.previous}}" },
      { "text": "Profit Growth: {{((sales.current - expenses.current) - (sales.previous - expenses.previous)) / (sales.previous - expenses.previous) * 100}}%" }
    ]
  }
}
```

### Array Transformations
```json
{
  "data": {
    "items": [
      { "name": "Item 1", "price": 25.99, "quantity": 3 },
      { "name": "Item 2", "price": 15.50, "quantity": 2 },
      { "name": "Item 3", "price": 35.00, "quantity": 1 }
    ]
  },
  "root": {
    "type": "div",
    "children": [
      { "text": "Total Items: {{items.length}}" },
      { "text": "Total Value: ${{items.reduce((sum, item) => sum + (item.price * item.quantity), 0)}}" },
      { "text": "Average Price: ${{items.reduce((sum, item) => sum + item.price, 0) / items.length}}" }
    ]
  }
}
```

### Date and Time Formatting
```json
{
  "data": {
    "lastUpdated": "2024-01-15T10:30:00Z",
    "createdAt": "2024-01-01T08:00:00Z",
    "events": [
      { "date": "2024-01-10", "title": "Event 1" },
      { "date": "2024-01-15", "title": "Event 2" }
    ]
  },
  "root": {
    "type": "div",
    "children": [
      { "text": "Last Updated: {{new Date(lastUpdated).toLocaleDateString()}}" },
      { "text": "Created: {{new Date(createdAt).toLocaleDateString()}}" },
      { "text": "Days Since Created: {{Math.floor((Date.now() - new Date(createdAt).getTime()) / (1000 * 60 * 60 * 24))}}" }
    ]
  }
}
```

## Advanced Binding Patterns 🚀

### Multi-Level Data Binding
```json
{
  "data": {
    "dashboard": {
      "title": "Analytics Dashboard",
      "sections": {
        "overview": {
          "title": "Overview",
          "metrics": [
            { "name": "Users", "value": 2500, "change": 12.5 },
            { "name": "Revenue", "value": 125000, "change": -3.2 }
          ]
        },
        "performance": {
          "title": "Performance",
          "charts": [
            {
              "type": "line",
              "title": "Monthly Trends",
              "data": [
                { "month": "Jan", "value": 100 },
                { "month": "Feb", "value": 120 }
              ]
            }
          ]
        }
      }
    }
  },
  "root": {
    "type": "div",
    "children": [
      {
        "tag": "h1",
        "children": [
          { "text": "{{dashboard.title}}" }
        ]
      },
      {
        "tag": "div",
        "children": [
          {
            "tag": "h2",
            "children": [
              { "text": "{{dashboard.sections.overview.title}}" }
            ]
          },
          {
            "tag": "div",
            "children": [
              { "text": "{{dashboard.sections.overview.metrics.0.name}}: {{dashboard.sections.overview.metrics.0.value}}" },
              { "text": "Change: {{dashboard.sections.overview.metrics.0.change}}%" }
            ]
          }
        ]
      }
    ]
  }
}
```

### Dynamic Component Properties
```json
{
  "data": {
    "ui": {
      "theme": "primary",
      "size": "lg",
      "showBorder": true
    },
    "content": {
      "title": "Dynamic Button",
      "action": "Click me"
    }
  },
  "root": {
    "type": "Button",
    "props": {
      "variant": "{{ui.theme}}",
      "size": "{{ui.size}}",
      "className": "{{ui.showBorder ? 'border-2' : 'border-0'}}"
    },
    "children": [
      { "text": "{{content.action}}" }
    ]
  }
}
```

### Chart Data Binding
```json
{
  "data": {
    "chartTitle": "Sales Performance",
    "period": "Q1 2024",
    "currency": "USD",
    "data": {
      "sales": [
        { "month": "Jan", "amount": 45000, "target": 40000 },
        { "month": "Feb", "amount": 52000, "target": 45000 },
        { "month": "Mar", "amount": 48000, "target": 50000 }
      ]
    },
    "config": {
      "amount": {
        "label": "Actual Sales ({{currency}})",
        "color": "hsl(var(--chart-1))"
      },
      "target": {
        "label": "Target Sales ({{currency}})",
        "color": "hsl(var(--chart-2))"
      }
    }
  },
  "root": {
    "type": "Card",
    "children": [
      {
        "type": "CardHeader",
        "children": [
          {
            "type": "CardTitle",
            "children": [
              { "text": "{{chartTitle}} - {{period}}" }
            ]
          }
        ]
      },
      {
        "type": "CardContent",
        "children": [
          {
            "type": "ChartBarMultiple",
            "props": {
              "data": "$data.data.sales",
              "config": "$data.config",
              "height": 300,
              "title": "{{chartTitle}}"
            }
          }
        ]
      }
    ]
  }
}
```

## Data Binding Implementation 🔧

### Interpolation Engine
```typescript
// Data interpolation function
function processContent(text: string, data?: Record<string, any>): string {
  if (!text || !data) return text
  
  // Handle nested object/array access
  return text.replace(/\{\{([^}]+)\}\}/g, (match, expression) => {
    try {
      // Simple expression evaluation
      const value = evaluateExpression(expression, data)
      return value !== undefined ? String(value) : match
    } catch (error) {
      console.warn(`Data interpolation failed for: ${expression}`, error)
      return match
    }
  })
}

// Expression evaluation
function evaluateExpression(expression: string, data: Record<string, any>): any {
  // Clean up expression
  const cleanExpression = expression.trim()
  
  // Handle simple property access
  if (cleanExpression.match(/^[\w.]+$/)) {
    return getNestedValue(data, cleanExpression)
  }
  
  // Handle complex expressions (arithmetic, conditionals)
  try {
    // Create a safe evaluation context
    const context = createSafeContext(data)
    return new Function('data', `with(data) { return ${cleanExpression} }`)(context)
  } catch (error) {
    console.warn(`Expression evaluation failed: ${cleanExpression}`, error)
    return undefined
  }
}

// Safe context creation
function createSafeContext(data: Record<string, any>): Record<string, any> {
  // Create a safe context with limited global access
  return {
    ...data,
    // Safe built-in functions
    Math: Math,
    Date: Date,
    // Helper functions
    formatCurrency: (value: number) => `$${value.toLocaleString()}`,
    formatDate: (date: string) => new Date(date).toLocaleDateString(),
    formatPercent: (value: number) => `${value.toFixed(1)}%`,
  }
}

// Nested value access
function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : undefined
  }, obj)
}
```

### Prop Processing
```typescript
// Process props with data binding
function processProps(props: Record<string, any>, data?: Record<string, any>): Record<string, any> {
  if (!data) return props

  const processed: Record<string, any> = {}
  
  for (const [key, value] of Object.entries(props)) {
    if (typeof value === "string") {
      if (value.startsWith("$data.")) {
        // Direct data reference
        const path = value.replace("$data.", "")
        processed[key] = getNestedValue(data, path)
      } else if (value.includes("{{")) {
        // Template interpolation
        processed[key] = processContent(value, data)
      } else {
        processed[key] = value
      }
    } else if (typeof value === "object" && value !== null) {
      // Recursively process nested objects
      processed[key] = processProps(value, data)
    } else {
      processed[key] = value
    }
  }
  
  return processed
}
```

## Data Validation 🔍

### Schema-Based Validation
```typescript
// Data schema definition
interface DataSchema {
  [key: string]: {
    type: 'string' | 'number' | 'boolean' | 'array' | 'object'
    required?: boolean
    validation?: (value: any) => boolean
    children?: DataSchema
  }
}

// Validation function
function validateData(data: any, schema: DataSchema): boolean {
  for (const [key, schemaItem] of Object.entries(schema)) {
    const value = data[key]
    
    // Check required fields
    if (schemaItem.required && value === undefined) {
      console.error(`Required field missing: ${key}`)
      return false
    }
    
    // Check type
    if (value !== undefined && typeof value !== schemaItem.type) {
      console.error(`Type mismatch for ${key}: expected ${schemaItem.type}, got ${typeof value}`)
      return false
    }
    
    // Custom validation
    if (schemaItem.validation && !schemaItem.validation(value)) {
      console.error(`Validation failed for ${key}`)
      return false
    }
    
    // Nested validation
    if (schemaItem.children && typeof value === 'object') {
      if (!validateData(value, schemaItem.children)) {
        return false
      }
    }
  }
  
  return true
}

// Example schema
const chartDataSchema: DataSchema = {
  chartData: {
    type: 'array',
    required: true,
    validation: (value) => Array.isArray(value) && value.length > 0
  },
  chartConfig: {
    type: 'object',
    required: true
  },
  title: {
    type: 'string',
    required: false
  }
}
```

## Performance Optimization ⚡

### Memoization for Data Processing
```typescript
// Memoized data processing
const dataCache = new Map<string, any>()

function memoizedProcessContent(text: string, data?: Record<string, any>): string {
  const cacheKey = `${text}_${JSON.stringify(data)}`
  
  if (dataCache.has(cacheKey)) {
    return dataCache.get(cacheKey)
  }
  
  const result = processContent(text, data)
  dataCache.set(cacheKey, result)
  
  return result
}

// Cache cleanup
function clearDataCache() {
  dataCache.clear()
}
```

### Lazy Data Loading
```typescript
// Lazy data binding
function createLazyDataBinding(dataPath: string) {
  return {
    get value() {
      // Load data only when accessed
      return getNestedValue(globalData, dataPath)
    },
    
    get isLoaded() {
      return globalData !== undefined
    }
  }
}

// Usage in templates
const lazyBinding = createLazyDataBinding('user.profile.metrics')
```

## Error Handling 🚨

### Safe Data Access
```typescript
// Safe data access with fallbacks
function safeGetNestedValue(obj: any, path: string, fallback: any = undefined): any {
  try {
    return path.split('.').reduce((current, key) => {
      if (current === null || current === undefined) {
        return fallback
      }
      return current[key] !== undefined ? current[key] : fallback
    }, obj)
  } catch (error) {
    console.warn(`Safe data access failed for path: ${path}`, error)
    return fallback
  }
}

// Enhanced interpolation with error handling
function safeProcessContent(text: string, data?: Record<string, any>): string {
  if (!text || !data) return text
  
  return text.replace(/\{\{([^}]+)\}\}/g, (match, expression) => {
    try {
      const value = evaluateExpression(expression, data)
      return value !== undefined ? String(value) : '{{' + expression + '}}'
    } catch (error) {
      console.warn(`Data interpolation error: ${expression}`, error)
      return '{{ERROR}}'
    }
  })
}
```

## Best Practices 💡

### 1. Data Structure Organization
```json
// ✅ Good: Organized data structure
{
  "data": {
    "user": {
      "profile": { "name": "John", "email": "john@example.com" },
      "settings": { "theme": "dark", "notifications": true }
    },
    "metrics": {
      "performance": { "score": 95, "trend": "up" },
      "usage": { "sessions": 24, "duration": 180 }
    }
  }
}

// ❌ Bad: Flat data structure
{
  "data": {
    "userName": "John",
    "userEmail": "john@example.com",
    "performanceScore": 95,
    "usageSessions": 24
  }
}
```

### 2. Safe Data Access
```json
// ✅ Good: Safe access with fallbacks
{
  "text": "{{user.name || 'Anonymous'}}"
}

// ❌ Bad: Unsafe access
{
  "text": "{{user.profile.details.fullName}}"
}
```

### 3. Meaningful Variable Names
```json
// ✅ Good: Descriptive names
{
  "data": {
    "quarterlyRevenue": 125000,
    "monthlyGrowthRate": 12.5,
    "customerSatisfactionScore": 4.2
  }
}

// ❌ Bad: Unclear names
{
  "data": {
    "val1": 125000,
    "rate": 12.5,
    "score": 4.2
  }
}
```

### 4. Conditional Logic
```json
// ✅ Good: Clear conditional logic
{
  "text": "{{revenue > target ? 'Above Target' : 'Below Target'}}"
}

// ❌ Bad: Complex nested conditions
{
  "text": "{{revenue > target ? (revenue > target * 1.2 ? 'Excellent' : 'Good') : (revenue > target * 0.8 ? 'Fair' : 'Poor')}}"
}
```

The Data Binding System provides powerful, flexible data integration capabilities that enable dynamic, data-driven UI components in the JSON UI/Graphics Generator. 