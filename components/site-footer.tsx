import { MapPin, Wine, Award } from "lucide-react"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="bg-dark-900 text-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y contacto */}
          <div className="space-y-4">
            <div className="relative w-40 h-16">
              <Image
                src="https://i.ibb.co/WWtLjTxv/JPG-4-removebg-preview.png"
                alt="Distribuidora Mataró Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-600" />
                <span className="text-sm text-gray-300 hover:text-white transition-colors">
                  Paso de los andes, 498 Godoy Cruz
                </span>
              </div>
            </div>
          </div>

          {/* Métodos de pago */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-4 text-lg text-red-600">Métodos de Pago</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-dark-800 p-2 rounded border border-dark-600 hover:border-red-600 transition-colors">
                  <Image
                    src="https://static.vecteezy.com/system/resources/previews/020/975/572/original/visa-logo-visa-icon-transparent-free-png.png"
                    alt="Visa"
                    width={60}
                    height={30}
                    className="object-contain w-full h-8"
                  />
                </div>
                <div className="bg-dark-800 p-2 rounded border border-dark-600 hover:border-red-600 transition-colors">
                  <Image
                    src="https://th.bing.com/th/id/OIP.XB4rmtkf7lHyEcmXjryjYAHaEq?rs=1&pid=ImgDetMain"
                    alt="Mastercard"
                    width={60}
                    height={30}
                    className="object-contain w-full h-8"
                  />
                </div>
                <div className="bg-dark-800 p-2 rounded border border-dark-600 hover:border-red-600 transition-colors">
                  <Image
                    src="https://logotipoz.com/wp-content/uploads/2021/10/version-horizontal-large-logo-mercado-pago.webp"
                    alt="Mercado Pago"
                    width={60}
                    height={30}
                    className="object-contain w-full h-8"
                  />
                </div>
              </div>
            </div>

            {/* Características */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center mb-2">
                  <Wine className="w-5 h-5 text-red-600" />
                </div>
                <p className="text-xs text-gray-400">Selección Premium</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center mb-2">
                  <Award className="w-5 h-5 text-red-600" />
                </div>
                <p className="text-xs text-gray-400">Calidad Garantizada</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright y advertencia */}
        <div className="mt-12 pt-8 border-t border-dark-600">
          <div className="text-center">
            <p className="mb-4 text-sm text-gray-400">© 2024 Distribuidora Mataró. Todos los derechos reservados.</p>
            <p className="text-xs uppercase tracking-wide bg-red-600/10 text-red-500 py-2 px-4 rounded-lg inline-block">
              TOMAR BEBIDAS ALCOHÓLICAS EN EXCESO ES DAÑINO. ESTÁ PROHIBIDA LA VENTA DE ALCOHOL A MENORES DE 18 AÑOS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

