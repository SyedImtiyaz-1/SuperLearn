import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiSearch, FiBook, FiUsers, FiAward } from 'react-icons/fi';

const features = [
  {
    name: 'Remote Job Opportunities',
    description: 'Access curated remote job listings from top companies worldwide.',
    icon: FiSearch,
  },
  {
    name: 'Structured Learning Paths',
    description: 'Follow industry-recognized learning paths to build your skills.',
    icon: FiBook,
  },
  {
    name: 'Community Support',
    description: 'Join a community of learners and professionals for guidance and networking.',
    icon: FiUsers,
  },
  {
    name: 'Career Growth',
    description: 'Track your progress and earn certifications to boost your career.',
    icon: FiAward,
  },
];

const recentJobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechCorp',
    location: 'Remote',
    type: 'Full-time',
    salary: '$80k - $120k',
    tags: ['React', 'TypeScript', 'TailwindCSS'],
  },
  {
    id: 2,
    title: 'Backend Engineer',
    company: 'DataFlow',
    location: 'Remote',
    type: 'Full-time',
    salary: '$90k - $130k',
    tags: ['Node.js', 'Python', 'AWS'],
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    company: 'CloudScale',
    location: 'Remote',
    type: 'Full-time',
    salary: '$100k - $140k',
    tags: ['Kubernetes', 'Docker', 'Terraform'],
  },
];

export default function HomePage() {
  return (
    <div className="bg-white dark:bg-dark-900 transition-colors duration-200 min-h-screen">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <motion.div
            className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Launch Your Remote Career Journey
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-content-dark">
              Discover remote job opportunities, follow structured learning paths, and join a community of professionals
              to accelerate your career growth.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/jobs"
                className="btn-primary dark:bg-accent-dark dark:hover:bg-accent-dark-muted"
              >
                Browse Jobs
                <FiArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/learning"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-content-dark-muted hover:text-primary-600 dark:hover:text-accent-dark transition-colors duration-200"
              >
                Explore Learning Paths <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-accent-dark">
            Everything You Need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Your Complete Remote Career Platform
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-content-dark-muted">
            We provide all the tools and resources you need to succeed in your remote career journey.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <feature.icon className="h-5 w-5 flex-none text-primary-600 dark:text-accent-dark" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-content-dark-muted">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>

      {/* Recent Jobs Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-accent-dark">
            Latest Opportunities
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Recent Remote Job Listings
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-content-dark-muted">
            Explore our latest remote job opportunities from top companies worldwide.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {recentJobs.map((job) => (
            <motion.div
              key={job.id}
              className="flex flex-col justify-between rounded-2xl bg-white dark:bg-dark-800 p-8 ring-1 ring-gray-200 dark:ring-dark-700 shadow-sm hover:shadow-md transition-shadow duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white">{job.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-content-dark-muted">{job.company}</p>
                <div className="mt-4 flex items-center gap-x-2 text-sm text-gray-500 dark:text-content-dark-subtle">
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                  <span>•</span>
                  <span>{job.salary}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-primary-50 dark:bg-dark-700 px-2 py-1 text-xs font-medium text-primary-700 dark:text-accent-dark ring-1 ring-inset ring-primary-600/20 dark:ring-accent-dark/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <Link
                  to={`/jobs/${job.id}`}
                  className="text-sm font-semibold leading-6 text-primary-600 dark:text-accent-dark hover:text-primary-500 dark:hover:text-accent-dark-muted transition-colors duration-200"
                >
                  View Details <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/jobs"
            className="btn-primary dark:bg-accent-dark dark:hover:bg-accent-dark-muted"
          >
            View All Jobs
            <FiArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
} 