import type { RenderLayout } from "@/types/render-schema"

// Example 1: Interactive Area Chart - Now uses the custom component
export const areaChartInteractiveTemplate: RenderLayout = {
  id: "area-chart-interactive",
  title: "Area Chart - Interactive",
  description: "Interactive area chart with time range selector",
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
      { date: "2024-04-16", desktop: 138, mobile: 190 },
      { date: "2024-04-17", desktop: 446, mobile: 360 },
      { date: "2024-04-18", desktop: 364, mobile: 410 },
      { date: "2024-04-19", desktop: 243, mobile: 180 },
      { date: "2024-04-20", desktop: 89, mobile: 150 },
      { date: "2024-04-21", desktop: 137, mobile: 200 },
      { date: "2024-04-22", desktop: 224, mobile: 170 },
      { date: "2024-04-23", desktop: 138, mobile: 230 },
      { date: "2024-04-24", desktop: 387, mobile: 290 },
      { date: "2024-04-25", desktop: 215, mobile: 250 },
      { date: "2024-04-26", desktop: 75, mobile: 130 },
      { date: "2024-04-27", desktop: 383, mobile: 420 },
      { date: "2024-04-28", desktop: 122, mobile: 180 },
      { date: "2024-04-29", desktop: 315, mobile: 240 },
      { date: "2024-04-30", desktop: 454, mobile: 380 },
      { date: "2024-05-01", desktop: 165, mobile: 220 },
      { date: "2024-05-02", desktop: 293, mobile: 310 },
      { date: "2024-05-03", desktop: 247, mobile: 190 },
      { date: "2024-05-04", desktop: 385, mobile: 420 },
      { date: "2024-05-05", desktop: 481, mobile: 390 },
      { date: "2024-05-06", desktop: 498, mobile: 520 },
      { date: "2024-05-07", desktop: 388, mobile: 300 },
      { date: "2024-05-08", desktop: 149, mobile: 210 },
      { date: "2024-05-09", desktop: 227, mobile: 180 },
      { date: "2024-05-10", desktop: 293, mobile: 330 },
      { date: "2024-05-11", desktop: 335, mobile: 270 },
      { date: "2024-05-12", desktop: 197, mobile: 240 },
      { date: "2024-05-13", desktop: 197, mobile: 160 },
      { date: "2024-05-14", desktop: 448, mobile: 490 },
      { date: "2024-05-15", desktop: 473, mobile: 380 },
      { date: "2024-05-16", desktop: 338, mobile: 400 },
      { date: "2024-05-17", desktop: 499, mobile: 420 },
      { date: "2024-05-18", desktop: 315, mobile: 350 },
      { date: "2024-05-19", desktop: 235, mobile: 180 },
      { date: "2024-05-20", desktop: 177, mobile: 230 },
      { date: "2024-05-21", desktop: 82, mobile: 140 },
      { date: "2024-05-22", desktop: 81, mobile: 120 },
      { date: "2024-05-23", desktop: 252, mobile: 290 },
      { date: "2024-05-24", desktop: 294, mobile: 220 },
      { date: "2024-05-25", desktop: 201, mobile: 250 },
      { date: "2024-05-26", desktop: 213, mobile: 170 },
      { date: "2024-05-27", desktop: 420, mobile: 460 },
      { date: "2024-05-28", desktop: 233, mobile: 190 },
      { date: "2024-05-29", desktop: 78, mobile: 130 },
      { date: "2024-05-30", desktop: 340, mobile: 280 },
      { date: "2024-05-31", desktop: 178, mobile: 230 },
      { date: "2024-06-01", desktop: 178, mobile: 200 },
      { date: "2024-06-02", desktop: 470, mobile: 410 },
      { date: "2024-06-03", desktop: 103, mobile: 160 },
      { date: "2024-06-04", desktop: 439, mobile: 380 },
      { date: "2024-06-05", desktop: 88, mobile: 140 },
      { date: "2024-06-06", desktop: 294, mobile: 250 },
      { date: "2024-06-07", desktop: 323, mobile: 370 },
      { date: "2024-06-08", desktop: 385, mobile: 320 },
      { date: "2024-06-09", desktop: 438, mobile: 480 },
      { date: "2024-06-10", desktop: 155, mobile: 200 },
      { date: "2024-06-11", desktop: 92, mobile: 150 },
      { date: "2024-06-12", desktop: 492, mobile: 420 },
      { date: "2024-06-13", desktop: 81, mobile: 130 },
      { date: "2024-06-14", desktop: 426, mobile: 380 },
      { date: "2024-06-15", desktop: 307, mobile: 350 },
      { date: "2024-06-16", desktop: 371, mobile: 310 },
      { date: "2024-06-17", desktop: 475, mobile: 520 },
      { date: "2024-06-18", desktop: 107, mobile: 170 },
      { date: "2024-06-19", desktop: 341, mobile: 290 },
      { date: "2024-06-20", desktop: 408, mobile: 450 },
      { date: "2024-06-21", desktop: 169, mobile: 210 },
      { date: "2024-06-22", desktop: 317, mobile: 270 },
      { date: "2024-06-23", desktop: 480, mobile: 530 },
      { date: "2024-06-24", desktop: 132, mobile: 180 },
      { date: "2024-06-25", desktop: 141, mobile: 190 },
      { date: "2024-06-26", desktop: 434, mobile: 380 },
      { date: "2024-06-27", desktop: 448, mobile: 490 },
      { date: "2024-06-28", desktop: 149, mobile: 200 },
      { date: "2024-06-29", desktop: 103, mobile: 160 },
      { date: "2024-06-30", desktop: 446, mobile: 400 },
    ],
    chartConfig: {
      visitors: { label: "Visitors" },
      desktop: { label: "Desktop", color: "hsl(var(--chart-1))" },
      mobile: { label: "Mobile", color: "hsl(var(--chart-2))" },
    },
  },
  root: {
    type: "InteractiveAreaChart",
    props: {
      data: "$data.chartData",
      config: "$data.chartConfig",
    },
  },
}

