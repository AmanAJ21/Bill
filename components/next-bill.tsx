"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"

export function NextBill() {
  return (
    <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-0">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span className="text-sm font-medium">NEXT CONSOLIDATED BILL</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-3xl font-bold">₹42,500</p>
          <p className="text-sm text-slate-300">Due on Nov 1st</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-slate-300">Includes rent & utilities</span>
            <span>15 days left</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
          </div>
        </div>

        <Button className="w-full bg-white text-slate-900 hover:bg-slate-100 font-medium">
          Manage Payment
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}