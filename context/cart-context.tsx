"use client"

import type React from "react"

import { createContext, useContext, useEffect, useReducer } from "react"
import type { CartItem, CartState } from "@/lib/types"

interface CartContextType extends CartState {
  addItem: (item: CartItem) => void
  removeItem: (itemId: number) => void
  updateQuantity: (itemId: number, quantity: number) => void
  clearCart: () => void
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
}

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartState }

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id)

      if (existingItemIndex > -1) {
        const updatedItems = state.items.map((item, index) => {
          if (index === existingItemIndex) {
            return { ...item, quantity: item.quantity + action.payload.quantity }
          }
          return item
        })

        return {
          ...state,
          items: updatedItems,
          totalItems: updatedItems.reduce((acc, item) => acc + item.quantity, 0),
          totalAmount: updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
        }
      }

      const newItems = [...state.items, action.payload]
      return {
        ...state,
        items: newItems,
        totalItems: newItems.reduce((acc, item) => acc + item.quantity, 0),
        totalAmount: newItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
      }
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter((item) => item.id !== action.payload)
      return {
        ...state,
        items: newItems,
        totalItems: newItems.reduce((acc, item) => acc + item.quantity, 0),
        totalAmount: newItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
      }
    }

    case "UPDATE_QUANTITY": {
      const newItems = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: action.payload.quantity }
        }
        return item
      })
      return {
        ...state,
        items: newItems,
        totalItems: newItems.reduce((acc, item) => acc + item.quantity, 0),
        totalAmount: newItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
      }
    }

    case "CLEAR_CART":
      return initialState

    case "LOAD_CART":
      return action.payload

    default:
      return state
  }
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      dispatch({ type: "LOAD_CART", payload: JSON.parse(savedCart) })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state))
  }, [state])

  const addItem = (item: CartItem) => {
    dispatch({ type: "ADD_ITEM", payload: item })
  }

  const removeItem = (itemId: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: itemId })
  }

  const updateQuantity = (itemId: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id: itemId, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  return (
    <CartContext.Provider value={{ ...state, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

