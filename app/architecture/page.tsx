"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RenderEngine } from "@/components/render-engine/render-engine"
import { ArrowLeft, Cpu, Database, Network, Copy, Check } from "lucide-react"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"

// Import architecture template components
import { cpuArchitectureTemplate, cpuArchitectureSimpleTemplate } from "@/lib/cpu-architecture-template"
import { databaseRestApiTemplate } from "@/lib/database-rest-api-template"

export default function ArchitecturePage() {
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
              <h1 className="text-3xl font-bold text-foreground">Architecture Components</h1>
              <p className="text-muted-foreground">
                Technical diagrams, system visualizations, and infrastructure components
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">3+ Templates</Badge>
            <Badge variant="outline">Animated</Badge>
          </div>
        </div>

        {/* Featured Interactive Component */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl p-8 border">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-foreground mb-2">CPU Architecture Diagram</h2>
            <p className="text-muted-foreground">Animated CPU with flowing data paths and glowing effects</p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <RenderEngine layout={cpuArchitectureTemplate} />
            </div>
          </div>
        </div>

        {/* Template Grid */}
        <div className="grid gap-8">
          <h2 className="text-2xl font-semibold text-foreground">All Architecture Templates</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* CPU Architecture Animated */}
            <Card className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">CPU Architecture</CardTitle>
                  <Badge variant="secondary">Animated</Badge>
                </div>
                <CardDescription>
                  Advanced CPU diagram with flowing data paths and glowing effects
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4 bg-muted/50 flex justify-center min-h-[200px] items-center">
                  <div className="w-full max-w-sm">
                    <RenderEngine layout={cpuArchitectureTemplate} />
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => handleCopy(cpuArchitectureTemplate, "CPU Architecture")}
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

            {/* CPU Architecture Simple */}
            <Card className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">CPU Simple</CardTitle>
                  <Badge variant="secondary">Static</Badge>
                </div>
                <CardDescription>
                  Simplified CPU diagram without complex animations for testing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4 bg-muted/50 flex justify-center min-h-[200px] items-center">
                  <div className="w-full max-w-sm">
                    <RenderEngine layout={cpuArchitectureSimpleTemplate} />
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => handleCopy(cpuArchitectureSimpleTemplate, "CPU Simple")}
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

            {/* Database REST API */}
            <Card className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Database REST API</CardTitle>
                  <Badge variant="secondary">Interactive</Badge>
                </div>
                <CardDescription>
                  Animated database with REST API endpoints and data connections
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4 bg-muted/50 flex justify-center min-h-[200px] items-center">
                  <div className="w-full max-w-sm">
                    <RenderEngine layout={databaseRestApiTemplate} />
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => handleCopy(databaseRestApiTemplate, "Database REST API")}
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
                <span className="text-lg">🔗</span>
                SVG Graphics
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Scalable vector graphics</li>
                <li>• Crisp at any resolution</li>
                <li>• Lightweight rendering</li>
                <li>• Theme-aware colors</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">✨</span>
                Animations
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Flowing data paths</li>
                <li>• Glowing effects</li>
                <li>• Gradient animations</li>
                <li>• Smooth transitions</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">🎨</span>
                Styling
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Dark/light theme support</li>
                <li>• Custom gradients</li>
                <li>• Filter effects</li>
                <li>• Responsive design</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">⚙️</span>
                Customizable
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Configurable colors</li>
                <li>• Adjustable timing</li>
                <li>• Custom data flows</li>
                <li>• Badge customization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-muted/50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-foreground mb-6 text-center">Use Cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                <Cpu className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Technical Documentation</h3>
              <p className="text-sm text-muted-foreground">
                Illustrate system architecture in documentation and presentations
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                <Database className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">API Documentation</h3>
              <p className="text-sm text-muted-foreground">
                Visualize database connections and REST API endpoints
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                <Network className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">System Diagrams</h3>
              <p className="text-sm text-muted-foreground">
                Create engaging technical diagrams for presentations and blogs
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