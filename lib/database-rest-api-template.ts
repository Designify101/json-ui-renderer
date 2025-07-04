import type { RenderLayout } from "@/types/render-schema"

export const databaseRestApiTemplate: RenderLayout = {
  id: "database-rest-api",
  title: "Database with REST API",
  description: "Animated database component with REST API endpoints and flowing data connections - theme aware",
  styles: `
    .database {
      offset-anchor: 10px 0px;
      animation: database-animation-path;
      animation-iteration-count: infinite;
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      animation-duration: 4s;
      animation-delay: 1s;
    }

    .db-light-1 {
      offset-path: path("M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 25");
    }

    .db-light-2 {
      offset-path: path("M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 25");
    }

    .db-light-3 {
      offset-path: path("M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 25");
    }

    .db-light-4 {
      offset-path: path("M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 25");
    }

    @keyframes database-animation-path {
      0% {
        offset-distance: 0%;
      }
      100% {
        offset-distance: 100%;
      }
    }
  `,
  data: {
    circleText: "SVG",
    title: "Data exchange using a customized REST API",
    badgeTexts: {
      first: "GET",
      second: "POST",
      third: "PUT",
      fourth: "DELETE",
    },
    buttonTexts: {
      first: "LegionDev",
      second: "v2_updates",
    },
    lightColor: "#00A6F5",
  },
  root: {
    tag: "div",
    props: {
      className: "relative flex h-[350px] w-full max-w-[500px] flex-col items-center p-4 rounded-xl bg-accent/20",
    },
    children: [
      // SVG Container
      {
        type: "svg",
        props: {
          className: "h-full sm:w-full",
          width: "100%",
          height: "100%",
          viewBox: "0 0 200 100",
        },
        children: [
          // Paths Group
          {
            tag: "g",
            props: {
              stroke: "hsl(var(--border))",
              fill: "none",
              strokeWidth: "0.5",
              strokeDasharray: "100 100",
              pathLength: "100",
            },
            children: [
              // Path 1
              {
                tag: "path",
                props: {
                  d: "M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10",
                },
              },
              // Path 2
              {
                tag: "path",
                props: {
                  d: "M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10",
                },
              },
              // Path 3
              {
                tag: "path",
                props: {
                  d: "M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10",
                },
              },
              // Path 4
              {
                tag: "path",
                props: {
                  d: "M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10",
                },
              },
              // Animation for paths
              {
                tag: "animate",
                props: {
                  attributeName: "stroke-dashoffset",
                  from: "100",
                  to: "0",
                  dur: "1s",
                  fill: "freeze",
                  calcMode: "spline",
                  keySplines: "0.25,0.1,0.5,1",
                  keyTimes: "0; 1",
                },
              },
            ],
          },

          // Animated Light Circles
          {
            tag: "g",
            props: {
              mask: "url(#db-mask-1)",
            },
            children: [
              {
                tag: "circle",
                props: {
                  className: "database db-light-1",
                  cx: "0",
                  cy: "0",
                  r: "12",
                  fill: "url(#db-blue-grad)",
                },
              },
            ],
          },
          {
            tag: "g",
            props: {
              mask: "url(#db-mask-2)",
            },
            children: [
              {
                tag: "circle",
                props: {
                  className: "database db-light-2",
                  cx: "0",
                  cy: "0",
                  r: "12",
                  fill: "url(#db-blue-grad)",
                },
              },
            ],
          },
          {
            tag: "g",
            props: {
              mask: "url(#db-mask-3)",
            },
            children: [
              {
                tag: "circle",
                props: {
                  className: "database db-light-3",
                  cx: "0",
                  cy: "0",
                  r: "12",
                  fill: "url(#db-blue-grad)",
                },
              },
            ],
          },
          {
            tag: "g",
            props: {
              mask: "url(#db-mask-4)",
            },
            children: [
              {
                tag: "circle",
                props: {
                  className: "database db-light-4",
                  cx: "0",
                  cy: "0",
                  r: "12",
                  fill: "url(#db-blue-grad)",
                },
              },
            ],
          },

          // Buttons Group - THEME AWARE
          {
            tag: "g",
            children: [
              // First Button (GET) - Theme Aware
              {
                tag: "g",
                children: [
                  {
                    tag: "rect",
                    props: {
                      fill: "hsl(var(--background))",
                      stroke: "hsl(var(--border))",
                      strokeWidth: "0.4",
                      x: "14",
                      y: "5",
                      width: "34",
                      height: "10",
                      rx: "5",
                    },
                  },
                  {
                    tag: "g",
                    props: {
                      transform: "translate(18, 7.5)",
                    },
                    children: [
                      {
                        tag: "ellipse",
                        props: {
                          cx: "2.5",
                          cy: "1",
                          rx: "2",
                          ry: "0.6",
                          fill: "none",
                          stroke: "hsl(var(--foreground))",
                          strokeWidth: "0.3",
                        },
                      },
                      {
                        tag: "path",
                        props: {
                          d: "M0.5 1v3.8c0 0.6 0.9 1.2 2 1.2s2-0.6 2-1.2V1",
                          fill: "none",
                          stroke: "hsl(var(--foreground))",
                          strokeWidth: "0.3",
                        },
                      },
                      {
                        tag: "path",
                        props: {
                          d: "M0.5 3c0 0.6 0.9 1.2 2 1.2s2-0.6 2-1.2",
                          fill: "none",
                          stroke: "hsl(var(--foreground))",
                          strokeWidth: "0.3",
                        },
                      },
                    ],
                  },
                  {
                    tag: "text",
                    props: {
                      x: "28",
                      y: "12",
                      fill: "hsl(var(--foreground))",
                      stroke: "none",
                      fontSize: "5",
                      fontWeight: "500",
                    },
                    children: [{ text: "{{badgeTexts.first}}" }],
                  },
                ],
              },

              // Second Button (POST) - Theme Aware
              {
                tag: "g",
                children: [
                  {
                    tag: "rect",
                    props: {
                      fill: "hsl(var(--background))",
                      stroke: "hsl(var(--border))",
                      strokeWidth: "0.4",
                      x: "60",
                      y: "5",
                      width: "34",
                      height: "10",
                      rx: "5",
                    },
                  },
                  {
                    tag: "g",
                    props: {
                      transform: "translate(64, 7.5)",
                    },
                    children: [
                      {
                        tag: "ellipse",
                        props: {
                          cx: "2.5",
                          cy: "1",
                          rx: "2",
                          ry: "0.6",
                          fill: "none",
                          stroke: "hsl(var(--foreground))",
                          strokeWidth: "0.3",
                        },
                      },
                      {
                        tag: "path",
                        props: {
                          d: "M0.5 1v3.8c0 0.6 0.9 1.2 2 1.2s2-0.6 2-1.2V1",
                          fill: "none",
                          stroke: "hsl(var(--foreground))",
                          strokeWidth: "0.3",
                        },
                      },
                      {
                        tag: "path",
                        props: {
                          d: "M0.5 3c0 0.6 0.9 1.2 2 1.2s2-0.6 2-1.2",
                          fill: "none",
                          stroke: "hsl(var(--foreground))",
                          strokeWidth: "0.3",
                        },
                      },
                    ],
                  },
                  {
                    tag: "text",
                    props: {
                      x: "74",
                      y: "12",
                      fill: "hsl(var(--foreground))",
                      stroke: "none",
                      fontSize: "5",
                      fontWeight: "500",
                    },
                    children: [{ text: "{{badgeTexts.second}}" }],
                  },
                ],
              },

              // Third Button (PUT) - Theme Aware
              {
                tag: "g",
                children: [
                  {
                    tag: "rect",
                    props: {
                      fill: "hsl(var(--background))",
                      stroke: "hsl(var(--border))",
                      strokeWidth: "0.4",
                      x: "108",
                      y: "5",
                      width: "34",
                      height: "10",
                      rx: "5",
                    },
                  },
                  {
                    tag: "g",
                    props: {
                      transform: "translate(112, 7.5)",
                    },
                    children: [
                      {
                        tag: "ellipse",
                        props: {
                          cx: "2.5",
                          cy: "1",
                          rx: "2",
                          ry: "0.6",
                          fill: "none",
                          stroke: "hsl(var(--foreground))",
                          strokeWidth: "0.3",
                        },
                      },
                      {
                        tag: "path",
                        props: {
                          d: "M0.5 1v3.8c0 0.6 0.9 1.2 2 1.2s2-0.6 2-1.2V1",
                          fill: "none",
                          stroke: "hsl(var(--foreground))",
                          strokeWidth: "0.3",
                        },
                      },
                      {
                        tag: "path",
                        props: {
                          d: "M0.5 3c0 0.6 0.9 1.2 2 1.2s2-0.6 2-1.2",
                          fill: "none",
                          stroke: "hsl(var(--foreground))",
                          strokeWidth: "0.3",
                        },
                      },
                    ],
                  },
                  {
                    tag: "text",
                    props: {
                      x: "122",
                      y: "12",
                      fill: "hsl(var(--foreground))",
                      stroke: "none",
                      fontSize: "5",
                      fontWeight: "500",
                    },
                    children: [{ text: "{{badgeTexts.third}}" }],
                  },
                ],
              },

              // Fourth Button (DELETE) - Theme Aware
              {
                tag: "g",
                children: [
                  {
                    tag: "rect",
                    props: {
                      fill: "hsl(var(--background))",
                      stroke: "hsl(var(--border))",
                      strokeWidth: "0.4",
                      x: "150",
                      y: "5",
                      width: "40",
                      height: "10",
                      rx: "5",
                    },
                  },
                  {
                    tag: "g",
                    props: {
                      transform: "translate(154, 7.5)",
                    },
                    children: [
                      {
                        tag: "ellipse",
                        props: {
                          cx: "2.5",
                          cy: "1",
                          rx: "2",
                          ry: "0.6",
                          fill: "none",
                          stroke: "hsl(var(--foreground))",
                          strokeWidth: "0.3",
                        },
                      },
                      {
                        tag: "path",
                        props: {
                          d: "M0.5 1v3.8c0 0.6 0.9 1.2 2 1.2s2-0.6 2-1.2V1",
                          fill: "none",
                          stroke: "hsl(var(--foreground))",
                          strokeWidth: "0.3",
                        },
                      },
                      {
                        tag: "path",
                        props: {
                          d: "M0.5 3c0 0.6 0.9 1.2 2 1.2s2-0.6 2-1.2",
                          fill: "none",
                          stroke: "hsl(var(--foreground))",
                          strokeWidth: "0.3",
                        },
                      },
                    ],
                  },
                  {
                    tag: "text",
                    props: {
                      x: "165",
                      y: "12",
                      fill: "hsl(var(--foreground))",
                      stroke: "none",
                      fontSize: "5",
                      fontWeight: "500",
                    },
                    children: [{ text: "{{badgeTexts.fourth}}" }],
                  },
                ],
              },
            ],
          },

          // Definitions (masks, gradients)
          {
            tag: "defs",
            children: [
              // Masks
              {
                tag: "mask",
                props: { id: "db-mask-1" },
                children: [
                  {
                    tag: "path",
                    props: {
                      d: "M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10",
                      strokeWidth: "0.5",
                      stroke: "white",
                    },
                  },
                ],
              },
              {
                tag: "mask",
                props: { id: "db-mask-2" },
                children: [
                  {
                    tag: "path",
                    props: {
                      d: "M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10",
                      strokeWidth: "0.5",
                      stroke: "white",
                    },
                  },
                ],
              },
              {
                tag: "mask",
                props: { id: "db-mask-3" },
                children: [
                  {
                    tag: "path",
                    props: {
                      d: "M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10",
                      strokeWidth: "0.5",
                      stroke: "white",
                    },
                  },
                ],
              },
              {
                tag: "mask",
                props: { id: "db-mask-4" },
                children: [
                  {
                    tag: "path",
                    props: {
                      d: "M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10",
                      strokeWidth: "0.5",
                      stroke: "white",
                    },
                  },
                ],
              },

              // Blue Gradient
              {
                tag: "radialGradient",
                props: { id: "db-blue-grad", fx: "1" },
                children: [
                  { tag: "stop", props: { offset: "0%", stopColor: "{{lightColor}}" } },
                  { tag: "stop", props: { offset: "100%", stopColor: "transparent" } },
                ],
              },
            ],
          },
        ],
      },

      // Main Box Container
      {
        tag: "div",
        props: {
          className: "absolute bottom-10 flex w-full flex-col items-center",
        },
        children: [
          // Bottom Shadow
          {
            tag: "div",
            props: {
              className: "absolute -bottom-4 h-[100px] w-[62%] rounded-lg bg-accent/30",
            },
          },

          // Box Title - Theme Aware
          {
            tag: "div",
            props: {
              className:
                "absolute -top-3 z-20 flex items-center justify-center rounded-lg border border-border bg-card px-2 py-1 sm:-top-4 sm:py-1.5 text-card-foreground",
            },
            children: [
              {
                type: "Icon",
                props: {
                  name: "sparkles",
                  className: "size-3",
                },
              },
              {
                tag: "span",
                props: {
                  className: "ml-2 text-[10px]",
                },
                children: [{ text: "{{title}}" }],
              },
            ],
          },

          // Box Outer Circle - Theme Aware
          {
            tag: "div",
            props: {
              className:
                "absolute -bottom-8 z-30 grid h-[60px] w-[60px] place-items-center rounded-full border-t border-border bg-card font-semibold text-xs text-card-foreground",
            },
            children: [{ text: "{{circleText}}" }],
          },

          // Box Content
          {
            tag: "div",
            props: {
              className:
                "relative z-10 flex h-[150px] w-full items-center justify-center overflow-hidden rounded-lg border border-border bg-background shadow-md",
            },
            children: [
              // Left Badge - Theme Aware
              {
                tag: "div",
                props: {
                  className:
                    "absolute bottom-8 left-12 z-10 h-7 rounded-full bg-card px-3 text-xs border border-border flex items-center gap-2 text-card-foreground",
                },
                children: [
                  {
                    type: "Icon",
                    props: {
                      name: "heart-handshake",
                      className: "size-4",
                    },
                  },
                  {
                    tag: "span",
                    children: [{ text: "{{buttonTexts.first}}" }],
                  },
                ],
              },

              // Right Badge - Theme Aware
              {
                tag: "div",
                props: {
                  className:
                    "absolute right-16 z-10 hidden h-7 rounded-full bg-card px-3 text-xs sm:flex border border-border items-center gap-2 text-card-foreground",
                },
                children: [
                  {
                    type: "Icon",
                    props: {
                      name: "folder",
                      className: "size-4",
                    },
                  },
                  {
                    tag: "span",
                    children: [{ text: "{{buttonTexts.second}}" }],
                  },
                ],
              },

              // Animated Circles with Framer Motion
              {
                type: "motion.div",
                props: {
                  className: "absolute -bottom-14 h-[100px] w-[100px] rounded-full border-t border-border bg-accent/5",
                  animate: {
                    scale: [0.98, 1.02, 0.98, 1, 1, 1, 1, 1, 1],
                  },
                  transition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                },
              },

              {
                type: "motion.div",
                props: {
                  className: "absolute -bottom-20 h-[145px] w-[145px] rounded-full border-t border-border bg-accent/5",
                  animate: {
                    scale: [1, 1, 1, 0.98, 1.02, 0.98, 1, 1, 1],
                  },
                  transition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                },
              },

              {
                type: "motion.div",
                props: {
                  className:
                    "absolute -bottom-[100px] h-[190px] w-[190px] rounded-full border-t border-border bg-accent/5",
                  animate: {
                    scale: [1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1, 1],
                  },
                  transition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                },
              },

              {
                type: "motion.div",
                props: {
                  className:
                    "absolute -bottom-[120px] h-[235px] w-[235px] rounded-full border-t border-border bg-accent/5",
                  animate: {
                    scale: [1, 1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1],
                  },
                  transition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                },
              },
            ],
          },
        ],
      },
    ],
  },
}

