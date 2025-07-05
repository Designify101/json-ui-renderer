import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RenderEngine } from "@/components/render-engine/render-engine"
import {
  areaChartInteractiveTemplate,
  areaChartDefaultTemplate,
  areaChartLinearTemplate,
  areaChartStepTemplate,
  areaChartLegendTemplate,
  areaChartStackedTemplate,
  areaChartStackedExpandTemplate,
  areaChartIconsTemplate,
  areaChartGradientTemplate,
  areaChartAxesTemplate,
} from "@/lib/area-chart-templates"

export default function AreaChartsPage() {
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
          <h1 className="text-4xl font-bold text-foreground mb-6">Area Chart Collection</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Complete collection of area chart variations built with shadcn/ui and Recharts. All 10 examples from the
            official documentation, perfectly replicated in JSON format with interactive features and theme support.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>10+ Chart Variations</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Interactive Features</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>JSON Templates</span>
            </div>
          </div>
        </div>

        {/* Interactive Area Chart - Featured */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-6 text-center">Interactive Area Chart</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Featured interactive area chart with time range selectors and toggle controls for comprehensive data visualization.
          </p>
          <div className="flex justify-center">
            <RenderEngine layout={areaChartInteractiveTemplate} showJsonButton={true} isRootElement={true} />
          </div>
        </div>

        {/* Grid of Area Charts */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">Chart Variations</h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Default Area Chart</h3>
              <p className="text-sm text-muted-foreground mb-4">Natural curve interpolation with gradient fill</p>
              <RenderEngine layout={areaChartDefaultTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Linear Area Chart</h3>
              <p className="text-sm text-muted-foreground mb-4">Linear interpolation between data points</p>
              <RenderEngine layout={areaChartLinearTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Step Area Chart</h3>
              <p className="text-sm text-muted-foreground mb-4">Step function visualization for discrete data</p>
              <RenderEngine layout={areaChartStepTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Area Chart with Legend</h3>
              <p className="text-sm text-muted-foreground mb-4">Multiple data series with custom legend</p>
              <RenderEngine layout={areaChartLegendTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Stacked Area Chart</h3>
              <p className="text-sm text-muted-foreground mb-4">Stacked data visualization for comparisons</p>
              <RenderEngine layout={areaChartStackedTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Stacked Expanded</h3>
              <p className="text-sm text-muted-foreground mb-4">Percentage-based stacked visualization</p>
              <RenderEngine layout={areaChartStackedExpandTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Area Chart with Icons</h3>
              <p className="text-sm text-muted-foreground mb-4">Icon integration in chart legends</p>
              <RenderEngine layout={areaChartIconsTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Gradient Area Chart</h3>
              <p className="text-sm text-muted-foreground mb-4">Custom gradient fills and styling</p>
              <RenderEngine layout={areaChartGradientTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Area Chart with Axes</h3>
              <p className="text-sm text-muted-foreground mb-4">Custom axis configurations and formatting</p>
              <RenderEngine layout={areaChartAxesTemplate} showJsonButton={true} isRootElement={true} />
            </div>
          </div>
        </div>

        {/* Technical Features */}
        <div className="bg-card rounded-lg border border-border p-8 shadow-sm mb-16">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6 text-center">Area Chart Features</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">📊</span>
                Chart Types
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Natural curves</li>
                <li>• Linear interpolation</li>
                <li>• Step functions</li>
                <li>• Stacked areas</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">🎨</span>
                Visual Features
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Gradient fills</li>
                <li>• Custom legends</li>
                <li>• Interactive tooltips</li>
                <li>• Icon integration</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">⚙️</span>
                Configuration
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Time range selectors</li>
                <li>• Custom axes</li>
                <li>• Data interpolation</li>
                <li>• Stack offsets</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">🌙</span>
                Theme Support
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Dark/Light adaptation</li>
                <li>• CSS custom properties</li>
                <li>• Consistent colors</li>
                <li>• Proper contrast</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-muted/50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4 text-center">Explore More Charts</h2>
          <div className="flex flex-wrap justify-center gap-4">
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