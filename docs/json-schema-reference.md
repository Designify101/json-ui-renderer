# JSON Schema Reference 📋

This document provides a complete reference for the JSON structure used in the JSON UI/Graphics Generator system.

## Overview 🎯

The JSON UI/Graphics Generator uses JSON configurations to define UI components. Each JSON configuration follows a specific schema that defines the structure, properties, and data binding.

## Root Schema: RenderLayout 🏗️

The root structure for all JSON configurations:

```typescript
interface RenderLayout {
  id: string                    // Unique identifier (required)
  title?: string               // Display title (optional)
  description?: string         // Description (optional)
  data?: Record<string, any>   // Data for interpolation (optional)
  theme?: Record<string, string> // Theme overrides (optional)
  styles?: string              // CSS styles (optional)
  root: RenderElement          // Root element (required)
}
```

### Complete Example
```json
{
  "id": "sample-component",
  "title": "Sample Component",
  "description": "A sample component demonstrating the JSON schema",
  "data": {
    "user": {
      "name": "John Doe",
      "email": "john@example.com"
    },
    "items": [
      { "id": 1, "name": "Item 1", "value": 100 },
      { "id": 2, "name": "Item 2", "value": 200 }
    ]
  },
  "theme": {
    "primary": "#3b82f6",
    "secondary": "#10b981"
  },
  "styles": ".custom-class { color: red; }",
  "root": {
    "type": "Card",
    "props": {
      "className": "p-6"
    },
    "children": [
      {
        "type": "CardHeader",
        "children": [
          {
            "type": "CardTitle",
            "children": [
              { "text": "Welcome {{user.name}}" }
            ]
          }
        ]
      }
    ]
  }
}
```

## Element Types 🧩

### 1. ComponentElement
UI components from the component registry (shadcn/ui, custom components, etc.)

```typescript
interface ComponentElement {
  type: string                 // Component name from registry
  props?: Record<string, any>  // Component properties
  children?: RenderElement[]   // Child elements
  id?: string                  // Unique identifier
  key?: string                 // React key
}
```

#### Example
```json
{
  "type": "Card",
  "props": {
    "className": "w-full max-w-md mx-auto"
  },
  "children": [
    {
      "type": "CardContent",
      "props": {
        "className": "p-6"
      },
      "children": [
        { "text": "Card content here" }
      ]
    }
  ]
}
```

### 2. TextElement
Plain text content with data interpolation support

```typescript
interface TextElement {
  text: string    // Text content (supports {{}} interpolation)
  id?: string     // Unique identifier
  key?: string    // React key
}
```

#### Example
```json
{
  "text": "Hello {{user.name}}, you have {{items.length}} items"
}
```

### 3. TagElement
HTML tags with properties and children

```typescript
interface TagElement {
  tag: string                  // HTML tag name
  props?: Record<string, any>  // HTML attributes
  children?: RenderElement[]   // Child elements
  id?: string                  // Unique identifier
  key?: string                 // React key
}
```

#### Example
```json
{
  "tag": "div",
  "props": {
    "className": "flex items-center space-x-4",
    "role": "banner"
  },
  "children": [
    {
      "tag": "h1",
      "props": {
        "className": "text-2xl font-bold"
      },
      "children": [
        { "text": "Page Title" }
      ]
    }
  ]
}
```

### 4. SvgElement
SVG graphics with full SVG support

```typescript
interface SvgElement {
  type: "svg"                  // Must be "svg"
  props: {
    viewBox?: string           // SVG viewBox
    width?: string | number    // SVG width
    height?: string | number   // SVG height
    className?: string         // CSS classes
    style?: Record<string, any> // Inline styles
    xmlns?: string             // SVG namespace
  }
  children?: RenderElement[]   // SVG child elements
  id?: string                  // Unique identifier
  key?: string                 // React key
}
```

