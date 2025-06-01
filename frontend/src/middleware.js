import { NextResponse } from 'next/server'

export function middleware(request) {
  // Get the URL and check for JWT token
  const url = new URL(request.url)
  const hasJwt = url.searchParams.has('__clerk_db_jwt')
  
  // If JWT is present, create a response without it
  if (hasJwt) {
    // Store the JWT in a cookie instead
    const jwt = url.searchParams.get('__clerk_db_jwt')
    url.searchParams.delete('__clerk_db_jwt')
    
    const response = NextResponse.redirect(url)
    response.cookies.set('__clerk_db_jwt', jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/'
    })
    
    return response
  }

  return NextResponse.next()
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    // Match all routes except static files and api routes
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
} 