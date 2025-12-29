// API client configuration and utilities

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'

interface ApiError {
  message: string
  status: number
  errors?: Record<string, string[]>
}

class ApiClient {
  private baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`
    
    const config: RequestInit = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    }

    // Add auth token if available
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('auth-token')
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        }
      }
    }

    try {
      const response = await fetch(url, config)
      
      if (!response.ok) {
        const error: ApiError = await response.json()
        throw new Error(error.message || 'An error occurred')
      }

      return await response.json()
    } catch (error) {
      if (error instanceof Error) {
        throw error
      }
      throw new Error('Network error occurred')
    }
  }

  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' })
  }

  async post<T>(endpoint: string, data?: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async put<T>(endpoint: string, data?: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE' })
  }
}

export const api = new ApiClient(API_BASE_URL)

// API endpoints
export const endpoints = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
    me: '/auth/me',
  },
  users: {
    list: '/users',
    get: (id: string) => `/users/${id}`,
    update: (id: string) => `/users/${id}`,
    delete: (id: string) => `/users/${id}`,
  },
  dashboard: {
    stats: '/dashboard/stats',
    activity: '/dashboard/activity',
    analytics: '/dashboard/analytics',
  },
}
