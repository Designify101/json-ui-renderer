import type { RenderLayout } from "@/types/render-schema"

// Template for Default Radar Chart - Performance Metrics
export const radarChartDefaultTemplate: RenderLayout = {
  id: "radar-chart-default",
  title: "Basic Radar Chart - Performance Metrics",
  description: "Simple radar chart showing team performance across different metrics",
  data: {
    chartData: [
      { metric: "Performance", score: 186 },
      { metric: "Security", score: 305 },
      { metric: "Accessibility", score: 237 },
      { metric: "SEO", score: 273 },
      { metric: "Best Practices", score: 209 },
      { metric: "PWA", score: 214 },
    ],
    chartConfig: {
      score: { label: "Score", color: "var(--chart-1)" },
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
            children: [{ text: "Website Performance Metrics" }]
          },
          {
            type: "CardDescription",
            props: {
              className: "text-sm text-muted-foreground mt-1"
            },
            children: [{ text: "Overall performance assessment across key areas" }]
          }
        ]
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ChartRadarDefault",
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

// Template for Radar Chart with Dots - Skills Assessment
export const radarChartDotsTemplate: RenderLayout = {
  id: "radar-chart-dots",
  title: "Radar Chart with Dots - Skills Assessment",
  description: "Skills evaluation radar chart with highlighted data points",
  data: {
    chartData: [
      { skill: "JavaScript", level: 186 },
      { skill: "React", level: 305 },
      { skill: "Node.js", level: 237 },
      { skill: "Python", level: 273 },
      { skill: "SQL", level: 209 },
      { skill: "AWS", level: 214 },
    ],
    chartConfig: {
      level: { label: "Skill Level", color: "var(--chart-2)" },
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
            children: [{ text: "Developer Skills Assessment" }]
          },
          {
            type: "CardDescription",
            children: [{ text: "Technical skills evaluation with data point markers" }]
          }
        ]
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ChartRadarDots",
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
              { text: "React skills showing highest proficiency" },
              {
                type: "Icon",
                props: {
                  name: "trending-up",
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
              { text: "Overall skill development trending upward" }
            ]
          }
        ]
      }
    ]
  }
}

// Template for Multiple Radar Chart - Team Comparison
export const radarChartMultipleTemplate: RenderLayout = {
  id: "radar-chart-multiple",
  title: "Multiple Radar Chart - Team Comparison",
  description: "Comparison of multiple teams across different performance metrics",
  data: {
    chartData: [
      { metric: "Productivity", teamA: 186, teamB: 80 },
      { metric: "Quality", teamA: 305, teamB: 200 },
      { metric: "Innovation", teamA: 237, teamB: 120 },
      { metric: "Collaboration", teamA: 173, teamB: 190 },
      { metric: "Communication", teamA: 209, teamB: 130 },
      { metric: "Leadership", teamA: 214, teamB: 140 },
    ],
    chartConfig: {
      teamA: { label: "Team Alpha", color: "var(--chart-1)" },
      teamB: { label: "Team Beta", color: "var(--chart-2)" },
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
            children: [{ text: "Team Performance Comparison" }]
          },
          {
            type: "CardDescription",
            props: {
              className: "text-muted-foreground mt-2"
            },
            children: [{ text: "Comparative analysis of team metrics and capabilities" }]
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
            type: "ChartRadarMultiple",
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
              { text: "Team Alpha leading in most metrics" },
              {
                type: "Icon",
                props: {
                  name: "trending-up",
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
              { text: "Team Beta showing strength in collaboration and communication" }
            ]
          }
        ]
      }
    ]
  }
}

// Template for Radar Chart with Legend - Product Features
export const radarChartLegendTemplate: RenderLayout = {
  id: "radar-chart-legend",
  title: "Radar Chart with Legend - Product Features",
  description: "Product feature analysis with multiple data series and legend",
  data: {
    chartData: [
      { feature: "Performance", productA: 186, productB: 80 },
      { feature: "Usability", productA: 305, productB: 200 },
      { feature: "Security", productA: 237, productB: 120 },
      { feature: "Scalability", productA: 173, productB: 190 },
      { feature: "Reliability", productA: 209, productB: 130 },
      { feature: "Cost", productA: 214, productB: 140 },
    ],
    chartConfig: {
      productA: { label: "Product Alpha", color: "var(--chart-3)" },
      productB: { label: "Product Beta", color: "var(--chart-4)" },
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
            children: [{ text: "Product Feature Comparison" }]
          },
          {
            type: "CardDescription",
            children: [{ text: "Comprehensive analysis with interactive legend" }]
          }
        ]
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ChartRadarLegend",
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
              { text: "Product Alpha excels in usability and performance" },
              {
                type: "Icon",
                props: {
                  name: "trending-up",
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
              { text: "Product Beta competitive in scalability and cost-effectiveness" }
            ]
          }
        ]
      }
    ]
  }
}

// Template for Lines Only Radar Chart - Business Metrics
export const radarChartLinesOnlyTemplate: RenderLayout = {
  id: "radar-chart-lines-only",
  title: "Radar Chart Lines Only - Business Metrics",
  description: "Clean radar chart with lines only showing business performance",
  data: {
    chartData: [
      { metric: "Revenue", current: 186, target: 160 },
      { metric: "Customer Satisfaction", current: 185, target: 170 },
      { metric: "Market Share", current: 207, target: 180 },
      { metric: "Operational Efficiency", current: 173, target: 160 },
      { metric: "Employee Engagement", current: 160, target: 190 },
      { metric: "Innovation Index", current: 174, target: 204 },
    ],
    chartConfig: {
      current: { label: "Current Performance", color: "hsl(var(--chart-1))" },
      target: { label: "Target Goals", color: "hsl(var(--chart-2))" },
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
            children: [{ text: "Business Performance vs Targets" }]
          },
          {
            type: "CardDescription",
            children: [{ text: "Current performance metrics compared to target goals" }]
          }
        ]
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ChartRadarLinesOnly",
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
              { text: "Exceeding targets in market share and efficiency" },
              {
                type: "Icon",
                props: {
                  name: "trending-up",
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
              { text: "Focus needed on employee engagement and innovation" }
            ]
          }
        ]
      }
    ]
  }
}

