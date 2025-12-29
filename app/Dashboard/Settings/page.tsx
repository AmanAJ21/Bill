"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Settings, 
  User, 
  Shield, 
  Bell, 
  CreditCard,
  Lock,
  Eye,
  EyeOff,
  Trash2,
  Download,
  Upload,
  CheckCircle
} from "lucide-react"
import { useState } from "react"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    push: false,
    marketing: false
  })
  const [security, setSecurity] = useState({
    twoFactor: true,
    biometric: false,
    sessionTimeout: "30"
  })

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "security", label: "Security", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "payments", label: "Payment Methods", icon: CreditCard },
    { id: "preferences", label: "Preferences", icon: Settings }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Rahul" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Sharma" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="rahul.sharma@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+91 98765 43210" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" defaultValue="12/B, Indiranagar, Bangalore, Karnataka 560038" />
                </div>
                <div className="flex justify-end gap-3">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">Account Verified</p>
                      <p className="text-sm text-muted-foreground">Your account is fully verified</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    Active
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">Premium</p>
                    <p className="text-sm text-muted-foreground">Plan Type</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">Jan 2023</p>
                    <p className="text-sm text-muted-foreground">Member Since</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <p className="text-2xl font-bold text-purple-600">7</p>
                    <p className="text-sm text-muted-foreground">Connected Bills</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "security":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Security Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Switch 
                    checked={security.twoFactor} 
                    onCheckedChange={(checked: boolean) => setSecurity(prev => ({ ...prev, twoFactor: checked }))}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="font-medium">Biometric Login</p>
                    <p className="text-sm text-muted-foreground">Use fingerprint or face recognition</p>
                  </div>
                  <Switch 
                    checked={security.biometric} 
                    onCheckedChange={(checked: boolean) => setSecurity(prev => ({ ...prev, biometric: checked }))}
                  />
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label htmlFor="sessionTimeout">Session Timeout</Label>
                  <Select value={security.sessionTimeout} onValueChange={(value) => setSecurity(prev => ({ ...prev, sessionTimeout: value }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="120">2 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Password & Login</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Password</p>
                    <p className="text-sm text-muted-foreground">Last changed 2 months ago</p>
                  </div>
                  <Button variant="outline">
                    <Lock className="h-4 w-4 mr-2" />
                    Change Password
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Active Sessions</p>
                    <p className="text-sm text-muted-foreground">3 devices currently logged in</p>
                  </div>
                  <Button variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    Manage Sessions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "notifications":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notification Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                  <Switch 
                    checked={notifications.email} 
                    onCheckedChange={(checked: boolean) => setNotifications(prev => ({ ...prev, email: checked }))}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="font-medium">SMS Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive notifications via SMS</p>
                  </div>
                  <Switch 
                    checked={notifications.sms} 
                    onCheckedChange={(checked: boolean) => setNotifications(prev => ({ ...prev, sms: checked }))}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="font-medium">Push Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive push notifications on your device</p>
                  </div>
                  <Switch 
                    checked={notifications.push} 
                    onCheckedChange={(checked: boolean) => setNotifications(prev => ({ ...prev, push: checked }))}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="font-medium">Marketing Communications</p>
                    <p className="text-sm text-muted-foreground">Receive updates about new features and offers</p>
                  </div>
                  <Switch 
                    checked={notifications.marketing} 
                    onCheckedChange={(checked: boolean) => setNotifications(prev => ({ ...prev, marketing: checked }))}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notification Types</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { type: "Bill Reminders", description: "Get notified before bill due dates", enabled: true },
                  { type: "Payment Confirmations", description: "Receive confirmation after payments", enabled: true },
                  { type: "Security Alerts", description: "Important security notifications", enabled: true },
                  { type: "Account Updates", description: "Changes to your account settings", enabled: false }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{item.type}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <Switch defaultChecked={item.enabled} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )

      case "payments":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Methods
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { type: "Credit Card", details: "•••• •••• •••• 4421", brand: "HDFC Bank", default: true },
                  { type: "UPI", details: "rahul@paytm", brand: "Paytm", default: false },
                  { type: "Net Banking", details: "HDFC Bank", brand: "HDFC", default: false }
                ].map((method, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                        <CreditCard className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{method.type}</p>
                        <p className="text-sm text-muted-foreground">{method.details}</p>
                        <p className="text-xs text-muted-foreground">{method.brand}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {method.default && (
                        <Badge variant="outline" className="text-green-600 border-green-200">
                          Default
                        </Badge>
                      )}
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
                <Button className="w-full" variant="outline">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Add Payment Method
                </Button>
              </CardContent>
            </Card>
          </div>
        )

      case "preferences":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  App Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="hi">Hindi</SelectItem>
                      <SelectItem value="ta">Tamil</SelectItem>
                      <SelectItem value="te">Telugu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select defaultValue="inr">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inr">Indian Rupee (₹)</SelectItem>
                      <SelectItem value="usd">US Dollar ($)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="ist">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                      <SelectItem value="utc">UTC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data & Privacy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Export Data</p>
                    <p className="text-sm text-muted-foreground">Download all your account data</p>
                  </div>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Import Data</p>
                    <p className="text-sm text-muted-foreground">Import data from other platforms</p>
                  </div>
                  <Button variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Import
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50 dark:bg-red-950/20">
                  <div>
                    <p className="font-medium text-red-600">Delete Account</p>
                    <p className="text-sm text-red-500">Permanently delete your account and all data</p>
                  </div>
                  <Button variant="destructive">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <DashboardLayout>
      <div className="min-h-full space-y-6 pb-6">
        {/* Header */}
        <div className="sticky top-0 bg-background/80 backdrop-blur-sm z-10 pb-4 border-b border-border/20">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-blue-600" />
                <Badge variant="outline" className="text-blue-600 border-blue-200">
                  Account Settings
                </Badge>
              </div>
              <h1 className="text-2xl font-bold text-foreground">Settings</h1>
              <p className="text-muted-foreground">Manage your account preferences and security settings</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="border-0 bg-gradient-to-br from-background to-muted/20">
              <CardContent className="p-4">
                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <Button
                      key={tab.id}
                      variant={activeTab === tab.id ? "default" : "ghost"}
                      className="w-full justify-start gap-3"
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <tab.icon className="h-4 w-4" />
                      {tab.label}
                    </Button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}