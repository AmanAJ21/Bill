"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Filter, Zap, Wifi, Home, Building } from "lucide-react"

const timelineItems = [
  {
    id: 1,
    title: "BESCOM Electricity Bill",
    subtitle: "Paid automatically from Float",
    amount: "₹2,100",
    time: "Today 01:30 AM",
    category: "Utility",
    categoryId: "TxnID: 662400",
    status: "completed",
    icon: Zap,
    iconColor: "text-yellow-600",
    iconBg: "bg-yellow-50 dark:bg-yellow-950",
  },
  {
    id: 2,
    title: "Airtel Xstream Fiber",
    subtitle: "Broadband • Auto-Paid",
    amount: "₹999",
    time: "Yesterday 4:00 PM",
    category: "Internet",
    status: "completed",
    icon: Wifi,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50 dark:bg-purple-950",
  },
  {
    id: 3,
    title: "Monthly Rent Transfer",
    subtitle: "Scheduled Transfer to Landlord",
    amount: "₹25,000",
    time: "Due Dec 5",
    category: "Processing",
    status: "processing",
    icon: Home,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50 dark:bg-blue-950",
  },
  {
    id: 4,
    title: "Float Top-up",
    subtitle: "UPI Auto-Pay • HDFC Bank",
    amount: "+ ₹40,000",
    time: "Dec 1",
    category: "",
    status: "credit",
    icon: Building,
    iconColor: "text-green-600",
    iconBg: "bg-green-50 dark:bg-green-950",
  },
]

export function BillTimeline() {
  return (
    <Card className="h-fit">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Timeline</CardTitle>
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-border/40 scrollbar-track-transparent">
        {timelineItems.map((item, index) => (
          <div key={item.id} className="flex items-start gap-4 relative">
            {/* Timeline line */}
            {index < timelineItems.length - 1 && (
              <div className="absolute left-6 top-12 w-px h-16 bg-border"></div>
            )}
            
            {/* Status indicator */}
            <div className="relative">
              <div 
                className={`w-3 h-3 rounded-full ${
                  item.status === 'completed' ? 'bg-green-500' : 
                  item.status === 'processing' ? 'bg-blue-500' : 
                  item.status === 'credit' ? 'bg-gray-400' : 'bg-gray-300'
                }`}
              ></div>
            </div>

            {/* Icon */}
            <div className={`p-2 rounded-lg ${item.iconBg}`}>
              <item.icon className={`h-5 w-5 ${item.iconColor}`} />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h4 className="font-medium text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                  {item.category && (
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {item.category}
                      </Badge>
                      {item.categoryId && (
                        <span className="text-xs text-muted-foreground">{item.categoryId}</span>
                      )}
                    </div>
                  )}
                  {item.status === 'processing' && (
                    <Badge variant="outline" className="text-xs text-blue-600 border-blue-200">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-1 animate-pulse"></div>
                      Processing
                    </Badge>
                  )}
                </div>
                <div className="text-right">
                  <p className={`font-semibold text-sm ${
                    item.status === 'credit' ? 'text-green-600' : 'text-foreground'
                  }`}>
                    {item.amount}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.time}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}