// Simplified version for testing - also theme aware
export const databaseRestApiSimpleTemplate: RenderLayout = {
  id: "database-rest-api-simple",
  title: "Database REST API Simple",
  description: "Simplified version without complex animations for testing - theme aware",
  root: {
    tag: "div",
    props: {
      className: "p-8 rounded-xl bg-accent/20 flex justify-center",
    },
    children: [
      {
        tag: "div",
        props: {
          className: "relative flex h-[300px] w-full max-w-[400px] flex-col items-center",
        },
        children: [
          // Simple SVG
          {
            type: "svg",
            props: {
              width: "100%",
              height: "200",
              viewBox: "0 0 200 100",
            },
            children: [
              // Simple paths
              {
                tag: "g",
                props: {
                  stroke: "hsl(var(--border))",
                  fill: "none",
                  strokeWidth: "1",
                },
                children: [
                  {
                    tag: "path",
                    props: {
                      d: "M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10",
                    },
                  },
                  {
                    tag: "path",
                    props: {
                      d: "M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10",
                    },
                  },
                ],
              },

              // Simple buttons - Theme Aware
              {
                tag: "rect",
                props: {
                  fill: "hsl(var(--background))",
                  stroke: "hsl(var(--border))",
                  strokeWidth: "0.4",
                  x: "14",
                  y: "5",
                  width: "34",
                  height: "10",
                  rx: "5",
                },
              },
              {
                tag: "text",
                props: {
                  x: "31",
                  y: "12",
                  fill: "hsl(var(--foreground))",
                  fontSize: "5",
                  fontWeight: "500",
                  textAnchor: "middle",
                },
                children: [{ text: "GET" }],
              },
            ],
          },

          // Simple main box - Theme Aware
          {
            tag: "div",
            props: {
              className:
                "absolute bottom-0 flex h-[100px] w-full items-center justify-center rounded-lg border border-border bg-background shadow-md",
            },
            children: [
              {
                tag: "div",
                props: {
                  className: "flex items-center gap-2",
                },
                children: [
                  {
                    type: "Icon",
                    props: {
                      name: "database",
                      className: "size-6 text-foreground",
                    },
                  },
                  {
                    tag: "span",
                    props: {
                      className: "text-lg font-semibold text-foreground",
                    },
                    children: [{ text: "REST API" }],
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
