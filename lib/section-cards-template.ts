import type { RenderLayout } from "@/types/render-schema"

export const sectionCardsTemplate: RenderLayout = {
  id: "section-cards",
  title: "Section Cards",
  description: "Dashboard cards with metrics and trends",
  root: {
    tag: "div",
    props: {
      className:
        "*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4",
    },
    children: [
      {
        type: "Card",
        props: {
          className: "@container/card",
        },
        children: [
          {
            type: "CardHeader",
            children: [
              {
                type: "CardDescription",
                children: [{ text: "Total Revenue" }],
              },
              {
                type: "CardTitle",
                props: {
                  className: "text-2xl font-semibold tabular-nums @[250px]/card:text-3xl",
                },
                children: [{ text: "$1,250.00" }],
              },
              {
                tag: "div",
                children: [
                  {
                    type: "Badge",
                    props: {
                      variant: "outline",
                    },
                    children: [
                      {
                        type: "Icon",
                        props: {
                          name: "trending-up",
                          size: 16,
                        },
                      },
                      { text: "+12.5%" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "CardFooter",
            props: {
              className: "flex-col items-start gap-1.5 text-sm",
            },
            children: [
              {
                tag: "div",
                props: {
                  className: "line-clamp-1 flex gap-2 font-medium",
                },
                children: [
                  { text: "Trending up this month " },
                  {
                    type: "Icon",
                    props: {
                      name: "trending-up",
                      size: 16,
                      className: "size-4",
                    },
                  },
                ],
              },
              {
                tag: "div",
                props: {
                  className: "text-muted-foreground",
                },
                children: [{ text: "Visitors for the last 6 months" }],
              },
            ],
          },
        ],
      },
      {
        type: "Card",
        props: {
          className: "@container/card",
        },
        children: [
          {
            type: "CardHeader",
            children: [
              {
                type: "CardDescription",
                children: [{ text: "New Customers" }],
              },
              {
                type: "CardTitle",
                props: {
                  className: "text-2xl font-semibold tabular-nums @[250px]/card:text-3xl",
                },
                children: [{ text: "1,234" }],
              },
              {
                tag: "div",
                children: [
                  {
                    type: "Badge",
                    props: {
                      variant: "outline",
                    },
                    children: [
                      {
                        type: "Icon",
                        props: {
                          name: "trending-down",
                          size: 16,
                        },
                      },
                      { text: "-20%" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "CardFooter",
            props: {
              className: "flex-col items-start gap-1.5 text-sm",
            },
            children: [
              {
                tag: "div",
                props: {
                  className: "line-clamp-1 flex gap-2 font-medium",
                },
                children: [
                  { text: "Down 20% this period " },
                  {
                    type: "Icon",
                    props: {
                      name: "trending-down",
                      size: 16,
                      className: "size-4",
                    },
                  },
                ],
              },
              {
                tag: "div",
                props: {
                  className: "text-muted-foreground",
                },
                children: [{ text: "Acquisition needs attention" }],
              },
            ],
          },
        ],
      },
      {
        type: "Card",
        props: {
          className: "@container/card",
        },
        children: [
          {
            type: "CardHeader",
            children: [
              {
                type: "CardDescription",
                children: [{ text: "Active Accounts" }],
              },
              {
                type: "CardTitle",
                props: {
                  className: "text-2xl font-semibold tabular-nums @[250px]/card:text-3xl",
                },
                children: [{ text: "45,678" }],
              },
              {
                tag: "div",
                children: [
                  {
                    type: "Badge",
                    props: {
                      variant: "outline",
                    },
                    children: [
                      {
                        type: "Icon",
                        props: {
                          name: "trending-up",
                          size: 16,
                        },
                      },
                      { text: "+12.5%" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "CardFooter",
            props: {
              className: "flex-col items-start gap-1.5 text-sm",
            },
            children: [
              {
                tag: "div",
                props: {
                  className: "line-clamp-1 flex gap-2 font-medium",
                },
                children: [
                  { text: "Trending up this month " },
                  {
                    type: "Icon",
                    props: {
                      name: "trending-up",
                      size: 16,
                      className: "size-4",
                    },
                  },
                ],
              },
              {
                tag: "div",
                props: {
                  className: "text-muted-foreground",
                },
                children: [{ text: "Engagement exceed targets" }],
              },
            ],
          },
        ],
      },
      {
        type: "Card",
        props: {
          className: "@container/card",
        },
        children: [
          {
            type: "CardHeader",
            children: [
              {
                type: "CardDescription",
                children: [{ text: "Growth Rate" }],
              },
              {
                type: "CardTitle",
                props: {
                  className: "text-2xl font-semibold tabular-nums @[250px]/card:text-3xl",
                },
                children: [{ text: "4.5%" }],
              },
              {
                tag: "div",
                children: [
                  {
                    type: "Badge",
                    props: {
                      variant: "outline",
                    },
                    children: [
                      {
                        type: "Icon",
                        props: {
                          name: "trending-up",
                          size: 16,
                        },
                      },
                      { text: "+4.5%" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "CardFooter",
            props: {
              className: "flex-col items-start gap-1.5 text-sm",
            },
            children: [
              {
                tag: "div",
                props: {
                  className: "line-clamp-1 flex gap-2 font-medium",
                },
                children: [
                  { text: "Steady performance increase " },
                  {
                    type: "Icon",
                    props: {
                      name: "trending-up",
                      size: 16,
                      className: "size-4",
                    },
                  },
                ],
              },
              {
                tag: "div",
                props: {
                  className: "text-muted-foreground",
                },
                children: [{ text: "Meets growth projections" }],
              },
            ],
          },
        ],
      },
    ],
  },
}

// Placeholder export to prevent import errors
export const sectionCardsPlaceholder = "commented out for debugging"
