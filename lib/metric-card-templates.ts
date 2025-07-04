import type { RenderLayout } from "@/types/render-schema"

// DARK METRIC CARD - NO TITLE (First card from image)
export const darkMetricCardNoTitle: RenderLayout = {
  id: "dark-metric-no-title",
  title: "Dark Metric Card - No Title",
  description: "Dark themed metric card without title - exact replica from image",
  root: {
    tag: "div",
    props: {
      className: "bg-gray-900 text-white rounded-3xl p-6 shadow-xl w-full max-w-sm",
    },
    children: [
      {
        tag: "div",
        props: {
          className: "flex items-center justify-between mb-6",
        },
        children: [
          {
            tag: "div",
            props: {
              className: "w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center",
            },
            children: [
              {
                type: "Icon",
                props: {
                  name: "user",
                  size: 20,
                  color: "white",
                },
              },
            ],
          },
          {
            tag: "div",
            props: {
              className: "flex-1 mx-4",
            },
            children: [
              {
                tag: "h3",
                props: {
                  className: "text-white font-medium text-lg",
                },
                children: [
                  {
                    text: "With no title",
                  },
                ],
              },
            ],
          },
          {
            tag: "div",
            props: {
              className: "w-12 h-12 rounded-full bg-white flex items-center justify-center",
            },
            children: [
              {
                type: "Icon",
                props: {
                  name: "arrow-up-right",
                  size: 20,
                  color: "black",
                },
              },
            ],
          },
        ],
      },
      {
        tag: "div",
        props: {
          className: "text-5xl font-bold text-white leading-none mb-3",
        },
        children: [
          {
            text: "975,124",
          },
        ],
      },
      {
        tag: "div",
        props: {
          className: "text-sm font-medium text-green-400",
        },
        children: [
          {
            text: "+42.8% from previous week",
          },
        ],
      },
    ],
  },
}

// DARK METRIC CARD - WITH TITLE (Second card from image)
export const darkMetricCardWithTitle: RenderLayout = {
  id: "dark-metric-with-title",
  title: "Dark Metric Card - With Title",
  description: "Dark themed metric card with title - exact replica from image",
  root: {
    tag: "div",
    props: {
      className: "bg-gray-900 text-white rounded-3xl p-6 shadow-xl w-full max-w-sm",
    },
    children: [
      {
        tag: "div",
        props: {
          className: "flex items-center justify-between mb-6",
        },
        children: [
          {
            tag: "div",
            props: {
              className: "w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center",
            },
            children: [
              {
                type: "Icon",
                props: {
                  name: "package",
                  size: 20,
                  color: "white",
                },
              },
            ],
          },
          {
            tag: "div",
            props: {
              className: "flex-1 mx-4",
            },
            children: [
              {
                tag: "h3",
                props: {
                  className: "text-white font-medium text-lg",
                },
                children: [
                  {
                    text: "With title",
                  },
                ],
              },
            ],
          },
          {
            tag: "div",
            props: {
              className: "w-12 h-12 rounded-full bg-white flex items-center justify-center",
            },
            children: [
              {
                type: "Icon",
                props: {
                  name: "arrow-up-right",
                  size: 20,
                  color: "black",
                },
              },
            ],
          },
        ],
      },
      {
        tag: "div",
        props: {
          className: "text-5xl font-bold text-white leading-none mb-3",
        },
        children: [
          {
            text: "296,241",
          },
        ],
      },
      {
        tag: "div",
        props: {
          className: "text-sm font-medium text-green-400",
        },
        children: [
          {
            text: "+26.3% from previous week",
          },
        ],
      },
    ],
  },
}

// LIME GREEN METRIC CARD - COMPANY (Third card from image)
export const limeMetricCardCompany: RenderLayout = {
  id: "lime-metric-company",
  title: "Lime Metric Card - Company",
  description: "Lime green themed metric card for company data - exact replica from image",
  root: {
    tag: "div",
    props: {
      className: "bg-lime-400 text-gray-900 rounded-3xl p-6 shadow-xl w-full max-w-sm",
    },
    children: [
      {
        tag: "div",
        props: {
          className: "flex items-center justify-between mb-6",
        },
        children: [
          {
            tag: "div",
            props: {
              className: "w-12 h-12 rounded-full bg-lime-300 flex items-center justify-center",
            },
            children: [
              {
                type: "Icon",
                props: {
                  name: "briefcase",
                  size: 20,
                  color: "#374151",
                },
              },
            ],
          },
          {
            tag: "div",
            props: {
              className: "flex-1 mx-4",
            },
            children: [
              {
                tag: "h3",
                props: {
                  className: "text-gray-900 font-medium text-lg",
                },
                children: [
                  {
                    text: "Company",
                  },
                ],
              },
            ],
          },
          {
            tag: "div",
            props: {
              className: "w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center",
            },
            children: [
              {
                type: "Icon",
                props: {
                  name: "arrow-up-right",
                  size: 20,
                  color: "white",
                },
              },
            ],
          },
        ],
      },
      {
        tag: "div",
        props: {
          className: "text-5xl font-bold text-gray-900 leading-none mb-3",
        },
        children: [
          {
            text: "76,314",
          },
        ],
      },
      {
        tag: "div",
        props: {
          className: "text-sm font-medium text-gray-700",
        },
        children: [
          {
            text: "-18.4% from previous week",
          },
        ],
      },
    ],
  },
}

// COLLECTION OF ALL METRIC CARDS
export const metricCardsCollection: RenderLayout = {
  id: "metric-cards-collection",
  title: "Metric Cards Collection",
  description: "All three metric card variations from the design",
  root: {
    tag: "div",
    props: {
      className: "flex flex-col gap-6 items-center p-8 bg-gray-800 min-h-screen",
    },
    children: [
      {
        tag: "h1",
        props: {
          className: "text-3xl font-bold text-white mb-8",
        },
        children: [
          {
            text: "Metric Cards - Exact Design Replica",
          },
        ],
      },
      {
        tag: "div",
        props: {
          className: "flex flex-col gap-6 w-full max-w-sm",
        },
        children: [darkMetricCardNoTitle.root, darkMetricCardWithTitle.root, limeMetricCardCompany.root],
      },
    ],
  },
}
