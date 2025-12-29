"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/providers/auth-provider"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Eye, EyeOff, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

interface LoginFormProps extends React.ComponentProps<"form"> {
  className?: string
}

export function LoginForm({ className, ...props }: LoginFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [validationErrors, setValidationErrors] = useState<{email?: string, password?: string}>({})
  
  const { login } = useAuth()
  const router = useRouter()

  const validateForm = () => {
    const errors: {email?: string, password?: string} = {}
    
    if (!email) {
      errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address"
    }
    
    if (!password) {
      errors.password = "Password is required"
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters"
    }
    
    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const success = await login(email, password)
      if (success) {
        router.push("/Dashboard")
      } else {
        setError("Invalid email or password. Please check your credentials and try again.")
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: 'email' | 'password', value: string) => {
    if (field === 'email') {
      setEmail(value)
      if (validationErrors.email) {
        setValidationErrors(prev => ({ ...prev, email: undefined }))
      }
    } else {
      setPassword(value)
      if (validationErrors.password) {
        setValidationErrors(prev => ({ ...prev, password: undefined }))
      }
    }
    if (error) setError("")
  }

  return (
    <Card className={cn("w-full max-w-md", className)}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
        <CardDescription>
          Sign in to your account to continue managing your bills
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4" {...props}>
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              disabled={isSubmitting}
              className={validationErrors.email ? "border-red-500 focus:border-red-500" : ""}
            />
            {validationErrors.email && (
              <p className="text-sm text-red-500">{validationErrors.email}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link
                href="/ForgotPassword"
                className="text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline transition-colors"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                required
                disabled={isSubmitting}
                className={validationErrors.password ? "border-red-500 focus:border-red-500" : ""}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isSubmitting}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
            {validationErrors.password && (
              <p className="text-sm text-red-500">{validationErrors.password}</p>
            )}
          </div>
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting || !email || !password}
          >
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isSubmitting ? "Signing in..." : "Sign in"}
          </Button>
          
          <div className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              href="/CreateAccount"
              className="text-primary underline-offset-4 hover:underline font-medium transition-colors"
            >
              Create account
            </Link>
          </div>
          
          {/* Demo Credentials */}
          <div className="mt-4 p-3 bg-muted/50 rounded-lg">
            <p className="text-xs text-muted-foreground text-center mb-2">Demo Credentials:</p>
            <div className="text-xs text-center space-y-1">
              <p><strong>Email:</strong> demo@universalbill.com</p>
              <p><strong>Password:</strong> demo123</p>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
