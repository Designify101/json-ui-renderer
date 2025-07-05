import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RenderEngine } from "@/components/render-engine/render-engine"
import {
  pieChartSimpleTemplate,
  pieChartDonutTemplate,
  pieChartDonutTextTemplate,
  pieChartLabelTemplate,
  pieChartLegendTemplate,
  pieChartStackedTemplate,
  pieChartInteractiveTemplate,
} from "@/lib/pie-chart-templates"

export default function PieChartsPage() {
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
          <h1 className="text-4xl font-bold text-foreground mb-6">Pie Chart Collection</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Complete collection of pie chart variations built with shadcn/ui and Recharts. From simple pie charts to 
            interactive donut charts with center text, each component demonstrates different visualization approaches.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>7+ Chart Variations</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Donut & Pie Styles</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Interactive Features</span>
            </div>
          </div>
        </div>

        {/* Interactive Pie Chart - Featured */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-6 text-center">Interactive Pie Chart</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Featured interactive pie chart with monthly analytics data and dynamic segment selection.
          </p>
          <div className="flex justify-center">
            <RenderEngine layout={pieChartInteractiveTemplate} showJsonButton={true} isRootElement={true} />
          </div>
        </div>

        {/* Grid of Pie Charts */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">Chart Variations</h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Simple Pie Chart</h3>
              <p className="text-sm text-muted-foreground mb-4">Basic browser usage statistics</p>
              <RenderEngine layout={pieChartSimpleTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Donut Chart</h3>
              <p className="text-sm text-muted-foreground mb-4">Clean donut visualization</p>
              <RenderEngine layout={pieChartDonutTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Donut with Text</h3>
              <p className="text-sm text-muted-foreground mb-4">Center text showing totals</p>
              <RenderEngine layout={pieChartDonutTextTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Pie with Labels</h3>
              <p className="text-sm text-muted-foreground mb-4">Direct value labeling</p>
              <RenderEngine layout={pieChartLabelTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Pie with Legend</h3>
              <p className="text-sm text-muted-foreground mb-4">External legend display</p>
              <RenderEngine layout={pieChartLegendTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Stacked Pie Chart</h3>
              <p className="text-sm text-muted-foreground mb-4">Desktop vs mobile comparison</p>
              <RenderEngine layout={pieChartStackedTemplate} showJsonButton={true} isRootElement={true} />
            </div>
          </div>
        </div>

        {/* Technical Features */}
        <div className="bg-card rounded-lg border border-border p-8 shadow-sm mb-16">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6 text-center">Pie Chart Features</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">🥧</span>
                Chart Types
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Simple pie charts</li>
                <li>• Donut variations</li>
                <li>• Stacked comparisons</li>
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
                <li>• Custom labels</li>
                <li>• Legend positioning</li>
                <li>• Hover effects</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">⚙️</span>
                Customization
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Dynamic data binding</li>
                <li>• Color configurations</li>
                <li>• Interactive controls</li>
                <li>• Responsive layouts</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">🌙</span>
                Theme Support
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Dark/Light themes</li>
                <li>• Color harmony</li>
                <li>• Accessible contrast</li>
                <li>• Professional styling</li>
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