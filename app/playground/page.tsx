"use client"

import { useState } from "react"
import { RenderEngine } from "@/components/render-engine/render-engine"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { RenderLayout } from "@/types/render-schema"
import { simpleCardTemplate, simpleButtonTemplate } from "@/lib/simple-templates"
import { darkMetricCardNoTitle } from "@/lib/metric-card-templates"
import { dietClubsInterface } from "@/lib/diet-app-templates"
import { databaseRestApiTemplate } from "@/lib/database-rest-api-template"

const exampleTemplates = [
  {
    name: "Simple Button",
    description: "Basic button component",
    template: simpleButtonTemplate,
  },
  {
    name: "Simple Card",
    description: "Card with header and content",
    template: simpleCardTemplate,
  },
  {
    name: "Dark Metric Card",
    description: "Professional metric display",
    template: darkMetricCardNoTitle,
  },
  {
    name: "Diet Clubs Interface",
    description: "Mobile app interface",
    template: dietClubsInterface,
  },
  {
    name: "Database REST API",
    description: "Animated API component",
    template: databaseRestApiTemplate,
  },
]

export default function PlaygroundPage() {
  const [jsonInput, setJsonInput] = useState("")
  const [parsedLayout, setParsedLayout] = useState<RenderLayout | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isValid, setIsValid] = useState(false)

  const handleJsonChange = (value: string) => {
    setJsonInput(value)

    if (!value.trim()) {
      setParsedLayout(null)
      setError(null)
      setIsValid(false)
      return
    }

    try {
      const parsed = JSON.parse(value)

      // Basic validation for RenderLayout structure
      if (!parsed.id || !parsed.root) {
        throw new Error("JSON must have 'id' and 'root' properties")
      }

      setParsedLayout(parsed as RenderLayout)
      setError(null)
      setIsValid(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid JSON")
      setParsedLayout(null)
      setIsValid(false)
    }
  }

  const loadExample = (template: RenderLayout) => {
    const jsonString = JSON.stringify(template, null, 2)
    setJsonInput(jsonString)
    handleJsonChange(jsonString)
  }

  const clearPlayground = () => {
    setJsonInput("")
    setParsedLayout(null)
    setError(null)
    setIsValid(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto py-12 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">JSON Playground</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Test and experiment with JSON structures. Paste your JSON or load an example to see it rendered in
            real-time. Now with full theme support!
          </p>
        </div>

        {/* Theme Notice */}
        <div className="mb-8 p-4 bg-card border border-border rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">🎨</span>
            <h3 className="font-semibold text-card-foreground">Theme Testing</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Use the theme toggle in the navigation bar to test how your components look in both light and dark modes.
            All components should adapt automatically to the selected theme.
          </p>
        </div>

        {/* Example Templates */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Quick Start Examples</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {exampleTemplates.map((example, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{example.name}</CardTitle>
                  <CardDescription className="text-sm">{example.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button onClick={() => loadExample(example.template)} variant="outline" size="sm" className="w-full">
                    Load Example
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Playground */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* JSON Input */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-foreground">JSON Input</h2>
              <div className="flex items-center gap-2">
                {isValid && (
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Valid JSON
                  </Badge>
                )}
                {error && (
                  <Badge variant="outline" className="text-red-600 border-red-600">
                    Invalid
                  </Badge>
                )}
                <Button onClick={clearPlayground} variant="outline" size="sm">
                  Clear
                </Button>
              </div>
            </div>

            <Card>
              <CardContent className="p-0">
                <textarea
                  value={jsonInput}
                  onChange={(e) => handleJsonChange(e.target.value)}
                  placeholder={`Paste your JSON here or load an example above...

Example structure:
{
  "id": "my-component",
  "title": "My Component",
  "root": {
    "type": "Card",
    "props": {
      "className": "p-4"
    },
    "children": [
      {
        "text": "Hello World"
      }
    ]
  }
}`}
                  className="w-full h-96 p-4 font-mono text-sm border-0 resize-none focus:outline-none focus:ring-0 bg-background text-foreground"
                  spellCheck={false}
                  suppressHydrationWarning
                />
              </CardContent>
            </Card>

            {error && (
              <div className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                <h3 className="text-sm font-medium text-destructive mb-1">JSON Error</h3>
                <p className="text-sm text-destructive/80">{error}</p>
              </div>
            )}
          </div>

          {/* Rendered Output */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Rendered Output</h2>

            <Card className="min-h-96">
              <CardContent className="p-6">
                {!jsonInput.trim() && (
                  <div className="flex items-center justify-center h-80 text-muted-foreground">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📝</span>
                      </div>
                      <p className="text-lg font-medium mb-2">No JSON to render</p>
                      <p className="text-sm">
                        Enter JSON in the input area or load an example to see the rendered output
                      </p>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="flex items-center justify-center h-80 text-destructive">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">❌</span>
                      </div>
                      <p className="text-lg font-medium mb-2">Cannot render</p>
                      <p className="text-sm">Fix the JSON errors to see the rendered output</p>
                    </div>
                  </div>
                )}

                {parsedLayout && !error && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        ✓ Rendered Successfully
                      </Badge>
                      <span className="text-sm text-muted-foreground">{parsedLayout.title || parsedLayout.id}</span>
                    </div>

                    <div className="border border-border rounded-lg p-4 bg-card">
                      <RenderEngine layout={parsedLayout} />
                    </div>

                    {parsedLayout.description && (
                      <p className="text-sm text-muted-foreground italic">{parsedLayout.description}</p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-card rounded-2xl border border-border p-8">
          <h2 className="text-2xl font-bold text-card-foreground mb-6">How to Use the Playground</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-card-foreground mb-4">📝 JSON Structure</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • <strong>id</strong>: Unique identifier for the component
                </li>
                <li>
                  • <strong>title</strong>: Optional display name
                </li>
                <li>
                  • <strong>description</strong>: Optional description
                </li>
                <li>
                  • <strong>root</strong>: The main component structure
                </li>
                <li>
                  • <strong>data</strong>: Optional data for dynamic content
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-card-foreground mb-4">🎯 Tips</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Start with an example template</li>
                <li>• Use the "View JSON" buttons on the home page</li>
                <li>• Check for proper JSON syntax (no trailing commas)</li>
                <li>• Test with both light and dark themes</li>
                <li>• Use theme-aware CSS classes</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-accent rounded-lg">
            <p className="text-sm text-accent-foreground">
              <strong>Pro Tip:</strong> Copy JSON from any component on the{" "}
              <a href="/" className="text-primary hover:text-primary/80 font-semibold">
                home page
              </a>{" "}
              using the "View JSON" buttons, then paste it here to experiment and modify! Don't forget to test with both
              light and dark themes using the toggle in the navigation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
