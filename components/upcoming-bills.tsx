"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tv, Droplets, Smartphone } from "lucide-react"

const upcomingBills = [
  {
    id: 1,
    name: "Disney+ Hotstar",
    date: "Oct 15",
    type: "Auto-Pay",
    amount: "₹1,499",
    icon: Tv,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50 dark:bg-blue-950",
  },
  {
    id: 2,
    name: "BWSSB Water",
    date: "Oct 20",
    type: "Utility",
    amount: "₹460",
    icon: Droplets,
    iconColor: "text-cyan-600",
    iconBg: "bg-cyan-50 dark:bg-cyan-950",
  },
  {
    id: 3,
    name: "Jio Postpaid",
    date: "Oct 22",
    type: "Mobile",
    amount: "₹599",
    icon: Smartphone,
    iconColor: "text-green-600",
    iconBg: "bg-green-50 dark:bg-green-950",
  },
]

export function UpcomingBills() {
  return (
    <Card className="h-fit">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Upcoming</CardTitle>
          <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
            See All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-border/40 scrollbar-track-transparent">
        {upcomingBills.map((bill) => (
          <div key={bill.id} className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${bill.iconBg}`}>
              <bill.icon className={`h-4 w-4 ${bill.iconColor}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">{bill.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-muted-foreground">{bill.date}</span>
                    <Badge variant="secondary" className="text-xs">
                      {bill.type}
                    </Badge>
                  </div>
                </div>
                <p className="font-semibold text-sm">{bill.amount}</p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}