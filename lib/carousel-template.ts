import type { RenderLayout } from "@/types/render-schema"

export const cardCarouselTemplate: RenderLayout = {
  id: "card-carousel",
  title: "Card Carousel",
  description: "A 3D carousel component with smooth animations and theme support.",
  root: {
    type: "CardCarousel",
    props: {
      baseWidth: 300,
      autoplay: true,
      autoplayDelay: 3000,
      pauseOnHover: true,
      loop: true,
      round: false,
      items: [
        {
          title: "Text Animations",
          description: "Cool text animations for your projects.",
          id: 1,
          iconName: "file-text",
        },
        {
          title: "Animations",
          description: "Smooth animations for your projects.",
          id: 2,
          iconName: "circle",
        },
        {
          title: "Components",
          description: "Reusable components for your projects.",
          id: 3,
          iconName: "layers",
        },
        {
          title: "Backgrounds",
          description: "Beautiful backgrounds and patterns for your projects.",
          id: 4,
          iconName: "layout",
        },
        {
          title: "Common UI",
          description: "Common UI components are coming soon!",
          id: 5,
          iconName: "code",
        },
      ],
    },
  },
}

export const roundCarouselTemplate: RenderLayout = {
  id: "round-carousel",
  title: "Round Card Carousel",
  description: "A round version of the 3D carousel component with different content.",
  root: {
    type: "CardCarousel",
    props: {
      baseWidth: 300,
      autoplay: true,
      autoplayDelay: 3500, // Slightly different delay for variation
      pauseOnHover: true,
      loop: true,
      round: true,
      items: [
        {
          title: "User Profiles",
          description: "Display user information in a unique way.",
          id: 1,
          iconName: "user",
        },
        {
          title: "Product Showcase",
          description: "Highlight your featured products.",
          id: 2,
          iconName: "package",
        },
        {
          title: "Service Tiers",
          description: "Explain your service offerings clearly.",
          id: 3,
          iconName: "briefcase",
        },
      ],
    },
  },
}
