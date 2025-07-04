import type { UILayout } from "@/types/ui-schema"

export const performanceCardTemplate: UILayout = {
  id: "performance-card",
  title: "Performance Card",
  description: "A performance metrics card with chart visualization",
  theme: {
    colors: {
      primary: "indigo-600",
      secondary: "gray-600",
    },
  },
  root: {
    type: "card",
    variant: "default",
    padding: "6",
    width: "full",
    style: { maxWidth: "384px" },
    children: [
      {
        type: "heading",
        level: 2,
        content: "Performance",
        size: "xl",
        weight: "bold",
        color: "black",
        margin: { bottom: "3" },
      },
      {
        type: "body",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.",
        size: "sm",
        color: "gray",
        lineHeight: "relaxed",
        margin: { bottom: "6" },
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
            gap: "1",
            children: [
              {
                type: "text",
                content: "1.04",
                size: "4xl",
                weight: "bold",
                color: "primary",
              },
              {
                type: "text",
                content: "s",
                size: "2xl",
                weight: "bold",
                color: "primary",
              },
            ],
          },
          {
            type: "container",
            background: "indigo-50",
            color: "primary",
            padding: "2",
            border: { radius: "full" },
            children: [
              {
                type: "text",
                content: "-22%",
                size: "sm",
                weight: "medium",
              },
            ],
          },
        ],
      },
      {
        type: "chart",
        chartType: "bar",
        height: "16",
        data: [65, 45, 78, 52, 89, 34, 67, 91, 43, 76, 58, 82, 39, 71, 95, 48, 63, 87, 41, 74, 56, 83, 37, 69],
      },
    ],
  },
}

export const heroSectionTemplate: UILayout = {
  id: "hero-section",
  title: "Hero Section",
  description: "A complete hero section with heading, description, and CTA buttons",
  root: {
    type: "container",
    display: "flex",
    direction: "column",
    align: "center",
    justify: "center",
    padding: "20",
    background: "gray-50",
    minHeight: "screen",
    children: [
      {
        type: "heading",
        level: 1,
        content: "Build Anything with JSON",
        size: "6xl",
        weight: "bold",
        align: "center",
        margin: { bottom: "6" },
      },
      {
        type: "body",
        content: "Create beautiful, responsive websites using our JSON-driven UI builder. No code required.",
        size: "xl",
        color: "gray",
        align: "center",
        margin: { bottom: "8" },
        style: { maxWidth: "768px" },
      },
      {
        type: "container",
        display: "flex",
        gap: "4",
        children: [
          {
            type: "button",
            content: "Get Started",
            variant: "primary",
            size: "lg",
          },
          {
            type: "button",
            content: "Learn More",
            variant: "outline",
            size: "lg",
          },
        ],
      },
    ],
  },
}
