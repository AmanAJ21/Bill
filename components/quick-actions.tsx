"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Plus, 
  CreditCard, 
  Zap, 
  Calendar, 
  Download, 
  Settings,
  Bell,
  Link2
} from "lucide-react"

const quickActions = [
  {
    title: "Add New Bill",
    description: "Connect a new service provider",
    icon: Plus,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    action: "primary" as const
  },
  {
    title: "Pay All Bills",
    description: "One-click payment for all due bills",
    icon: CreditCard,
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    action: "primary" as const
  },
  {
    title: "Enable Auto-Pay",
    description: "Set up automatic payments",
    icon: Zap,
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    action: "secondary" as const
  },
  {
    title: "Schedule Payment",
    description: "Plan future payments",
    icon: Calendar,
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    action: "secondary" as const
  },
  {
    title: "Download Statement",
    description: "Get monthly bill summary",
    icon: Download,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
    action: "secondary" as const
  },
  {
    title: "Manage Settings",
    description: "Update preferences & security",
    icon: Settings,
    color: "text-gray-600",
    bgColor: "bg-gray-50 dark:bg-gray-950/20",
    action: "secondary" as const
  }
]

export function QuickActions() {
  return (
    <Card className="border-0 bg-gradient-to-br from-background to-muted/20">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Zap className="h-5 w-5 text-blue-600" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant={action.action === 'primary' ? 'default' : 'outline'}
              className={`h-auto p-4 flex flex-col items-center gap-3 group hover:scale-105 transition-all duration-300 ${
                action.action === 'primary' 
                  ? 'bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl' 
                  : 'hover:bg-muted/50'
              }`}
            >
              <div className={`p-2 rounded-lg ${action.action === 'primary' ? 'bg-white/20' : action.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                <action.icon className={`h-5 w-5 ${action.action === 'primary' ? 'text-white' : action.color}`} />
              </div>
              <div className="text-center space-y-1">
                <p className="font-medium text-sm">{action.title}</p>
                <p className={`text-xs ${action.action === 'primary' ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {action.description}
                </p>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}