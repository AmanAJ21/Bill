import { DashboardLayout } from "@/components/dashboard-layout"
import { SpendingChart } from "@/components/spending-chart"
import { FinancialInsights } from "@/components/financial-insights"
import { BudgetTracker, SavingsGoals, PaymentCalendar, PerformanceMetrics, SmartRecommendations } from "@/components/advanced-dashboard-widgets"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  BarChart3, 
  TrendingUp, 
  Download, 
  Filter,
  Calendar,
  Target,
  PieChart,
  LineChart,
  DollarSign
} from "lucide-react"

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="min-h-full space-y-6 pb-6">
        {/* Header Section */}
        <div className="sticky top-0 bg-background/80 backdrop-blur-sm z-10 pb-4 border-b border-border/20">
          <div className="space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    Financial Analytics
                  </Badge>
                </div>
                <h1 className="text-2xl font-bold text-foreground">Analytics Dashboard</h1>
                <p className="text-muted-foreground">
                  Comprehensive insights into your spending patterns, savings, and financial health.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Button variant="outline" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
                <Button variant="outline" className="gap-2">
                  <Calendar className="w-4 h-4" />
                  Date Range
                </Button>
                <Button className="gap-2">
                  <Download className="w-4 h-4" />
                  Export Report
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Total Spent",
              value: "₹45,230",
              change: "+12.5%",
              changeType: "increase" as const,
              icon: DollarSign,
              color: "text-green-600",
              bgColor: "bg-green-50 dark:bg-green-950/20"
            },
            {
              title: "Monthly Savings",
              value: "₹3,450",
              change: "+8.2%",
              changeType: "increase" as const,
              icon: TrendingUp,
              color: "text-blue-600",
              bgColor: "bg-blue-50 dark:bg-blue-950/20"
            },
            {
              title: "Budget Utilization",
              value: "78%",
              change: "-5%",
              changeType: "decrease" as const,
              icon: Target,
              color: "text-purple-600",
              bgColor: "bg-purple-50 dark:bg-purple-950/20"
            },
            {
              title: "Categories Tracked",
              value: "12",
              change: "+2",
              changeType: "increase" as const,
              icon: PieChart,
              color: "text-orange-600",
              bgColor: "bg-orange-50 dark:bg-orange-950/20"
            }
          ].map((metric, index) => (
            <Card key={index} className="border-0 bg-gradient-to-br from-background to-muted/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className={`w-12 h-12 ${metric.bgColor} rounded-xl flex items-center justify-center`}>
                      <metric.icon className={`h-6 w-6 ${metric.color}`} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{metric.title}</p>
                      <p className="text-2xl font-bold">{metric.value}</p>
                      <div className={`flex items-center gap-1 text-sm ${
                        metric.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        <TrendingUp className={`h-3 w-3 ${
                          metric.changeType === 'decrease' ? 'rotate-180' : ''
                        }`} />
                        <span>{metric.change} vs last month</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Analytics Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Left Column - Charts */}
          <div className="xl:col-span-2 space-y-6">
            <SpendingChart />
            <PerformanceMetrics />
          </div>
          
          {/* Right Column - Widgets */}
          <div className="space-y-6">
            <BudgetTracker />
            <PaymentCalendar />
          </div>
        </div>

        {/* Secondary Analytics Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <SavingsGoals />
          <SmartRecommendations />
          <FinancialInsights />
        </div>

        {/* Detailed Reports Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-0 bg-gradient-to-br from-background to-muted/20">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <LineChart className="h-5 w-5 text-blue-600" />
                Spending Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center p-8 text-muted-foreground">
                  <LineChart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Interactive spending trend chart</p>
                  <p className="text-sm">Coming soon with advanced filtering</p>
                </div>
                <Button className="w-full" variant="outline">
                  View Detailed Trends
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-background to-muted/20">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <PieChart className="h-5 w-5 text-purple-600" />
                Category Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center p-8 text-muted-foreground">
                  <PieChart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Interactive category pie chart</p>
                  <p className="text-sm">Drill down into spending categories</p>
                </div>
                <Button className="w-full" variant="outline">
                  Explore Categories
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Export and Actions */}
        <Card className="border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-white/20 rounded-2xl flex items-center justify-center">
                <Download className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold">Export Your Financial Data</h3>
              <p className="text-lg opacity-90">
                Download comprehensive reports in PDF or Excel format for your records.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF Report
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Download className="mr-2 h-4 w-4" />
                  Export to Excel
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}