#### Example
```json
{
  "type": "svg",
  "props": {
    "viewBox": "0 0 100 100",
    "width": "100",
    "height": "100",
    "className": "text-blue-500"
  },
  "children": [
    {
      "tag": "circle",
      "props": {
        "cx": "50",
        "cy": "50",
        "r": "40",
        "fill": "currentColor"
      }
    }
  ]
}
```

### 5. IconElement
Icon components with Lucide React icons

```typescript
interface IconElement {
  type: "Icon"                 // Must be "Icon"
  props: {
    name: string               // Icon name (required)
    size?: number | string     // Icon size
    color?: string             // Icon color
    className?: string         // CSS classes
    style?: Record<string, any> // Inline styles
  }
  id?: string                  // Unique identifier
  key?: string                 // React key
}
```

#### Example
```json
{
  "type": "Icon",
  "props": {
    "name": "Heart",
    "size": 24,
    "color": "red",
    "className": "mr-2"
  }
}
```

## Chart Components 📊

### Chart Component Schema
All chart components follow a similar structure:

```typescript
interface ChartComponent {
  type: string                 // Chart type (e.g., "ChartBarDefault")
  props: {
    data?: any[]              // Chart data
    config?: ChartConfig      // Chart configuration
    title?: string            // Chart title
    height?: number           // Chart height
    className?: string        // CSS classes
    // Chart-specific props...
  }
  children?: RenderElement[]   // Chart child elements
}
```

### Bar Chart Example
```json
{
  "type": "ChartBarDefault",
  "props": {
    "data": "$data.chartData",
    "config": "$data.chartConfig",
    "title": "Monthly Sales",
    "height": 300,
    "className": "w-full"
  }
}
```

### Line Chart Example
```json
{
  "type": "ChartLineDefault",
  "props": {
    "data": [
      { "date": "2024-01", "value": 100 },
      { "date": "2024-02", "value": 150 },
      { "date": "2024-03", "value": 120 }
    ],
    "config": {
      "value": {
        "label": "Revenue",
        "color": "hsl(var(--primary))"
      }
    },
    "dataKey": "date",
    "valueKey": "value"
  }
}
```

### Pie Chart Example
```json
{
  "type": "ChartPieSimple",
  "props": {
    "data": [
      { "name": "Category A", "value": 400 },
      { "name": "Category B", "value": 300 },
      { "name": "Category C", "value": 200 }
    ],
    "config": {
      "categoryA": { "label": "Category A", "color": "#3b82f6" },
      "categoryB": { "label": "Category B", "color": "#10b981" },
      "categoryC": { "label": "Category C", "color": "#f59e0b" }
    },
    "dataKey": "name",
    "valueKey": "value"
  }
}
```

### Radar Chart Example
```json
{
  "type": "ChartRadarDefault",
  "props": {
    "data": [
      { "skill": "React", "level": 90 },
      { "skill": "TypeScript", "level": 85 },
      { "skill": "Node.js", "level": 80 },
      { "skill": "Design", "level": 75 }
    ],
    "config": {
      "level": {
        "label": "Skill Level",
        "color": "hsl(var(--primary))"
      }
    },
    "dataKey": "skill",
    "valueKey": "level"
  }
}
```

### Radial Chart Example
```json
{
  "type": "ChartRadialSimple",
  "props": {
    "data": [
      { "name": "Progress", "value": 75, "max": 100 }
    ],
    "config": {
      "progress": {
        "label": "Progress",
        "color": "hsl(var(--primary))"
      }
    },
    "centerText": "75%",
    "showLabels": true
  }
}
```

## Data Interpolation 🔄

### Basic Interpolation
Use `{{}}` syntax to interpolate data values:

```json
{
  "data": {
    "user": {
      "name": "John Doe",
      "age": 30
    }
  },
  "root": {
    "type": "div",
    "children": [
      { "text": "Name: {{user.name}}" },
      { "text": "Age: {{user.age}}" }
    ]
  }
}
```

### Nested Data Access
Access nested properties with dot notation:

