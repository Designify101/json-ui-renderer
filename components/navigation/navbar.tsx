"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme/theme-toggle"

export function Navbar() {
  const pathname = usePathname()

  const navItems = [
    {
      name: "Home",
      href: "/",
      description: "View all component examples",
    },
    {
      name: "Playground",
      href: "/playground",
      description: "Test JSON rendering",
    },
  ]

  return (
    <nav className="bg-background border-b border-border shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">J</span>
              </div>
              <span className="text-xl font-bold text-foreground">JSON Render Engine</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={`relative ${
                      isActive
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`}
                  >
                    {item.name}
                  </Button>
                </Link>
              )
            })}
          </div>

          {/* Theme Toggle and Additional Info */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">v1.0</span>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
