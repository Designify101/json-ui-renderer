# Template System Guide 📄

This guide provides comprehensive documentation for the template system that manages pre-built JSON configurations and data patterns.

## Overview 🎯

The Template System provides:
- **60+ Pre-built Templates** across all component categories
- **Organized Template Libraries** by chart type and use case
- **Reusable Data Patterns** for common scenarios
- **Template Inheritance** and composition patterns
- **Dynamic Template Loading** and management

## Template Structure 🏗️

### Template Files Organization
```
lib/
├── area-chart-templates.ts      # Area chart templates
├── bar-chart-templates.ts       # Bar chart templates
├── line-chart-templates.ts      # Line chart templates
├── pie-chart-templates.ts       # Pie chart templates
├── radar-chart-templates.ts     # Radar chart templates
├── radial-chart-templates.ts    # Radial chart templates
├── metric-card-templates.ts     # Metric card templates
├── ui-templates.ts              # UI component templates
├── carousel-template.ts         # Carousel templates
├── diet-app-templates.ts        # Diet app templates
├── financial-templates.ts       # Financial templates
├── cpu-architecture-template.ts # Architecture diagrams
├── database-rest-api-template.ts # API documentation
├── dynamic-samples.ts           # Dynamic examples
├── sample-data.ts               # Sample data sets
└── chart-templates.ts           # Main template registry
```

### Template Interface
```typescript
interface Template {
  id: string                    // Unique template identifier
  title: string                 // Display title
  description: string           // Template description
  category: string              // Template category
  tags: string[]               // Search tags
  layout: RenderLayout         // JSON layout configuration
  sampleData?: any             // Sample data for testing
  thumbnail?: string           // Preview image
  complexity?: 'basic' | 'intermediate' | 'advanced'
  dependencies?: string[]      // Required components
}
```

## Template Categories 📚

### 1. Chart Templates

#### Bar Chart Templates
```typescript
// bar-chart-templates.ts
export const barChartTemplates = {
  basicBar: {
    id: 'basic-bar-chart',
    title: 'Basic Bar Chart',
    description: 'Simple vertical bar chart for categorical data',
    category: 'charts',
    tags: ['bar', 'basic', 'categorical'],
    layout: {
      id: 'basic-bar-chart',
      title: 'Monthly Sales',
      data: {
        chartData: [
          { month: 'Jan', sales: 1200 },
          { month: 'Feb', sales: 1500 },
          { month: 'Mar', sales: 1800 }
        ],
        chartConfig: {
          sales: {
            label: 'Sales ($)',
            color: 'hsl(var(--primary))'
          }
        }
      },
      root: {
        type: 'ChartBarDefault',
        props: {
          data: '$data.chartData',
          config: '$data.chartConfig',
          title: 'Monthly Sales',
          height: 300
        }
      }
    }
  },
  
  horizontalBar: {
    id: 'horizontal-bar-chart',
    title: 'Horizontal Bar Chart',
    description: 'Horizontal bar chart for categories with longer names',
    category: 'charts',
    tags: ['bar', 'horizontal', 'categorical'],
    layout: {
      id: 'horizontal-bar-chart',
      title: 'Product Categories',
      data: {
        chartData: [
          { category: 'Electronics & Gadgets', value: 450 },
          { category: 'Home & Garden', value: 380 },
          { category: 'Fashion & Clothing', value: 520 }
        ],
        chartConfig: {
          value: {
            label: 'Revenue ($)',
            color: 'hsl(var(--primary))'
          }
        }
      },
      root: {
        type: 'ChartBarHorizontal',
        props: {
          data: '$data.chartData',
          config: '$data.chartConfig',
          title: 'Revenue by Category',
          height: 300
        }
      }
    }
  }
}
```

