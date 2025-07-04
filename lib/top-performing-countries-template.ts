import type { RenderLayout } from "@/types/render-schema"

export const topPerformingCountriesTemplate: RenderLayout = {
  id: "top-performing-countries",
  title: "Top Performing Countries",
  description: "Exact replica of the performance dashboard table",
  data: {
    countries: [
      { name: "Indonesia", percentage: "23,58%", ticket: "43.435", flagType: "indonesia" },
      { name: "United States", percentage: "18,72%", ticket: "34.471", flagType: "usa" },
      { name: "Japan", percentage: "13,89%", ticket: "25.582", flagType: "japan" },
      { name: "United Kingdom", percentage: "10,54%", ticket: "19.411", flagType: "uk" },
      { name: "Other", percentage: "33,98%", ticket: "62.579", flagType: "other" },
    ],
  },
  root: {
    type: "Card",
    props: {
      className: "w-full max-w-md bg-white dark:bg-card border border-border shadow-sm",
    },
    children: [
      {
        type: "CardContent",
        props: {
          className: "p-6",
        },
        children: [
          // Header
          {
            tag: "div",
            props: {
              className: "flex items-center gap-3 mb-6",
            },
            children: [
              {
                tag: "div",
                props: {
                  className: "w-10 h-10 bg-slate-800 dark:bg-slate-700 rounded-full flex items-center justify-center",
                },
                children: [
                  {
                    type: "svg",
                    props: {
                      width: "20",
                      height: "20",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      className: "text-white",
                    },
                    children: [
                      {
                        tag: "path",
                        props: {
                          d: "M3 3h18v18H3V3z",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          fill: "none",
                        },
                      },
                      {
                        tag: "path",
                        props: {
                          d: "M3 3l18 18M21 3L3 21",
                          stroke: "currentColor",
                          strokeWidth: "2",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                tag: "h2",
                props: {
                  className: "text-lg font-semibold text-foreground",
                },
                children: [{ text: "Top Performing Countries" }],
              },
            ],
          },
          // Table Header
          {
            tag: "div",
            props: {
              className: "grid grid-cols-3 gap-4 mb-4 pb-2 border-b border-border",
            },
            children: [
              {
                tag: "div",
                props: {
                  className: "text-sm font-medium text-muted-foreground",
                },
                children: [{ text: "Countries" }],
              },
              {
                tag: "div",
                props: {
                  className: "text-sm font-medium text-muted-foreground text-right",
                },
                children: [{ text: "Percentage" }],
              },
              {
                tag: "div",
                props: {
                  className: "text-sm font-medium text-muted-foreground text-right",
                },
                children: [{ text: "Ticket" }],
              },
            ],
          },
          // Indonesia Row
          {
            tag: "div",
            props: {
              className: "grid grid-cols-3 gap-4 items-center py-3",
            },
            children: [
              {
                tag: "div",
                props: {
                  className: "flex items-center gap-3",
                },
                children: [
                  {
                    tag: "div",
                    props: {
                      className: "w-6 h-4 rounded-sm overflow-hidden border border-gray-200 dark:border-gray-600",
                    },
                    children: [
                      {
                        tag: "div",
                        props: {
                          className: "w-full h-1/2 bg-red-500",
                        },
                      },
                      {
                        tag: "div",
                        props: {
                          className: "w-full h-1/2 bg-white dark:bg-gray-100",
                        },
                      },
                    ],
                  },
                  {
                    tag: "span",
                    props: {
                      className: "text-sm font-medium text-foreground",
                    },
                    children: [{ text: "Indonesia" }],
                  },
                ],
              },
              {
                tag: "div",
                props: {
                  className: "text-sm text-foreground text-right",
                },
                children: [{ text: "23,58%" }],
              },
              {
                tag: "div",
                props: {
                  className: "text-sm text-foreground text-right",
                },
                children: [{ text: "43.435" }],
              },
            ],
          },
          // United States Row
          {
            tag: "div",
            props: {
              className: "grid grid-cols-3 gap-4 items-center py-3",
            },
            children: [
              {
                tag: "div",
                props: {
                  className: "flex items-center gap-3",
                },
                children: [
                  {
                    tag: "div",
                    props: {
                      className:
                        "w-6 h-4 rounded-sm overflow-hidden border border-gray-200 dark:border-gray-600 bg-blue-600 relative",
                    },
                    children: [
                      {
                        tag: "div",
                        props: {
                          className: "absolute inset-0 bg-gradient-to-b from-red-500 via-red-500 to-red-500",
                          style: {
                            backgroundImage:
                              "repeating-linear-gradient(0deg, #dc2626 0px, #dc2626 1px, #ffffff 1px, #ffffff 2px)",
                          },
                        },
                      },
                      {
                        tag: "div",
                        props: {
                          className: "absolute top-0 left-0 w-2 h-2 bg-blue-600",
                        },
                      },
                    ],
                  },
                  {
                    tag: "span",
                    props: {
                      className: "text-sm font-medium text-foreground",
                    },
                    children: [{ text: "United States" }],
                  },
                ],
              },
              {
                tag: "div",
                props: {
                  className: "text-sm text-foreground text-right",
                },
                children: [{ text: "18,72%" }],
              },
              {
                tag: "div",
                props: {
                  className: "text-sm text-foreground text-right",
                },
                children: [{ text: "34.471" }],
              },
            ],
          },
          // Japan Row
          {
            tag: "div",
            props: {
              className: "grid grid-cols-3 gap-4 items-center py-3",
            },
            children: [
              {
                tag: "div",
                props: {
                  className: "flex items-center gap-3",
                },
                children: [
                  {
                    tag: "div",
                    props: {
                      className:
                        "w-6 h-4 rounded-sm overflow-hidden border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-100 flex items-center justify-center",
                    },
                    children: [
                      {
                        tag: "div",
                        props: {
                          className: "w-2 h-2 bg-red-500 rounded-full",
                        },
                      },
                    ],
                  },
                  {
                    tag: "span",
                    props: {
                      className: "text-sm font-medium text-foreground",
                    },
                    children: [{ text: "Japan" }],
                  },
                ],
              },
              {
                tag: "div",
                props: {
                  className: "text-sm text-foreground text-right",
                },
                children: [{ text: "13,89%" }],
              },
              {
                tag: "div",
                props: {
                  className: "text-sm text-foreground text-right",
                },
                children: [{ text: "25.582" }],
              },
            ],
          },
          // United Kingdom Row
          {
            tag: "div",
            props: {
              className: "grid grid-cols-3 gap-4 items-center py-3",
            },
            children: [
              {
                tag: "div",
                props: {
                  className: "flex items-center gap-3",
                },
                children: [
                  {
                    tag: "div",
                    props: {
                      className:
                        "w-6 h-4 rounded-sm overflow-hidden border border-gray-200 dark:border-gray-600 bg-blue-600 relative",
                    },
                    children: [
                      {
                        tag: "div",
                        props: {
                          className: "absolute inset-0 bg-blue-600",
                        },
                      },
                      {
                        tag: "div",
                        props: {
                          className: "absolute inset-0",
                          style: {
                            background:
                              "linear-gradient(45deg, transparent 40%, white 40%, white 60%, transparent 60%), linear-gradient(-45deg, transparent 40%, white 40%, white 60%, transparent 60%)",
                          },
                        },
                      },
                      {
                        tag: "div",
                        props: {
                          className: "absolute top-1/2 left-0 right-0 h-0.5 bg-white transform -translate-y-1/2",
                        },
                      },
                      {
                        tag: "div",
                        props: {
                          className: "absolute top-0 bottom-0 left-1/2 w-0.5 bg-white transform -translate-x-1/2",
                        },
                      },
                      {
                        tag: "div",
                        props: {
                          className: "absolute top-1/2 left-0 right-0 h-0.5 bg-red-500 transform -translate-y-1/2",
                        },
                      },
                      {
                        tag: "div",
                        props: {
                          className: "absolute top-0 bottom-0 left-1/2 w-0.5 bg-red-500 transform -translate-x-1/2",
                        },
                      },
                    ],
                  },
                  {
                    tag: "span",
                    props: {
                      className: "text-sm font-medium text-foreground",
                    },
                    children: [{ text: "United Kingdom" }],
                  },
                ],
              },
              {
                tag: "div",
                props: {
                  className: "text-sm text-foreground text-right",
                },
                children: [{ text: "10,54%" }],
              },
              {
                tag: "div",
                props: {
                  className: "text-sm text-foreground text-right",
                },
                children: [{ text: "19.411" }],
              },
            ],
          },
          // Other Row
          {
            tag: "div",
            props: {
              className: "grid grid-cols-3 gap-4 items-center py-3",
            },
            children: [
              {
                tag: "div",
                props: {
                  className: "flex items-center gap-3",
                },
                children: [
                  {
                    tag: "div",
                    props: {
                      className:
                        "w-6 h-4 rounded-sm overflow-hidden border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 flex items-center justify-center",
                    },
                    children: [
                      {
                        type: "svg",
                        props: {
                          width: "12",
                          height: "12",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          className: "text-gray-500 dark:text-gray-400",
                        },
                        children: [
                          {
                            tag: "path",
                            props: {
                              d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              fill: "none",
                            },
                          },
                          {
                            tag: "path",
                            props: {
                              d: "M14 2v6h6",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              fill: "none",
                            },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    tag: "span",
                    props: {
                      className: "text-sm font-medium text-foreground",
                    },
                    children: [{ text: "Other" }],
                  },
                ],
              },
              {
                tag: "div",
                props: {
                  className: "text-sm text-foreground text-right",
                },
                children: [{ text: "33,98%" }],
              },
              {
                tag: "div",
                props: {
                  className: "text-sm text-foreground text-right",
                },
                children: [{ text: "62.579" }],
              },
            ],
          },
        ],
      },
    ],
  },
}

export const topPerformingCountriesEnhancedTemplate: RenderLayout = {
  id: "top-performing-countries-enhanced",
  title: "Top Performing Countries - Enhanced",
  description: "Enhanced version with hover effects and better styling",
  data: {
    countries: [
      { name: "Indonesia", percentage: "23,58%", ticket: "43.435", flagType: "indonesia" },
      { name: "United States", percentage: "18,72%", ticket: "34.471", flagType: "usa" },
      { name: "Japan", percentage: "13,89%", ticket: "25.582", flagType: "japan" },
      { name: "United Kingdom", percentage: "10,54%", ticket: "19.411", flagType: "uk" },
      { name: "Other", percentage: "33,98%", ticket: "62.579", flagType: "other" },
    ],
  },
  root: {
    type: "Card",
    props: {
      className:
        "w-full max-w-md bg-white dark:bg-card border border-border shadow-lg hover:shadow-xl transition-shadow duration-300",
    },
    children: [
      {
        type: "CardContent",
        props: {
          className: "p-6",
        },
        children: [
          // Header
          {
            tag: "div",
            props: {
              className: "flex items-center gap-3 mb-6",
            },
            children: [
              {
                tag: "div",
                props: {
                  className:
                    "w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-600 dark:from-slate-700 dark:to-slate-500 rounded-full flex items-center justify-center shadow-md",
                },
                children: [
                  {
                    type: "svg",
                    props: {
                      width: "20",
                      height: "20",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      className: "text-white",
                    },
                    children: [
                      {
                        tag: "path",
                        props: {
                          d: "M3 3h18v18H3V3z",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          fill: "none",
                        },
                      },
                      {
                        tag: "path",
                        props: {
                          d: "M3 3l18 18M21 3L3 21",
                          stroke: "currentColor",
                          strokeWidth: "2",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                tag: "h2",
                props: {
                  className: "text-lg font-semibold text-foreground",
                },
                children: [{ text: "Top Performing Countries" }],
              },
            ],
          },
          // Table Header
          {
            tag: "div",
            props: {
              className: "grid grid-cols-3 gap-4 mb-4 pb-3 border-b-2 border-border",
            },
            children: [
              {
                tag: "div",
                props: {
                  className: "text-sm font-semibold text-muted-foreground uppercase tracking-wide",
                },
                children: [{ text: "Countries" }],
              },
              {
                tag: "div",
                props: {
                  className: "text-sm font-semibold text-muted-foreground text-right uppercase tracking-wide",
                },
                children: [{ text: "Percentage" }],
              },
              {
                tag: "div",
                props: {
                  className: "text-sm font-semibold text-muted-foreground text-right uppercase tracking-wide",
                },
                children: [{ text: "Ticket" }],
              },
            ],
          },
          // Indonesia Row
          {
            tag: "div",
            props: {
              className:
                "grid grid-cols-3 gap-4 items-center py-3 hover:bg-accent/50 rounded-lg transition-colors duration-200 px-2 -mx-2",
            },
            children: [
              {
                tag: "div",
                props: {
                  className: "flex items-center gap-3",
                },
                children: [
                  {
                    tag: "div",
                    props: {
                      className:
                        "w-7 h-5 rounded-md overflow-hidden border-2 border-gray-200 dark:border-gray-600 shadow-sm",
                    },
                    children: [
                      {
                        tag: "div",
                        props: {
                          className: "w-full h-1/2 bg-red-500",
                        },
                      },
                      {
                        tag: "div",
                        props: {
                          className: "w-full h-1/2 bg-white dark:bg-gray-100",
                        },
                      },
                    ],
                  },
                  {
                    tag: "span",
                    props: {
                      className: "text-sm font-medium text-foreground",
                    },
                    children: [{ text: "Indonesia" }],
                  },
                ],
              },
              {
                tag: "div",
                props: {
                  className: "text-sm font-semibold text-foreground text-right",
                },
                children: [{ text: "23,58%" }],
              },
              {
                tag: "div",
                props: {
                  className: "text-sm font-semibold text-foreground text-right",
                },
                children: [{ text: "43.435" }],
              },
            ],
          },
          // United States Row
          {
            tag: "div",
            props: {
              className:
                "grid grid-cols-3 gap-4 items-center py-3 hover:bg-accent/50 rounded-lg transition-colors duration-200 px-2 -mx-2",
            },
            children: [
              {
                tag: "div",
                props: {
                  className: "flex items-center gap-3",
                },
                children: [
                  {
                    tag: "div",
                    props: {
                      className:
                        "w-7 h-5 rounded-md overflow-hidden border-2 border-gray-200 dark:border-gray-600 bg-blue-600 relative shadow-sm",
                    },
                    children: [
                      {
                        tag: "div",
                        props: {
                          className: "absolute inset-0 bg-gradient-to-b from-red-500 via-red-500 to-red-500",
                          style: {
                            backgroundImage:
                              "repeating-linear-gradient(0deg, #dc2626 0px, #dc2626 1px, #ffffff 1px, #ffffff 2px)",
                          },
                        },
                      },
                      {
                        tag: "div",
                        props: {
                          className: "absolute top-0 left-0 w-2.5 h-2.5 bg-blue-600",
                        },
                      },
                    ],
                  },
                  {
                    tag: "span",
                    props: {
                      className: "text-sm font-medium text-foreground",
                    },
                    children: [{ text: "United States" }],
                  },
                ],
              },
              {
                tag: "div",
                props: {
                  className: "text-sm font-semibold text-foreground text-right",
                },
                children: [{ text: "18,72%" }],
              },
              {
                tag: "div",
                props: {
                  className: "text-sm font-semibold text-foreground text-right",
                },
                children: [{ text: "34.471" }],
              },
            ],
          },
          // Japan Row
          {
            tag: "div",
            props: {
              className:
                "grid grid-cols-3 gap-4 items-center py-3 hover:bg-accent/50 rounded-lg transition-colors duration-200 px-2 -mx-2",
            },
            children: [
              {
                tag: "div",
                props: {
                  className: "flex items-center gap-3",
                },
                children: [
                  {
                    tag: "div",
                    props: {
                      className:
                        "w-7 h-5 rounded-md overflow-hidden border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-100 flex items-center justify-center shadow-sm",
                    },
                    children: [
                      {
                        tag: "div",
                        props: {
                          className: "w-2.5 h-2.5 bg-red-500 rounded-full",
                        },
                      },
                    ],
                  },
                  {
                    tag: "span",
                    props: {
                      className: "text-sm font-medium text-foreground",
                    },
                    children: [{ text: "Japan" }],
                  },
                ],
              },
              {
                tag: "div",
                props: {
                  className: "text-sm font-semibold text-foreground text-right",
                },
                children: [{ text: "13,89%" }],
              },
              {
                tag: "div",
                props: {
                  className: "text-sm font-semibold text-foreground text-right",
                },
                children: [{ text: "25.582" }],
              },
            ],
          },
          // United Kingdom Row
          {
            tag: "div",
            props: {
              className:
                "grid grid-cols-3 gap-4 items-center py-3 hover:bg-accent/50 rounded-lg transition-colors duration-200 px-2 -mx-2",
            },
            children: [
              {
                tag: "div",
                props: {
                  className: "flex items-center gap-3",
                },
                children: [
                  {
                    tag: "div",
                    props: {
                      className:
                        "w-7 h-5 rounded-md overflow-hidden border-2 border-gray-200 dark:border-gray-600 bg-blue-600 relative shadow-sm",
                    },
                    children: [
                      {
                        tag: "div",
                        props: {
                          className: "absolute inset-0 bg-blue-600",
                        },
                      },
                      {
                        tag: "div",
                        props: {
                          className: "absolute inset-0",
                          style: {
                            background:
                              "linear-gradient(45deg, transparent 40%, white 40%, white 60%, transparent 60%), linear-gradient(-45deg, transparent 40%, white 40%, white 60%, transparent 60%)",
                          },
                        },
                      },
                      {
                        tag: "div",
                        props: {
                          className: "absolute top-1/2 left-0 right-0 h-0.5 bg-white transform -translate-y-1/2",
                        },
                      },
                      {
                        tag: "div",
                        props: {
                          className: "absolute top-0 bottom-0 left-1/2 w-0.5 bg-white transform -translate-x-1/2",
                        },
                      },
                      {
                        tag: "div",
                        props: {
                          className: "absolute top-1/2 left-0 right-0 h-0.5 bg-red-500 transform -translate-y-1/2",
                        },
                      },
                      {
                        tag: "div",
                        props: {
                          className: "absolute top-0 bottom-0 left-1/2 w-0.5 bg-red-500 transform -translate-x-1/2",
                        },
                      },
                    ],
                  },
                  {
                    tag: "span",
                    props: {
                      className: "text-sm font-medium text-foreground",
                    },
                    children: [{ text: "United Kingdom" }],
                  },
                ],
              },
              {
                tag: "div",
                props: {
                  className: "text-sm font-semibold text-foreground text-right",
                },
                children: [{ text: "10,54%" }],
              },
              {
                tag: "div",
                props: {
                  className: "text-sm font-semibold text-foreground text-right",
                },
                children: [{ text: "19.411" }],
              },
            ],
          },
          // Other Row
          {
            tag: "div",
            props: {
              className:
                "grid grid-cols-3 gap-4 items-center py-3 hover:bg-accent/50 rounded-lg transition-colors duration-200 px-2 -mx-2",
            },
            children: [
              {
                tag: "div",
                props: {
                  className: "flex items-center gap-3",
                },
                children: [
                  {
                    tag: "div",
                    props: {
                      className:
                        "w-7 h-5 rounded-md overflow-hidden border-2 border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 flex items-center justify-center shadow-sm",
                    },
                    children: [
                      {
                        type: "svg",
                        props: {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          className: "text-gray-500 dark:text-gray-400",
                        },
                        children: [
                          {
                            tag: "path",
                            props: {
                              d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              fill: "none",
                            },
                          },
                          {
                            tag: "path",
                            props: {
                              d: "M14 2v6h6",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              fill: "none",
                            },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    tag: "span",
                    props: {
                      className: "text-sm font-medium text-foreground",
                    },
                    children: [{ text: "Other" }],
                  },
                ],
              },
              {
                tag: "div",
                props: {
                  className: "text-sm font-semibold text-foreground text-right",
                },
                children: [{ text: "33,98%" }],
              },
              {
                tag: "div",
                props: {
                  className: "text-sm font-semibold text-foreground text-right",
                },
                children: [{ text: "62.579" }],
              },
            ],
          },
        ],
      },
    ],
  },
}
