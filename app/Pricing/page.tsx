"use client"

"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FloatingLines from "@/components/floating-lines-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  CheckCircle, 
  X, 
  Star, 
  ArrowRight, 
  Zap, 
  Shield, 
  Users,
  Crown,
  Sparkles
} from "lucide-react"
import { useState } from "react"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals getting started",
      monthlyPrice: 0,
      annualPrice: 0,
      popular: false,
      features: [
        "Up to 5 bill connections",
        "Basic payment scheduling",
        "Email notifications",
        "Mobile app access",
        "Standard support"
      ],
      limitations: [
        "No advanced analytics",
        "No family sharing",
        "Limited payment methods"
      ],
      cta: "Get Started Free",
      ctaVariant: "outline" as const
    },
    {
      name: "Pro",
      description: "Best for power users and small families",
      monthlyPrice: 299,
      annualPrice: 2390, // 20% discount
      popular: true,
      features: [
        "Unlimited bill connections",
        "Smart payment scheduling",
        "Advanced analytics & insights",
        "All notification types",
        "Family sharing (up to 4 members)",
        "Priority support",
        "Custom categories",
        "Export reports"
      ],
      limitations: [],
      cta: "Start Pro Trial",
      ctaVariant: "default" as const
    },
    {
      name: "Business",
      description: "For businesses and large families",
      monthlyPrice: 999,
      annualPrice: 7992, // 33% discount
      popular: false,
      features: [
        "Everything in Pro",
        "Unlimited family members",
        "Business expense tracking",
        "Team collaboration",
        "Advanced security features",
        "Dedicated account manager",
        "Custom integrations",
        "API access",
        "White-label options"
      ],
      limitations: [],
      cta: "Contact Sales",
      ctaVariant: "outline" as const
    }
  ]

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
                <Crown className="w-4 h-4 mr-2" />
                Simple, Transparent Pricing
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-foreground to-blue-600 bg-clip-text text-transparent">
                Choose the perfect plan
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                for your needs
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Start free and upgrade as you grow. All plans include our core features 
              with no hidden fees or long-term commitments.
            </motion.p>
            
            {/* Billing Toggle */}
            <motion.div 
              className="flex items-center justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  isAnnual ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                Annual
              </span>
              <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                Save up to 33%
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative ${plan.popular ? 'md:-mt-8' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-sm font-medium shadow-lg">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <Card className={`h-full relative overflow-hidden ${
                  plan.popular 
                    ? 'border-2 border-blue-200 dark:border-blue-800 shadow-2xl shadow-blue-500/20' 
                    : 'border-0 shadow-lg hover:shadow-xl'
                } transition-all duration-500 bg-gradient-to-br from-background to-muted/20`}>
                  {plan.popular && (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
                  )}
                  
                  <CardHeader className="text-center pb-8 relative z-10">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                      plan.name === 'Starter' ? 'bg-gray-100 dark:bg-gray-800' :
                      plan.name === 'Pro' ? 'bg-gradient-to-br from-blue-500 to-purple-500' :
                      'bg-gradient-to-br from-purple-500 to-pink-500'
                    }`}>
                      {plan.name === 'Starter' && <Zap className="w-8 h-8 text-gray-600" />}
                      {plan.name === 'Pro' && <Shield className="w-8 h-8 text-white" />}
                      {plan.name === 'Business' && <Users className="w-8 h-8 text-white" />}
                    </div>
                    
                    <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                    <p className="text-muted-foreground mb-6">{plan.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-4xl font-bold">
                          ₹{isAnnual ? Math.floor(plan.annualPrice / 12) : plan.monthlyPrice}
                        </span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                      {isAnnual && plan.annualPrice > 0 && (
                        <div className="text-sm text-muted-foreground">
                          <span className="line-through">₹{plan.monthlyPrice * 12}</span>
                          <span className="ml-2 text-green-600 font-medium">
                            Save ₹{(plan.monthlyPrice * 12) - plan.annualPrice}
                          </span>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6 relative z-10">
                    <div className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                      
                      {plan.limitations.map((limitation, i) => (
                        <div key={i} className="flex items-center gap-3 opacity-60">
                          <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{limitation}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl hover:shadow-blue-500/25' 
                          : ''
                      } transition-all duration-300 transform hover:scale-105`}
                      variant={plan.ctaVariant}
                      size="lg"
                      asChild
                    >
                      <Link href={plan.name === 'Business' ? '/contact' : '/CreateAccount'}>
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    
                    {plan.name === 'Pro' && (
                      <p className="text-xs text-center text-muted-foreground">
                        14-day free trial • No credit card required
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
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
              Compare All Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See exactly what's included in each plan
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Features</th>
                      <th className="text-center p-4 font-semibold">Starter</th>
                      <th className="text-center p-4 font-semibold bg-blue-50 dark:bg-blue-950/20">
                        Pro
                        <Badge className="ml-2 bg-blue-600 text-white text-xs">Popular</Badge>
                      </th>
                      <th className="text-center p-4 font-semibold">Business</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Bill Connections", starter: "5", pro: "Unlimited", business: "Unlimited" },
                      { feature: "Payment Methods", starter: "Basic", pro: "All", business: "All + Custom" },
                      { feature: "Analytics", starter: "❌", pro: "✅", business: "✅ Advanced" },
                      { feature: "Family Sharing", starter: "❌", pro: "4 members", business: "Unlimited" },
                      { feature: "API Access", starter: "❌", pro: "❌", business: "✅" },
                      { feature: "Support", starter: "Email", pro: "Priority", business: "Dedicated Manager" }
                    ].map((row, index) => (
                      <tr key={index} className="border-t">
                        <td className="p-4 font-medium">{row.feature}</td>
                        <td className="p-4 text-center text-muted-foreground">{row.starter}</td>
                        <td className="p-4 text-center bg-blue-50/50 dark:bg-blue-950/10">{row.pro}</td>
                        <td className="p-4 text-center text-muted-foreground">{row.business}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
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
              Everything you need to know about our pricing
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Can I change plans anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
              },
              {
                question: "Is there a free trial?",
                answer: "Yes! Pro plan comes with a 14-day free trial. No credit card required to start. Starter plan is always free with basic features."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, debit cards, UPI, and net banking. All payments are processed securely through our PCI DSS compliant system."
              },
              {
                question: "Can I cancel anytime?",
                answer: "Absolutely. You can cancel your subscription at any time from your account settings. There are no cancellation fees or penalties."
              },
              {
                question: "Do you offer refunds?",
                answer: "Yes, we offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll refund your payment in full."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-semibold mb-3 text-lg">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </Card>
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
            <div className="space-y-4">
              <Sparkles className="w-16 h-16 mx-auto opacity-80" />
              <h2 className="text-3xl lg:text-5xl font-bold">
                Ready to get started?
              </h2>
              <p className="text-lg lg:text-xl opacity-90 leading-relaxed">
                Join thousands of users who have simplified their bill management with Universal Bill.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="group bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" asChild>
                <Link href="/CreateAccount">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="group border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300" asChild>
                <Link href="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                14-day free trial
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                No setup fees
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Cancel anytime
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}