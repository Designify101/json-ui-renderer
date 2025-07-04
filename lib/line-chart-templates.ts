import type { RenderLayout } from "@/types/render-schema"

// Template for Interactive Line Chart - Website Analytics
export const lineChartInteractiveTemplate: RenderLayout = {
  id: "line-chart-interactive",
  title: "Interactive Line Chart - Website Analytics",
  description: "Interactive line chart showing website traffic with desktop/mobile toggle",
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
      { date: "2024-04-11", desktop: 327, mobile: 350 },
      { date: "2024-04-12", desktop: 292, mobile: 210 },
      { date: "2024-04-13", desktop: 342, mobile: 380 },
      { date: "2024-04-14", desktop: 137, mobile: 220 },
      { date: "2024-04-15", desktop: 120, mobile: 170 },
    ],
    chartConfig: {
      views: { label: "Page Views" },
      desktop: { label: "Desktop", color: "#3b82f6" },
      mobile: { label: "Mobile", color: "#f97316" },
    }
  },
  root: {
    type: "ChartLineInteractive",
    props: {
      data: "$data.chartData",
      config: "$data.chartConfig"
    }
  }
}

// Template for Default Line Chart - Monthly Sales
export const lineChartDefaultTemplate: RenderLayout = {
  id: "line-chart-default",
  title: "Basic Line Chart - Monthly Sales",
  description: "Simple line chart showing business revenue growth",
  data: {
    chartData: [
      { month: "January", revenue: 18600 },
      { month: "February", revenue: 23400 },
      { month: "March", revenue: 19800 },
      { month: "April", revenue: 27300 },
      { month: "May", revenue: 31200 },
      { month: "June", revenue: 28900 },
    ],
    chartConfig: {
      revenue: { label: "Revenue ($)", color: "#f97316" },
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
            children: [{ text: "Monthly Revenue Trend" }]
          },
          {
            type: "CardDescription",
            props: {
              className: "text-sm text-muted-foreground mt-1"
            },
            children: [{ text: "Business Revenue - January to June 2024" }]
          }
        ]
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ChartLineDefault",
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
          className: "flex flex-col items-start gap-2 text-sm"
        },
        children: [
          {
            tag: "div",
            props: {
              className: "flex gap-2 leading-none font-medium"
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
              { text: "Strong growth trajectory with consistent month-over-month gains" }
            ]
          }
        ]
      }
    ]
  }
}

// Template for Multiple Line Chart - Performance Metrics
export const lineChartMultipleTemplate: RenderLayout = {
  id: "line-chart-multiple",
  title: "Multiple Line Chart - Performance Metrics", 
  description: "Comparison of different performance metrics over time",
  data: {
    chartData: [
      { month: "January", performance: 186, efficiency: 80 },
      { month: "February", performance: 305, efficiency: 200 },
      { month: "March", performance: 237, efficiency: 120 },
      { month: "April", performance: 273, efficiency: 190 },
      { month: "May", performance: 209, efficiency: 130 },
      { month: "June", performance: 214, efficiency: 140 },
    ],
    chartConfig: {
      performance: { label: "Performance Score", color: "#f97316" },
      efficiency: { label: "Efficiency Rating", color: "#3b82f6" },
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
            children: [{ text: "Performance Analytics Dashboard" }]
          },
          {
            type: "CardDescription",
            props: {
              className: "text-muted-foreground mt-2"
            },
            children: [{ text: "Performance vs Efficiency Metrics Over Time" }]
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
            type: "ChartLineMultiple",
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
          className: "flex flex-col items-start gap-2 text-sm"
        },
        children: [
          {
            tag: "div",
            props: {
              className: "flex gap-2 leading-none font-medium"
            },
            children: [
              { text: "Performance metrics showing steady improvement" },
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
              { text: "Efficiency gains correlating with performance improvements" }
            ]
          }
        ]
      }
    ]
  }
}

// Template for Step Line Chart - Process Stages
export const lineChartStepTemplate: RenderLayout = {
  id: "line-chart-step",
  title: "Step Line Chart - Process Stages",
  description: "Step-wise progression through different process stages",
  data: {
    chartData: [
      { stage: "Planning", completion: 100 },
      { stage: "Design", completion: 85 },
      { stage: "Development", completion: 65 },
      { stage: "Testing", completion: 40 },
      { stage: "Deployment", completion: 20 },
      { stage: "Monitoring", completion: 5 },
    ],
    chartConfig: {
      completion: { label: "Completion %", color: "#f97316" },
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
            children: [{ text: "Project Progress - Step View" }]
          },
          {
            type: "CardDescription",
            children: [{ text: "Process Stage Completion Rates" }]
          }
        ]
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ChartLineStep",
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
          className: "flex flex-col items-start gap-2 text-sm"
        },
        children: [
          {
            tag: "div",
            props: {
              className: "flex gap-2 leading-none font-medium"
            },
            children: [
              { text: "Development phase currently in progress" },
              {
                type: "Icon",
                props: {
                  name: "Activity",
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
              { text: "Project timeline on track with milestone deliverables" }
            ]
          }
        ]
      }
    ]
  }
}

