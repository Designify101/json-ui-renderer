import type { RenderLayout } from "@/types/render-schema"

// Template for Simple Radial Chart - Browser Usage
export const radialChartSimpleTemplate: RenderLayout = {
  id: "radial-chart-simple",
  title: "Simple Radial Chart - Browser Usage",
  description: "Basic radial chart showing browser market share",
  data: {
    chartData: [
      { browser: "chrome", visitors: 275 },
      { browser: "safari", visitors: 200 },
      { browser: "firefox", visitors: 187 },
      { browser: "edge", visitors: 173 },
      { browser: "other", visitors: 90 },
    ],
    chartConfig: {
      visitors: { label: "Visitors" },
      chrome: { label: "Chrome" },
      safari: { label: "Safari" },
      firefox: { label: "Firefox" },
      edge: { label: "Edge" },
      other: { label: "Other" },
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
            children: [{ text: "Radial Chart" }]
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
          className: "flex-1 pb-0"
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
              { text: "Trending up by 5.2% this month" },
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
              { text: "Showing total visitors for the last 6 months" }
            ]
          }
        ]
      }
    ]
  }
}

// Template for Radial Chart with Labels - Browser Usage
export const radialChartLabelTemplate: RenderLayout = {
  id: "radial-chart-label",
  title: "Radial Chart with Labels - Browser Usage",
  description: "Radial chart with labels showing browser market share",
  data: {
    chartData: [
      { browser: "chrome", visitors: 275 },
      { browser: "safari", visitors: 200 },
      { browser: "firefox", visitors: 187 },
      { browser: "edge", visitors: 173 },
      { browser: "other", visitors: 90 },
    ],
    chartConfig: {
      visitors: { label: "Visitors" },
      chrome: { label: "Chrome" },
      safari: { label: "Safari" },
      firefox: { label: "Firefox" },
      edge: { label: "Edge" },
      other: { label: "Other" },
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
          className: "flex-1 pb-0"
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
              { text: "Trending up by 5.2% this month" },
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
              { text: "Showing total visitors for the last 6 months" }
            ]
          }
        ]
      }
    ]
  }
}

// Template for Radial Chart with Grid - Browser Usage
export const radialChartGridTemplate: RenderLayout = {
  id: "radial-chart-grid",
  title: "Radial Chart with Grid - Browser Usage",
  description: "Radial chart with grid lines showing browser market share",
  data: {
    chartData: [
      { browser: "chrome", visitors: 275 },
      { browser: "safari", visitors: 200 },
      { browser: "firefox", visitors: 187 },
      { browser: "edge", visitors: 173 },
      { browser: "other", visitors: 90 },
    ],
    chartConfig: {
      visitors: { label: "Visitors" },
      chrome: { label: "Chrome" },
      safari: { label: "Safari" },
      firefox: { label: "Firefox" },
      edge: { label: "Edge" },
      other: { label: "Other" },
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
          className: "flex-1 pb-0"
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
              { text: "Trending up by 5.2% this month" },
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
              { text: "Showing total visitors for the last 6 months" }
            ]
          }
        ]
      }
    ]
  }
}

// Template for Radial Chart with Text - Website Traffic
export const radialChartTextTemplate: RenderLayout = {
  id: "radial-chart-text",
  title: "Radial Chart with Text - Website Traffic",
  description: "Radial chart with center text showing total visitors",
  data: {
    chartData: [
      { source: "direct", visitors: 1260 },
    ],
    chartConfig: {
      visitors: { label: "Visitors" },
      direct: { label: "Direct Traffic" },
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
          className: "flex-1 pb-0"
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
              { text: "Trending up by 5.2% this month" },
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
              { text: "Showing total visitors for the last 6 months" }
            ]
          }
        ]
      }
    ]
  }
}

// Template for Radial Chart with Custom Shape - Performance Metrics
export const radialChartShapeTemplate: RenderLayout = {
  id: "radial-chart-shape",
  title: "Radial Chart with Custom Shape - Performance Metrics",
  description: "Radial chart with custom shape showing performance score",
  data: {
    chartData: [
      { metric: "performance", score: 850 },
    ],
    chartConfig: {
      score: { label: "Score" },
      performance: { label: "Performance" },
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
          className: "flex-1 pb-0"
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
              { text: "Trending up by 5.2% this month" },
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
              { text: "Showing total visitors for the last 6 months" }
            ]
          }
        ]
      }
    ]
  }
}

