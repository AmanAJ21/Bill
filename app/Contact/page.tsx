"use client"

"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FloatingLines from "@/components/floating-lines-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send,
  CheckCircle,
  ArrowRight,
  Building,
  Users,
  Headphones
} from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    priority: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      detail: "Average response: 2 minutes",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      available: "24/7"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call our toll-free number",
      detail: "+91 1800-123-4567",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      available: "9 AM - 9 PM IST"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      detail: "support@universalbill.com",
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      available: "24 hours response"
    },
    {
      icon: Building,
      title: "Office Visit",
      description: "Visit our Bangalore office",
      detail: "Koramangala, Bangalore",
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      available: "Mon-Fri, 10 AM - 6 PM"
    }
  ]

  const officeLocations = [
    {
      city: "Bangalore",
      address: "123 Innovation Drive, Koramangala, Bangalore 560034",
      phone: "+91 80 4567 8900",
      email: "bangalore@universalbill.com",
      type: "Headquarters"
    },
    {
      city: "Mumbai",
      address: "456 Business Park, Bandra Kurla Complex, Mumbai 400051",
      phone: "+91 22 6789 0123",
      email: "mumbai@universalbill.com",
      type: "Regional Office"
    },
    {
      city: "Delhi",
      address: "789 Corporate Center, Connaught Place, New Delhi 110001",
      phone: "+91 11 2345 6789",
      email: "delhi@universalbill.com",
      type: "Regional Office"
    }
  ]

  if (isSubmitted) {
    return (
      <>
        <Navbar />
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-green-50/30 dark:to-green-950/20 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-md mx-auto px-4"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Message Sent!</h1>
            <p className="text-muted-foreground mb-8">
              Thank you for contacting us. We'll get back to you within 24 hours.
            </p>
            <div className="space-y-4">
              <Button onClick={() => setIsSubmitted(false)} className="w-full">
                Send Another Message
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </motion.div>
        </section>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-blue-50/30 dark:to-blue-950/20 py-20 lg:py-32">
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <FloatingLines
            linesGradient={['#3b82f6', '#8b5cf6', '#06b6d4']}
            enabledWaves={['top', 'middle', 'bottom']}
            lineCount={[2, 3, 4]}
            lineDistance={[15, 10, 8]}
            animationSpeed={0.4}
            interactive={true}
            parallax={true}
            mixBlendMode="multiply"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-6 px-6 py-3 text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 border-0 shadow-lg">
                <Headphones className="w-4 h-4 mr-2" />
                Get in Touch
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-foreground to-blue-600 bg-clip-text text-transparent">
                We're here to help
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Have questions about Universal Bill? Need support with your account? 
              Our team is ready to assist you 24/7.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Choose Your Preferred Way to Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to reach us, all designed for your convenience
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Card className="h-full border-0 bg-gradient-to-br from-background to-muted/20 hover:shadow-xl transition-all duration-500">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${method.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className={`w-8 h-8 ${method.color}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{method.description}</p>
                    <p className="text-sm font-medium mb-2">{method.detail}</p>
                    <Badge variant="outline" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {method.available}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20 bg-gradient-to-b from-muted/10 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-gradient-to-br from-background to-muted/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <Send className="w-6 h-6 text-blue-600" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="John Doe"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="john@example.com"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company (Optional)</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Your Company"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="priority">Priority</Label>
                        <Select value={formData.priority} onValueChange={(value) => handleInputChange('priority', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low - General inquiry</SelectItem>
                            <SelectItem value="medium">Medium - Account support</SelectItem>
                            <SelectItem value="high">High - Technical issue</SelectItem>
                            <SelectItem value="urgent">Urgent - Payment problem</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="How can we help you?"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Please describe your inquiry in detail..."
                        rows={6}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <MapPin className="w-8 h-8 text-blue-600" />
                  Our Offices
                </h2>
                <p className="text-muted-foreground mb-8">
                  Visit us at any of our locations across India
                </p>
              </div>

              <div className="space-y-6">
                {officeLocations.map((office, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-0 bg-gradient-to-br from-background to-muted/20 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold">{office.city}</h3>
                            <Badge variant="outline" className="mt-1 text-xs">
                              {office.type}
                            </Badge>
                          </div>
                          <Building className="w-6 h-6 text-blue-600" />
                        </div>
                        
                        <div className="space-y-3 text-sm">
                          <div className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{office.address}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{office.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{office.email}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How quickly do you respond to support requests?",
                answer: "We aim to respond to all inquiries within 2 hours during business hours and within 24 hours for after-hours requests."
              },
              {
                question: "Do you offer phone support in regional languages?",
                answer: "Yes, our support team can assist you in Hindi, English, and several regional languages including Tamil, Telugu, and Kannada."
              },
              {
                question: "Can I schedule a demo or consultation?",
                answer: "Absolutely! You can schedule a personalized demo through our contact form or by calling our sales team directly."
              },
              {
                question: "What information should I include in my support request?",
                answer: "Please include your account details, a clear description of the issue, any error messages, and steps you've already tried."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 bg-gradient-to-br from-background to-muted/20 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 text-lg">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}