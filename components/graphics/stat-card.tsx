import type { StatCardData } from "@/types/graphics"

interface StatCardProps {
  data: StatCardData
}

export function StatCard({ data }: StatCardProps) {
  const { title, value, subtitle, icon, color = "blue" } = data

  const colorClasses = {
    blue: "text-blue-600 bg-blue-50 border-blue-200",
    green: "text-green-600 bg-green-50 border-green-200",
    red: "text-red-600 bg-red-50 border-red-200",
    purple: "text-purple-600 bg-purple-50 border-purple-200",
    orange: "text-orange-600 bg-orange-50 border-orange-200",
  }

  return (
    <div
      className={`
      w-full max-w-xs p-4 rounded-lg border shadow-sm bg-white
      ${data.responsive !== false ? "min-w-0" : ""}
      ${data.className || ""}
    `}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        {icon && (
          <div
            className={`
            w-12 h-12 rounded-lg flex items-center justify-center text-xl
            ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}
          `}
          >
            {icon}
          </div>
        )}
      </div>
    </div>
  )
}
