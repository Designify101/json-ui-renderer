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
      { category: "desktop", value: 186, color: "#3b82f6" },
      { category: "mobile", value: 305, color: "#10b981" },
      { category: "tablet", value: 237, color: "#f59e0b" },
      { category: "other", value: 73, color: "#8b5cf6" },
    ],
    chartConfig: {
      value: { label: "Users" },
      desktop: { label: "Desktop", color: "#3b82f6" },
      mobile: { label: "Mobile", color: "#10b981" },
      tablet: { label: "Tablet", color: "#f59e0b" },
      other: { label: "Other", color: "#8b5cf6" },
    },
    summaryData: [
      { label: "Total Users", value: "801" },
      { label: "Device Types", value: "4" },
      { label: "Primary Platform", value: "Mobile" },
    ]
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
            children: [{ text: "Device Usage Analytics" }]
          },
          {
            type: "CardDescription",
            children: [{ text: "User device distribution" }]
          }
        ]
      },
      {
        type: "CardContent",
        props: {
          className: "flex-1 pb-0"
        },
        children: [
          {
            type: "ChartRadialBase",
            props: {
              data: "$data.chartData",
              config: "$data.chartConfig",
              dataKey: "value",
              categoryKey: "category",
              height: 300,
              innerRadius: 60,
              outerRadius: 140,
              startAngle: 90,
              endAngle: 450,
              cornerRadius: 5,
              tooltipCursor: false,
              showTooltip: true,
              colorFallbackEnabled: false,
              className: "w-full"
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
            children: [{ text: "Device Usage Analytics" }]
          },
          {
            type: "CardDescription",
            children: [{ text: "User device type distribution" }]
          }
        ]
      },
      {
        type: "CardContent",
        props: {
          className: "flex-1 pb-0"
        },
        children: [
          {
            type: "ChartRadialBase",
            props: {
              data: "$data.chartData",
              config: "$data.chartConfig",
              dataKey: "value",
              categoryKey: "category",
              height: 320,
              innerRadius: 60,
              outerRadius: 140,
              startAngle: 90,
              endAngle: 450,
              cornerRadius: 5,
              tooltipCursor: false,
              showTooltip: true,
              colorFallbackEnabled: false,
              className: "w-full"
            }
          }
        ]
      }
    ]
  }
}

// Custom Styled Radial Chart Template - Demonstrating configurable properties
export const radialChartCustomStyledTemplate: RenderLayout = {
  id: "radial-chart-custom-styled",
  title: "Custom Styled Radial Chart",
  description: "JSON-driven radial chart with custom styling and configuration",
  data: {
    chartData: [
      { category: "react", value: 850, color: "#61dafb" },
      { category: "vue", value: 420, color: "#4fc08d" },
      { category: "angular", value: 320, color: "#dd1b16" },
      { category: "svelte", value: 180, color: "#ff3e00" },
    ],
    chartConfig: {
      value: { label: "Developers" },
      react: { label: "React", color: "#61dafb" },
      vue: { label: "Vue", color: "#4fc08d" },
      angular: { label: "Angular", color: "#dd1b16" },
      svelte: { label: "Svelte", color: "#ff3e00" },
    }
  },
  root: {
    type: "Card",
    props: {
      className: "w-full max-w-md"
    },
    children: [
      {
        type: "CardHeader",
        props: {
          className: "text-center"
        },
        children: [
          {
            type: "CardTitle",
            children: [{ text: "Framework Popularity" }]
          },
          {
            type: "CardDescription",
            children: [{ text: "Developer preference survey 2024" }]
          }
        ]
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ChartRadialBase",
            props: {
              data: "$data.chartData",
              config: "$data.chartConfig",
              dataKey: "value",
              categoryKey: "category",
              height: 280,
              innerRadius: 40,
              outerRadius: 120,
              startAngle: 0,
              endAngle: 360,
              cornerRadius: 10,
              tooltipCursor: true,
              showTooltip: true,
              colorFallbackEnabled: false,
              className: "w-full"
            }
          }
        ]
      }
    ]
  }
}

// Export all templates
export const radialChartTemplates = {
  interactive: radialChartInteractiveTemplate,
  simple: radialChartSimpleTemplate,
  custom: radialChartCustomTemplate,
  customStyled: radialChartCustomStyledTemplate,
} 