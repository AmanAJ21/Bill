"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  BarChart3, 
  TrendingUp, 
  Calendar,
  Filter
} from "lucide-react"

// Mock data for the chart
const monthlyData = [
  { month: "Jan", amount: 32000, bills: 8 },
  { month: "Feb", amount: 28000, bills: 9 },
  { month: "Mar", amount: 35000, bills: 10 },
  { month: "Apr", amount: 31000, bills: 11 },
  { month: "May", amount: 42000, bills: 12 },
  { month: "Jun", amount: 45230, bills: 12 }
]

const categoryData = [
  { category: "Utilities", amount: 18500, percentage: 41, color: "bg-blue-500" },
  { category: "Telecom", amount: 12200, percentage: 27, color: "bg-green-500" },
  { category: "Subscriptions", amount: 8900, percentage: 20, color: "bg-purple-500" },
  { category: "Insurance", amount: 5630, percentage: 12, color: "bg-orange-500" }
]

export function SpendingChart() {
  const maxAmount = Math.max(...monthlyData.map(d => d.amount))
  
  return (
    <Card className="border-0 bg-gradient-to-br from-background to-muted/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-blue-600" />
            <CardTitle className="text-lg font-semibold">Spending Overview</CardTitle>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-green-600 border-green-200">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12.5%
            </Badge>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-3 w-3" />
              Filter
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Monthly Trend Chart */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-sm">Monthly Trend</h3>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              Last 6 months
            </div>
          </div>
          
          <div className="space-y-3">
            {monthlyData.map((data, index) => (
              <div key={data.month} className="flex items-center gap-4">
                <div className="w-8 text-xs font-medium text-muted-foreground">
                  {data.month}
                </div>
                <div className="flex-1 relative">
                  <div className="h-8 bg-muted/30 rounded-lg overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg transition-all duration-1000 ease-out flex items-center justify-end pr-2"
                      style={{ width: `${(data.amount / maxAmount) * 100}%` }}
                    >
                      <span className="text-xs font-medium text-white">
                        ₹{(data.amount / 1000).toFixed(0)}k
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-12 text-xs text-muted-foreground text-right">
                  {data.bills} bills
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="space-y-4">
          <h3 className="font-medium text-sm">Category Breakdown</h3>
          <div className="space-y-3">
            {categoryData.map((category, index) => (
              <div key={category.category} className="flex items-center gap-4">
                <div className="flex items-center gap-2 flex-1">
                  <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                  <span className="text-sm font-medium">{category.category}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-sm font-semibold">₹{category.amount.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">{category.percentage}%</div>
                  </div>
                  <div className="w-16 h-2 bg-muted/30 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${category.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${category.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Average Monthly Spend</p>
              <p className="text-2xl font-bold text-blue-600">₹35,388</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">Projected Next Month</p>
              <p className="text-lg font-semibold text-green-600">₹42,000</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}