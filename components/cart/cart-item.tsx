"use client"

import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useCart } from "@/context/cart-context"
import type { CartItem as CartItemType } from "@/lib/types"
import { Button } from "@/components/ui/button"

export function CartItem({ id, name, price, quantity, image, category }: CartItemType) {
  const { updateQuantity, removeItem } = useCart()

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity)
    }
  }

  return (
    <div className="flex gap-4 py-4 border-b border-dark-400">
      <div className="relative w-20 h-20">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover rounded-md" />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-100">{name}</h3>
        <p className="text-sm text-gray-400">{category}</p>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => handleQuantityChange(quantity - 1)}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-8 text-center">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => handleQuantityChange(quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="text-red-500" onClick={() => removeItem(id)}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="text-right">
        <p className="font-medium text-gray-100">${(price * quantity).toFixed(2)}</p>
        <p className="text-sm text-gray-400">${price.toFixed(2)} c/u</p>
      </div>
    </div>
  )
}

