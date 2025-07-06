# Chart Components Guide 📊

This guide provides comprehensive documentation for all chart components available in the JSON UI/Graphics Generator system.

## Overview 🎯

The system includes 60+ chart components across 6 major categories:
- **Bar Charts** (14 components) - Categorical data visualization
- **Line Charts** (9 components) - Time series and trend analysis
- **Pie Charts** (13 components) - Part-to-whole relationships
- **Radar Charts** (11 components) - Multi-dimensional data
- **Radial Charts** (10 components) - Circular progress and metrics
- **Area Charts** (8 components) - Filled trend visualization

## Common Chart Configuration 🔧

### Basic Chart Structure
```json
{
  "type": "ChartType",
  "props": {
    "data": "$data.chartData",
    "config": "$data.chartConfig",
    "title": "Chart Title",
    "height": 300,
    "className": "w-full"
  }
}
```

### Chart Data Format
```json
{
  "data": {
    "chartData": [
      { "name": "Item 1", "value": 100 },
      { "name": "Item 2", "value": 200 },
      { "name": "Item 3", "value": 150 }
    ],
    "chartConfig": {
      "value": {
        "label": "Sales",
        "color": "hsl(var(--primary))"
      }
    }
  }
}
```

### Theme-Aware Colors
```json
{
  "chartConfig": {
    "series1": {
      "label": "Series 1",
      "color": "hsl(var(--primary))"
    },
    "series2": {
      "label": "Series 2", 
      "color": "hsl(var(--secondary))"
    }
  }
}
```

## Bar Charts 📊

### 1. ChartBarDefault
Basic vertical bar chart for categorical data.

```json
{
  "type": "ChartBarDefault",
  "props": {
    "data": [
      { "month": "Jan", "sales": 1200 },
      { "month": "Feb", "sales": 1500 },
      { "month": "Mar", "sales": 1800 }
    ],
    "config": {
      "sales": {
        "label": "Sales ($)",
        "color": "hsl(var(--primary))"
      }
    },
    "title": "Monthly Sales",
    "height": 300
  }
}
```

### 2. ChartBarHorizontal
Horizontal bar chart for categories with longer names.

```json
{
  "type": "ChartBarHorizontal",
  "props": {
    "data": [
      { "category": "Product Category A", "value": 450 },
      { "category": "Product Category B", "value": 380 },
      { "category": "Product Category C", "value": 520 }
    ],
    "config": {
      "value": {
        "label": "Revenue",
        "color": "hsl(var(--primary))"
      }
    },
    "title": "Revenue by Product Category"
  }
}
```

### 3. ChartBarMultiple
Bar chart with multiple data series.

```json
{
  "type": "ChartBarMultiple",
  "props": {
    "data": [
      { "month": "Jan", "sales": 1200, "profit": 300 },
      { "month": "Feb", "sales": 1500, "profit": 400 },
      { "month": "Mar", "sales": 1800, "profit": 500 }
    ],
    "config": {
      "sales": {
        "label": "Sales",
        "color": "hsl(var(--primary))"
      },
      "profit": {
        "label": "Profit",
        "color": "hsl(var(--secondary))"
      }
    },
    "title": "Sales vs Profit"
  }
}
```

### 4. ChartBarStacked
Stacked bar chart showing composition.

```json
{
  "type": "ChartBarStacked",
  "props": {
    "data": [
      { "quarter": "Q1", "product1": 100, "product2": 150, "product3": 80 },
      { "quarter": "Q2", "product1": 120, "product2": 170, "product3": 90 },
      { "quarter": "Q3", "product1": 110, "product2": 160, "product3": 85 }
    ],
    "config": {
      "product1": { "label": "Product 1", "color": "#3b82f6" },
      "product2": { "label": "Product 2", "color": "#10b981" },
      "product3": { "label": "Product 3", "color": "#f59e0b" }
    },
    "title": "Product Sales by Quarter"
  }
}
```

### 5. ChartBarNegative
Bar chart supporting negative values.

```json
{
  "type": "ChartBarNegative",
  "props": {
    "data": [
      { "month": "Jan", "profit": 120 },
      { "month": "Feb", "profit": -80 },
      { "month": "Mar", "profit": 200 },
      { "month": "Apr", "profit": -50 }
    ],
    "config": {
      "profit": {
        "label": "Profit/Loss",
        "color": "hsl(var(--primary))"
      }
    },
    "title": "Monthly Profit/Loss"
  }
}
```

