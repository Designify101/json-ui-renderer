import { RenderLayout } from "@/types/render-schema"

// Simple Radial Chart Template
export const radialChartSimpleTemplate: RenderLayout = {
  id: "radial-chart-simple",
  title: "Simple Radial Chart",
  description: "Basic radial chart showing data in a circular format",
  data: {
    chartData: [
      { quarter: "Q1", value: 85 },
      { quarter: "Q2", value: 92 },
      { quarter: "Q3", value: 78 },
      { quarter: "Q4", value: 96 },
    ],
    chartConfig: {
      value: { label: "Value %" },
      Q1: { label: "Q1 2024" },
      Q2: { label: "Q2 2024" },
      Q3: { label: "Q3 2024" },
      Q4: { label: "Q4 2024" },
    }
  },
  root: {
    type: "Card",
    props: {
      className: "flex flex-col"
    },
    children: [
      {
        type: "CardHeader",
        props: {
          className: "items-center pb-0"
        },
        children: [
          {
            type: "CardTitle",
            children: [{ text: "Simple Radial Chart" }]
          },
          {
            type: "CardDescription", 
            children: [{ text: "Showing quarterly performance data" }]
          }
        ]
      },
      {
        type: "CardContent",
        props: {
          className: "flex-1 px-2 pb-2"
        },
        children: [
          {
            type: "ChartRadialSimple",
            props: {
              data: "$data.chartData",
              config: "$data.chartConfig"
            }
          }
        ]
      }
    ]
  }
}

// Label Radial Chart Template
export const radialChartLabelTemplate: RenderLayout = {
  id: "radial-chart-label",
  title: "Radial Chart with Labels",
  description: "Radial chart with data labels on bars",
  data: {
    chartData: [
      { category: "Desktop", value: 186 },
      { category: "Mobile", value: 305 },
      { category: "Tablet", value: 237 },
    ],
    chartConfig: {
      value: { label: "Value" },
      desktop: { label: "Desktop" },
      mobile: { label: "Mobile" },
      tablet: { label: "Tablet" },
    }
  },
  root: {
    type: "Card",
    props: {
      className: "flex flex-col"
    },
    children: [
      {
        type: "CardHeader",
        props: {
          className: "items-center pb-0"
        },
        children: [
          {
            type: "CardTitle",
            children: [{ text: "Radial Chart - Label" }]
          },
          {
            type: "CardDescription",
            children: [{ text: "January - June 2024" }]
          }
        ]
      },
      {
        type: "CardContent",
        props: {
          className: "flex-1 px-2 pb-2"
        },
        children: [
          {
            type: "ChartRadialLabel",
            props: {
              data: "$data.chartData",
              config: "$data.chartConfig"
            }
          }
        ]
      }
    ]
  }
}

// Grid Radial Chart Template
export const radialChartGridTemplate: RenderLayout = {
  id: "radial-chart-grid",
  title: "Radial Chart with Grid",
  description: "Radial chart with circular grid lines",
  data: {
    chartData: [
      { category: "Desktop", value: 186 },
      { category: "Mobile", value: 305 },
      { category: "Tablet", value: 237 },
    ],
    chartConfig: {
      value: { label: "Value" },
      desktop: { label: "Desktop" },
      mobile: { label: "Mobile" },
      tablet: { label: "Tablet" },
    }
  },
  root: {
    type: "Card",
    props: {
      className: "flex flex-col"
    },
    children: [
      {
        type: "CardHeader",
        props: {
          className: "items-center pb-0"
        },
        children: [
          {
            type: "CardTitle",
            children: [{ text: "Radial Chart - Grid" }]
          },
          {
            type: "CardDescription",
            children: [{ text: "January - June 2024" }]
          }
        ]
      },
      {
        type: "CardContent",
        props: {
          className: "flex-1 px-2 pb-2"
        },
        children: [
          {
            type: "ChartRadialGrid",
            props: {
              data: "$data.chartData",
              config: "$data.chartConfig"
            }
          }
        ]
      }
    ]
  }
}

// Text Radial Chart Template
export const radialChartTextTemplate: RenderLayout = {
  id: "radial-chart-text",
  title: "Radial Chart with Text",
  description: "Radial chart with center text display",
  data: {
    chartData: [
      { category: "Desktop", value: 186 },
      { category: "Mobile", value: 305 },
      { category: "Tablet", value: 237 },
    ],
    chartConfig: {
      value: { label: "Value" },
      desktop: { label: "Desktop" },
      mobile: { label: "Mobile" },
      tablet: { label: "Tablet" },
    }
  },
  root: {
    type: "Card",
    props: {
      className: "flex flex-col"
    },
    children: [
      {
        type: "CardHeader",
        props: {
          className: "items-center pb-0"
        },
        children: [
          {
            type: "CardTitle",
            children: [{ text: "Radial Chart - Text" }]
          },
          {
            type: "CardDescription",
            children: [{ text: "January - June 2024" }]
          }
        ]
      },
      {
        type: "CardContent",
        props: {
          className: "flex-1 px-2 pb-2"
        },
        children: [
          {
            type: "ChartRadialText",
            props: {
              data: "$data.chartData",
              config: "$data.chartConfig"
            }
          }
        ]
      }
    ]
  }
}

