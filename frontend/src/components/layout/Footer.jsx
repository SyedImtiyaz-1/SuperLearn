'use client'

import Link from 'next/link'
import { FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-accent dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col items-center space-y-8 sm:space-y-0 sm:flex-row sm:justify-between">
        {/* Navigation Links */}
        <nav className="flex flex-col items-center space-y-2 sm:space-y-0 sm:flex-row sm:space-x-8">
          <Link href="/about" className="text-white dark:text-white hover:text-white dark:hover:text-white text-sm">About</Link>
          <Link href="/jobs" className="text-white dark:text-white hover:text-white dark:hover:text-white text-sm">Remote Jobs</Link>
          <Link href="/learning" className="text-white dark:text-white hover:text-white dark:hover:text-white text-sm">Learning Paths</Link>
          {/* Add more links as needed */}
        </nav>
        {/* Social Icons */}
        <div className="flex space-x-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white dark:text-white hover:text-white dark:hover:text-white">
            <FiTwitter className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white dark:text-white hover:text-white dark:hover:text-white">
            <FiLinkedin className="h-6 w-6" />
          </a>
          <a href="mailto:contact@superlearn.com" className="text-white dark:text-white hover:text-white dark:hover:text-white">
            <FiMail className="h-6 w-6" />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-4 border-t border-blue-200 dark:border-dark-800 text-center text-xs text-white dark:text-content-dark-muted">
        <div>
          Made with <span className="text-red-500">❤️</span> by{' '}
          <a
            href="https://linkedin.com/in/imtiyaz-sde"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white dark:hover:text-content-dark"
          >
            Syed Imtiyaz Ali
          </a>
        </div>
        <div>
          &copy; {new Date().getFullYear()} SuperLearn. All rights reserved.
        </div>
      </div>
    </footer>
  )
} 