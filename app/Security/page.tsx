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
  Shield, 
  Lock, 
  Eye, 
  Server, 
  CheckCircle, 
  AlertTriangle,
  Key,
  Fingerprint,
  Globe,
  Award,
  Users,
  Clock,
  ArrowRight,
  FileText,
  Zap
} from "lucide-react"

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: Lock,
      title: "256-bit SSL Encryption",
      description: "All data transmission is protected with bank-grade encryption",
      details: "End-to-end encryption ensures your financial data is never exposed during transmission",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      icon: Fingerprint,
      title: "Biometric Authentication",
      description: "Secure login with fingerprint and face recognition",
      details: "Multi-factor authentication including SMS, email, and biometric verification",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20"
    },
    {
      icon: Server,
      title: "Secure Cloud Infrastructure",
      description: "Data stored in ISO 27001 certified data centers",
      details: "Redundant backups across multiple geographic locations with 99.9% uptime",
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20"
    },
    {
      icon: Eye,
      title: "Real-time Fraud Monitoring",
      description: "AI-powered fraud detection and prevention",
      details: "Machine learning algorithms monitor transactions for suspicious patterns 24/7",
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/20"
    },
    {
      icon: Key,
      title: "Tokenized Payments",
      description: "Card details are never stored or transmitted",
      details: "Payment tokenization ensures your sensitive card information is never exposed",
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-950/20"
    },
    {
      icon: Globe,
      title: "Regulatory Compliance",
      description: "Fully compliant with RBI and PCI DSS standards",
      details: "Regular audits and compliance checks ensure adherence to all financial regulations",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/20"
    }
  ]

  const certifications = [
    {
      name: "ISO 27001",
      description: "Information Security Management",
      icon: Award,
      color: "text-blue-600"
    },
    {
      name: "PCI DSS Level 1",
      description: "Payment Card Industry Compliance",
      icon: Shield,
      color: "text-green-600"
    },
    {
      name: "RBI Approved",
      description: "Reserve Bank of India Authorization",
      icon: CheckCircle,
      color: "text-purple-600"
    },
    {
      name: "SOC 2 Type II",
      description: "Service Organization Control",
      icon: FileText,
      color: "text-orange-600"
    }
  ]

  const securityStats = [
    { number: "99.9%", label: "Uptime Guarantee", icon: Clock },
    { number: "256-bit", label: "Encryption Standard", icon: Lock },
    { number: "24/7", label: "Security Monitoring", icon: Eye },
    { number: "0", label: "Data Breaches", icon: Shield }
  ]

  const privacyPrinciples = [
    {
      title: "Data Minimization",
      description: "We only collect data that's necessary for providing our services"
    },
    {
      title: "Purpose Limitation",
      description: "Your data is used only for the specific purposes you've consented to"
    },
    {
      title: "Transparency",
      description: "Clear information about what data we collect and how we use it"
    },
    {
      title: "User Control",
      description: "You have full control over your data with options to view, edit, or delete"
    },
    {
      title: "Data Retention",
      description: "We retain data only as long as necessary and delete it securely afterward"
    },
    {
      title: "Third-party Sharing",
      description: "We never sell your data and share only with trusted partners when necessary"
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
                <Shield className="w-4 h-4 mr-2" />
                Bank-Grade Security
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-foreground to-blue-600 bg-clip-text text-transparent">
                Your security is our
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                top priority
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              We employ multiple layers of security to protect your financial data and ensure 
              safe transactions. Your trust is earned through transparency and proven security measures.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105" asChild>
                <Link href="/CreateAccount">
                  Start Secure Journey
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="group border-2 hover:bg-muted/50 transition-all duration-300">
                <FileText className="mr-2 h-4 w-4" />
                Security Whitepaper
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Security Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {securityStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <Card className="p-8 border-0 bg-gradient-to-br from-muted/30 to-muted/10 hover:from-muted/50 hover:to-muted/20 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
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
              Multi-Layered Security Architecture
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every aspect of our platform is designed with security in mind
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-0 bg-gradient-to-br from-background to-muted/20 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
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
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.details}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
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
              Industry Certifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Independently verified security and compliance standards
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <Card className="p-8 border-0 bg-gradient-to-br from-muted/30 to-muted/10 hover:from-muted/50 hover:to-muted/20 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <cert.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg group-hover:text-blue-600 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
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
              Privacy by Design
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to protecting your personal information
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {privacyPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="h-full border-0 bg-gradient-to-br from-background to-muted/20 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <h3 className="font-semibold">{principle.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Alert */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Stay Vigilant</h2>
            </div>
            
            <p className="text-lg mb-8 opacity-90">
              Universal Bill will never ask for your passwords, PINs, or OTPs via phone, email, or SMS. 
              Always verify communications through our official channels.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Phishing Protection</h3>
                <p className="opacity-80">Always check the URL and look for the secure lock icon</p>
              </div>
              <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Secure Communication</h3>
                <p className="opacity-80">We only communicate through verified channels</p>
              </div>
              <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Report Suspicious Activity</h3>
                <p className="opacity-80">Contact us immediately if you notice anything unusual</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
                <Link href="/contact">
                  Report Security Issue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}