// Template for Line Chart with Dots - User Engagement
export const lineChartDotsTemplate: RenderLayout = {
  id: "line-chart-dots",
  title: "Line Chart with Dots - User Engagement",
  description: "User engagement metrics with data point visualization",
  data: {
    chartData: [
      { month: "January", engagement: 186, retention: 80 },
      { month: "February", engagement: 305, retention: 200 },
      { month: "March", engagement: 237, retention: 120 },
      { month: "April", engagement: 273, retention: 190 },
      { month: "May", engagement: 209, retention: 130 },
      { month: "June", engagement: 314, retention: 140 },
    ],
    chartConfig: {
      engagement: { label: "Engagement Score", color: "#f97316" },
      retention: { label: "Retention Rate", color: "#3b82f6" },
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
            children: [{ text: "User Engagement Analytics" }]
          },
          {
            type: "CardDescription",
            children: [{ text: "Monthly engagement and retention metrics" }]
          }
        ]
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ChartLineDots",
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
          className: "flex flex-col items-start gap-2 text-sm"
        },
        children: [
          {
            tag: "div",
            props: {
              className: "flex gap-2 leading-none font-medium"
            },
            children: [
              { text: "User engagement up 23% this month" },
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
              { text: "Strong correlation between engagement and retention rates" }
            ]
          }
        ]
      }
    ]
  }
}

// Template for Financial Line Chart - Stock Performance
export const lineChartFinancialTemplate: RenderLayout = {
  id: "line-chart-financial",
  title: "Financial Line Chart - Stock Performance",
  description: "Stock price movements and trading volume analysis",
  data: {
    chartData: [
      { date: "2024-01", price: 145.30, volume: 2800000 },
      { date: "2024-02", price: 152.80, volume: 3200000 },
      { date: "2024-03", price: 148.60, volume: 2900000 },
      { date: "2024-04", price: 161.20, volume: 3800000 },
      { date: "2024-05", price: 158.90, volume: 3100000 },
      { date: "2024-06", price: 167.40, volume: 4200000 },
    ],
    chartConfig: {
      price: { label: "Stock Price ($)", color: "#10b981" },
      volume: { label: "Trading Volume", color: "#8b5cf6" },
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
            children: [{ text: "Financial Performance Analytics" }]
          },
          {
            type: "CardDescription",
            children: [{ text: "Stock price and trading volume trends" }]
          }
        ]
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ChartLineMultiple",
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
          className: "flex flex-col items-start gap-2 text-sm"
        },
        children: [
          {
            tag: "div",
            props: {
              className: "flex gap-2 leading-none font-medium"
            },
            children: [
              { text: "Stock price up 15.2% year-to-date" },
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
              { text: "Higher trading volume indicating increased investor confidence" }
            ]
          }
        ]
      }
    ]
  }
}

// Template for Health Metrics Line Chart
export const lineChartHealthTemplate: RenderLayout = {
  id: "line-chart-health",
  title: "Health Metrics Line Chart - Vital Signs",
  description: "Patient vital signs monitoring over time",
  data: {
    chartData: [
      { time: "6:00", heartRate: 72, bloodPressure: 120 },
      { time: "9:00", heartRate: 78, bloodPressure: 125 },
      { time: "12:00", heartRate: 85, bloodPressure: 130 },
      { time: "15:00", heartRate: 82, bloodPressure: 128 },
      { time: "18:00", heartRate: 75, bloodPressure: 122 },
      { time: "21:00", heartRate: 70, bloodPressure: 118 },
    ],
    chartConfig: {
      heartRate: { label: "Heart Rate (bpm)", color: "#ef4444" },
      bloodPressure: { label: "Blood Pressure (mmHg)", color: "#3b82f6" },
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
            children: [{ text: "Vital Signs Monitoring" }]
          },
          {
            type: "CardDescription",
            children: [{ text: "24-hour patient vital signs tracking" }]
          }
        ]
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ChartLineMultiple",
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
          className: "flex flex-col items-start gap-2 text-sm"
        },
        children: [
          {
            tag: "div",
            props: {
              className: "flex gap-2 leading-none font-medium"
            },
            children: [
              { text: "All vital signs within normal ranges" },
              {
                type: "Icon",
                props: {
                  name: "Heart",
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
              { text: "Stable patterns indicating good cardiovascular health" }
            ]
          }
        ]
      }
    ]
  }
}

// Template for E-learning Progress Line Chart
export const lineChartEducationTemplate: RenderLayout = {
  id: "line-chart-education",
  title: "E-learning Progress - Student Performance",
  description: "Student learning progress and completion rates over time",
  data: {
    chartData: [
      { week: "Week 1", progress: 15, assessmentScore: 78 },
      { week: "Week 2", progress: 32, assessmentScore: 82 },
      { week: "Week 3", progress: 48, assessmentScore: 85 },
      { week: "Week 4", progress: 65, assessmentScore: 88 },
      { week: "Week 5", progress: 78, assessmentScore: 92 },
      { week: "Week 6", progress: 92, assessmentScore: 95 },
    ],
    chartConfig: {
      progress: { label: "Course Progress (%)", color: "#06b6d4" },
      assessmentScore: { label: "Assessment Score (%)", color: "#10b981" },
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
            children: [{ text: "Student Learning Analytics" }]
          },
          {
            type: "CardDescription",
            children: [{ text: "Progress tracking and assessment performance" }]
          }
        ]
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ChartLineMultiple",
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
          className: "flex flex-col items-start gap-2 text-sm"
        },
        children: [
          {
            tag: "div",
            props: {
              className: "flex gap-2 leading-none font-medium"
            },
            children: [
              { text: "Excellent progress with improving scores" },
              {
                type: "Icon",
                props: {
                  name: "BookOpen",
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
              { text: "Student demonstrating consistent learning and skill development" }
            ]
          }
        ]
      }
    ]
  }
}

// Export all templates
export const lineChartTemplates = [
  lineChartInteractiveTemplate,
  lineChartDefaultTemplate,
  lineChartMultipleTemplate,
  lineChartStepTemplate,
  lineChartDotsTemplate,
  lineChartFinancialTemplate,
  lineChartHealthTemplate,
  lineChartEducationTemplate,
] 