```json
{
  "data": {
    "company": {
      "info": {
        "name": "Acme Corp",
        "founded": 2020
      }
    }
  },
  "root": {
    "type": "div",
    "children": [
      { "text": "Company: {{company.info.name}}" },
      { "text": "Founded: {{company.info.founded}}" }
    ]
  }
}
```

### Array Data
Use `$data.` prefix for direct data references:

```json
{
  "data": {
    "items": [
      { "id": 1, "name": "Item 1" },
      { "id": 2, "name": "Item 2" }
    ]
  },
  "root": {
    "type": "ChartBarDefault",
    "props": {
      "data": "$data.items"
    }
  }
}
```

### Conditional Content
Use conditional rendering with data:

```json
{
  "data": {
    "showTitle": true,
    "title": "Dynamic Title"
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
              { "text": "{{showTitle ? title : 'Default Title'}}" }
            ]
          }
        ]
      }
    ]
  }
}
```

## Props Reference 📝

### Common Props
These props are supported by most components:

```typescript
interface CommonProps {
  className?: string           // CSS classes
  style?: Record<string, any>  // Inline styles
  id?: string                  // HTML id attribute
  
  // Accessibility
  "aria-label"?: string        // Accessibility label
  "aria-description"?: string  // Accessibility description
  role?: string                // ARIA role
  tabIndex?: number            // Tab order
  
  // Data attributes
  "data-*"?: string            // Custom data attributes
}
```

### Button Props
```typescript
interface ButtonProps extends CommonProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  disabled?: boolean
  onClick?: string             // Event handler (limited support)
}
```

### Card Props
```typescript
interface CardProps extends CommonProps {
  // Card is flexible, mainly uses className for styling
}
```

### Chart Props
```typescript
interface ChartProps extends CommonProps {
  data: any[]                  // Chart data (required)
  config?: ChartConfig         // Chart configuration
  title?: string               // Chart title
  height?: number              // Chart height
  width?: number               // Chart width
  
  // Chart-specific options
  showGrid?: boolean           // Show grid lines
  showTooltip?: boolean        // Show tooltips
  showLegend?: boolean         // Show legend
  showAxes?: boolean           // Show axes
  
  // Data configuration
  dataKey?: string             // Data key for X axis
  valueKey?: string            // Data key for Y axis
  
  // Styling
  colors?: string[]            // Custom colors
  colorScheme?: "primary" | "secondary" | "accent"
}
```

## Advanced Features 🚀

### Animations
Use Framer Motion components for animations:

```json
{
  "type": "motion.div",
  "props": {
    "initial": { "opacity": 0, "y": 20 },
    "animate": { "opacity": 1, "y": 0 },
    "transition": { "duration": 0.5 }
  },
  "children": [
    { "text": "Animated content" }
  ]
}
```

### Nested Components
Build complex layouts with nested components:

```json
{
  "type": "Card",
  "props": {
    "className": "w-full max-w-2xl mx-auto"
  },
  "children": [
    {
      "type": "CardHeader",
      "children": [
        {
          "type": "CardTitle",
          "children": [
            { "text": "Dashboard" }
          ]
        }
      ]
    },
    {
      "type": "CardContent",
      "children": [
        {
          "tag": "div",
          "props": {
            "className": "grid grid-cols-2 gap-4"
          },
          "children": [
            {
              "type": "ChartBarDefault",
              "props": {
                "data": "$data.barData",
                "title": "Bar Chart"
              }
            },
            {
              "type": "ChartLineDefault",
              "props": {
                "data": "$data.lineData",
                "title": "Line Chart"
              }
            }
          ]
        }
      ]
    }
  ]
}
```

### Custom Styling
Add custom CSS styles:

```json
{
  "id": "custom-component",
  "styles": ".custom-card { border: 2px solid #3b82f6; border-radius: 12px; }",
  "root": {
    "type": "Card",
    "props": {
      "className": "custom-card p-6"
    },
    "children": [
      { "text": "Custom styled card" }
    ]
  }
}
```

