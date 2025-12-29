"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Crown, Star, Check } from "lucide-react"

export function PremiumUpgrade() {
  return (
    <Card className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white border-0 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
      
      <CardContent className="p-6 relative">
        <div className="flex items-start gap-3 mb-4">
          <div className="p-2 bg-white/20 rounded-lg">
            <Crown className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Go Premium</h3>
            <p className="text-sm text-purple-100 mt-1">
              Save up to ₹2,000/mo on late fees and get exclusive partner offers.
            </p>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-sm">
            <Check className="h-4 w-4 text-green-300" />
            <span>Priority customer support</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="h-4 w-4 text-green-300" />
            <span>Advanced analytics & insights</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="h-4 w-4 text-green-300" />
            <span>Unlimited bill reminders</span>
          </div>
        </div>

        <Button className="w-full bg-white text-purple-700 hover:bg-purple-50 font-medium">
          <Star className="mr-2 h-4 w-4" />
          View Plans
        </Button>
      </CardContent>
    </Card>
  )
}