import { Link } from 'react-router-dom';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Remote Jobs', href: '/jobs' },
    { name: 'Learning Paths', href: '/learning' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: FiTwitter,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: FiLinkedin,
    },
    {
      name: 'Email',
      href: 'mailto:contact@superlearn.com',
      icon: FiMail,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-800 transition-colors duration-200">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                to={item.href}
                className="text-sm leading-6 text-gray-600 dark:text-content-dark-muted hover:text-gray-900 dark:hover:text-content-dark transition-colors duration-200"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 dark:text-content-dark-muted hover:text-gray-500 dark:hover:text-content-dark transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        
        <div className="mt-10 border-t border-gray-900/10 dark:border-dark-800 pt-8">
          <p className="text-center text-xs leading-5 text-gray-500 dark:text-content-dark-muted">
            &copy; {new Date().getFullYear()} SuperLearn. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6 text-xs text-gray-500 dark:text-content-dark-muted">
            <Link to="/privacy" className="hover:text-gray-900 dark:hover:text-content-dark">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gray-900 dark:hover:text-content-dark">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-gray-900 dark:hover:text-content-dark">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 