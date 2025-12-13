"use server"

interface QuoteRequest {
  name: string
  phone: string
  details: string
}

export async function submitQuoteRequest(data: QuoteRequest) {
  try {
    const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL

    if (!GOOGLE_SHEETS_URL) {
      console.log("Quote Request Received:", {
        timestamp: new Date().toISOString(),
        ...data,
      })
      return { success: true }
    }

    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        name: data.name,
        phone: data.phone,
        whatNeedsCleaning: data.details,
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to submit")
    }

    return { success: true }
  } catch (error) {
    console.error("Error submitting quote request:", error)
    return { success: false, error: "Failed to submit request. Please try again." }
  }
}
