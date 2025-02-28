"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useCart } from "@/context/cart-context"
import { toast } from "sonner"

interface ProductCardProps {
  id: number
  name: string
  price: number
  image1: string
  image2: string
  category: string
  description: string
}

export function ProductCard({ id, name, price, image1, image2, category, description }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [imageError1, setImageError1] = useState(false)
  const [imageError2, setImageError2] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,
      quantity: 1,
      image: image1,
      category,
    })
    toast.success("Producto agregado al carrito")
  }

  const handleImageError1 = () => {
    setImageError1(true)
  }

  const handleImageError2 = () => {
    setImageError2(true)
  }

  return (
    <>
      <div
        className="bg-dark-800 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
        onClick={() => setShowModal(true)}
      >
        <div
          className="relative aspect-square"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={imageError1 ? "/placeholder.svg" : image1}
            alt={name}
            fill
            className="object-cover transition-opacity duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            onError={handleImageError1}
            priority
          />
          {isHovered && (
            <Image
              src={imageError2 ? "/placeholder.svg" : image2}
              alt={`${name} - Vista alternativa`}
              fill
              className="object-cover transition-opacity duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              onError={handleImageError2}
            />
          )}
          <div className="absolute top-2 right-2 bg-dark-900/80 px-3 py-1 rounded-full text-sm">{category}</div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-100">{name}</h3>
          <p className="text-gray-400 mb-4">${price.toFixed(2)}</p>
          <Button
            className="w-full"
            variant="outline"
            onClick={(e) => {
              e.stopPropagation()
              handleAddToCart()
            }}
          >
            Agregar al Carrito
          </Button>
        </div>
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="bg-dark-800 text-gray-100 border-dark-600">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{name}</DialogTitle>
            <div className="text-lg text-primary">${price.toFixed(2)}</div>
          </DialogHeader>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={imageError1 ? "/placeholder.svg" : image1}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              onError={handleImageError1}
              priority
            />
          </div>
          <DialogDescription className="text-gray-300">{description}</DialogDescription>
          <div className="flex gap-4 mt-4">
            <Button className="flex-1" variant="default" onClick={handleAddToCart}>
              Agregar al Carrito
            </Button>
            <Button className="flex-1" variant="outline" onClick={() => setShowModal(false)}>
              Cerrar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

