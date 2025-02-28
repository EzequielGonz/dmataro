import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { SplashScreen } from "@/components/splash-screen"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CustomCursor } from "@/components/custom-cursor"
import { CartProvider } from "@/context/cart-context"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "¡Bienvenido a la tienda de Distribuidora Mataró!",
  description: "Tu tienda premium de vinos y licores de alta calidad",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-dark-900 text-gray-100`}>
        <CartProvider>
          <SplashScreen />
          <SiteHeader />
          {children}
          <SiteFooter />
          <CustomCursor />
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}



import './globals.css'