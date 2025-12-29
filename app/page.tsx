"use client"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FloatingLines from "@/components/floating-lines-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Zap, Shield, Smartphone } from "lucide-react"

export default function Page() {
    return (
        <>
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-blue-50/30 dark:to-blue-950/20 py-20 lg:py-32">
                {/* Enhanced Background Animation */}
                <div className="absolute inset-0 opacity-50 dark:opacity-30">
                    <FloatingLines
                        linesGradient={['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981']}
                        enabledWaves={['top', 'middle', 'bottom']}
                        lineCount={[3, 5, 7]}
                        lineDistance={[12, 8, 6]}
                        animationSpeed={0.6}
                        interactive={true}
                        parallax={true}
                        mixBlendMode="multiply"
                    />
                </div>
                
                {/* Gradient Orbs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div 
                            className="space-y-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                                >
                                    <Badge variant="secondary" className="w-fit bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 border-0 px-6 py-3 text-sm font-medium shadow-lg backdrop-blur-sm">
                                        <Zap className="w-4 h-4 mr-2" />
                                        Universal Bill Platform
                                    </Badge>
                                </motion.div>
                                
                                <motion.h1 
                                    className="text-4xl lg:text-7xl font-bold leading-tight"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                                >
                                    <span className="bg-gradient-to-br from-foreground via-foreground to-blue-600 bg-clip-text text-transparent">
                                        All your bills.
                                    </span>
                                    <br />
                                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                                        One payment.
                                    </span>
                                    <br />
                                    <span className="text-2xl lg:text-4xl font-medium text-muted-foreground">
                                        Zero stress.
                                    </span>
                                </motion.h1>
                                
                                <motion.p 
                                    className="text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                                >
                                    The smartest way to manage your recurring expenses in India. 
                                    Pay all your bills through one simple, secure platform with AI-powered insights.
                                </motion.p>
                            </div>
                            
                            <motion.div 
                                className="flex flex-col sm:flex-row gap-4"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                            >
                                <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105" asChild>
                                    <Link href="/CreateAccount">
                                        Get Early Access
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" className="group border-2 hover:bg-muted/50 transition-all duration-300 backdrop-blur-sm bg-background/80">
                                    <Smartphone className="mr-2 h-4 w-4" />
                                    See How It Works
                                </Button>
                            </motion.div>
                            
                            <motion.div 
                                className="flex items-center gap-6 text-sm text-muted-foreground"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                <div className="flex -space-x-3">
                                    {[
                                        'bg-gradient-to-br from-blue-500 to-blue-600',
                                        'bg-gradient-to-br from-green-500 to-green-600', 
                                        'bg-gradient-to-br from-purple-500 to-purple-600',
                                        'bg-gradient-to-br from-orange-500 to-orange-600'
                                    ].map((gradient, i) => (
                                        <motion.div 
                                            key={i} 
                                            className={`w-10 h-10 rounded-full ${gradient} border-3 border-background shadow-lg`}
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ delay: 0.7 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                                        />
                                    ))}
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold text-foreground">10,000+ users</span>
                                    <span>across India trust us</span>
                                </div>
                            </motion.div>
                        </motion.div>
                        
                        {/* Right Content - Enhanced Phone Mockup */}
                        <motion.div 
                            className="relative"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                        >
                            <div className="relative mx-auto w-80 h-[500px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[3rem] p-3 shadow-2xl shadow-blue-500/20 transform hover:scale-105 transition-transform duration-500">
                                {/* Phone Screen */}
                                <div className="w-full h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-[2.5rem] p-6 flex flex-col relative overflow-hidden backdrop-blur-sm">
                                    {/* Status Bar */}
                                    <div className="flex items-center justify-between mb-6 text-xs text-gray-500">
                                        <span>9:41</span>
                                        <div className="flex items-center gap-1">
                                            <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                                            <span>100%</span>
                                        </div>
                                    </div>
                                    
                                    {/* Balance Card */}
                                    <motion.div 
                                        className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-4 text-white mb-6 shadow-lg relative overflow-hidden"
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.8, duration: 0.6 }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl"></div>
                                        <div className="flex items-center justify-between mb-2 relative z-10">
                                            <span className="text-sm opacity-90">Total Balance</span>
                                            <Shield className="w-4 h-4 opacity-90" />
                                        </div>
                                        <div className="text-3xl font-bold relative z-10">₹12,450</div>
                                        <div className="text-sm opacity-90 mt-1 relative z-10">Available to pay bills</div>
                                    </motion.div>
                                    
                                    {/* Quick Actions */}
                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                        <motion.div 
                                            className="bg-green-50 dark:bg-green-900/20 rounded-xl p-3 text-center hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors cursor-pointer"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 1, duration: 0.5 }}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center shadow-lg">
                                                <Zap className="w-4 h-4 text-white" />
                                            </div>
                                            <div className="text-xs font-medium text-green-700 dark:text-green-300">Pay All</div>
                                        </motion.div>
                                        <motion.div 
                                            className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-3 text-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors cursor-pointer"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 1.1, duration: 0.5 }}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center shadow-lg">
                                                <CheckCircle className="w-4 h-4 text-white" />
                                            </div>
                                            <div className="text-xs font-medium text-blue-700 dark:text-blue-300">Schedule</div>
                                        </motion.div>
                                    </div>
                                    
                                    {/* Recent Bills */}
                                    <div className="space-y-3 flex-1">
                                        {[
                                            { name: 'Electricity', amount: '₹2,450', color: 'bg-yellow-500' },
                                            { name: 'Internet', amount: '₹1,299', color: 'bg-blue-500' },
                                            { name: 'Mobile', amount: '₹599', color: 'bg-green-500' }
                                        ].map((bill, i) => (
                                            <motion.div 
                                                key={i} 
                                                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800/70 transition-colors cursor-pointer"
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                                                whileHover={{ x: 5 }}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-3 h-3 ${bill.color} rounded-full shadow-sm`}></div>
                                                    <span className="text-sm font-medium">{bill.name}</span>
                                                </div>
                                                <span className="text-sm font-semibold">{bill.amount}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Phone Notch */}
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl"></div>
                            </div>
                            
                            {/* Enhanced Floating Elements */}
                            <motion.div 
                                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
                                animate={{ 
                                    scale: [1, 1.3, 1],
                                    opacity: [0.4, 0.8, 0.4],
                                    rotate: [0, 180, 360]
                                }}
                                transition={{ 
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <motion.div 
                                className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-xl"
                                animate={{ 
                                    scale: [1.2, 0.8, 1.2],
                                    opacity: [0.3, 0.7, 0.3],
                                    rotate: [360, 180, 0]
                                }}
                                transition={{ 
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                            />
                            <motion.div 
                                className="absolute top-1/2 -left-12 w-16 h-16 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-lg"
                                animate={{ 
                                    y: [-10, 10, -10],
                                    opacity: [0.2, 0.5, 0.2]
                                }}
                                transition={{ 
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 2
                                }}
                            />
                        </motion.div>
                    </div>
                </div>
                
                {/* Trusted By Section */}
                <motion.div 
                    className="container mx-auto px-4 mt-20 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <div className="text-center mb-8">
                        <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                            Trusted by leading companies
                        </p>
                    </div>
                    <div className="flex justify-center items-center gap-8 lg:gap-12 opacity-60 flex-wrap">
                        {['Airtel', 'Jio Fiber', 'Tata Power', 'BESCOM', 'Mahanagar Gas'].map((company, i) => (
                            <motion.div 
                                key={company}
                                className="text-lg font-semibold hover:opacity-100 transition-opacity cursor-pointer"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 0.6, y: 0 }}
                                transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                                whileHover={{ opacity: 1, scale: 1.05 }}
                            >
                                {company}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/10 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
                </div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Badge variant="outline" className="mb-6 px-6 py-3 text-sm font-medium bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border-blue-200 dark:border-blue-800">
                                How it works
                            </Badge>
                        </motion.div>
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-blue-600 bg-clip-text text-transparent">
                            Unify your bills in 3 simple steps
                        </h2>
                        <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Connect all your service providers and manage everything from one intelligent dashboard
                        </p>
                    </motion.div>
                    
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                        {[
                            {
                                step: "1",
                                title: "Link Accounts",
                                description: "Securely connect your utility accounts, telecom services, and subscription providers in minutes with bank-grade encryption.",
                                icon: "users",
                                color: "blue",
                                gradient: "from-blue-500 to-cyan-500"
                            },
                            {
                                step: "2", 
                                title: "Auto Categorize",
                                description: "Our AI automatically categorizes and organizes all your bills by type, due date, and priority with smart insights.",
                                icon: "clipboard",
                                color: "green",
                                gradient: "from-green-500 to-emerald-500"
                            },
                            {
                                step: "3",
                                title: "One-Click Pay",
                                description: "Pay all your bills with a single click. Set up autopay or get smart reminders before due dates.",
                                icon: "lock",
                                color: "purple", 
                                gradient: "from-purple-500 to-violet-500"
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group relative"
                            >
                                <Card className="text-center p-8 h-full border-0 bg-gradient-to-br from-background to-muted/20 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 relative overflow-hidden backdrop-blur-sm">
                                    {/* Background Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                                    
                                    {/* Animated Border */}
                                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                                    
                                    <CardContent className="space-y-6 relative z-10">
                                        {/* Step Number */}
                                        <div className="relative">
                                            <motion.div 
                                                className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                                                whileHover={{ rotate: 360, scale: 1.1 }}
                                                transition={{ duration: 0.6 }}
                                            >
                                                <span className="text-2xl font-bold text-white">{feature.step}</span>
                                            </motion.div>
                                            {/* Connecting Line */}
                                            {index < 2 && (
                                                <motion.div 
                                                    className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-muted via-blue-200 to-transparent"
                                                    initial={{ scaleX: 0 }}
                                                    whileInView={{ scaleX: 1 }}
                                                    transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                                                    viewport={{ once: true }}
                                                />
                                            )}
                                        </div>
                                        
                                        <div className="space-y-4">
                                            <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-blue-600 transition-colors">
                                                {feature.title}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                        
                                        {/* Feature Icon */}
                                        <motion.div 
                                            className="pt-4"
                                            whileHover={{ scale: 1.2, rotate: 5 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {feature.icon === "users" && (
                                                <svg className="w-8 h-8 mx-auto text-muted-foreground group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                                </svg>
                                            )}
                                            {feature.icon === "clipboard" && (
                                                <svg className="w-8 h-8 mx-auto text-muted-foreground group-hover:text-green-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                                </svg>
                                            )}
                                            {feature.icon === "lock" && (
                                                <svg className="w-8 h-8 mx-auto text-muted-foreground group-hover:text-purple-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                            )}
                                        </motion.div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                    
                    {/* Additional Features Grid */}
                    <motion.div 
                        className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        {[
                            { icon: Shield, title: "Bank-Grade Security", desc: "256-bit encryption", color: "text-blue-600" },
                            { icon: Zap, title: "Instant Payments", desc: "Real-time processing", color: "text-yellow-600" },
                            { icon: CheckCircle, title: "Smart Reminders", desc: "Never miss a due date", color: "text-green-600" },
                            { icon: Smartphone, title: "Mobile First", desc: "Optimized for mobile", color: "text-purple-600" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="text-center p-6 rounded-2xl bg-gradient-to-br from-muted/30 to-muted/10 hover:from-muted/50 hover:to-muted/20 transition-all duration-300 group cursor-pointer border border-transparent hover:border-blue-200/50 dark:hover:border-blue-800/50"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <item.icon className={`w-8 h-8 mx-auto mb-3 ${item.color} group-hover:scale-110 transition-all duration-300`} />
                                </motion.div>
                                <h4 className="font-semibold mb-1 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Dashboard Preview Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl lg:text-4xl font-bold">
                                Total clarity on your monthly spend.
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span>One-click bill payments across all your service providers</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span>No more Apps. No more websites. No more passwords.</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span>Smart scheduling and automated payments with full control</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="relative">
                            <Card className="bg-white text-black p-6">
                                <CardContent className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">Monthly Total</span>
                                        <span className="text-2xl font-bold">₹9,344.00</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center py-2 border-b">
                                            <span>Electricity</span>
                                            <span className="font-medium">₹2,450</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b">
                                            <span>Internet</span>
                                            <span className="font-medium">₹1,299</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b">
                                            <span>Mobile</span>
                                            <span className="font-medium">₹599</span>
                                        </div>
                                    </div>
                                    <Button className="w-full bg-black text-white">
                                        PAY ALL BILLS
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                            Frequently Asked Questions
                        </h2>
                        
                        <div className="space-y-4">
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-semibold mb-2">Is my payment information secure?</h3>
                                    <p className="text-muted-foreground">
                                        Yes, we use bank-level encryption and are PCI DSS compliant. Your payment information is never stored on our servers.
                                    </p>
                                </CardContent>
                            </Card>
                            
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-semibold mb-2">Which bill providers do you support?</h3>
                                    <p className="text-muted-foreground">
                                        We support over 500+ billers across electricity, gas, water, telecom, DTH, insurance, and subscription services in India.
                                    </p>
                                </CardContent>
                            </Card>
                            
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-semibold mb-2">How do I cancel my subscription?</h3>
                                    <p className="text-muted-foreground">
                                        You can cancel anytime from your account settings. There are no cancellation fees or hidden charges.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-2xl mx-auto space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-bold">
                            Ready to simplify your life?
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Join thousands of Indians who have simplified their bill payments with Universal Bill.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                            <Input 
                                placeholder="Enter your email address" 
                                className="flex-1"
                            />
                            <Button size="lg">
                                Get Started
                            </Button>
                        </div>
                        
                        <p className="text-sm text-muted-foreground">
                            No spam, unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </section>
            
            <Footer />
        </>
    )
}