#### Line Chart Templates
```typescript
// line-chart-templates.ts
export const lineChartTemplates = {
  trendLine: {
    id: 'trend-line-chart',
    title: 'Trend Line Chart',
    description: 'Line chart showing trends over time',
    category: 'charts',
    tags: ['line', 'trend', 'time-series'],
    layout: {
      id: 'trend-line-chart',
      title: 'Revenue Trend',
      data: {
        chartData: [
          { date: '2024-01', revenue: 10000 },
          { date: '2024-02', revenue: 12000 },
          { date: '2024-03', revenue: 15000 },
          { date: '2024-04', revenue: 14000 }
        ],
        chartConfig: {
          revenue: {
            label: 'Revenue ($)',
            color: 'hsl(var(--primary))'
          }
        }
      },
      root: {
        type: 'ChartLineDefault',
        props: {
          data: '$data.chartData',
          config: '$data.chartConfig',
          title: 'Monthly Revenue Trend',
          height: 350
        }
      }
    }
  }
}
```

### 2. Metric Card Templates
```typescript
// metric-card-templates.ts
export const metricCardTemplates = {
  basicMetrics: {
    id: 'basic-metrics-card',
    title: 'Basic Metrics Card',
    description: 'Simple metrics display card',
    category: 'metrics',
    tags: ['metrics', 'kpi', 'dashboard'],
    layout: {
      id: 'basic-metrics-card',
      title: 'Key Performance Indicators',
      data: {
        metrics: {
          revenue: 125000,
          users: 2500,
          growth: 12.5,
          conversion: 3.2
        }
      },
      root: {
        type: 'Card',
        props: {
          className: 'p-6'
        },
        children: [
          {
            type: 'CardHeader',
            children: [
              {
                type: 'CardTitle',
                children: [
                  { text: 'Performance Dashboard' }
                ]
              }
            ]
          },
          {
            type: 'CardContent',
            children: [
              {
                tag: 'div',
                props: {
                  className: 'grid grid-cols-2 gap-4'
                },
                children: [
                  {
                    tag: 'div',
                    props: {
                      className: 'text-center'
                    },
                    children: [
                      {
                        tag: 'div',
                        props: {
                          className: 'text-2xl font-bold text-green-600'
                        },
                        children: [
                          { text: '${{metrics.revenue}}' }
                        ]
                      },
                      {
                        tag: 'div',
                        props: {
                          className: 'text-sm text-gray-600'
                        },
                        children: [
                          { text: 'Revenue' }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
}
```

### 3. UI Component Templates
```typescript
// ui-templates.ts
export const uiTemplates = {
  cardCollection: {
    id: 'card-collection',
    title: 'Card Collection',
    description: 'Collection of cards with different content types',
    category: 'ui',
    tags: ['card', 'collection', 'layout'],
    layout: {
      id: 'card-collection',
      title: 'Card Collection Example',
      data: {
        cards: [
          {
            title: 'Feature Card',
            description: 'This card highlights a key feature',
            icon: 'Star',
            action: 'Learn More'
          },
          {
            title: 'Service Card',
            description: 'This card describes a service',
            icon: 'Settings',
            action: 'Configure'
          }
        ]
      },
      root: {
        tag: 'div',
        props: {
          className: 'grid grid-cols-1 md:grid-cols-2 gap-6'
        },
        children: [
          {
            type: 'Card',
            props: {
              className: 'p-6'
            },
            children: [
              {
                type: 'CardHeader',
                children: [
                  {
                    tag: 'div',
                    props: {
                      className: 'flex items-center space-x-2'
                    },
                    children: [
                      {
                        type: 'Icon',
                        props: {
                          name: '{{cards.0.icon}}',
                          size: 24
                        }
                      },
                      {
                        type: 'CardTitle',
                        children: [
                          { text: '{{cards.0.title}}' }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                type: 'CardContent',
                children: [
                  {
                    tag: 'p',
                    props: {
                      className: 'text-gray-600 mb-4'
                    },
                    children: [
                      { text: '{{cards.0.description}}' }
                    ]
                  },
                  {
                    type: 'Button',
                    props: {
                      variant: 'default'
                    },
                    children: [
                      { text: '{{cards.0.action}}' }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
}
```

