# Theme System Guide 🎨

This guide provides comprehensive documentation for the theme system that enables dark/light mode support and consistent styling across the JSON UI/Graphics Generator.

## Overview 🎯

The Theme System provides:
- **Dark/Light Mode** - Complete theme switching support
- **CSS Custom Properties** - Theme-aware color variables
- **Component Theming** - Consistent theme application
- **Chart Theming** - Theme-aware chart colors
- **Theme Customization** - Custom theme creation
- **Theme Persistence** - Theme state management

## Theme Architecture 🏗️

### Core Components
```
components/
├── theme/
│   ├── theme-provider.tsx    # Main theme provider
│   └── theme-toggle.tsx      # Theme toggle component
├── theme-provider.tsx        # Root theme provider setup
└── ui/
    └── chart.tsx             # Theme-aware chart configuration
```

### Theme Provider Setup
```typescript
// components/theme/theme-provider.tsx
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem(storageKey) as Theme) || defaultTheme
    }
    return defaultTheme
  })

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      if (typeof window !== "undefined") {
        localStorage.setItem(storageKey, theme)
      }
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
```

### Theme Toggle Component
```typescript
// components/theme/theme-toggle.tsx
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme/theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4" />
      case "dark":
        return <Moon className="h-4 w-4" />
      default:
        return <Sun className="h-4 w-4" />
    }
  }

  const getThemeLabel = () => {
    switch (theme) {
      case "light":
        return "Switch to Dark"
      case "dark":
        return "Switch to System"
      default:
        return "Switch to Light"
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label={getThemeLabel()}
      data-testid="theme-toggle"
    >
      {getThemeIcon()}
    </Button>
  )
}
```

## CSS Variable System 🎨

### Color System
```css
/* app/globals.css */
@layer base {
  :root {
    /* Primary Colors */
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;

    /* Card Colors */
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;

    /* Popover Colors */
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;

    /* Primary Brand Colors */
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;

    /* Secondary Colors */
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 84% 4.9%;

    /* Muted Colors */
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;

    /* Accent Colors */
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 84% 4.9%;

    /* Destructive Colors */
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    /* Border and Input */
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;

    /* Chart Colors */
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;

    /* Border Radius */
    --radius: 0.5rem;
  }

  .dark {
    /* Primary Colors */
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;

    /* Card Colors */
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;

    /* Popover Colors */
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;

    /* Primary Brand Colors */
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;

    /* Secondary Colors */
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;

    /* Muted Colors */
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;

    /* Accent Colors */
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;

    /* Destructive Colors */
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;

    /* Border and Input */
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;

    /* Chart Colors */
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}
```

### Tailwind Configuration
```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
```

## Component Theming 🎯

### Theme-Aware Components
```typescript
// Using theme-aware classes
export function ThemedCard({ children, ...props }) {
  return (
    <div 
      className="
        bg-card text-card-foreground 
        border border-border 
        rounded-lg shadow-sm
      "
      {...props}
    >
      {children}
    </div>
  )
}

// Using CSS variables directly
export function ThemedButton({ variant = "default", ...props }) {
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  }

  return (
    <button 
      className={`
        px-4 py-2 rounded-md font-medium transition-colors
        ${variants[variant]}
      `}
      {...props}
    />
  )
}
```

### Dynamic Theme Application
```typescript
// Theme context usage in components
import { useTheme } from "@/components/theme/theme-provider"

export function AdaptiveComponent() {
  const { theme } = useTheme()
  
  // Get system theme if theme is "system"
  const resolvedTheme = theme === "system" 
    ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    : theme

  const themeStyles = {
    light: {
      backgroundColor: "hsl(var(--background))",
      color: "hsl(var(--foreground))",
      border: "1px solid hsl(var(--border))"
    },
    dark: {
      backgroundColor: "hsl(var(--background))",
      color: "hsl(var(--foreground))",
      border: "1px solid hsl(var(--border))"
    }
  }

  return (
    <div style={themeStyles[resolvedTheme]}>
      Theme-aware content
    </div>
  )
}
```

## Chart Theming 📊

