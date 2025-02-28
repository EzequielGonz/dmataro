"use client"

import { useEffect, useState } from "react"
import { ShoppingCart, X } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"

export function CartPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const { items, totalItems, totalAmount, removeItem } = useCart()

  // Cerrar el panel con la tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [])

  // Prevenir scroll cuando el panel está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleWhatsAppClick = () => {
    const message = `¡Hola! Me interesa comprar los siguientes productos:\n\n${items
      .map((item) => `- ${item.quantity}x ${item.name} ($${item.price} c/u)`)
      .join("\n")}\n\nTotal: $${totalAmount.toFixed(2)}`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/+5492616656484?text=${encodedMessage}`, "_blank")
  }

  if (!isOpen) {
    return (
      <Button variant="outline" size="icon" className="relative" onClick={() => setIsOpen(true)}>
        <ShoppingCart className="h-5 w-5" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </Button>
    )
  }

  return (
    <>
      {/* Botón del carrito */}
      <Button variant="outline" size="icon" className="relative" onClick={() => setIsOpen(true)}>
        <ShoppingCart className="h-5 w-5" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </Button>

      {/* Overlay con blur aumentado */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50" onClick={() => setIsOpen(false)} />

      {/* Panel del carrito con fondo gris oscuro */}
      <aside
        style={{
          background: `linear-gradient(to right, rgba(24, 24, 27, 0.97), rgba(32, 32, 36, 0.97))`,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)", // Para soporte en Safari
        }}
        className="fixed right-0 top-0 h-screen w-full md:w-[400px] border-l border-gray-800/30 p-6 shadow-2xl z-50"
      >
        {/* Encabezado del panel */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Tu Carrito</h2>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="hover:bg-gray-800/20">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh]">
            <ShoppingCart className="h-12 w-12 text-gray-400/50 mb-4" />
            <p className="text-gray-400/50">Tu carrito está vacío</p>
          </div>
        ) : (
          <>
            {/* Lista de productos */}
            <div className="flex-1 overflow-y-auto max-h-[calc(100vh-280px)] mb-6 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: "rgba(28, 28, 32, 0.95)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }}
                  className="flex items-center gap-4 p-4 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] border border-gray-800/30 relative"
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-white">{item.name}</h3>
                    <p className="text-sm text-gray-400/70">Cantidad: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-white">${(item.price * item.quantity).toFixed(2)}</p>
                    <p className="text-sm text-gray-400/70">${item.price.toFixed(2)} c/u</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8 rounded-full bg-gray-700 hover:bg-red-600 transition-colors"
                    onClick={() => removeItem(item.id)}
                  >
                    <X className="h-4 w-4 text-white" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Resumen y botón de WhatsApp */}
            <div className="border-t border-gray-800/30 pt-6 space-y-4">
              <div
                style={{
                  background: "rgba(28, 28, 32, 0.95)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
                className="flex justify-between items-center p-4 rounded-lg border border-gray-800/30"
              >
                <span className="text-lg font-bold text-white">Total</span>
                <span className="text-lg font-bold text-white">${totalAmount.toFixed(2)}</span>
              </div>

              <Button variant="whatsapp" className="w-full py-6 text-lg group" onClick={handleWhatsAppClick}>
                <ShoppingCart className="w-6 h-6 mr-2 animate-bounce group-hover:animate-none" />
                Consultar por WhatsApp
              </Button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

