import { NextResponse } from 'next/server'

export function middleware(request) {
  // Add any middleware logic here, such as:
  // - Authentication checks
  // - API route protection
  // - Redirects
  // - Headers modification
  
  return NextResponse.next()
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    // Add paths that should be protected or need middleware
    '/api/:path*',
    '/dashboard/:path*',
    '/profile/:path*',
  ],
} 