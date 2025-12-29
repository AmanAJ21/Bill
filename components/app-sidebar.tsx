"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  Home,
  Settings,
  BarChart3,
  ChevronRight,
  User,
  HelpCircle,
  Receipt,
} from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

interface NavigationItem {
  title: string
  url: string
  icon: React.ComponentType<{ className?: string }>
  description: string
  badge?: string
  subItems?: Array<{ title: string; url: string }>
}

interface NavigationSection {
  title: string
  items: NavigationItem[]
}

const navigationItems: NavigationSection[] = [
  {
    title: "Main",
    items: [
      {
        title: "Dashboard",
        url: "/Dashboard",
        icon: Home,
        description: "Main dashboard overview",
      },
      {
        title: "Analytics",
        url: "/Dashboard/Analytics",
        icon: BarChart3,
        description: "Financial insights and reports",
      },
      {
        title: "Bills",
        url: "/Dashboard/Bills",
        icon: Receipt,
        description: "Connect and manage billers",
      },
      {
        title: "Profile",
        url: "/Dashboard/Profile",
        icon: User,
        description: "View user profile",
      },
    ],
  }
]

const bottomItems: NavigationItem[] = [
  {
    title: "Settings",
    url: "/Dashboard/Settings",
    icon: Settings,
    description: "Application settings",
  },
  {
    title: "Help",
    url: "/Dashboard/Help",
    icon: HelpCircle,
    description: "Get help and support",
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  const [expandedGroups, setExpandedGroups] = useState<string[]>([])

  const toggleGroup = (groupTitle: string) => {
    setExpandedGroups(prev =>
      prev.includes(groupTitle)
        ? prev.filter(title => title !== groupTitle)
        : [...prev, groupTitle]
    )
  }

  const isActive = (url: string) => {
    if (url === "/Dashboard") {
      return pathname === "/Dashboard"
    }
    return pathname.startsWith(url)
  }

  const hasActiveSubItem = (subItems?: Array<{ url: string }>) => {
    return subItems?.some(item => pathname.startsWith(item.url)) || false
  }

  const getPageTitle = () => {
    const segments = pathname.split('/').filter(Boolean)
    if (segments.length <= 1) return 'Dashboard'

    const lastSegment = segments[segments.length - 1]
    return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1)
  }
  return (
    <Sidebar variant="inset" className="border-r-0">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold">{getPageTitle()}</h1>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {navigationItems.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => {
                  const hasSubItems = item.subItems && item.subItems.length > 0
                  const isExpanded = expandedGroups.includes(item.title)
                  const isItemActive = isActive(item.url)
                  const hasActiveSub = hasActiveSubItem(item.subItems)

                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild={!hasSubItems}
                        isActive={isItemActive || hasActiveSub}
                        tooltip={item.description}
                        className="group/item"
                        onClick={hasSubItems ? () => toggleGroup(item.title) : undefined}
                      >
                        {hasSubItems ? (
                          <div className="flex w-full items-center">
                            <item.icon className="size-4" />
                            <span className="flex-1">{item.title}</span>
                            {item.badge && (
                              <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs font-medium text-primary-foreground">
                                {item.badge}
                              </span>
                            )}
                            <ChevronRight
                              className={`ml-auto size-4 transition-transform ${isExpanded ? "rotate-90" : ""
                                }`}
                            />
                          </div>
                        ) : (
                          <Link href={item.url} className="flex w-full items-center">
                            <item.icon className="size-4" />
                            <span className="flex-1">{item.title}</span>
                            {item.badge && (
                              <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs font-medium text-primary-foreground">
                                {item.badge}
                              </span>
                            )}
                          </Link>
                        )}
                      </SidebarMenuButton>
                      {hasSubItems && isExpanded && (
                        <SidebarMenuSub>
                          {item.subItems?.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={isActive(subItem.url)}
                              >
                                <Link href={subItem.url}>
                                  <span>{subItem.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      )}
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              {bottomItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    tooltip={item.description}
                  >
                    <Link href={item.url}>
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}
