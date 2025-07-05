import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RenderEngine } from "@/components/render-engine/render-engine"
import {
  radarChartDefaultTemplate,
  radarChartDotsTemplate,
  radarChartMultipleTemplate,
  radarChartLegendTemplate,
  radarChartLinesOnlyTemplate,
  radarChartInteractiveTemplate,
  radarChartHealthTemplate,
  radarChartEducationTemplate,
} from "@/lib/radar-chart-templates"

export default function RadarChartsPage() {
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
          <h1 className="text-4xl font-bold text-foreground mb-6">Radar Chart Collection</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Complete collection of radar chart variations perfect for performance metrics, skill assessments, and 
            multi-dimensional data visualization. Each chart demonstrates different use cases from business analytics to personal development tracking.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>7+ Chart Variations</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Multi-dimensional</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Performance Metrics</span>
            </div>
          </div>
        </div>

        {/* Interactive Radar Chart - Featured */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-6 text-center">Interactive Radar Chart</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Featured interactive radar chart with monthly assessment data and dynamic month selection controls.
          </p>
          <div className="flex justify-center">
            <RenderEngine layout={radarChartInteractiveTemplate} showJsonButton={true} isRootElement={true} />
          </div>
        </div>

        {/* Grid of Radar Charts */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">Chart Variations</h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Basic Radar Chart</h3>
              <p className="text-sm text-muted-foreground mb-4">Website performance metrics</p>
              <RenderEngine layout={radarChartDefaultTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Radar with Dots</h3>
              <p className="text-sm text-muted-foreground mb-4">Skills assessment with markers</p>
              <RenderEngine layout={radarChartDotsTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Multiple Series</h3>
              <p className="text-sm text-muted-foreground mb-4">Team comparison analysis</p>
              <RenderEngine layout={radarChartMultipleTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Radar with Legend</h3>
              <p className="text-sm text-muted-foreground mb-4">Product feature comparison</p>
              <RenderEngine layout={radarChartLegendTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Lines Only</h3>
              <p className="text-sm text-muted-foreground mb-4">Business metrics analysis</p>
              <RenderEngine layout={radarChartLinesOnlyTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Health & Fitness</h3>
              <p className="text-sm text-muted-foreground mb-4">Wellness assessment dashboard</p>
              <RenderEngine layout={radarChartHealthTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">E-learning Progress</h3>
              <p className="text-sm text-muted-foreground mb-4">Student learning analytics</p>
              <RenderEngine layout={radarChartEducationTemplate} showJsonButton={true} isRootElement={true} />
            </div>
          </div>
        </div>

        {/* Technical Features */}
        <div className="bg-card rounded-lg border border-border p-8 shadow-sm mb-16">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6 text-center">Radar Chart Features</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">🎯</span>
                Chart Types
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Filled radar areas</li>
                <li>• Outlined polygons</li>
                <li>• Multiple data series</li>
                <li>• Interactive controls</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">📊</span>
                Data Types
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Performance metrics</li>
                <li>• Skill assessments</li>
                <li>• Health tracking</li>
                <li>• Educational progress</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">⚙️</span>
                Customization
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Dynamic data binding</li>
                <li>• Month selectors</li>
                <li>• Legend positioning</li>
                <li>• Color schemes</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">🎨</span>
                Visual Features
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Dot markers</li>
                <li>• Fill opacity control</li>
                <li>• Professional styling</li>
                <li>• Theme adaptation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-muted/50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4 text-center">Explore More Charts</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/area-charts">
              <Button variant="outline" size="sm">Area Charts →</Button>
            </Link>
            <Link href="/bar-charts">
              <Button variant="outline" size="sm">Bar Charts →</Button>
            </Link>
            <Link href="/line-charts">
              <Button variant="outline" size="sm">Line Charts →</Button>
            </Link>
            <Link href="/pie-charts">
              <Button variant="outline" size="sm">Pie Charts →</Button>
            </Link>
            <Link href="/radial-charts">
              <Button variant="outline" size="sm">Radial Charts →</Button>
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