// Shape Radial Chart Template
export const radialChartShapeTemplate: RenderLayout = {
  id: "radial-chart-shape",
  title: "Radial Chart - Shape",
  description: "Radial chart with custom shape/angles",
  data: {
    chartData: [
      { category: "Desktop", value: 186 },
      { category: "Mobile", value: 305 },
      { category: "Tablet", value: 237 },
    ],
    chartConfig: {
      value: { label: "Value" },
      desktop: { label: "Desktop" },
      mobile: { label: "Mobile" },
      tablet: { label: "Tablet" },
    }
  },
  root: {
    type: "Card",
    props: {
      className: "flex flex-col"
    },
    children: [
      {
        type: "CardHeader",
        props: {
          className: "items-center pb-0"
        },
        children: [
          {
            type: "CardTitle",
            children: [{ text: "Radial Chart - Shape" }]
          },
          {
            type: "CardDescription",
            children: [{ text: "January - June 2024" }]
          }
        ]
      },
      {
        type: "CardContent",
        props: {
          className: "flex-1 px-2 pb-2"
        },
        children: [
          {
            type: "ChartRadialShape",
            props: {
              data: "$data.chartData",
              config: "$data.chartConfig"
            }
          }
        ]
      }
    ]
  }
}

// Stacked Radial Chart Template
export const radialChartStackedTemplate: RenderLayout = {
  id: "radial-chart-stacked",
  title: "Stacked Radial Chart",
  description: "Radial chart with multiple data series",
  data: {
    chartData: [
      { category: "Desktop", desktop: 186, mobile: 80 },
      { category: "Mobile", desktop: 305, mobile: 200 },
      { category: "Tablet", desktop: 237, mobile: 120 },
    ],
    chartConfig: {
      desktop: { label: "Desktop" },
      mobile: { label: "Mobile" },
    }
  },
  root: {
    type: "Card",
    props: {
      className: "flex flex-col"
    },
    children: [
      {
        type: "CardHeader",
        props: {
          className: "items-center pb-0"
        },
        children: [
          {
            type: "CardTitle",
            children: [{ text: "Radial Chart - Stacked" }]
          },
          {
            type: "CardDescription",
            children: [{ text: "January - June 2024" }]
          }
        ]
      },
      {
        type: "CardContent",
        props: {
          className: "flex-1 px-2 pb-2"
        },
        children: [
          {
            type: "ChartRadialStacked",
            props: {
              data: "$data.chartData",
              config: "$data.chartConfig"
            }
          }
        ]
      }
    ]
  }
}

// Interactive Radial Chart Template
export const radialChartInteractiveTemplate: RenderLayout = {
  id: "radial-chart-interactive",
  title: "Interactive Radial Chart",
  description: "Interactive radial chart with month selector and statistics",
  data: {},
  root: {
    type: "ChartRadialInteractive"
  }
}

// Sales Performance Template
export const radialChartSalesTemplate: RenderLayout = {
  id: "radial-chart-sales",
  title: "Sales Performance",
  description: "Sales performance metrics with radial visualization",
  data: {
    chartData: [
      { month: "January", sales: 186000 },
      { month: "February", sales: 305000 },
      { month: "March", sales: 237000 },
      { month: "April", sales: 283000 },
      { month: "May", sales: 209000 },
      { month: "June", sales: 264000 },
    ],
    chartConfig: {
      sales: { label: "Sales ($)" },
      january: { label: "January" },
      february: { label: "February" },
      march: { label: "March" },
      april: { label: "April" },
      may: { label: "May" },
      june: { label: "June" },
    }
  },
  root: {
    type: "Card",
    props: {
      className: "flex flex-col"
    },
    children: [
      {
        type: "CardHeader",
        props: {
          className: "items-center pb-0"
        },
        children: [
          {
            type: "CardTitle",
            children: [{ text: "Sales Performance" }]
          },
          {
            type: "CardDescription",
            children: [{ text: "January - June 2024" }]
          }
        ]
      },
      {
        type: "CardContent",
        props: {
          className: "flex-1 px-2 pb-2"
        },
        children: [
          {
            type: "ChartRadialSimple",
            props: {
              data: "$data.chartData",
              config: "$data.chartConfig"
            }
          }
        ]
      },
      {
        type: "CardFooter",
        props: {
          className: "flex-col gap-2 text-sm"
        },
        children: [
          {
            tag: "div",
            props: {
              className: "flex items-center gap-2 leading-none font-medium"
            },
            children: [
              { text: "Trending up by 12.5% this quarter" },
              {
                type: "Icon",
                props: {
                  name: "TrendingUp",
                  className: "h-4 w-4"
                }
              }
            ]
          },
          {
            tag: "div",
            props: {
              className: "text-muted-foreground leading-none"
            },
            children: [
              { text: "Showing total sales for the last 6 months" }
            ]
          }
        ]
      }
    ]
  }
}