### 6. ChartBarInteractive
Interactive bar chart with hover effects and click handling.

```json
{
  "type": "ChartBarInteractive",
  "props": {
    "data": [
      { "category": "A", "value": 100, "details": "Category A details" },
      { "category": "B", "value": 200, "details": "Category B details" }
    ],
    "config": {
      "value": {
        "label": "Value",
        "color": "hsl(var(--primary))"
      }
    },
    "title": "Interactive Bar Chart",
    "onBarClick": "handleBarClick"
  }
}
```

## Line Charts 📈

### 1. ChartLineDefault
Basic line chart for trend visualization.

```json
{
  "type": "ChartLineDefault",
  "props": {
    "data": [
      { "date": "2024-01", "value": 100 },
      { "date": "2024-02", "value": 120 },
      { "date": "2024-03", "value": 110 },
      { "date": "2024-04", "value": 140 }
    ],
    "config": {
      "value": {
        "label": "Revenue",
        "color": "hsl(var(--primary))"
      }
    },
    "title": "Monthly Revenue Trend",
    "height": 300
  }
}
```

### 2. ChartLineMultiple
Line chart with multiple data series.

```json
{
  "type": "ChartLineMultiple",
  "props": {
    "data": [
      { "date": "2024-01", "sales": 100, "profit": 30, "expenses": 70 },
      { "date": "2024-02", "sales": 120, "profit": 40, "expenses": 80 },
      { "date": "2024-03", "sales": 110, "profit": 35, "expenses": 75 }
    ],
    "config": {
      "sales": { "label": "Sales", "color": "#3b82f6" },
      "profit": { "label": "Profit", "color": "#10b981" },
      "expenses": { "label": "Expenses", "color": "#ef4444" }
    },
    "title": "Financial Metrics Over Time"
  }
}
```

### 3. ChartLineDots
Line chart with emphasized data points.

```json
{
  "type": "ChartLineDots",
  "props": {
    "data": [
      { "week": "Week 1", "performance": 85 },
      { "week": "Week 2", "performance": 92 },
      { "week": "Week 3", "performance": 78 },
      { "week": "Week 4", "performance": 88 }
    ],
    "config": {
      "performance": {
        "label": "Performance Score",
        "color": "hsl(var(--primary))"
      }
    },
    "title": "Weekly Performance",
    "showDots": true,
    "dotSize": 6
  }
}
```

### 4. ChartLineStep
Step line chart for discrete value changes.

```json
{
  "type": "ChartLineStep",
  "props": {
    "data": [
      { "time": "00:00", "users": 10 },
      { "time": "06:00", "users": 15 },
      { "time": "12:00", "users": 45 },
      { "time": "18:00", "users": 30 }
    ],
    "config": {
      "users": {
        "label": "Active Users",
        "color": "hsl(var(--primary))"
      }
    },
    "title": "User Activity Throughout Day"
  }
}
```

### 5. ChartLineInteractive
Interactive line chart with tooltips and zoom.

```json
{
  "type": "ChartLineInteractive",
  "props": {
    "data": [
      { "date": "2024-01-01", "value": 100, "trend": "up" },
      { "date": "2024-01-02", "value": 120, "trend": "up" },
      { "date": "2024-01-03", "value": 110, "trend": "down" }
    ],
    "config": {
      "value": {
        "label": "Stock Price",
        "color": "hsl(var(--primary))"
      }
    },
    "title": "Stock Price Movement",
    "enableZoom": true,
    "enableTooltip": true
  }
}
```

## Pie Charts 🥧

### 1. ChartPieSimple
Basic pie chart for simple proportions.

```json
{
  "type": "ChartPieSimple",
  "props": {
    "data": [
      { "name": "Category A", "value": 400 },
      { "name": "Category B", "value": 300 },
      { "name": "Category C", "value": 200 },
      { "name": "Category D", "value": 100 }
    ],
    "config": {
      "categoryA": { "label": "Category A", "color": "#3b82f6" },
      "categoryB": { "label": "Category B", "color": "#10b981" },
      "categoryC": { "label": "Category C", "color": "#f59e0b" },
      "categoryD": { "label": "Category D", "color": "#ef4444" }
    },
    "title": "Market Share Distribution"
  }
}
```

### 2. ChartPieDonut
Donut chart with center text.

