"use client"

import type React from "react"
// Import all shadcn/ui components
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Import Recharts components for charts
import { Area, AreaChart, Bar, BarChart, Line, LineChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis } from "recharts"

// Import Chart components
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Import Framer Motion
import { motion } from "framer-motion"

// Icon component
import { Icon } from "./icon-registry"
// Import the custom components
import { CardCarousel } from "@/components/custom/card-carousel"
import { InteractiveAreaChart } from "@/components/custom/interactive-area-chart"

// Import bar chart components
import { ChartBarInteractive } from "@/components/charts/chart-bar-interactive"
import { ChartBarInteractiveControls } from "@/components/charts/chart-bar-interactive-controls"
import { ChartBarInteractiveChart } from "@/components/charts/chart-bar-interactive-chart"
import { ChartBarDefault } from "@/components/charts/chart-bar-default"
import { ChartBarHorizontal } from "@/components/charts/chart-bar-horizontal"
import { ChartBarMultiple } from "@/components/charts/chart-bar-multiple"
import { ChartBarStacked } from "@/components/charts/chart-bar-stacked"
import { ChartBarNegative } from "@/components/charts/chart-bar-negative"
import { ChartBarInteractiveWrapper } from '@/components/charts/chart-bar-interactive-wrapper'

// Import line chart components
import { ChartLineDefault } from "@/components/charts/chart-line-default"
import { ChartLineMultiple } from "@/components/charts/chart-line-multiple"
import { ChartLineInteractive } from "@/components/charts/chart-line-interactive"
import { ChartLineDots } from "@/components/charts/chart-line-dots"
import { ChartLineStep } from "@/components/charts/chart-line-step"

// Import pie chart components
import { ChartPieSimple } from "@/components/charts/chart-pie-simple"
import { ChartPieDonut } from "@/components/charts/chart-pie-donut"
import { ChartPieDonutText } from "@/components/charts/chart-pie-donut-text"
import { ChartPieLabel } from "@/components/charts/chart-pie-label"
import { ChartPieLegend } from "@/components/charts/chart-pie-legend"
import { ChartPieStacked } from "@/components/charts/chart-pie-stacked"
import { ChartPieInteractive } from "@/components/charts/chart-pie-interactive"

// Import radar chart components
import { ChartRadarDefault } from "@/components/charts/chart-radar-default"
import { ChartRadarDots } from "@/components/charts/chart-radar-dots"
import { ChartRadarLinesOnly } from "@/components/charts/chart-radar-lines-only"
import { ChartRadarMultiple } from "@/components/charts/chart-radar-multiple"
import { ChartRadarLegend } from "@/components/charts/chart-radar-legend"
import { ChartRadarInteractive } from "@/components/charts/chart-radar-interactive"

// Import radial chart components
import { ChartRadialSimple } from "@/components/charts/chart-radial-simple"
import { ChartRadialLabel } from "@/components/charts/chart-radial-label"
import { ChartRadialGrid } from "@/components/charts/chart-radial-grid"
import { ChartRadialText } from "@/components/charts/chart-radial-text"
import { ChartRadialShape } from "@/components/charts/chart-radial-shape"
import { ChartRadialStacked } from "@/components/charts/chart-radial-stacked"
import { ChartRadialInteractive } from "@/components/charts/chart-radial-interactive"
import { ChartRadialBase } from "@/components/charts/chart-radial-base"
import { ChartRadialInteractiveWrapper } from "@/components/charts/chart-radial-interactive-wrapper"
import { ChartRadialInteractiveComplete } from "@/components/charts/chart-radial-interactive-complete"

console.log("📚 ComponentRegistry: Initializing component registry")

