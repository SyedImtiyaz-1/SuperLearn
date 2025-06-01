'use client'

import Link from 'next/link'
import { FiHome, FiBriefcase } from 'react-icons/fi'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-6xl font-bold text-primary-600 dark:text-accent-dark">Cooking..</h1>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4 mb-2">Page Under Construction</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Page is not available right now.  
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-bold shadow hover:bg-primary-700 transition"
          >
            <FiHome className="w-5 h-5" />
            Go Home
          </Link>
          <Link
            href="/jobs"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary-600 text-white font-bold shadow hover:bg-secondary-700 transition"
          >
            <FiBriefcase className="w-5 h-5" />
            Browse Jobs
          </Link>
        </div>
      </div>
    </div>
  )
} 