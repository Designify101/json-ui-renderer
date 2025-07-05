"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Copy, Check } from "lucide-react"

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
        >
          View JSON
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            View and copy the JSON configuration for this component.
          </DialogDescription>
        </DialogHeader>
        
        {/* JSON Content with scrollable area */}
        <div className="flex-1 min-h-0 relative">
          <pre className="bg-muted/50 p-4 rounded-lg text-xs font-mono overflow-auto max-h-[60vh] border whitespace-pre-wrap break-all">
            <code>{JSON.stringify(jsonData, null, 2)}</code>
          </pre>
        </div>

        {/* Footer with copy button */}
        <DialogFooter className="flex-shrink-0">
          <Button
            onClick={copyToClipboard}
            variant="default"
            className="gap-2"
            disabled={copied}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy JSON
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
