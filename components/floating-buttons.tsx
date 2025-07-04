"use client"

import { Phone, MessageCircle, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingButtons() {
  const handleCall = () => {
    window.open("tel:+919211475722", "_self")
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/919211475722?text=Hello, I need moving services", "_blank")
  }

  const handleEmail = () => {
    window.open("mailto:info@karnimoverspacker.com", "_self")
  }

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
      <Button
        onClick={handleCall}
        size="icon"
        className="w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </Button>

      <Button
        onClick={handleWhatsApp}
        size="icon"
        className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      <Button
        onClick={handleEmail}
        size="icon"
        className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Email us"
      >
        <Mail className="w-6 h-6" />
      </Button>
    </div>
  )
}