// Template for Stacked Radial Chart - Desktop vs Mobile
export const radialChartStackedTemplate: RenderLayout = {
  id: "radial-chart-stacked",
  title: "Stacked Radial Chart - Desktop vs Mobile",
  description: "Stacked radial chart showing desktop and mobile usage",
  data: {
    chartData: [{ month: "january", desktop: 1260, mobile: 570 }],
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
          className: "flex flex-1 items-center pb-0"
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
              { text: "Trending up by 5.2% this month" },
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
              { text: "Showing total visitors for the last 6 months" }
            ]
          }
        ]
      }
    ]
  }
}

// Template for Interactive Radial Chart - Monthly Browser Usage
export const radialChartInteractiveTemplate: RenderLayout = {
  id: "radial-chart-interactive",
  title: "Interactive Radial Chart - Monthly Web Traffic Analysis",
  description: "Interactive radial chart with month selector showing detailed browser usage analytics and performance metrics",
  data: {
    chartData: {
      january: [
        { category: "chrome", value: 4275 },
        { category: "safari", value: 2890 },
        { category: "firefox", value: 1567 },
        { category: "edge", value: 1230 },
        { category: "opera", value: 680 },
        { category: "other", value: 458 },
      ],
      february: [
        { category: "chrome", value: 4520 },
        { category: "safari", value: 2950 },
        { category: "firefox", value: 1420 },
        { category: "edge", value: 1380 },
        { category: "opera", value: 720 },
        { category: "other", value: 510 },
      ],
      march: [
        { category: "chrome", value: 4890 },
        { category: "safari", value: 3120 },
        { category: "firefox", value: 1595 },
        { category: "edge", value: 1450 },
        { category: "opera", value: 785 },
        { category: "other", value: 460 },
      ],
      april: [
        { category: "chrome", value: 5105 },
        { category: "safari", value: 3280 },
        { category: "firefox", value: 1675 },
        { category: "edge", value: 1520 },
        { category: "opera", value: 840 },
        { category: "other", value: 580 },
      ],
      may: [
        { category: "chrome", value: 5340 },
        { category: "safari", value: 3410 },
        { category: "firefox", value: 1565 },
        { category: "edge", value: 1480 },
        { category: "opera", value: 920 },
        { category: "other", value: 685 },
      ],
      june: [
        { category: "chrome", value: 5680 },
        { category: "safari", value: 3580 },
        { category: "firefox", value: 1455 },
        { category: "edge", value: 1420 },
        { category: "opera", value: 1050 },
        { category: "other", value: 815 },
      ],
      july: [
        { category: "chrome", value: 5920 },
        { category: "safari", value: 3720 },
        { category: "firefox", value: 1390 },
        { category: "edge", value: 1380 },
        { category: "opera", value: 1120 },
        { category: "other", value: 870 },
      ],
      august: [
        { category: "chrome", value: 6150 },
        { category: "safari", value: 3850 },
        { category: "firefox", value: 1320 },
        { category: "edge", value: 1340 },
        { category: "opera", value: 1180 },
        { category: "other", value: 950 },
      ],
      september: [
        { category: "chrome", value: 6380 },
        { category: "safari", value: 3920 },
        { category: "firefox", value: 1285 },
        { category: "edge", value: 1310 },
        { category: "opera", value: 1250 },
        { category: "other", value: 1055 },
      ],
      october: [
        { category: "chrome", value: 6520 },
        { category: "safari", value: 4080 },
        { category: "firefox", value: 1240 },
        { category: "edge", value: 1280 },
        { category: "opera", value: 1320 },
        { category: "other", value: 1160 },
      ],
      november: [
        { category: "chrome", value: 6750 },
        { category: "safari", value: 4180 },
        { category: "firefox", value: 1195 },
        { category: "edge", value: 1250 },
        { category: "opera", value: 1390 },
        { category: "other", value: 1235 },
      ],
      december: [
        { category: "chrome", value: 6980 },
        { category: "safari", value: 4320 },
        { category: "firefox", value: 1150 },
        { category: "edge", value: 1220 },
        { category: "opera", value: 1460 },
        { category: "other", value: 1370 },
      ],
    },
    chartConfig: {
      value: { label: "Monthly Visitors" },
      chrome: { label: "Chrome" },
      safari: { label: "Safari" },
      firefox: { label: "Firefox" },
      edge: { label: "Microsoft Edge" },
      opera: { label: "Opera" },
      other: { label: "Other Browsers" },
      january: { label: "January" },
      february: { label: "February" },
      march: { label: "March" },
      april: { label: "April" },
      may: { label: "May" },
      june: { label: "June" },
      july: { label: "July" },
      august: { label: "August" },
      september: { label: "September" },
      october: { label: "October" },
      november: { label: "November" },
      december: { label: "December" },
    }
  },
  root: {
    type: "ChartRadialInteractive",
    props: {
      data: "$data.chartData",
      config: "$data.chartConfig"
    }
  }
}

