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
import { Loader2, Eye, EyeOff, CheckCircle, AlertCircle, Check, X } from "lucide-react"
import Link from "next/link"

interface RegisterFormProps extends React.ComponentProps<"form"> {
  className?: string
}

export function RegisterForm({ className, ...props }: RegisterFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false
  })
  
  const { register } = useAuth()
  const router = useRouter()

  const validatePassword = (password: string) => {
    const strength = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password)
    }
    setPasswordStrength(strength)
    return Object.values(strength).every(Boolean)
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}
    
    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required"
    }
    
    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required"
    }
    
    if (!formData.email) {
      errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address"
    }
    
    if (!formData.password) {
      errors.password = "Password is required"
    } else if (!validatePassword(formData.password)) {
      errors.password = "Password does not meet requirements"
    }
    
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match"
    }
    
    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear validation error for this field
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
    
    // Validate password strength in real-time
    if (name === 'password') {
      validatePassword(value)
    }
    
    // Clear general error
    if (error) setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const success = await register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password
      })
      
      if (success) {
        router.push("/Dashboard")
      } else {
        setError("Registration failed. This email might already be registered.")
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = Object.values(formData).every(value => value.trim() !== "") && 
                     Object.keys(validationErrors).length === 0

  return (
    <Card className={cn("w-full max-w-md", className)}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Create your account</CardTitle>
        <CardDescription>
          Join thousands of users managing their bills smarter
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
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First name</Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className={validationErrors.firstName ? "border-red-500" : ""}
              />
              {validationErrors.firstName && (
                <p className="text-sm text-red-500">{validationErrors.firstName}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className={validationErrors.lastName ? "border-red-500" : ""}
              />
              {validationErrors.lastName && (
                <p className="text-sm text-red-500">{validationErrors.lastName}</p>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className={validationErrors.email ? "border-red-500" : ""}
            />
            {validationErrors.email && (
              <p className="text-sm text-red-500">{validationErrors.email}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className={validationErrors.password ? "border-red-500" : ""}
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
            
            {/* Password Strength Indicator */}
            {formData.password && (
              <div className="space-y-2 p-3 bg-muted/50 rounded-lg">
                <p className="text-xs font-medium text-muted-foreground">Password requirements:</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className={`flex items-center gap-1 ${passwordStrength.length ? 'text-green-600' : 'text-muted-foreground'}`}>
                    {passwordStrength.length ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                    8+ characters
                  </div>
                  <div className={`flex items-center gap-1 ${passwordStrength.uppercase ? 'text-green-600' : 'text-muted-foreground'}`}>
                    {passwordStrength.uppercase ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                    Uppercase letter
                  </div>
                  <div className={`flex items-center gap-1 ${passwordStrength.lowercase ? 'text-green-600' : 'text-muted-foreground'}`}>
                    {passwordStrength.lowercase ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                    Lowercase letter
                  </div>
                  <div className={`flex items-center gap-1 ${passwordStrength.number ? 'text-green-600' : 'text-muted-foreground'}`}>
                    {passwordStrength.number ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                    Number
                  </div>
                </div>
              </div>
            )}
            
            {validationErrors.password && (
              <p className="text-sm text-red-500">{validationErrors.password}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className={validationErrors.confirmPassword ? "border-red-500" : ""}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                disabled={isSubmitting}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
            {validationErrors.confirmPassword && (
              <p className="text-sm text-red-500">{validationErrors.confirmPassword}</p>
            )}
          </div>
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting || !isFormValid}
          >
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </Button>
          
          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/Login"
              className="text-primary underline-offset-4 hover:underline font-medium transition-colors"
            >
              Sign in
            </Link>
          </div>
          
          <div className="text-xs text-center text-muted-foreground">
            By creating an account, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-foreground">Terms of Service</Link>
            {" "}and{" "}
            <Link href="/privacy" className="underline hover:text-foreground">Privacy Policy</Link>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}