### Chart Configuration with Theme Colors
```typescript
// components/ui/chart.tsx
import { useTheme } from "@/components/theme/theme-provider"

// Chart color configuration
export const chartColors = {
  light: {
    primary: "hsl(222.2 47.4% 11.2%)",
    secondary: "hsl(210 40% 96%)",
    chart1: "hsl(12 76% 61%)",
    chart2: "hsl(173 58% 39%)",
    chart3: "hsl(197 37% 24%)",
    chart4: "hsl(43 74% 66%)",
    chart5: "hsl(27 87% 67%)",
  },
  dark: {
    primary: "hsl(210 40% 98%)",
    secondary: "hsl(217.2 32.6% 17.5%)",
    chart1: "hsl(220 70% 50%)",
    chart2: "hsl(160 60% 45%)",
    chart3: "hsl(30 80% 55%)",
    chart4: "hsl(280 65% 60%)",
    chart5: "hsl(340 75% 55%)",
  }
}

// Theme-aware chart config hook
export function useChartConfig() {
  const { theme } = useTheme()
  
  // Resolve theme
  const resolvedTheme = theme === "system" 
    ? (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    : theme

  const colors = chartColors[resolvedTheme] || chartColors.light

  return {
    primary: { label: "Primary", color: colors.primary },
    secondary: { label: "Secondary", color: colors.secondary },
    chart1: { label: "Series 1", color: colors.chart1 },
    chart2: { label: "Series 2", color: colors.chart2 },
    chart3: { label: "Series 3", color: colors.chart3 },
    chart4: { label: "Series 4", color: colors.chart4 },
    chart5: { label: "Series 5", color: colors.chart5 },
  }
}

// Chart component with theme integration
export function ThemedChart({ data, type = "bar", ...props }) {
  const chartConfig = useChartConfig()
  
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis 
          dataKey="name" 
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
        />
        <YAxis 
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: "hsl(var(--popover))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "var(--radius)",
            color: "hsl(var(--popover-foreground))"
          }}
        />
        <Bar 
          dataKey="value" 
          fill={chartConfig.primary.color}
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
```

### JSON Template Theme Integration
```json
{
  "id": "themed-chart",
  "title": "Theme-Aware Chart",
  "data": {
    "chartData": [
      { "name": "Jan", "value": 100 },
      { "name": "Feb", "value": 200 }
    ],
    "chartConfig": {
      "value": {
        "label": "Sales",
        "color": "hsl(var(--chart-1))"
      }
    }
  },
  "root": {
    "type": "Card",
    "props": {
      "className": "bg-card text-card-foreground border border-border"
    },
    "children": [
      {
        "type": "CardHeader",
        "props": {
          "className": "pb-2"
        },
        "children": [
          {
            "type": "CardTitle",
            "props": {
              "className": "text-foreground"
            },
            "children": [
              { "text": "Monthly Sales" }
            ]
          }
        ]
      },
      {
        "type": "CardContent",
        "children": [
          {
            "type": "ChartBarDefault",
            "props": {
              "data": "$data.chartData",
              "config": "$data.chartConfig",
              "height": 300
            }
          }
        ]
      }
    ]
  }
}
```

## Custom Theme Creation 🛠️

### Creating Custom Themes
```typescript
// Custom theme definition
interface CustomTheme {
  name: string
  colors: {
    background: string
    foreground: string
    primary: string
    secondary: string
    accent: string
    muted: string
    border: string
    // Chart colors
    chart1: string
    chart2: string
    chart3: string
    chart4: string
    chart5: string
  }
}

const customThemes: Record<string, CustomTheme> = {
  ocean: {
    name: "Ocean",
    colors: {
      background: "210 100% 97%",
      foreground: "210 40% 8%",
      primary: "210 100% 40%",
      secondary: "210 60% 90%",
      accent: "190 100% 42%",
      muted: "210 60% 95%",
      border: "210 40% 85%",
      chart1: "210 100% 50%",
      chart2: "190 100% 45%",
      chart3: "170 60% 40%",
      chart4: "200 80% 55%",
      chart5: "220 70% 60%",
    }
  },
  
  sunset: {
    name: "Sunset",
    colors: {
      background: "45 100% 97%",
      foreground: "25 40% 8%",
      primary: "25 100% 50%",
      secondary: "45 60% 90%",
      accent: "15 100% 55%",
      muted: "45 60% 95%",
      border: "45 40% 85%",
      chart1: "25 100% 55%",
      chart2: "45 100% 50%",
      chart3: "15 90% 60%",
      chart4: "35 85% 65%",
      chart5: "5 95% 55%",
    }
  }
}

// Apply custom theme
export function applyCustomTheme(themeName: string) {
  const theme = customThemes[themeName]
  if (!theme) return

  const root = document.documentElement
  
  Object.entries(theme.colors).forEach(([key, value]) => {
    const cssVar = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`
    root.style.setProperty(cssVar, value)
  })
}

