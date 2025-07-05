import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format numbers into readable format (e.g., 12000 → 12k, 1200000 → 1.2M)
 */
export function formatNumber(value: number): string {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
  }
  if (value >= 1000) {
    return (value / 1000).toFixed(1).replace(/\.0$/, '') + 'k'
  }
  return value.toString()
}

/**
 * Format numbers with locale string for comma separation
 */
export function formatNumberWithCommas(value: number): string {
  return value.toLocaleString()
}