// Template for Sales Performance Radial Chart
export const radialChartSalesTemplate: RenderLayout = {
  id: "radial-chart-sales",
  title: "Sales Performance - Quarterly Results",
  description: "Radial chart showing quarterly sales performance against targets",
  data: {
    chartData: [
      { quarter: "Q1", sales: 85 },
      { quarter: "Q2", sales: 92 },
      { quarter: "Q3", sales: 78 },
      { quarter: "Q4", sales: 96 },
    ],
    chartConfig: {
      sales: { label: "Sales Achievement %" },
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
            children: [{ text: "Sales Performance" }]
          },
          {
            type: "CardDescription",
            children: [{ text: "Quarterly achievement against targets" }]
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
              { text: "Q4 exceeded target by 16%" },
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
              { text: "Average quarterly performance: 87.75%" }
            ]
          }
        ]
      }
    ]
  }
}

// Template for Health Metrics Radial Chart
export const radialChartHealthTemplate: RenderLayout = {
  id: "radial-chart-health",
  title: "Health Metrics - Daily Progress",
  description: "Radial chart showing daily health goal achievement",
  data: {
    chartData: [
      { metric: "steps", value: 8500 },
      { metric: "calories", value: 2100 },
      { metric: "water", value: 1800 },
      { metric: "sleep", value: 7.5 },
    ],
    chartConfig: {
      value: { label: "Value" },
      steps: { label: "Steps (10k goal)" },
      calories: { label: "Calories (2500 goal)" },
      water: { label: "Water (2000ml goal)" },
      sleep: { label: "Sleep (8h goal)" },
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
            children: [{ text: "Health Progress" }]
          },
          {
            type: "CardDescription",
            children: [{ text: "Daily goal achievement" }]
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
              { text: "Stay hydrated! 200ml remaining" },
              {
                type: "Icon",
                props: {
                  name: "Sparkles",
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
              { text: "Great progress on all metrics today!" }
            ]
          }
        ]
      }
    ]
  }
}

// Template for Project Progress Radial Chart
export const radialChartProjectTemplate: RenderLayout = {
  id: "radial-chart-project",
  title: "Project Progress - Development Status",
  description: "Radial chart showing project completion percentage",
  data: {
    chartData: [
      { phase: "planning", progress: 100 },
      { phase: "design", progress: 85 },
      { phase: "development", progress: 65 },
      { phase: "testing", progress: 30 },
      { phase: "deployment", progress: 0 },
    ],
    chartConfig: {
      progress: { label: "Progress %" },
      planning: { label: "Planning" },
      design: { label: "Design" },
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
            children: [{ text: "Development phases completion" }]
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
            type: "ChartRadialLabel",
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
              { text: "Currently in development phase" },
              {
                type: "Icon",
                props: {
                  name: "Code",
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
              { text: "56% total project completion" }
            ]
          }
        ]
      }
    ]
  }
}

// All templates exported for use
export const radialChartTemplates = {
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
} 