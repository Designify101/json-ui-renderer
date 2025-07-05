import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"

interface PageHeaderProps {
  title: string
  description: string
  badges?: Array<{
    text: string
    variant?: "default" | "secondary" | "outline"
  }>
  backHref?: string
  className?: string
}

export function PageHeader({ 
  title, 
  description, 
  badges = [], 
  backHref = "/",
  className = ""
}: PageHeaderProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      {/* Back Navigation */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href={backHref}>
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">{title}</h1>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
        {badges.length > 0 && (
          <div className="flex items-center gap-2">
            {badges.map((badge, index) => (
              <Badge key={index} variant={badge.variant || "secondary"}>
                {badge.text}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 