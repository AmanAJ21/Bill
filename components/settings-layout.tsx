"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  User, 
  Link, 
  CreditCard, 
  Star, 
  Shield, 
  Bell,
  ChevronRight
} from "lucide-react"

interface SettingsLayoutProps {
  children: React.ReactNode
}

const settingsNavigation = [
  {
    title: "ACCOUNT",
    items: [
      { name: "Profile & Settings", icon: User, active: true },
      { name: "Linked Billers", icon: Link },
      { name: "UPI & Cards", icon: CreditCard },
      { name: "Subscriptions", icon: Star },
    ]
  },
  {
    title: "PREFERENCES", 
    items: [
      { name: "Security (2FA)", icon: Shield },
      { name: "Notifications", icon: Bell },
    ]
  }
]

export function SettingsLayout({ children }: SettingsLayoutProps) {
  const [activeItem, setActiveItem] = useState("Profile & Settings")

  return (
    <div className="min-h-full space-y-6 pb-6">
      {/* Header */}
      <div className="sticky top-0 bg-background/80 backdrop-blur-sm z-10 pb-4 border-b border-border/20">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Settings</h1>
            <p className="text-muted-foreground">Manage your account and preferences</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <Card className="p-4">
            <nav className="space-y-6">
              {settingsNavigation.map((section) => (
                <div key={section.title}>
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    {section.title}
                  </h3>
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <Button
                        key={item.name}
                        variant={activeItem === item.name ? "secondary" : "ghost"}
                        className="w-full justify-start gap-3 h-auto py-3"
                        onClick={() => setActiveItem(item.name)}
                      >
                        <item.icon className="h-4 w-4" />
                        <span className="text-sm">{item.name}</span>
                        <ChevronRight className="h-3 w-3 ml-auto opacity-50" />
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {children}
        </div>
      </div>
    </div>
  )
}