## Template Management 📋

### Template Registry
```typescript
// chart-templates.ts
import { barChartTemplates } from './bar-chart-templates'
import { lineChartTemplates } from './line-chart-templates'
import { pieChartTemplates } from './pie-chart-templates'
import { metricCardTemplates } from './metric-card-templates'
import { uiTemplates } from './ui-templates'

// Main template registry
export const chartTemplates = {
  // Chart templates
  ...barChartTemplates,
  ...lineChartTemplates,
  ...pieChartTemplates,
  ...radarChartTemplates,
  ...radialChartTemplates,
  ...areaChartTemplates,
  
  // UI templates
  ...metricCardTemplates,
  ...uiTemplates,
  
  // Specialized templates
  ...carouselTemplates,
  ...dietAppTemplates,
  ...financialTemplates,
  ...architectureTemplates,
}

// Template categories
export const templateCategories = {
  charts: 'Chart Components',
  metrics: 'Metric Cards',
  ui: 'UI Components',
  carousel: 'Carousel Components',
  specialized: 'Specialized Templates'
}

// Template search and filtering
export function getTemplatesByCategory(category: string) {
  return Object.values(chartTemplates).filter(template => 
    template.category === category
  )
}

export function searchTemplates(query: string) {
  const lowercaseQuery = query.toLowerCase()
  return Object.values(chartTemplates).filter(template => 
    template.title.toLowerCase().includes(lowercaseQuery) ||
    template.description.toLowerCase().includes(lowercaseQuery) ||
    template.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  )
}
```

### Dynamic Template Loading
```typescript
// Template loader utility
export class TemplateLoader {
  private static cache = new Map<string, Template>()
  
  static async loadTemplate(id: string): Promise<Template | null> {
    // Check cache first
    if (this.cache.has(id)) {
      return this.cache.get(id)!
    }
    
    // Load from registry
    const template = chartTemplates[id]
    if (template) {
      this.cache.set(id, template)
      return template
    }
    
    // Try dynamic import
    try {
      const module = await import(`./templates/${id}.json`)
      const template = module.default
      this.cache.set(id, template)
      return template
    } catch (error) {
      console.warn(`Template ${id} not found`)
      return null
    }
  }
  
  static preloadTemplates(ids: string[]) {
    // Preload commonly used templates
    ids.forEach(id => this.loadTemplate(id))
  }
  
  static clearCache() {
    this.cache.clear()
  }
}
```

## Data Management 💾

### Sample Data Sets
```typescript
// sample-data.ts
export const sampleData = {
  // Common data patterns
  monthlyMetrics: [
    { month: 'Jan', value: 100 },
    { month: 'Feb', value: 120 },
    { month: 'Mar', value: 110 },
    { month: 'Apr', value: 140 }
  ],
  
  categoryData: [
    { category: 'Category A', value: 400 },
    { category: 'Category B', value: 300 },
    { category: 'Category C', value: 200 }
  ],
  
  timeSeriesData: [
    { date: '2024-01-01', value: 100 },
    { date: '2024-01-02', value: 120 },
    { date: '2024-01-03', value: 110 }
  ],
  
  // Complex data structures
  dashboardData: {
    metrics: {
      revenue: 125000,
      users: 2500,
      growth: 12.5
    },
    chartData: [
      { month: 'Jan', sales: 1200, profit: 300 },
      { month: 'Feb', sales: 1500, profit: 400 }
    ],
    userSegments: [
      { segment: 'New Users', count: 450 },
      { segment: 'Returning Users', count: 850 }
    ]
  }
}

// Data transformation utilities
export function transformDataForChart(data: any[], chartType: string) {
  switch (chartType) {
    case 'bar':
      return data.map(item => ({
        name: item.category || item.name,
        value: item.value || item.count
      }))
      
    case 'line':
      return data.map(item => ({
        date: item.date || item.month,
        value: item.value || item.amount
      }))
      
    case 'pie':
      return data.map(item => ({
        name: item.name || item.category,
        value: item.value || item.count
      }))
      
    default:
      return data
  }
}
```

