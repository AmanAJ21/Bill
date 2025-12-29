"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

const popularBillers = [
  {
    id: 1,
    name: "Airtel",
    initial: "A",
    color: "bg-red-500",
  },
  {
    id: 2,
    name: "Jio",
    initial: "J",
    color: "bg-blue-500",
  },
  {
    id: 3,
    name: "Tata Power",
    initial: "T",
    color: "bg-green-500",
  },
  {
    id: 4,
    name: "Bescom",
    initial: "B",
    color: "bg-orange-500",
  },
  {
    id: 5,
    name: "Vi Postpaid",
    initial: "V",
    color: "bg-yellow-500",
  },
  {
    id: 6,
    name: "ACT Fiber",
    initial: "A",
    color: "bg-teal-500",
  },
]

export function PopularBillers() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Popular Billers</h2>
        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
          View all
        </Button>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-7 gap-4">
        {popularBillers.map((biller) => (
          <div key={biller.id} className="flex flex-col items-center space-y-2 cursor-pointer group">
            <div className={`w-12 h-12 rounded-full ${biller.color} flex items-center justify-center text-white font-semibold text-lg group-hover:scale-105 transition-transform`}>
              {biller.initial}
            </div>
            <span className="text-sm text-center font-medium">{biller.name}</span>
          </div>
        ))}
        
        {/* More Button */}
        <div className="flex flex-col items-center space-y-2 cursor-pointer group">
          <div className="w-12 h-12 rounded-full border-2 border-dashed border-muted-foreground/30 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-950 transition-colors">
            <Plus className="h-5 w-5 text-muted-foreground group-hover:text-blue-500" />
          </div>
          <span className="text-sm text-center font-medium text-muted-foreground">More</span>
        </div>
      </div>
    </div>
  )
}