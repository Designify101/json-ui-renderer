import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navigation/navbar"
import { ThemeProvider } from "@/components/theme/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JSON Render Engine",
  description: "Powerful JSON-driven UI system using shadcn/ui components",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
