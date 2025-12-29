"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function PersonalDetails() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Personal Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              FULL NAME
            </Label>
            <Input 
              id="fullName"
              defaultValue="Rahul Sharma"
              className="font-medium"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              EMAIL
            </Label>
            <Input 
              id="email"
              type="email"
              defaultValue="rahul.sharma@email.com"
              className="font-medium"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              PHONE (PRIMARY)
            </Label>
            <Input 
              id="phone"
              defaultValue="+91 98765 43210"
              className="font-medium"
            />
          </div>

          {/* Address */}
          <div className="space-y-2">
            <Label htmlFor="address" className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              ADDRESS
            </Label>
            <Input 
              id="address"
              defaultValue="12/B, Indiranagar, Bangalore"
              className="font-medium"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mt-6 pt-6 border-t">
          <Button variant="outline">
            Cancel
          </Button>
          <Button>
            Save Changes
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}