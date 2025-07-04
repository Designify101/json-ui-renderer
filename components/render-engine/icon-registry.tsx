import type React from "react"
import {
  TrendingUp,
  TrendingDown,
  User,
  Package,
  Briefcase,
  ArrowUpRight,
  Minus,
  Leaf,
  Sparkles,
  HeartHandshake,
  Folder,
  Database,
  FileText,
  Circle,
  Layers,
  Layout,
  Code,
} from "lucide-react"

console.log("🎨 IconRegistry: Initializing icon registry")

interface IconProps {
  name: string
  size?: number | string
  color?: string
  className?: string
  style?: Record<string, any>
}

export function Icon({ name, size = 16, color, className = "", style = {} }: IconProps) {
  console.log("🎨 Icon: Rendering icon")
  console.log("🎨 Icon: Props received:", { name, size, color, className, style })

  const iconProps = {
    size,
    color,
    className,
    style,
  }

  const iconMap: Record<string, React.ComponentType<any>> = {
    // Kebab-case naming (preferred for consistency)
    "trending-up": TrendingUp,
    "trending-down": TrendingDown,
    user: User,
    package: Package,
    briefcase: Briefcase,
    "arrow-up-right": ArrowUpRight,
    minus: Minus,
    leaf: Leaf,
    sparkles: Sparkles,
    "heart-handshake": HeartHandshake,
    folder: Folder,
    database: Database,
    "file-text": FileText,
    circle: Circle,
    layers: Layers,
    layout: Layout,
    code: Code,
    
    // PascalCase aliases for backward compatibility
    TrendingUp: TrendingUp,
    TrendingDown: TrendingDown,
    User: User,
    Package: Package,
    Briefcase: Briefcase,
    ArrowUpRight: ArrowUpRight,
    Minus: Minus,
    Leaf: Leaf,
    Sparkles: Sparkles,
    HeartHandshake: HeartHandshake,
    Folder: Folder,
    Database: Database,
    FileText: FileText,
    Circle: Circle,
    Layers: Layers,
    Layout: Layout,
    Code: Code,
  }

  console.log("🎨 Icon: Available icons:", Object.keys(iconMap))
  console.log("🎨 Icon: Looking for icon:", name)

  const IconComponent = iconMap[name]
  console.log("🎨 Icon: Icon component found:", IconComponent ? "YES" : "NO")

  if (!IconComponent) {
    console.warn(`🎨 Icon: Icon "${name}" not found`)
    return <div className={`w-4 h-4 bg-gray-300 ${className}`} style={style} />
  }

  console.log("🎨 Icon: Rendering icon component:", IconComponent.name || name)
  return <IconComponent {...iconProps} />
}

console.log("🎨 IconRegistry: Icon registry initialization completed")
