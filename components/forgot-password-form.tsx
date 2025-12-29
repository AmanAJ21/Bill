"use client"

import { useState } from "react"
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
import { Loader2, CheckCircle } from "lucide-react"
import Link from "next/link"

interface ForgotPasswordFormProps extends React.ComponentProps<"form"> {
  className?: string
}

export function ForgotPasswordForm({ className, ...props }: ForgotPasswordFormProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsSuccess(true)
    } catch (err) {
      setError("Failed to send reset email. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <Card className={cn("w-full max-w-md", className)}>
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
            <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <CardTitle className="text-2xl font-bold">Check your email</CardTitle>
          <CardDescription>
            We've sent a password reset link to {email}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground text-center">
              Didn't receive the email? Check your spam folder or try again.
            </p>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setIsSuccess(false)
                setEmail("")
              }}
            >
              Try again
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              <Link
                href="/Login"
                className="text-primary underline-offset-4 hover:underline"
              >
                Back to sign in
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={cn("w-full max-w-md", className)}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Forgot your password?</CardTitle>
        <CardDescription>
          Enter your email address and we'll send you a link to reset your password
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4" {...props}>
          {error && (
            <Alert variant="destructive">
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
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting || !email}
          >
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Send Reset Link
          </Button>
          
          <div className="text-center text-sm text-muted-foreground">
            Remember your password?{" "}
            <Link
              href="/Login"
              className="text-primary underline-offset-4 hover:underline"
            >
              Back to sign in
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}