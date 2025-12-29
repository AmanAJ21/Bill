"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, CreditCard, TrendingUp } from "lucide-react"

const stats = [
  {
    title: "Total Bills Paid",
    value: "₹14,500",
    subtitle: "Month to Date",
    icon: CreditCard,
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950",
  },
  {
    title: "Float Balance",
    value: "₹15,000",
    subtitle: "65% used",
    progress: 65,
    icon: Calendar,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950",
  },
  {
    title: "Projected Outflow",
    value: "₹12,400",
    subtitle: "Due in next 15 days",
    icon: TrendingUp,
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950",
  },
]

export function BillStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {stat.subtitle}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                {stat.progress && (
                  <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${stat.progress}%` }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}