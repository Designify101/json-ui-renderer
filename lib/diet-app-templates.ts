import type { RenderLayout } from "@/types/render-schema"

// IMPROVED DIET CLUBS INTERFACE - Theme-aware and responsive
export const dietClubsInterface: RenderLayout = {
  id: "diet-clubs-interface",
  title: "Diet Clubs Interface",
  description: "Responsive mobile app interface for diet clubs with proper theme support",
  root: {
    tag: "div",
    props: {
      className: "bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-4 sm:p-6 shadow-lg w-full max-w-md mx-auto transition-all duration-200 hover:shadow-xl h-[500px] sm:h-[550px] flex flex-col",
    },
    children: [
      // Header section with improved spacing and theme support
      {
        tag: "div",
        props: {
          className: "flex items-center justify-between mb-6 flex-shrink-0",
        },
        children: [
          {
            tag: "h1",
            props: {
              className: "text-2xl sm:text-3xl font-bold text-foreground",
            },
            children: [
              {
                text: "Diet Clubs",
              },
            ],
          },
          {
            tag: "div",
            props: {
              className: "w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center shadow-sm hover:bg-muted/80 transition-colors cursor-pointer",
            },
            children: [
              {
                type: "Icon",
                props: {
                  name: "minus",
                  size: 20,
                  className: "text-muted-foreground",
                },
              },
            ],
          },
        ],
      },
      // Main content card with improved theming - flexible height
      {
        tag: "div",
        props: {
          className: "bg-card border border-border rounded-2xl p-4 sm:p-6 shadow-sm flex-1 flex flex-col",
        },
        children: [
          // Weight Loss section
          {
            tag: "div",
            props: {
              className: "flex items-start gap-4 mb-6 group",
            },
            children: [
              {
                tag: "div",
                props: {
                  className: "w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-105",
                },
                children: [
                  {
                    type: "Icon",
                    props: {
                      name: "user",
                      size: 28,
                      className: "text-primary-foreground",
                    },
                  },
                ],
              },
              {
                tag: "div",
                props: {
                  className: "flex-1 min-w-0",
                },
                children: [
                  {
                    tag: "h3",
                    props: {
                      className: "text-lg sm:text-xl font-semibold text-foreground mb-2",
                    },
                    children: [
                      {
                        text: "Weight Loss",
                      },
                    ],
                  },
                  {
                    tag: "p",
                    props: {
                      className: "text-muted-foreground text-sm leading-relaxed",
                    },
                    children: [
                      {
                        text: "Join our supportive community focused on healthy weight management and sustainable lifestyle changes.",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          // Plant-Based section
          {
            tag: "div",
            props: {
              className: "flex items-start gap-4 mb-8 group",
            },
            children: [
              {
                tag: "div",
                props: {
                  className: "w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-600 dark:bg-emerald-500 flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-105",
                },
                children: [
                  {
                    type: "Icon",
                    props: {
                      name: "leaf",
                      size: 28,
                      className: "text-white",
                    },
                  },
                ],
              },
              {
                tag: "div",
                props: {
                  className: "flex-1 min-w-0",
                },
                children: [
                  {
                    tag: "h3",
                    props: {
                      className: "text-lg sm:text-xl font-semibold text-foreground mb-2",
                    },
                    children: [
                      {
                        text: "Plant-Based",
                      },
                    ],
                  },
                  {
                    tag: "p",
                    props: {
                      className: "text-muted-foreground text-sm leading-relaxed",
                    },
                    children: [
                      {
                        text: "A thriving community for vegans, vegetarians, and anyone curious about plant-based nutrition.",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          // Categories section with improved responsive design - at bottom
          {
            tag: "div",
            props: {
              className: "mt-auto",
            },
            children: [
              {
                tag: "h4",
                props: {
                  className: "text-lg font-semibold text-foreground mb-4",
                },
                children: [
                  {
                    text: "Categories",
                  },
                ],
              },
              {
                tag: "div",
                props: {
                  className: "flex flex-wrap gap-2 sm:gap-3",
                },
                children: [
                  {
                    tag: "button",
                    props: {
                      className: "bg-emerald-500 hover:bg-emerald-600 text-white px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-sm",
                    },
                    children: [
                      {
                        text: "Keto Champs",
                      },
                    ],
                  },
                  {
                    tag: "button",
                    props: {
                      className: "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors border border-border",
                    },
                    children: [
                      {
                        text: "Plant-Based Pals",
                      },
                    ],
                  },
                  {
                    tag: "button",
                    props: {
                      className: "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors border border-border",
                    },
                    children: [
                      {
                        text: "Gluten-Free Gang",
                      },
                    ],
                  },
                  {
                    tag: "button",
                    props: {
                      className: "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors border border-border",
                    },
                    children: [
                      {
                        text: "Weight Loss Warriors",
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

// IMPROVED DIET PROGRESS CARD - Matches design inspiration with fixed height
export const dietProgressCard: RenderLayout = {
  id: "diet-progress-card",
  title: "Diet Progress Card",
  description: "Progress card with matching height and proper image display",
  root: {
    tag: "div",
    props: {
      className: "relative w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl h-[500px] sm:h-[550px]",
    },
    children: [
      // Background image with proper aspect ratio - no cropping
      {
        tag: "div",
        props: {
          className: "absolute inset-0",
        },
        children: [
          {
            tag: "img",
            props: {
              src: "/woman-portrait.jpg",
              alt: "Smiling woman representing diet success",
              className: "w-full h-full object-cover object-top",
            },
          },
          // Gradient overlay for better contrast
          {
            tag: "div",
            props: {
              className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent",
            },
          },
        ],
      },
      // Content positioned at bottom with consistent spacing
      {
        tag: "div",
        props: {
          className: "relative z-10 p-4 sm:p-6 h-full flex items-end",
        },
        children: [
          {
            tag: "div",
            props: {
              className: "bg-background/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 w-full shadow-2xl border border-border/20",
            },
            children: [
              // Large percentage with better styling
              {
                tag: "div",
                props: {
                  className: "text-5xl sm:text-6xl font-bold mb-3",
                },
                children: [
                  {
                    tag: "span",
                    props: {
                      className: "bg-gradient-to-r from-emerald-500 to-emerald-400 bg-clip-text text-transparent",
                    },
                    children: [
                      {
                        text: "89%",
                      },
                    ],
                  },
                ],
              },
              // Description with improved styling
              {
                tag: "p",
                props: {
                  className: "text-foreground text-base sm:text-lg font-semibold mb-6 leading-tight",
                },
                children: [
                  {
                    text: "Members Stick with Their Diet Goals",
                  },
                ],
              },
              // Improved progress section
              {
                tag: "div",
                props: {
                  className: "space-y-3",
                },
                children: [
                  // Progress bar container with better design
                  {
                    tag: "div",
                    props: {
                      className: "relative mb-4",
                    },
                    children: [
                      // Background track
                      {
                        tag: "div",
                        props: {
                          className: "w-full h-2.5 bg-muted dark:bg-gray-700 rounded-full",
                        },
                      },
                      // Progress fill
                      {
                        tag: "div",
                        props: {
                          className: "absolute top-0 left-0 h-2.5 bg-emerald-500 rounded-full transition-all duration-1000 ease-out",
                          style: { width: "89%" },
                        },
                      },
                      // Progress indicator dot - positioned at exact end of progress
                      {
                        tag: "div",
                        props: {
                          className: "absolute top-1/2 w-4 h-4 bg-emerald-500 rounded-full shadow-md -translate-y-1/2",
                          style: { left: "calc(89% - 8px)" },
                        },
                      },
                    ],
                  },
                  // Scale labels with proper alignment
                  {
                    tag: "div",
                    props: {
                      className: "flex justify-between text-sm text-muted-foreground font-medium",
                    },
                    children: [
                      {
                        tag: "span",
                        children: [
                          {
                            text: "0",
                          },
                        ],
                      },
                      {
                        tag: "span",
                        children: [
                          {
                            text: "50",
                          },
                        ],
                      },
                      {
                        tag: "span",
                        children: [
                          {
                            text: "100",
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
    ],
  },
}

// IMPROVED COLLECTION - Theme-aware and responsive layout
export const dietAppCollection: RenderLayout = {
  id: "diet-app-collection",
  title: "Diet App Collection",
  description: "Improved responsive diet app components with proper theme support",
  root: {
    tag: "div",
    props: {
      className: "min-h-screen bg-background",
    },
    children: [
      // Header section with better spacing
      {
        tag: "div",
        props: {
          className: "container mx-auto px-4 py-8 sm:py-12",
        },
        children: [
          {
            tag: "div",
            props: {
              className: "text-center mb-8 sm:mb-12",
            },
            children: [
              {
                tag: "h1",
                props: {
                  className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent",
                },
                children: [
                  {
                    text: "Diet App Components",
                  },
                ],
              },
              {
                tag: "p",
                props: {
                  className: "text-muted-foreground text-lg max-w-2xl mx-auto",
                },
                children: [
                  {
                    text: "Modern, responsive, and theme-aware UI components for health and nutrition apps",
                  },
                ],
              },
            ],
          },
          // Responsive grid layout for components
          {
            tag: "div",
            props: {
              className: "grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-start",
            },
            children: [
              // Diet Clubs Interface wrapper
              {
                tag: "div",
                props: {
                  className: "flex flex-col items-center",
                },
                children: [
                  {
                    tag: "div",
                    props: {
                      className: "w-full max-w-md",
                    },
                    children: [dietClubsInterface.root],
                  },
                  {
                    tag: "h3",
                    props: {
                      className: "text-xl font-semibold text-foreground mt-6 text-center",
                    },
                    children: [
                      {
                        text: "Diet Clubs Interface",
                      },
                    ],
                  },
                  {
                    tag: "p",
                    props: {
                      className: "text-muted-foreground text-center mt-2 max-w-sm",
                    },
                    children: [
                      {
                        text: "Community-driven diet tracking with categories and member management",
                      },
                    ],
                  },
                ],
              },
              // Diet Progress Card wrapper
              {
                tag: "div",
                props: {
                  className: "flex flex-col items-center",
                },
                children: [
                  {
                    tag: "div",
                    props: {
                      className: "w-full max-w-md",
            },
            children: [dietProgressCard.root],
                  },
                  {
                    tag: "h3",
                    props: {
                      className: "text-xl font-semibold text-foreground mt-6 text-center",
                    },
                    children: [
                      {
                        text: "Progress Tracking Card",
                      },
                    ],
                  },
                  {
                    tag: "p",
                    props: {
                      className: "text-muted-foreground text-center mt-2 max-w-sm",
                    },
                    children: [
                      {
                        text: "Visual progress indicators with engaging statistics and motivational design",
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