## Advanced Template Patterns 🚀

### 1. Template Inheritance
```typescript
// Base template
const baseChartTemplate = {
  id: 'base-chart',
  layout: {
    id: 'base-chart',
    root: {
      type: 'Card',
      props: {
        className: 'p-6'
      },
      children: [
        {
          type: 'CardHeader',
          children: [
            {
              type: 'CardTitle',
              children: [
                { text: '{{title}}' }
              ]
            }
          ]
        },
        {
          type: 'CardContent',
          children: [
            // Chart content will be inserted here
          ]
        }
      ]
    }
  }
}

// Extended template
function createChartTemplate(chartType: string, chartProps: any) {
  return {
    ...baseChartTemplate,
    id: `${chartType}-chart`,
    layout: {
      ...baseChartTemplate.layout,
      root: {
        ...baseChartTemplate.layout.root,
        children: [
          baseChartTemplate.layout.root.children[0], // Header
          {
            type: 'CardContent',
            children: [
              {
                type: chartType,
                props: chartProps
              }
            ]
          }
        ]
      }
    }
  }
}
```

### 2. Template Composition
```typescript
// Component templates
const headerTemplate = {
  type: 'CardHeader',
  children: [
    {
      type: 'CardTitle',
      children: [
        { text: '{{title}}' }
      ]
    }
  ]
}

const footerTemplate = {
  type: 'CardFooter',
  children: [
    {
      type: 'Button',
      props: {
        variant: 'outline'
      },
      children: [
        { text: '{{actionText}}' }
      ]
    }
  ]
}

// Composed template
function composeCardTemplate(contentTemplate: any, options: any = {}) {
  return {
    type: 'Card',
    props: {
      className: 'p-6'
    },
    children: [
      options.showHeader !== false ? headerTemplate : null,
      contentTemplate,
      options.showFooter ? footerTemplate : null
    ].filter(Boolean)
  }
}
```

### 3. Template Variants
```typescript
// Template variants
export const chartVariants = {
  basic: {
    showGrid: true,
    showTooltip: true,
    showLegend: false,
    height: 300
  },
  
  detailed: {
    showGrid: true,
    showTooltip: true,
    showLegend: true,
    showAxes: true,
    height: 400
  },
  
  minimal: {
    showGrid: false,
    showTooltip: false,
    showLegend: false,
    showAxes: false,
    height: 200
  }
}

// Apply variant to template
function applyVariant(template: Template, variant: string) {
  const variantConfig = chartVariants[variant]
  if (!variantConfig) return template
  
  return {
    ...template,
    layout: {
      ...template.layout,
      root: {
        ...template.layout.root,
        props: {
          ...template.layout.root.props,
          ...variantConfig
        }
      }
    }
  }
}
```

## Template Validation 🔍

### Template Schema Validation
```typescript
// Template validation schema
const templateSchema = {
  id: 'string',
  title: 'string',
  description: 'string',
  category: 'string',
  tags: 'array',
  layout: 'object',
  sampleData: 'object?',
  thumbnail: 'string?',
  complexity: 'enum?',
  dependencies: 'array?'
}

// Validation function
function validateTemplate(template: any): boolean {
  const requiredFields = ['id', 'title', 'description', 'category', 'layout']
  
  for (const field of requiredFields) {
    if (!template[field]) {
      console.error(`Template missing required field: ${field}`)
      return false
    }
  }
  
  // Validate layout structure
  if (!template.layout.root) {
    console.error('Template layout missing root element')
    return false
  }
  
  // Validate category
  const validCategories = ['charts', 'metrics', 'ui', 'carousel', 'specialized']
  if (!validCategories.includes(template.category)) {
    console.error(`Invalid template category: ${template.category}`)
    return false
  }
  
  return true
}

// Validate all templates
export function validateAllTemplates() {
  const templates = Object.values(chartTemplates)
  const errors = []
  
  for (const template of templates) {
    if (!validateTemplate(template)) {
      errors.push(template.id || 'unknown')
    }
  }
  
  if (errors.length > 0) {
    console.error('Template validation errors:', errors)
  } else {
    console.log('All templates validated successfully')
  }
  
  return errors.length === 0
}
```

