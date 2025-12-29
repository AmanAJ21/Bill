// Form validation schemas and utilities

export interface ValidationResult {
  isValid: boolean
  errors: Record<string, string>
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePassword = (password: string): { isValid: boolean; message?: string } => {
  if (password.length < 8) {
    return { isValid: false, message: 'Password must be at least 8 characters long' }
  }
  
  if (!/(?=.*[a-z])/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one lowercase letter' }
  }
  
  if (!/(?=.*[A-Z])/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one uppercase letter' }
  }
  
  if (!/(?=.*\d)/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one number' }
  }
  
  return { isValid: true }
}

export const validateLoginForm = (email: string, password: string): ValidationResult => {
  const errors: Record<string, string> = {}
  
  if (!email) {
    errors.email = 'Email is required'
  } else if (!validateEmail(email)) {
    errors.email = 'Please enter a valid email address'
  }
  
  if (!password) {
    errors.password = 'Password is required'
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

export const validateRegisterForm = (data: {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}): ValidationResult => {
  const errors: Record<string, string> = {}
  
  if (!data.firstName.trim()) {
    errors.firstName = 'First name is required'
  }
  
  if (!data.lastName.trim()) {
    errors.lastName = 'Last name is required'
  }
  
  if (!data.email) {
    errors.email = 'Email is required'
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address'
  }
  
  const passwordValidation = validatePassword(data.password)
  if (!passwordValidation.isValid) {
    errors.password = passwordValidation.message!
  }
  
  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match'
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

export const validateForgotPasswordForm = (email: string): ValidationResult => {
  const errors: Record<string, string> = {}
  
  if (!email) {
    errors.email = 'Email is required'
  } else if (!validateEmail(email)) {
    errors.email = 'Please enter a valid email address'
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}