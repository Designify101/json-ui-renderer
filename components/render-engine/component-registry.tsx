"use client"

import type React from "react"
// Import all shadcn/ui components
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Import Recharts components for charts
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"

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
