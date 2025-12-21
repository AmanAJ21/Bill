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

export function CreateAccountForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <Card className={cn("w-full max-w-md", className)}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Create your account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-6" {...props}>
          <FieldGroup>
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="firstName">First name</FieldLabel>
                <Input id="firstName" type="text" placeholder="John" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="lastName">Last name</FieldLabel>
                <Input id="lastName" type="text" placeholder="Doe" required />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" type="password" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
              <Input id="confirmPassword" type="password" required />
            </Field>
            <Field>
              <Button type="submit" className="w-full">Create Account</Button>
            </Field>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <a
                href="/Login"
                className="underline-offset-4 hover:underline"
              >
                Sign in
              </a>
            </div>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}