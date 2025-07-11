'use client'

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { Dialog } from '@headlessui/react';
import { FiMenu, FiX, FiSearch, FiBriefcase, FiMap, FiFlag, FiCalendar, FiGlobe, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";

const navigation = [
  {
    name: 'Jobs',
    icon: FiBriefcase,
    dropdown: [
      { name: 'All Jobs', href: '/jobs?type=fulltime' },
      { name: 'Intern', href: '/jobs?type=intern' },
      { name: 'Remote', href: '/jobs?type=remote' },
    ],
  },
  {
    name: 'Roadmaps',
    icon: FiMap,
    dropdown: [
      { name: 'DSA', href: '/roadmaps/dsa' },
      { name: 'Web2', href: '/roadmaps/web2' },
      { name: 'Web3', href: '/roadmaps/web3' },
      { name: 'OS Roadmap', href: '/roadmaps/open-source' },
    ],
  },
  {
    name: 'Hackathons',
    icon: FiFlag,
    dropdown: [
      { name: 'Ongoing', href: '/hackathons/ongoing' },
      { name: 'Upcoming', href: '/hackathons/upcoming' },
    ],
  },
  {
    name: 'Events',
    icon: FiCalendar,
    dropdown: [
      { name: 'Webinars', href: '/events/webinars' },
      { name: 'Bootcamps', href: '/events/bootcamps' },
      { name: 'Conferences', href: '/events/conferences' },
    ],
  },
  {
    name: 'News',
    icon: FiGlobe,
    dropdown: [
      { name: 'Tech Trends', href: '/news/tech-trends' },
      { name: 'Startups', href: '/news/startups' },
    ],
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const dropdownRefs = useRef({});
  const [stats, setStats] = useState({
    linkedinFollowers: 0,
    whatsappCommunity: 0,
  });
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { user } = useUser();

  // Ensure theme toggle is only rendered on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      const anyOpen = Object.values(dropdownRefs.current).some(ref => ref && ref.contains(event.target));
      if (!anyOpen) setOpenDropdown(null);
    }
    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  useEffect(() => {
    fetch('/api/community-stats')
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);

  const isActive = (href) => {
    if (href.includes('?')) {
      const [path, query] = href.split('?');
      return path === pathname && searchParams.toString() === query;
    }
    return pathname === href || pathname.startsWith(href + '/');
  };

  const ThemeToggle = () => {
    if (!mounted) return null;
    return (
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-2 rounded-lg bg-surface dark:bg-surface-dark text-content dark:text-content-dark hover:bg-gray-100 dark:hover:bg-surface-dark-hover transition-colors duration-200"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <FiSun className="w-5 h-5 text-white" />
        ) : (
          <FiMoon className="w-5 h-5 text-black-400" />
        )}
      </button>
    );
  };

  return (
    <header className="bg-accent dark:bg-surface-dark shadow-sm dark:shadow-soft-dark transition-colors duration-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">SuperLearn</span>
            </Link>
            <div className="hidden lg:block ml-10">
              <div>
                <div className="flex flex-nowrap space-x-6">
                  {navigation.map((link) => (
                    <div
                      className="relative"
                      key={link.name}
                      ref={el => (dropdownRefs.current[link.name] = el)}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                        className={`flex items-center gap-1 text-base font-medium transition-colors duration-200 whitespace-nowrap focus:outline-none ${
                          isActive(link.dropdown?.[0]?.href.split('?')[0] || link.href)
                            ? 'text-blue-50 dark:text-white drop-shadow-sm'
                            : 'text-blue-100 dark:text-white hover:text-blue-50 dark:hover:text-white drop-shadow-sm'
                        }`}
                      >
                        <link.icon className="mr-1 mb-0.5" />
                        {link.name}
                        <span className="ml-1">&#9662;</span>
                      </button>
                      {openDropdown === link.name && (
                        <div className="absolute left-0 z-50 mt-2 w-56 max-w-[90vw] rounded-xl bg-accent dark:bg-dark-800 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none py-2">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className={`block px-4 py-2 text-sm rounded-md transition-colors duration-150 whitespace-nowrap ${
                                isActive(item.href)
                                  ? 'bg-blue-100 dark:bg-dark-700 text-accent dark:text-accent-dark'
                                  : 'text-white hover:text-white hover:bg-blue-400 dark:hover:bg-dark-700'
                              }`}
                              onClick={() => setOpenDropdown(null)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-content-muted dark:text-content-dark-muted" />
              </div>
              <input
                type="text"
                placeholder="Search jobs, roadmaps, etc."
                className="input-field pl-10 w-64 bg-surface dark:bg-surface-dark-elevated border-gray-200 dark:border-gray-700 text-content dark:text-content-dark placeholder-content-muted dark:placeholder-content-dark-muted"
              />
            </div>
            <ThemeToggle />
            {/* <SignedIn>
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold">Hi, {user?.firstName || user?.username || "there"}</span>
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <button className="block w-full text-center px-2 py-1 text-base font-semibold leading-7 text-white border border-white rounded-xl hover:bg-white/10 transition">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut> */}
          </div>

          <div className="flex lg:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-content-muted dark:text-content-dark-muted hover:bg-gray-100 dark:hover:bg-surface-dark-hover hover:text-content dark:hover:text-content-dark"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <FiMenu className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-black/30 dark:bg-black/50" aria-hidden="true" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-accent dark:bg-surface-dark px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:ring-gray-700/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold text-white">SuperLearn</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white dark:text-content-dark-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <FiX className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700/10">
              <div className="space-y-2 py-6">
                {navigation.map((link, idx) => (
                  <div key={link.name} className="">
                    <button
                      className="flex items-center gap-2 w-full px-3 py-2 text-base font-semibold leading-7 transition-colors duration-200 whitespace-nowrap text-white hover:text-white focus:outline-none"
                      onClick={() => setOpenMobileDropdown(openMobileDropdown === idx ? null : idx)}
                      aria-expanded={openMobileDropdown === idx}
                    >
                      {link.icon && <link.icon className="mr-1 mb-0.5 text-white" />}
                      {link.name}
                      <span className="ml-1 text-white">&#9662;</span>
                    </button>
                    {openMobileDropdown === idx && (
                      <div className="mt-2 space-y-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-3 py-2 text-sm rounded-md transition-colors duration-150 ${
                              isActive(item.href)
                                ? 'bg-blue-100 dark:bg-dark-700 text-accent dark:text-accent-dark'
                                : 'text-white hover:text-white hover:bg-blue-400 dark:hover:bg-dark-700'
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="py-6">
                <SignedIn>
                  <div className="flex items-center gap-2 justify-center">
                    <span className="text-white font-semibold">Hi, {user?.firstName || user?.username || "there"}</span>
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </SignedIn>
                <SignedOut>
                  <SignInButton>
                    <button className="block w-full text-center px-2 py-1 text-base font-semibold leading-7 text-white border border-white rounded-xl hover:bg-white/10 transition">
                      Sign In
                    </button>
                  </SignInButton>
                </SignedOut>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
} 