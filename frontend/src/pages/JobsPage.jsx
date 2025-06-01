'use client'

import { useEffect, useState, useCallback, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { FiSearch, FiFilter, FiX, FiMapPin, FiBriefcase, FiDollarSign, FiClock } from 'react-icons/fi';
import { fetchLinkedInJobs } from '../app/api/jobs/linkedin';
import axios from 'axios'; // Import axios to check for cancellation error

const employmentTypes = ['Full-time', 'Part-time', 'Contract', 'Freelance'];
const jobExperienceLevels = ['Entry Level', '1-3 years', '3-5 years', '5+ years'];
const salaryRanges = [
  'Under $50k',
  '$50k - $80k',
  '$80k - $120k',
  '$120k - $160k',
  '$160k+',
];

// Define how many jobs to fetch per page for subsequent loads
const INITIAL_LOAD_COUNT = 6; // Define how many jobs to fetch initially and for each load more

export default function JobsPage() {
  const searchParams = useSearchParams();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false); // State for loading more
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [keyword, setKeyword] = useState(''); // State for primary keyword input (reflects input value)
  const [searchTerm, setSearchTerm] = useState(''); // State that triggers the actual search
  const [currentFetchKeyword, setCurrentFetchKeyword] = useState(''); // Keyword used for current API fetch
  const [currentPage, setCurrentPage] = useState(0); // Track current page
  const [hasMore, setHasMore] = useState(true); // Track if there are more jobs
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    jobType: [], // Maps to experience levels like 'Fresher'
    employmentType: [], // Maps to Full-time, Part-time, etc.
    skills: '', // Text input for skills
    salary: [], // Keeping salary filter for now
  });
  const requestControllerRef = useRef(null); // Ref to store AbortController

  const jobType = searchParams.get('type') || 'all'; // This still determines the base fetch type (onsite, remote, intern)

  const loadJobs = useCallback(async (page, keywordToFetch, limit, signal) => {
    // Abort previous request if it exists
    if (requestControllerRef.current) {
      requestControllerRef.current.abort();
    }

    const controller = new AbortController();
    requestControllerRef.current = controller;

    try {
      if (page === 0) setLoading(true);
      else setLoadingMore(true);
      setError(null);

      // Pass the limit and signal to the API fetch call
      const data = await fetchLinkedInJobs(jobType, page, limit, keywordToFetch, controller.signal);

      if (page === 0) {
        setJobs(data);
      } else {
        setJobs(prevJobs => [...prevJobs, ...data]);
      }

      setLastUpdated(new Date());
      // Check if we received a full page based on the requested limit
      setHasMore(data.length === limit);
    } catch (err) {
      // Check if the error is an abort error
      if (axios.isCancel(err)) {
        console.log('Request aborted:', err.message);
        // Do nothing, request was intentionally cancelled
      } else {
        setError('Failed to fetch jobs. Please try again later.');
        console.error('[JobsPage] Error loading jobs:', err);
        setHasMore(false); // No more jobs if there's an error
      }
    } finally {
      if (page === 0) setLoading(false);
      else setLoadingMore(false);
      // Clear the controller ref after the request finishes or is aborted
      requestControllerRef.current = null;
    }
  }, [jobType]);

  useEffect(() => {
    setCurrentPage(0);
    setJobs([]);
    setHasMore(true);
    // Initial load and search triggered by searchTerm
    loadJobs(0, searchTerm, INITIAL_LOAD_COUNT);
    setCurrentFetchKeyword(searchTerm);

    // Cleanup function to abort request on unmount or dependency change
    return () => {
      if (requestControllerRef.current) {
        requestControllerRef.current.abort();
      }
    };
  }, [jobType, searchTerm, loadJobs]); // Depend on jobType and searchTerm

  const handleKeywordSearch = (event) => {
    event.preventDefault(); // Prevent default form submission if it exists
    // Update searchTerm to trigger the useEffect and search
    setSearchTerm(keyword);

    setCurrentPage(0);
    setJobs([]);
    setHasMore(true);
    // The actual loadJobs call is now in the useEffect triggered by setSearchTerm

    setFilters({ // Optionally reset other filters on new keyword search
      jobType: [],
      employmentType: [],
      skills: '',
      salary: [],
    });
  };

  const handleLoadMore = () => {
    if (!loadingMore && hasMore) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      // Subsequent loads now also use the initial load count (7)
      loadJobs(nextPage, currentFetchKeyword, INITIAL_LOAD_COUNT);
    }
  };

  // Apply both the text filter input and the dialog filters
  const filteredJobs = jobs.filter((job) => {
    const position = job.position?.toLowerCase() || '';
    const company = job.company?.toLowerCase() || '';
    const location = job.location?.toLowerCase() || '';

    // Dialog filters
    // Check if the job property exists before filtering
    const matchesJobType = filters.jobType.length === 0 || (job.experienceLevel && filters.jobType.includes(job.experienceLevel));
    const matchesEmploymentType = filters.employmentType.length === 0 || (job.employmentType && filters.employmentType.includes(job.employmentType));

    // Split skills input by comma, trim whitespace, and filter out empty strings
    const skillsArray = filters.skills.split(',').map(skill => skill.trim()).filter(skill => skill !== '');

    // Check if ANY entered skill is included in the job title or company
    // Note: This is a simple inclusion check and might not be perfect.
    const matchesSkills = skillsArray.length === 0 || skillsArray.some(skill =>
      position.includes(skill.toLowerCase()) ||
      company.includes(skill.toLowerCase())
    );

    const matchesSalary = filters.salary.length === 0 || (job.salaryRange && filters.salary.includes(job.salaryRange));

    return matchesJobType && matchesEmploymentType && matchesSkills && matchesSalary;
  });

  const handleFilterChange = (category, value) => {
    setFilters(prev => {
      if (category === 'skills') {
        return { ...prev, skills: value };
      } else {
        return ({
          ...prev,
          [category]: prev[category].includes(value)
            ? prev[category].filter(item => item !== value)
            : [...prev[category], value],
        });
      }
    });
  };

  const applyFilters = () => {
    setIsFilterOpen(false);
    // Filtering is applied automatically as state changes, no need to re-fetch here
  };

  const resetFilters = () => {
    setFilters({
      jobType: [],
      employmentType: [],
      skills: '',
      salary: [],
    });
    // Optionally trigger a refetch with the current keyword after resetting filters
    // handleKeywordSearch(); // Uncomment if you want resetting filters to refetch primary keyword search
    setIsFilterOpen(false);
  };


  if (loading && jobs.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  if (error && jobs.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-center">
          <p className="text-xl mb-2">{error}</p>
          <button
            onClick={handleKeywordSearch} // Retry with current keyword via search handler
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 md:gap-0">
        <h1 className="text-3xl font-bold text-center md:text-left">
          {jobType === 'intern' ? 'Internship Opportunities' :
            jobType === 'remote' ? 'Remote Jobs' :
              jobType === 'onsite' ? 'Onsite Jobs' : 'All Jobs'}
        </h1>
        <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
          {/* Display total jobs count */}
          {jobs.length > 0 && (
            <p className="text-sm text-gray-500">
              Displayed jobs: {jobs.length}
            </p>
          )}
          {lastUpdated && (
            <p className="text-sm text-gray-500">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </p>
          )}
          <button
            onClick={handleKeywordSearch} // Refresh with current keyword via search handler
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
            Refresh
          </button>
        </div>
      </div>

      {/* Keyword Search input and button */}
      <div className="mb-4 flex flex-col md:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Enter keyword (e.g., 'software engineer')"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full md:flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray dark:text-black"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleKeywordSearch(e);
            }
          }}
        />
        <button
          type="button"
          onClick={handleKeywordSearch}
          className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
        {/* Filter Button */}
        {/* <button
          onClick={() => setIsFilterOpen(true)}
          className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-2 rounded-md bg-gray-200 text-gray-800 font-bold shadow hover:bg-gray-300 transition"
        >
          <FiFilter className="h-5 w-5" />
          Filters
          
          {(filters.jobType.length > 0 ||
            filters.employmentType.length > 0 ||
            filters.skills !== '' ||
            filters.salary.length > 0) ? (
            <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
              {filters.jobType.length + filters.employmentType.length + (filters.skills !== '' ? 1 : 0) + filters.salary.length}
            </span>
          ) : null}

        </button> */}
      </div>

      {filteredJobs.length === 0 && !loading ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No jobs found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <div key={job.jobUrl || job.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{job.position}</h2>
              <p className="text-gray-600 mb-2">{job.company}</p>
              <p className="text-gray-500 mb-2">{job.location}</p>

              {jobType === 'fulltime' && (
                <p className="text-sm text-gray-500 mb-2">Type: Full-time</p>
              )}
              {jobType === 'intern' && (
                <p className="text-sm text-gray-500 mb-2">Type: Internship</p>
              )}
              {jobType === 'remote' && (
                <p className="text-sm text-gray-500 mb-2">Type: Remote</p>
              )}

              {job.agoTime && (
                <p className="text-sm text-gray-500 mb-2">Posted: {job.agoTime}</p>
              )}

              {/* Display Employment Type and Experience Level if available in data */}
              {job.employmentType && (
                <p className="text-sm text-gray-500 mb-2">Employment Type: {job.employmentType}</p>
              )}
              {job.experienceLevel && (
                <p className="text-sm text-gray-500 mb-2">Experience Level: {job.experienceLevel}</p>
              )}

              <div className="mt-4">
                <a
                  href={job.jobUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Load More Button */}
      {!loading && !loadingMore && hasMore && filteredJobs.length > 0 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2 disabled:opacity-50"
            disabled={loadingMore}
          >
            {/* Add loading spinner conditionally */}
            {loadingMore && (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"></path>
              </svg>
            )}
            Load More
          </button>
        </div>
      )}
      {!loading && !hasMore && filteredJobs.length > 0 && (
        <div className="text-center mt-8 text-gray-500">
          <p>No more jobs to load.</p>
        </div>
      )}

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

            <div className="space-y-6"> {/* This div contains all the filter options and needs to be closed before the reset button div */}
              {/* Job Type Filter (mapping to Experience Level)*/}
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Job Type</h3>
                <div className="space-y-2">
                  {jobExperienceLevels.map((level) => (
                    <label key={level} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.jobType.includes(level)}
                        onChange={() => handleFilterChange('jobType', level)}
                        className="h-4 w-4 rounded border-gray-300 dark:border-dark-700 text-primary-600 dark:text-accent-dark focus:ring-primary-500 dark:focus:ring-accent-dark"
                      />
                      <span className="ml-2 text-sm text-gray-700 dark:text-content-dark-muted">{level}</span>
                    </label>
                  ))
                  }
                </div>
              </div>

              {/* Employment Type Filter */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Employment Type</h3>
                <div className="space-y-2">
                  {employmentTypes.map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.employmentType.includes(type)}
                        onChange={() => handleFilterChange('employmentType', type)}
                        className="h-4 w-4 rounded border-gray-300 dark:border-dark-700 text-primary-600 dark:text-accent-dark focus:ring-primary-500 dark:focus:ring-accent-dark"
                      />
                      <span className="ml-2 text-sm text-gray-700 dark:text-content-dark-muted">{type}</span>
                    </label>
                  ))
                  }
                </div>
              </div>

              {/* Skills Filter */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Skills</h3>
                <input
                  type="text"
                  placeholder="e.g., Python, React"
                  value={filters.skills}
                  onChange={(e) => handleFilterChange('skills', e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="mt-1 text-sm text-gray-500 dark:text-content-dark-muted">Separate multiple skills with commas (basic inclusion check)</p>
              </div>

              {/* Salary Range Filter - Keeping for now */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Salary Range</h3>
                <div className="space-y-2">
                  {salaryRanges.map((range) => (
                    <label key={range} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.salary.includes(range)}
                        onChange={() => handleFilterChange('salary', range)}
                        className="h-4 w-4 rounded border-gray-300 dark:border-dark-700 text-primary-600 dark:text-accent-dark focus:ring-primary-500 dark:focus:ring-accent-dark"
                      />
                      <span className="ml-2 text-sm text-gray-700 dark:text-content-dark-muted">{range}</span>
                    </label>
                  ))
                  }
                </div>
              </div>
            </div> {/* Closing div for the filter options space-y-6 */}

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={resetFilters}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
              >
                Reset
              </button>
            </div>

          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}