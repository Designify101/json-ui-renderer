import type { RenderLayout } from "@/types/render-schema"

// Color palette for consistency
const colorPalette = {
  chrome: "#3b82f6",
  safari: "#10b981", 
  firefox: "#f59e0b",
  edge: "#8b5cf6",
  opera: "#ef4444",
  other: "#6b7280"
}

// Simple Radial Chart Template
export const radialChartSimpleTemplate: RenderLayout = {
  id: "radial-chart-simple",
  title: "Simple Radial Chart",
  description: "JSON-driven simple radial chart with single dataset",
  data: {
    chartData: [
      { category: "chrome", value: 1420, color: colorPalette.chrome },
      { category: "safari", value: 580, color: colorPalette.safari },
      { category: "firefox", value: 420, color: colorPalette.firefox },
      { category: "edge", value: 200, color: colorPalette.edge },
      { category: "opera", value: 100, color: colorPalette.opera },
    ],
    chartConfig: {
      value: { label: "Visitors" },
      chrome: { label: "Chrome", color: colorPalette.chrome },
      safari: { label: "Safari", color: colorPalette.safari },
      firefox: { label: "Firefox", color: colorPalette.firefox },
      edge: { label: "Edge", color: colorPalette.edge },
      opera: { label: "Opera", color: colorPalette.opera },
    },
    summaryData: [
      { label: "Total Visitors", value: "2,720" },
      { label: "Browser Types", value: "5" },
      { label: "Market Leader", value: "Chrome" },
    ]
  },
  root: {
    type: "ChartRadialInteractive",
        props: {
      chartData: "$data.chartData",
      chartConfig: "$data.chartConfig",
      
      title: "Browser Usage Statistics",
      description: "Current month browser usage breakdown",
      showMonthSelector: false,
      
      showStatistics: false,
      
      showSummary: true,
      summaryTitle: "OVERVIEW",
      summaryItems: "$data.summaryData",
      
      chartHeight: 300,
      showTooltip: true,
      dataKey: "value",
      categoryKey: "category",
      
      className: "w-full"
    }
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
  title: "Interactive Radial Chart - Manual UI",
  description: "JSON-driven interactive radial chart with manually built UI components",
  data: {
    // Monthly browser usage data 
    monthlyData: {
      january: [
        { category: "chrome", value: 1420, color: "#3b82f6" },
        { category: "safari", value: 580, color: "#10b981" },
        { category: "firefox", value: 420, color: "#f59e0b" },
        { category: "edge", value: 200, color: "#8b5cf6" },
        { category: "opera", value: 100, color: "#ef4444" },
      ],
      february: [
        { category: "chrome", value: 1380, color: "#3b82f6" },
        { category: "safari", value: 620, color: "#10b981" },
        { category: "firefox", value: 380, color: "#f59e0b" },
        { category: "edge", value: 190, color: "#8b5cf6" },
        { category: "opera", value: 85, color: "#ef4444" },
      ],
      march: [
        { category: "chrome", value: 1520, color: "#3b82f6" },
        { category: "safari", value: 600, color: "#10b981" },
        { category: "firefox", value: 430, color: "#f59e0b" },
        { category: "edge", value: 210, color: "#8b5cf6" },
        { category: "opera", value: 115, color: "#ef4444" },
      ],
      april: [
        { category: "chrome", value: 1290, color: "#3b82f6" },
        { category: "safari", value: 620, color: "#10b981" },
        { category: "firefox", value: 380, color: "#f59e0b" },
        { category: "edge", value: 190, color: "#8b5cf6" },
        { category: "opera", value: 120, color: "#ef4444" },
      ],
      may: [
        { category: "chrome", value: 1420, color: "#3b82f6" },
        { category: "safari", value: 580, color: "#10b981" },
        { category: "firefox", value: 420, color: "#f59e0b" },
        { category: "edge", value: 200, color: "#8b5cf6" },
        { category: "opera", value: 100, color: "#ef4444" },
      ]
    },
    // Chart configuration
    chartConfig: {
      value: { label: "Visitors" },
      chrome: { label: "Chrome", color: "#3b82f6" },
      safari: { label: "Safari", color: "#10b981" },
      firefox: { label: "Firefox", color: "#f59e0b" },
      edge: { label: "Edge", color: "#8b5cf6" },
      opera: { label: "Opera", color: "#ef4444" },
    },
    // Month options for selector
    monthOptions: [
      { value: "january", label: "January" },
      { value: "february", label: "February" },
      { value: "march", label: "March" },
      { value: "april", label: "April" },
      { value: "may", label: "May" },
    ]
  },
  root: {
    tag: "div",
    props: {
      className: "w-full max-w-4xl mx-auto p-4"
    },
    children: [
      {
        type: "ChartRadialInteractiveComplete",
        props: {
          monthlyData: "$data.monthlyData",
          chartConfig: "$data.chartConfig",
          title: "Browser Usage Statistics",
          description: "Interactive radial chart with month selector",
          monthOptions: "$data.monthOptions",
          dataKey: "value",
          categoryKey: "category",
          height: 350,
          showTooltip: true,
          className: "w-full"
        }
      }
    ]
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

// Custom data example for different use case
export const radialChartCustomTemplate: RenderLayout = {
  id: "radial-chart-custom",
  title: "Custom Radial Chart",
  description: "JSON-driven custom radial chart with different data",
  data: {
    chartData: [
      { category: "mobile", value: 2400, color: "#3b82f6" },
      { category: "desktop", value: 1800, color: "#10b981" },
      { category: "tablet", value: 600, color: "#f59e0b" },
      { category: "other", value: 200, color: "#8b5cf6" },
    ],
    chartConfig: {
      value: { label: "Users" },
      mobile: { label: "Mobile", color: "#3b82f6" },
      desktop: { label: "Desktop", color: "#10b981" },
      tablet: { label: "Tablet", color: "#f59e0b" },
      other: { label: "Other", color: "#8b5cf6" },
    },
    statisticsData: [
      { label: "Mobile", value: "48%", color: "#3b82f6" },
      { label: "Desktop", value: "36%", color: "#10b981" },
      { label: "Tablet", value: "12%", color: "#f59e0b" },
      { label: "Other", value: "4%", color: "#8b5cf6" },
    ],
    summaryData: [
      { label: "Total Users", value: "5,000" },
      { label: "Device Types", value: "4" },
      { label: "Primary Platform", value: "Mobile" },
      { label: "Growth Rate", value: "+23%", type: "success" },
    ]
  },
  root: {
    type: "ChartRadialInteractive",
    props: {
      chartData: "$data.chartData",
      chartConfig: "$data.chartConfig",
      
      title: "Device Usage Analytics",
      description: "User device type distribution",
      showMonthSelector: false,
      
      showStatistics: true,
      statisticsTitle: "DEVICE BREAKDOWN",
      statisticsItems: "$data.statisticsData",
      
      showSummary: true,
      summaryTitle: "ANALYTICS SUMMARY",
      summaryItems: "$data.summaryData",
      
      chartHeight: 320,
      showTooltip: true,
      dataKey: "value",
      categoryKey: "category",
      
      className: "w-full"
    }
  }
}

// Export all templates
export const radialChartTemplates = {
  interactive: radialChartInteractiveTemplate,
  simple: radialChartSimpleTemplate,
  custom: radialChartCustomTemplate,
} 