// Component Registry - Maps component names to actual components
export const componentRegistry: Record<string, React.ComponentType<any>> = {
  // Core UI Components
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

  // Recharts Components
  AreaChart: AreaChart,
  Area: Area,
  BarChart: BarChart,
  Bar: Bar,
  LineChart: LineChart,
  Line: Line,
  RadarChart: RadarChart,
  Radar: Radar,
  PolarGrid: PolarGrid,
  PolarAngleAxis: PolarAngleAxis,
  CartesianGrid: CartesianGrid,
  XAxis: XAxis,
  YAxis: YAxis,
  ResponsiveContainer: ResponsiveContainer,

  // Chart Components
  ChartContainer: ChartContainer,
  ChartTooltip: ChartTooltip,
  ChartTooltipContent: ChartTooltipContent,
  ChartLegend: ChartLegend,
  ChartLegendContent: ChartLegendContent,

  // Framer Motion Components
  "motion.div": motion.div,
  "motion.span": motion.span,
  "motion.button": motion.button,

  // Icon
  Icon: Icon,

  // Custom Components
  CardCarousel: CardCarousel,
  InteractiveAreaChart: InteractiveAreaChart,

  // Bar Chart Components
  ChartBarInteractive: ChartBarInteractive,
  ChartBarInteractiveControls: ChartBarInteractiveControls,
  ChartBarInteractiveChart: ChartBarInteractiveChart,
  ChartBarDefault: ChartBarDefault,
  ChartBarHorizontal: ChartBarHorizontal,
  ChartBarMultiple: ChartBarMultiple,
  ChartBarStacked: ChartBarStacked,
  ChartBarNegative: ChartBarNegative,
  ChartBarInteractiveWrapper: ChartBarInteractiveWrapper,

  // Line Chart Components
  ChartLineDefault: ChartLineDefault,
  ChartLineMultiple: ChartLineMultiple,
  ChartLineInteractive: ChartLineInteractive,
  ChartLineDots: ChartLineDots,
  ChartLineStep: ChartLineStep,

  // Pie Chart Components
  ChartPieSimple: ChartPieSimple,
  ChartPieDonut: ChartPieDonut,
  ChartPieDonutText: ChartPieDonutText,
  ChartPieLabel: ChartPieLabel,
  ChartPieLegend: ChartPieLegend,
  ChartPieStacked: ChartPieStacked,
  ChartPieInteractive: ChartPieInteractive,

  // Radar Chart Components
  ChartRadarDefault: ChartRadarDefault,
  ChartRadarDots: ChartRadarDots,
  ChartRadarLinesOnly: ChartRadarLinesOnly,
  ChartRadarMultiple: ChartRadarMultiple,
  ChartRadarLegend: ChartRadarLegend,
  ChartRadarInteractive: ChartRadarInteractive,

  // Radial Chart Components
  ChartRadialSimple: ChartRadialSimple,
  ChartRadialLabel: ChartRadialLabel,
  ChartRadialGrid: ChartRadialGrid,
  ChartRadialText: ChartRadialText,
  ChartRadialShape: ChartRadialShape,
  ChartRadialStacked: ChartRadialStacked,
  ChartRadialInteractive: ChartRadialInteractive,
  ChartRadialBase: ChartRadialBase,
  ChartRadialInteractiveWrapper: ChartRadialInteractiveWrapper,
  ChartRadialInteractiveComplete: ChartRadialInteractiveComplete,
}

console.log("📚 ComponentRegistry: Registry created with components:", Object.keys(componentRegistry))

