"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, HelpCircle } from "lucide-react"

export function HelpSection() {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-200 dark:border-blue-800">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <HelpCircle className="h-5 w-5 text-blue-600" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-sm">Need help with a transaction?</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Our concierge team is available 24/7 to resolve disputes
            </p>
          </div>
        </div>
        
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white" 
          size="sm"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Start Chat
        </Button>
      </CardContent>
    </Card>
  )
}