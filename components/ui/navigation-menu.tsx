import * as React from "react"
import { cn } from "@/lib/utils"

const NavigationMenu = React.forwardRef<React.ElementRef<"div">, React.ComponentPropsWithoutRef<"div">>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("group relative flex h-9 w-max items-center justify-center", className)} {...props}>
      {children}
    </div>
  ),
)
NavigationMenu.displayName = "NavigationMenu"

const NavigationMenuList = React.forwardRef<React.ElementRef<"ul">, React.ComponentPropsWithoutRef<"ul">>(
  ({ className, children, ...props }, ref) => (
    <ul ref={ref} className={cn("m-0 list-none flex space-x-1", className)} {...props}>
      {children}
    </ul>
  ),
)
NavigationMenuList.displayName = "NavigationMenuList"

const NavigationMenuItem = React.forwardRef<React.ElementRef<"li">, React.ComponentPropsWithoutRef<"li">>(
  ({ className, children, ...props }, ref) => (
    <li ref={ref} className={cn("relative", className)} {...props}>
      {children}
    </li>
  ),
)
NavigationMenuItem.displayName = "NavigationMenuItem"

const NavigationMenuLink = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        "block select-none space-y-0.5 p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent data-[active]:text-accent-foreground",
        className,
      )}
      {...props}
    />
  ),
)
NavigationMenuLink.displayName = "NavigationMenuLink"

const navigationMenuTriggerStyle = () => {
  return "data-[state=open]:bg-accent data-[state=open]:text-accent-foreground inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
}

export { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle }

