import type { GraphicData } from "@/types/graphics"

export const sampleGraphics: GraphicData[] = [
  {
    id: "perf-1",
    type: "performance-card",
    title: "Performance",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.",
    metric: {
      value: "104",
      change: {
        value: "-22%",
        type: "negative",
      },
    },
    chart: {
      type: "bar",
      data: [45, 52, 38, 65, 42, 58, 48, 72, 35, 68, 45, 58, 62, 48, 55, 38, 65, 42, 58, 48],
      gradient: true,
    },
    responsive: true,
  },
  {
    id: "stat-1",
    type: "stat-card",
    title: "Total Revenue",
    value: "$45,231",
    subtitle: "+20.1% from last month",
    icon: "💰",
    color: "green",
  },
  {
    id: "stat-2",
    type: "stat-card",
    title: "Active Users",
    value: "2,350",
    subtitle: "+180 new users",
    icon: "👥",
    color: "blue",
  },
  {
    id: "chart-1",
    type: "chart-card",
    title: "Sales by Category",
    description: "Breakdown of sales across different product categories",
    chart: {
      type: "bar",
      data: [45, 32, 28, 15, 8],
      labels: ["Tech", "Books", "Home", "Sports", "Art"],
      colors: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"],
    },
  },
]
