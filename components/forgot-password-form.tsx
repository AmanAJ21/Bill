import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <Card className={cn("w-full max-w-md", className)}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Forgot your password?</CardTitle>
        <CardDescription>
          Enter your email address and we'll send you a link to reset your password
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-6" {...props}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </Field>
            <Field>
              <Button type="submit" className="w-full">Send Reset Link</Button>
            </Field>
            <div className="text-center text-sm">
              Remember your password?{" "}
              <a
                href="/Login"
                className="underline-offset-4 hover:underline"
              >
                Back to login
              </a>
            </div>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}