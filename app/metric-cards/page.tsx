import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RenderEngine } from "@/components/render-engine/render-engine"
import { 
  darkMetricCardNoTitle, 
  darkMetricCardWithTitle, 
  limeMetricCardCompany 
} from "@/lib/metric-card-templates"
import {
  topPerformingCountriesTemplate,
  topPerformingCountriesEnhancedTemplate,
} from "@/lib/top-performing-countries-template"

export default function MetricCardsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto py-12 px-4">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" size="sm" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-6">Metric Cards Collection</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Professional dashboard cards with dark and lime themes for displaying key metrics, performance data, 
            and analytics. Perfect for dashboards, reports, and data visualization interfaces.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>5+ Card Variations</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Professional Design</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Multiple Themes</span>
            </div>
          </div>
        </div>

        {/* Metric Cards Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">Dashboard Metric Cards</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-6">Dark Theme - No Title</h3>
              <p className="text-sm text-muted-foreground mb-4">Clean minimal design with focus on the metric</p>
              <div className="flex justify-center">
                <RenderEngine layout={darkMetricCardNoTitle} showJsonButton={true} isRootElement={true} />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-6">Dark Theme - With Title</h3>
              <p className="text-sm text-muted-foreground mb-4">Professional card with header and description</p>
              <div className="flex justify-center">
                <RenderEngine layout={darkMetricCardWithTitle} showJsonButton={true} isRootElement={true} />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-6">Lime Theme - Company</h3>
              <p className="text-sm text-muted-foreground mb-4">Vibrant lime accent for company branding</p>
              <div className="flex justify-center">
                <RenderEngine layout={limeMetricCardCompany} showJsonButton={true} isRootElement={true} />
              </div>
            </div>
          </div>
        </div>

        {/* Performance Data Tables */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">Performance Data Tables</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Clean data table components with flag representations, perfect typography, and theme support. 
            Replicated exactly from provided designs with enhanced variations.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-6">Exact Design Replica</h3>
              <p className="text-sm text-muted-foreground mb-4">Pixel-perfect recreation of the original design</p>
              <div className="flex justify-center">
                <RenderEngine layout={topPerformingCountriesTemplate} showJsonButton={true} isRootElement={true} />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-6">Enhanced Version</h3>
              <p className="text-sm text-muted-foreground mb-4">Improved styling with additional features</p>
              <div className="flex justify-center">
                <RenderEngine layout={topPerformingCountriesEnhancedTemplate} showJsonButton={true} isRootElement={true} />
              </div>
            </div>
          </div>
        </div>

        {/* Technical Features */}
        <div className="bg-card rounded-lg border border-border p-8 shadow-sm mb-16">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6 text-center">Metric Card Features</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">📊</span>
                Card Types
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Simple metric displays</li>
                <li>• Cards with headers</li>
                <li>• Performance tables</li>
                <li>• Dashboard layouts</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">🎨</span>
                Design Themes
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Dark professional theme</li>
                <li>• Lime accent branding</li>
                <li>• Clean minimal design</li>
                <li>• Custom color schemes</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">💼</span>
                Use Cases
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Executive dashboards</li>
                <li>• Analytics reports</li>
                <li>• Performance monitoring</li>
                <li>• KPI tracking</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">⚙️</span>
                Features
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Responsive design</li>
                <li>• Theme compatibility</li>
                <li>• Clean typography</li>
                <li>• Flag representations</li>
              </ul>
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