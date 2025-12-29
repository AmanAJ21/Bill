"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, HelpCircle, Phone } from "lucide-react"

export function HelpSupport() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-blue-600" />
          <CardTitle className="text-lg">Need Help?</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
          <p className="text-sm text-blue-900 dark:text-blue-100 mb-3">
            Our Indian support team is available 24/7 on WhatsApp.
          </p>
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white gap-2">
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </Button>
        </div>

        <div className="pt-4 border-t text-center">
          <p className="text-xs text-muted-foreground mb-2">
            © 2024 UnifiedBill India Ltd. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 text-xs">
            <button className="text-blue-600 hover:underline">
              Privacy Policy
            </button>
            <button className="text-blue-600 hover:underline">
              Terms of Service
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}