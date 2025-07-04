import type { RenderLayout } from "@/types/render-schema"

export const cpuArchitectureTemplate: RenderLayout = {
  id: "cpu-architecture",
  title: "CPU Architecture Diagram",
  description: "Animated CPU architecture with flowing data paths and glowing effects",
  styles: `
    .cpu-architecture {
      offset-anchor: 10px 0px;
      animation: animation-path;
      animation-iteration-count: infinite;
      animation-timing-function: cubic-bezier(0.75, -0.01, 0, 0.99);
    }

    .cpu-line-1 {
      offset-path: path("M 10 20 h 79.5 q 5 0 5 5 v 30");
      animation-duration: 5s;
      animation-delay: 1s;
    }

    .cpu-line-2 {
      offset-path: path("M 180 10 h -69.7 q -5 0 -5 5 v 40");
      animation-delay: 6s;
      animation-duration: 2s;
    }

    .cpu-line-3 {
      offset-path: path("M 130 20 v 21.8 q 0 5 -5 5 h -25");
      animation-delay: 4s;
      animation-duration: 6s;
    }

    .cpu-line-4 {
      offset-path: path("M 170 80 v -21.8 q 0 -5 -5 -5 h -65");
      animation-delay: 3s;
      animation-duration: 3s;
    }

    .cpu-line-5 {
      offset-path: path("M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -35");
      animation-delay: 9s;
      animation-duration: 4s;
    }

    .cpu-line-6 {
      offset-path: path("M 94.8 95 v -46");
      animation-delay: 3s;
      animation-duration: 7s;
    }

    .cpu-line-7 {
      offset-path: path("M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 28");
      animation-delay: 4s;
      animation-duration: 4s;
    }

    .cpu-line-8 {
      offset-path: path("M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 35");
      animation-delay: 3s;
      animation-duration: 3s;
    }

    @keyframes animation-path {
      0% {
        offset-distance: 0%;
      }
      100% {
        offset-distance: 100%;
      }
    }
  `,
  root: {
    tag: "div",
    props: {
      className: "p-4 rounded-xl bg-accent/20 flex justify-center",
    },
    children: [
      {
        type: "svg",
        props: {
          className: "text-muted",
          width: "100%",
          height: "100%",
          viewBox: "0 0 200 100",
        },
        children: [
          // Paths Group
          {
            tag: "g",
            props: {
              stroke: "currentColor",
              fill: "none",
              strokeWidth: "0.3",
              strokeDasharray: "100 100",
              pathLength: "100",
              markerStart: "url(#cpu-circle-marker)",
            },
            children: [
              // Path 1
              {
                tag: "path",
                props: {
                  strokeDasharray: "100 100",
                  pathLength: "100",
                  d: "M 10 20 h 79.5 q 5 0 5 5 v 30",
                },
              },
              // Path 2
              {
                tag: "path",
                props: {
                  strokeDasharray: "100 100",
                  pathLength: "100",
                  d: "M 180 10 h -69.7 q -5 0 -5 5 v 30",
                },
              },
              // Path 3
              {
                tag: "path",
                props: {
                  d: "M 130 20 v 21.8 q 0 5 -5 5 h -10",
                },
              },
              // Path 4
              {
                tag: "path",
                props: {
                  d: "M 170 80 v -21.8 q 0 -5 -5 -5 h -50",
                },
              },
              // Path 5
              {
                tag: "path",
                props: {
                  strokeDasharray: "100 100",
                  pathLength: "100",
                  d: "M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20",
                },
              },
              // Path 6
              {
                tag: "path",
                props: {
                  d: "M 94.8 95 v -36",
                },
              },
              // Path 7
              {
                tag: "path",
                props: {
                  d: "M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14",
                },
              },
              // Path 8
              {
                tag: "path",
                props: {
                  d: "M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20",
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
          // Blue Light
          {
            tag: "g",
            props: {
              mask: "url(#cpu-mask-1)",
            },
            children: [
              {
                tag: "circle",
                props: {
                  className: "cpu-architecture cpu-line-1",
                  cx: "0",
                  cy: "0",
                  r: "8",
                  fill: "url(#cpu-blue-grad)",
                },
              },
            ],
          },

          // Yellow Light
          {
            tag: "g",
            props: {
              mask: "url(#cpu-mask-2)",
            },
            children: [
              {
                tag: "circle",
                props: {
                  className: "cpu-architecture cpu-line-2",
                  cx: "0",
                  cy: "0",
                  r: "8",
                  fill: "url(#cpu-yellow-grad)",
                },
              },
            ],
          },

          // Pinkish Light
          {
            tag: "g",
            props: {
              mask: "url(#cpu-mask-3)",
            },
            children: [
              {
                tag: "circle",
                props: {
                  className: "cpu-architecture cpu-line-3",
                  cx: "0",
                  cy: "0",
                  r: "8",
                  fill: "url(#cpu-pinkish-grad)",
                },
              },
            ],
          },

          // White Light
          {
            tag: "g",
            props: {
              mask: "url(#cpu-mask-4)",
            },
            children: [
              {
                tag: "circle",
                props: {
                  className: "cpu-architecture cpu-line-4",
                  cx: "0",
                  cy: "0",
                  r: "8",
                  fill: "url(#cpu-white-grad)",
                },
              },
            ],
          },

          // Green Light
          {
            tag: "g",
            props: {
              mask: "url(#cpu-mask-5)",
            },
            children: [
              {
                tag: "circle",
                props: {
                  className: "cpu-architecture cpu-line-5",
                  cx: "0",
                  cy: "0",
                  r: "8",
                  fill: "url(#cpu-green-grad)",
                },
              },
            ],
          },

          // Orange Light
          {
            tag: "g",
            props: {
              mask: "url(#cpu-mask-6)",
            },
            children: [
              {
                tag: "circle",
                props: {
                  className: "cpu-architecture cpu-line-6",
                  cx: "0",
                  cy: "0",
                  r: "8",
                  fill: "url(#cpu-orange-grad)",
                },
              },
            ],
          },

          // Cyan Light
          {
            tag: "g",
            props: {
              mask: "url(#cpu-mask-7)",
            },
            children: [
              {
                tag: "circle",
                props: {
                  className: "cpu-architecture cpu-line-7",
                  cx: "0",
                  cy: "0",
                  r: "8",
                  fill: "url(#cpu-cyan-grad)",
                },
              },
            ],
          },

          // Rose Light
          {
            tag: "g",
            props: {
              mask: "url(#cpu-mask-8)",
            },
            children: [
              {
                tag: "circle",
                props: {
                  className: "cpu-architecture cpu-line-8",
                  cx: "0",
                  cy: "0",
                  r: "8",
                  fill: "url(#cpu-rose-grad)",
                },
              },
            ],
          },

          // CPU Box Group
          {
            tag: "g",
            children: [
              // CPU Connections
              {
                tag: "g",
                props: {
                  fill: "url(#cpu-connection-gradient)",
                },
                children: [
                  {
                    tag: "rect",
                    props: {
                      x: "93",
                      y: "37",
                      width: "2.5",
                      height: "5",
                      rx: "0.7",
                    },
                  },
                  {
                    tag: "rect",
                    props: {
                      x: "104",
                      y: "37",
                      width: "2.5",
                      height: "5",
                      rx: "0.7",
                    },
                  },
                  {
                    tag: "rect",
                    props: {
                      x: "116.3",
                      y: "44",
                      width: "2.5",
                      height: "5",
                      rx: "0.7",
                      transform: "rotate(90 116.25 45.5)",
                    },
                  },
                  {
                    tag: "rect",
                    props: {
                      x: "122.8",
                      y: "44",
                      width: "2.5",
                      height: "5",
                      rx: "0.7",
                      transform: "rotate(90 116.25 45.5)",
                    },
                  },
                  {
                    tag: "rect",
                    props: {
                      x: "104",
                      y: "16",
                      width: "2.5",
                      height: "5",
                      rx: "0.7",
                      transform: "rotate(180 105.25 39.5)",
                    },
                  },
                  {
                    tag: "rect",
                    props: {
                      x: "114.5",
                      y: "16",
                      width: "2.5",
                      height: "5",
                      rx: "0.7",
                      transform: "rotate(180 105.25 39.5)",
                    },
                  },
                  {
                    tag: "rect",
                    props: {
                      x: "80",
                      y: "-13.6",
                      width: "2.5",
                      height: "5",
                      rx: "0.7",
                      transform: "rotate(270 115.25 19.5)",
                    },
                  },
                  {
                    tag: "rect",
                    props: {
                      x: "87",
                      y: "-13.6",
                      width: "2.5",
                      height: "5",
                      rx: "0.7",
                      transform: "rotate(270 115.25 19.5)",
                    },
                  },
                ],
              },

              // Main CPU Rectangle
              {
                tag: "rect",
                props: {
                  x: "85",
                  y: "40",
                  width: "30",
                  height: "20",
                  rx: "2",
                  fill: "#181818",
                  filter: "url(#cpu-light-shadow)",
                },
              },

              // CPU Text
              {
                tag: "text",
                props: {
                  x: "92",
                  y: "52.5",
                  fontSize: "7",
                  fill: "url(#cpu-text-gradient)",
                  fontWeight: "600",
                  letterSpacing: "0.05em",
                },
                children: [{ text: "CPU" }],
              },
            ],
          },

          // Definitions (masks, gradients, filters)
          {
            tag: "defs",
            children: [
              // Masks
              {
                tag: "mask",
                props: { id: "cpu-mask-1" },
                children: [
                  {
                    tag: "path",
                    props: {
                      d: "M 10 20 h 79.5 q 5 0 5 5 v 24",
                      strokeWidth: "0.5",
                      stroke: "white",
                    },
                  },
                ],
              },
              {
                tag: "mask",
                props: { id: "cpu-mask-2" },
                children: [
                  {
                    tag: "path",
                    props: {
                      d: "M 180 10 h -69.7 q -5 0 -5 5 v 24",
                      strokeWidth: "0.5",
                      stroke: "white",
                    },
                  },
                ],
              },
              {
                tag: "mask",
                props: { id: "cpu-mask-3" },
                children: [
                  {
                    tag: "path",
                    props: {
                      d: "M 130 20 v 21.8 q 0 5 -5 5 h -10",
                      strokeWidth: "0.5",
                      stroke: "white",
                    },
                  },
                ],
              },
              {
                tag: "mask",
                props: { id: "cpu-mask-4" },
                children: [
                  {
                    tag: "path",
                    props: {
                      d: "M 170 80 v -21.8 q 0 -5 -5 -5 h -50",
                      strokeWidth: "0.5",
                      stroke: "white",
                    },
                  },
                ],
              },
              {
                tag: "mask",
                props: { id: "cpu-mask-5" },
                children: [
                  {
                    tag: "path",
                    props: {
                      d: "M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20",
                      strokeWidth: "0.5",
                      stroke: "white",
                    },
                  },
                ],
              },
              {
                tag: "mask",
                props: { id: "cpu-mask-6" },
                children: [
                  {
                    tag: "path",
                    props: {
                      d: "M 94.8 95 v -36",
                      strokeWidth: "0.5",
                      stroke: "white",
                    },
                  },
                ],
              },
              {
                tag: "mask",
                props: { id: "cpu-mask-7" },
                children: [
                  {
                    tag: "path",
                    props: {
                      d: "M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14",
                      strokeWidth: "0.5",
                      stroke: "white",
                    },
                  },
                ],
              },
              {
                tag: "mask",
                props: { id: "cpu-mask-8" },
                children: [
                  {
                    tag: "path",
                    props: {
                      d: "M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20",
                      strokeWidth: "0.5",
                      stroke: "white",
                    },
                  },
                ],
              },

              // Gradients
              {
                tag: "radialGradient",
                props: { id: "cpu-blue-grad", fx: "1" },
                children: [
                  { tag: "stop", props: { offset: "0%", stopColor: "#00E8ED" } },
                  { tag: "stop", props: { offset: "50%", stopColor: "#08F" } },
                  { tag: "stop", props: { offset: "100%", stopColor: "transparent" } },
                ],
              },
              {
                tag: "radialGradient",
                props: { id: "cpu-yellow-grad", fx: "1" },
                children: [
                  { tag: "stop", props: { offset: "0%", stopColor: "#FFD800" } },
                  { tag: "stop", props: { offset: "50%", stopColor: "#FFD800" } },
                  { tag: "stop", props: { offset: "100%", stopColor: "transparent" } },
                ],
              },
              {
                tag: "radialGradient",
                props: { id: "cpu-pinkish-grad", fx: "1" },
                children: [
                  { tag: "stop", props: { offset: "0%", stopColor: "#830CD1" } },
                  { tag: "stop", props: { offset: "50%", stopColor: "#FF008B" } },
                  { tag: "stop", props: { offset: "100%", stopColor: "transparent" } },
                ],
              },
              {
                tag: "radialGradient",
                props: { id: "cpu-white-grad", fx: "1" },
                children: [
                  { tag: "stop", props: { offset: "0%", stopColor: "white" } },
                  { tag: "stop", props: { offset: "100%", stopColor: "transparent" } },
                ],
              },
              {
                tag: "radialGradient",
                props: { id: "cpu-green-grad", fx: "1" },
                children: [
                  { tag: "stop", props: { offset: "0%", stopColor: "#22c55e" } },
                  { tag: "stop", props: { offset: "100%", stopColor: "transparent" } },
                ],
              },
              {
                tag: "radialGradient",
                props: { id: "cpu-orange-grad", fx: "1" },
                children: [
                  { tag: "stop", props: { offset: "0%", stopColor: "#f97316" } },
                  { tag: "stop", props: { offset: "100%", stopColor: "transparent" } },
                ],
              },
              {
                tag: "radialGradient",
                props: { id: "cpu-cyan-grad", fx: "1" },
                children: [
                  { tag: "stop", props: { offset: "0%", stopColor: "#06b6d4" } },
                  { tag: "stop", props: { offset: "100%", stopColor: "transparent" } },
                ],
              },
              {
                tag: "radialGradient",
                props: { id: "cpu-rose-grad", fx: "1" },
                children: [
                  { tag: "stop", props: { offset: "0%", stopColor: "#f43f5e" } },
                  { tag: "stop", props: { offset: "100%", stopColor: "transparent" } },
                ],
              },

              // Filter for shadow
              {
                tag: "filter",
                props: {
                  id: "cpu-light-shadow",
                  x: "-50%",
                  y: "-50%",
                  width: "200%",
                  height: "200%",
                },
                children: [
                  {
                    tag: "feDropShadow",
                    props: {
                      dx: "1.5",
                      dy: "1.5",
                      stdDeviation: "1",
                      floodColor: "black",
                      floodOpacity: "0.1",
                    },
                  },
                ],
              },

              // Marker for line endpoints
              {
                tag: "marker",
                props: {
                  id: "cpu-circle-marker",
                  viewBox: "0 0 10 10",
                  refX: "5",
                  refY: "5",
                  markerWidth: "18",
                  markerHeight: "18",
                },
                children: [
                  {
                    tag: "circle",
                    props: {
                      id: "innerMarkerCircle",
                      cx: "5",
                      cy: "5",
                      r: "2",
                      fill: "black",
                      stroke: "#232323",
                      strokeWidth: "0.5",
                    },
                    children: [
                      {
                        tag: "animate",
                        props: {
                          attributeName: "r",
                          values: "0; 3; 2",
                          dur: "0.5s",
                        },
                      },
                    ],
                  },
                ],
              },

              // CPU connection gradient
              {
                tag: "linearGradient",
                props: {
                  id: "cpu-connection-gradient",
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "1",
                },
                children: [
                  { tag: "stop", props: { offset: "0%", stopColor: "#4F4F4F" } },
                  { tag: "stop", props: { offset: "60%", stopColor: "#121214" } },
                ],
              },

              // CPU Text Gradient with animation
              {
                tag: "linearGradient",
                props: { id: "cpu-text-gradient", x1: "0", y1: "0", x2: "1", y2: "0" },
                children: [
                  {
                    tag: "stop",
                    props: { offset: "0%", stopColor: "#666666" },
                    children: [
                      {
                        tag: "animate",
                        props: {
                          attributeName: "offset",
                          values: "-2; -1; 0",
                          dur: "5s",
                          repeatCount: "indefinite",
                          calcMode: "spline",
                          keyTimes: "0; 0.5; 1",
                          keySplines: "0.4 0 0.2 1; 0.4 0 0.2 1",
                        },
                      },
                    ],
                  },
                  {
                    tag: "stop",
                    props: { offset: "25%", stopColor: "white" },
                    children: [
                      {
                        tag: "animate",
                        props: {
                          attributeName: "offset",
                          values: "-1; 0; 1",
                          dur: "5s",
                          repeatCount: "indefinite",
                          calcMode: "spline",
                          keyTimes: "0; 0.5; 1",
                          keySplines: "0.4 0 0.2 1; 0.4 0 0.2 1",
                        },
                      },
                    ],
                  },
                  {
                    tag: "stop",
                    props: { offset: "50%", stopColor: "#666666" },
                    children: [
                      {
                        tag: "animate",
                        props: {
                          attributeName: "offset",
                          values: "0; 1; 2",
                          dur: "5s",
                          repeatCount: "indefinite",
                          calcMode: "spline",
                          keyTimes: "0; 0.5; 1",
                          keySplines: "0.4 0 0.2 1; 0.4 0 0.2 1",
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
    ],
  },
}

// Simplified version for testing
export const cpuArchitectureSimpleTemplate: RenderLayout = {
  id: "cpu-architecture-simple",
  title: "CPU Architecture Simple",
  description: "Simplified version without complex animations for testing",
  root: {
    tag: "div",
    props: {
      className: "p-8 rounded-xl bg-gray-100 flex justify-center",
    },
    children: [
      {
        type: "svg",
        props: {
          className: "text-gray-600",
          width: "300",
          height: "150",
          viewBox: "0 0 200 100",
        },
        children: [
          // Simple paths without animation
          {
            tag: "g",
            props: {
              stroke: "currentColor",
              fill: "none",
              strokeWidth: "1",
            },
            children: [
              {
                tag: "path",
                props: {
                  d: "M 10 20 h 79.5 q 5 0 5 5 v 30",
                  stroke: "#3B82F6",
                },
              },
              {
                tag: "path",
                props: {
                  d: "M 180 10 h -69.7 q -5 0 -5 5 v 30",
                  stroke: "#EF4444",
                },
              },
            ],
          },

          // CPU Box
          {
            tag: "rect",
            props: {
              x: "85",
              y: "40",
              width: "30",
              height: "20",
              rx: "2",
              fill: "#1F2937",
            },
          },

          // CPU Text
          {
            tag: "text",
            props: {
              x: "100",
              y: "52",
              fontSize: "8",
              fill: "white",
              fontWeight: "600",
              textAnchor: "middle",
            },
            children: [{ text: "CPU" }],
          },
        ],
      },
    ],
  },
}
