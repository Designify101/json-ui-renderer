import { useState } from "react"

export function useCopyToClipboard() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      return true
    } catch (err) {
      console.error("Failed to copy to clipboard:", err)
      // Fallback method for older browsers or when clipboard API fails
      try {
        const textArea = document.createElement("textarea")
        textArea.value = text
        textArea.style.position = "fixed"
        textArea.style.left = "-999999px"
        textArea.style.top = "-999999px"
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        const result = document.execCommand("copy")
        document.body.removeChild(textArea)
        if (result) {
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
          return true
        }
      } catch (fallbackError) {
        console.error("Fallback copy method failed:", fallbackError)
      }
      return false
    }
  }

  return { copied, copyToClipboard }
} 