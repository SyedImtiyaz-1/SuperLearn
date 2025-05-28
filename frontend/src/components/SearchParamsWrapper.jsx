"use client";
import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function SearchParamsWrapper({ children }) {
  const [mounted, setMounted] = useState(false)
  const [params, setParams] = useState(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    setMounted(true)
    if (searchParams) {
      setParams(Object.fromEntries(searchParams.entries()))
    }
  }, [searchParams])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    )
  }

  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    }>
      {children}
    </Suspense>
  )
} 