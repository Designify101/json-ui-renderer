# Testing Guide

Comprehensive testing guidelines and example test cases for the JSON UI system, covering unit tests, integration tests, and visual testing.

## Table of Contents

1. [Overview](#overview)
2. [Testing Setup](#testing-setup)
3. [Unit Testing](#unit-testing)
4. [Integration Testing](#integration-testing)
5. [Component Testing](#component-testing)
6. [Visual Testing](#visual-testing)
7. [Performance Testing](#performance-testing)
8. [End-to-End Testing](#end-to-end-testing)

## Overview

Testing strategy for the JSON UI system:
- **Unit Tests**: Test individual functions and utilities
- **Component Tests**: Test React components in isolation
- **Integration Tests**: Test component interactions and data flow
- **Visual Tests**: Test UI appearance and responsive behavior
- **Performance Tests**: Test rendering performance and memory usage
- **E2E Tests**: Test complete user workflows

## Testing Setup

### Dependencies

```json
{
  "devDependencies": {
    "@testing-library/react": "^13.4.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/user-event": "^14.4.3",
    "jest": "^29.3.1",
    "jest-environment-jsdom": "^29.3.1",
    "@playwright/test": "^1.30.0",
    "@chromatic-com/storybook": "^1.0.0"
  }
}
```

### Jest Configuration

```javascript
// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/lib/(.*)$': '<rootDir>/lib/$1',
    '^@/types/(.*)$': '<rootDir>/types/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: [
    'components/**/*.{js,jsx,ts,tsx}',
    'lib/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
  ],
}

module.exports = createJestConfig(customJestConfig)
```

### Test Setup

```javascript
// jest.setup.js
import '@testing-library/jest-dom'

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn(),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
    }
  },
}))

// Mock theme provider
jest.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'light',
    setTheme: jest.fn(),
  }),
  ThemeProvider: ({ children }) => children,
}))
```

## Unit Testing

### Utility Functions

#### Data Interpolation Tests

```typescript
// __tests__/utils/data-interpolation.test.ts
import { processContent, getNestedValue } from '@/lib/utils'

describe('Data Interpolation', () => {
  describe('processContent', () => {
    it('should interpolate simple variables', () => {
      const text = 'Hello {{name}}!'
      const data = { name: 'John' }
      
      expect(processContent(text, data)).toBe('Hello John!')
    })

    it('should interpolate nested variables', () => {
      const text = 'Hello {{user.name}}!'
      const data = { user: { name: 'John' } }
      
      expect(processContent(text, data)).toBe('Hello John!')
    })

    it('should handle missing data gracefully', () => {
      const text = 'Hello {{missing}}!'
      const data = {}
      
      expect(processContent(text, data)).toBe('Hello {{missing}}!')
    })

    it('should handle multiple interpolations', () => {
      const text = '{{greeting}} {{name}}!'
      const data = { greeting: 'Hello', name: 'John' }
      
      expect(processContent(text, data)).toBe('Hello John!')
    })
  })

  describe('getNestedValue', () => {
    const data = {
      user: {
        profile: {
          name: 'John',
          age: 30
        }
      }
    }

    it('should get simple property', () => {
      expect(getNestedValue({ name: 'John' }, 'name')).toBe('John')
    })

    it('should get nested property', () => {
      expect(getNestedValue(data, 'user.profile.name')).toBe('John')
    })

    it('should return undefined for missing property', () => {
      expect(getNestedValue(data, 'user.profile.missing')).toBeUndefined()
    })

    it('should handle invalid path gracefully', () => {
      expect(getNestedValue(data, 'invalid.path')).toBeUndefined()
    })
  })
})
```

#### Template Validation Tests

```typescript
// __tests__/utils/template-validation.test.ts
import { validateTemplate, validateTemplateData } from '@/lib/template-utils'
import type { RenderLayout } from '@/types/render-schema'

describe('Template Validation', () => {
  const validTemplate: RenderLayout = {
    id: 'test-template',
    title: 'Test Template',
    data: { message: 'Hello' },
    root: {
      type: 'Card',
      children: [
        { text: '{{message}}' }
      ]
    }
  }

  describe('validateTemplate', () => {
    it('should validate correct template', () => {
      expect(validateTemplate(validTemplate)).toBe(true)
    })

    it('should reject template without id', () => {
      const invalidTemplate = { ...validTemplate, id: undefined }
      expect(() => validateTemplate(invalidTemplate)).toThrow('Missing required id')
    })

    it('should reject template without root', () => {
      const invalidTemplate = { ...validTemplate, root: undefined }
      expect(() => validateTemplate(invalidTemplate)).toThrow('Missing required root')
    })

    it('should reject root without type or tag', () => {
      const invalidTemplate = {
        ...validTemplate,
        root: { children: [] }
      }
      expect(() => validateTemplate(invalidTemplate)).toThrow('Root element must have type or tag')
    })
  })

  describe('validateTemplateData', () => {
    it('should validate template with correct data', () => {
      expect(validateTemplateData(validTemplate)).toBe(true)
    })

    it('should warn about missing interpolation data', () => {
      const spy = jest.spyOn(console, 'warn').mockImplementation()
      const templateWithMissingData = {
        ...validTemplate,
        data: {}
      }
      
      validateTemplateData(templateWithMissingData)
      expect(spy).toHaveBeenCalledWith(expect.stringContaining('Missing data'))
      spy.mockRestore()
    })
  })
})
```

## Integration Testing

### Render Engine Tests

```typescript
// __tests__/components/render-engine.test.tsx
import { render, screen } from '@testing-library/react'
import { RenderEngine } from '@/components/render-engine/render-engine'
import type { RenderLayout } from '@/types/render-schema'

// Mock the component registry
jest.mock('@/components/render-engine/component-registry', () => ({
  componentRegistry: {
    Card: ({ children, className }) => (
      <div data-testid="card" className={className}>
        {children}
      </div>
    ),
    Button: ({ children, variant, onClick }) => (
      <button data-testid="button" data-variant={variant} onClick={onClick}>
        {children}
      </button>
    ),
  },
  componentPropSchemas: {
    Button: {
      variant: ['primary', 'secondary'],
    },
  },
}))

describe('RenderEngine', () => {
  it('should render simple text element', () => {
    const layout: RenderLayout = {
      id: 'test',
      root: {
        text: 'Hello World'
      }
    }

    render(<RenderEngine layout={layout} />)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('should render component with props', () => {
    const layout: RenderLayout = {
      id: 'test',
      root: {
        type: 'Button',
        props: {
          variant: 'primary'
        },
        children: [
          { text: 'Click me' }
        ]
      }
    }

    render(<RenderEngine layout={layout} />)
    const button = screen.getByTestId('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('data-variant', 'primary')
    expect(button).toHaveTextContent('Click me')
  })

  it('should interpolate data in text', () => {
    const layout: RenderLayout = {
      id: 'test',
      data: {
        name: 'John',
        greeting: 'Hello'
      },
      root: {
        text: '{{greeting}} {{name}}!'
      }
    }

    render(<RenderEngine layout={layout} />)
    expect(screen.getByText('Hello John!')).toBeInTheDocument()
  })

  it('should interpolate data in props', () => {
    const layout: RenderLayout = {
      id: 'test',
      data: {
        buttonVariant: 'secondary'
      },
      root: {
        type: 'Button',
        props: {
          variant: '{{buttonVariant}}'
        },
        children: [
          { text: 'Button' }
        ]
      }
    }

    render(<RenderEngine layout={layout} />)
    const button = screen.getByTestId('button')
    expect(button).toHaveAttribute('data-variant', 'secondary')
  })

  it('should handle unknown component gracefully', () => {
    const layout: RenderLayout = {
      id: 'test',
      root: {
        type: 'UnknownComponent',
        children: [
          { text: 'Content' }
        ]
      }
    }

    render(<RenderEngine layout={layout} />)
    expect(screen.getByText(/Unknown component: UnknownComponent/)).toBeInTheDocument()
  })

  it('should render nested components', () => {
    const layout: RenderLayout = {
      id: 'test',
      root: {
        type: 'Card',
        props: {
          className: 'test-card'
        },
        children: [
          {
            type: 'Button',
            children: [
              { text: 'Nested Button' }
            ]
          }
        ]
      }
    }

    render(<RenderEngine layout={layout} />)
    const card = screen.getByTestId('card')
    const button = screen.getByTestId('button')
    
    expect(card).toBeInTheDocument()
    expect(card).toHaveClass('test-card')
    expect(button).toBeInTheDocument()
    expect(card).toContainElement(button)
  })
})
```

## Component Testing

### Chart Component Tests

```typescript
// __tests__/components/charts/chart-bar-default.test.tsx
import { render, screen } from '@testing-library/react'
import { ChartBarDefault } from '@/components/charts/chart-bar-default'

// Mock Recharts
jest.mock('recharts', () => ({
  BarChart: ({ children, data }) => (
    <div data-testid="bar-chart" data-length={data?.length}>
      {children}
    </div>
  ),
  Bar: ({ dataKey, fill }) => (
    <div data-testid="bar" data-key={dataKey} data-fill={fill} />
  ),
  XAxis: ({ dataKey }) => (
    <div data-testid="x-axis" data-key={dataKey} />
  ),
  YAxis: () => <div data-testid="y-axis" />,
  CartesianGrid: () => <div data-testid="grid" />,
  ResponsiveContainer: ({ children }) => (
    <div data-testid="responsive-container">{children}</div>
  ),
}))

describe('ChartBarDefault', () => {
  const mockData = [
    { month: 'Jan', value: 100 },
    { month: 'Feb', value: 200 },
    { month: 'Mar', value: 150 },
  ]

  const mockConfig = {
    xAxisKey: 'month',
    yAxisKey: 'value',
    color: '#3b82f6',
  }

  it('should render chart with data', () => {
    render(<ChartBarDefault data={mockData} config={mockConfig} />)
    
    expect(screen.getByTestId('bar-chart')).toBeInTheDocument()
    expect(screen.getByTestId('bar-chart')).toHaveAttribute('data-length', '3')
  })

  it('should render chart components', () => {
    render(<ChartBarDefault data={mockData} config={mockConfig} />)
    
    expect(screen.getByTestId('bar')).toBeInTheDocument()
    expect(screen.getByTestId('x-axis')).toBeInTheDocument()
    expect(screen.getByTestId('y-axis')).toBeInTheDocument()
    expect(screen.getByTestId('grid')).toBeInTheDocument()
  })

  it('should use correct data keys', () => {
    render(<ChartBarDefault data={mockData} config={mockConfig} />)
    
    expect(screen.getByTestId('bar')).toHaveAttribute('data-key', 'value')
    expect(screen.getByTestId('x-axis')).toHaveAttribute('data-key', 'month')
  })

  it('should handle empty data', () => {
    render(<ChartBarDefault data={[]} config={mockConfig} />)
    
    expect(screen.getByTestId('bar-chart')).toHaveAttribute('data-length', '0')
  })

  it('should apply custom color', () => {
    render(<ChartBarDefault data={mockData} config={mockConfig} />)
    
    expect(screen.getByTestId('bar')).toHaveAttribute('data-fill', '#3b82f6')
  })
})
```

### Template Component Tests

```typescript
// __tests__/templates/simple-templates.test.tsx
import { render, screen } from '@testing-library/react'
import { RenderEngine } from '@/components/render-engine/render-engine'
import { simpleCardTemplate, simpleButtonTemplate } from '@/lib/simple-templates'

describe('Simple Templates', () => {
  describe('simpleCardTemplate', () => {
    it('should render card with default data', () => {
      render(<RenderEngine layout={simpleCardTemplate} />)
      
      // Check if card elements are rendered
      expect(screen.getByText(simpleCardTemplate.data.title)).toBeInTheDocument()
      expect(screen.getByText(simpleCardTemplate.data.content)).toBeInTheDocument()
    })

    it('should render with custom data', () => {
      const customTemplate = {
        ...simpleCardTemplate,
        data: {
          title: 'Custom Title',
          content: 'Custom content here'
        }
      }

      render(<RenderEngine layout={customTemplate} />)
      
      expect(screen.getByText('Custom Title')).toBeInTheDocument()
      expect(screen.getByText('Custom content here')).toBeInTheDocument()
    })
  })

  describe('simpleButtonTemplate', () => {
    it('should render button with default data', () => {
      render(<RenderEngine layout={simpleButtonTemplate} />)
      
      expect(screen.getByRole('button')).toBeInTheDocument()
      expect(screen.getByText(simpleButtonTemplate.data.text)).toBeInTheDocument()
    })
  })
})
```

## Visual Testing

### Storybook Setup

```typescript
// .storybook/main.ts
import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
}

export default config
```

### Component Stories

```typescript
// stories/RenderEngine.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { RenderEngine } from '@/components/render-engine/render-engine'
import { simpleCardTemplate, simpleButtonTemplate } from '@/lib/simple-templates'

const meta: Meta<typeof RenderEngine> = {
  title: 'Components/RenderEngine',
  component: RenderEngine,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const SimpleCard: Story = {
  args: {
    layout: simpleCardTemplate,
    showJsonButton: true,
  },
}

export const SimpleButton: Story = {
  args: {
    layout: simpleButtonTemplate,
    showJsonButton: true,
  },
}

export const WithCustomData: Story = {
  args: {
    layout: {
      ...simpleCardTemplate,
      data: {
        title: 'Story Title',
        content: 'This is content from a Storybook story'
      }
    },
    showJsonButton: true,
  },
}

export const ErrorState: Story = {
  args: {
    layout: {
      id: 'error-test',
      root: {
        type: 'NonExistentComponent',
        children: [
          { text: 'This should show an error' }
        ]
      }
    },
  },
}
```

### Visual Regression Testing

```typescript
// __tests__/visual/charts.visual.test.ts
import { test, expect } from '@playwright/test'

test.describe('Chart Visual Tests', () => {
  test('bar chart renders correctly', async ({ page }) => {
    await page.goto('/charts/bar-charts')
    
    // Wait for chart to load
    await page.waitForSelector('[data-testid="chart-bar-default"]')
    
    // Take screenshot
    await expect(page.locator('[data-testid="chart-bar-default"]')).toHaveScreenshot('bar-chart.png')
  })

  test('pie chart renders correctly', async ({ page }) => {
    await page.goto('/charts/pie-charts')
    
    await page.waitForSelector('[data-testid="chart-pie-simple"]')
    
    await expect(page.locator('[data-testid="chart-pie-simple"]')).toHaveScreenshot('pie-chart.png')
  })

  test('charts adapt to dark theme', async ({ page }) => {
    await page.goto('/charts/bar-charts')
    
    // Switch to dark theme
    await page.click('[data-testid="theme-toggle"]')
    
    // Wait for theme change
    await page.waitForTimeout(500)
    
    await expect(page.locator('[data-testid="chart-bar-default"]')).toHaveScreenshot('bar-chart-dark.png')
  })
})
```

## Performance Testing

### Rendering Performance Tests

```typescript
// __tests__/performance/render-performance.test.ts
import { render } from '@testing-library/react'
import { RenderEngine } from '@/components/render-engine/render-engine'
import type { RenderLayout } from '@/types/render-schema'

describe('Render Performance', () => {
  it('should render large component tree efficiently', () => {
    // Generate large component tree
    const generateLargeTree = (depth: number, breadth: number): any => {
      if (depth === 0) {
        return { text: `Leaf node` }
      }
      
      return {
        type: 'Card',
        children: Array.from({ length: breadth }, (_, i) => 
          generateLargeTree(depth - 1, breadth)
        )
      }
    }

    const layout: RenderLayout = {
      id: 'performance-test',
      root: generateLargeTree(3, 5) // 3 levels deep, 5 children each
    }

    const startTime = performance.now()
    render(<RenderEngine layout={layout} />)
    const endTime = performance.now()

    const renderTime = endTime - startTime
    console.log(`Large tree render time: ${renderTime}ms`)
    
    // Expect render to complete within reasonable time
    expect(renderTime).toBeLessThan(1000) // 1 second
  })

  it('should handle large datasets efficiently', () => {
    const largeData = Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      name: `Item ${i}`,
      value: Math.random() * 100
    }))

    const layout: RenderLayout = {
      id: 'large-data-test',
      data: { items: largeData },
      root: {
        type: 'ChartBarDefault',
        props: {
          data: '{{items}}',
          config: {
            xAxisKey: 'name',
            yAxisKey: 'value'
          }
        }
      }
    }

    const startTime = performance.now()
    render(<RenderEngine layout={layout} />)
    const endTime = performance.now()

    const renderTime = endTime - startTime
    expect(renderTime).toBeLessThan(2000) // 2 seconds for large dataset
  })
})
```

### Memory Leak Tests

```typescript
// __tests__/performance/memory-leaks.test.ts
import { render, unmountComponentAtNode } from '@testing-library/react'
import { RenderEngine } from '@/components/render-engine/render-engine'

describe('Memory Leak Tests', () => {
  it('should clean up styles on unmount', () => {
    const layout = {
      id: 'memory-test',
      styles: '.test-style { color: red; }',
      root: { text: 'Test' }
    }

    const container = document.createElement('div')
    document.body.appendChild(container)

    // Render component
    render(<RenderEngine layout={layout} />, { container })

    // Check if style was added
    const styleElement = document.querySelector(`style[data-render-engine="${layout.id}"]`)
    expect(styleElement).toBeInTheDocument()

    // Unmount component
    unmountComponentAtNode(container)

    // Check if style was removed
    const styleElementAfterUnmount = document.querySelector(`style[data-render-engine="${layout.id}"]`)
    expect(styleElementAfterUnmount).not.toBeInTheDocument()

    document.body.removeChild(container)
  })
})
```

## End-to-End Testing

### Playground E2E Tests

```typescript
// e2e/playground.spec.ts
import { test, expect } from '@playwright/test'

test.describe('JSON Playground', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/playground')
  })

  test('should load example templates', async ({ page }) => {
    // Click on simple button template
    await page.click('text=Simple Button')
    await page.click('text=Load Example')

    // Check that JSON appears in editor
    const jsonEditor = page.locator('textarea')
    const jsonContent = await jsonEditor.inputValue()
    
    expect(jsonContent).toContain('"type": "Button"')
    expect(jsonContent).toContain('"text": "{{text}}"')

    // Check that button renders in preview
    await expect(page.locator('[data-testid="button"]')).toBeVisible()
  })

  test('should validate JSON in real-time', async ({ page }) => {
    const jsonEditor = page.locator('textarea')
    
    // Clear existing content
    await jsonEditor.fill('')
    
    // Enter invalid JSON
    await jsonEditor.fill('{ invalid json')
    
    // Check for error indicator
    await expect(page.locator('text=Invalid')).toBeVisible()
    
    // Enter valid JSON
    await jsonEditor.fill(`{
      "id": "test",
      "root": {
        "text": "Hello World"
      }
    }`)
    
    // Check for valid indicator
    await expect(page.locator('text=Valid JSON')).toBeVisible()
    
    // Check that content renders
    await expect(page.locator('text=Hello World')).toBeVisible()
  })

  test('should handle data interpolation', async ({ page }) => {
    const jsonContent = `{
      "id": "interpolation-test",
      "data": {
        "message": "Hello from test",
        "variant": "primary"
      },
      "root": {
        "type": "Button",
        "props": {
          "variant": "{{variant}}"
        },
        "children": [
          {
            "text": "{{message}}"
          }
        ]
      }
    }`

    await page.locator('textarea').fill(jsonContent)
    
    // Check that interpolation works
    const button = page.locator('[data-testid="button"]')
    await expect(button).toHaveText('Hello from test')
    await expect(button).toHaveAttribute('data-variant', 'primary')
  })

  test('should test theme switching', async ({ page }) => {
    // Load a component
    await page.click('text=Simple Card')
    await page.click('text=Load Example')

    // Take screenshot in light mode
    await page.screenshot({ path: 'light-mode.png' })

    // Switch to dark mode
    await page.click('[data-testid="theme-toggle"]')
    
    // Wait for theme change
    await page.waitForTimeout(500)

    // Take screenshot in dark mode
    await page.screenshot({ path: 'dark-mode.png' })

    // Verify theme classes are applied
    await expect(page.locator('html')).toHaveClass(/dark/)
  })
})
```

### Chart E2E Tests

```typescript
// e2e/charts.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Chart Components', () => {
  test('should render all chart types', async ({ page }) => {
    const chartPages = [
      '/bar-charts',
      '/line-charts', 
      '/pie-charts',
      '/radar-charts',
      '/radial-charts'
    ]

    for (const chartPage of chartPages) {
      await page.goto(chartPage)
      
      // Wait for charts to load
      await page.waitForLoadState('networkidle')
      
      // Check that charts are visible
      const charts = page.locator('[class*="recharts"]')
      await expect(charts.first()).toBeVisible()
      
      // Take screenshot for visual testing
      await page.screenshot({ 
        path: `charts-${chartPage.replace('/', '')}.png`,
        fullPage: true 
      })
    }
  })

  test('should handle chart interactions', async ({ page }) => {
    await page.goto('/bar-charts')
    
    // Wait for interactive chart
    await page.waitForSelector('[data-testid="chart-bar-interactive"]')
    
    // Test hover interactions
    const chartBars = page.locator('.recharts-bar-rectangle')
    await chartBars.first().hover()
    
    // Check for tooltip
    await expect(page.locator('.recharts-tooltip-wrapper')).toBeVisible()
  })
})
```

## Test Organization

### Test Structure

```
__tests__/
├── components/           # Component tests
│   ├── render-engine/
│   ├── charts/
│   └── ui/
├── lib/                 # Utility tests
│   ├── utils.test.ts
│   └── templates.test.ts
├── integration/         # Integration tests
│   ├── data-flow.test.ts
│   └── component-registry.test.ts
├── performance/         # Performance tests
│   ├── render-performance.test.ts
│   └── memory-leaks.test.ts
└── visual/             # Visual regression tests
    ├── components.visual.test.ts
    └── charts.visual.test.ts

e2e/                    # End-to-end tests
├── playground.spec.ts
├── charts.spec.ts
└── navigation.spec.ts

stories/                # Storybook stories
├── components/
└── templates/
```

## Running Tests

### Test Commands

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:e2e": "playwright test",
    "test:visual": "playwright test --grep visual",
    "storybook": "storybook dev -p 6006",
    "test:storybook": "test-storybook"
  }
}
```

### CI/CD Integration

```yaml
# .github/workflows/test.yml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run unit tests
        run: npm run test:coverage
      
      - name: Run E2E tests
        run: npm run test:e2e
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
```

## Related Documentation

- [Component Creation Rules](./component-creation-rules.md)
- [Error Handling Guide](./error-handling-guide.md)
- [Performance Guide](./performance-guide.md)
- [Troubleshooting Guide](./troubleshooting-guide.md)
- [API Reference](./api-reference.md) 