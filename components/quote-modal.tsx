"use client"

import { useEffect } from "react"

interface QuoteModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

declare global {
  interface Window {
    Tally: any
  }
}

export function QuoteModal({ open, onOpenChange }: QuoteModalProps) {
  useEffect(() => {
    if (open) {
      if (typeof window !== "undefined" && window.Tally) {
        window.Tally.openPopup("A7Klvo", {
          layout: "modal",
          width: 700,
          onClose: () => onOpenChange(false),
        })
      } else {
        // Fallback or retry if Tally isn't loaded yet
        const timer = setTimeout(() => {
          if (window.Tally) {
            window.Tally.openPopup("A7Klvo", {
              layout: "modal",
              width: 700,
              onClose: () => onOpenChange(false),
            })
          } else {
            console.warn("Tally script not loaded")
            onOpenChange(false)
          }
        }, 500)
        return () => clearTimeout(timer)
      }
    }
  }, [open, onOpenChange])

  return null
}
