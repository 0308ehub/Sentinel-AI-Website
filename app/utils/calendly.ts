// Calendly utility functions
// Replace 'your-username' with your actual Calendly username
// You can set this via environment variable: NEXT_PUBLIC_CALENDLY_URL
// Example: 'your-username' (without the calendly.com part)
export const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || 'your-username'

// Declare Calendly type for TypeScript
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

export function openCalendlyPopup(eventType?: string) {
  if (typeof window === 'undefined') return

  const url = eventType 
    ? `https://calendly.com/${CALENDLY_URL}/${eventType}`
    : `https://calendly.com/${CALENDLY_URL}`

  // Check if Calendly is already loaded
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url })
  } else {
    // Load Calendly script if not already loaded
    const existingScript = document.querySelector('script[src*="calendly.com"]')
    
    if (!existingScript) {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      document.head.appendChild(script)

      script.onload = () => {
        if (window.Calendly) {
          window.Calendly.initPopupWidget({ url })
        }
      }
    } else {
      // Script is loading, wait for it
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          clearInterval(checkCalendly)
          window.Calendly.initPopupWidget({ url })
        }
      }, 100)

      // Timeout after 5 seconds
      setTimeout(() => clearInterval(checkCalendly), 5000)
    }
  }
}

