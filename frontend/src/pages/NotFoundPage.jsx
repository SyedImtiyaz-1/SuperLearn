import { Link } from 'react-router-dom';
import { FiHome, FiBriefcase } from 'react-icons/fi';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8 transition-colors duration-200">
      <div className="text-center">
        <p className="text-base font-semibold text-primary-600 dark:text-accent-dark">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600 dark:text-content-dark-muted">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="btn-primary dark:bg-accent-dark dark:hover:bg-accent-dark-muted flex items-center gap-2"
          >
            <FiHome className="h-5 w-5" />
            Back to Home
          </Link>
          <Link
            to="/jobs"
            className="btn-secondary dark:bg-dark-800 dark:text-content-dark dark:hover:bg-dark-700 flex items-center gap-2"
          >
            <FiBriefcase className="h-5 w-5" />
            Browse Jobs
          </Link>
        </div>
      </div>
    </div>
  );
} 