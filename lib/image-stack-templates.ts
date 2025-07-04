import type { RenderLayout, RenderElement } from "@/types/render-schema"

interface ImageStackConfig {
  id: string
  title: string
  description: string
  images: string[]
  cardWidth: number
  cardHeight: number
  imageClassName: string
  overlapAmount?: number
}

const createImageStackLayout = (config: ImageStackConfig): RenderLayout => {
  const { id, title, description, images, cardWidth, cardHeight, imageClassName, overlapAmount = 40 } = config

  const totalImages = images.length

  const createImageElements = (): RenderElement[] => {
    return images.map((src, i) => {
      const initialRotate = (i - (totalImages - 1) / 2) * 8
      const initialX = (i - (totalImages - 1) / 2) * overlapAmount
      const hoverRotate = (i - (totalImages - 1) / 2) * 4
      const hoverX = (i - (totalImages - 1) / 2) * (overlapAmount - 10)

      return {
        type: "motion.div",
        key: `image-${i}`,
        props: {
          className: "absolute origin-bottom",
          style: {
            width: `${cardWidth}px`,
            height: `${cardHeight}px`,
            zIndex: i,
          },
          variants: {
            initial: {
              rotate: initialRotate,
              x: initialX,
              y: 0,
              transition: { type: "spring", stiffness: 300, damping: 25 },
            },
            hover: {
              rotate: hoverRotate,
              x: hoverX,
              y: -20,
              transition: { type: "spring", stiffness: 300, damping: 25 },
            },
          },
        },
        children: [
          {
            tag: "img",
            props: {
              src: src,
              alt: `Stacked image ${i + 1}`,
              className: `w-full h-full rounded-2xl border-4 border-white dark:border-gray-800 shadow-lg ${imageClassName}`,
            },
          },
        ],
      }
    })
  }

  return {
    id: id,
    title: title,
    description: description,
    root: {
      type: "motion.div",
      props: {
        initial: "initial",
        whileHover: "hover",
        className: "relative flex items-center justify-center",
        style: {
          height: `${cardHeight + 40}px`, // Add buffer for hover effect
          width: `${(totalImages - 1) * overlapAmount + cardWidth}px`,
        },
      },
      children: createImageElements(),
    },
  }
}

// --- Template Definitions ---

const commonImages = [
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=500&auto=format&fit=crop", // Portrait
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=500&auto=format&fit=crop", // Landscape
  "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=500&auto=format&fit=crop", // Landscape
  "https://images.unsplash.com/photo-1576941089067-2de3c901e126?q=80&w=500&auto=format&fit=crop", // Portrait
]

// 1. Portrait Version
export const imageStackPortraitTemplate = createImageStackLayout({
  id: "image-stack-portrait",
  title: "Portrait Image Stack",
  description: "Images are cropped to a portrait aspect ratio.",
  images: commonImages,
  cardWidth: 160,
  cardHeight: 224,
  imageClassName: "object-cover",
})

// 2. Square Version
export const imageStackSquareTemplate = createImageStackLayout({
  id: "image-stack-square",
  title: "Square Image Stack",
  description: "Images are cropped to a square aspect ratio.",
  images: commonImages,
  cardWidth: 180,
  cardHeight: 180,
  imageClassName: "object-cover",
})

// 3. Original Aspect Ratio Version
export const imageStackOriginalTemplate = createImageStackLayout({
  id: "image-stack-original",
  title: "Original Aspect Ratio Stack",
  description: "Images maintain their original aspect ratio within the container.",
  images: commonImages,
  cardWidth: 224,
  cardHeight: 160,
  imageClassName: "object-contain bg-black/5 dark:bg-white/5",
})
