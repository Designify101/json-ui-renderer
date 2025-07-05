import type { RenderLayout } from "@/types/render-schema"

// Template for Simple Pie Chart - Browser Usage
export const pieChartSimpleTemplate: RenderLayout = {
  id: "pie-chart-simple",
  title: "Simple Pie Chart - Browser Usage",
  description: "Basic pie chart showing browser market share",
  data: {
    chartData: [
      { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
      { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
      { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
      { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
      { browser: "other", visitors: 90, fill: "var(--color-other)" },
    ],
    chartConfig: {
      visitors: { label: "Visitors" },
      chrome: { label: "Chrome", color: "hsl(var(--chart-1))" },
      safari: { label: "Safari", color: "hsl(var(--chart-2))" },
      firefox: { label: "Firefox", color: "hsl(var(--chart-3))" },
      edge: { label: "Edge", color: "hsl(var(--chart-4))" },
      other: { label: "Other", color: "hsl(var(--chart-5))" },
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
      { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
      { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
      { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
      { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
      { browser: "other", visitors: 90, fill: "var(--color-other)" },
    ],
    chartConfig: {
      visitors: { label: "Visitors" },
      chrome: { label: "Chrome", color: "hsl(var(--chart-1))" },
      safari: { label: "Safari", color: "hsl(var(--chart-2))" },
      firefox: { label: "Firefox", color: "hsl(var(--chart-3))" },
      edge: { label: "Edge", color: "hsl(var(--chart-4))" },
      other: { label: "Other", color: "hsl(var(--chart-5))" },
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
      { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
      { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
      { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
      { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
      { browser: "other", visitors: 190, fill: "var(--color-other)" },
    ],
    chartConfig: {
      visitors: { label: "Visitors" },
      chrome: { label: "Chrome", color: "hsl(var(--chart-1))" },
      safari: { label: "Safari", color: "hsl(var(--chart-2))" },
      firefox: { label: "Firefox", color: "hsl(var(--chart-3))" },
      edge: { label: "Edge", color: "hsl(var(--chart-4))" },
      other: { label: "Other", color: "hsl(var(--chart-5))" },
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

// Template for Pie Chart with Labels - Browser Usage
export const pieChartLabelTemplate: RenderLayout = {
  id: "pie-chart-label",
  title: "Pie Chart with Labels - Browser Usage",
  description: "Pie chart with labels showing browser market share",
  data: {
    chartData: [
      { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
      { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
      { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
      { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
      { browser: "other", visitors: 90, fill: "var(--color-other)" },
    ],
    chartConfig: {
      visitors: { label: "Visitors" },
      chrome: { label: "Chrome", color: "hsl(var(--chart-1))" },
      safari: { label: "Safari", color: "hsl(var(--chart-2))" },
      firefox: { label: "Firefox", color: "hsl(var(--chart-3))" },
      edge: { label: "Edge", color: "hsl(var(--chart-4))" },
      other: { label: "Other", color: "hsl(var(--chart-5))" },
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
      { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
      { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
      { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
      { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
      { browser: "other", visitors: 90, fill: "var(--color-other)" },
    ],
    chartConfig: {
      visitors: { label: "Visitors" },
      chrome: { label: "Chrome", color: "hsl(var(--chart-1))" },
      safari: { label: "Safari", color: "hsl(var(--chart-2))" },
      firefox: { label: "Firefox", color: "hsl(var(--chart-3))" },
      edge: { label: "Edge", color: "hsl(var(--chart-4))" },
      other: { label: "Other", color: "hsl(var(--chart-5))" },
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
        { month: "january", desktop: 186, fill: "var(--color-january)" },
        { month: "february", desktop: 305, fill: "var(--color-february)" },
        { month: "march", desktop: 237, fill: "var(--color-march)" },
        { month: "april", desktop: 173, fill: "var(--color-april)" },
        { month: "may", desktop: 209, fill: "var(--color-may)" },
      ],
      mobile: [
        { month: "january", mobile: 80, fill: "var(--color-january)" },
        { month: "february", mobile: 200, fill: "var(--color-february)" },
        { month: "march", mobile: 120, fill: "var(--color-march)" },
        { month: "april", mobile: 190, fill: "var(--color-april)" },
        { month: "may", mobile: 130, fill: "var(--color-may)" },
      ]
    },
    chartConfig: {
      visitors: { label: "Visitors" },
      desktop: { label: "Desktop" },
      mobile: { label: "Mobile" },
      january: { label: "January", color: "hsl(var(--chart-1))" },
      february: { label: "February", color: "hsl(var(--chart-2))" },
      march: { label: "March", color: "hsl(var(--chart-3))" },
      april: { label: "April", color: "hsl(var(--chart-4))" },
      may: { label: "May", color: "hsl(var(--chart-5))" },
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

// Template for Interactive Pie Chart - Monthly Usage
export const pieChartInteractiveTemplate: RenderLayout = {
  id: "pie-chart-interactive",
  title: "Interactive Pie Chart - Monthly Browser Usage",
  description: "Interactive pie chart with month selector showing different browser usage per month",
  data: {
    chartData: {
      january: [
        { category: "chrome", value: 275, fill: "var(--color-chrome)" },
        { category: "safari", value: 200, fill: "var(--color-safari)" },
        { category: "firefox", value: 187, fill: "var(--color-firefox)" },
        { category: "edge", value: 173, fill: "var(--color-edge)" },
        { category: "other", value: 90, fill: "var(--color-other)" },
      ],
      february: [
        { category: "chrome", value: 320, fill: "var(--color-chrome)" },
        { category: "safari", value: 180, fill: "var(--color-safari)" },
        { category: "firefox", value: 210, fill: "var(--color-firefox)" },
        { category: "edge", value: 160, fill: "var(--color-edge)" },
        { category: "other", value: 110, fill: "var(--color-other)" },
      ],
      march: [
        { category: "chrome", value: 290, fill: "var(--color-chrome)" },
        { category: "safari", value: 220, fill: "var(--color-safari)" },
        { category: "firefox", value: 195, fill: "var(--color-firefox)" },
        { category: "edge", value: 185, fill: "var(--color-edge)" },
        { category: "other", value: 85, fill: "var(--color-other)" },
      ],
      april: [
        { category: "chrome", value: 305, fill: "var(--color-chrome)" },
        { category: "safari", value: 190, fill: "var(--color-safari)" },
        { category: "firefox", value: 175, fill: "var(--color-firefox)" },
        { category: "edge", value: 195, fill: "var(--color-edge)" },
        { category: "other", value: 95, fill: "var(--color-other)" },
      ],
      may: [
        { category: "chrome", value: 340, fill: "var(--color-chrome)" },
        { category: "safari", value: 210, fill: "var(--color-safari)" },
        { category: "firefox", value: 165, fill: "var(--color-firefox)" },
        { category: "edge", value: 150, fill: "var(--color-edge)" },
        { category: "other", value: 120, fill: "var(--color-other)" },
      ],
      june: [
        { category: "chrome", value: 360, fill: "var(--color-chrome)" },
        { category: "safari", value: 230, fill: "var(--color-safari)" },
        { category: "firefox", value: 155, fill: "var(--color-firefox)" },
        { category: "edge", value: 140, fill: "var(--color-edge)" },
        { category: "other", value: 135, fill: "var(--color-other)" },
      ],
    },
    chartConfig: {
      visitors: { label: "Visitors" },
      chrome: { label: "Chrome", color: "hsl(var(--chart-1))" },
      safari: { label: "Safari", color: "hsl(var(--chart-2))" },
      firefox: { label: "Firefox", color: "hsl(var(--chart-3))" },
      edge: { label: "Edge", color: "hsl(var(--chart-4))" },
      other: { label: "Other", color: "hsl(var(--chart-5))" },
      january: { label: "January", color: "hsl(var(--chart-1))" },
      february: { label: "February", color: "hsl(var(--chart-2))" },
      march: { label: "March", color: "hsl(var(--chart-3))" },
      april: { label: "April", color: "hsl(var(--chart-4))" },
      may: { label: "May", color: "hsl(var(--chart-5))" },
      june: { label: "June", color: "hsl(var(--chart-1))" },
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