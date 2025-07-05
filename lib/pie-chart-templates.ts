import type { RenderLayout } from "@/types/render-schema"

// Template for Simple Pie Chart - Browser Usage
export const pieChartSimpleTemplate: RenderLayout = {
  id: "pie-chart-simple",
  title: "Simple Pie Chart - Browser Usage",
  description: "Basic pie chart showing browser market share",
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
            children: [{ text: "Pie Chart" }]
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
            type: "ChartPieSimple",
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

// Template for Donut Chart - Browser Usage
export const pieChartDonutTemplate: RenderLayout = {
  id: "pie-chart-donut",
  title: "Donut Chart - Browser Usage",
  description: "Donut chart showing browser market share",
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
            children: [{ text: "Pie Chart - Donut" }]
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
            type: "ChartPieDonut",
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

// Template for Donut Chart with Text - Browser Usage
export const pieChartDonutTextTemplate: RenderLayout = {
  id: "pie-chart-donut-text",
  title: "Donut Chart with Text - Browser Usage",
  description: "Donut chart with center text showing total visitors",
  data: {
    chartData: [
      { browser: "chrome", visitors: 275 },
      { browser: "safari", visitors: 200 },
      { browser: "firefox", visitors: 287 },
      { browser: "edge", visitors: 173 },
      { browser: "other", visitors: 190 },
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
            children: [{ text: "Pie Chart - Donut with Text" }]
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
            type: "ChartPieDonutText",
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

// Template for Pie Chart with Label - Browser Usage
export const pieChartLabelTemplate: RenderLayout = {
  id: "pie-chart-label",
  title: "Pie Chart with Label - Browser Usage",
  description: "Pie chart with labels showing browser market share",
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
            children: [{ text: "Pie Chart - Label" }]
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
            type: "ChartPieLabel",
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

// Template for Pie Chart with Legend - Browser Usage
export const pieChartLegendTemplate: RenderLayout = {
  id: "pie-chart-legend",
  title: "Pie Chart with Legend - Browser Usage",
  description: "Pie chart with legend showing browser market share",
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
            children: [{ text: "Pie Chart - Legend" }]
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
            type: "ChartPieLegend",
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

// Template for Stacked Pie Chart - Desktop vs Mobile
export const pieChartStackedTemplate: RenderLayout = {
  id: "pie-chart-stacked",
  title: "Stacked Pie Chart - Desktop vs Mobile",
  description: "Stacked pie chart showing desktop and mobile usage by month",
  data: {
    chartData: {
      desktop: [
        { month: "january", desktop: 186 },
        { month: "february", desktop: 305 },
        { month: "march", desktop: 237 },
        { month: "april", desktop: 173 },
        { month: "may", desktop: 209 },
      ],
      mobile: [
        { month: "january", mobile: 80 },
        { month: "february", mobile: 200 },
        { month: "march", mobile: 120 },
        { month: "april", mobile: 190 },
        { month: "may", mobile: 130 },
      ]
    },
    chartConfig: {
      visitors: { label: "Visitors" },
      desktop: { label: "Desktop" },
      mobile: { label: "Mobile" },
      january: { label: "January" },
      february: { label: "February" },
      march: { label: "March" },
      april: { label: "April" },
      may: { label: "May" },
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
            children: [{ text: "Pie Chart - Stacked" }]
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
            type: "ChartPieStacked",
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

// Template for Interactive Pie Chart - Monthly Browser Usage
export const pieChartInteractiveTemplate: RenderLayout = {
  id: "pie-chart-interactive",
  title: "Interactive Pie Chart - Monthly Browser Usage",
  description: "Interactive pie chart with month selector showing different browser usage per month",
  data: {
    chartData: {
      january: [
        { category: "chrome", value: 275 },
        { category: "safari", value: 200 },
        { category: "firefox", value: 187 },
        { category: "edge", value: 173 },
        { category: "other", value: 90 },
      ],
      february: [
        { category: "chrome", value: 320 },
        { category: "safari", value: 180 },
        { category: "firefox", value: 210 },
        { category: "edge", value: 160 },
        { category: "other", value: 110 },
      ],
      march: [
        { category: "chrome", value: 290 },
        { category: "safari", value: 220 },
        { category: "firefox", value: 195 },
        { category: "edge", value: 185 },
        { category: "other", value: 85 },
      ],
      april: [
        { category: "chrome", value: 305 },
        { category: "safari", value: 190 },
        { category: "firefox", value: 175 },
        { category: "edge", value: 195 },
        { category: "other", value: 95 },
      ],
      may: [
        { category: "chrome", value: 340 },
        { category: "safari", value: 210 },
        { category: "firefox", value: 165 },
        { category: "edge", value: 150 },
        { category: "other", value: 120 },
      ],
      june: [
        { category: "chrome", value: 360 },
        { category: "safari", value: 230 },
        { category: "firefox", value: 155 },
        { category: "edge", value: 140 },
        { category: "other", value: 135 },
      ],
    },
    chartConfig: {
      visitors: { label: "Visitors" },
      chrome: { label: "Chrome" },
      safari: { label: "Safari" },
      firefox: { label: "Firefox" },
      edge: { label: "Edge" },
      other: { label: "Other" },
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
        type: "CardContent",
        props: {
          className: "flex-1 pb-0"
        },
        children: [
          {
            type: "ChartPieInteractive",
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
              { text: "Chrome continues to lead market share" },
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
              { text: "Select different months to see usage trends" }
            ]
          }
        ]
      }
    ]
  }
} 