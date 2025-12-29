"use client"

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
  Users, 
  Target, 
  Heart, 
  Award, 
  ArrowRight, 
  Shield, 
  Zap, 
  Globe,
  TrendingUp,
  CheckCircle,
  Star,
  Building
} from "lucide-react"

export default function AboutPage() {
  const stats = [
    { number: "10,000+", label: "Happy Users", icon: Users },
    { number: "500+", label: "Service Providers", icon: Building },
    { number: "₹50Cr+", label: "Bills Processed", icon: TrendingUp },
    { number: "99.9%", label: "Uptime", icon: Shield }
  ]

  const team = [
    {
      name: "Rajesh Kumar",
      role: "CEO & Co-Founder",
      bio: "Former VP at Paytm with 15+ years in fintech. Passionate about simplifying financial services for Indians.",
      image: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      name: "Priya Sharma",
      role: "CTO & Co-Founder", 
      bio: "Ex-Google engineer with expertise in scalable systems. Led engineering teams at multiple unicorn startups.",
      image: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      name: "Amit Patel",
      role: "Head of Product",
      bio: "Product leader with 12+ years at Flipkart and Amazon. Expert in building user-centric financial products.",
      image: "bg-gradient-to-br from-green-500 to-emerald-500"
    },
    {
      name: "Sneha Reddy",
      role: "Head of Design",
      bio: "Award-winning designer from Bangalore. Specializes in creating intuitive interfaces for complex financial workflows.",
      image: "bg-gradient-to-br from-orange-500 to-red-500"
    }
  ]

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize the security and privacy of our users' financial data above everything else.",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      icon: Heart,
      title: "Customer Obsession",
      description: "Every decision we make is driven by what's best for our customers and their financial well-being.",
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-950/20"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in financial technology and user experience.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/20"
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "We believe financial services should be accessible to everyone, regardless of their technical expertise.",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20"
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
                <Heart className="w-4 h-4 mr-2" />
                Our Story
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-foreground to-blue-600 bg-clip-text text-transparent">
                Simplifying financial lives
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                across India
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Founded in 2023, Universal Bill was born from a simple frustration: managing multiple bills 
              across different platforms was unnecessarily complex. We set out to build the solution we wished existed.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105" asChild>
                <Link href="/CreateAccount">
                  Join Our Mission
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="group border-2 hover:bg-muted/50 transition-all duration-300">
                <Users className="mr-2 h-4 w-4" />
                Meet the Team
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
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

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-muted/10 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Target className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl lg:text-4xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To democratize financial management by making bill payments as simple as sending a text message. 
                  We believe everyone deserves access to intuitive, secure, and efficient financial tools.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  "Eliminate the complexity of managing multiple bills",
                  "Provide transparent, affordable financial services",
                  "Empower users with insights into their spending patterns",
                  "Build trust through security and reliability"
                ].map((point, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </motion.div>
                ))}
              </div>
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
                  <div className="flex items-center gap-3">
                    <Star className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">Our Vision</h3>
                  </div>
                  <p className="text-lg leading-relaxed opacity-90">
                    To become India's most trusted financial companion, where every citizen can manage 
                    their recurring expenses effortlessly and make informed financial decisions.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="text-2xl font-bold">2030</div>
                      <div className="text-sm opacity-80">Vision Year</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="text-2xl font-bold">100M+</div>
                      <div className="text-sm opacity-80">Target Users</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full p-8 border-0 bg-gradient-to-br from-background to-muted/20 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
                  <CardContent className="space-y-6">
                    <div className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className={`w-8 h-8 ${value.color}`} />
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-blue-600 transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals building the future of bill payments
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="text-center p-6 border-0 bg-gradient-to-br from-background to-muted/20 hover:shadow-xl transition-all duration-500">
                  <CardContent className="space-y-4">
                    <div className={`w-24 h-24 mx-auto ${member.image} rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300`}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-blue-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm text-blue-600 font-medium">{member.role}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
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
              Recognition & Awards
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Honored to be recognized by industry leaders
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Best Fintech Startup 2024",
                organization: "TechCrunch India",
                description: "Recognized for innovation in bill payment solutions"
              },
              {
                title: "Top 10 Startups to Watch",
                organization: "Economic Times",
                description: "Featured in ET's annual startup showcase"
              },
              {
                title: "Customer Choice Award",
                organization: "Product Hunt",
                description: "Highest rated bill management app of 2024"
              }
            ].map((award, index) => (
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
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg group-hover:text-blue-600 transition-colors">
                      {award.title}
                    </h3>
                    <p className="text-blue-600 font-medium">{award.organization}</p>
                    <p className="text-sm text-muted-foreground">{award.description}</p>
                  </CardContent>
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
              <Heart className="w-16 h-16 mx-auto opacity-80" />
              <h2 className="text-3xl lg:text-5xl font-bold">
                Join our journey
              </h2>
              <p className="text-lg lg:text-xl opacity-90 leading-relaxed">
                Be part of the financial revolution. Help us build a better way to manage bills for millions of Indians.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="group bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" asChild>
                <Link href="/CreateAccount">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="group border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300" asChild>
                <Link href="/contact">
                  Work With Us
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Free to start
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                No hidden fees
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Trusted by thousands
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}