import { ChartRadialInteractive } from "@/components/charts/chart-radial-interactive"

export default function TestRadialPage() {
  return (
    <div className="container mx-auto p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Interactive Radial Chart Test</h1>
        <p className="text-muted-foreground">
          Testing the new interactive radial chart component with proper layout and functionality.
        </p>
      </div>
      
      <ChartRadialInteractive />
    </div>
  )
} 