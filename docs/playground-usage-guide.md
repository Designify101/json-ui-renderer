# Playground Usage Guide

The JSON Playground is an interactive development environment where you can test, experiment, and build JSON UI configurations in real-time. This guide covers all playground features and workflows.

## Table of Contents

1. [Overview](#overview)
2. [Getting Started](#getting-started)
3. [Interface Overview](#interface-overview)
4. [Basic Usage](#basic-usage)
5. [Advanced Features](#advanced-features)
6. [Example Templates](#example-templates)
7. [Testing Workflows](#testing-workflows)
8. [Troubleshooting](#troubleshooting)

## Overview

The Playground (`app/playground/page.tsx`) provides:
- **Real-time Preview**: See changes instantly as you type
- **JSON Validation**: Automatic syntax checking and error reporting
- **Template Library**: Pre-built examples to get started quickly
- **Theme Testing**: Test components in light and dark modes
- **Export Options**: Generate code and copy configurations

## Getting Started

### Accessing the Playground

Navigate to `/playground` in your application:

```
http://localhost:3000/playground
```

### Interface Layout

The playground features a split-screen layout:
- **Left Panel**: JSON input editor
- **Right Panel**: Live preview of rendered components

## Interface Overview

### Header Section

```typescript
// Header with title and theme notice
<div className="text-center mb-12">
  <h1 className="text-4xl font-bold text-foreground mb-4">
    JSON Playground
  </h1>
  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
    Test and experiment with JSON structures. Paste your JSON or load an example.
  </p>
</div>
```

### Theme Testing Notice

The playground includes a theme testing notice that reminds users to test components in both light and dark modes using the theme toggle in the navigation.

### Example Templates Section

Quick-start templates are displayed as cards:

```typescript
const exampleTemplates = [
  {
    name: "Simple Button",
    description: "Basic button component",
    template: simpleButtonTemplate,
  },
  {
    name: "Simple Card", 
    description: "Card with header and content",
    template: simpleCardTemplate,
  },
  // ... more templates
]
```

## Basic Usage

### Loading an Example

1. **Browse Examples**: Look through the example template cards
2. **Select Template**: Click "Load Example" on any template card
3. **View JSON**: The JSON structure loads in the left panel
4. **See Preview**: The rendered component appears in the right panel

### Creating Your Own JSON

1. **Clear Playground**: Click the "Clear" button to start fresh
2. **Write JSON**: Enter your JSON structure in the left panel
3. **Validation**: Watch for validation indicators (Valid JSON/Invalid badges)
4. **Preview**: See your component render in real-time

### Basic JSON Structure

```json
{
  "id": "my-component",
  "title": "My Component",
  "data": {
    "message": "Hello, World!"
  },
  "root": {
    "type": "Card",
    "props": {
      "className": "p-4"
    },
    "children": [
      {
        "text": "{{message}}"
      }
    ]
  }
}
```

## Advanced Features

### Real-time Validation

The playground provides instant feedback:

```typescript
// Validation logic
try {
  const parsed = JSON.parse(value)
  
  // Basic validation for RenderLayout structure
  if (!parsed.id || !parsed.root) {
    throw new Error("JSON must have 'id' and 'root' properties")
  }
  
  setParsedLayout(parsed as RenderLayout)
  setError(null)
  setIsValid(true)
} catch (err) {
  setError(err instanceof Error ? err.message : "Invalid JSON")
  setParsedLayout(null)
  setIsValid(false)
}
```

### Error Handling

Error messages are displayed with helpful context:

```typescript
{error && (
  <div className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
    <h3 className="text-sm font-medium text-destructive mb-1">JSON Error</h3>
    <p className="text-sm text-destructive/80">{error}</p>
  </div>
)}
```

### Theme Testing

Use the theme toggle to test components in different modes:

1. **Light Mode**: Test default appearance
2. **Dark Mode**: Verify dark theme compatibility
3. **System Theme**: Test automatic theme detection

## Example Templates

### Simple Button

```json
{
  "id": "simple-button",
  "title": "Simple Button",
  "data": {
    "text": "Click Me!",
    "variant": "default"
  },
  "root": {
    "type": "Button",
    "props": {
      "variant": "{{variant}}"
    },
    "children": [
      {
        "text": "{{text}}"
      }
    ]
  }
}
```

### Card with Data

```json
{
  "id": "simple-card",
  "title": "Simple Card",
  "data": {
    "title": "Welcome Card",
    "content": "This is a card with dynamic content",
    "showFooter": true
  },
  "root": {
    "type": "Card",
    "props": {
      "className": "w-full max-w-md mx-auto"
    },
    "children": [
      {
        "type": "CardHeader",
        "children": [
          {
            "type": "CardTitle",
            "children": [
              {
                "text": "{{title}}"
              }
            ]
          }
        ]
      },
      {
        "type": "CardContent",
        "children": [
          {
            "text": "{{content}}"
          }
        ]
      }
    ]
  }
}
```

### Chart Example

```json
{
  "id": "chart-example",
  "title": "Chart Example",
  "data": {
    "chartData": [
      {"month": "Jan", "value": 1000},
      {"month": "Feb", "value": 1200},
      {"month": "Mar", "value": 900}
    ],
    "config": {
      "xAxisKey": "month",
      "yAxisKey": "value",
      "color": "hsl(var(--chart-1))"
    }
  },
  "root": {
    "type": "ChartBarDefault",
    "props": {
      "data": "{{chartData}}",
      "config": "{{config}}"
    }
  }
}
```

## Testing Workflows

### Component Development

1. **Start with Template**: Load a similar example template
2. **Modify Structure**: Edit the JSON to match your needs
3. **Test Data**: Add your data to the `data` object
4. **Verify Interpolation**: Check that `{{}}` syntax works
5. **Test Responsiveness**: Resize browser window
6. **Theme Testing**: Toggle between light/dark modes

### Data Validation

1. **Test Edge Cases**: Try empty data, null values, missing properties
2. **Verify Types**: Ensure data types match expectations
3. **Check Arrays**: Test with different array sizes
4. **Validate Nested Objects**: Test deep object structures

### Visual Testing

1. **Layout Testing**: Test different screen sizes
2. **Content Testing**: Test with long/short text
3. **State Testing**: Test different component states
4. **Color Testing**: Verify theme colors work correctly

### Performance Testing

1. **Large Data**: Test with large datasets
2. **Deep Nesting**: Test deeply nested structures
3. **Multiple Components**: Test complex layouts
4. **Re-render Testing**: Test rapid changes

## Troubleshooting

### Common Issues

#### JSON Syntax Errors

**Problem**: Red "Invalid" badge appears

**Solution**:
- Check for missing commas, brackets, or quotes
- Use a JSON validator to identify syntax issues
- Copy-paste from a working template and modify

#### Component Not Rendering

**Problem**: Nothing appears in the preview panel

**Solution**:
- Verify the component name is registered in the Component Registry
- Check that required props are provided
- Ensure the `root` object has a valid `type` or `tag`

#### Data Interpolation Not Working

**Problem**: `{{variable}}` text appears literally

**Solution**:
- Check that the variable exists in the `data` object
- Verify the interpolation syntax is correct
- Ensure nested paths use dot notation: `{{object.property}}`

#### Styling Issues

**Problem**: Component appears unstyled

**Solution**:
- Check that CSS classes are valid Tailwind classes
- Verify classes are extracted by the CSS extraction script
- Test in both light and dark modes

### Debug Strategies

#### JSON Validation

```typescript
// Test JSON structure
const testJson = {
  "id": "test",
  "root": {
    "type": "Card",
    "children": [
      {
        "text": "Test content"
      }
    ]
  }
}
```

#### Component Testing

```typescript
// Test component registration
const componentExists = componentRegistry["YourComponent"]
console.log("Component exists:", !!componentExists)
```

#### Data Flow Testing

```typescript
// Test data interpolation
const testData = {
  "message": "Hello World"
}

// Use in JSON
{
  "data": testData,
  "root": {
    "text": "{{message}}"
  }
}
```

### Getting Help

1. **Error Messages**: Read error messages carefully
2. **Console Logs**: Check browser console for detailed errors
3. **Template Comparison**: Compare with working templates
4. **Component Registry**: Verify component names and props
5. **Documentation**: Refer to component-specific documentation

## Best Practices

### Development Workflow

1. **Start Small**: Begin with simple components
2. **Incremental Changes**: Make small changes and test frequently
3. **Save Work**: Copy working JSON to save progress
4. **Version Control**: Save different versions of your JSON
5. **Documentation**: Comment your JSON structures

### Testing Strategy

1. **Multi-device Testing**: Test on different screen sizes
2. **Cross-browser Testing**: Test in different browsers
3. **Performance Testing**: Test with realistic data volumes
4. **Accessibility Testing**: Test with screen readers
5. **Theme Testing**: Always test both light and dark modes

### Code Organization

1. **Consistent Structure**: Use consistent JSON structure patterns
2. **Meaningful Names**: Use descriptive IDs and variable names
3. **Logical Grouping**: Group related data together
4. **Clear Hierarchy**: Organize components in logical hierarchies
5. **Reusable Patterns**: Create reusable component patterns

## Related Documentation

- [JSON Schema Reference](./json-schema-reference.md)
- [Component Registry Guide](./component-registry-guide.md)
- [Data Binding Guide](./data-binding-guide.md)
- [Template System Guide](./template-system-guide.md)
- [Troubleshooting Guide](./troubleshooting-guide.md) 