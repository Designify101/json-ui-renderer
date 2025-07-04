"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface JsonDialogProps {
  jsonData: any
  title?: string
}

export function JsonDialog({ jsonData, title = "Component JSON" }: JsonDialogProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(jsonData, null, 2))
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="mt-4 opacity-80 hover:opacity-100 transition-opacity bg-transparent"
          onClick={copyToClipboard}
        >
          {copied ? "Copied!" : "Copy JSON"}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>The JSON for this component has been copied to your clipboard.</DialogDescription>
        </DialogHeader>
        <div className="relative">
          <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg text-sm overflow-auto max-h-96 border">
            <code>{JSON.stringify(jsonData, null, 2)}</code>
          </pre>
        </div>
      </DialogContent>
    </Dialog>
  )
}
