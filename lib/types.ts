export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
  category: string
}

export interface CartState {
  items: CartItem[]
  totalItems: number
  totalAmount: number
}

