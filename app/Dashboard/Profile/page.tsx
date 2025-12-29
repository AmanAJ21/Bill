import { DashboardLayout } from "@/components/dashboard-layout"
import { AccountProfile } from "@/components/account-profile"
import { PersonalDetails } from "@/components/personal-details"
import { PaymentMethods } from "@/components/payment-methods"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  Bell, 
  Lock, 
  Download,
  Settings,
  User
} from "lucide-react"

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="min-h-full space-y-6 pb-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky top-0 bg-background/80 backdrop-blur-sm z-10 pb-4 border-b border-border/20">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-blue-600" />
              <Badge variant="outline" className="text-blue-600 border-blue-200">
                Profile Management
              </Badge>
            </div>
            <h1 className="text-2xl font-bold text-foreground">Profile Settings</h1>
            <p className="text-muted-foreground">Manage your account information, preferences, and security settings.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Export Data
            </Button>
            <Button className="gap-2">
              <Settings className="w-4 h-4" />
              Advanced Settings
            </Button>
          </div>
        </div>

        {/* Account Profile Overview */}
        <div className="pt-4">
          <AccountProfile />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Personal Details */}
          <div className="lg:col-span-2 space-y-6">
            <PersonalDetails />
            <PaymentMethods />
          </div>
          
          {/* Right Column - Security & Preferences */}
          <div className="space-y-6">
            {/* Security Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    Enabled
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Password</p>
                    <p className="text-sm text-muted-foreground">Last changed 2 months ago</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Lock className="h-3 w-3 mr-1" />
                    Change
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Login Sessions</p>
                    <p className="text-sm text-muted-foreground">3 active sessions</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Notification Preferences */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Bell className="h-5 w-5 text-blue-600" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Bill Reminders</p>
                    <p className="text-sm text-muted-foreground">Get notified before due dates</p>
                  </div>
                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    On
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Payment Confirmations</p>
                    <p className="text-sm text-muted-foreground">Receive payment receipts</p>
                  </div>
                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    On
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Marketing Updates</p>
                    <p className="text-sm text-muted-foreground">Product news and offers</p>
                  </div>
                  <Badge variant="outline" className="text-gray-600 border-gray-200">
                    Off
                  </Badge>
                </div>
                <Button variant="outline" className="w-full">
                  Manage Preferences
                </Button>
              </CardContent>
            </Card>

            {/* Account Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Account Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                  <div className="text-sm text-muted-foreground">ACCOUNT STATUS</div>
                  <div className="text-lg font-bold text-green-600">Active Premium</div>
                  <div className="text-xs text-muted-foreground">Expires Dec 2024</div>
                </div>
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <div className="text-sm text-muted-foreground">MEMBER SINCE</div>
                  <div className="text-lg font-bold text-blue-600">Jan 2023</div>
                  <div className="text-xs text-muted-foreground">2 years</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}