"use client"

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

const links = [
  {
    title: "CATÁLOGO",
    href: "/catalogo",
  },
  {
    title: "NOSOTROS",
    href: "/nosotros",
  },
  {
    title: "CONTACTO",
    href: "/contacto",
  },
]

export function MainNav() {
  return (
    <NavigationMenu className="max-w-fit">
      <NavigationMenuList className="gap-4">
        {links.map((link) => (
          <NavigationMenuItem key={link.href}>
            <Link href={link.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent text-gray-100 hover:bg-dark-800 font-medium px-2",
                )}
              >
                {link.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

