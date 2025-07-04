import { GraphicRenderer } from "./graphic-renderer"
import type { GraphicData } from "@/types/graphics"

interface GraphicsGalleryProps {
  graphics: GraphicData[]
  className?: string
}

export function GraphicsGallery({ graphics, className }: GraphicsGalleryProps) {
  return (
    <div
      className={`
      grid gap-6 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-3 
      xl:grid-cols-4
      ${className || ""}
    `}
    >
      {graphics.map((graphic) => (
        <div key={graphic.id} className="flex justify-center">
          <GraphicRenderer data={graphic} />
        </div>
      ))}
    </div>
  )
}
