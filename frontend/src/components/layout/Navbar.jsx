import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { ThemeToggle } from '../ThemeProvider';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Remote Jobs', href: '/jobs' },
  { name: 'Learning Paths', href: '/learning' },
  { name: 'Resources', href: '/resources' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-surface dark:bg-surface-dark shadow-sm dark:shadow-soft-dark transition-colors duration-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-accent dark:text-accent-dark">SuperLearn</span>
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-base font-medium transition-colors duration-200 ${
                    location.pathname === link.href
                      ? 'text-accent dark:text-accent-dark'
                      : 'text-content-muted dark:text-content-dark-muted hover:text-content dark:hover:text-content-dark'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-content-muted dark:text-content-dark-muted" />
              </div>
              <input
                type="text"
                placeholder="Search jobs..."
                className="input-field pl-10 w-64 bg-surface dark:bg-surface-dark-elevated border-gray-200 dark:border-gray-700 text-content dark:text-content-dark placeholder-content-muted dark:placeholder-content-dark-muted"
              />
            </div>
            <ThemeToggle />
            <button className="btn-primary bg-accent hover:bg-accent-muted dark:bg-accent-dark dark:hover:bg-accent-dark-muted text-white">Sign In</button>
          </div>

          <div className="flex lg:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-content-muted dark:text-content-dark-muted hover:bg-gray-100 dark:hover:bg-surface-dark-hover hover:text-content dark:hover:text-content-dark"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <FiMenu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-black/30 dark:bg-black/50" aria-hidden="true" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-surface dark:bg-surface-dark px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:ring-gray-700/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold text-accent dark:text-accent-dark">SuperLearn</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-content-muted dark:text-content-dark-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <FiX className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700/10">
              <div className="space-y-2 py-6">
                {navigation.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors duration-200 ${
                      location.pathname === link.href
                        ? 'text-accent dark:text-accent-dark bg-gray-50 dark:bg-surface-dark-elevated'
                        : 'text-content dark:text-content-dark hover:bg-gray-50 dark:hover:bg-surface-dark-hover'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <div className="relative mb-4">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="h-5 w-5 text-content-muted dark:text-content-dark-muted" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search jobs..."
                    className="input-field pl-10 w-full bg-surface dark:bg-surface-dark-elevated border-gray-200 dark:border-gray-700 text-content dark:text-content-dark placeholder-content-muted dark:placeholder-content-dark-muted"
                  />
                </div>
                <button className="btn-primary bg-accent hover:bg-accent-muted dark:bg-accent-dark dark:hover:bg-accent-dark-muted text-white w-full">Sign In</button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
} 