```json
{
  "type": "ChartPieDonut",
  "props": {
    "data": [
      { "category": "Completed", "value": 75 },
      { "category": "Pending", "value": 15 },
      { "category": "Cancelled", "value": 10 }
    ],
    "config": {
      "completed": { "label": "Completed", "color": "#10b981" },
      "pending": { "label": "Pending", "color": "#f59e0b" },
      "cancelled": { "label": "Cancelled", "color": "#ef4444" }
    },
    "title": "Task Status",
    "centerText": "100 Tasks",
    "innerRadius": 60
  }
}
```

### 3. ChartPieDonutText
Donut chart with dynamic center text.

```json
{
  "type": "ChartPieDonutText",
  "props": {
    "data": [
      { "name": "Desktop", "value": 45, "visitors": 1200 },
      { "name": "Mobile", "value": 35, "visitors": 950 },
      { "name": "Tablet", "value": 20, "visitors": 540 }
    ],
    "config": {
      "desktop": { "label": "Desktop", "color": "#3b82f6" },
      "mobile": { "label": "Mobile", "color": "#10b981" },
      "tablet": { "label": "Tablet", "color": "#f59e0b" }
    },
    "title": "Visitor Distribution",
    "centerText": "{{totalVisitors}} Visitors",
    "showPercentage": true
  }
}
```

### 4. ChartPieLabel
Pie chart with data labels.

```json
{
  "type": "ChartPieLabel",
  "props": {
    "data": [
      { "segment": "Q1", "revenue": 25000 },
      { "segment": "Q2", "revenue": 30000 },
      { "segment": "Q3", "revenue": 28000 },
      { "segment": "Q4", "revenue": 32000 }
    ],
    "config": {
      "q1": { "label": "Q1", "color": "#3b82f6" },
      "q2": { "label": "Q2", "color": "#10b981" },
      "q3": { "label": "Q3", "color": "#f59e0b" },
      "q4": { "label": "Q4", "color": "#ef4444" }
    },
    "title": "Quarterly Revenue",
    "showLabels": true,
    "labelFormat": "${value}"
  }
}
```

### 5. ChartPieInteractive
Interactive pie chart with click and hover effects.

```json
{
  "type": "ChartPieInteractive",
  "props": {
    "data": [
      { "category": "Product A", "sales": 500, "details": "Top performer" },
      { "category": "Product B", "sales": 300, "details": "Steady growth" },
      { "category": "Product C", "sales": 200, "details": "New product" }
    ],
    "config": {
      "productA": { "label": "Product A", "color": "#3b82f6" },
      "productB": { "label": "Product B", "color": "#10b981" },
      "productC": { "label": "Product C", "color": "#f59e0b" }
    },
    "title": "Product Sales",
    "onSegmentClick": "handleSegmentClick",
    "enableHover": true
  }
}
```

## Radar Charts 🎯

### 1. ChartRadarDefault
Basic radar chart for multi-dimensional data.

```json
{
  "type": "ChartRadarDefault",
  "props": {
    "data": [
      { "skill": "React", "level": 90 },
      { "skill": "TypeScript", "level": 85 },
      { "skill": "Node.js", "level": 75 },
      { "skill": "Design", "level": 70 },
      { "skill": "Testing", "level": 80 }
    ],
    "config": {
      "level": {
        "label": "Skill Level",
        "color": "hsl(var(--primary))"
      }
    },
    "title": "Technical Skills Assessment",
    "height": 300
  }
}
```

### 2. ChartRadarMultiple
Radar chart comparing multiple entities.

```json
{
  "type": "ChartRadarMultiple",
  "props": {
    "data": [
      { "category": "Performance", "team1": 85, "team2": 78 },
      { "category": "Quality", "team1": 92, "team2": 88 },
      { "category": "Speed", "team1": 76, "team2": 85 },
      { "category": "Innovation", "team1": 88, "team2": 82 }
    ],
    "config": {
      "team1": { "label": "Team Alpha", "color": "#3b82f6" },
      "team2": { "label": "Team Beta", "color": "#10b981" }
    },
    "title": "Team Performance Comparison"
  }
}
```

### 3. ChartRadarInteractive
Interactive radar chart with hover effects.

```json
{
  "type": "ChartRadarInteractive",
  "props": {
    "data": [
      { "metric": "Speed", "score": 85, "target": 90 },
      { "metric": "Accuracy", "score": 92, "target": 95 },
      { "metric": "Efficiency", "score": 78, "target": 85 }
    ],
    "config": {
      "score": { "label": "Current Score", "color": "#3b82f6" },
      "target": { "label": "Target Score", "color": "#ef4444" }
    },
    "title": "Performance Metrics",
    "enableHover": true,
    "showGrid": true
  }
}
```

