import { DashboardLayout } from "@/components/dashboard-layout"
import { PopularBillers } from "@/components/popular-billers"
import { BrowseByCategory } from "@/components/browse-by-category"
import { LinkNewProvider } from "@/components/link-new-provider"
import { LinkedBillers } from "@/components/linked-billers"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Filter, Plus, Search, Zap, Shield, TrendingUp, Users } from "lucide-react"

export default function BillsPage() {
  return (
    <DashboardLayout>
      <div className="min-h-full space-y-6 pb-6">
        {/* Header Section */}
        <div className="sticky top-0 bg-background/80 backdrop-blur-sm z-10 pb-4 border-b border-border/20">
          <div className="space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-600" />
                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    Bill Management
                  </Badge>
                </div>
                <h1 className="text-2xl font-bold text-foreground">Connect Services</h1>
                <p className="text-muted-foreground">
                  Link your utility providers to enable one-tap consolidated payments. Add new billers or manage existing connections below.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Button variant="outline" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
                <Button className="gap-2">
                  <Plus className="w-4 h-4" />
                  Add Custom Biller
                </Button>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search billers (e.g. BESCOM, Airtel, HDFC)"
                className="pl-10"
              />
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { icon: Zap, title: "Connected", value: "7", subtitle: "Active billers", color: "text-green-600", bg: "bg-green-50 dark:bg-green-950/20" },
            { icon: Shield, title: "Secure", value: "100%", subtitle: "Encrypted", color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-950/20" },
            { icon: TrendingUp, title: "Saved", value: "₹2,450", subtitle: "This month", color: "text-purple-600", bg: "bg-purple-50 dark:bg-purple-950/20" },
            { icon: Users, title: "Providers", value: "500+", subtitle: "Available", color: "text-orange-600", bg: "bg-orange-50 dark:bg-orange-950/20" }
          ].map((stat, index) => (
            <Card key={index} className="border-0 bg-gradient-to-br from-background to-muted/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${stat.bg}`}>
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.title}</div>
                    <div className="text-xs text-muted-foreground">{stat.subtitle}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Current Connections */}
        <LinkedBillers />

        {/* Popular Billers */}
        <PopularBillers />

        {/* Browse by Category */}
        <BrowseByCategory />

        {/* Link New Provider */}
        <LinkNewProvider />

      </div>
    </DashboardLayout>
  )
}