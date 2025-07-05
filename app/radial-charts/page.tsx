import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RenderEngine } from "@/components/render-engine/render-engine"
import {
  radialChartSimpleTemplate,
  radialChartLabelTemplate,
  radialChartGridTemplate,
  radialChartTextTemplate,
  radialChartShapeTemplate,
  radialChartStackedTemplate,
  radialChartInteractiveTemplate,
  radialChartSalesTemplate,
  radialChartHealthTemplate as radialHealthTemplate,
  radialChartProjectTemplate,
} from "@/lib/radial-chart-templates"

export default function RadialChartsPage() {
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
          <h1 className="text-4xl font-bold text-foreground mb-6">Radial Chart Collection</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Complete collection of radial chart variations perfect for displaying progress, percentages, and circular data visualizations. 
            Each chart offers unique styling and functionality for different use cases - from simple progress indicators to complex stacked analytics.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>10+ Chart Variations</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Progress Tracking</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Circular Design</span>
            </div>
          </div>
        </div>

        {/* Interactive Radial Chart - Featured */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-6 text-center">Interactive Radial Chart</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Featured interactive radial chart with monthly analytics data and dynamic data selection controls.
          </p>
          <div className="flex justify-center">
            <RenderEngine layout={radialChartInteractiveTemplate} showJsonButton={true} isRootElement={true} />
          </div>
        </div>

        {/* Grid of Radial Charts */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">Chart Variations</h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Simple Radial Chart</h3>
              <p className="text-sm text-muted-foreground mb-4">Basic radial chart with background bars</p>
              <RenderEngine layout={radialChartSimpleTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Radial with Labels</h3>
              <p className="text-sm text-muted-foreground mb-4">Chart with data labels on bars</p>
              <RenderEngine layout={radialChartLabelTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Radial with Grid</h3>
              <p className="text-sm text-muted-foreground mb-4">Chart with circular grid lines</p>
              <RenderEngine layout={radialChartGridTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Radial with Text</h3>
              <p className="text-sm text-muted-foreground mb-4">Chart with center text display</p>
              <RenderEngine layout={radialChartTextTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Custom Shape</h3>
              <p className="text-sm text-muted-foreground mb-4">Chart with custom angle and shape</p>
              <RenderEngine layout={radialChartShapeTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Stacked Radial</h3>
              <p className="text-sm text-muted-foreground mb-4">Multi-series stacked chart</p>
              <RenderEngine layout={radialChartStackedTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Sales Performance</h3>
              <p className="text-sm text-muted-foreground mb-4">Business metrics visualization</p>
              <RenderEngine layout={radialChartSalesTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Health Metrics</h3>
              <p className="text-sm text-muted-foreground mb-4">Wellness tracking dashboard</p>
              <RenderEngine layout={radialHealthTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Project Progress</h3>
              <p className="text-sm text-muted-foreground mb-4">Task completion tracking</p>
              <RenderEngine layout={radialChartProjectTemplate} showJsonButton={true} isRootElement={true} />
            </div>
          </div>
        </div>

        {/* Technical Features */}
        <div className="bg-card rounded-lg border border-border p-8 shadow-sm mb-16">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6 text-center">Radial Chart Features</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">🎯</span>
                Chart Types
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Simple progress bars</li>
                <li>• Stacked data series</li>
                <li>• Custom shapes & angles</li>
                <li>• Interactive selectors</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">🎨</span>
                Visual Options
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Center text display</li>
                <li>• Data labels on bars</li>
                <li>• Circular grid lines</li>
                <li>• Background bars</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">💼</span>
                Use Cases
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Progress tracking</li>
                <li>• Performance metrics</li>
                <li>• Goal completion</li>
                <li>• Health monitoring</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">⚙️</span>
                Dynamic Features
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• JSON data binding</li>
                <li>• Auto color assignment</li>
                <li>• Responsive layouts</li>
                <li>• Theme compatibility</li>
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
            <Link href="/radar-charts">
              <Button variant="outline" size="sm">Radar Charts →</Button>
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