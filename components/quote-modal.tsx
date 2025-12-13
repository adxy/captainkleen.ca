"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, CheckCircle2, Sparkles } from "lucide-react"
import { submitQuoteRequest } from "@/app/actions/submit-quote"

interface QuoteModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function QuoteModal({ open, onOpenChange }: QuoteModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const phone = formData.get("phone") as string
    const details = formData.get("details") as string

    try {
      const result = await submitQuoteRequest({
        name,
        phone,
        details,
      })

      if (result.success) {
        setIsSuccess(true)
        setTimeout(() => {
          setIsSuccess(false)
          onOpenChange(false)
        }, 2500)
      } else {
        setError(result.error || "Something went wrong. Please try again.")
      }
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        {isSuccess ? (
          <div className="py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Thank you!</h3>
            <p className="text-muted-foreground">We&apos;ve received your request and will call you within 24 hours.</p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary-foreground" />
                </div>
                <DialogTitle className="text-foreground">Get Your Free Quote</DialogTitle>
              </div>
              <DialogDescription className="text-muted-foreground">
                Tell us what you need and we&apos;ll get back to you within 24 hours.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Your Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Smith"
                  required
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(416) 555-1234"
                  required
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="details" className="text-foreground">
                  What needs to be cleaned?
                </Label>
                <Textarea
                  id="details"
                  name="details"
                  placeholder="Tell us what you need cleaned (e.g., carpet, sofa, mattress, whole house...)"
                  rows={3}
                  required
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>

              {error && <p className="text-sm text-destructive">{error}</p>}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Request Free Quote"
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to receive a call from our team. We respect your privacy and never share your
                information.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