## Radial Charts ⭕

### 1. ChartRadialSimple
Basic radial chart for single progress indicators.

```json
{
  "type": "ChartRadialSimple",
  "props": {
    "data": [
      { "name": "Progress", "value": 75, "max": 100 }
    ],
    "config": {
      "progress": {
        "label": "Completion",
        "color": "hsl(var(--primary))"
      }
    },
    "title": "Project Progress",
    "centerText": "75%",
    "showLabels": true
  }
}
```

### 2. ChartRadialStacked
Stacked radial chart for multiple progress indicators.

```json
{
  "type": "ChartRadialStacked",
  "props": {
    "data": [
      { "category": "Frontend", "progress": 85, "max": 100 },
      { "category": "Backend", "progress": 70, "max": 100 },
      { "category": "Testing", "progress": 45, "max": 100 }
    ],
    "config": {
      "frontend": { "label": "Frontend", "color": "#3b82f6" },
      "backend": { "label": "Backend", "color": "#10b981" },
      "testing": { "label": "Testing", "color": "#f59e0b" }
    },
    "title": "Development Progress",
    "stackOffset": 20
  }
}
```

### 3. ChartRadialInteractive
Interactive radial chart with animations.

```json
{
  "type": "ChartRadialInteractive",
  "props": {
    "data": [
      { "metric": "CPU Usage", "value": 65, "max": 100, "status": "normal" },
      { "metric": "Memory", "value": 85, "max": 100, "status": "warning" },
      { "metric": "Disk", "value": 45, "max": 100, "status": "good" }
    ],
    "config": {
      "cpu": { "label": "CPU", "color": "#3b82f6" },
      "memory": { "label": "Memory", "color": "#f59e0b" },
      "disk": { "label": "Disk", "color": "#10b981" }
    },
    "title": "System Resources",
    "enableAnimation": true,
    "animationDuration": 1000
  }
}
```

## Area Charts 📈

### 1. ChartAreaDefault
Basic area chart with gradient fill.

```json
{
  "type": "ChartAreaDefault",
  "props": {
    "data": [
      { "month": "Jan", "revenue": 1200 },
      { "month": "Feb", "revenue": 1500 },
      { "month": "Mar", "revenue": 1800 },
      { "month": "Apr", "revenue": 1600 }
    ],
    "config": {
      "revenue": {
        "label": "Revenue",
        "color": "hsl(var(--primary))",
        "gradient": true
      }
    },
    "title": "Monthly Revenue",
    "height": 300
  }
}
```

### 2. ChartAreaStacked
Stacked area chart showing composition over time.

```json
{
  "type": "ChartAreaStacked",
  "props": {
    "data": [
      { "month": "Jan", "product1": 400, "product2": 300, "product3": 200 },
      { "month": "Feb", "product1": 500, "product2": 350, "product3": 250 },
      { "month": "Mar", "product1": 450, "product2": 400, "product3": 300 }
    ],
    "config": {
      "product1": { "label": "Product 1", "color": "#3b82f6" },
      "product2": { "label": "Product 2", "color": "#10b981" },
      "product3": { "label": "Product 3", "color": "#f59e0b" }
    },
    "title": "Product Revenue Composition"
  }
}
```

## Chart Configuration Options ⚙️

### Common Props
All chart components support these common props:

```typescript
interface CommonChartProps {
  // Data
  data: any[]                  // Chart data (required)
  config?: ChartConfig         // Chart configuration
  
  // Display
  title?: string               // Chart title
  height?: number              // Chart height (default: 300)
  width?: number               // Chart width (default: 100%)
  className?: string           // CSS classes
  
  // Behavior
  showGrid?: boolean           // Show grid lines
  showTooltip?: boolean        // Show tooltips
  showLegend?: boolean         // Show legend
  showAxes?: boolean           // Show axes
  
  // Interaction
  onDataPointClick?: (data: any) => void
  onDataPointHover?: (data: any) => void
  
  // Animation
  enableAnimation?: boolean    // Enable animations
  animationDuration?: number   // Animation duration (ms)
}
```

### Chart-Specific Props

#### Bar Charts
```typescript
interface BarChartProps extends CommonChartProps {
  orientation?: "vertical" | "horizontal"
  barSize?: number
  barGap?: number
  stackOffset?: number
  showValues?: boolean
}
```