// Template for Interactive Radar Chart - Monthly Assessment
export const radarChartInteractiveTemplate: RenderLayout = {
  id: "radar-chart-interactive",
  title: "Interactive Radar Chart - Monthly Assessment",
  description: "Interactive radar chart with month selector for tracking progress over time",
  data: {
    chartData: {
      january: [
        { metric: "Performance", score: 186 },
        { metric: "Security", score: 305 },
        { metric: "Accessibility", score: 237 },
        { metric: "SEO", score: 273 },
        { metric: "Best Practices", score: 209 },
        { metric: "PWA", score: 214 },
      ],
      february: [
        { metric: "Performance", score: 205 },
        { metric: "Security", score: 280 },
        { metric: "Accessibility", score: 245 },
        { metric: "SEO", score: 290 },
        { metric: "Best Practices", score: 195 },
        { metric: "PWA", score: 230 },
      ],
      march: [
        { metric: "Performance", score: 190 },
        { metric: "Security", score: 320 },
        { metric: "Accessibility", score: 260 },
        { metric: "SEO", score: 285 },
        { metric: "Best Practices", score: 220 },
        { metric: "PWA", score: 195 },
      ],
      april: [
        { metric: "Performance", score: 220 },
        { metric: "Security", score: 295 },
        { metric: "Accessibility", score: 275 },
        { metric: "SEO", score: 310 },
        { metric: "Best Practices", score: 240 },
        { metric: "PWA", score: 250 },
      ],
      may: [
        { metric: "Performance", score: 235 },
        { metric: "Security", score: 315 },
        { metric: "Accessibility", score: 290 },
        { metric: "SEO", score: 295 },
        { metric: "Best Practices", score: 255 },
        { metric: "PWA", score: 270 },
      ],
      june: [
        { metric: "Performance", score: 250 },
        { metric: "Security", score: 330 },
        { metric: "Accessibility", score: 305 },
        { metric: "SEO", score: 325 },
        { metric: "Best Practices", score: 275 },
        { metric: "PWA", score: 285 },
      ],
    },
    chartConfig: {
      score: { label: "Score", color: "var(--chart-1)" },
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
          className: "pt-6"
        },
        children: [
          {
            type: "ChartRadarInteractive",
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
              { text: "Consistent improvement across all metrics" },
              {
                type: "Icon",
                props: {
                  name: "trending-up",
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
              { text: "Security and performance showing strongest growth trends" }
            ]
          }
        ]
      }
    ]
  }
}

// Template for Health & Fitness Radar Chart
export const radarChartHealthTemplate: RenderLayout = {
  id: "radar-chart-health",
  title: "Health & Fitness Radar Chart - Wellness Assessment",
  description: "Comprehensive health and fitness metrics tracking",
  data: {
    chartData: [
      { category: "Cardiovascular", score: 186 },
      { category: "Strength", score: 305 },
      { category: "Flexibility", score: 237 },
      { category: "Endurance", score: 273 },
      { category: "Balance", score: 209 },
      { category: "Mental Health", score: 314 },
    ],
    chartConfig: {
      score: { label: "Fitness Score", color: "var(--chart-1)" },
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
            children: [{ text: "Wellness Assessment Dashboard" }]
          },
          {
            type: "CardDescription",
            children: [{ text: "Comprehensive health and fitness metrics analysis" }]
          }
        ]
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ChartRadarDefault",
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
              { text: "Mental health and strength showing excellent scores" },
              {
                type: "Icon",
                props: {
                  name: "heart-handshake",
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
              { text: "Consider focusing on balance and flexibility training" }
            ]
          }
        ]
      }
    ]
  }
}

// Template for E-learning Progress Radar Chart
export const radarChartEducationTemplate: RenderLayout = {
  id: "radar-chart-education",
  title: "E-learning Progress - Student Assessment",
  description: "Student learning progress across different subject areas",
  data: {
    chartData: [
      { subject: "Mathematics", progress: 186 },
      { subject: "Science", progress: 205 },
      { subject: "Literature", progress: 237 },
      { subject: "History", progress: 173 },
      { subject: "Art", progress: 290 },
      { subject: "Technology", progress: 314 },
    ],
    chartConfig: {
      progress: { label: "Learning Progress (%)", color: "var(--chart-2)" },
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
            children: [{ text: "Progress tracking across academic subjects" }]
          }
        ]
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ChartRadarDots",
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
              { text: "Strong performance in Technology and Art" },
              {
                type: "Icon",
                props: {
                  name: "trending-up",
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
              { text: "Additional support recommended for History and Mathematics" }
            ]
          }
        ]
      }
    ]
  }
}

// Export all templates
export const radarChartTemplates = [
  radarChartInteractiveTemplate,
  radarChartDefaultTemplate,
  radarChartDotsTemplate,
  radarChartMultipleTemplate,
  radarChartLegendTemplate,
  radarChartLinesOnlyTemplate,
  radarChartHealthTemplate,
  radarChartEducationTemplate,
] 