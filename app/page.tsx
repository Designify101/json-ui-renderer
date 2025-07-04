import { RenderEngine } from "@/components/render-engine/render-engine"
import { simpleCardTemplate, simpleButtonTemplate } from "@/lib/simple-templates"
import { darkMetricCardNoTitle, darkMetricCardWithTitle, limeMetricCardCompany } from "@/lib/metric-card-templates"
import { dietAppCollection } from "@/lib/diet-app-templates"
import { cpuArchitectureTemplate, cpuArchitectureSimpleTemplate } from "@/lib/cpu-architecture-template"
import { databaseRestApiTemplate, databaseRestApiSimpleTemplate } from "@/lib/database-rest-api-template"
import { cardCarouselTemplate, roundCarouselTemplate } from "@/lib/carousel-template"
import {
  imageStackPortraitTemplate,
  imageStackSquareTemplate,
  imageStackOriginalTemplate,
} from "@/lib/image-stack-templates"
import {
  topPerformingCountriesTemplate,
  topPerformingCountriesEnhancedTemplate,
} from "@/lib/top-performing-countries-template"
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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto py-12 px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">JSON Render Engine</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transform JSON into beautiful UI components with SVG support, CSS animations, and Framer Motion. Each
            component shows its exact JSON structure for easy replication and customization. Now with comprehensive 
            chart library including area, bar, and line charts!
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>43+ Component Templates</span>
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

        {/* NEW AREA CHARTS SECTION */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-4">Area Chart Collection</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete collection of area chart variations built with shadcn/ui and Recharts. All 10 examples from the
              official documentation, perfectly replicated in JSON format.
            </p>
          </div>

          {/* Interactive Area Chart */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Interactive Area Chart</h3>
            <div className="flex justify-center">
              <RenderEngine layout={areaChartInteractiveTemplate} showJsonButton={true} isRootElement={true} />
            </div>
          </div>

          {/* Grid of Area Charts */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">Default Area Chart</h4>
              <RenderEngine layout={areaChartDefaultTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">Linear Area Chart</h4>
              <RenderEngine layout={areaChartLinearTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">Step Area Chart</h4>
              <RenderEngine layout={areaChartStepTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">Area Chart with Legend</h4>
              <RenderEngine layout={areaChartLegendTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">Stacked Area Chart</h4>
              <RenderEngine layout={areaChartStackedTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">Stacked Expanded</h4>
              <RenderEngine layout={areaChartStackedExpandTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">Area Chart with Icons</h4>
              <RenderEngine layout={areaChartIconsTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">Gradient Area Chart</h4>
              <RenderEngine layout={areaChartGradientTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">Area Chart with Axes</h4>
              <RenderEngine layout={areaChartAxesTemplate} showJsonButton={true} isRootElement={true} />
            </div>
          </div>

          {/* Technical Features */}
          <div className="bg-card rounded-lg border border-border p-6 mb-8">
            <h3 className="text-xl font-semibold text-card-foreground mb-4">Area Chart Features</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">📊 Chart Types</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Natural curves</li>
                  <li>• Linear interpolation</li>
                  <li>• Step functions</li>
                  <li>• Stacked areas</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">🎨 Visual Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Gradient fills</li>
                  <li>• Custom legends</li>
                  <li>• Interactive tooltips</li>
                  <li>• Icon integration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">⚙️ Configuration</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Time range selectors</li>
                  <li>• Custom axes</li>
                  <li>• Data interpolation</li>
                  <li>• Stack offsets</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">🌙 Theme Support</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Dark/Light adaptation</li>
                  <li>• CSS custom properties</li>
                  <li>• Consistent colors</li>
                  <li>• Proper contrast</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* NEW BAR CHARTS SECTION */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-4">Bar Chart Collection</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive collection of bar chart variations with unique datasets for each chart type. From interactive 
              toggles to financial analytics, each chart demonstrates different use cases and styling approaches.
            </p>
          </div>

          {/* Interactive Bar Chart - Featured */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Interactive Bar Chart - Website Analytics</h3>
            <div className="flex justify-center">
              <RenderEngine layout={barChartInteractiveTemplate} showJsonButton={true} isRootElement={true} />
            </div>
          </div>

          {/* Grid of Bar Charts - Core Types */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">Basic Bar Chart</h4>
              <p className="text-sm text-muted-foreground mb-4">Coffee shop monthly sales</p>
              <RenderEngine layout={barChartDefaultTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">Horizontal Bar Chart</h4>
              <p className="text-sm text-muted-foreground mb-4">Programming language popularity</p>
              <RenderEngine layout={barChartHorizontalTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">Multiple Bar Chart</h4>
              <p className="text-sm text-muted-foreground mb-4">Online vs in-store sales</p>
              <RenderEngine layout={barChartMultipleTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">Stacked Bar Chart</h4>
              <p className="text-sm text-muted-foreground mb-4">Team productivity metrics</p>
              <RenderEngine layout={barChartStackedTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">Negative Values Chart</h4>
              <p className="text-sm text-muted-foreground mb-4">Quarterly profit/loss analysis</p>
              <RenderEngine layout={barChartNegativeTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">E-commerce Analytics</h4>
              <p className="text-sm text-muted-foreground mb-4">Product category performance</p>
              <RenderEngine layout={barChartEcommerceTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">Server Performance</h4>
              <p className="text-sm text-muted-foreground mb-4">Resource utilization metrics</p>
              <RenderEngine layout={barChartServerTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">Social Media Engagement</h4>
              <p className="text-sm text-muted-foreground mb-4">Platform performance comparison</p>
              <RenderEngine layout={barChartSocialTemplate} showJsonButton={true} isRootElement={true} />
            </div>
          </div>

          {/* Technical Features */}
          <div className="bg-card rounded-lg border border-border p-6 mb-8">
            <h3 className="text-xl font-semibold text-card-foreground mb-4">Bar Chart Features</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">📊 Chart Types</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Vertical & Horizontal</li>
                  <li>• Multiple datasets</li>
                  <li>• Stacked variations</li>
                  <li>• Negative values</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">🎨 Visual Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Interactive toggles</li>
                  <li>• Custom tooltips</li>
                  <li>• Dynamic colors</li>
                  <li>• Rounded corners</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">💼 Use Cases</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Sales analytics</li>
                  <li>• Performance metrics</li>
                  <li>• Financial reporting</li>
                  <li>• Resource monitoring</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">📊 Data Variety</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Unique datasets</li>
                  <li>• Real-world scenarios</li>
                  <li>• Different industries</li>
                  <li>• Varied time periods</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* NEW LINE CHARTS SECTION */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-4">Line Chart Collection</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional line chart variations showcasing different data visualization patterns. From interactive analytics 
              to healthcare monitoring, each chart demonstrates specialized use cases with clean, modern designs.
            </p>
          </div>

          {/* Interactive Line Chart - Featured */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Interactive Line Chart - Website Analytics</h3>
            <div className="flex justify-center">
              <RenderEngine layout={lineChartInteractiveTemplate} showJsonButton={true} isRootElement={true} />
            </div>
          </div>

          {/* Grid of Line Charts */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">Basic Line Chart</h4>
              <p className="text-sm text-muted-foreground mb-4">Monthly revenue growth</p>
              <RenderEngine layout={lineChartDefaultTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">Multiple Lines</h4>
              <p className="text-sm text-muted-foreground mb-4">Performance metrics comparison</p>
              <RenderEngine layout={lineChartMultipleTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">Step Line Chart</h4>
              <p className="text-sm text-muted-foreground mb-4">Process stage progression</p>
              <RenderEngine layout={lineChartStepTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">Line Chart with Dots</h4>
              <p className="text-sm text-muted-foreground mb-4">User engagement analytics</p>
              <RenderEngine layout={lineChartDotsTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">Financial Analysis</h4>
              <p className="text-sm text-muted-foreground mb-4">Stock performance tracking</p>
              <RenderEngine layout={lineChartFinancialTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">Health Metrics</h4>
              <p className="text-sm text-muted-foreground mb-4">Vital signs monitoring</p>
              <RenderEngine layout={lineChartHealthTemplate} showJsonButton={true} isRootElement={true} />
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">E-learning Progress</h4>
              <p className="text-sm text-muted-foreground mb-4">Student learning analytics</p>
              <RenderEngine layout={lineChartEducationTemplate} showJsonButton={true} isRootElement={true} />
            </div>
          </div>

          {/* Technical Features */}
          <div className="bg-card rounded-lg border border-border p-6 mb-8">
            <h3 className="text-xl font-semibold text-card-foreground mb-4">Line Chart Features</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">📈 Chart Types</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Natural curves</li>
                  <li>• Linear connections</li>
                  <li>• Step interpolation</li>
                  <li>• Data point markers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">🎯 Use Cases</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Trend analysis</li>
                  <li>• Time series data</li>
                  <li>• Performance tracking</li>
                  <li>• Health monitoring</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">⚙️ Interactive Features</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Toggle controls</li>
                  <li>• Hover tooltips</li>
                  <li>• Dynamic data binding</li>
                  <li>• Responsive design</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">🎨 Styling</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Clean aesthetics</li>
                  <li>• Professional colors</li>
                  <li>• Theme adaptation</li>
                  <li>• Consistent spacing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* TOP PERFORMING COUNTRIES COMPONENT */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-4">Top Performing Countries Table</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A clean data table component with flag representations, perfect typography, and theme support. Replicated
              exactly from the provided design.
            </p>
          </div>

          {/* Both Versions */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-6">Exact Design Replica</h3>
              <div className="flex justify-center">
                <RenderEngine layout={topPerformingCountriesTemplate} showJsonButton={true} isRootElement={true} />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-6">Enhanced Version</h3>
              <div className="flex justify-center">
                <RenderEngine
                  layout={topPerformingCountriesEnhancedTemplate}
                  showJsonButton={true}
                  isRootElement={true}
                />
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE STACK COMPONENT */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-4">Image Stack Variations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The image stack component can be configured to handle different aspect ratios. Here are three versions,
              all generated from the same JSON template logic.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-xl font-semibold text-foreground">Portrait (Cropped)</h3>
              <RenderEngine layout={imageStackPortraitTemplate} showJsonButton={true} isRootElement={true} />
            </div>
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-xl font-semibold text-foreground">Square (Cropped)</h3>
              <RenderEngine layout={imageStackSquareTemplate} showJsonButton={true} isRootElement={true} />
            </div>
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-xl font-semibold text-foreground">Original Aspect Ratio</h3>
              <RenderEngine layout={imageStackOriginalTemplate} showJsonButton={true} isRootElement={true} />
            </div>
          </div>
        </div>

        {/* DATABASE REST API COMPONENT */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-4">Database REST API Component - Theme Fixed!</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced component with REST API endpoints, animated data flows, and Framer Motion ripple effects. Now
              fully compatible with dark and light themes.
            </p>
          </div>

          {/* Both Versions */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-6">Full Animated Version</h3>
              <div className="flex justify-center">
                <RenderEngine layout={databaseRestApiTemplate} showJsonButton={true} isRootElement={true} />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-6">Simplified Version</h3>
              <div className="flex justify-center">
                <RenderEngine layout={databaseRestApiSimpleTemplate} showJsonButton={true} isRootElement={true} />
              </div>
            </div>
          </div>
        </div>

        {/* CARD CAROUSEL COMPONENT */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-4">3D Card Carousel</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A custom component showcasing a 3D carousel with Framer Motion, now integrated into the JSON render
              engine.
            </p>
          </div>

          {/* Both Versions */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12 items-center">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-6">Standard Carousel</h3>
              <div className="flex justify-center">
                <RenderEngine layout={cardCarouselTemplate} showJsonButton={true} isRootElement={true} />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-6">Round Carousel</h3>
              <div className="flex justify-center">
                <RenderEngine layout={roundCarouselTemplate} showJsonButton={true} isRootElement={true} />
              </div>
            </div>
          </div>
        </div>

        {/* CPU ARCHITECTURE COMPONENT */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-4">CPU Architecture Diagram</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced SVG component with animated data flows, glowing effects, and complex path animations
            </p>
          </div>

          {/* Both Versions */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-6">Full Animated Version</h3>
              <div className="flex justify-center">
                <RenderEngine layout={cpuArchitectureTemplate} showJsonButton={true} isRootElement={true} />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-6">Simplified Version</h3>
              <div className="flex justify-center">
                <RenderEngine layout={cpuArchitectureSimpleTemplate} showJsonButton={true} isRootElement={true} />
              </div>
            </div>
          </div>
        </div>



        {/* DIET APP COMPONENTS */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-4">Diet App Components</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Modern mobile app interfaces with progress tracking and category management
            </p>
          </div>

          {/* Full Collection */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Complete Collection</h3>
            <div className="flex justify-center">
              <RenderEngine layout={dietAppCollection} showJsonButton={true} isRootElement={true} />
            </div>
          </div>
        </div>

        {/* METRIC CARDS */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-4">Metric Cards</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional dashboard cards with dark and lime themes for displaying key metrics
            </p>
          </div>

          {/* Individual Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-6">Dark - No Title</h3>
              <div className="flex justify-center">
                <RenderEngine layout={darkMetricCardNoTitle} showJsonButton={true} isRootElement={true} />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-6">Dark - With Title</h3>
              <div className="flex justify-center">
                <RenderEngine layout={darkMetricCardWithTitle} showJsonButton={true} isRootElement={true} />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-6">Lime - Company</h3>
              <div className="flex justify-center">
                <RenderEngine layout={limeMetricCardCompany} showJsonButton={true} isRootElement={true} />
              </div>
            </div>
          </div>
        </div>

        {/* SIMPLE EXAMPLES */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-4">Simple Components</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Basic building blocks demonstrating the core functionality of the JSON render system
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-6">Simple Button</h3>
              <div className="flex flex-col items-center">
                <RenderEngine layout={simpleButtonTemplate} showJsonButton={true} isRootElement={true} />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-6">Simple Card</h3>
              <div className="flex flex-col items-center">
                <RenderEngine layout={simpleCardTemplate} showJsonButton={true} isRootElement={true} />
              </div>
            </div>
          </div>
        </div>

        {/* ENHANCED FEATURE OVERVIEW */}
        <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-card-foreground mb-8 text-center">Complete System Features</h2>

          <div className="grid md:grid-cols-5 gap-6 mb-8">
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
                <li>• 10 Area chart types</li>
                <li>• Interactive features</li>
                <li>• Gradient fills</li>
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

          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3">
              <span className="text-sm font-medium text-accent-foreground">
                Test all features with theme switching in the{" "}
                <a href="/playground" className="font-semibold text-primary hover:text-primary/80">
                  Playground →
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
