"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Plus, 
  Tv, 
  Zap, 
  Wifi,
  MoreHorizontal,
  CheckCircle,
  Clock,
  RotateCw
} from "lucide-react"

const linkedBillers = [
  {
    id: 1,
    name: "Netflix India",
    type: "OTT Subscription",
    amount: "₹649.00",
    period: "Monthly Bill",
    status: "active",
    icon: Tv,
    iconColor: "text-red-600",
    iconBg: "bg-red-50 dark:bg-red-950",
  },
  {
    id: 2,
    name: "Tata Power",
    type: "Electricity",
    amount: "₹3,250.00",
    period: "Last Bill",
    status: "active",
    icon: Zap,
    iconColor: "text-yellow-600",
    iconBg: "bg-yellow-50 dark:bg-yellow-950",
  },
  {
    id: 3,
    name: "JioFiber",
    type: "Broadband",
    amount: "₹999.00",
    period: "Monthly Bill",
    status: "syncing",
    icon: Wifi,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50 dark:bg-blue-950",
  },
]

export function LinkedBillers() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Linked Billers</CardTitle>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Link New Account
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {linkedBillers.map((biller) => (
            <div key={biller.id} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
              {/* Icon */}
              <div className={`p-3 rounded-lg ${biller.iconBg}`}>
                <biller.icon className={`h-6 w-6 ${biller.iconColor}`} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-sm">{biller.name}</h3>
                    <p className="text-xs text-muted-foreground">{biller.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-sm">{biller.amount}</p>
                    <p className="text-xs text-muted-foreground">{biller.period}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-2">
                    {biller.status === 'active' && (
                      <Badge variant="outline" className="text-green-600 border-green-200 gap-1">
                        <CheckCircle className="h-3 w-3" />
                        Active
                      </Badge>
                    )}
                    {biller.status === 'syncing' && (
                      <Badge variant="outline" className="text-orange-600 border-orange-200 gap-1">
                        <RotateCw className="h-3 w-3 animate-spin" />
                        Syncing
                      </Badge>
                    )}
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}