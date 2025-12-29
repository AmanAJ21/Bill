"use client"

import * as React from "react"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

interface DropdownMenuContextType {
  open: boolean
  setOpen: (open: boolean) => void
}

const DropdownMenuContext = React.createContext<DropdownMenuContextType | null>(null)

const DropdownMenu = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false)

  return (
    <DropdownMenuContext.Provider value={{ open, setOpen }}>
      <div className="relative">{children}</div>
    </DropdownMenuContext.Provider>
  )
}

const DropdownMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }
>(({ className, children, asChild, ...props }, ref) => {
  const context = React.useContext(DropdownMenuContext)
  if (!context) throw new Error("DropdownMenuTrigger must be used within DropdownMenu")

  const { open, setOpen } = context

  if (asChild) {
    return React.cloneElement(children as React.ReactElement, {
      onClick: () => setOpen(!open),
      "data-state": open ? "open" : "closed",
    } as any)
  }

  return (
    <button
      ref={ref}
      className={className}
      onClick={() => setOpen(!open)}
      data-state={open ? "open" : "closed"}
      {...props}
    >
      {children}
    </button>
  )
})
DropdownMenuTrigger.displayName = "DropdownMenuTrigger"

const DropdownMenuContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    side?: "top" | "right" | "bottom" | "left"
    align?: "start" | "center" | "end"
    sideOffset?: number
  }
>(({ className, children, side = "bottom", align = "center", sideOffset = 4, ...props }, ref) => {
  const context = React.useContext(DropdownMenuContext)
  if (!context) throw new Error("DropdownMenuContent must be used within DropdownMenu")

  const { open, setOpen } = context

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest('[data-dropdown-menu]')) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [open, setOpen])

  if (!open) return null

  const sideClasses = {
    top: "bottom-full mb-2",
    right: "left-full ml-2",
    bottom: "top-full mt-2",
    left: "right-full mr-2",
  }

  const alignClasses = {
    start: side === "top" || side === "bottom" ? "left-0" : "top-0",
    center: side === "top" || side === "bottom" ? "left-1/2 -translate-x-1/2" : "top-1/2 -translate-y-1/2",
    end: side === "top" || side === "bottom" ? "right-0" : "bottom-0",
  }

  return (
    <div
      ref={ref}
      data-dropdown-menu
      className={cn(
        "absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
        sideClasses[side],
        alignClasses[align],
        className
      )}
      style={{ marginTop: side === "bottom" ? sideOffset : undefined }}
      {...props}
    >
      {children}
    </div>
  )
})
DropdownMenuContent.displayName = "DropdownMenuContent"

const DropdownMenuItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-accent hover:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = "DropdownMenuItem"

const DropdownMenuLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = "DropdownMenuLabel"

const DropdownMenuSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = "DropdownMenuSeparator"

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

// Simplified exports for the components we're actually using
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
}