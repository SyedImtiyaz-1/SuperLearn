import './globals.css'
import { Providers } from './providers'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export const metadata = {
  title: 'SuperLearn',
  description: 'Your learning platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <div className="min-h-screen flex flex-col bg-white dark:bg-dark-200 text-gray-900 dark:text-gray-100 transition-colors duration-200">
            <Navbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
} 