import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { FiSearch, FiFilter, FiX, FiMapPin, FiBriefcase, FiDollarSign, FiClock } from 'react-icons/fi';

// Mock job data - will be replaced with API data
const jobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechCorp',
    location: 'Remote',
    type: 'Full-time',
    salary: '$80k - $120k',
    experience: '2-4 years',
    description: 'We are looking for a skilled Frontend Developer to join our team...',
    tags: ['React', 'TypeScript', 'TailwindCSS'],
  },
  {
    id: 2,
    title: 'Backend Engineer',
    company: 'DataFlow',
    location: 'Remote',
    type: 'Full-time',
    salary: '$90k - $130k',
    experience: '3-5 years',
    description: 'Join our backend team to build scalable and efficient systems...',
    tags: ['Node.js', 'Python', 'AWS'],
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    company: 'CloudScale',
    location: 'Remote',
    type: 'Full-time',
    salary: '$100k - $140k',
    experience: '4-6 years',
    description: 'Looking for a DevOps Engineer to help us scale our infrastructure...',
    tags: ['Kubernetes', 'Docker', 'Terraform'],
  },
  // Add more mock jobs as needed
];

const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Freelance'];
const experienceLevels = ['Entry Level', '1-3 years', '3-5 years', '5+ years'];
const salaryRanges = [
  'Under $50k',
  '$50k - $80k',
  '$80k - $120k',
  '$120k - $160k',
  '$160k+',
];

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    type: [],
    experience: [],
    salary: [],
  });

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesType = filters.type.length === 0 || filters.type.includes(job.type);
    const matchesExperience = filters.experience.length === 0 || filters.experience.includes(job.experience);
    const matchesSalary = filters.salary.length === 0 || filters.salary.includes(job.salary);

    return matchesSearch && matchesType && matchesExperience && matchesSalary;
  });

  const toggleFilter = (category, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Remote Job Opportunities
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400 dark:text-content-dark-muted" />
              </div>
              <input
                type="text"
                placeholder="Search jobs by title, company, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-10 w-full dark:bg-dark-800 dark:border-dark-700 dark:text-content-dark dark:placeholder-content-dark-muted"
              />
            </div>
            <button
              onClick={() => setIsFilterOpen(true)}
              className="btn-secondary dark:bg-dark-800 dark:text-content-dark dark:hover:bg-dark-700 flex items-center justify-center gap-2"
            >
              <FiFilter className="h-5 w-5" />
              Filters
              {Object.values(filters).some(arr => arr.length > 0) && (
                <span className="inline-flex items-center rounded-full bg-primary-100 dark:bg-dark-700 px-2 py-0.5 text-xs font-medium text-primary-700 dark:text-accent-dark">
                  {Object.values(filters).reduce((acc, arr) => acc + arr.length, 0)}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Active Filters */}
        {Object.values(filters).some(arr => arr.length > 0) && (
          <div className="mb-6 flex flex-wrap gap-2">
            {Object.entries(filters).map(([category, values]) =>
              values.map((value) => (
                <span
                  key={`${category}-${value}`}
                  className="inline-flex items-center gap-1 rounded-full bg-primary-50 dark:bg-dark-700 px-3 py-1 text-sm font-medium text-primary-700 dark:text-accent-dark ring-1 ring-inset ring-primary-600/20 dark:ring-accent-dark/20"
                >
                  {value}
                  <button
                    onClick={() => toggleFilter(category, value)}
                    className="ml-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-primary-400 hover:bg-primary-100 dark:hover:bg-dark-800 hover:text-primary-500 dark:hover:text-accent-dark focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-dark"
                  >
                    <span className="sr-only">Remove filter</span>
                    <FiX className="h-3 w-3" />
                  </button>
                </span>
              ))
            )}
            <button
              onClick={() => setFilters({ type: [], experience: [], salary: [] })}
              className="text-sm font-medium text-primary-600 dark:text-accent-dark hover:text-primary-500 dark:hover:text-accent-dark-muted"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Job Listings */}
        <div className="space-y-6">
          <AnimatePresence>
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white dark:bg-dark-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {job.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 dark:text-content-dark-muted">
                        {job.company}
                      </p>
                    </div>
                    <span className="inline-flex items-center rounded-md bg-primary-50 dark:bg-dark-700 px-2 py-1 text-xs font-medium text-primary-700 dark:text-accent-dark ring-1 ring-inset ring-primary-600/20 dark:ring-accent-dark/20">
                      {job.type}
                    </span>
                  </div>
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="flex items-center text-sm text-gray-500 dark:text-content-dark-subtle">
                      <FiMapPin className="mr-1.5 h-5 w-5 flex-shrink-0" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-content-dark-subtle">
                      <FiBriefcase className="mr-1.5 h-5 w-5 flex-shrink-0" />
                      {job.experience}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-content-dark-subtle">
                      <FiDollarSign className="mr-1.5 h-5 w-5 flex-shrink-0" />
                      {job.salary}
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-600 dark:text-content-dark-muted">
                    {job.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-gray-50 dark:bg-dark-700 px-2 py-1 text-xs font-medium text-gray-600 dark:text-content-dark-muted ring-1 ring-inset ring-gray-500/10 dark:ring-dark-700/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6">
                    <button className="btn-primary dark:bg-accent-dark dark:hover:bg-accent-dark-muted w-full sm:w-auto">
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <FiSearch className="mx-auto h-12 w-12 text-gray-400 dark:text-content-dark-muted" />
            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No jobs found</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-content-dark-muted">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>

      {/* Filter Dialog */}
      <Dialog
        open={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30 dark:bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-lg rounded-2xl bg-white dark:bg-dark-800 p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <Dialog.Title className="text-lg font-semibold text-gray-900 dark:text-white">
                Filter Jobs
              </Dialog.Title>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="text-gray-400 dark:text-content-dark-muted hover:text-gray-500 dark:hover:text-content-dark"
              >
                <FiX className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Job Type Filter */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Job Type</h3>
                <div className="space-y-2">
                  {jobTypes.map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.type.includes(type)}
                        onChange={() => toggleFilter('type', type)}
                        className="h-4 w-4 rounded border-gray-300 dark:border-dark-700 text-primary-600 dark:text-accent-dark focus:ring-primary-500 dark:focus:ring-accent-dark"
                      />
                      <span className="ml-2 text-sm text-gray-700 dark:text-content-dark-muted">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Experience Level Filter */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Experience Level</h3>
                <div className="space-y-2">
                  {experienceLevels.map((level) => (
                    <label key={level} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.experience.includes(level)}
                        onChange={() => toggleFilter('experience', level)}
                        className="h-4 w-4 rounded border-gray-300 dark:border-dark-700 text-primary-600 dark:text-accent-dark focus:ring-primary-500 dark:focus:ring-accent-dark"
                      />
                      <span className="ml-2 text-sm text-gray-700 dark:text-content-dark-muted">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Salary Range Filter */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Salary Range</h3>
                <div className="space-y-2">
                  {salaryRanges.map((range) => (
                    <label key={range} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.salary.includes(range)}
                        onChange={() => toggleFilter('salary', range)}
                        className="h-4 w-4 rounded border-gray-300 dark:border-dark-700 text-primary-600 dark:text-accent-dark focus:ring-primary-500 dark:focus:ring-accent-dark"
                      />
                      <span className="ml-2 text-sm text-gray-700 dark:text-content-dark-muted">{range}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setFilters({ type: [], experience: [], salary: [] })}
                className="btn-secondary dark:bg-dark-700 dark:text-content-dark dark:hover:bg-dark-800"
              >
                Reset
              </button>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="btn-primary dark:bg-accent-dark dark:hover:bg-accent-dark-muted"
              >
                Apply Filters
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
} 