import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { AuthProvider } from "@/components/providers/auth-provider"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-sans',
  display: 'swap'
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    default: "Universal Bill - One Payment for Everything",
    template: "%s | Universal Bill"
  },
  description: "The smart way to manage your electricity, FASTag, broadband, and credit card bills in India. RBI compliant and ISO 27001 certified.",
  keywords: ["bill payment", "UPI", "electricity", "broadband", "credit card", "India"],
  authors: [{ name: "Universal Bill Team" }],
  creator: "Universal Bill",
  metadataBase: new URL("https://universalbill.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://universalbill.com",
    title: "Universal Bill - One Payment for Everything",
    description: "The smart way to manage all your bills in India",
    siteName: "Universal Bill"
  },
  twitter: {
    card: "summary_large_image",
    title: "Universal Bill - One Payment for Everything",
    description: "The smart way to manage all your bills in India",
    creator: "@universalbill"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            {children}
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
