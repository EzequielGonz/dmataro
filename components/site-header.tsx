import Link from "next/link"
import { Logo } from "./logo"
import { MainNav } from "./main-nav"
import { NavUtils } from "./nav-utils"
import { Phone, Mail, Facebook, Instagram, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-dark-400 bg-dark-900/95 backdrop-blur supports-[backdrop-filter]:bg-dark-900/75">
      <div className="container mx-auto">
        {/* Top bar con información de contacto y redes sociales */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm text-gray-400 border-b border-dark-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              +54 9 261 665-6484
            </span>
            <span className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              info@distribuidoramataro.com
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://www.facebook.com/DistribuidoraMataro/" className="hover:text-white transition-colors">
              <Facebook className="w-4 h-4" />
            </Link>
            <Link href="https://www.instagram.com/distribuidoramataro/" className="hover:text-white transition-colors">
              <Instagram className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Main navbar */}
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo section */}
          <Link href="/" className="flex items-center z-10">
            <Logo />
          </Link>

          {/* Navigation - Desktop */}
          <div className="hidden md:flex items-center justify-center absolute left-0 right-0">
            <MainNav />
          </div>

          {/* Utils section */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <NavUtils />

            {/* Mobile menu button - Lo mantenemos pero sin contenido */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-dark-900/95 backdrop-blur">
                <SheetHeader className="mb-4">
                  <SheetTitle>Menú</SheetTitle>
                </SheetHeader>
                {/* Menú móvil vacío */}
                <nav className="flex flex-col gap-4"></nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

