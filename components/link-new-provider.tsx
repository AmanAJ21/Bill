"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Link2, Search } from "lucide-react"

export function LinkNewProvider() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Link2 className="h-5 w-5 text-blue-600" />
          <CardTitle className="text-lg">Link a New Provider</CardTitle>
        </div>
        <p className="text-sm text-muted-foreground">
          Can't find what you are looking for in the popular list? Search the full directory of over 20,000 billers supported by Bharat BillPay.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Category Selection */}
          <div className="space-y-2">
            <Label htmlFor="category">Select Category</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Insurance" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="insurance">Insurance</SelectItem>
                <SelectItem value="electricity">Electricity</SelectItem>
                <SelectItem value="mobile">Mobile</SelectItem>
                <SelectItem value="broadband">Broadband</SelectItem>
                <SelectItem value="gas">Gas</SelectItem>
                <SelectItem value="water">Water</SelectItem>
                <SelectItem value="dth">DTH</SelectItem>
                <SelectItem value="credit-card">Credit Card</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Biller Name */}
          <div className="space-y-2">
            <Label htmlFor="billerName">Biller Name</Label>
            <Input 
              id="billerName"
              placeholder="e.g. LIC India"
            />
          </div>
        </div>

        {/* Proceed Button */}
        <Button className="w-full md:w-auto">
          Proceed to Link
        </Button>
      </CardContent>
    </Card>
  )
}