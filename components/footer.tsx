import Link from "next/link"

export default function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    {/* Logo and Description */}
                    <div className="flex-1 max-w-sm">
                        <div className="flex items-center space-x-2 mb-3">
                            <div className="w-5 h-5 bg-foreground rounded-sm flex items-center justify-center">
                                <span className="text-background text-xs font-bold">UB</span>
                            </div>
                            <span className="font-medium text-foreground">The Universal Bill</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            One invoice for everything. The smartest way to manage your recurring expenses in India.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                        {/* Product */}
                        <div>
                            <h3 className="font-medium text-foreground mb-3 text-sm">
                                PRODUCT
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link 
                                        href="/Features" 
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="/Pricing" 
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="/Security" 
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        Security
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="font-medium text-foreground mb-3 text-sm">
                                COMPANY
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link 
                                        href="/About" 
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="/Blog" 
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="/Contact" 
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h3 className="font-medium text-foreground mb-3 text-sm">
                                LEGAL
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link 
                                        href="/Privacy" 
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        Privacy
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="/Terms" 
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        Terms
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center space-x-3">
                        <Link 
                            href="https://twitter.com" 
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Twitter"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </Link>
                        <Link 
                            href="https://linkedin.com" 
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="LinkedIn"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-6 border-t border-border/40">
                    <p className="text-xs text-muted-foreground text-center md:text-left">
                        © 2023 Universal Bill Pvt Ltd. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}