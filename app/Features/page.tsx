"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FloatingLines from "@/components/floating-lines-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Shield, 
  Zap, 
  Smartphone, 
  CheckCircle, 
  CreditCard, 
  Bell, 
  BarChart3, 
  Lock,
  Users,
  Calendar,
  ArrowRight,
  Star
} from "lucide-react"

export default function FeaturesPage() {
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
                <Star className="w-4 h-4 mr-2" />
                Complete Feature Overview
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-foreground to-blue-600 bg-clip-text text-transparent">
                Everything you need to
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                manage bills effortlessly
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              From automated payments to smart insights, discover how Universal Bill transforms 
              the way you handle recurring expenses across India.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105" asChild>
                <Link href="/CreateAccount">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="group border-2 hover:bg-muted/50 transition-all duration-300">
                <Smartphone className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-blue-600 bg-clip-text text-transparent">
              Core Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful tools designed to simplify your financial life
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "One-Click Payments",
                description: "Pay all your bills with a single click. No more juggling multiple apps or websites.",
                color: "text-yellow-600",
                bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
                features: ["Instant processing", "Multiple payment methods", "Bulk payments"]
              },
              {
                icon: Shield,
                title: "Bank-Grade Security",
                description: "256-bit encryption and PCI DSS compliance ensure your data is always protected.",
                color: "text-blue-600",
                bgColor: "bg-blue-50 dark:bg-blue-950/20",
                features: ["End-to-end encryption", "Secure tokenization", "Fraud protection"]
              },
              {
                icon: Bell,
                title: "Smart Reminders",
                description: "Never miss a due date with intelligent notifications and payment scheduling.",
                color: "text-green-600",
                bgColor: "bg-green-50 dark:bg-green-950/20",
                features: ["Custom alerts", "Due date tracking", "Payment confirmations"]
              },
              {
                icon: BarChart3,
                title: "Spending Analytics",
                description: "Detailed insights into your spending patterns with visual charts and reports.",
                color: "text-purple-600",
                bgColor: "bg-purple-50 dark:bg-purple-950/20",
                features: ["Monthly reports", "Category breakdown", "Trend analysis"]
              },
              {
                icon: CreditCard,
                title: "Multiple Payment Methods",
                description: "Support for UPI, credit cards, debit cards, and net banking across all major banks.",
                color: "text-indigo-600",
                bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
                features: ["UPI integration", "Card payments", "Net banking"]
              },
              {
                icon: Smartphone,
                title: "Mobile-First Design",
                description: "Optimized for mobile devices with a responsive design that works everywhere.",
                color: "text-pink-600",
                bgColor: "bg-pink-50 dark:bg-pink-950/20",
                features: ["iOS & Android", "Offline support", "Touch-friendly UI"]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-0 bg-gradient-to-br from-background to-muted/20 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 relative overflow-hidden">
                  <CardContent className="p-8 space-y-6">
                    <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-blue-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {feature.features.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 bg-gradient-to-b from-muted/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Advanced Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade features for power users and businesses
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                {
                  icon: Calendar,
                  title: "Smart Scheduling",
                  description: "AI-powered payment scheduling that optimizes your cash flow and ensures bills are paid on time."
                },
                {
                  icon: Users,
                  title: "Family Management",
                  description: "Manage bills for your entire family with role-based access and spending limits."
                },
                {
                  icon: Lock,
                  title: "Advanced Security",
                  description: "Two-factor authentication, biometric login, and real-time fraud monitoring."
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-4 p-6 rounded-2xl bg-gradient-to-r from-muted/30 to-transparent hover:from-muted/50 transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                <div className="relative z-10 space-y-6">
                  <h3 className="text-2xl font-bold">Dashboard Preview</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <span>Total Bills This Month</span>
                      <span className="text-2xl font-bold">₹12,450</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm text-center">
                        <div className="text-lg font-bold">15</div>
                        <div className="text-sm opacity-80">Bills Paid</div>
                      </div>
                      <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm text-center">
                        <div className="text-lg font-bold">3</div>
                        <div className="text-sm opacity-80">Upcoming</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
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
              Seamless Integrations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with 500+ service providers across India
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: "Utilities", count: "150+", examples: ["BESCOM", "Tata Power", "Adani Gas"] },
              { category: "Telecom", count: "50+", examples: ["Airtel", "Jio", "Vi"] },
              { category: "Internet", count: "100+", examples: ["JioFiber", "Airtel Xstream", "ACT"] },
              { category: "Subscriptions", count: "200+", examples: ["Netflix", "Prime", "Spotify"] }
            ].map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-muted/30 to-muted/10 hover:from-muted/50 hover:to-muted/20 transition-all duration-300 group cursor-pointer border border-transparent hover:border-blue-200/50 dark:hover:border-blue-800/50"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{integration.count}</div>
                <h3 className="font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                  {integration.category}
                </h3>
                <div className="space-y-1">
                  {integration.examples.map((example, i) => (
                    <div key={i} className="text-sm text-muted-foreground">
                      {example}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            className="max-w-3xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold">
              Ready to experience the future of bill payments?
            </h2>
            <p className="text-lg lg:text-xl opacity-90 leading-relaxed">
              Join thousands of satisfied customers who have simplified their financial lives with Universal Bill.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="group bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" asChild>
                <Link href="/CreateAccount">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="group border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                <Smartphone className="mr-2 h-4 w-4" />
                Schedule Demo
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                No setup fees
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Cancel anytime
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                24/7 support
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}