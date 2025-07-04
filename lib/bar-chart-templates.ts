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
      desktop: { label: "Desktop", color: "#3b82f6" },
      mobile: { label: "Mobile", color: "#f97316" },
    }
  },
  root: {
    type: "Card",
    props: {
      className: "py-0"
    },
    children: [
      {
        type: "CardHeader", 
        props: {
          className: "flex flex-col items-stretch border-b !p-0 sm:flex-row"
        },
        children: [
          {
            tag: "div",
            props: {
              className: "flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:!py-0"
            },
            children: [
              {
                type: "CardTitle",
                children: [{ text: "Bar Chart - Interactive" }]
              },
              {
                type: "CardDescription", 
                children: [{ text: "Showing total visitors for the last 3 months" }]
              }
            ]
          },
          {
            type: "ChartBarInteractiveWrapper",
            props: {
              data: "$data.chartData",
              config: "$data.chartConfig",
              part: "controls"
            }
          }
        ]
      },
      {
        type: "CardContent",
        props: {
          className: "px-2 sm:p-6"
        },
        children: [
          {
            type: "ChartBarInteractiveWrapper",
            props: {
              data: "$data.chartData",
              config: "$data.chartConfig",
              className: "aspect-auto h-[250px] w-full",
              part: "chart"
            }
          }
        ]
      },
      {
        type: "CardFooter",
        props: {
          className: "flex flex-col items-start gap-3 text-sm text-left pt-6"
        },
        children: [
          {
            tag: "div",
            props: {
              className: "flex items-center gap-2 leading-none font-medium text-left"
            },
            children: [
              { text: "Mobile traffic showing steady growth" },
              {
                type: "Icon",
                props: {
                  name: "TrendingUp",
                  className: "h-4 w-4 text-green-500"
                }
              }
            ]
          },
          {
            tag: "div",
            props: {
              className: "text-muted-foreground leading-none text-left text-xs"
            },
            children: [
              { text: "Desktop engagement remains strong with consistent daily visits" }
            ]
          }
        ]
      }
    ]
  }
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
      sales: { label: "Sales ($)", color: "#f97316" },
    }
  },
  root: {
    type: "Card",
    children: [
      {
        type: "CardHeader",
        children: [
          {
            type: "CardTitle",
            props: {
              className: "text-xl font-semibold"
            },
            children: [{ text: "Monthly Sales Report" }]
          },
          {
            type: "CardDescription",
            props: {
              className: "text-sm text-muted-foreground mt-1"
            },
            children: [{ text: "Coffee Shop Revenue - January to June 2024" }]
          }
        ]
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ChartBarDefault",
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
          className: "flex flex-col items-start gap-2 text-sm text-left bg-muted/20 rounded-lg p-4 mt-4"
        },
        children: [
          {
            tag: "div",
            props: {
              className: "flex items-center gap-2 leading-none font-semibold text-left text-green-700"
            },
            children: [
              { text: "Growing 23% since last quarter" },
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
              className: "text-muted-foreground leading-none text-left mt-1"
            },
            children: [
              { text: "Summer season showing strong performance" }
            ]
          }
        ]
      }
    ]
  }
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
      usage: { label: "Usage %", color: "#06b6d4" },
    }
  },
  root: {
    type: "Card",
    props: {
      className: "shadow-lg"
    },
    children: [
      {
        type: "CardHeader",
        props: {
          className: "pb-4"
        },
        children: [
          {
            tag: "div",
            props: {
              className: "flex items-center justify-between"
            },
            children: [
              {
                tag: "div",
                children: [
                  {
                    type: "CardTitle",
                    props: {
                      className: "text-lg font-bold"
                    },
                    children: [{ text: "Programming Language Usage" }]
                  },
                  {
                    type: "CardDescription",
                    props: {
                      className: "text-sm text-muted-foreground"
                    },
                    children: [{ text: "Developer Survey Results - Q4 2024" }]
                  }
                ]
              },
              {
                type: "Icon",
                props: {
                  name: "Code",
                  className: "h-6 w-6 text-blue-500"
                }
              }
            ]
          }
        ]
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ChartBarHorizontal",
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
          className: "border-t pt-4 mt-4"
        },
        children: [
          {
            tag: "div",
            props: {
              className: "w-full"
            },
            children: [
              {
                tag: "h4",
                props: {
                  className: "font-medium text-sm mb-2 flex items-center gap-2"
                },
                children: [
                  { text: "TypeScript leading adoption" },
                  {
                    type: "Icon",
                    props: {
                      name: "TrendingUp",
                      className: "h-4 w-4 text-emerald-500"
                    }
                  }
                ]
              },
              {
                tag: "p",
                props: {
                  className: "text-xs text-muted-foreground leading-relaxed"
                },
                children: [
                  { text: "Based on internal developer survey of 250 engineers" }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
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
      online: { label: "Online Sales", color: "#f97316" },
      inStore: { label: "In-Store Sales", color: "#3b82f6" },
    }
  },
  root: {
    type: "Card",
    children: [
      {
        type: "CardHeader",
        props: {
          className: "text-center pb-6"
        },
        children: [
          {
            type: "CardTitle",
            props: {
              className: "text-2xl font-bold tracking-tight"
            },
            children: [{ text: "Sales Channel Performance" }]
          },
          {
            type: "CardDescription",
            props: {
              className: "text-muted-foreground mt-2"
            },
            children: [{ text: "Online vs In-Store Revenue by Season" }]
          }
        ]
      },
      {
        type: "CardContent",
        props: {
          className: "pt-0"
        },
        children: [
          {
            type: "ChartBarMultiple",
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
          className: "flex flex-col gap-4 text-sm bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg p-6 mt-6"
        },
        children: [
          {
            tag: "div",
            props: {
              className: "flex items-start gap-3"
            },
            children: [
              {
                type: "Icon",
                props: {
                  name: "TrendingUp",
                  className: "h-5 w-5 text-orange-500 mt-0.5"
                }
              },
              {
                tag: "div",
                children: [
                  {
                    tag: "h4",
                    props: {
                      className: "font-semibold text-orange-700 mb-1"
                    },
                    children: [{ text: "Online sales up 45% during holiday season" }]
                  },
                  {
                    tag: "p",
                    props: {
                      className: "text-muted-foreground text-xs leading-relaxed"
                    },
                    children: [{ text: "Digital transformation driving growth across all seasons" }]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
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
      features: { label: "Features", color: "#f97316" },
      bugs: { label: "Bug Fixes", color: "#3b82f6" },
      documentation: { label: "Documentation", color: "#06b6d4" },
    }
  },
  root: {
    type: "Card",
    children: [
      {
        type: "CardHeader",
        children: [
          {
            type: "CardTitle",
            children: [{ text: "Team Productivity Dashboard" }]
          },
          {
            type: "CardDescription",
            children: [{ text: "Sprint Deliverables by Team - Q4 2024" }]
          }
        ]
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ChartBarStacked",
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
          className: "flex flex-col items-start gap-2 text-sm text-left"
        },
        children: [
          {
            tag: "div",
            props: {
              className: "flex gap-2 leading-none font-medium text-left"
            },
            children: [
              { text: "Backend team leading feature delivery" },
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
              className: "text-muted-foreground leading-none text-left"
            },
            children: [
              { text: "QA team focusing on bug resolution and quality improvements" }
            ]
          }
        ]
      }
    ]
  }
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
      profit: { label: "Profit/Loss ($)", color: "#f97316" },
    }
  },
  root: {
    type: "Card",
    children: [
      {
        type: "CardHeader",
        children: [
          {
            type: "CardTitle",
            children: [{ text: "Quarterly Financial Performance" }]
          },
          {
            type: "CardDescription",
            children: [{ text: "Profit & Loss Analysis - 2023-2024" }]
          }
        ]
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ChartBarNegative",
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
          className: "flex flex-col items-start gap-2 text-sm text-left"
        },
        children: [
          {
            tag: "div",
            props: {
              className: "flex gap-2 leading-none font-medium text-left"
            },
            children: [
              { text: "Strong recovery in 2024" },
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
              className: "text-muted-foreground leading-none text-left"
            },
            children: [
              { text: "Market restructuring efforts paying off with consistent growth" }
            ]
          }
        ]
      }
    ]
  }
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
      revenue: { label: "Revenue ($)", color: "#8b5cf6" },
      orders: { label: "Orders", color: "#ec4899" },
    }
  },
  root: {
    type: "Card",
    children: [
      {
        type: "CardHeader",
        children: [
          {
            type: "CardTitle",
            children: [{ text: "E-commerce Analytics - Product Categories" }]
          },
          {
            type: "CardDescription",
            children: [{ text: "Sales performance across different product categories" }]
          }
        ]
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ChartBarMultiple",
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
          className: "flex flex-col items-start gap-2 text-sm text-left"
        },
        children: [
          {
            tag: "div",
            props: {
              className: "flex gap-2 leading-none font-medium text-left"
            },
            children: [
              { text: "Electronics category leading with highest revenue" },
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
              className: "text-muted-foreground leading-none text-left"
            },
            children: [
              { text: "Clothing shows highest order volume with strong customer demand" }
            ]
          }
        ]
      }
    ]
  }
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
      cpu: { label: "CPU Usage %", color: "#f97316" },
      memory: { label: "Memory Usage %", color: "#3b82f6" },
      storage: { label: "Storage Usage %", color: "#06b6d4" },
    }
  },
  root: {
    type: "Card",
    children: [
      {
        type: "CardHeader",
        children: [
          {
            type: "CardTitle",
            children: [{ text: "Server Performance - Resource Usage" }]
          },
          {
            type: "CardDescription",
            children: [{ text: "Server resource utilization across different environments" }]
          }
        ]
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ChartBarStacked",
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
          className: "flex flex-col items-start gap-2 text-sm text-left"
        },
        children: [
          {
            tag: "div",
            props: {
              className: "flex gap-2 leading-none font-medium text-left"
            },
            children: [
              { text: "Production environment showing high resource utilization" },
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
              className: "text-muted-foreground leading-none text-left"
            },
            children: [
              { text: "Backup server experiencing storage capacity issues requiring attention" }
            ]
          }
        ]
      }
    ]
  }
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
      engagement: { label: "Engagement Score", color: "#10b981" },
    }
  },
  root: {
    type: "Card",
    children: [
      {
        type: "CardHeader",
        children: [
          {
            type: "CardTitle",
            children: [{ text: "Social Media Engagement Metrics" }]
          },
          {
            type: "CardDescription",
            children: [{ text: "Platform performance comparison for social media campaigns" }]
          }
        ]
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ChartBarHorizontal",
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
          className: "flex flex-col items-start gap-2 text-sm text-left"
        },
        children: [
          {
            tag: "div",
            props: {
              className: "flex gap-2 leading-none font-medium text-left"
            },
            children: [
              { text: "YouTube and TikTok driving highest engagement rates" },
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
              className: "text-muted-foreground leading-none text-left"
            },
            children: [
              { text: "Video content showing 3x better performance than static posts" }
            ]
          }
        ]
      }
    ]
  }
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