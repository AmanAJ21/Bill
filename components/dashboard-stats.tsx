"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Calendar, 
  CreditCard, 
  Users,
  Zap,
  Shield
} from "lucide-react"

const stats = [
  {
    title: "Total Spent",
    value: "₹45,230",
    change: "+12.5%",
    changeType: "increase" as const,
    period: "vs last month",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    description: "Total amount spent on bills"
  },
  {
    title: "Active Bills",
    value: "12",
    change: "+2",
    changeType: "increase" as const,
    period: "new this month",
    icon: Calendar,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    description: "Currently active bill connections"
  },
  {
    title: "Auto-Pay Enabled",
    value: "8",
    change: "67%",
    changeType: "neutral" as const,
    period: "of total bills",
    icon: Zap,
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    description: "Bills with automatic payments"
  },
  {
    title: "Money Saved",
    value: "₹3,450",
    change: "+8.2%",
    changeType: "increase" as const,
    period: "vs manual payments",
    icon: TrendingUp,
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    description: "Saved through automation & discounts"
  }
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer bg-gradient-to-br from-background to-muted/20">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${stat.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold group-hover:text-blue-600 transition-colors">{stat.value}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className={`flex items-center gap-1 text-sm ${
                    stat.changeType === 'increase' ? 'text-green-600' : 
                    'text-muted-foreground'
                  }`}>
                    {stat.changeType === 'increase' && <TrendingUp className="h-3 w-3" />}
                    <span className="font-medium">{stat.change}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{stat.period}</span>
                </div>
                
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}