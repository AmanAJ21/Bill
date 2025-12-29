"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { DraggableDashboard } from "@/components/draggable-dashboard"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Download, 
  Plus, 
  Calendar, 
  TrendingUp, 
  Bell,
  Settings,
  Eye,
  EyeOff,
  RefreshCw
} from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export default function DashboardPage() {
  const [showBalance, setShowBalance] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = async () => {
    setIsRefreshing(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsRefreshing(false)
  }

  return (
    <DashboardLayout>
      <div className="min-h-full space-y-6 pb-6">
        {/* Enhanced Header Section */}
        <div className="sticky top-0 bg-background/80 backdrop-blur-sm z-10 pb-4 border-b border-border/20">
          <div className="space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    December 2024
                  </Badge>
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    All systems operational
                  </Badge>
                </div>
                <div className="flex items-center gap-4">
                  <h1 className="text-2xl font-bold text-foreground">Good morning, Rahul!</h1>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleRefresh}
                    disabled={isRefreshing}
                    className="gap-2"
                  >
                    <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                    {isRefreshing ? 'Syncing...' : 'Refresh'}
                  </Button>
                </div>
                <p className="text-muted-foreground">
                  Your bills are managed automatically. Customize your dashboard layout below.
                </p>
              </div>
              
              <div className="flex gap-3 shrink-0">
                <Button variant="outline" className="gap-2">
                  <Download className="w-4 h-4" />
                  Export Data
                </Button>
                <Button variant="outline" className="gap-2">
                  <Settings className="w-4 h-4" />
                  Settings
                </Button>
                <Button className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Plus className="w-4 h-4" />
                  Add Funds
                </Button>
              </div>
            </div>

            {/* Balance Overview Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <p className="text-sm opacity-90">Available Balance</p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowBalance(!showBalance)}
                          className="p-1 h-auto text-white/80 hover:text-white hover:bg-white/10"
                        >
                          {showBalance ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                        </Button>
                      </div>
                      <p className="text-3xl font-bold">
                        {showBalance ? '₹15,450.00' : '₹••,•••.••'}
                      </p>
                      <p className="text-sm opacity-80">
                        Last updated: Just now
                      </p>
                    </div>
                    
                    <div className="text-right space-y-2">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        <span className="text-sm">+5.2% this month</span>
                      </div>
                      <p className="text-sm opacity-80">Next bill: ₹2,450 on Dec 28</p>
                      <Button variant="secondary" size="sm" className="text-blue-600">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Draggable Dashboard */}
        <DraggableDashboard>
          {/* Additional Insights Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
          >
            <Card className="border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Money Saved</h3>
                <p className="text-2xl font-bold text-green-600 mb-1">₹3,450</p>
                <p className="text-sm text-muted-foreground">vs manual payments</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">On-Time Payments</h3>
                <p className="text-2xl font-bold text-blue-600 mb-1">100%</p>
                <p className="text-sm text-muted-foreground">this year</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                  <Bell className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Smart Alerts</h3>
                <p className="text-2xl font-bold text-purple-600 mb-1">24</p>
                <p className="text-sm text-muted-foreground">notifications sent</p>
              </CardContent>
            </Card>
          </motion.div>
        </DraggableDashboard>
      </div>
    </DashboardLayout>
  )
}