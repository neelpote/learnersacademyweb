// Rate limiting utility for API calls
class RateLimiter {
  private cache: Map<string, { count: number; resetTime: number }> = new Map()
  
  constructor(
    private maxRequests: number = 100, // Max requests per window
    private windowMs: number = 60 * 1000 // 1 minute window
  ) {}

  isAllowed(key: string): boolean {
    const now = Date.now()
    const record = this.cache.get(key)

    if (!record || now > record.resetTime) {
      // Reset or create new record
      this.cache.set(key, {
        count: 1,
        resetTime: now + this.windowMs
      })
      return true
    }

    if (record.count >= this.maxRequests) {
      return false
    }

    record.count++
    return true
  }

  getRemainingRequests(key: string): number {
    const record = this.cache.get(key)
    if (!record || Date.now() > record.resetTime) {
      return this.maxRequests
    }
    return Math.max(0, this.maxRequests - record.count)
  }

  getResetTime(key: string): number {
    const record = this.cache.get(key)
    if (!record || Date.now() > record.resetTime) {
      return 0
    }
    return record.resetTime
  }

  // Clean up expired entries
  cleanup(): void {
    const now = Date.now()
    for (const [key, record] of this.cache.entries()) {
      if (now > record.resetTime) {
        this.cache.delete(key)
      }
    }
  }
}

// Create rate limiter instances
export const sanityRateLimiter = new RateLimiter(50, 60 * 1000) // 50 requests per minute
export const generalRateLimiter = new RateLimiter(100, 60 * 1000) // 100 requests per minute

// Client-side rate limiting for browser
export const clientRateLimit = {
  check: (key: string, maxRequests: number = 10, windowMs: number = 60 * 1000): boolean => {
    if (typeof window === 'undefined') return true // Server-side always allowed
    
    const storageKey = `rate_limit_${key}`
    const now = Date.now()
    const stored = localStorage.getItem(storageKey)
    
    let data = { count: 0, resetTime: now + windowMs }
    
    if (stored) {
      try {
        data = JSON.parse(stored)
      } catch (e) {
        // Invalid data, reset
      }
    }
    
    // Reset if window expired
    if (now > data.resetTime) {
      data = { count: 1, resetTime: now + windowMs }
      localStorage.setItem(storageKey, JSON.stringify(data))
      return true
    }
    
    // Check if limit exceeded
    if (data.count >= maxRequests) {
      return false
    }
    
    // Increment and store
    data.count++
    localStorage.setItem(storageKey, JSON.stringify(data))
    return true
  },
  
  getRemainingTime: (key: string): number => {
    if (typeof window === 'undefined') return 0
    
    const storageKey = `rate_limit_${key}`
    const stored = localStorage.getItem(storageKey)
    
    if (!stored) return 0
    
    try {
      const data = JSON.parse(stored)
      const now = Date.now()
      return Math.max(0, data.resetTime - now)
    } catch (e) {
      return 0
    }
  }
}