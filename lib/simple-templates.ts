import type { RenderLayout } from "@/types/render-schema"

// SIMPLE CARD TEMPLATE - WORKING
export const simpleCardTemplate: RenderLayout = {
  id: "simple-card",
  title: "Simple Card",
  description: "A basic card with title and content",
  root: {
    type: "Card",
    props: {
      className: "w-full max-w-md p-6",
    },
    children: [
      {
        type: "CardHeader",
        children: [
          {
            type: "CardTitle",
            children: [
              {
                text: "Simple Card Title",
              },
            ],
          },
        ],
      },
      {
        type: "CardContent",
        children: [
          {
            text: "This is a simple card content.",
          },
        ],
      },
    ],
  },
}

// BUTTON TEMPLATE - WORKING
export const simpleButtonTemplate: RenderLayout = {
  id: "simple-button",
  title: "Simple Button",
  description: "A basic button component",
  root: {
    type: "Button",
    props: {
      variant: "default",
      className: "px-4 py-2",
    },
    children: [
      {
        text: "Click Me",
      },
    ],
  },
}

// COMMENTED OUT - COMPLEX EXAMPLES TO TEST LATER
/*
// CARD WITH ICON TEMPLATE
export const cardWithIconTemplate: RenderLayout = {
  id: "card-with-icon",
  title: "Card with Icon",
  description: "A card with an icon and badge",
  root: {
    type: "Card",
    props: {
      className: "w-full max-w-md p-6"
    },
    children: [
      {
        type: "CardHeader",
        children: [
          {
            type: "CardTitle",
            children: [
              {
                text: "Revenue"
              }
            ]
          },
          {
            tag: "div",
            props: {
              className: "flex items-center gap-2"
            },
            children: [
              {
                type: "Icon",
                props: {
                  name: "trending-up",
                  size: 16
                }
              },
              {
                type: "Badge",
                props: {
                  variant: "outline"
                },
                children: [
                  {
                    text: "+12.5%"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        type: "CardContent",
        children: [
          {
            text: "$1,250.00"
          }
        ]
      }
    ]
  }
}

// CHART TEMPLATE
export const simpleChartTemplate: RenderLayout = {
  id: "simple-chart",
  title: "Simple Chart",
  description: "A basic bar chart",
  data: {
    chartData: [
      { name: "Jan", value: 400 },
      { name: "Feb", value: 300 },
      { name: "Mar", value: 500 }
    ]
  },
  root: {
    type: "Card",
    props: {
      className: "w-full max-w-md p-6"
    },
    children: [
      {
        type: "CardHeader",
        children: [
          {
            type: "CardTitle",
            children: [
              {
                text: "Simple Chart"
              }
            ]
          }
        ]
      },
      {
        type: "CardContent",
        children: [
          {
            type: "ResponsiveContainer",
            props: {
              width: "100%",
              height: 200
            },
            children: [
              {
                type: "BarChart",
                props: {
                  data: "$data.chartData"
                },
                children: [
                  {
                    type: "CartesianGrid",
                    props: {
                      strokeDasharray: "3 3"
                    }
                  },
                  {
                    type: "XAxis",
                    props: {
                      dataKey: "name"
                    }
                  },
                  {
                    type: "YAxis"
                  },
                  {
                    type: "Bar",
                    props: {
                      dataKey: "value",
                      fill: "#8884d8"
                    }
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
*/
