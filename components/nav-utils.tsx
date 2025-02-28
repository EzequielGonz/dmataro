"use client"

import { CartPanel } from "./cart/cart-panel"

export function NavUtils() {
  return (
    <div className="flex items-center gap-4">
      <CartPanel />
    </div>
  )
}

