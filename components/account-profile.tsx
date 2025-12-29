"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Mail, 
  Phone, 
  CreditCard, 
  Calendar,
  TrendingUp,
  CheckCircle
} from "lucide-react"

export function AccountProfile() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">Account Profile</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Manage your personal information and Bharat Bill Payment System preferences.
            </p>
          </div>
          <Badge variant="outline" className="gap-2 text-green-600 border-green-200">
            <CheckCircle className="h-3 w-3" />
            NPCI COMPLIANT
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Profile Info */}
          <div className="flex items-start gap-4">
            <div className="relative">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="bg-blue-100 text-blue-600 text-lg font-semibold">
                  RS
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1">
                <CheckCircle className="h-3 w-3 text-white" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-semibold">Rahul Sharma</h2>
                <Badge variant="secondary" className="text-xs">
                  Premium Member
                </Badge>
              </div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-3 w-3" />
                  <span>rahul.sharma@email.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="h-3 w-3" />
                  <span>BBPS ID: BB39201</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3 w-3" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex-1 grid grid-cols-3 gap-4 sm:ml-auto">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <CreditCard className="h-5 w-5 text-blue-600" />
              </div>
              <div className="text-sm text-muted-foreground">ACTIVE BILLERS</div>
              <div className="text-2xl font-bold text-blue-600">7</div>
              <div className="text-xs text-muted-foreground">Linked</div>
            </div>
            
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="h-5 w-5 text-purple-600" />
              </div>
              <div className="text-sm text-muted-foreground">NEXT PAYMENT</div>
              <div className="text-2xl font-bold text-purple-600">Oct 5th</div>
            </div>
            
            <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <div className="text-sm text-muted-foreground">TOTAL SAVED</div>
              <div className="text-2xl font-bold text-green-600">₹12,450</div>
            </div>
          </div>

          {/* Edit Button */}
          <div className="sm:ml-4">
            <Button variant="outline">
              Edit Profile
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}