"use client"

import { useState, useEffect } from "react"
import { motion, Reorder } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  GripVertical, 
  Settings, 
  Eye, 
  EyeOff, 
  RotateCcw,
  Save,
  Edit3
} from "lucide-react"

// Import all dashboard components
import { DashboardStats } from "@/components/dashboard-stats"
import { BillTimeline } from "@/components/bill-timeline"
import { NextBill } from "@/components/next-bill"
import { UpcomingBills } from "@/components/upcoming-bills"
import { QuickActions } from "@/components/quick-actions"
import { SpendingChart } from "@/components/spending-chart"
import { NotificationsPanel } from "@/components/notifications-panel"
import { FinancialInsights } from "@/components/financial-insights"
import { HelpSection } from "@/components/help-section"

interface DashboardWidget {
  id: string
  title: string
  component: React.ComponentType
  size: 'small' | 'medium' | 'large' | 'full'
  visible: boolean
  category: 'overview' | 'analytics' | 'actions' | 'notifications'
}

const defaultWidgets: DashboardWidget[] = [
  {
    id: 'stats',
    title: 'Dashboard Statistics',
    component: DashboardStats,
    size: 'full',
    visible: true,
    category: 'overview'
  },
  {
    id: 'quick-actions',
    title: 'Quick Actions',
    component: QuickActions,
    size: 'full',
    visible: true,
    category: 'actions'
  },
  {
    id: 'spending-chart',
    title: 'Spending Overview',
    component: SpendingChart,
    size: 'large',
    visible: true,
    category: 'analytics'
  },
  {
    id: 'bill-timeline',
    title: 'Bill Timeline',
    component: BillTimeline,
    size: 'large',
    visible: true,
    category: 'overview'
  },
  {
    id: 'next-bill',
    title: 'Next Bill',
    component: NextBill,
    size: 'medium',
    visible: true,
    category: 'overview'
  },
  {
    id: 'upcoming-bills',
    title: 'Upcoming Bills',
    component: UpcomingBills,
    size: 'medium',
    visible: true,
    category: 'overview'
  },
  {
    id: 'notifications',
    title: 'Notifications',
    component: NotificationsPanel,
    size: 'medium',
    visible: true,
    category: 'notifications'
  },
  {
    id: 'financial-insights',
    title: 'Financial Insights',
    component: FinancialInsights,
    size: 'medium',
    visible: true,
    category: 'analytics'
  },
  {
    id: 'help-section',
    title: 'Help & Support',
    component: HelpSection,
    size: 'small',
    visible: true,
    category: 'actions'
  }
]

interface DraggableDashboardProps {
  children?: React.ReactNode
}

