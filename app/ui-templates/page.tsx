"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RenderEngine } from "@/components/render-engine/render-engine"
import { ArrowLeft, Copy, Check } from "lucide-react"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"

// Import UI template components
import { cardCarouselTemplate, roundCarouselTemplate } from "@/lib/carousel-template"
import { imageStackPortraitTemplate, imageStackSquareTemplate, imageStackOriginalTemplate } from "@/lib/image-stack-templates"

export default function UITemplatesPage() {
  const { copied, copyToClipboard } = useCopyToClipboard()

  const handleCopy = (template: any, templateName: string) => {
    copyToClipboard(JSON.stringify(template, null, 2))
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground">UI Templates</h1>
              <p className="text-muted-foreground">
                Essential UI building blocks including carousels, image stacks, and interactive components
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">5+ Templates</Badge>
            <Badge variant="outline">Interactive</Badge>
          </div>
        </div>

        {/* Featured Interactive Component */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 rounded-xl p-8 border">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-foreground mb-2">Interactive Card Carousel</h2>
            <p className="text-muted-foreground">3D carousel with autoplay and hover controls</p>
          </div>
          <div className="flex justify-center">
            <RenderEngine layout={cardCarouselTemplate} />
          </div>
        </div>

        {/* Template Grid */}
        <div className="grid gap-8">
          <h2 className="text-2xl font-semibold text-foreground">All UI Templates</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card Carousel */}
            <Card className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Card Carousel</CardTitle>
                  <Badge variant="secondary">3D</Badge>
                </div>
                <CardDescription>
                  3D carousel component with autoplay and theme support
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4 bg-muted/50 flex justify-center min-h-[200px] items-center">
                  <RenderEngine layout={cardCarouselTemplate} />
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => handleCopy(cardCarouselTemplate, "Card Carousel")}
                  disabled={copied}
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy JSON
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Round Carousel */}
            <Card className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Round Carousel</CardTitle>
                  <Badge variant="secondary">Round</Badge>
                </div>
                <CardDescription>
                  Round card version with different content and styling
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4 bg-muted/50 flex justify-center min-h-[200px] items-center">
                  <RenderEngine layout={roundCarouselTemplate} />
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => handleCopy(roundCarouselTemplate, "Round Carousel")}
                  disabled={copied}
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy JSON
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Portrait Image Stack */}
            <Card className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Portrait Image Stack</CardTitle>
                  <Badge variant="secondary">Animation</Badge>
                </div>
                <CardDescription>
                  Portrait aspect ratio image stack with hover effects
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4 bg-muted/50 flex justify-center min-h-[200px] items-center">
                  <RenderEngine layout={imageStackPortraitTemplate} />
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => handleCopy(imageStackPortraitTemplate, "Portrait Image Stack")}
                  disabled={copied}
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy JSON
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Square Image Stack */}
            <Card className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Square Image Stack</CardTitle>
                  <Badge variant="secondary">Square</Badge>
                </div>
                <CardDescription>
                  Square aspect ratio images with smooth animations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4 bg-muted/50 flex justify-center min-h-[200px] items-center">
                  <RenderEngine layout={imageStackSquareTemplate} />
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => handleCopy(imageStackSquareTemplate, "Square Image Stack")}
                  disabled={copied}
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy JSON
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Original Aspect Image Stack */}
            <Card className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Original Aspect Stack</CardTitle>
                  <Badge variant="secondary">Responsive</Badge>
                </div>
                <CardDescription>
                  Images maintain original aspect ratio within container
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4 bg-muted/50 flex justify-center min-h-[200px] items-center">
                  <RenderEngine layout={imageStackOriginalTemplate} />
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => handleCopy(imageStackOriginalTemplate, "Original Aspect Stack")}
                  disabled={copied}
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy JSON
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technical Features */}
        <div className="bg-muted/50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-foreground mb-6 text-center">Technical Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">🎨</span>
                Animations
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Framer Motion integration</li>
                <li>• Smooth hover effects</li>
                <li>• Spring transitions</li>
                <li>• Auto-play support</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">📱</span>
                Responsive
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Mobile-first design</li>
                <li>• Flexible layouts</li>
                <li>• Touch-friendly controls</li>
                <li>• Adaptive sizing</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">🎯</span>
                Interactive
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Hover interactions</li>
                <li>• Click controls</li>
                <li>• Drag support</li>
                <li>• Keyboard navigation</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">⚙️</span>
                Customizable
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Theme compatibility</li>
                <li>• Configurable props</li>
                <li>• Custom content</li>
                <li>• Style overrides</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-muted/50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4 text-center">Explore More Components</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/metric-cards">
              <Button variant="outline" size="sm">Metric Cards →</Button>
            </Link>
            <Link href="/architecture">
              <Button variant="outline" size="sm">Architecture →</Button>
            </Link>
            <Link href="/diet-apps">
              <Button variant="outline" size="sm">Diet Apps →</Button>
            </Link>
            <Link href="/area-charts">
              <Button variant="outline" size="sm">Area Charts →</Button>
            </Link>
            <Link href="/bar-charts">
              <Button variant="outline" size="sm">Bar Charts →</Button>
            </Link>
            <Link href="/playground">
              <Button variant="default" size="sm">Try Playground →</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 