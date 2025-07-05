import Link from "next/link"
import { Button } from "@/components/ui/button"

interface NavigationLink {
  href: string
  label: string
  variant?: "default" | "outline" | "secondary"
}

interface QuickNavigationProps {
  title?: string
  links: NavigationLink[]
  className?: string
}

export function QuickNavigation({ 
  title = "Explore More Components", 
  links,
  className = ""
}: QuickNavigationProps) {
  return (
    <div className={`bg-muted/50 rounded-lg p-6 ${className}`}>
      <h2 className="text-xl font-semibold text-foreground mb-4 text-center">{title}</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            <Button variant={link.variant || "outline"} size="sm">
              {link.label}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  )
}

// Predefined navigation sets for common use cases
export const CHART_NAVIGATION: NavigationLink[] = [
  { href: "/area-charts", label: "Area Charts →" },
  { href: "/bar-charts", label: "Bar Charts →" },
  { href: "/line-charts", label: "Line Charts →" },
  { href: "/pie-charts", label: "Pie Charts →" },
  { href: "/radar-charts", label: "Radar Charts →" },
  { href: "/radial-charts", label: "Radial Charts →" },
  { href: "/playground", label: "Try Playground →", variant: "default" },
]

export const UI_NAVIGATION: NavigationLink[] = [
  { href: "/ui-templates", label: "UI Templates →" },
  { href: "/metric-cards", label: "Metric Cards →" },
  { href: "/architecture", label: "Architecture →" },
  { href: "/diet-apps", label: "Diet Apps →" },
  { href: "/playground", label: "Try Playground →", variant: "default" },
]

export const MIXED_NAVIGATION: NavigationLink[] = [
  { href: "/ui-templates", label: "UI Templates →" },
  { href: "/metric-cards", label: "Metric Cards →" },
  { href: "/architecture", label: "Architecture →" },
  { href: "/area-charts", label: "Area Charts →" },
  { href: "/bar-charts", label: "Bar Charts →" },
  { href: "/playground", label: "Try Playground →", variant: "default" },
] 