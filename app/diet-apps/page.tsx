"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RenderEngine } from "@/components/render-engine/render-engine"
import { ArrowLeft, Heart, Leaf, Users, TrendingUp, Copy, Check } from "lucide-react"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"

// Import diet app template components
import { dietClubsInterface, dietProgressCard, dietAppCollection } from "@/lib/diet-app-templates"

export default function DietAppsPage() {
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
              <h1 className="text-3xl font-bold text-foreground">Diet Apps</h1>
              <p className="text-muted-foreground">
                Modern mobile app interfaces for health tracking, progress monitoring, and community features
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">4+ Templates</Badge>
            <Badge variant="outline">Mobile-First</Badge>
          </div>
        </div>

        {/* Featured Interactive Component */}
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-xl p-8 border">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-foreground mb-2">Diet Clubs Interface</h2>
            <p className="text-muted-foreground">Community-driven diet tracking with categories and member management</p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <RenderEngine layout={dietClubsInterface} />
            </div>
          </div>
        </div>

        {/* Template Grid */}
        <div className="grid gap-8">
          <h2 className="text-2xl font-semibold text-foreground">All Diet App Templates</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Diet Clubs Interface */}
            <Card className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Diet Clubs Interface</CardTitle>
                  <Badge variant="secondary">Community</Badge>
                </div>
                <CardDescription>
                  Mobile app interface for diet communities with category management
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4 bg-muted/50 flex justify-center min-h-[300px] items-center">
                  <div className="w-full max-w-xs">
                    <RenderEngine layout={dietClubsInterface} />
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => handleCopy(dietClubsInterface, "Diet Clubs Interface")}
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

            {/* Diet Progress Card */}
            <Card className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Progress Tracking</CardTitle>
                  <Badge variant="secondary">Statistics</Badge>
                </div>
                <CardDescription>
                  Visual progress indicators with motivational statistics
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4 bg-muted/50 flex justify-center min-h-[300px] items-center">
                  <div className="w-full max-w-xs">
                    <RenderEngine layout={dietProgressCard} />
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => handleCopy(dietProgressCard, "Progress Tracking")}
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

            {/* Diet App Collection */}
            <Card className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Complete Collection</CardTitle>
                  <Badge variant="secondary">Full Layout</Badge>
                </div>
                <CardDescription>
                  Comprehensive diet app layout with multiple components
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4 bg-muted/50 flex justify-center min-h-[300px] items-center">
                  <div className="w-full text-center">
                    <p className="text-sm text-muted-foreground mb-2">Full Layout Preview</p>
                    <div className="text-xs text-muted-foreground">
                      Multiple components in responsive grid
                    </div>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => handleCopy(dietAppCollection, "Complete Collection")}
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
                <span className="text-lg">📱</span>
                Mobile-First
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Responsive design</li>
                <li>• Touch-friendly interfaces</li>
                <li>• Mobile-optimized layouts</li>
                <li>• Gesture support</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">🎨</span>
                Modern UI
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Clean, minimal design</li>
                <li>• Consistent typography</li>
                <li>• Proper spacing</li>
                <li>• Theme compatibility</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">📊</span>
                Progress Tracking
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Visual progress bars</li>
                <li>• Statistical displays</li>
                <li>• Motivational messaging</li>
                <li>• Goal visualization</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">👥</span>
                Community
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Group management</li>
                <li>• Category organization</li>
                <li>• Member interactions</li>
                <li>• Social features</li>
              </ul>
            </div>
          </div>
        </div>

        {/* App Categories */}
        <div className="bg-muted/50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-foreground mb-6 text-center">Diet App Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-emerald-100 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center">
                <Leaf className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Plant-Based</h3>
              <p className="text-sm text-muted-foreground">
                Vegan and vegetarian community features
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Weight Loss</h3>
              <p className="text-sm text-muted-foreground">
                Progress tracking and goal management
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Communities</h3>
              <p className="text-sm text-muted-foreground">
                Social features and group interactions
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
                <Heart className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Health Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive health and wellness monitoring
              </p>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-muted/50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4 text-center">Explore More Components</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/ui-templates">
              <Button variant="outline" size="sm">UI Templates →</Button>
            </Link>
            <Link href="/metric-cards">
              <Button variant="outline" size="sm">Metric Cards →</Button>
            </Link>
            <Link href="/architecture">
              <Button variant="outline" size="sm">Architecture →</Button>
            </Link>
            <Link href="/radial-charts">
              <Button variant="outline" size="sm">Radial Charts →</Button>
            </Link>
            <Link href="/line-charts">
              <Button variant="outline" size="sm">Line Charts →</Button>
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