/**
 * Dynamic Chart Colors
 * 
 * Shared color palette for all chart components.
 * This replaces hardcoded CSS variables with dynamic colors from JSON data.
 * 
 * Colors are chosen to be:
 * - Visually distinct from each other
 * - Accessible with good contrast
 * - Pleasant to look at in both light and dark themes
 */

export const CHART_COLORS = [
  "#0088FE", // Blue
  "#00C49F", // Teal  
  "#FFBB28", // Yellow
  "#FF8042", // Orange
  "#8884D8", // Purple
  "#82CA9D", // Green
  "#FFC658", // Gold
  "#FF7C7C", // Pink
  "#8DD1E1", // Light Blue
  "#D084D0", // Magenta
  "#A4DE6C", // Light Green
  "#FFC0CB", // Light Pink
  "#87CEEB", // Sky Blue
  "#DDA0DD", // Plum
  "#F0E68C", // Khaki
] as const

/**
 * Get a color from the palette by index
 * Cycles through the palette if index exceeds length
 */
export function getChartColor(index: number): string {
  return CHART_COLORS[index % CHART_COLORS.length]
}

/**
 * Assign colors to data array dynamically
 * Removes any existing fill property and assigns colors by index
 */
export function assignChartColors(data: any[]): any[] {
  return data.map((item, index) => ({
    ...item,
    fill: item.fill || getChartColor(index)
  }))
}

/**
 * Create CSS custom properties for current data
 * Useful when components need CSS variables for styling
 */
export function createChartCSSVars(data: any[], categoryKey: string): Record<string, string> {
  const vars: Record<string, string> = {}
  data.forEach((item, index) => {
    const color = getChartColor(index)
    vars[`--color-${item[categoryKey]}`] = color
  })
  return vars
}

/**
 * Color palette for different chart types
 * Can be extended for specific chart needs
 */
export const CHART_COLOR_PALETTES = {
  default: CHART_COLORS,
  pastel: [
    "#FFE5E5", "#E5F3FF", "#E5FFE5", "#FFF5E5", "#F0E5FF",
    "#E5FFF5", "#FFE5F5", "#F5FFE5", "#E5E5FF", "#FFF0E5"
  ],
  bold: [
    "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF",
    "#00FFFF", "#FF8000", "#8000FF", "#0080FF", "#FF0080"
  ]
} as const 