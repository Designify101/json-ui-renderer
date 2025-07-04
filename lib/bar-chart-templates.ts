import type { RenderLayout } from "@/types/render-schema"

// Template for Interactive Bar Chart - Website Analytics
export const barChartInteractiveTemplate: RenderLayout = {
  id: "bar-chart-interactive",
  title: "Interactive Bar Chart - Website Analytics",
  description: "Interactive bar chart showing website traffic with desktop/mobile toggle",
  data: {
    chartData: [
      { date: "2024-04-01", desktop: 222, mobile: 150 },
      { date: "2024-04-02", desktop: 97, mobile: 180 },
      { date: "2024-04-03", desktop: 167, mobile: 120 },
      { date: "2024-04-04", desktop: 242, mobile: 260 },
      { date: "2024-04-05", desktop: 373, mobile: 290 },
      { date: "2024-04-06", desktop: 301, mobile: 340 },
      { date: "2024-04-07", desktop: 245, mobile: 180 },
      { date: "2024-04-08", desktop: 409, mobile: 320 },
      { date: "2024-04-09", desktop: 59, mobile: 110 },
      { date: "2024-04-10", desktop: 261, mobile: 190 },
    ],
    chartConfig: {
      views: { label: "Page Views" },
      desktop: { label: "Desktop", color: "#3b82f6" }, // blue-500
      mobile: { label: "Mobile", color: "#f97316" }, // orange-500
    },
  },
  root: {
    type: "ChartBarInteractive",
    props: {
      data: "$data.chartData",
      config: "$data.chartConfig",
    },
  },
}

// Template for Default Bar Chart - Coffee Shop Sales
export const barChartDefaultTemplate: RenderLayout = {
  id: "bar-chart-default",
  title: "Basic Bar Chart - Monthly Sales",
  description: "Simple bar chart showing coffee shop revenue growth",
  data: {
    chartData: [
      { month: "January", sales: 4200 },
      { month: "February", sales: 3800 },
      { month: "March", sales: 5100 },
      { month: "April", sales: 4750 },
      { month: "May", sales: 6200 },
      { month: "June", sales: 7800 },
    ],
    chartConfig: {
      sales: { label: "Sales ($)", color: "#f97316" }, // orange-500
    },
  },
  root: {
    type: "ChartBarDefault",
    props: {
      data: "$data.chartData",
      config: "$data.chartConfig",
    },
  },
}

// Template for Horizontal Bar Chart - Programming Languages
export const barChartHorizontalTemplate: RenderLayout = {
  id: "bar-chart-horizontal",
  title: "Horizontal Bar Chart - Language Popularity",
  description: "Horizontal bar chart showing programming language usage in development teams",
  data: {
    chartData: [
      { language: "TypeScript", usage: 89 },
      { language: "Python", usage: 76 },
      { language: "JavaScript", usage: 68 },
      { language: "Go", usage: 52 },
      { language: "Rust", usage: 34 },
      { language: "Java", usage: 28 },
    ],
    chartConfig: {
      usage: { label: "Usage %", color: "#06b6d4" }, // cyan-500
    },
  },
  root: {
    type: "ChartBarHorizontal",
    props: {
      data: "$data.chartData",
      config: "$data.chartConfig",
    },
  },
}

// Template for Multiple Bar Chart - Sales Channels
export const barChartMultipleTemplate: RenderLayout = {
  id: "bar-chart-multiple",
  title: "Multiple Bar Chart - Sales Channels",
  description: "Comparison of online vs in-store sales across different seasons",
  data: {
    chartData: [
      { season: "Spring", online: 15600, inStore: 12400 },
      { season: "Summer", online: 18200, inStore: 15800 },
      { season: "Fall", online: 22100, inStore: 14200 },
      { season: "Winter", online: 28500, inStore: 18900 },
      { season: "Holiday", online: 35200, inStore: 24100 },
      { season: "Post-Holiday", online: 19800, inStore: 11200 },
    ],
    chartConfig: {
      online: { label: "Online Sales", color: "#f97316" }, // orange-500
      inStore: { label: "In-Store Sales", color: "#3b82f6" }, // blue-500
    },
  },
  root: {
    type: "ChartBarMultiple",
    props: {
      data: "$data.chartData",
      config: "$data.chartConfig",
    },
  },
}

