"use client"

import Link from "next/link"
import { useState } from "react"
import ThemeToggle from "@/components/theme-toggle-button"
import { Button } from "@/components/ui/button"

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }
    return (
        <>
            <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4">
                    {/* Logo and Brand - Left */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-foreground rounded-sm flex items-center justify-center">
                                <span className="text-background text-xs font-bold">UB</span>
                            </div>
                            <span className="font-bold">Universal Bill</span>
                        </Link>
                    </div>

                    {/* Navigation Links - Center (Desktop only) */}
                    <div className="hidden md:flex items-center justify-center flex-1">
                        <nav className="flex items-center space-x-8 text-sm font-medium">
                            <Link
                                href="/Features"
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                            >
                                Features
                            </Link>
                            <Link
                                href="/Pricing"
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                            >
                                Pricing
                            </Link>
                            <Link
                                href="/About"
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                            >
                                About
                            </Link>
                        </nav>
                    </div>

                    {/* Right side actions */}
                    <div className="flex items-center space-x-2">
                        <ThemeToggle />
                        <div className="hidden md:flex items-center space-x-2">
                            <Button variant="ghost" size="sm" asChild>
                                <Link href="/Login">Login</Link>
                            </Button>
                            <Button size="sm" asChild>
                                <Link href="/CreateAccount">Get Started</Link>
                            </Button>
                        </div>
                        
                        {/* Mobile menu button */}
                        <Button
                            variant="ghost"
                            className="px-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? (
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                >
                                    <path
                                        d="M3 5H11"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M3 12H16"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M3 19H21"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            )}
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 z-40 bg-black/50 md:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    
                    {/* Mobile Menu */}
                    <div className="fixed top-14 left-0 right-0 z-50 md:hidden border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg">
                        <div className="container mx-auto px-4 py-6 space-y-6">
                            {/* Mobile Navigation Links */}
                            <nav className="flex flex-col space-y-4">
                                <Link
                                    href="/Features"
                                    className="text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60 py-3 border-b border-border/20"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Features
                                </Link>
                                <Link
                                    href="/Pricing"
                                    className="text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60 py-3 border-b border-border/20"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Pricing
                                </Link>
                                <Link
                                    href="/About"
                                    className="text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60 py-3 border-b border-border/20"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    About
                                </Link>
                            </nav>
                            
                            {/* Mobile Action Buttons */}
                            <div className="flex flex-col space-y-3 pt-4">
                                <Button variant="outline" size="lg" asChild className="justify-center">
                                    <Link href="/Login" onClick={() => setIsMobileMenuOpen(false)}>
                                        Login
                                    </Link>
                                </Button>
                                <Button size="lg" asChild className="justify-center">
                                    <Link href="/CreateAccount" onClick={() => setIsMobileMenuOpen(false)}>
                                        Get Started
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}