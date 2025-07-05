import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto py-12 px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">JSON Render Engine</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transform JSON into beautiful UI components with SVG support, CSS animations, and Framer Motion. 
            Navigate through our comprehensive component library with 60+ templates organized by category.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>60+ Component Templates</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Dark/Light Theme Support</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Advanced Charts & Animations</span>
            </div>
          </div>
        </div>

        {/* Chart Collections */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-4">Chart Collections</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional chart components built with shadcn/ui and Recharts. Each collection includes multiple 
              variations with interactive features and theme support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/area-charts">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Area Charts</CardTitle>
                    <Badge variant="secondary">10+ Templates</Badge>
                  </div>
                  <CardDescription>
                    Natural curves, linear interpolation, step functions, and stacked areas with gradient fills.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">Interactive</Badge>
                    <Badge variant="outline" className="text-xs">Gradients</Badge>
                    <Badge variant="outline" className="text-xs">Stacked</Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Collection →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/bar-charts">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Bar Charts</CardTitle>
                    <Badge variant="secondary">8+ Templates</Badge>
                  </div>
                  <CardDescription>
                    Vertical, horizontal, multiple datasets, stacked variations with unique real-world datasets.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">Analytics</Badge>
                    <Badge variant="outline" className="text-xs">Horizontal</Badge>
                    <Badge variant="outline" className="text-xs">Negative Values</Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Collection →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/line-charts">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Line Charts</CardTitle>
                    <Badge variant="secondary">8+ Templates</Badge>
                  </div>
                  <CardDescription>
                    Trend analysis, time series data, performance tracking with dots, steps, and multiple series.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">Time Series</Badge>
                    <Badge variant="outline" className="text-xs">Health</Badge>
                    <Badge variant="outline" className="text-xs">Financial</Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Collection →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/pie-charts">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Pie Charts</CardTitle>
                    <Badge variant="secondary">7+ Templates</Badge>
                  </div>
                  <CardDescription>
                    Simple pies, donut variations, stacked comparisons with center text and custom legends.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">Donut</Badge>
                    <Badge variant="outline" className="text-xs">Labels</Badge>
                    <Badge variant="outline" className="text-xs">Interactive</Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Collection →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/radar-charts">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Radar Charts</CardTitle>
                    <Badge variant="secondary">7+ Templates</Badge>
                  </div>
                  <CardDescription>
                    Performance metrics, skill assessments, multi-dimensional data with dots and multiple series.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">Skills</Badge>
                    <Badge variant="outline" className="text-xs">Performance</Badge>
                    <Badge variant="outline" className="text-xs">Multi-Series</Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Collection →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/radial-charts">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Radial Charts</CardTitle>
                    <Badge variant="secondary">10+ Templates</Badge>
                  </div>
                  <CardDescription>
                    Progress indicators, circular visualizations, stacked analytics with custom shapes and labels.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">Progress</Badge>
                    <Badge variant="outline" className="text-xs">Stacked</Badge>
                    <Badge variant="outline" className="text-xs">Custom Shapes</Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Collection →
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* UI Components */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-4">UI Components</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Modern UI components including metric cards, performance dashboards, and essential building blocks.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/metric-cards">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Metric Cards</CardTitle>
                    <Badge variant="secondary">5+ Templates</Badge>
                  </div>
                  <CardDescription>
                    Professional metric displays and performance cards with various layouts.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="w-full">
                    View Templates →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/ui-templates">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">UI Templates</CardTitle>
                    <Badge variant="secondary">8+ Templates</Badge>
                  </div>
                  <CardDescription>
                    Image stacks, carousels, and essential UI building blocks.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="w-full">
                    View Templates →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/architecture">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Architecture</CardTitle>
                    <Badge variant="secondary">3+ Templates</Badge>
                  </div>
                  <CardDescription>
                    CPU diagrams, database APIs, and system architecture components.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="w-full">
                    View Templates →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/diet-apps">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Diet Apps</CardTitle>
                    <Badge variant="secondary">4+ Templates</Badge>
                  </div>
                  <CardDescription>
                    Modern mobile app interfaces with progress tracking.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="w-full">
                    View Templates →
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Tools & Playground */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-4">Tools & Testing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interactive tools for testing, experimenting, and building with the JSON render engine.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link href="/playground">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">🛝 Playground</CardTitle>
                    <Badge variant="default">Interactive</Badge>
                  </div>
                  <CardDescription>
                    Test and experiment with JSON structures. Load examples or paste your own JSON to see real-time rendering.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">JSON Editor</Badge>
                    <Badge variant="outline" className="text-xs">Real-time</Badge>
                    <Badge variant="outline" className="text-xs">Examples</Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Open Playground →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/test-radial">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">🧪 Test Radial</CardTitle>
                    <Badge variant="default">Demo</Badge>
                  </div>
                  <CardDescription>
                    Dedicated testing page for the interactive radial chart component with proper layout and functionality.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">Interactive</Badge>
                    <Badge variant="outline" className="text-xs">Radial Chart</Badge>
                    <Badge variant="outline" className="text-xs">Testing</Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Test Page →
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* System Features Overview */}
        <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-card-foreground mb-8 text-center">System Features</h2>

          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3">Perfect Replication</h3>
              <ul className="space-y-1 text-sm text-left text-muted-foreground">
                <li>• Pixel-perfect designs</li>
                <li>• Exact animations</li>
                <li>• Professional styling</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3">Chart Library</h3>
              <ul className="space-y-1 text-sm text-left text-muted-foreground">
                <li>• 60+ Chart variations</li>
                <li>• Interactive features</li>
                <li>• Comprehensive collections</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3">CSS Animations</h3>
              <ul className="space-y-1 text-sm text-left text-muted-foreground">
                <li>• CSS injection system</li>
                <li>• Keyframe animations</li>
                <li>• Path-based motion</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎭</span>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3">Framer Motion</h3>
              <ul className="space-y-1 text-sm text-left text-muted-foreground">
                <li>• Ripple effects</li>
                <li>• Scale animations</li>
                <li>• Infinite loops</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔧</span>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3">JSON Export</h3>
              <ul className="space-y-1 text-sm text-left text-muted-foreground">
                <li>• Complete structures</li>
                <li>• Copy to clipboard</li>
                <li>• Production ready</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