// Template for Stacked Bar Chart - Team Productivity
export const barChartStackedTemplate: RenderLayout = {
  id: "bar-chart-stacked",
  title: "Stacked Bar Chart - Team Productivity",
  description: "Team productivity metrics showing different types of work deliverables",
  data: {
    chartData: [
      { team: "Frontend", features: 28, bugs: 12, documentation: 8 },
      { team: "Backend", features: 34, bugs: 8, documentation: 15 },
      { team: "Mobile", features: 22, bugs: 18, documentation: 6 },
      { team: "DevOps", features: 12, bugs: 5, documentation: 25 },
      { team: "QA", features: 8, bugs: 32, documentation: 18 },
      { team: "Design", features: 15, bugs: 3, documentation: 12 },
    ],
    chartConfig: {
      features: { label: "Features", color: "#f97316" }, // orange-500
      bugs: { label: "Bug Fixes", color: "#3b82f6" }, // blue-500
      documentation: { label: "Documentation", color: "#06b6d4" }, // cyan-500
    },
  },
  root: {
    type: "ChartBarStacked",
    props: {
      data: "$data.chartData",
      config: "$data.chartConfig",
    },
  },
}

// Template for Negative Bar Chart - Financial Performance
export const barChartNegativeTemplate: RenderLayout = {
  id: "bar-chart-negative",
  title: "Negative Bar Chart - Financial Performance",
  description: "Quarterly profit/loss analysis showing positive and negative values",
  data: {
    chartData: [
      { quarter: "Q1 2023", profit: 15600 },
      { quarter: "Q2 2023", profit: -8200 },
      { quarter: "Q3 2023", profit: 22400 },
      { quarter: "Q4 2023", profit: -5100 },
      { quarter: "Q1 2024", profit: 18900 },
      { quarter: "Q2 2024", profit: 31200 },
    ],
    chartConfig: {
      profit: { label: "Profit/Loss ($)", color: "#f97316" }, // orange-500
    },
  },
  root: {
    type: "ChartBarNegative",
    props: {
      data: "$data.chartData",
      config: "$data.chartConfig",
    },
  },
}

// Additional unique templates with different themes and data

// Template for E-commerce Analytics
export const barChartEcommerceTemplate: RenderLayout = {
  id: "bar-chart-ecommerce",
  title: "E-commerce Analytics - Product Categories",
  description: "Sales performance across different product categories",
  data: {
    chartData: [
      { category: "Electronics", revenue: 125000, orders: 450 },
      { category: "Clothing", revenue: 89000, orders: 620 },
      { category: "Home & Garden", revenue: 67000, orders: 380 },
      { category: "Sports", revenue: 54000, orders: 290 },
      { category: "Books", revenue: 31000, orders: 510 },
      { category: "Beauty", revenue: 42000, orders: 340 },
    ],
    chartConfig: {
      revenue: { label: "Revenue ($)", color: "#8b5cf6" }, // violet-500
      orders: { label: "Orders", color: "#ec4899" }, // pink-500
    },
  },
  root: {
    type: "ChartBarMultiple",
    props: {
      data: "$data.chartData", 
      config: "$data.chartConfig",
    },
  },
}

// Template for Server Performance Metrics
export const barChartServerTemplate: RenderLayout = {
  id: "bar-chart-server",
  title: "Server Performance - Resource Usage",
  description: "Server resource utilization across different environments",
  data: {
    chartData: [
      { server: "Production", cpu: 78, memory: 65, storage: 42 },
      { server: "Staging", cpu: 45, memory: 38, storage: 25 },
      { server: "Development", cpu: 32, memory: 28, storage: 15 },
      { server: "Testing", cpu: 56, memory: 41, storage: 30 },
      { server: "Backup", cpu: 23, memory: 18, storage: 88 },
    ],
    chartConfig: {
      cpu: { label: "CPU Usage %", color: "#f97316" }, // orange-500
      memory: { label: "Memory Usage %", color: "#3b82f6" }, // blue-500
      storage: { label: "Storage Usage %", color: "#06b6d4" }, // cyan-500
    },
  },
  root: {
    type: "ChartBarStacked",
    props: {
      data: "$data.chartData",
      config: "$data.chartConfig",
    },
  },
}

// Template for Social Media Engagement
export const barChartSocialTemplate: RenderLayout = {
  id: "bar-chart-social",
  title: "Social Media Engagement Metrics",
  description: "Platform performance comparison for social media campaigns",
  data: {
    chartData: [
      { platform: "Instagram", engagement: 12500 },
      { platform: "TikTok", engagement: 18700 },
      { platform: "Twitter", engagement: 8900 },
      { platform: "LinkedIn", engagement: 5600 },
      { platform: "Facebook", engagement: 15200 },
      { platform: "YouTube", engagement: 22100 },
    ],
    chartConfig: {
      engagement: { label: "Engagement Score", color: "#10b981" }, // green-500
    },
  },
  root: {
    type: "ChartBarHorizontal",
    props: {
      data: "$data.chartData",
      config: "$data.chartConfig",
    },
  },
}

// Export all templates
export const barChartTemplates = [
  barChartInteractiveTemplate,
  barChartDefaultTemplate,
  barChartHorizontalTemplate,
  barChartMultipleTemplate,
  barChartStackedTemplate,
  barChartNegativeTemplate,
  barChartEcommerceTemplate,
  barChartServerTemplate,
  barChartSocialTemplate,
] 