## Validation Rules ✅

### Required Fields
- `id`: Must be a non-empty string
- `root`: Must be a valid RenderElement

### Optional Fields
- `title`: String (optional)
- `description`: String (optional)
- `data`: Object (optional)
- `theme`: Object with string values (optional)
- `styles`: String (optional)

### Common Validation Errors
1. **Missing required fields**: `id` or `root` not provided
2. **Invalid component type**: Component not found in registry
3. **Invalid data interpolation**: Syntax errors in `{{}}` expressions
4. **Invalid props**: Props not supported by component
5. **Circular references**: Avoid self-referencing data structures

## Best Practices 💡

### 1. Use Descriptive IDs
```json
{
  "id": "user-profile-dashboard",  // ✅ Good
  "id": "comp1"                    // ❌ Bad
}
```

### 2. Organize Data Logically
```json
{
  "data": {
    "user": {
      "profile": { ... },
      "settings": { ... }
    },
    "charts": {
      "sales": [...],
      "performance": [...]
    }
  }
}
```

### 3. Use Consistent Naming
```json
{
  "data": {
    "chartData": [...],      // ✅ Good: camelCase
    "chart_data": [...],     // ❌ Bad: snake_case
    "ChartData": [...]       // ❌ Bad: PascalCase
  }
}
```

### 4. Include Accessibility Props
```json
{
  "type": "Button",
  "props": {
    "aria-label": "Save document",
    "aria-description": "Saves the current document to your account"
  }
}
```

### 5. Use Theme Variables
```json
{
  "props": {
    "className": "bg-primary text-primary-foreground"  // ✅ Good
    "style": { "backgroundColor": "#3b82f6" }          // ❌ Bad
  }
}
```

## Examples Gallery 🎨

### Simple Card
```json
{
  "id": "simple-card",
  "title": "Simple Card Example",
  "root": {
    "type": "Card",
    "props": {
      "className": "w-96 mx-auto"
    },
    "children": [
      {
        "type": "CardHeader",
        "children": [
          {
            "type": "CardTitle",
            "children": [
              { "text": "Card Title" }
            ]
          }
        ]
      },
      {
        "type": "CardContent",
        "children": [
          { "text": "This is the card content." }
        ]
      }
    ]
  }
}
```

### Interactive Dashboard
```json
{
  "id": "interactive-dashboard",
  "title": "Interactive Dashboard",
  "description": "A complete dashboard with multiple charts",
  "data": {
    "metrics": {
      "revenue": 125000,
      "users": 2500,
      "growth": 12.5
    },
    "chartData": [
      { "month": "Jan", "revenue": 10000, "users": 200 },
      { "month": "Feb", "revenue": 12000, "users": 250 },
      { "month": "Mar", "revenue": 15000, "users": 300 }
    ]
  },
  "root": {
    "tag": "div",
    "props": {
      "className": "p-6 space-y-6"
    },
    "children": [
      {
        "tag": "h1",
        "props": {
          "className": "text-3xl font-bold"
        },
        "children": [
          { "text": "Dashboard" }
        ]
      },
      {
        "tag": "div",
        "props": {
          "className": "grid grid-cols-3 gap-4"
        },
        "children": [
          {
            "type": "Card",
            "props": {
              "className": "p-4"
            },
            "children": [
              {
                "tag": "h3",
                "props": {
                  "className": "text-lg font-semibold"
                },
                "children": [
                  { "text": "Revenue" }
                ]
              },
              {
                "tag": "p",
                "props": {
                  "className": "text-2xl font-bold text-green-600"
                },
                "children": [
                  { "text": "${{metrics.revenue}}" }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "ChartBarDefault",
        "props": {
          "data": "$data.chartData",
          "title": "Monthly Performance",
          "height": 300
        }
      }
    ]
  }
}
```

This comprehensive reference provides everything you need to create JSON configurations for the UI/Graphics Generator system. 