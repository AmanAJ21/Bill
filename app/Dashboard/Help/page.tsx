import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  Search,
  Book,
  Video,
  FileText,
  Users,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react"

export default function HelpPage() {
  const faqCategories = [
    {
      title: "Getting Started",
      icon: Book,
      color: "text-blue-600",
      bg: "bg-blue-50 dark:bg-blue-950/20",
      faqs: [
        { question: "How do I link my first biller?", answer: "Go to Bills > Connect Services and search for your service provider." },
        { question: "Is my payment information secure?", answer: "Yes, we use bank-grade encryption and are PCI DSS compliant." },
        { question: "Which payment methods are supported?", answer: "UPI, credit cards, debit cards, and net banking from all major banks." }
      ]
    },
    {
      title: "Payments & Billing",
      icon: FileText,
      color: "text-green-600",
      bg: "bg-green-50 dark:bg-green-950/20",
      faqs: [
        { question: "How do I set up autopay?", answer: "Enable autopay from your bill details page for automatic payments." },
        { question: "Can I schedule payments in advance?", answer: "Yes, you can schedule payments up to 30 days in advance." },
        { question: "What happens if a payment fails?", answer: "We'll retry the payment and notify you via SMS and email." }
      ]
    },
    {
      title: "Account & Security",
      icon: Users,
      color: "text-purple-600",
      bg: "bg-purple-50 dark:bg-purple-950/20",
      faqs: [
        { question: "How do I enable two-factor authentication?", answer: "Go to Settings > Security and enable 2FA with your mobile number." },
        { question: "Can I share my account with family?", answer: "Yes, Pro and Business plans support family sharing features." },
        { question: "How do I change my password?", answer: "Visit Settings > Security > Change Password to update your credentials." }
      ]
    }
  ]

  const supportChannels = [
    {
      title: "WhatsApp Support",
      description: "Chat with our support team on WhatsApp",
      icon: MessageCircle,
      color: "text-green-600",
      bg: "bg-green-50 dark:bg-green-950/20",
      action: "Chat Now",
      available: "24/7"
    },
    {
      title: "Phone Support",
      description: "Call our toll-free support line",
      icon: Phone,
      color: "text-blue-600",
      bg: "bg-blue-50 dark:bg-blue-950/20",
      action: "Call Now",
      available: "9 AM - 9 PM"
    },
    {
      title: "Email Support",
      description: "Send us an email for detailed queries",
      icon: Mail,
      color: "text-purple-600",
      bg: "bg-purple-50 dark:bg-purple-950/20",
      action: "Send Email",
      available: "24 hours response"
    },
    {
      title: "Video Tutorials",
      description: "Watch step-by-step video guides",
      icon: Video,
      color: "text-orange-600",
      bg: "bg-orange-50 dark:bg-orange-950/20",
      action: "Watch Videos",
      available: "Self-paced"
    }
  ]

  return (
    <DashboardLayout>
      <div className="min-h-full space-y-6 pb-6">
        {/* Header Section */}
        <div className="sticky top-0 bg-background/80 backdrop-blur-sm z-10 pb-4 border-b border-border/20">
          <div className="space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-blue-600" />
                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    Help & Support
                  </Badge>
                </div>
                <h1 className="text-2xl font-bold text-foreground">How can we help you?</h1>
                <p className="text-muted-foreground">
                  Find answers to common questions or get in touch with our support team.
                </p>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search help articles..."
                className="pl-10"
              />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {supportChannels.map((channel, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group border-0 bg-gradient-to-br from-background to-muted/20">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${channel.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <channel.icon className={`h-8 w-8 ${channel.color}`} />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors">{channel.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{channel.description}</p>
                <div className="space-y-2">
                  <Button className="w-full" size="sm">
                    {channel.action}
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                  <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {channel.available}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Quick answers to common questions</p>
          </div>

          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border-0 bg-gradient-to-br from-background to-muted/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category.bg}`}>
                    <category.icon className={`h-5 w-5 ${category.color}`} />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.faqs.map((faq, faqIndex) => (
                  <div key={faqIndex} className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div className="space-y-2">
                        <h4 className="font-medium">{faq.question}</h4>
                        <p className="text-sm text-muted-foreground">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Information */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
          <CardContent className="p-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-white/20 rounded-2xl flex items-center justify-center">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold">Still need help?</h3>
              <p className="text-lg opacity-90">
                Our support team is available 24/7 to assist you with any questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Start Live Chat
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Support
                </Button>
              </div>
              <div className="flex items-center justify-center gap-8 text-sm opacity-80 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Average response: 2 minutes
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Available in Hindi & English
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}