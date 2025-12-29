"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: "admin" | "user"
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (data: RegisterData) => Promise<boolean>
  logout: () => void
  isLoading: boolean
  isAuthenticated: boolean
}

interface RegisterData {
  firstName: string
  lastName: string
  email: string
  password: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check for existing session on mount
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("auth-token")
        if (token) {
          // In a real app, validate token with backend
          const userData = localStorage.getItem("user-data")
          if (userData) {
            setUser(JSON.parse(userData))
          }
        }
      } catch (error) {
        console.error("Auth check failed:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock successful login
      if (email && password) {
        const mockUser: User = {
          id: "1",
          email,
          firstName: "John",
          lastName: "Doe",
          role: "admin"
        }
        
        setUser(mockUser)
        localStorage.setItem("auth-token", "mock-token")
        localStorage.setItem("user-data", JSON.stringify(mockUser))
        return true
      }
      return false
    } catch (error) {
      console.error("Login failed:", error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (data: RegisterData): Promise<boolean> => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const mockUser: User = {
        id: "1",
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        role: "user"
      }
      
      setUser(mockUser)
      localStorage.setItem("auth-token", "mock-token")
      localStorage.setItem("user-data", JSON.stringify(mockUser))
      return true
    } catch (error) {
      console.error("Registration failed:", error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("auth-token")
    localStorage.removeItem("user-data")
    router.push("/")
  }

  const value = {
    user,
    login,
    register,
    logout,
    isLoading,
    isAuthenticated: !!user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}