// Custom theme selector
export function CustomThemeSelector() {
  const [selectedTheme, setSelectedTheme] = useState("default")

  const handleThemeChange = (themeName: string) => {
    if (themeName === "default") {
      // Reset to default theme
      window.location.reload()
    } else {
      applyCustomTheme(themeName)
      setSelectedTheme(themeName)
    }
  }

  return (
    <Select value={selectedTheme} onValueChange={handleThemeChange}>
      <SelectTrigger className="w-40">
        <SelectValue placeholder="Select theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="default">Default</SelectItem>
        {Object.entries(customThemes).map(([key, theme]) => (
          <SelectItem key={key} value={key}>
            {theme.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
```

### Theme Builder Tool
```typescript
// Interactive theme builder
export function ThemeBuilder() {
  const [colors, setColors] = useState({
    background: "#ffffff",
    foreground: "#000000",
    primary: "#3b82f6",
    secondary: "#f3f4f6",
    accent: "#10b981",
  })

  const updateColor = (key: string, value: string) => {
    setColors(prev => ({ ...prev, [key]: value }))
    
    // Convert hex to HSL and apply
    const hsl = hexToHsl(value)
    document.documentElement.style.setProperty(`--${key}`, hsl)
  }

  const exportTheme = () => {
    const themeConfig = {
      name: "Custom Theme",
      colors: Object.fromEntries(
        Object.entries(colors).map(([key, hex]) => [key, hexToHsl(hex)])
      )
    }
    
    const blob = new Blob([JSON.stringify(themeConfig, null, 2)], { 
      type: 'application/json' 
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'custom-theme.json'
    a.click()
  }

  return (
    <div className="space-y-4 p-6 bg-card rounded-lg border">
      <h3 className="text-lg font-semibold">Theme Builder</h3>
      
      {Object.entries(colors).map(([key, value]) => (
        <div key={key} className="flex items-center space-x-3">
          <label className="w-24 text-sm font-medium capitalize">
            {key.replace(/([A-Z])/g, ' $1')}
          </label>
          <input
            type="color"
            value={value}
            onChange={(e) => updateColor(key, e.target.value)}
            className="w-12 h-8 rounded border border-input"
          />
          <span className="text-sm text-muted-foreground font-mono">
            {value}
          </span>
        </div>
      ))}
      
      <div className="flex space-x-2">
        <Button onClick={exportTheme}>
          Export Theme
        </Button>
        <Button variant="outline" onClick={() => window.location.reload()}>
          Reset
        </Button>
      </div>
    </div>
  )
}

// Utility function to convert hex to HSL
function hexToHsl(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h: number, s: number, l = (max + min) / 2

  if (max === min) {
    h = s = 0
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      case b: h = (r - g) / d + 4; break
      default: h = 0
    }
    h /= 6
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`
}
```

## Theme Persistence 💾

### Local Storage Integration
```typescript
// Enhanced theme provider with persistence
export function EnhancedThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("system")
  const [customTheme, setCustomTheme] = useState<string | null>(null)

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("ui-theme") as Theme
    const savedCustomTheme = localStorage.getItem("ui-custom-theme")
    
    if (savedTheme) setTheme(savedTheme)
    if (savedCustomTheme) setCustomTheme(savedCustomTheme)
  }, [])

  // Apply theme changes
  useEffect(() => {
    const root = document.documentElement
    root.classList.remove("light", "dark")

    if (customTheme) {
      // Apply custom theme
      applyCustomTheme(customTheme)
    } else if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark" : "light"
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }
  }, [theme, customTheme])

  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    setCustomTheme(null)
    localStorage.setItem("ui-theme", newTheme)
    localStorage.removeItem("ui-custom-theme")
  }

  const updateCustomTheme = (themeName: string) => {
    setCustomTheme(themeName)
    localStorage.setItem("ui-custom-theme", themeName)
  }

  return (
    <ThemeProviderContext.Provider value={{
      theme,
      customTheme,
      setTheme: updateTheme,
      setCustomTheme: updateCustomTheme
    }}>
      {children}
    </ThemeProviderContext.Provider>
  )
}
```

### System Theme Detection
```typescript
// System theme change detection
export function useSystemTheme() {
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light")
    }

    // Set initial value
    setSystemTheme(mediaQuery.matches ? "dark" : "light")
    
    // Listen for changes
    mediaQuery.addEventListener("change", handleChange)
    
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return systemTheme
}
```

## Testing Theme System 🧪

### Theme Testing Utilities
```typescript
// Theme testing helpers
export class ThemeTestUtils {
  static async switchTheme(theme: "light" | "dark" | "system") {
    const toggleButton = screen.getByTestId("theme-toggle")
    
    // Click until we reach the desired theme
    let currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light"
    
    while (currentTheme !== theme) {
      fireEvent.click(toggleButton)
      await waitFor(() => {
        currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light"
      })
    }
  }

  static getComputedThemeColor(property: string): string {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(`--${property}`)
      .trim()
  }

  static assertThemeColors(expectedColors: Record<string, string>) {
    Object.entries(expectedColors).forEach(([property, expectedValue]) => {
      const actualValue = this.getComputedThemeColor(property)
      expect(actualValue).toBe(expectedValue)
    })
  }
}

// Theme component tests
describe("Theme System", () => {
  test("applies light theme by default", () => {
    render(
      <ThemeProvider defaultTheme="light">
        <div data-testid="themed-content">Content</div>
      </ThemeProvider>
    )

    expect(document.documentElement).toHaveClass("light")
    expect(document.documentElement).not.toHaveClass("dark")
  })

  test("switches to dark theme", async () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
        <div data-testid="themed-content">Content</div>
      </ThemeProvider>
    )

    await ThemeTestUtils.switchTheme("dark")
    expect(document.documentElement).toHaveClass("dark")
  })

  test("persists theme selection", () => {
    render(
      <ThemeProvider storageKey="test-theme">
        <ThemeToggle />
      </ThemeProvider>
    )

    // Theme should be saved to localStorage
    expect(localStorage.getItem("test-theme")).toBeDefined()
  })

  test("theme colors are applied correctly", () => {
    render(
      <ThemeProvider defaultTheme="light">
        <div className="bg-primary text-primary-foreground">Content</div>
      </ThemeProvider>
    )

    ThemeTestUtils.assertThemeColors({
      "primary": "222.2 47.4% 11.2%",
      "primary-foreground": "210 40% 98%"
    })
  })
})
```

## Best Practices 💡

### 1. Consistent Color Usage
```typescript
// ✅ Good: Use theme variables
className="bg-primary text-primary-foreground border-border"

// ❌ Bad: Use fixed colors
className="bg-blue-600 text-white border-gray-300"
```

### 2. Theme-Aware Components
```typescript
// ✅ Good: Theme-aware styling
const buttonVariants = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
}

// ❌ Bad: Fixed theme styling
const buttonVariants = {
  default: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
}
```

### 3. Chart Color Consistency
```json
{
  "chartConfig": {
    "series1": {
      "label": "Series 1",
      "color": "hsl(var(--chart-1))"
    },
    "series2": {
      "label": "Series 2", 
      "color": "hsl(var(--chart-2))"
    }
  }
}
```

### 4. Custom Theme Organization
```typescript
// ✅ Good: Organized custom themes
const themes = {
  corporate: { /* corporate brand colors */ },
  creative: { /* vibrant creative colors */ },
  minimal: { /* clean minimal colors */ },
}

// ❌ Bad: Unorganized themes
const theme1 = { /* random colors */ }
const theme2 = { /* more random colors */ }
```

The Theme System provides a robust foundation for consistent, accessible, and customizable theming across the entire JSON UI/Graphics Generator system. 