// Example 2: Simple Area Chart
export const areaChartDefaultTemplate: RenderLayout = {
  id: "area-chart-default",
  title: "Area Chart - Default",
  description: "A simple area chart",
  data: {
    chartData: [
      { month: "January", desktop: 186 },
      { month: "February", desktop: 305 },
      { month: "March", desktop: 237 },
      { month: "April", desktop: 73 },
      { month: "May", desktop: 209 },
      { month: "June", desktop: 214 },
    ],
    chartConfig: {
      desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
      },
    },
  },
  root: {
    type: "Card",
    children: [
      {
        type: "CardHeader",
        children: [
          {
            type: "CardTitle",
            children: [{ text: "Area Chart" }],
          },
          {
            type: "CardDescription",
            children: [{ text: "Showing total visitors for the last 6 months" }],
          },
        ],
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ChartContainer",
            props: {
              config: "$data.chartConfig",
            },
            children: [
              {
                type: "AreaChart",
                props: {
                  accessibilityLayer: true,
                  data: "$data.chartData",
                  margin: {
                    left: 12,
                    right: 12,
                  },
                },
                children: [
                  {
                    type: "CartesianGrid",
                    props: {
                      vertical: false,
                    },
                  },
                  {
                    type: "XAxis",
                    props: {
                      dataKey: "month",
                      tickLine: false,
                      axisLine: false,
                      tickMargin: 8,
                    },
                  },
                  {
                    type: "ChartTooltip",
                    props: {
                      cursor: false,
                    },
                    children: [
                      {
                        type: "ChartTooltipContent",
                        props: {
                          indicator: "line",
                        },
                      },
                    ],
                  },
                  {
                    type: "Area",
                    props: {
                      dataKey: "desktop",
                      type: "natural",
                      fill: "hsl(var(--chart-1))",
                      fillOpacity: 0.4,
                      stroke: "hsl(var(--chart-1))",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "CardFooter",
        children: [
          {
            tag: "div",
            props: {
              className: "flex w-full items-start gap-2 text-sm",
            },
            children: [
              {
                tag: "div",
                props: {
                  className: "grid gap-2",
                },
                children: [
                  {
                    tag: "div",
                    props: {
                      className: "flex items-center gap-2 leading-none font-medium",
                    },
                    children: [
                      { text: "Trending up by 5.2% this month " },
                      {
                        type: "Icon",
                        props: {
                          name: "TrendingUp",
                          size: 16,
                        },
                      },
                    ],
                  },
                  {
                    tag: "div",
                    props: {
                      className: "text-muted-foreground flex items-center gap-2 leading-none",
                    },
                    children: [{ text: "January - June 2024" }],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
}

// Example 3: Linear Area Chart
export const areaChartLinearTemplate: RenderLayout = {
  id: "area-chart-linear",
  title: "Area Chart - Linear",
  description: "A linear area chart",
  data: {
    chartData: [
      { month: "January", desktop: 186 },
      { month: "February", desktop: 305 },
      { month: "March", desktop: 237 },
      { month: "April", desktop: 73 },
      { month: "May", desktop: 209 },
      { month: "June", desktop: 214 },
    ],
    chartConfig: {
      desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
      },
    },
  },
  root: {
    type: "Card",
    children: [
      {
        type: "CardHeader",
        children: [
          {
            type: "CardTitle",
            children: [{ text: "Area Chart - Linear" }],
          },
          {
            type: "CardDescription",
            children: [{ text: "Showing total visitors for the last 6 months" }],
          },
        ],
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ChartContainer",
            props: {
              config: "$data.chartConfig",
            },
            children: [
              {
                type: "AreaChart",
                props: {
                  accessibilityLayer: true,
                  data: "$data.chartData",
                  margin: {
                    left: 12,
                    right: 12,
                  },
                },
                children: [
                  {
                    type: "CartesianGrid",
                    props: {
                      vertical: false,
                    },
                  },
                  {
                    type: "XAxis",
                    props: {
                      dataKey: "month",
                      tickLine: false,
                      axisLine: false,
                      tickMargin: 8,
                    },
                  },
                  {
                    type: "ChartTooltip",
                    props: {
                      cursor: false,
                    },
                    children: [
                      {
                        type: "ChartTooltipContent",
                        props: {
                          indicator: "dot",
                          hideLabel: true,
                        },
                      },
                    ],
                  },
                  {
                    type: "Area",
                    props: {
                      dataKey: "desktop",
                      type: "linear",
                      fill: "hsl(var(--chart-1))",
                      fillOpacity: 0.4,
                      stroke: "hsl(var(--chart-1))",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "CardFooter",
        children: [
          {
            tag: "div",
            props: {
              className: "flex w-full items-start gap-2 text-sm",
            },
            children: [
              {
                tag: "div",
                props: {
                  className: "grid gap-2",
                },
                children: [
                  {
                    tag: "div",
                    props: {
                      className: "flex items-center gap-2 leading-none font-medium",
                    },
                    children: [
                      { text: "Trending up by 5.2% this month " },
                      {
                        type: "Icon",
                        props: {
                          name: "TrendingUp",
                          size: 16,
                        },
                      },
                    ],
                  },
                  {
                    tag: "div",
                    props: {
                      className: "text-muted-foreground flex items-center gap-2 leading-none",
                    },
                    children: [{ text: "January - June 2024" }],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
}

// Example 4: Step Area Chart
export const areaChartStepTemplate: RenderLayout = {
  id: "area-chart-step",
  title: "Area Chart - Step",
  description: "A step area chart",
  data: {
    chartData: [
      { month: "January", desktop: 186 },
      { month: "February", desktop: 305 },
      { month: "March", desktop: 237 },
      { month: "April", desktop: 73 },
      { month: "May", desktop: 209 },
      { month: "June", desktop: 214 },
    ],
    chartConfig: {
      desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
        icon: "Activity",
      },
    },
  },
  root: {
    type: "Card",
    children: [
      {
        type: "CardHeader",
        children: [
          {
            type: "CardTitle",
            children: [{ text: "Area Chart - Step" }],
          },
          {
            type: "CardDescription",
            children: [{ text: "Showing total visitors for the last 6 months" }],
          },
        ],
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ChartContainer",
            props: {
              config: "$data.chartConfig",
            },
            children: [
              {
                type: "AreaChart",
                props: {
                  accessibilityLayer: true,
                  data: "$data.chartData",
                  margin: {
                    left: 12,
                    right: 12,
                  },
                },
                children: [
                  {
                    type: "CartesianGrid",
                    props: {
                      vertical: false,
                    },
                  },
                  {
                    type: "XAxis",
                    props: {
                      dataKey: "month",
                      tickLine: false,
                      axisLine: false,
                      tickMargin: 8,
                    },
                  },
                  {
                    type: "ChartTooltip",
                    props: {
                      cursor: false,
                    },
                    children: [
                      {
                        type: "ChartTooltipContent",
                        props: {
                          hideLabel: true,
                        },
                      },
                    ],
                  },
                  {
                    type: "Area",
                    props: {
                      dataKey: "desktop",
                      type: "step",
                      fill: "hsl(var(--chart-1))",
                      fillOpacity: 0.4,
                      stroke: "hsl(var(--chart-1))",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "CardFooter",
        children: [
          {
            tag: "div",
            props: {
              className: "flex w-full items-start gap-2 text-sm",
            },
            children: [
              {
                tag: "div",
                props: {
                  className: "grid gap-2",
                },
                children: [
                  {
                    tag: "div",
                    props: {
                      className: "flex items-center gap-2 leading-none font-medium",
                    },
                    children: [
                      { text: "Trending up by 5.2% this month " },
                      {
                        type: "Icon",
                        props: {
                          name: "TrendingUp",
                          size: 16,
                        },
                      },
                    ],
                  },
                  {
                    tag: "div",
                    props: {
                      className: "text-muted-foreground flex items-center gap-2 leading-none",
                    },
                    children: [{ text: "January - June 2024" }],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
}

// Example 5: Area Chart with Legend
export const areaChartLegendTemplate: RenderLayout = {
  id: "area-chart-legend",
  title: "Area Chart - Legend",
  description: "An area chart with a legend",
  data: {
    chartData: [
      { month: "January", desktop: 186, mobile: 80 },
      { month: "February", desktop: 305, mobile: 200 },
      { month: "March", desktop: 237, mobile: 120 },
      { month: "April", desktop: 73, mobile: 190 },
      { month: "May", desktop: 209, mobile: 130 },
      { month: "June", desktop: 214, mobile: 140 },
    ],
    chartConfig: {
      desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
      },
      mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
      },
    },
  },
  root: {
    type: "Card",
    children: [
      {
        type: "CardHeader",
        children: [
          {
            type: "CardTitle",
            children: [{ text: "Area Chart - Legend" }],
          },
          {
            type: "CardDescription",
            children: [{ text: "Showing total visitors for the last 6 months" }],
          },
        ],
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ChartContainer",
            props: {
              config: "$data.chartConfig",
            },
            children: [
              {
                type: "AreaChart",
                props: {
                  accessibilityLayer: true,
                  data: "$data.chartData",
                  margin: {
                    left: 12,
                    right: 12,
                  },
                },
                children: [
                  {
                    type: "CartesianGrid",
                    props: {
                      vertical: false,
                    },
                  },
                  {
                    type: "XAxis",
                    props: {
                      dataKey: "month",
                      tickLine: false,
                      axisLine: false,
                      tickMargin: 8,
                    },
                  },
                  {
                    type: "ChartTooltip",
                    props: {
                      cursor: false,
                    },
                    children: [
                      {
                        type: "ChartTooltipContent",
                        props: {
                          indicator: "line",
                        },
                      },
                    ],
                  },
                  {
                    type: "Area",
                    props: {
                      dataKey: "mobile",
                      type: "natural",
                      fill: "hsl(var(--chart-2))",
                      fillOpacity: 0.4,
                      stroke: "hsl(var(--chart-2))",
                      stackId: "a",
                    },
                  },
                  {
                    type: "Area",
                    props: {
                      dataKey: "desktop",
                      type: "natural",
                      fill: "hsl(var(--chart-1))",
                      fillOpacity: 0.4,
                      stroke: "hsl(var(--chart-1))",
                      stackId: "a",
                    },
                  },
                  {
                    type: "ChartLegend",
                    children: [
                      {
                        type: "ChartLegendContent",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "CardFooter",
        children: [
          {
            tag: "div",
            props: {
              className: "flex w-full items-start gap-2 text-sm",
            },
            children: [
              {
                tag: "div",
                props: {
                  className: "grid gap-2",
                },
                children: [
                  {
                    tag: "div",
                    props: {
                      className: "flex items-center gap-2 leading-none font-medium",
                    },
                    children: [
                      { text: "Trending up by 5.2% this month " },
                      {
                        type: "Icon",
                        props: {
                          name: "TrendingUp",
                          size: 16,
                        },
                      },
                    ],
                  },
                  {
                    tag: "div",
                    props: {
                      className: "text-muted-foreground flex items-center gap-2 leading-none",
                    },
                    children: [{ text: "January - June 2024" }],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
}

// Example 6: Stacked Area Chart
export const areaChartStackedTemplate: RenderLayout = {
  id: "area-chart-stacked",
  title: "Area Chart - Stacked",
  description: "A stacked area chart",
  data: {
    chartData: [
      { month: "January", desktop: 186, mobile: 80 },
      { month: "February", desktop: 305, mobile: 200 },
      { month: "March", desktop: 237, mobile: 120 },
      { month: "April", desktop: 73, mobile: 190 },
      { month: "May", desktop: 209, mobile: 130 },
      { month: "June", desktop: 214, mobile: 140 },
    ],
    chartConfig: {
      desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
      },
      mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
      },
    },
  },
  root: {
    type: "Card",
    children: [
      {
        type: "CardHeader",
        children: [
          {
            type: "CardTitle",
            children: [{ text: "Area Chart - Stacked" }],
          },
          {
            type: "CardDescription",
            children: [{ text: "Showing total visitors for the last 6 months" }],
          },
        ],
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ChartContainer",
            props: {
              config: "$data.chartConfig",
            },
            children: [
              {
                type: "AreaChart",
                props: {
                  accessibilityLayer: true,
                  data: "$data.chartData",
                  margin: {
                    left: 12,
                    right: 12,
                  },
                },
                children: [
                  {
                    type: "CartesianGrid",
                    props: {
                      vertical: false,
                    },
                  },
                  {
                    type: "XAxis",
                    props: {
                      dataKey: "month",
                      tickLine: false,
                      axisLine: false,
                      tickMargin: 8,
                    },
                  },
                  {
                    type: "ChartTooltip",
                    props: {
                      cursor: false,
                    },
                    children: [
                      {
                        type: "ChartTooltipContent",
                        props: {
                          indicator: "dot",
                        },
                      },
                    ],
                  },
                  {
                    type: "Area",
                    props: {
                      dataKey: "mobile",
                      type: "natural",
                      fill: "hsl(var(--chart-2))",
                      fillOpacity: 0.4,
                      stroke: "hsl(var(--chart-2))",
                      stackId: "a",
                    },
                  },
                  {
                    type: "Area",
                    props: {
                      dataKey: "desktop",
                      type: "natural",
                      fill: "hsl(var(--chart-1))",
                      fillOpacity: 0.4,
                      stroke: "hsl(var(--chart-1))",
                      stackId: "a",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "CardFooter",
        children: [
          {
            tag: "div",
            props: {
              className: "flex w-full items-start gap-2 text-sm",
            },
            children: [
              {
                tag: "div",
                props: {
                  className: "grid gap-2",
                },
                children: [
                  {
                    tag: "div",
                    props: {
                      className: "flex items-center gap-2 leading-none font-medium",
                    },
                    children: [
                      { text: "Trending up by 5.2% this month " },
                      {
                        type: "Icon",
                        props: {
                          name: "TrendingUp",
                          size: 16,
                        },
                      },
                    ],
                  },
                  {
                    tag: "div",
                    props: {
                      className: "text-muted-foreground flex items-center gap-2 leading-none",
                    },
                    children: [{ text: "January - June 2024" }],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
}

// Example 7: Stacked Expanded Area Chart
export const areaChartStackedExpandTemplate: RenderLayout = {
  id: "area-chart-stacked-expand",
  title: "Area Chart - Stacked Expanded",
  description: "A stacked area chart with expand stacking",
  data: {
    chartData: [
      { month: "January", desktop: 186, mobile: 80, other: 45 },
      { month: "February", desktop: 305, mobile: 200, other: 100 },
      { month: "March", desktop: 237, mobile: 120, other: 150 },
      { month: "April", desktop: 73, mobile: 190, other: 50 },
      { month: "May", desktop: 209, mobile: 130, other: 100 },
      { month: "June", desktop: 214, mobile: 140, other: 160 },
    ],
    chartConfig: {
      desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
      },
      mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
      },
      other: {
        label: "Other",
        color: "hsl(var(--chart-3))",
      },
    },
  },
  root: {
    type: "Card",
    children: [
      {
        type: "CardHeader",
        children: [
          {
            type: "CardTitle",
            children: [{ text: "Area Chart - Stacked Expanded" }],
          },
          {
            type: "CardDescription",
            children: [{ text: "Showing total visitors for the last 6 months" }],
          },
        ],
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ChartContainer",
            props: {
              config: "$data.chartConfig",
            },
            children: [
              {
                type: "AreaChart",
                props: {
                  accessibilityLayer: true,
                  data: "$data.chartData",
                  margin: {
                    left: 12,
                    right: 12,
                    top: 12,
                  },
                  stackOffset: "expand",
                },
                children: [
                  {
                    type: "CartesianGrid",
                    props: {
                      vertical: false,
                    },
                  },
                  {
                    type: "XAxis",
                    props: {
                      dataKey: "month",
                      tickLine: false,
                      axisLine: false,
                      tickMargin: 8,
                    },
                  },
                  {
                    type: "ChartTooltip",
                    props: {
                      cursor: false,
                    },
                    children: [
                      {
                        type: "ChartTooltipContent",
                        props: {
                          indicator: "line",
                        },
                      },
                    ],
                  },
                  {
                    type: "Area",
                    props: {
                      dataKey: "other",
                      type: "natural",
                      fill: "hsl(var(--chart-3))",
                      fillOpacity: 0.1,
                      stroke: "hsl(var(--chart-3))",
                      stackId: "a",
                    },
                  },
                  {
                    type: "Area",
                    props: {
                      dataKey: "mobile",
                      type: "natural",
                      fill: "hsl(var(--chart-2))",
                      fillOpacity: 0.4,
                      stroke: "hsl(var(--chart-2))",
                      stackId: "a",
                    },
                  },
                  {
                    type: "Area",
                    props: {
                      dataKey: "desktop",
                      type: "natural",
                      fill: "hsl(var(--chart-1))",
                      fillOpacity: 0.4,
                      stroke: "hsl(var(--chart-1))",
                      stackId: "a",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "CardFooter",
        children: [
          {
            tag: "div",
            props: {
              className: "flex w-full items-start gap-2 text-sm",
            },
            children: [
              {
                tag: "div",
                props: {
                  className: "grid gap-2",
                },
                children: [
                  {
                    tag: "div",
                    props: {
                      className: "flex items-center gap-2 leading-none font-medium",
                    },
                    children: [
                      { text: "Trending up by 5.2% this month " },
                      {
                        type: "Icon",
                        props: {
                          name: "TrendingUp",
                          size: 16,
                        },
                      },
                    ],
                  },
                  {
                    tag: "div",
                    props: {
                      className: "text-muted-foreground flex items-center gap-2 leading-none",
                    },
                    children: [{ text: "January - June 2024" }],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
}

// Example 8: Area Chart with Icons
export const areaChartIconsTemplate: RenderLayout = {
  id: "area-chart-icons",
  title: "Area Chart - Icons",
  description: "An area chart with icons",
  data: {
    chartData: [
      { month: "January", desktop: 186, mobile: 80 },
      { month: "February", desktop: 305, mobile: 200 },
      { month: "March", desktop: 237, mobile: 120 },
      { month: "April", desktop: 73, mobile: 190 },
      { month: "May", desktop: 209, mobile: 130 },
      { month: "June", desktop: 214, mobile: 140 },
    ],
    chartConfig: {
      desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
        icon: "TrendingDown",
      },
      mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
        icon: "TrendingUp",
      },
    },
  },
  root: {
    type: "Card",
    children: [
      {
        type: "CardHeader",
        children: [
          {
            type: "CardTitle",
            children: [{ text: "Area Chart - Icons" }],
          },
          {
            type: "CardDescription",
            children: [{ text: "Showing total visitors for the last 6 months" }],
          },
        ],
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ChartContainer",
            props: {
              config: "$data.chartConfig",
            },
            children: [
              {
                type: "AreaChart",
                props: {
                  accessibilityLayer: true,
                  data: "$data.chartData",
                  margin: {
                    left: 12,
                    right: 12,
                  },
                },
                children: [
                  {
                    type: "CartesianGrid",
                    props: {
                      vertical: false,
                    },
                  },
                  {
                    type: "XAxis",
                    props: {
                      dataKey: "month",
                      tickLine: false,
                      axisLine: false,
                      tickMargin: 8,
                    },
                  },
                  {
                    type: "ChartTooltip",
                    props: {
                      cursor: false,
                    },
                    children: [
                      {
                        type: "ChartTooltipContent",
                        props: {
                          indicator: "line",
                        },
                      },
                    ],
                  },
                  {
                    type: "Area",
                    props: {
                      dataKey: "mobile",
                      type: "natural",
                      fill: "hsl(var(--chart-2))",
                      fillOpacity: 0.4,
                      stroke: "hsl(var(--chart-2))",
                      stackId: "a",
                    },
                  },
                  {
                    type: "Area",
                    props: {
                      dataKey: "desktop",
                      type: "natural",
                      fill: "hsl(var(--chart-1))",
                      fillOpacity: 0.4,
                      stroke: "hsl(var(--chart-1))",
                      stackId: "a",
                    },
                  },
                  {
                    type: "ChartLegend",
                    children: [
                      {
                        type: "ChartLegendContent",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "CardFooter",
        children: [
          {
            tag: "div",
            props: {
              className: "flex w-full items-start gap-2 text-sm",
            },
            children: [
              {
                tag: "div",
                props: {
                  className: "grid gap-2",
                },
                children: [
                  {
                    tag: "div",
                    props: {
                      className: "flex items-center gap-2 leading-none font-medium",
                    },
                    children: [
                      { text: "Trending up by 5.2% this month " },
                      {
                        type: "Icon",
                        props: {
                          name: "TrendingUp",
                          size: 16,
                        },
                      },
                    ],
                  },
                  {
                    tag: "div",
                    props: {
                      className: "text-muted-foreground flex items-center gap-2 leading-none",
                    },
                    children: [{ text: "January - June 2024" }],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
}

// Example 9: Area Chart with Gradient
export const areaChartGradientTemplate: RenderLayout = {
  id: "area-chart-gradient",
  title: "Area Chart - Gradient",
  description: "An area chart with gradient fill",
  data: {
    chartData: [
      { month: "January", desktop: 186, mobile: 80 },
      { month: "February", desktop: 305, mobile: 200 },
      { month: "March", desktop: 237, mobile: 120 },
      { month: "April", desktop: 73, mobile: 190 },
      { month: "May", desktop: 209, mobile: 130 },
      { month: "June", desktop: 214, mobile: 140 },
    ],
    chartConfig: {
      desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
      },
      mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
      },
    },
  },
  root: {
    type: "Card",
    children: [
      {
        type: "CardHeader",
        children: [
          {
            type: "CardTitle",
            children: [{ text: "Area Chart - Gradient" }],
          },
          {
            type: "CardDescription",
            children: [{ text: "Showing total visitors for the last 6 months" }],
          },
        ],
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ChartContainer",
            props: {
              config: "$data.chartConfig",
            },
            children: [
              {
                type: "AreaChart",
                props: {
                  accessibilityLayer: true,
                  data: "$data.chartData",
                  margin: {
                    left: 12,
                    right: 12,
                  },
                },
                children: [
                  {
                    type: "CartesianGrid",
                    props: {
                      vertical: false,
                    },
                  },
                  {
                    type: "XAxis",
                    props: {
                      dataKey: "month",
                      tickLine: false,
                      axisLine: false,
                      tickMargin: 8,
                    },
                  },
                  {
                    type: "ChartTooltip",
                    props: {
                      cursor: false,
                    },
                    children: [
                      {
                        type: "ChartTooltipContent",
                      },
                    ],
                  },
                  {
                    tag: "defs",
                    children: [
                      {
                        tag: "linearGradient",
                        props: {
                          id: "fillDesktop",
                          x1: "0",
                          y1: "0",
                          x2: "0",
                          y2: "1",
                        },
                        children: [
                          {
                            tag: "stop",
                            props: {
                              offset: "5%",
                              stopColor: "hsl(var(--chart-1))",
                              stopOpacity: 0.8,
                            },
                          },
                          {
                            tag: "stop",
                            props: {
                              offset: "95%",
                              stopColor: "hsl(var(--chart-1))",
                              stopOpacity: 0.1,
                            },
                          },
                        ],
                      },
                      {
                        tag: "linearGradient",
                        props: {
                          id: "fillMobile",
                          x1: "0",
                          y1: "0",
                          x2: "0",
                          y2: "1",
                        },
                        children: [
                          {
                            tag: "stop",
                            props: {
                              offset: "5%",
                              stopColor: "hsl(var(--chart-2))",
                              stopOpacity: 0.8,
                            },
                          },
                          {
                            tag: "stop",
                            props: {
                              offset: "95%",
                              stopColor: "hsl(var(--chart-2))",
                              stopOpacity: 0.1,
                            },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: "Area",
                    props: {
                      dataKey: "mobile",
                      type: "natural",
                      fill: "url(#fillMobile)",
                      fillOpacity: 0.4,
                      stroke: "hsl(var(--chart-2))",
                      stackId: "a",
                    },
                  },
                  {
                    type: "Area",
                    props: {
                      dataKey: "desktop",
                      type: "natural",
                      fill: "url(#fillDesktop)",
                      fillOpacity: 0.4,
                      stroke: "hsl(var(--chart-1))",
                      stackId: "a",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "CardFooter",
        children: [
          {
            tag: "div",
            props: {
              className: "flex w-full items-start gap-2 text-sm",
            },
            children: [
              {
                tag: "div",
                props: {
                  className: "grid gap-2",
                },
                children: [
                  {
                    tag: "div",
                    props: {
                      className: "flex items-center gap-2 leading-none font-medium",
                    },
                    children: [
                      { text: "Trending up by 5.2% this month " },
                      {
                        type: "Icon",
                        props: {
                          name: "TrendingUp",
                          size: 16,
                        },
                      },
                    ],
                  },
                  {
                    tag: "div",
                    props: {
                      className: "text-muted-foreground flex items-center gap-2 leading-none",
                    },
                    children: [{ text: "January - June 2024" }],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
}

// Example 10: Area Chart with Axes
export const areaChartAxesTemplate: RenderLayout = {
  id: "area-chart-axes",
  title: "Area Chart - Axes",
  description: "An area chart with axes",
  data: {
    chartData: [
      { month: "January", desktop: 186, mobile: 80 },
      { month: "February", desktop: 305, mobile: 200 },
      { month: "March", desktop: 237, mobile: 120 },
      { month: "April", desktop: 73, mobile: 190 },
      { month: "May", desktop: 209, mobile: 130 },
      { month: "June", desktop: 214, mobile: 140 },
    ],
    chartConfig: {
      desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
      },
      mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
      },
    },
  },
  root: {
    type: "Card",
    children: [
      {
        type: "CardHeader",
        children: [
          {
            type: "CardTitle",
            children: [{ text: "Area Chart - Axes" }],
          },
          {
            type: "CardDescription",
            children: [{ text: "Showing total visitors for the last 6 months" }],
          },
        ],
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ChartContainer",
            props: {
              config: "$data.chartConfig",
            },
            children: [
              {
                type: "AreaChart",
                props: {
                  accessibilityLayer: true,
                  data: "$data.chartData",
                  margin: {
                    left: -20,
                    right: 12,
                  },
                },
                children: [
                  {
                    type: "CartesianGrid",
                    props: {
                      vertical: false,
                    },
                  },
                  {
                    type: "XAxis",
                    props: {
                      dataKey: "month",
                      tickLine: false,
                      axisLine: false,
                      tickMargin: 8,
                    },
                  },
                  {
                    type: "YAxis",
                    props: {
                      tickLine: false,
                      axisLine: false,
                      tickMargin: 8,
                      tickCount: 3,
                    },
                  },
                  {
                    type: "ChartTooltip",
                    props: {
                      cursor: false,
                    },
                    children: [
                      {
                        type: "ChartTooltipContent",
                      },
                    ],
                  },
                  {
                    type: "Area",
                    props: {
                      dataKey: "mobile",
                      type: "natural",
                      fill: "hsl(var(--chart-2))",
                      fillOpacity: 0.4,
                      stroke: "hsl(var(--chart-2))",
                      stackId: "a",
                    },
                  },
                  {
                    type: "Area",
                    props: {
                      dataKey: "desktop",
                      type: "natural",
                      fill: "hsl(var(--chart-1))",
                      fillOpacity: 0.4,
                      stroke: "hsl(var(--chart-1))",
                      stackId: "a",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "CardFooter",
        children: [
          {
            tag: "div",
            props: {
              className: "flex w-full items-start gap-2 text-sm",
            },
            children: [
              {
                tag: "div",
                props: {
                  className: "grid gap-2",
                },
                children: [
                  {
                    tag: "div",
                    props: {
                      className: "flex items-center gap-2 leading-none font-medium",
                    },
                    children: [
                      { text: "Trending up by 5.2% this month " },
                      {
                        type: "Icon",
                        props: {
                          name: "TrendingUp",
                          size: 16,
                        },
                      },
                    ],
                  },
                  {
                    tag: "div",
                    props: {
                      className: "text-muted-foreground flex items-center gap-2 leading-none",
                    },
                    children: [{ text: "January - June 2024" }],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
}
