import type { UILayout } from "@/types/ui-schema"

export const monthlyIncomeTemplate: UILayout = {
  id: "monthly-income-card",
  title: "Monthly Income Card",
  description: "Financial card with line chart and tooltip",
  root: {
    type: "card",
    variant: "default",
    padding: "6",
    width: "full",
    style: { maxWidth: "400px" },
    children: [
      {
        type: "text",
        content: "Monthly Income",
        size: "sm",
        color: "gray",
        margin: { bottom: "4" },
      },
      {
        type: "container",
        display: "flex",
        justify: "between",
        align: "center",
        margin: { bottom: "6" },
        children: [
          {
            type: "container",
            display: "flex",
            align: "baseline",
            gap: "2",
            children: [
              {
                type: "text",
                content: "$2,450.00",
                size: "3xl",
                weight: "bold",
                color: "black",
              },
              {
                type: "badge",
                content: "+8%",
                variant: "warning",
                size: "sm",
              },
            ],
          },
          {
            type: "container",
            background: "black",
            color: "white",
            padding: "2",
            border: { radius: "md" },
            style: { fontSize: "12px" },
            children: [
              {
                type: "text",
                content: "$439.82.21",
                size: "xs",
                color: "white",
              },
            ],
          },
        ],
      },
      {
        type: "chart",
        chartType: "line",
        height: "32",
        data: [1200, 1800, 1400, 2100, 1600, 2400, 1900, 2450],
        config: {
          colors: ["#f97316"],
          fill: true,
          smooth: true,
          strokeWidth: 2,
          axisLabels: ["0", "2k", "3k", "4k", "5k", "6k"],
          tooltip: {
            value: "$439.82.21",
            position: { x: 250, y: 40 },
          },
        },
      },
    ],
  },
}

export const varioTemplate: UILayout = {
  id: "vario-community-card",
  title: "Vario Community Card",
  description: "Community stats card with candlestick chart and legend",
  root: {
    type: "card",
    variant: "default",
    padding: "6",
    width: "full",
    style: { maxWidth: "400px" },
    children: [
      {
        type: "heading",
        level: 3,
        content: "15M+ Vario",
        size: "xl",
        weight: "bold",
        color: "black",
        margin: { bottom: "2" },
      },
      {
        type: "body",
        content: "Join the ever-growing community of over 15 million satisfied customers.",
        size: "sm",
        color: "gray",
        lineHeight: "relaxed",
        margin: { bottom: "6" },
      },
      {
        type: "legend",
        direction: "row",
        gap: "6",
        margin: { bottom: "6" },
        items: [
          {
            label: "Income",
            color: "#000000",
            shape: "circle",
          },
          {
            label: "Expenses",
            color: "#f97316",
            shape: "circle",
          },
        ],
      },
      {
        type: "container",
        display: "flex",
        justify: "between",
        align: "start",
        children: [
          {
            type: "container",
            display: "flex",
            direction: "column",
            children: [
              {
                type: "text",
                content: "Sales Report",
                size: "sm",
                color: "gray",
                margin: { bottom: "2" },
              },
              {
                type: "container",
                display: "flex",
                align: "baseline",
                gap: "2",
                margin: { bottom: "1" },
                children: [
                  {
                    type: "text",
                    content: "$4,500.00",
                    size: "2xl",
                    weight: "bold",
                    color: "black",
                  },
                  {
                    type: "badge",
                    content: "+4.5%",
                    variant: "warning",
                    size: "sm",
                  },
                ],
              },
              {
                type: "text",
                content: "Avg. Score $240,222",
                size: "sm",
                color: "gray",
              },
            ],
          },
          {
            type: "chart",
            chartType: "candlestick",
            width: "32",
            height: "20",
            data: [
              { value: 25, type: "negative" },
              { value: 35, type: "positive" },
              { value: 20, type: "negative" },
              { value: 40, type: "positive" },
              { value: 15, type: "negative" },
              { value: 45, type: "positive" },
              { value: 30, type: "negative" },
              { value: 38, type: "positive" },
              { value: 22, type: "negative" },
              { value: 42, type: "positive" },
            ],
            config: {
              colors: ["#000000", "#f97316"],
            },
          },
        ],
      },
    ],
  },
}
