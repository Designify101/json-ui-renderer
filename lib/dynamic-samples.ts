import type { DynamicGraphic } from "@/types/dynamic-graphics"

export const exactPerformanceCard: DynamicGraphic = {
  id: "exact-performance-card",
  responsive: true,
  data: {
    title: "Performance",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.",
    metric: {
      value: "1.04",
      unit: "s",
      change: {
        value: "-22%",
        type: "negative",
      },
    },
    chart: {
      data: [65, 45, 78, 52, 89, 34, 67, 91, 43, 76, 58, 82, 39, 71, 95, 48, 63, 87, 41, 74, 56, 83, 37, 69],
    },
  },
  layout: {
    element: "div",
    className: "bg-white rounded-xl border border-gray-200 shadow-sm p-6 w-full max-w-sm",
    children: [
      {
        element: "div",
        children: [
          {
            element: "h2",
            className: "text-xl font-bold text-gray-900 mb-3",
            content: "{{title}}",
          },
          {
            element: "p",
            className: "text-sm text-gray-600 leading-relaxed",
            content: "{{description}}",
          },
        ],
      },
      {
        element: "MetricWithBadge",
      },
      {
        element: "PerformanceChart",
      },
    ],
  },
}

export const alternativePerformanceCard: DynamicGraphic = {
  id: "alt-performance-card",
  responsive: true,
  data: {
    title: "Response Time",
    description: "Average API response time across all endpoints during peak hours.",
    metric: {
      value: "2.3",
      unit: "s",
      change: {
        value: "+8%",
        type: "positive",
      },
    },
    chart: {
      data: [45, 67, 23, 89, 56, 78, 34, 91, 47, 82, 38, 73, 59, 86, 42, 77, 51, 84, 36, 79, 53, 88, 41, 75],
    },
  },
  layout: {
    element: "div",
    className: "bg-white rounded-xl border border-gray-200 shadow-sm p-6 w-full max-w-sm",
    children: [
      {
        element: "div",
        children: [
          {
            element: "h2",
            className: "text-xl font-bold text-gray-900 mb-3",
            content: "{{title}}",
          },
          {
            element: "p",
            className: "text-sm text-gray-600 leading-relaxed",
            content: "{{description}}",
          },
        ],
      },
      {
        element: "MetricWithBadge",
      },
      {
        element: "PerformanceChart",
      },
    ],
  },
}
