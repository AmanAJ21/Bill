"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Smartphone, 
  Wifi, 
  CreditCard,
  Fuel,
  Droplets,
  Tv,
  Car
} from "lucide-react"

const categories = [
  {
    id: 1,
    name: "Electricity",
    provider: "Bescom • KA5639502",
    amount: "₹2,450.00",
    dueAmount: "DUE AMOUNT",
    status: "connected",
    icon: Zap,
    iconColor: "text-yellow-600",
    iconBg: "bg-yellow-50 dark:bg-yellow-950",
    actionText: "Pay Now",
    actionVariant: "default" as const,
  },
  {
    id: 2,
    name: "Mobile Postpaid",
    provider: "Airtel • 9800067612",
    amount: "₹599.00",
    dueAmount: "DUE AMOUNT",
    status: "connected",
    icon: Smartphone,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50 dark:bg-blue-950",
    actionText: "Pay Now",
    actionVariant: "default" as const,
  },
  {
    id: 3,
    name: "Broadband",
    provider: "Link your internet provider",
    amount: "",
    dueAmount: "",
    status: "not-linked",
    icon: Wifi,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50 dark:bg-purple-950",
    actionText: "Connect",
    actionVariant: "outline" as const,
  },
  {
    id: 4,
    name: "Credit Card",
    provider: "HDFC Bank • Ending 4421",
    amount: "₹124,500",
    dueAmount: "TOTAL DUE",
    status: "due-soon",
    icon: CreditCard,
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-50 dark:bg-indigo-950",
    actionText: "Pay Bill",
    actionVariant: "default" as const,
  },
  {
    id: 5,
    name: "Gas Piped",
    provider: "Mahanagar Gas, IGL, etc.",
    amount: "",
    dueAmount: "",
    status: "not-linked",
    icon: Fuel,
    iconColor: "text-orange-600",
    iconBg: "bg-orange-50 dark:bg-orange-950",
    actionText: "Connect",
    actionVariant: "outline" as const,
  },
  {
    id: 6,
    name: "Water",
    provider: "Municipal Corporations",
    amount: "",
    dueAmount: "",
    status: "not-linked",
    icon: Droplets,
    iconColor: "text-cyan-600",
    iconBg: "bg-cyan-50 dark:bg-cyan-950",
    actionText: "Connect",
    actionVariant: "outline" as const,
  },
  {
    id: 7,
    name: "DTH",
    provider: "Tata Play, Dish TV etc.",
    amount: "",
    dueAmount: "",
    status: "not-linked",
    icon: Tv,
    iconColor: "text-pink-600",
    iconBg: "bg-pink-50 dark:bg-pink-950",
    actionText: "Connect",
    actionVariant: "outline" as const,
  },
  {
    id: 8,
    name: "FASTag",
    provider: "Recharge for Tolls",
    amount: "",
    dueAmount: "",
    status: "not-linked",
    icon: Car,
    iconColor: "text-gray-600",
    iconBg: "bg-gray-50 dark:bg-gray-950",
    actionText: "Connect",
    actionVariant: "outline" as const,
  },
]

export function BrowseByCategory() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Browse by Category</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Card key={category.id} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${category.iconBg}`}>
                      <category.icon className={`h-5 w-5 ${category.iconColor}`} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-medium text-sm">{category.name}</h3>
                      <p className="text-xs text-muted-foreground truncate">
                        {category.provider}
                      </p>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  {category.status === 'connected' && (
                    <Badge variant="outline" className="text-green-600 border-green-200 text-xs">
                      Connected
                    </Badge>
                  )}
                  {category.status === 'due-soon' && (
                    <Badge variant="outline" className="text-orange-600 border-orange-200 text-xs">
                      Due Soon
                    </Badge>
                  )}
                  {category.status === 'not-linked' && (
                    <Badge variant="outline" className="text-gray-600 border-gray-200 text-xs">
                      Not Linked
                    </Badge>
                  )}
                </div>

                {/* Amount */}
                {category.amount && (
                  <div>
                    <p className="text-xs text-muted-foreground">{category.dueAmount}</p>
                    <p className="text-lg font-bold">{category.amount}</p>
                  </div>
                )}

                {/* Action Button */}
                <Button 
                  variant={category.actionVariant} 
                  size="sm" 
                  className="w-full"
                >
                  {category.actionText}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}