#### Line Charts
```typescript
interface LineChartProps extends CommonChartProps {
  strokeWidth?: number
  showDots?: boolean
  dotSize?: number
  enableZoom?: boolean
  curved?: boolean
}
```

#### Pie Charts
```typescript
interface PieChartProps extends CommonChartProps {
  innerRadius?: number
  outerRadius?: number
  centerText?: string
  showLabels?: boolean
  labelFormat?: string
}
```

#### Radar Charts
```typescript
interface RadarChartProps extends CommonChartProps {
  gridLevels?: number
  maxScale?: number
  showGrid?: boolean
  angleAxisType?: "category" | "number"
}
```

#### Radial Charts
```typescript
interface RadialChartProps extends CommonChartProps {
  startAngle?: number
  endAngle?: number
  showLabels?: boolean
  stackOffset?: number
  strokeWidth?: number
}
```

## Data Binding Patterns 🔗

### Basic Data Binding
```json
{
  "data": {
    "salesData": [
      { "month": "Jan", "sales": 1200 },
      { "month": "Feb", "sales": 1500 }
    ]
  },
  "root": {
    "type": "ChartBarDefault",
    "props": {
      "data": "$data.salesData"
    }
  }
}
```

### Dynamic Configuration
```json
{
  "data": {
    "chartData": [...],
    "chartConfig": {
      "sales": {
        "label": "Sales ({{currency}})",
        "color": "{{primaryColor}}"
      }
    },
    "currency": "USD",
    "primaryColor": "#3b82f6"
  }
}
```

### Computed Values
```json
{
  "data": {
    "rawData": [...],
    "processedData": "{{rawData.map(item => ({ ...item, percentage: (item.value / total) * 100 }))}}",
    "total": "{{rawData.reduce((sum, item) => sum + item.value, 0)}}"
  }
}
```

## Performance Optimization 🚀

### Large Dataset Handling
```json
{
  "type": "ChartBarDefault",
  "props": {
    "data": "$data.largeDataset",
    "virtualization": true,
    "maxDataPoints": 1000,
    "aggregationMethod": "average"
  }
}
```

### Chart Memoization
```typescript
// Memoized chart component
const MemoizedChart = React.memo(ChartBarDefault, (prevProps, nextProps) => {
  return (
    JSON.stringify(prevProps.data) === JSON.stringify(nextProps.data) &&
    JSON.stringify(prevProps.config) === JSON.stringify(nextProps.config)
  )
})
```

### Lazy Loading
```json
{
  "type": "ChartBarDefault",
  "props": {
    "data": "$data.chartData",
    "lazy": true,
    "loadingComponent": "ChartSkeleton"
  }
}
```

## Accessibility 🔍

### Screen Reader Support
```json
{
  "type": "ChartBarDefault",
  "props": {
    "data": "$data.chartData",
    "aria-label": "Bar chart showing monthly sales data",
    "aria-description": "Sales increased from January to March",
    "role": "img"
  }
}
```

### Keyboard Navigation
```json
{
  "type": "ChartBarInteractive",
  "props": {
    "data": "$data.chartData",
    "tabIndex": 0,
    "onKeyDown": "handleKeyNavigation",
    "focusable": true
  }
}
```

### Color Accessibility
```json
{
  "chartConfig": {
    "series1": {
      "color": "#3b82f6",
      "pattern": "diagonal-stripes"
    },
    "series2": {
      "color": "#10b981",
      "pattern": "dots"
    }
  }
}
```

## Best Practices 💡

### 1. Data Structure
```json
// ✅ Good: Consistent data structure
{
  "data": [
    { "category": "A", "value": 100, "metadata": {...} },
    { "category": "B", "value": 200, "metadata": {...} }
  ]
}

// ❌ Bad: Inconsistent structure
{
  "data": [
    { "cat": "A", "val": 100 },
    { "category": "B", "value": 200, "extra": "info" }
  ]
}
```

### 2. Configuration
```json
// ✅ Good: Complete configuration
{
  "config": {
    "value": {
      "label": "Sales ($)",
      "color": "hsl(var(--primary))",
      "format": "currency"
    }
  }
}

// ❌ Bad: Incomplete configuration
{
  "config": {
    "value": { "color": "blue" }
  }
}
```

### 3. Responsive Design
```json
{
  "type": "ChartBarDefault",
  "props": {
    "data": "$data.chartData",
    "height": 300,
    "responsive": true,
    "maintainAspectRatio": false
  }
}
```

This comprehensive guide covers all chart components and their usage patterns in the JSON UI/Graphics Generator system. 