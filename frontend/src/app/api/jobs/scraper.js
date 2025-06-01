import axios from 'axios';
import * as cheerio from 'cheerio';

const LINKEDIN_API_URL = process.env.JOBS_API_URL;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes cache

// Simple in-memory cache
const cache = new Map();

export const scrapeLinkedInJobs = async (jobType) => {
  try {
    // Check cache first
    const cacheKey = `jobs-${jobType}`;
    const cachedData = cache.get(cacheKey);
    if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
      console.log(`[Scraper] Cache hit for ${cacheKey}`);
      return cachedData.data;
    }
    console.log(`[Scraper] Cache miss or expired for ${cacheKey}`);

    // Construct the search parameters
    const params = new URLSearchParams({
      keywords: 'software developer',
      location: 'United States',
      start: 0,
      count: 25,
      f_TPR: 'r86400', // Last 24 hours
      sortBy: 'DD', // Sort by date
    });

    // Add job type specific filters
    switch (jobType) {
      case 'onsite':
        params.append('f_WT', '1');
        break;
      case 'remote':
        params.append('f_WT', '2');
        break;
      case 'intern':
        params.append('f_E', '1');
        break;
      default:
        break;
    }

    const requestUrl = `${LINKEDIN_API_URL}?${params.toString()}`;
    console.log(`[Scraper] Requesting URL: ${requestUrl}`);

    const response = await axios.get(requestUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://www.linkedin.com/jobs/',
        'Origin': 'https://www.linkedin.com',
        'sec-ch-ua': '"Google Chrome";v="91", "Chromium";v="91"',
        'sec-ch-ua-mobile': '?0',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
      }
    });

    console.log(`[Scraper] Received response with status: ${response.status}`);
    // console.log(`[Scraper] Response data snippet: ${response.data.substring(0, 200)}...`); // Log snippet to avoid flooding console

    // Parse the HTML response using cheerio
    const $ = cheerio.load(response.data);
    const jobs = [];

    // Get all job cards
    $('.job-card-container').each((i, element) => {
      const job = {
        id: $(element).attr('data-job-id') || Math.random().toString(36).substr(2, 9),
        title: $(element).find('.job-card-list__title').text().trim(),
        company: $(element).find('.job-card-container__company-name').text().trim(),
        location: $(element).find('.job-card-container__metadata-item').first().text().trim(),
        applyUrl: $(element).find('a').attr('href'),
        postedTime: $(element).find('.job-card-container__footer-item').text().trim(),
      };

      // Add type-specific information
      if (jobType === 'intern') {
        job.duration = $(element).find('.job-card-container__metadata-item').last().text().trim();
      } else if (jobType === 'remote') {
        job.timeZone = $(element).find('.job-card-container__metadata-item').eq(1).text().trim();
        job.workHours = $(element).find('.job-card-container__metadata-item').eq(2).text().trim();
      }

      jobs.push(job);
    });

    console.log(`[Scraper] Successfully scraped ${jobs.length} jobs.`);

    // Update cache
    cache.set(cacheKey, {
      data: jobs,
      timestamp: Date.now()
    });
    console.log(`[Scraper] Cache updated for ${cacheKey}`);

    return jobs;
  } catch (error) {
    console.error('[Scraper] Error fetching or scraping LinkedIn jobs:', error);
    // If we have cached data, return it even if expired
    const cacheKey = `jobs-${jobType}`;
    const cachedData = cache.get(cacheKey);
    if (cachedData) {
      console.log(`[Scraper] Returning expired cached data for ${cacheKey} due to error.`);
      return cachedData.data;
    }
    console.log(`[Scraper] No cached data available for ${cacheKey}.`);
    throw error;
  }
};

// Helper functions for specific job types
export const scrapeOnsiteJobs = () => scrapeLinkedInJobs('onsite');
export const scrapeRemoteJobs = () => scrapeLinkedInJobs('remote');
export const scrapeInternJobs = () => scrapeLinkedInJobs('intern'); 