## Template Testing 🧪

### Template Rendering Tests
```typescript
// Template test utilities
export class TemplateTestUtils {
  static async renderTemplate(templateId: string, customData?: any) {
    const template = await TemplateLoader.loadTemplate(templateId)
    if (!template) {
      throw new Error(`Template ${templateId} not found`)
    }
    
    // Merge custom data with template data
    const layout = {
      ...template.layout,
      data: {
        ...template.layout.data,
        ...customData
      }
    }
    
    return render(<RenderEngine layout={layout} />)
  }
  
  static validateTemplateData(template: Template) {
    const { layout } = template
    
    // Check for required data interpolations
    const jsonString = JSON.stringify(layout)
    const interpolations = jsonString.match(/\{\{([^}]+)\}\}/g) || []
    
    for (const interpolation of interpolations) {
      const path = interpolation.slice(2, -2)
      const value = this.getNestedValue(layout.data, path)
      
      if (value === undefined) {
        console.warn(`Template ${template.id} missing data for interpolation: ${path}`)
      }
    }
  }
  
  private static getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((current, key) => {
      return current && current[key] !== undefined ? current[key] : undefined
    }, obj)
  }
}

// Template test suite
describe('Template System', () => {
  test('all templates are valid', () => {
    expect(validateAllTemplates()).toBe(true)
  })
  
  test('templates render without errors', async () => {
    const templateIds = Object.keys(chartTemplates)
    
    for (const templateId of templateIds) {
      const { container } = await TemplateTestUtils.renderTemplate(templateId)
      expect(container.firstChild).toBeInTheDocument()
    }
  })
  
  test('template data interpolation works', () => {
    const template = chartTemplates.basicBar
    TemplateTestUtils.validateTemplateData(template)
  })
})
```

## Best Practices 💡

### 1. Template Organization
```typescript
// ✅ Good: Clear template structure
{
  id: 'descriptive-template-id',
  title: 'Human Readable Title',
  description: 'Clear description of what this template does',
  category: 'charts',
  tags: ['specific', 'searchable', 'tags'],
  complexity: 'basic',
  layout: {
    // Well-structured layout
  }
}

// ❌ Bad: Unclear template structure
{
  id: 'template1',
  title: 'Template',
  description: 'A template',
  category: 'misc',
  tags: ['template'],
  layout: {
    // Poorly structured layout
  }
}
```

### 2. Data Organization
```typescript
// ✅ Good: Logical data structure
{
  data: {
    chartData: [...],
    chartConfig: {...},
    displayOptions: {...}
  }
}

// ❌ Bad: Flat data structure
{
  data: {
    item1: 'value1',
    item2: 'value2',
    config1: 'value3',
    config2: 'value4'
  }
}
```

### 3. Template Reusability
```typescript
// ✅ Good: Reusable with data interpolation
{
  data: {
    title: 'Monthly Sales',
    metric: 'sales',
    currency: 'USD'
  },
  root: {
    type: 'Card',
    children: [
      {
        type: 'CardTitle',
        children: [
          { text: '{{title}}' }
        ]
      }
    ]
  }
}

// ❌ Bad: Hard-coded values
{
  root: {
    type: 'Card',
    children: [
      {
        type: 'CardTitle',
        children: [
          { text: 'Monthly Sales' }
        ]
      }
    ]
  }
}
```

The Template System provides a powerful foundation for creating reusable, well-structured JSON configurations that can be easily customized and extended. 