import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RenderEngine } from "@/components/render-engine/render-engine"
import {
  lineChartInteractiveTemplate,
  lineChartDefaultTemplate,
  lineChartMultipleTemplate,
  lineChartStepTemplate,
  lineChartDotsTemplate,
  lineChartFinancialTemplate,
  lineChartHealthTemplate,
  lineChartEducationTemplate,
} from "@/lib/line-chart-templates"

export default function LineChartsPage() {
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
          <h1 className="text-4xl font-bold text-foreground mb-6">Line Chart Collection</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Professional line chart variations showcasing different data visualization patterns. From interactive analytics 
            to healthcare monitoring, each chart demonstrates specialized use cases with clean, modern designs.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>8+ Chart Variations</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Time Series Data</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Multi-purpose</span>
            </div>
          </div>
        </div>

        {/* Interactive Line Chart - Featured */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-6 text-center">Interactive Line Chart</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Featured interactive line chart with website analytics data, toggle controls for different metrics.
          </p>
          <div className="flex justify-center">
            <RenderEngine layout={lineChartInteractiveTemplate} showJsonButton={true} isRootElement={true} />
          </div>
        </div>

        {/* Grid of Line Charts */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">Chart Variations</h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Basic Line Chart</h3>
              <p className="text-sm text-muted-foreground mb-4">Monthly revenue growth</p>
              <RenderEngine layout={lineChartDefaultTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Multiple Lines</h3>
              <p className="text-sm text-muted-foreground mb-4">Performance metrics comparison</p>
              <RenderEngine layout={lineChartMultipleTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Step Line Chart</h3>
              <p className="text-sm text-muted-foreground mb-4">Process stage progression</p>
              <RenderEngine layout={lineChartStepTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Line Chart with Dots</h3>
              <p className="text-sm text-muted-foreground mb-4">User engagement analytics</p>
              <RenderEngine layout={lineChartDotsTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Financial Analysis</h3>
              <p className="text-sm text-muted-foreground mb-4">Stock performance tracking</p>
              <RenderEngine layout={lineChartFinancialTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Health Metrics</h3>
              <p className="text-sm text-muted-foreground mb-4">Vital signs monitoring</p>
              <RenderEngine layout={lineChartHealthTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">E-learning Progress</h3>
              <p className="text-sm text-muted-foreground mb-4">Student learning analytics</p>
              <RenderEngine layout={lineChartEducationTemplate} showJsonButton={true} isRootElement={true} />
            </div>
          </div>
        </div>

        {/* Technical Features */}
        <div className="bg-card rounded-lg border border-border p-8 shadow-sm mb-16">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6 text-center">Line Chart Features</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">📈</span>
                Chart Types
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Natural curves</li>
                <li>• Linear connections</li>
                <li>• Step interpolation</li>
                <li>• Data point markers</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">🎯</span>
                Use Cases
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Trend analysis</li>
                <li>• Time series data</li>
                <li>• Performance tracking</li>
                <li>• Health monitoring</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">⚙️</span>
                Interactive Features
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Toggle controls</li>
                <li>• Hover tooltips</li>
                <li>• Dynamic data binding</li>
                <li>• Responsive design</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">🎨</span>
                Styling
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Clean aesthetics</li>
                <li>• Professional colors</li>
                <li>• Theme adaptation</li>
                <li>• Consistent spacing</li>
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