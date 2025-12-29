"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Plus, 
  CreditCard, 
  Smartphone,
  Building,
  Shield,
  ChevronRight
} from "lucide-react"

const paymentMethods = [
  {
    id: 1,
    name: "HDFC Bank",
    type: "Credit",
    number: "•••• 4292",
    status: "default",
    icon: CreditCard,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50 dark:bg-blue-950",
  },
  {
    id: 2,
    name: "UPI AutoPay",
    type: "rahul.sharma@okhdfc",
    number: "",
    status: "active",
    icon: Smartphone,
    iconColor: "text-green-600",
    iconBg: "bg-green-50 dark:bg-green-950",
  },
  {
    id: 3,
    name: "SBI Net Banking",
    type: "Savings",
    number: "•••• 8839",
    status: "active",
    icon: Building,
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-50 dark:bg-indigo-950",
  },
]

export function PaymentMethods() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CardTitle className="text-lg">Payment Methods</CardTitle>
            <Badge variant="outline" className="gap-1 text-xs">
              <Shield className="h-3 w-3" />
              Encrypted
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {paymentMethods.map((method) => (
          <div key={method.id} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
            <div className={`p-2 rounded-lg ${method.iconBg}`}>
              <method.icon className={`h-4 w-4 ${method.iconColor}`} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">{method.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {method.type} {method.number}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {method.status === 'default' && (
                    <Badge variant="secondary" className="text-xs">
                      DEFAULT
                    </Badge>
                  )}
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <Button variant="outline" className="w-full gap-2 mt-4">
          <Plus className="h-4 w-4" />
          Add New Method
        </Button>
      </CardContent>
    </Card>
  )
}