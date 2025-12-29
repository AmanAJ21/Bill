"use client"

import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import ThemeToggle from "@/components/theme-toggle-button"
import { AppSidebar } from "@/components/app-sidebar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { LogOut } from "lucide-react"
import { usePathname } from "next/navigation"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logging out...")
    // For example: router.push('/login') or call logout API
  }

  // Get page title from pathname
  const getPageTitle = () => {
    const segments = pathname.split('/').filter(Boolean)
    if (segments.length <= 1) return 'Dashboard'

    const lastSegment = segments[segments.length - 1]
    return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1)
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset className="relative">
        <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 transition-all duration-200 ease-in-out group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 shadow-sm">
          <div className="flex items-center gap-3 px-4 lg:px-6">
            <SidebarTrigger className="-ml-1 hover:bg-accent/50 transition-colors duration-200" />
            <Separator orientation="vertical" className="mr-2 h-4 bg-border/60" />
            <div className="flex flex-col gap-0.5">
              <h1 className="text-lg font-semibold tracking-tight text-foreground">{getPageTitle()}</h1>
              <p className="text-xs text-muted-foreground/80 hidden sm:block leading-none">
                {pathname === '/dashboard' ? 'Overview of your projects and activities' : `Manage your ${getPageTitle().toLowerCase()}`}
              </p>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-3 px-4 lg:px-6">
            <Badge
              variant="outline"
              className="cursor-pointer hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30 transition-all duration-200 text-xs md:text-sm font-medium px-3 py-1.5 rounded-lg shadow-sm hover:shadow-md"
              onClick={handleLogout}
            >
              <LogOut className="h-3 w-3 mr-1.5" />
              <span className="hidden sm:inline">Logout</span>
              <span className="sm:hidden">Exit</span>
            </Badge>
            <ThemeToggle />
          </div>
        </header>
        <main className="flex-1 overflow-hidden h-[calc(100vh-4rem)]">
          <div className="h-full p-4 lg:p-6">
            <div className="h-full rounded-xl bg-card/30 border border-border/40 shadow-sm backdrop-blur-sm overflow-hidden">
              <div className="h-full p-4 lg:p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-border/40 scrollbar-track-transparent">
                {children}
              </div>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}