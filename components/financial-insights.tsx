"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Lightbulb, 
  TrendingUp, 
  TrendingDown, 
  Target,
  PiggyBank,
  AlertCircle,
  CheckCircle,
  ArrowRight
} from "lucide-react"

const insights = [
  {
    id: 1,
    type: "savings" as const,
    title: "Switch to Annual Plans",
    description: "You could save ₹2,400/year by switching Netflix and Spotify to annual subscriptions",
    impact: "₹2,400 savings",
    confidence: "High",
    icon: PiggyBank,
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    actionable: true
  },
  {
    id: 2,
    type: "optimization" as const,
    title: "Consolidate Internet Plans",
    description: "Your mobile and broadband are from different providers. Bundling could reduce costs",
    impact: "₹800/month savings",
    confidence: "Medium",
    icon: Target,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    actionable: true
  },
  {
    id: 3,
    type: "alert" as const,
    title: "Unusual Spending Pattern",
    description: "Your electricity bill increased by 35% this month. Check for energy-intensive appliances",
    impact: "₹850 increase",
    confidence: "High",
    icon: AlertCircle,
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    actionable: true
  },
  {
    id: 4,
    type: "achievement" as const,
    title: "Great Job!",
    description: "You've maintained 100% on-time payments for 6 months straight",
    impact: "Perfect record",
    confidence: "Confirmed",
    icon: CheckCircle,
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    actionable: false
  }
]

const monthlyTrends = [
  { category: "Utilities", current: 18500, previous: 16200, trend: "up" },
  { category: "Subscriptions", current: 8900, previous: 9400, trend: "down" },
  { category: "Insurance", current: 5630, previous: 5630, trend: "stable" },
  { category: "Telecom", current: 12200, previous: 11800, trend: "up" }
]

export function FinancialInsights() {
  return (
    <Card className="border-0 bg-gradient-to-br from-background to-muted/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-600" />
            <CardTitle className="text-lg font-semibold">Financial Insights</CardTitle>
          </div>
          <Badge variant="outline" className="text-blue-600 border-blue-200">
            AI Powered
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Key Insights */}
        <div className="space-y-4">
          <h3 className="font-medium text-sm">Personalized Recommendations</h3>
          <div className="space-y-3">
            {insights.map((insight) => (
              <div 
                key={insight.id}
                className="p-4 rounded-lg border border-border/40 hover:border-border/60 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${insight.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <insight.icon className={`h-4 w-4 ${insight.color}`} />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium text-sm">{insight.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                          {insight.description}
                        </p>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          insight.confidence === 'High' ? 'text-green-600 border-green-200' :
                          insight.confidence === 'Medium' ? 'text-yellow-600 border-yellow-200' :
                          'text-blue-600 border-blue-200'
                        }`}
                      >
                        {insight.confidence}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${insight.color}`}>
                        {insight.impact}
                      </span>
                      
                      {insight.actionable && (
                        <Button size="sm" variant="outline" className="h-7 text-xs gap-1">
                          Take Action
                          <ArrowRight className="h-3 w-3" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Trends */}
        <div className="space-y-4">
          <h3 className="font-medium text-sm">Category Trends</h3>
          <div className="space-y-3">
            {monthlyTrends.map((trend, index) => {
              const percentChange = ((trend.current - trend.previous) / trend.previous * 100).toFixed(1)
              const isIncrease = trend.current > trend.previous
              const isDecrease = trend.current < trend.previous
              
              return (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium">{trend.category}</span>
                    <div className="flex items-center gap-1">
                      {isIncrease && <TrendingUp className="h-3 w-3 text-red-500" />}
                      {isDecrease && <TrendingDown className="h-3 w-3 text-green-500" />}
                      {!isIncrease && !isDecrease && <div className="w-3 h-3 bg-gray-400 rounded-full" />}
                      <span className={`text-xs ${
                        isIncrease ? 'text-red-500' : 
                        isDecrease ? 'text-green-500' : 
                        'text-gray-500'
                      }`}>
                        {trend.trend === 'stable' ? '0%' : `${isIncrease ? '+' : ''}${percentChange}%`}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold">₹{trend.current.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">vs ₹{trend.previous.toLocaleString()}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-border/40">
          <Button className="w-full" variant="outline">
            View Detailed Analysis
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}