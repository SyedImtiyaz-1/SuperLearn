'use client'

import { ThemeProvider } from 'next-themes'
import { ClerkProvider } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

export function Providers({ children }) {
  const router = useRouter()

  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: 'bg-primary-600 hover:bg-primary-700',
          footerActionLink: 'text-primary-600 hover:text-primary-700',
        },
      }}
      navigate={(to) => {
        // Prevent JWT from being added to URL
        const url = new URL(to, window.location.origin)
        url.searchParams.delete('__clerk_db_jwt')
        
        // Use replace instead of push to prevent URL flashing
        router.replace(url.pathname + url.search)
      }}
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      afterSignInUrl="/"
      afterSignUpUrl="/"
    >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </ClerkProvider>
  )
} 