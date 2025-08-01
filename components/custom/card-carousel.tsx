"use client"

import { useEffect, useState, useRef } from "react"
import { motion, type PanInfo, useMotionValue, useTransform } from "framer-motion"
import { Icon } from "@/components/render-engine/icon-registry"
import type { JSX } from "react/jsx-runtime"

// Interfaces
export interface CarouselItem {
  title: string
  description: string
  id: number
  iconName: string
}

export interface CarouselProps {
  items?: CarouselItem[]
  baseWidth?: number
  autoplay?: boolean
  autoplayDelay?: number
  pauseOnHover?: boolean
  loop?: boolean
  round?: boolean
  className?: string
}

// Constants and Default Items
const DEFAULT_ITEMS: CarouselItem[] = [
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
]

const DRAG_BUFFER = 0
const VELOCITY_THRESHOLD = 500
const GAP = 16
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 }

// Component definition
export function CardCarousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
  className,
}: CarouselProps): JSX.Element {
  const containerPadding = 16
  const itemWidth = baseWidth - containerPadding * 2
  const trackItemOffset = itemWidth + GAP
  const carouselItems = loop ? [...items, items[0]] : items
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const x = useMotionValue(0)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [isResetting, setIsResetting] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const rotateYArray = items.map((_, index) => [
    -(index + 1) * trackItemOffset,
    -index * trackItemOffset,
    -(index - 1) * trackItemOffset,
  ])

  const rotateYTransforms = rotateYArray.map(([start, mid, end]) =>
    useTransform(x, [start, mid, end], [90, 0, -90], { clamp: false }),
  )

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current
      const handleMouseEnter = () => setIsHovered(true)
      const handleMouseLeave = () => setIsHovered(false)
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [pauseOnHover])

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) {
            return prev + 1
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev
          }
          return prev + 1
        })
      }, autoplayDelay)
      return () => clearInterval(timer)
    }
  }, [autoplay, autoplayDelay, isHovered, loop, items.length, carouselItems.length, pauseOnHover])

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true)
      x.set(0)
      setCurrentIndex(0)
      setTimeout(() => setIsResetting(false), 50)
    }
  }

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    const offset = info.offset.x
    const velocity = info.velocity.x
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1)
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1))
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1)
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0))
      }
    }
  }

  const dragProps = loop ? {} : { dragConstraints: { left: -trackItemOffset * (carouselItems.length - 1), right: 0 } }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-4 ${
        round ? "rounded-full border border-border" : "rounded-3xl border border-border bg-card"
      } ${className}`}
      style={{
        width: `${baseWidth}px`,
        ...(round && { height: `${baseWidth}px` }),
      }}
    >
      <motion.div
        className="flex"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const rotateY = rotateYTransforms[index]

          return (
            <motion.div
              key={index}
              className={`relative shrink-0 flex flex-col p-5 ${
                round
                  ? "items-center justify-center text-center bg-card-foreground"
                  : "items-start justify-start bg-card-foreground/5 border border-border rounded-xl"
              } overflow-hidden cursor-grab active:cursor-grabbing`}
              style={{
                width: itemWidth,
                height: round ? itemWidth : "auto",
                minHeight: round ? "auto" : "180px",
                rotateY: rotateY,
                ...(round && { borderRadius: "50%" }),
              }}
              transition={effectiveTransition}
            >
              <div className="mb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-card-foreground">
                  <Icon name={item.iconName} size={18} className="text-background" />
                </span>
              </div>
              <div>
                <div className="mb-1 font-bold text-lg text-card-foreground">{item.title}</div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
      <div className={`flex w-full justify-center ${round ? "absolute z-20 bottom-12 left-1/2 -translate-x-1/2" : ""}`}>
        <div className="mt-4 flex w-[150px] justify-center gap-2 px-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
                currentIndex % items.length === index ? "bg-primary" : "bg-muted-foreground/30"
              }`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1,
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
