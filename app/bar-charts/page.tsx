import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RenderEngine } from "@/components/render-engine/render-engine"
import {
  barChartInteractiveTemplate,
  barChartDefaultTemplate,
  barChartHorizontalTemplate,
  barChartMultipleTemplate,
  barChartStackedTemplate,
  barChartNegativeTemplate,
  barChartEcommerceTemplate,
  barChartServerTemplate,
  barChartSocialTemplate,
} from "@/lib/bar-chart-templates"

export default function BarChartsPage() {
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
          <h1 className="text-4xl font-bold text-foreground mb-6">Bar Chart Collection</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive collection of bar chart variations with unique datasets for each chart type. From interactive 
            toggles to financial analytics, each chart demonstrates different use cases and styling approaches.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>8+ Chart Variations</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Real-world Datasets</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Interactive Features</span>
            </div>
          </div>
        </div>

        {/* Interactive Bar Chart - Featured */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-6 text-center">Interactive Bar Chart</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Featured interactive bar chart with website analytics data, toggle controls, and responsive tooltips.
          </p>
          <div className="flex justify-center">
            <RenderEngine layout={barChartInteractiveTemplate} showJsonButton={true} isRootElement={true} />
          </div>
        </div>

        {/* Grid of Bar Charts - Core Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">Chart Variations</h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Basic Bar Chart</h3>
              <p className="text-sm text-muted-foreground mb-4">Coffee shop monthly sales</p>
              <RenderEngine layout={barChartDefaultTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Horizontal Bar Chart</h3>
              <p className="text-sm text-muted-foreground mb-4">Programming language popularity</p>
              <RenderEngine layout={barChartHorizontalTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Multiple Bar Chart</h3>
              <p className="text-sm text-muted-foreground mb-4">Online vs in-store sales</p>
              <RenderEngine layout={barChartMultipleTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Stacked Bar Chart</h3>
              <p className="text-sm text-muted-foreground mb-4">Team productivity metrics</p>
              <RenderEngine layout={barChartStackedTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Negative Values Chart</h3>
              <p className="text-sm text-muted-foreground mb-4">Quarterly profit/loss analysis</p>
              <RenderEngine layout={barChartNegativeTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">E-commerce Analytics</h3>
              <p className="text-sm text-muted-foreground mb-4">Product category performance</p>
              <RenderEngine layout={barChartEcommerceTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Server Performance</h3>
              <p className="text-sm text-muted-foreground mb-4">Resource utilization metrics</p>
              <RenderEngine layout={barChartServerTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Social Media Engagement</h3>
              <p className="text-sm text-muted-foreground mb-4">Platform performance comparison</p>
              <RenderEngine layout={barChartSocialTemplate} showJsonButton={true} isRootElement={true} />
            </div>
          </div>
        </div>

        {/* Technical Features */}
        <div className="bg-card rounded-lg border border-border p-8 shadow-sm mb-16">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6 text-center">Bar Chart Features</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">📊</span>
                Chart Types
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Vertical & Horizontal</li>
                <li>• Multiple datasets</li>
                <li>• Stacked variations</li>
                <li>• Negative values</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">🎨</span>
                Visual Features
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Interactive toggles</li>
                <li>• Custom tooltips</li>
                <li>• Dynamic colors</li>
                <li>• Rounded corners</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">💼</span>
                Use Cases
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Sales analytics</li>
                <li>• Performance metrics</li>
                <li>• Financial reporting</li>
                <li>• Resource monitoring</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">📊</span>
                Data Variety
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Unique datasets</li>
                <li>• Real-world scenarios</li>
                <li>• Different industries</li>
                <li>• Varied time periods</li>
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