// Health Metrics Template
export const radialChartHealthTemplate: RenderLayout = {
  id: "radial-chart-health",
  title: "Health Metrics",
  description: "Health and fitness metrics with radial visualization",
  data: {
    chartData: [
      { metric: "Steps", value: 12500 },
      { metric: "Calories", value: 2100 },
      { metric: "Active Minutes", value: 45 },
      { metric: "Sleep Hours", value: 7.5 },
    ],
    chartConfig: {
      value: { label: "Value" },
      steps: { label: "Steps" },
      calories: { label: "Calories" },
      active: { label: "Active Minutes" },
      sleep: { label: "Sleep Hours" },
    }
  },
  root: {
    type: "Card",
    props: {
      className: "flex flex-col"
    },
    children: [
      {
        type: "CardHeader",
        props: {
          className: "items-center pb-0"
        },
        children: [
          {
            type: "CardTitle",
            children: [{ text: "Health Metrics" }]
          },
          {
            type: "CardDescription",
            children: [{ text: "Daily health and fitness tracking" }]
          }
        ]
      },
      {
        type: "CardContent",
        props: {
          className: "flex-1 px-2 pb-2"
        },
        children: [
          {
            type: "ChartRadialText",
            props: {
              data: "$data.chartData",
              config: "$data.chartConfig"
            }
          }
        ]
      },
      {
        type: "CardFooter",
        props: {
          className: "flex-col gap-2 text-sm"
        },
        children: [
          {
            tag: "div",
            props: {
              className: "flex items-center gap-2 leading-none font-medium"
            },
            children: [
              { text: "Great progress this week!" },
              {
                type: "Icon",
                props: {
                  name: "TrendingUp",
                  className: "h-4 w-4"
                }
              }
            ]
          },
          {
            tag: "div",
            props: {
              className: "text-muted-foreground leading-none"
            },
            children: [
              { text: "Keep up the healthy lifestyle" }
            ]
          }
        ]
      }
    ]
  }
}

// Project Progress Template
export const radialChartProjectTemplate: RenderLayout = {
  id: "radial-chart-project",
  title: "Project Progress",
  description: "Project completion progress with radial visualization",
  data: {
    chartData: [
      { phase: "Planning", completion: 100 },
      { phase: "Development", completion: 75 },
      { phase: "Testing", completion: 40 },
      { phase: "Deployment", completion: 0 },
    ],
    chartConfig: {
      completion: { label: "Completion %" },
      planning: { label: "Planning" },
      development: { label: "Development" },
      testing: { label: "Testing" },
      deployment: { label: "Deployment" },
    }
  },
  root: {
    type: "Card",
    props: {
      className: "flex flex-col"
    },
    children: [
      {
        type: "CardHeader",
        props: {
          className: "items-center pb-0"
        },
        children: [
          {
            type: "CardTitle",
            children: [{ text: "Project Progress" }]
          },
          {
            type: "CardDescription",
            children: [{ text: "Development lifecycle completion" }]
          }
        ]
      },
      {
        type: "CardContent",
        props: {
          className: "flex-1 px-2 pb-2"
        },
        children: [
          {
            type: "ChartRadialGrid",
            props: {
              data: "$data.chartData",
              config: "$data.chartConfig"
            }
          }
        ]
      },
      {
        type: "CardFooter",
        props: {
          className: "flex-col gap-2 text-sm"
        },
        children: [
          {
            tag: "div",
            props: {
              className: "flex items-center gap-2 leading-none font-medium"
            },
            children: [
              { text: "On track for Q4 delivery" },
              {
                type: "Icon",
                props: {
                  name: "TrendingUp",
                  className: "h-4 w-4"
                }
              }
            ]
          },
          {
            tag: "div",
            props: {
              className: "text-muted-foreground leading-none"
            },
            children: [
              { text: "Development phase nearing completion" }
            ]
          }
        ]
      }
    ]
  }
}

// Export all templates
export const radialChartTemplates = [
  radialChartSimpleTemplate,
  radialChartLabelTemplate,
  radialChartGridTemplate,
  radialChartTextTemplate,
  radialChartShapeTemplate,
  radialChartStackedTemplate,
  radialChartInteractiveTemplate,
  radialChartSalesTemplate,
  radialChartHealthTemplate,
  radialChartProjectTemplate,
] 