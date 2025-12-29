"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Bell, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  X,
  Clock,
  CreditCard,
  Zap
} from "lucide-react"

const notifications = [
  {
    id: 1,
    type: "success" as const,
    title: "Payment Successful",
    message: "Your Airtel bill of ₹599 has been paid successfully",
    time: "2 minutes ago",
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    actionable: false
  },
  {
    id: 2,
    type: "warning" as const,
    title: "Bill Due Tomorrow",
    message: "BESCOM electricity bill of ₹2,450 is due tomorrow",
    time: "1 hour ago",
    icon: AlertTriangle,
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    actionable: true,
    action: "Pay Now"
  },
  {
    id: 3,
    type: "info" as const,
    title: "Auto-Pay Enabled",
    message: "Netflix subscription will be automatically renewed on Oct 15",
    time: "3 hours ago",
    icon: Info,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    actionable: false
  },
  {
    id: 4,
    type: "warning" as const,
    title: "Low Balance Alert",
    message: "Your float balance is running low. Add funds to avoid payment failures",
    time: "5 hours ago",
    icon: CreditCard,
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-red-950/20",
    actionable: true,
    action: "Add Funds"
  },
  {
    id: 5,
    type: "success" as const,
    title: "New Connection Added",
    message: "JioFiber broadband has been successfully linked to your account",
    time: "1 day ago",
    icon: Zap,
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    actionable: false
  }
]

export function NotificationsPanel() {
  const unreadCount = notifications.filter(n => n.actionable).length

  return (
    <Card className="border-0 bg-gradient-to-br from-background to-muted/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-blue-600" />
            <CardTitle className="text-lg font-semibold">Notifications</CardTitle>
            {unreadCount > 0 && (
              <Badge variant="destructive" className="text-xs">
                {unreadCount}
              </Badge>
            )}
          </div>
          <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
            Mark all read
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-border/40 scrollbar-track-transparent">
          {notifications.map((notification) => (
            <div 
              key={notification.id} 
              className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-md group ${
                notification.actionable 
                  ? 'border-orange-200 dark:border-orange-800 bg-gradient-to-r from-orange-50/50 to-transparent dark:from-orange-950/20' 
                  : 'border-border/40 hover:border-border/60'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${notification.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                  <notification.icon className={`h-4 w-4 ${notification.color}`} />
                </div>
                
                <div className="flex-1 min-w-0 space-y-2">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h4 className="font-medium text-sm">{notification.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {notification.message}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity p-1 h-auto">
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {notification.time}
                    </div>
                    
                    {notification.actionable && (
                      <Button size="sm" className="h-7 text-xs">
                        {notification.action}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-border/40">
          <Button variant="outline" className="w-full" size="sm">
            View All Notifications
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}