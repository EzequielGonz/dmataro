"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { AutoSliderBanner } from "@/components/auto-slider-banner"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Truck, Clock, Shield } from "lucide-react"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const products = [
    {
      id: 1,
      name: "Los Patos Joven Malbec",
      price: 30250,
      category: "Vinos",
      description:
        "Variedad: 100% Malbec Graduacion: 13% Contenido: 750ml. Cosecha: 2019 Maridaje: carnes rojas, quesos y pastas",
      image1: "https://blending.com.ar/distribuidoramataro/img-prod/10.jpeg?v=1721664120",
      image2: "https://i.ibb.co/1YQh4yCL/OIP-1.jpg",
    },
    {
      id: 2,
      name: "Los Patos Joven Cabernet Sauvignon",
      price: 30250,
      category: "Vinos",
      description:
        "Variedad: 100% Cabarnet Sauvignon Graduacion: 13% Contenido: 750ml. Cosecha: 2019 Maridaje: carnes rojas, quesos y pastas",
      image1: "https://blending.com.ar/distribuidoramataro/img-prod/11.jpeg?v=1721664097",
      image2: "https://i.ibb.co/Kxvqgn9b/v0188a-980x980-1.png",
    },
    {
      id: 3,
      name: "Los Patos Joven Cabernet Franc",
      price: 30250,
      category: "Vinos",
      description:
        "Variedad: 100% Cabernet Franc Graduacion: 13% Contenido: 750ml. Cosecha: 2019 Mairdaje: Carnes rojas, quesos y pastas",
      image1: "https://blending.com.ar/distribuidoramataro/img-prod/12.jpeg?v=1721663987",
      image2: "https://i.ibb.co/SD1b5rFw/lospatoscabernetfranc.jpg",
    },
    {
      id: 4,
      name: "Los Patos Joven 4 Tintas Blend",
      price: 30250,
      category: "Vinos",
      description:
        "Variedad: 4 Tintas Blend Graduacion: 13% Contenido: 750ml. Cosecha: 2019 Maridaje: carnes rojas, quesos y pastas",
      image1: "https://blending.com.ar/distribuidoramataro/img-prod/13.jpeg?v=1721664065",
      image2: "https://i.ibb.co/6Rx58FwX/los-patos-joven-4-tintas-blend.jpg",
    },
    {
      id: 5,
      name: "Los Patos Bag in box Malbec 4 unid x3lts",
      price: 56200,
      category: "Vinos",
      description:
        "Variedad: 100% Malbec Graduacion: 13% Contenido: 750ml. Cosecha: 2019 Maridaje: carnes rojas, quesos y pastas",
      image1: "https://abrildistribuciones.com.ar/wp-content/uploads/2021/07/Sin-titulo-1_0002_Bag-In-Box-malbec-2.jpg",
      image2: "https://blending.com.ar/distribuidoramataro/img-prod/14.jpeg?v=1721658584",
    },
    {
      id: 6,
      name: "Los Patos Coleccion Reserva Malbec",
      price: 40900,
      category: "Vinos Reserva",
      description:
        "Variedad: 100% Malbec Graduacion: 13,5% Contenido: 750ml. Cosecha: 2022 6 meses en barricas de roble Frances Procedencia: Agrelo, Mendoza. 1050 msnm",
      image1: "https://blending.com.ar/distribuidoramataro/img-prod/15.jpeg?v=1721661859",
      image2: "https://www.madacilo.com.ar/9973-thickbox_default/lh-estate-chardonay-x750.jpg",
    },
    {
      id: 7,
      name: "Los Patos Coleccion Reserva Cabernet Sauvignon",
      price: 40900,
      category: "Vinos Reserva",
      description:
        "Variedad: 100% Cabernet Sauvignon Graduacion: 13,5% Contenido: 750ml. Cosecha: 2022 6 meses em barricas de roble frances Procedencia: Agrelo, Mendoza. 1050 msnm",
      image1: "https://blending.com.ar/distribuidoramataro/img-prod/15.jpeg?v=1721661859",
      image2:
        "https://acdn.mitiendanube.com/stores/001/144/183/products/dsc_03901-8334dea42136c0ee0c16915118959856-480-0.jpg",
    },
    {
      id: 8,
      name: "Los Patos Coleccion Reserva 4 Tintas Blend",
      price: 40900,
      category: "Vinos Reserva",
      description:
        "Variedad: 100% 4 Tintas Blend Graduacion: 13,5% Contenido: 750ml. Cosecha: 2022 6 meses en barricas de roble frances Procedencia: Agrelo, Mendoza. 1050 msnm",
      image1: "https://blending.com.ar/distribuidoramataro/img-prod/15.jpeg?v=1721661859",
      image2:
        "https://acdn.mitiendanube.com/stores/005/076/729/products/los-patos-joven-cab-franc-3eab76f82ab91a38f117264970442588-480-0.png",
    },
  ]

  const categories = ["All", "Vinos", "Vinos Reserva", "Vinos Gran Reserva", "Gin", "Fernet", "Aperitivos", "Jugos"]

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <AutoSliderBanner />

      <section id="product-section" className="w-full py-12 md:py-24 bg-dark-900">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-100">Productos Recomendados</h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-5 mb-14 px-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="hover:bg-primary hover:text-primary-foreground px-5 py-4 text-base font-medium"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Botón Ir a la tienda */}
          <div className="flex justify-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => (window.location.href = "/catalogo")}
            >
              Ir a la tienda
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Nueva sección de banners promocionales */}
      <section className="w-full bg-dark-800 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Banner 1 */}
            <div className="relative h-[300px] group overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-700 opacity-90 transition-opacity group-hover:opacity-100" />
              <img
                src="https://i.ibb.co/8L2jgMC1/logan-weaver-lgnwvr-DXKtbz0ko-CI-unsplash.jpg"
                alt="Premium Wines"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Selección Premium</h3>
                <p className="text-gray-100">Descubre nuestra exclusiva colección de vinos y licores</p>
              </div>
            </div>

            {/* Banner 2 */}
            <div className="relative h-[300px] group overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-900 to-amber-700 opacity-90 transition-opacity group-hover:opacity-100" />
              <img
                src="https://i.ibb.co/ZzBJwcS9/wmremove-transformed.jpg"
                alt="Special Events"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Eventos Especiales</h3>
                <p className="text-gray-100">La mejor selección para tus momentos más importantes</p>
              </div>
            </div>

            {/* Banner 3 */}
            <div className="relative h-[300px] group overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-700 opacity-90 transition-opacity group-hover:opacity-100" />
              <img
                src="https://i.ibb.co/Y4wLgnk9/wmremove-transformed-1.jpg"
                alt="Corporate Gifts"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Regalos Corporativos</h3>
                <p className="text-gray-100">Sorprende con nuestras selecciones especiales</p>
              </div>
            </div>
          </div>

          {/* Sección de características */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Característica 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-red-900/20 flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-red-500" />
              </div>
              <h4 className="text-lg font-semibold text-gray-100 mb-2">Calidad Premium</h4>
              <p className="text-sm text-gray-400">Selección de las mejores bodegas</p>
            </div>

            {/* Característica 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-red-900/20 flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-red-500" />
              </div>
              <h4 className="text-lg font-semibold text-gray-100 mb-2">Envío Gratis</h4>
              <p className="text-sm text-gray-400">En compras superiores a $50.000</p>
            </div>

            {/* Característica 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-red-900/20 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-500" />
              </div>
              <h4 className="text-lg font-semibold text-gray-100 mb-2">Entrega Rápida</h4>
              <p className="text-sm text-gray-400">24-48 horas en CABA</p>
            </div>

            {/* Característica 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-red-900/20 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-500" />
              </div>
              <h4 className="text-lg font-semibold text-gray-100 mb-2">Garantía Total</h4>
              <p className="text-sm text-gray-400">100% satisfacción garantizada</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

