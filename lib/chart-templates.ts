import type { RenderLayout } from "@/types/render-schema"

export const interactiveBarChartTemplate: RenderLayout = {
  id: "interactive-bar-chart",
  title: "Interactive Bar Chart",
  description: "Exact replica of the shadcn interactive bar chart",
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
    ],
    chartConfig: {
      views: { label: "Page Views" },
      desktop: { label: "Desktop", color: "var(--chart-2)" },
      mobile: { label: "Mobile", color: "var(--chart-1)" },
    },
  },
  root: {
    type: "Card",
    props: {
      className: "py-0",
    },
    children: [
      {
        type: "CardHeader",
        props: {
          className: "flex flex-col items-stretch border-b !p-0 sm:flex-row",
        },
        children: [
          {
            tag: "div",
            props: {
              className: "flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:!py-0",
            },
            children: [
              {
                type: "CardTitle",
                children: [{ text: "Bar Chart - Interactive" }],
              },
              {
                type: "CardDescription",
                children: [{ text: "Showing total visitors for the last 3 months" }],
              },
            ],
          },
          {
            tag: "div",
            props: {
              className: "flex",
            },
            children: [
              {
                tag: "button",
                props: {
                  className:
                    "data-[active=true]:bg-muted/50 relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6",
                  "data-active": "true",
                },
                children: [
                  {
                    tag: "span",
                    props: {
                      className: "text-muted-foreground text-xs",
                    },
                    children: [{ text: "Desktop" }],
                  },
                  {
                    tag: "span",
                    props: {
                      className: "text-lg leading-none font-bold sm:text-3xl",
                    },
                    children: [{ text: "12,584" }],
                  },
                ],
              },
              {
                tag: "button",
                props: {
                  className:
                    "data-[active=true]:bg-muted/50 relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6",
                },
                children: [
                  {
                    tag: "span",
                    props: {
                      className: "text-muted-foreground text-xs",
                    },
                    children: [{ text: "Mobile" }],
                  },
                  {
                    tag: "span",
                    props: {
                      className: "text-lg leading-none font-bold sm:text-3xl",
                    },
                    children: [{ text: "8,234" }],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "CardContent",
        props: {
          className: "px-2 sm:p-6",
        },
        children: [
          {
            type: "ChartContainer",
            props: {
              config: "$data.chartConfig",
              className: "aspect-auto h-[250px] w-full",
            },
            children: [
              {
                type: "BarChart",
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
                      dataKey: "date",
                      tickLine: false,
                      axisLine: false,
                      tickMargin: 8,
                      minTickGap: 32,
                    },
                  },
                  {
                    type: "ChartTooltip",
                    children: [
                      {
                        type: "ChartTooltipContent",
                        props: {
                          className: "w-[150px]",
                          nameKey: "views",
                        },
                      },
                    ],
                  },
                  {
                    type: "Bar",
                    props: {
                      dataKey: "desktop",
                      fill: "var(--color-desktop)",
                    },
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

// Placeholder export to prevent import errors
export const chartTemplatesPlaceholder = "commented out for debugging"
