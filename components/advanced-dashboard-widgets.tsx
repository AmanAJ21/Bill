"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  TrendingUp, 
  TrendingDown, 
  Target,
  Calendar,
  CreditCard,
  Zap,
  PieChart,
  BarChart3,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  Lightbulb,
  Star
} from "lucide-react"
import { motion } from "framer-motion"

// Budget Tracker Widget
export function BudgetTracker() {
  const budgets = [
    { category: "Utilities", spent: 18500, budget: 20000, color: "bg-blue-500" },
    { category: "Subscriptions", spent: 8900, budget: 10000, color: "bg-purple-500" },
    { category: "Insurance", spent: 5630, budget: 6000, color: "bg-green-500" },
    { category: "Telecom", spent: 12200, budget: 12000, color: "bg-orange-500" }
  ]

  return (
    <Card className="border-0 bg-gradient-to-br from-background to-muted/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-600" />
            Budget Tracker
          </CardTitle>
          <Badge variant="outline" className="text-green-600 border-green-200">
            On Track
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {budgets.map((budget, index) => {
          const percentage = (budget.spent / budget.budget) * 100
          const isOverBudget = percentage > 100
          
          return (
            <motion.div 
              key={budget.category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${budget.color}`}></div>
                  <span className="font-medium text-sm">{budget.category}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold">
                    ₹{budget.spent.toLocaleString()} / ₹{budget.budget.toLocaleString()}
                  </div>
                  <div className={`text-xs ${isOverBudget ? 'text-red-500' : 'text-green-500'}`}>
                    {percentage.toFixed(0)}% used
                  </div>
                </div>
              </div>
              <Progress 
                value={Math.min(percentage, 100)} 
                className="h-2"
              />
              {isOverBudget && (
                <div className="flex items-center gap-1 text-xs text-red-500">
                  <AlertCircle className="h-3 w-3" />
                  Over budget by ₹{(budget.spent - budget.budget).toLocaleString()}
                </div>
              )}
            </motion.div>
          )
        })}
        
        <div className="pt-4 border-t border-border/40">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Total Budget Utilization</span>
            <span className="font-bold text-blue-600">78%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Savings Goals Widget
export function SavingsGoals() {
  const goals = [
    { name: "Emergency Fund", current: 45000, target: 100000, color: "bg-green-500" },
    { name: "Vacation", current: 25000, target: 50000, color: "bg-blue-500" },
    { name: "New Laptop", current: 35000, target: 80000, color: "bg-purple-500" }
  ]

  return (
    <Card className="border-0 bg-gradient-to-br from-background to-muted/20">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-600" />
          Savings Goals
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {goals.map((goal, index) => {
          const percentage = (goal.current / goal.target) * 100
          
          return (
            <motion.div 
              key={goal.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">{goal.name}</h3>
                <span className="text-sm text-muted-foreground">
                  {percentage.toFixed(0)}%
                </span>
              </div>
              <div className="space-y-2">
                <Progress value={percentage} className="h-2" />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    ₹{goal.current.toLocaleString()}
                  </span>
                  <span className="font-medium">
                    ₹{goal.target.toLocaleString()}
                  </span>
                </div>
              </div>
            </motion.div>
          )
        })}
        
        <Button className="w-full mt-4" variant="outline">
          Add New Goal
        </Button>
      </CardContent>
    </Card>
  )
}

// Payment Calendar Widget
export function PaymentCalendar() {
  const upcomingPayments = [
    { date: "Dec 28", name: "BESCOM Electricity", amount: 2450, status: "due" },
    { date: "Dec 30", name: "Netflix", amount: 649, status: "scheduled" },
    { date: "Jan 2", name: "Rent", amount: 25000, status: "scheduled" },
    { date: "Jan 5", name: "Airtel Postpaid", amount: 599, status: "scheduled" }
  ]

  return (
    <Card className="border-0 bg-gradient-to-br from-background to-muted/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            Payment Calendar
          </CardTitle>
          <Button variant="ghost" size="sm" className="text-blue-600">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {upcomingPayments.map((payment, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="text-center">
                  <div className="text-xs text-muted-foreground">
                    {payment.date.split(' ')[0]}
                  </div>
                  <div className="text-sm font-bold">
                    {payment.date.split(' ')[1]}
                  </div>
                </div>
                <div>
                  <div className="font-medium text-sm">{payment.name}</div>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${
                      payment.status === 'due' 
                        ? 'text-orange-600 border-orange-200' 
                        : 'text-blue-600 border-blue-200'
                    }`}
                  >
                    {payment.status === 'due' ? 'Due Soon' : 'Scheduled'}
                  </Badge>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold">₹{payment.amount.toLocaleString()}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Performance Metrics Widget
export function PerformanceMetrics() {
  const metrics = [
    {
      title: "Payment Success Rate",
      value: "99.8%",
      change: "+0.2%",
      trend: "up",
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      title: "Average Processing Time",
      value: "1.2s",
      change: "-0.3s",
      trend: "down",
      icon: Clock,
      color: "text-blue-600"
    },
    {
      title: "Monthly Savings",
      value: "₹3,450",
      change: "+₹450",
      trend: "up",
      icon: DollarSign,
      color: "text-purple-600"
    },
    {
      title: "Bills Automated",
      value: "85%",
      change: "+5%",
      trend: "up",
      icon: Zap,
      color: "text-orange-600"
    }
  ]

  return (
    <Card className="border-0 bg-gradient-to-br from-background to-muted/20">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-blue-600" />
          Performance Metrics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors text-center"
            >
              <div className="flex items-center justify-center mb-2">
                <metric.icon className={`h-5 w-5 ${metric.color}`} />
              </div>
              <div className="text-2xl font-bold mb-1">{metric.value}</div>
              <div className="text-xs text-muted-foreground mb-2">{metric.title}</div>
              <div className={`flex items-center justify-center gap-1 text-xs ${
                metric.trend === 'up' ? 'text-green-500' : 'text-blue-500'
              }`}>
                {metric.trend === 'up' ? (
                  <ArrowUpRight className="h-3 w-3" />
                ) : (
                  <ArrowDownRight className="h-3 w-3" />
                )}
                {metric.change}
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Smart Recommendations Widget
export function SmartRecommendations() {
  const recommendations = [
    {
      type: "savings",
      title: "Switch to Annual Netflix",
      description: "Save ₹1,200/year with annual subscription",
      impact: "₹1,200 savings",
      confidence: "High",
      icon: Lightbulb,
      color: "text-green-600"
    },
    {
      type: "optimization",
      title: "Bundle Internet & Mobile",
      description: "Combine Airtel services for better rates",
      impact: "₹800/month savings",
      confidence: "Medium",
      icon: Target,
      color: "text-blue-600"
    },
    {
      type: "alert",
      title: "High Electricity Usage",
      description: "35% increase detected this month",
      impact: "₹850 increase",
      confidence: "High",
      icon: AlertCircle,
      color: "text-orange-600"
    }
  ]

  return (
    <Card className="border-0 bg-gradient-to-br from-background to-muted/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-600" />
            Smart Recommendations
          </CardTitle>
          <Badge variant="outline" className="text-blue-600 border-blue-200">
            AI Powered
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {recommendations.map((rec, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="p-4 rounded-lg border border-border/40 hover:border-border/60 transition-all duration-300"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-muted/30">
                <rec.icon className={`h-4 w-4 ${rec.color}`} />
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-sm">{rec.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {rec.description}
                    </p>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${
                      rec.confidence === 'High' ? 'text-green-600 border-green-200' :
                      'text-yellow-600 border-yellow-200'
                    }`}
                  >
                    {rec.confidence}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${rec.color}`}>
                    {rec.impact}
                  </span>
                  <Button size="sm" variant="outline" className="h-7 text-xs">
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  )
}