// Prop validation schemas for strict components
export const componentPropSchemas: Record<string, any> = {
  Button: {
    variant: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    size: ["default", "sm", "lg", "icon"],
    disabled: "boolean",
  },
  Badge: {
    variant: ["default", "secondary", "destructive", "outline"],
  },
  Card: {
    // Card is flexible, mainly uses className
  },
  Icon: {
    name: "string", // required
    size: ["number", "string"],
    color: "string",
  },
  "motion.div": {
    variants: "any",
  },
  CardCarousel: {
    // Allow all props for the custom carousel
  },
  InteractiveAreaChart: {
    data: "any",
    config: "any",
  },
  // Bar Chart Components
  ChartBarInteractive: {
    data: "any",
    config: "any",
  },
  ChartBarInteractiveControls: {
    data: "any",
    config: "any",
  },
  ChartBarInteractiveChart: {
    data: "any",
    config: "any",
    className: "string",
  },
  ChartBarDefault: {
    data: "any", 
    config: "any",
  },
  ChartBarHorizontal: {
    data: "any",
    config: "any", 
  },
  ChartBarMultiple: {
    data: "any",
    config: "any",
  },
  ChartBarStacked: {
    data: "any",
    config: "any",
  },
  ChartBarNegative: {
    data: "any",
    config: "any",
  },
  // Line Chart Components
  ChartLineDefault: {
    data: "any",
    config: "any",
  },
  ChartLineMultiple: {
    data: "any",
    config: "any",
  },
  ChartLineInteractive: {
    data: "any",
    config: "any",
    activeChart: "string",
  },
  ChartLineDots: {
    data: "any",
    config: "any",
  },
  ChartLineStep: {
    data: "any",
    config: "any",
  },
  // Pie Chart Components
  ChartPieSimple: {
    data: "any",
    config: "any",
  },
  ChartPieDonut: {
    data: "any",
    config: "any",
    innerRadius: "number",
  },
  ChartPieDonutText: {
    data: "any",
    config: "any",
    innerRadius: "number",
    centerText: "any",
  },
  ChartPieLabel: {
    data: "any",
    config: "any",
    showCustomLabel: "boolean",
  },
  ChartPieLegend: {
    data: "any",
    config: "any",
    legendClassName: "string",
  },
  ChartPieStacked: {
    data: "any",
    config: "any",
    innerRadius: "number",
    outerRadius: "number",
    innerOuterRadius: "number",
    outerInnerRadius: "number",
  },
  ChartPieInteractive: {
    data: "any",
    config: "any",
    innerRadius: "number",
    strokeWidth: "number",
    className: "string",
  },
  // Radar Chart Components
  ChartRadarDefault: {
    data: "any",
    config: "any",
  },
  ChartRadarDots: {
    data: "any",
    config: "any",
  },
  ChartRadarLinesOnly: {
    data: "any",
    config: "any",
  },
  ChartRadarMultiple: {
    data: "any",
    config: "any",
  },
  ChartRadarLegend: {
    data: "any",
    config: "any",
  },
  ChartRadarInteractive: {
    data: "any",
    config: "any",
    className: "string",
  },
  // Radial Chart Components
  ChartRadialSimple: {
    data: "any",
    config: "any",
    className: "string",
    footer: "any",
  },
  ChartRadialLabel: {
    data: "any",
    config: "any",
    className: "string",
    footer: "any",
  },
  ChartRadialGrid: {
    data: "any",
    config: "any",
    className: "string",
    footer: "any",
  },
  ChartRadialText: {
    data: "any",
    config: "any",
    className: "string",
    footer: "any",
  },
  ChartRadialShape: {
    data: "any",
    config: "any",
    className: "string",
    footer: "any",
  },
  ChartRadialStacked: {
    data: "any",
    config: "any",
    className: "string",
    footer: "any",
  },
  ChartRadialInteractive: {
    chartData: "any",
    chartConfig: "any",
    colorPalette: "any",
    title: "string",
    description: "string",
    showMonthSelector: "boolean",
    monthOptions: "any",
    showStatistics: "boolean",
    statisticsTitle: "string",
    statisticsItems: "any",
    showSummary: "boolean",
    summaryTitle: "string",
    summaryItems: "any",
    chartHeight: "number",
    showTooltip: "boolean",
    dataKey: "string",
    categoryKey: "string",
    innerRadius: "number",
    outerRadius: "number",
    startAngle: "number",
    endAngle: "number",
    cornerRadius: "number",
    tooltipCursor: "boolean",
    defaultColorHue: "number",
    defaultColorSaturation: "number",
    defaultColorLightness: "number",
    colorFallbackEnabled: "boolean",
    className: "string"
  },
  ChartRadialBase: {
    data: "any",
    config: "any",
    innerRadius: "number",
    outerRadius: "number",
    startAngle: "number",
    endAngle: "number",
    dataKey: "string",
    categoryKey: "string",
    showTooltip: "boolean",
    className: "string",
    height: "number",
    cornerRadius: "number",
    tooltipCursor: "boolean",
    defaultColorHue: "number",
    defaultColorSaturation: "number",
    defaultColorLightness: "number",
    colorFallbackEnabled: "boolean"
  },
  ChartRadialInteractiveWrapper: {
    data: "any",
    config: "any",
    monthOptions: "any",
    selectedMonth: "string",
    onMonthChange: "any",
    dataKey: "string",
    categoryKey: "string",
    innerRadius: "number",
    outerRadius: "number",
    startAngle: "number",
    endAngle: "number",
    showTooltip: "boolean",
    className: "string",
    height: "number",
  },
  ChartRadialInteractiveComplete: {
    monthlyData: "any",
    chartConfig: "any",
    title: "string",
    description: "string",
    monthOptions: "any",
    dataKey: "string",
    categoryKey: "string",
    height: "number",
    showTooltip: "boolean",
    className: "string",
    innerRadius: "number",
    outerRadius: "number",
    startAngle: "number",
    endAngle: "number",
    cornerRadius: "number",
    tooltipCursor: "boolean",
    defaultColorHue: "number",
    defaultColorSaturation: "number",
    defaultColorLightness: "number",
    colorFallbackEnabled: "boolean"
  },
  // Chart Components
  ChartContainer: {
    config: "any",
  },
  AreaChart: {
    data: "any",
    accessibilityLayer: "boolean",
    margin: "any",
    stackOffset: "string",
  },
  Area: {
    dataKey: "string",
    type: ["natural", "linear", "step"],
    fill: "string",
    fillOpacity: "number",
    stroke: "string",
    stackId: "string",
  },
  BarChart: {
    data: "any",
    accessibilityLayer: "boolean",
    margin: "any",
  },
  Bar: {
    dataKey: "string",
    fill: "string",
  },
  LineChart: {
    data: "any",
    accessibilityLayer: "boolean",
    margin: "any",
  },
  Line: {
    dataKey: "string",
    type: ["natural", "linear", "step", "monotone"],
    stroke: "string",
    strokeWidth: "number",
    dot: "any",
    activeDot: "any",
  },
  RadarChart: {
    data: "any",
    margin: "any",
  },
  Radar: {
    dataKey: "string",
    fill: "string",
    fillOpacity: "number",
    stroke: "string",
    strokeWidth: "number",
    dot: "any",
  },
  PolarGrid: {
    radialLines: "boolean",
    polarRadius: "any",
    strokeWidth: "number",
    className: "string",
    gridType: ["polygon", "circle"],
  },
  PolarAngleAxis: {
    dataKey: "string",
    tick: "any",
  },
  CartesianGrid: {
    vertical: "boolean",
  },
  XAxis: {
    dataKey: "string",
    tickLine: "boolean",
    axisLine: "boolean",
    tickMargin: "number",
    minTickGap: "number",
  },
  YAxis: {
    tickLine: "boolean",
    axisLine: "boolean",
    tickMargin: "number",
    tickCount: "number",
  },
  ChartTooltip: {
    cursor: "boolean",
  },
  ChartTooltipContent: {
    indicator: ["line", "dot"],
    hideLabel: "boolean",
    nameKey: "string",
  },
  ChartLegend: {},
  ChartLegendContent: {},
  // Select Components
  Select: {
    defaultValue: "string",
    value: "string",
    onValueChange: "any",
  },
  SelectTrigger: {
    "aria-label": "string",
  },
  SelectValue: {
    placeholder: "string",
  },
  SelectContent: {},
  SelectItem: {
    value: "string",
  },
}

console.log("📚 ComponentRegistry: Component registry initialization completed")