export function DraggableDashboard({ children }: DraggableDashboardProps) {
  const [widgets, setWidgets] = useState<DashboardWidget[]>(defaultWidgets)
  const [isEditMode, setIsEditMode] = useState(false)
  const [hasChanges, setHasChanges] = useState(false)

  // Load saved layout from localStorage
  useEffect(() => {
    const savedLayout = localStorage.getItem('dashboard-layout')
    if (savedLayout) {
      try {
        const parsedLayout = JSON.parse(savedLayout)
        setWidgets(parsedLayout)
      } catch (error) {
        console.error('Failed to load saved layout:', error)
      }
    }
  }, [])

  // Save layout to localStorage
  const saveLayout = () => {
    localStorage.setItem('dashboard-layout', JSON.stringify(widgets))
    setHasChanges(false)
  }

  // Reset to default layout
  const resetLayout = () => {
    setWidgets(defaultWidgets)
    setHasChanges(true)
  }

  // Toggle widget visibility
  const toggleWidgetVisibility = (widgetId: string) => {
    setWidgets(prev => prev.map(widget => 
      widget.id === widgetId 
        ? { ...widget, visible: !widget.visible }
        : widget
    ))
    setHasChanges(true)
  }

  // Handle reorder
  const handleReorder = (newOrder: DashboardWidget[]) => {
    setWidgets(newOrder)
    setHasChanges(true)
  }

  // Get grid class based on widget size
  const getGridClass = (size: string) => {
    switch (size) {
      case 'small': return 'col-span-1'
      case 'medium': return 'col-span-1 lg:col-span-1'
      case 'large': return 'col-span-1 lg:col-span-2'
      case 'full': return 'col-span-1 lg:col-span-3'
      default: return 'col-span-1'
    }
  }

  const visibleWidgets = widgets.filter(widget => widget.visible)

  return (
    <div className="space-y-6">
      {/* Dashboard Controls */}
      <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border/40">
        <div className="flex items-center gap-3">
          <Edit3 className="h-5 w-5 text-blue-600" />
          <div>
            <h3 className="font-medium">Customize Dashboard</h3>
            <p className="text-sm text-muted-foreground">
              {isEditMode ? 'Drag widgets to reorder, toggle visibility' : 'Click edit to customize your layout'}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {hasChanges && (
            <Badge variant="outline" className="text-orange-600 border-orange-200">
              Unsaved changes
            </Badge>
          )}
          
          <Button
            variant="outline"
            size="sm"
            onClick={resetLayout}
            className="gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>
          
          {hasChanges && (
            <Button
              size="sm"
              onClick={saveLayout}
              className="gap-2"
            >
              <Save className="h-4 w-4" />
              Save Layout
            </Button>
          )}
          
          <Button
            variant={isEditMode ? "default" : "outline"}
            size="sm"
            onClick={() => setIsEditMode(!isEditMode)}
            className="gap-2"
          >
            <Settings className="h-4 w-4" />
            {isEditMode ? 'Done' : 'Edit'}
          </Button>
        </div>
      </div>

      {/* Widget Visibility Controls (shown in edit mode) */}
      {isEditMode && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800"
        >
          <h4 className="font-medium mb-3 text-blue-900 dark:text-blue-100">Widget Visibility</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {widgets.map(widget => (
              <Button
                key={widget.id}
                variant={widget.visible ? "default" : "outline"}
                size="sm"
                onClick={() => toggleWidgetVisibility(widget.id)}
                className="justify-start gap-2 h-auto py-2"
              >
                {widget.visible ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
                <span className="text-xs">{widget.title}</span>
              </Button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Draggable Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Reorder.Group
          axis="y"
          values={visibleWidgets}
          onReorder={handleReorder}
          className="contents"
        >
          {visibleWidgets.map((widget) => {
            const Component = widget.component
            
            return (
              <Reorder.Item
                key={widget.id}
                value={widget}
                className={`${getGridClass(widget.size)} ${isEditMode ? 'cursor-grab active:cursor-grabbing' : ''}`}
                whileDrag={{ 
                  scale: 1.05, 
                  zIndex: 1000,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                dragListener={isEditMode}
              >
                <motion.div
                  layout
                  className={`h-full relative group ${
                    isEditMode 
                      ? 'ring-2 ring-blue-200 dark:ring-blue-800 ring-offset-2 ring-offset-background rounded-lg' 
                      : ''
                  }`}
                  whileHover={isEditMode ? { scale: 1.02 } : {}}
                  transition={{ duration: 0.2 }}
                >
                  {/* Drag Handle (shown in edit mode) */}
                  {isEditMode && (
                    <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="p-1 bg-blue-600 text-white rounded cursor-grab active:cursor-grabbing">
                        <GripVertical className="h-4 w-4" />
                      </div>
                    </div>
                  )}
                  
                  {/* Widget Title (shown in edit mode) */}
                  {isEditMode && (
                    <div className="absolute top-2 left-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Badge variant="secondary" className="text-xs">
                        {widget.title}
                      </Badge>
                    </div>
                  )}
                  
                  {/* Widget Component */}
                  <div className={isEditMode ? 'pointer-events-none' : ''}>
                    <Component />
                  </div>
                </motion.div>
              </Reorder.Item>
            )
          })}
        </Reorder.Group>
      </div>

      {/* Additional Content */}
      {children}
    </div>
  )
}